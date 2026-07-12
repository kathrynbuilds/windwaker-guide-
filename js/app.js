/* ==========================================================================
   Wind Waker Compass — app.js
   Hash router + all view renderers. No frameworks, no build step.

   Routes:
     #/welcome          first-launch greeting
     #/dashboard        overall progress + category tiles
     #/chapters         chapter list
     #/chapter/3        one walkthrough chapter (optionally ?step=<id>)
     #/checklists       category index
     #/checklist/hearts one category checklist
     #/search           full-text search
     #/settings         theme, spoilers, backup
   ========================================================================== */

/* --------------------------------------------------------------------------
   ✏️  EDIT ME: the personal dedication shown on the welcome screen.
   -------------------------------------------------------------------------- */
var DEDICATION_TITLE = 'Welcome aboard, hero.';
var DEDICATION = 'Happy adventuring, Austin — love, Kathryn';
var DEDICATION_SUB = 'Your complete guide and 100% tracker for The Wind Waker on GameCube. Everything works offline — the Great Sea awaits.';

(function () {
  'use strict';

  var view = document.getElementById('view');
  var DATA = window.WWC_DATA;

  /* ------------------------------------------------------------------------
     Small helpers
     ------------------------------------------------------------------------ */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* Render step/intro text: escape HTML, then turn {{spoiler:...}} into a
     tap-to-reveal blurred chip when the spoiler setting is on. */
  function renderText(raw) {
    var hidden = WWC_STORE.getSetting('spoilerHidden');
    var escaped = esc(raw);
    return escaped.replace(/\{\{spoiler:([\s\S]*?)\}\}/g, function (m, inner) {
      if (!hidden) return inner;
      return '<span class="spoiler" role="button" tabindex="0" title="Tap to reveal">' + inner + '</span>';
    });
  }

  /* Strip spoiler markup for search indexing / plain contexts. */
  function plainText(raw) {
    return String(raw == null ? '' : raw).replace(/\{\{spoiler:([\s\S]*?)\}\}/g, '$1');
  }

  function maybeSpoiler(name) {
    if (!name) return '';
    if (WWC_STORE.getSetting('spoilerHidden')) {
      return '<span class="spoiler" role="button" tabindex="0" title="Tap to reveal">' + esc(name) + '</span>';
    }
    return esc(name);
  }

  function progressBar(done, total, label) {
    var pct = total > 0 ? Math.round((done / total) * 100) : 0;
    return '' +
      '<div class="progress-row">' +
        (label ? '<div class="progress-label"><span>' + esc(label) + '</span>' +
                 '<span class="frac">' + done + '/' + total + '</span></div>' : '') +
        '<div class="progress-track"><div class="progress-fill' + (done >= total && total > 0 ? ' full' : '') + '" style="width:' + pct + '%"></div></div>' +
      '</div>';
  }

  var toastEl = null;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  }

  /* ------------------------------------------------------------------------
     Data lookups
     ------------------------------------------------------------------------ */
  var byId = {};
  DATA.collectibles.forEach(function (c) { byId[c.id] = c; });

  function categoryItems(catId) {
    return DATA.collectibles.filter(function (c) { return c.category === catId; });
  }

  function categoryStats(catId) {
    var items = categoryItems(catId);
    var ids = items.map(function (c) { return c.id; });
    return { done: WWC_STORE.countChecked(ids), total: items.length };
  }

  function overallStats() {
    var done = 0, total = 0;
    DATA.categories.forEach(function (cat) {
      var s = categoryStats(cat.id);
      done += s.done; total += s.total;
    });
    return { done: done, total: total };
  }

  /* Every checkable id in a chapter: its steps plus every collectible its
     callouts reference (this is what drives the per-chapter bar). */
  function chapterIds(ch) {
    var ids = [];
    (ch.sections || []).forEach(function (sec) {
      (sec.steps || []).forEach(function (st) {
        ids.push('step:' + st.id);
        (st.callouts || []).forEach(function (co) {
          if (byId[co.refId] && ids.indexOf(co.refId) === -1) ids.push(co.refId);
        });
      });
    });
    return ids;
  }

  function chapterStats(ch) {
    var ids = chapterIds(ch);
    return { done: WWC_STORE.countChecked(ids), total: ids.length };
  }

  /* ------------------------------------------------------------------------
     Router
     ------------------------------------------------------------------------ */
  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '');
    var qIndex = h.indexOf('?');
    var query = {};
    if (qIndex !== -1) {
      h.substring(qIndex + 1).split('&').forEach(function (pair) {
        var kv = pair.split('=');
        query[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || '');
      });
      h = h.substring(0, qIndex);
    }
    var parts = h.split('/').filter(Boolean);
    return { parts: parts, query: query };
  }

  function navActive(name) {
    document.querySelectorAll('.bottom-nav a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-nav') === name);
    });
  }

  var currentRender = null; // re-run on store changes

  function route() {
    var r = parseHash();
    var p = r.parts;

    if (p.length === 0) {
      // First ever launch → welcome; afterwards → dashboard
      location.hash = WWC_STORE.getSetting('welcomed') ? '#/dashboard' : '#/welcome';
      return;
    }

    switch (p[0]) {
      case 'welcome':   currentRender = renderWelcome; break;
      case 'dashboard': currentRender = renderDashboard; break;
      case 'chapters':  currentRender = renderChapterList; break;
      case 'chapter':   currentRender = function () { renderChapter(parseInt(p[1], 10), r.query); }; break;
      case 'checklists':currentRender = renderChecklistIndex; break;
      case 'checklist': currentRender = function () { renderChecklist(p[1]); }; break;
      case 'search':    currentRender = renderSearch; break;
      case 'settings':  currentRender = renderSettings; break;
      default:          currentRender = renderDashboard;
    }
    currentRender();
    window.scrollTo(0, 0);
  }

  /* Re-render the current view when state changes elsewhere, keeping the
     scroll position so a checkbox tap doesn't jump the page. */
  var suppressRerender = false;
  WWC_STORE.subscribe(function () {
    if (suppressRerender || !currentRender) return;
    var y = window.scrollY;
    currentRender();
    window.scrollTo(0, y);
  });

  /* ------------------------------------------------------------------------
     Views
     ------------------------------------------------------------------------ */
  function renderWelcome() {
    navActive('');
    view.innerHTML = '' +
      '<div class="welcome">' +
        '<svg class="compass-hero" viewBox="0 0 120 120" aria-hidden="true">' +
          '<circle cx="60" cy="60" r="54" fill="none" stroke="#e9c46a" stroke-width="4"/>' +
          '<circle cx="60" cy="60" r="46" fill="none" stroke="#48b1bf" stroke-width="1.5" opacity="0.6"/>' +
          '<polygon points="60,14 68,60 60,106 52,60" fill="#f4d35e"/>' +
          '<polygon points="14,60 60,52 106,60 60,68" fill="#48b1bf"/>' +
          '<polygon points="60,34 68,48 52,48" fill="#e9c46a"/>' +
          '<polygon points="52,50 60,64 44,64" fill="#e9c46a" opacity="0.85"/>' +
          '<polygon points="68,50 76,64 60,64" fill="#e9c46a" opacity="0.85"/>' +
          '<circle cx="60" cy="60" r="6" fill="#f5e6c8"/>' +
        '</svg>' +
        '<h1>' + esc(DEDICATION_TITLE) + '</h1>' +
        '<p class="dedication">&ldquo;' + esc(DEDICATION) + '&rdquo;</p>' +
        '<p class="muted">' + esc(DEDICATION_SUB) + '</p>' +
        '<p><button class="btn primary" id="set-sail">Set sail</button></p>' +
      '</div>';
    document.getElementById('set-sail').addEventListener('click', function () {
      WWC_STORE.setSetting('welcomed', true);
      location.hash = '#/dashboard';
    });
  }

  function renderDashboard() {
    navActive('dashboard');
    var o = overallStats();
    var pct = o.total ? (Math.floor((o.done / o.total) * 1000) / 10) : 0;
    var last = WWC_STORE.getSetting('lastChapter');
    var lastCh = last ? DATA.chapters.filter(function (c) { return c.number === last; })[0] : null;

    var html = '<h1>Dashboard</h1>' +
      '<div class="card overall-card">' +
        '<div class="overall-pct">' + pct + '%</div>' +
        '<div class="overall-sub">' + o.done + ' of ' + o.total + ' trackable things found across the Great Sea</div>' +
        progressBar(o.done, o.total, '') +
      '</div>';

    if (lastCh) {
      html += '<a class="card" href="#/chapter/' + lastCh.number + '">' +
        '<div class="chapter-link"><div class="chapter-num">' + lastCh.number + '</div>' +
        '<div class="chapter-info"><div class="chapter-sub">Continue where you left off</div>' +
        '<div class="chapter-title">' + esc(lastCh.title) + '</div></div></div></a>';
    } else {
      html += '<a class="card" href="#/chapter/1">' +
        '<div class="chapter-link"><div class="chapter-num">1</div>' +
        '<div class="chapter-info"><div class="chapter-sub">Begin the adventure</div>' +
        '<div class="chapter-title">' + esc(DATA.chapters[0].title) + '</div></div></div></a>';
    }

    html += '<h2>Collections</h2><div class="cat-grid">';
    DATA.categories.forEach(function (cat) {
      var s = categoryStats(cat.id);
      var pctc = s.total ? Math.round((s.done / s.total) * 100) : 0;
      html += '<a class="cat-tile" href="#/checklist/' + cat.id + '">' +
        '<div class="cat-name">' + esc(cat.name) + '</div>' +
        '<div class="frac">' + s.done + '/' + s.total + '</div>' +
        '<div class="progress-track"><div class="progress-fill' + (s.done >= s.total && s.total > 0 ? ' full' : '') + '" style="width:' + pctc + '%"></div></div>' +
      '</a>';
    });
    html += '</div>';
    view.innerHTML = html;
  }

  function renderChapterList() {
    navActive('chapters');
    var html = '<h1>Chapters</h1><p class="lead">The full journey, in walkthrough order.</p>';
    DATA.chapters.forEach(function (ch) {
      var s = chapterStats(ch);
      var hasContent = s.total > 0;
      var pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
      html += '<a class="card' + (hasContent ? '' : ' chapter-soon') + '" href="#/chapter/' + ch.number + '">' +
        '<div class="chapter-link">' +
          '<div class="chapter-num">' + ch.number + '</div>' +
          '<div class="chapter-info">' +
            '<div class="chapter-title">' + esc(ch.title) + '</div>' +
            '<div class="chapter-sub">' +
              (ch.bossName ? 'Boss: ' + maybeSpoiler(ch.bossName) : 'No boss') +
              (hasContent ? '' : ' &middot; content coming soon') +
            '</div>' +
            (hasContent
              ? '<div class="progress-track"><div class="progress-fill' + (s.done >= s.total ? ' full' : '') + '" style="width:' + pct + '%"></div></div>'
              : '') +
          '</div>' +
        '</div>' +
      '</a>';
    });
    view.innerHTML = html;
    wireSpoilers();
  }

  var CALLOUT_TYPE_LABELS = {
    item: 'Item', heart: 'Heart Piece', treasureChart: 'Treasure Chart',
    triforceChart: 'Triforce Chart', specialChart: 'Special Chart',
    figurine: 'Figurine', secret: 'Secret', upgrade: 'Upgrade',
    song: 'Song', bottle: 'Bottle', fairy: 'Great Fairy', sidequest: 'Side Quest'
  };

  function renderChapter(num, query) {
    navActive('chapters');
    var ch = DATA.chapters.filter(function (c) { return c.number === num; })[0];
    if (!ch) { view.innerHTML = '<h1>Chapter not found</h1>'; return; }
    WWC_STORE.setSettingQuiet('lastChapter', num);

    var s = chapterStats(ch);
    var hasContent = s.total > 0;

    var html = '<h1>' + ch.number + '. ' + esc(ch.title) + '</h1>';
    if (ch.bossName) html += '<p class="muted">Boss: ' + maybeSpoiler(ch.bossName) + '</p>';
    if (hasContent) html += progressBar(s.done, s.total, 'Chapter progress');
    html += '<p class="chapter-intro">' + renderText(ch.intro || '') + '</p>';

    if (!hasContent) {
      html += '<div class="card center"><p><strong>This chapter’s walkthrough is on its way.</strong></p>' +
        '<p class="muted">Chapters are being written one at a time, in order, so every detail can be checked against the GameCube original.</p></div>';
    }

    (ch.sections || []).forEach(function (sec) {
      var collapsed = WWC_STORE.isCollapsed(sec.id, sec.collapsedByDefault);
      var secIds = [];
      (sec.steps || []).forEach(function (st) {
        secIds.push('step:' + st.id);
        (st.callouts || []).forEach(function (co) { if (byId[co.refId]) secIds.push(co.refId); });
      });
      var secDone = WWC_STORE.countChecked(secIds);

      html += '<div class="section" data-sec="' + esc(sec.id) + '">' +
        '<button class="section-head" aria-expanded="' + (!collapsed) + '" data-sec-toggle="' + esc(sec.id) + '">' +
          '<span>' + renderText(sec.title) + '</span>' +
          '<span class="sec-count">' + secDone + '/' + secIds.length + '</span>' +
          '<svg class="chev" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>' +
        '</button>' +
        '<div class="section-body"' + (collapsed ? ' hidden' : '') + '>';

      (sec.steps || []).forEach(function (st) {
        var stepKey = 'step:' + st.id;
        var done = WWC_STORE.isChecked(stepKey);
        html += '<div class="step' + (done ? ' done' : '') + '" id="' + esc(st.id) + '">' +
          '<label class="step-check"><input type="checkbox" class="big-check" data-check="' + esc(stepKey) + '"' + (done ? ' checked' : '') + '></label>' +
          '<div class="step-body"><p class="step-text">' + renderText(st.text) + '</p>';

        if (st.callouts && st.callouts.length) {
          html += '<div class="callouts">';
          st.callouts.forEach(function (co) {
            var c = byId[co.refId];
            if (!c) return;
            var cDone = WWC_STORE.isChecked(c.id);
            html += '<div class="callout' + (cDone ? ' done' : '') + '" data-type="' + esc(co.type) + '">' +
              '<label><input type="checkbox" class="big-check" data-check="' + esc(c.id) + '"' + (cDone ? ' checked' : '') + '></label>' +
              '<div class="co-main" data-expand>' +
                '<div class="co-type">' + esc(CALLOUT_TYPE_LABELS[co.type] || co.type) +
                  (c.missable ? ' <span class="badge missable">Missable</span>' : '') +
                  (co.later ? ' <span class="badge later">Return later</span>' : '') +
                '</div>' +
                '<div class="co-label">' + renderText(co.label || c.name) + '</div>' +
                '<div class="co-detail">' + renderText(c.locationText) + (c.howTo ? '<br>' + renderText(c.howTo) : '') + '</div>' +
              '</div>' +
            '</div>';
          });
          html += '</div>';
        }
        html += '</div></div>';
      });

      html += '</div></div>';
    });

    /* prev / next chapter */
    var prev = DATA.chapters.filter(function (c) { return c.number === num - 1; })[0];
    var next = DATA.chapters.filter(function (c) { return c.number === num + 1; })[0];
    html += '<div class="chapter-nav-row">' +
      (prev ? '<a class="btn" href="#/chapter/' + prev.number + '">&larr; ' + esc(prev.title) + '</a>' : '') +
      (next ? '<a class="btn" href="#/chapter/' + next.number + '">' + esc(next.title) + ' &rarr;</a>' : '') +
      '</div>';

    view.innerHTML = html;
    wireChecks();
    wireSpoilers();
    wireCalloutExpand();
    wireSectionToggles();

    /* deep link from search: scroll to a step */
    if (query && query.step) {
      var target = document.getElementById(query.step);
      if (target) {
        target.scrollIntoView({ block: 'center' });
        target.style.outline = '2px solid var(--gold-bright)';
        target.style.borderRadius = '10px';
        setTimeout(function () { target.style.outline = ''; }, 2500);
      }
    }
  }

  function renderChecklistIndex() {
    navActive('checklists');
    var html = '<h1>Checklists</h1><p class="lead">Every collectible category, with exact GameCube totals.</p>';
    DATA.categories.forEach(function (cat) {
      var s = categoryStats(cat.id);
      var pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
      html += '<a class="card" href="#/checklist/' + cat.id + '">' +
        '<div class="progress-label"><span>' + esc(cat.name) + '</span><span class="frac">' + s.done + '/' + s.total + '</span></div>' +
        '<div class="progress-track"><div class="progress-fill' + (s.done >= s.total && s.total > 0 ? ' full' : '') + '" style="width:' + pct + '%"></div></div>' +
        (cat.blurb ? '<div class="muted" style="margin-top:6px">' + esc(cat.blurb) + '</div>' : '') +
      '</a>';
    });
    view.innerHTML = html;
  }

  function renderChecklist(catId) {
    navActive('checklists');
    var cat = DATA.categories.filter(function (c) { return c.id === catId; })[0];
    if (!cat) { view.innerHTML = '<h1>Checklist not found</h1>'; return; }
    var items = categoryItems(catId);
    var s = categoryStats(catId);

    var html = '<h1>' + esc(cat.name) + '</h1>';
    if (cat.blurb) html += '<p class="lead">' + esc(cat.blurb) + '</p>';
    html += progressBar(s.done, s.total, 'Found');

    var lastGroup = null;
    html += '<div class="card">';
    items.forEach(function (c) {
      if (c.group && c.group !== lastGroup) {
        html += '<h2>' + esc(c.group) + '</h2>';
        lastGroup = c.group;
      }
      var done = WWC_STORE.isChecked(c.id);
      html += '<div class="check-item' + (done ? ' done' : '') + '">' +
        '<label><input type="checkbox" class="big-check" data-check="' + esc(c.id) + '"' + (done ? ' checked' : '') + '></label>' +
        '<div class="ci-main" data-expand>' +
          '<div class="ci-name">' + renderText(c.name) +
            (c.missable ? ' <span class="badge missable">Missable</span>' : '') +
          '</div>' +
          '<div class="ci-loc">' + renderText(c.locationText || '') +
            (c.chapterHint ? ' <span class="badge count">Ch. ' + esc(String(c.chapterHint)) + '</span>' : '') +
          '</div>' +
          (c.howTo ? '<div class="ci-how">' + renderText(c.howTo) + '</div>' : '') +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    view.innerHTML = html;
    wireChecks();
    wireSpoilers();
    wireCalloutExpand();
  }

  /* ------------------------- search ------------------------- */
  var searchIndex = null;
  function buildSearchIndex() {
    if (searchIndex) return searchIndex;
    searchIndex = [];
    DATA.chapters.forEach(function (ch) {
      (ch.sections || []).forEach(function (sec) {
        (sec.steps || []).forEach(function (st) {
          searchIndex.push({
            kind: 'step',
            where: 'Ch. ' + ch.number + ' — ' + ch.title,
            text: plainText(st.text),
            href: '#/chapter/' + ch.number + '?step=' + encodeURIComponent(st.id)
          });
        });
      });
    });
    DATA.collectibles.forEach(function (c) {
      var catName = (DATA.categories.filter(function (k) { return k.id === c.category; })[0] || {}).name || c.category;
      searchIndex.push({
        kind: 'collectible',
        where: catName,
        text: plainText(c.name) + ' — ' + plainText(c.locationText || '') + ' ' + plainText(c.howTo || ''),
        href: '#/checklist/' + c.category
      });
    });
    return searchIndex;
  }

  var lastQuery = '';
  function renderSearch() {
    navActive('search');
    view.innerHTML = '<h1>Search</h1>' +
      '<input class="search-box" id="search-input" type="search" placeholder="Steps, collectibles, locations&hellip;" value="' + esc(lastQuery) + '" autocomplete="off">' +
      '<div id="search-results"></div>';
    var input = document.getElementById('search-input');
    var results = document.getElementById('search-results');

    function run() {
      lastQuery = input.value;
      var q = input.value.trim().toLowerCase();
      if (q.length < 2) { results.innerHTML = '<p class="muted center">Type at least 2 characters.</p>'; return; }
      var idx = buildSearchIndex();
      var hits = [];
      for (var i = 0; i < idx.length && hits.length < 60; i++) {
        var pos = idx[i].text.toLowerCase().indexOf(q);
        if (pos !== -1) hits.push({ e: idx[i], pos: pos });
      }
      if (!hits.length) { results.innerHTML = '<p class="muted center">Nothing found. Try another word?</p>'; return; }
      var html = '';
      hits.forEach(function (h) {
        var t = h.e.text;
        var start = Math.max(0, h.pos - 50);
        var end = Math.min(t.length, h.pos + q.length + 90);
        var snippet = (start > 0 ? '&hellip;' : '') +
          esc(t.substring(start, h.pos)) +
          '<mark>' + esc(t.substr(h.pos, q.length)) + '</mark>' +
          esc(t.substring(h.pos + q.length, end)) +
          (end < t.length ? '&hellip;' : '');
        html += '<a class="card search-hit" href="' + h.e.href + '">' +
          '<div class="sh-where">' + esc(h.e.where) + '</div>' +
          '<div>' + snippet + '</div></a>';
      });
      results.innerHTML = html;
    }
    input.addEventListener('input', run);
    input.focus();
    run();
  }

  /* ------------------------- settings ------------------------- */
  function renderSettings() {
    navActive('settings');
    var dark = WWC_STORE.getSetting('darkMode');
    var spoil = WWC_STORE.getSetting('spoilerHidden');

    view.innerHTML = '<h1>Settings</h1>' +
      '<div class="card">' +
        '<div class="setting-row">' +
          '<div><div class="setting-name">Dark mode</div><div class="setting-desc">Easy on the eyes for evening sessions.</div></div>' +
          '<label class="switch"><input type="checkbox" id="set-dark"' + (dark ? ' checked' : '') + '><span class="slider"></span></label>' +
        '</div>' +
        '<div class="setting-row">' +
          '<div><div class="setting-name">Hide spoilers</div><div class="setting-desc">Blur boss names and story beats until tapped.</div></div>' +
          '<label class="switch"><input type="checkbox" id="set-spoiler"' + (spoil ? ' checked' : '') + '><span class="slider"></span></label>' +
        '</div>' +
      '</div>' +

      '<h2>Backup</h2>' +
      '<div class="card">' +
        '<p class="muted">Your progress lives only on this device. Export a backup file to keep it safe or move it to another phone. No account, no cloud, no tracking &mdash; ever.</p>' +
        '<div class="btn-row">' +
          '<button class="btn primary" id="btn-export">Export progress</button>' +
          '<button class="btn" id="btn-import">Import from file</button>' +
          '<input type="file" id="import-file" accept="application/json,.json" hidden>' +
        '</div>' +
        '<details><summary class="muted" style="cursor:pointer">Paste a backup instead</summary>' +
          '<textarea class="io-area" id="io-area" placeholder="Paste exported JSON here&hellip;"></textarea>' +
          '<div class="btn-row"><button class="btn" id="btn-import-text">Import pasted text</button></div>' +
        '</details>' +
      '</div>' +

      '<h2>Danger zone</h2>' +
      '<div class="card">' +
        '<div class="btn-row"><button class="btn danger" id="btn-reset">Reset all progress</button></div>' +
        '<p class="muted">This clears every checkbox and setting on this device. Export first!</p>' +
      '</div>' +

      '<p class="center"><a href="#/welcome" class="muted">View the welcome screen again</a></p>' +
      '<p class="center muted">Wind Waker Compass &mdash; made with love for the GameCube original.</p>';

    document.getElementById('set-dark').addEventListener('change', function (e) {
      WWC_STORE.setSetting('darkMode', e.target.checked);
      applyTheme();
    });
    document.getElementById('set-spoiler').addEventListener('change', function (e) {
      WWC_STORE.setSetting('spoilerHidden', e.target.checked);
      toast(e.target.checked ? 'Spoilers hidden' : 'Spoilers shown');
    });

    document.getElementById('btn-export').addEventListener('click', function () {
      var blob = new Blob([WWC_STORE.exportJSON()], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      var d = new Date();
      a.download = 'wind-waker-compass-backup-' + d.toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 5000);
      toast('Backup downloaded');
    });

    var fileInput = document.getElementById('import-file');
    document.getElementById('btn-import').addEventListener('click', function () { fileInput.click(); });
    fileInput.addEventListener('change', function () {
      var f = fileInput.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () { doImport(String(reader.result)); };
      reader.readAsText(f);
    });
    document.getElementById('btn-import-text').addEventListener('click', function () {
      doImport(document.getElementById('io-area').value);
    });
    function doImport(text) {
      try {
        WWC_STORE.importJSON(text);
        applyTheme();
        toast('Progress imported!');
        renderSettings();
      } catch (e) {
        toast('Import failed: ' + e.message);
      }
    }

    document.getElementById('btn-reset').addEventListener('click', function () {
      if (confirm('Really reset ALL progress and settings on this device?')) {
        WWC_STORE.resetAll();
        applyTheme();
        toast('Everything reset');
        renderSettings();
      }
    });
  }

  /* ------------------------------------------------------------------------
     Shared wiring
     ------------------------------------------------------------------------ */
  function wireChecks() {
    view.querySelectorAll('input[data-check]').forEach(function (box) {
      box.addEventListener('change', function () {
        suppressRerender = true;
        WWC_STORE.setChecked(box.getAttribute('data-check'), box.checked);
        suppressRerender = false;
        /* update surrounding row style + all progress numbers in place */
        var host = box.closest('.step, .callout, .check-item');
        if (host) host.classList.toggle('done', box.checked);
        refreshCounters();
      });
    });
  }

  /* Recompute every visible progress bar / counter without a full re-render. */
  function refreshCounters() {
    var r = parseHash();
    if (r.parts[0] === 'chapter') {
      var ch = DATA.chapters.filter(function (c) { return c.number === parseInt(r.parts[1], 10); })[0];
      if (!ch) return;
      var s = chapterStats(ch);
      var bar = view.querySelector('.progress-row .progress-fill');
      var frac = view.querySelector('.progress-row .frac');
      if (bar) bar.style.width = (s.total ? Math.round((s.done / s.total) * 100) : 0) + '%';
      if (frac) frac.textContent = s.done + '/' + s.total;
      /* per-section counts */
      view.querySelectorAll('.section').forEach(function (secEl) {
        var ids = [];
        secEl.querySelectorAll('input[data-check]').forEach(function (b) { ids.push(b.getAttribute('data-check')); });
        var done = WWC_STORE.countChecked(ids);
        var el = secEl.querySelector('.sec-count');
        if (el) el.textContent = done + '/' + ids.length;
      });
    } else if (r.parts[0] === 'checklist') {
      var s2 = categoryStats(r.parts[1]);
      var bar2 = view.querySelector('.progress-fill');
      var frac2 = view.querySelector('.frac');
      if (bar2) bar2.style.width = (s2.total ? Math.round((s2.done / s2.total) * 100) : 0) + '%';
      if (frac2) frac2.textContent = s2.done + '/' + s2.total;
    }
  }

  function wireSpoilers() {
    view.querySelectorAll('.spoiler').forEach(function (el) {
      function reveal(e) {
        e.preventDefault();
        e.stopPropagation();
        el.classList.toggle('revealed');
      }
      el.addEventListener('click', reveal);
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') reveal(e); });
    });
  }

  function wireCalloutExpand() {
    view.querySelectorAll('[data-expand]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        if (e.target.closest('.spoiler') || e.target.closest('a')) return;
        var host = el.closest('.callout, .check-item');
        if (host) host.classList.toggle('open');
      });
    });
  }

  function wireSectionToggles() {
    view.querySelectorAll('[data-sec-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var secId = btn.getAttribute('data-sec-toggle');
        var body = btn.parentElement.querySelector('.section-body');
        var nowCollapsed = !body.hidden;
        body.hidden = nowCollapsed;
        btn.setAttribute('aria-expanded', String(!nowCollapsed));
        WWC_STORE.setCollapsed(secId, nowCollapsed);
      });
    });
  }

  /* ------------------------------------------------------------------------
     Theme
     ------------------------------------------------------------------------ */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', WWC_STORE.getSetting('darkMode') ? 'dark' : 'light');
  }
  document.getElementById('theme-toggle').addEventListener('click', function () {
    WWC_STORE.setSetting('darkMode', !WWC_STORE.getSetting('darkMode'));
    applyTheme();
  });

  /* ------------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------------ */
  applyTheme();
  window.addEventListener('hashchange', route);
  route();
})();
