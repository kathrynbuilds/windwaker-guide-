/* ==========================================================================
   Wind Waker Compass — store.js
   All persistent state lives here, in localStorage. Nothing ever leaves the
   device: no server, no account, no analytics.

   Keys:
     wwc.progress.v1  -> { checked: { "<id>": true } }
                         ids are collectible ids (e.g. "heart-01") or
                         walkthrough step ids prefixed "step:" (e.g. "step:c1-a-1")
     wwc.settings.v1  -> { darkMode, spoilerHidden, lastChapter, welcomed }
     wwc.collapse.v1  -> { "<sectionId>": true }   (true = collapsed)
   ========================================================================== */

var WWC_STORE = (function () {
  var PROGRESS_KEY = 'wwc.progress.v1';
  var SETTINGS_KEY = 'wwc.settings.v1';
  var COLLAPSE_KEY = 'wwc.collapse.v1';

  var DEFAULT_SETTINGS = {
    darkMode: true,       // dark by default — nice for evening gaming sessions
    spoilerHidden: false, // when true, boss names / story beats are blurred
    lastChapter: null,    // last chapter number visited, for "continue" button
    welcomed: false       // welcome screen shown once on first launch
  };

  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* storage full or unavailable — app still works, just won't persist */
    }
  }

  var progress = load(PROGRESS_KEY, { checked: {} });
  if (!progress.checked) progress.checked = {};
  var settings = Object.assign({}, DEFAULT_SETTINGS, load(SETTINGS_KEY, {}));
  var collapse = load(COLLAPSE_KEY, {});

  /* Simple pub/sub so every view (dashboard, chapter, checklist) stays in
     sync when a checkbox is toggled anywhere. */
  var listeners = [];
  function subscribe(fn) { listeners.push(fn); }
  function emit(what, id) {
    for (var i = 0; i < listeners.length; i++) listeners[i](what, id);
  }

  return {
    /* ---- checked state (shared by walkthrough callouts + checklists) ---- */
    isChecked: function (id) {
      return progress.checked[id] === true;
    },
    setChecked: function (id, value) {
      if (value) progress.checked[id] = true;
      else delete progress.checked[id];
      save(PROGRESS_KEY, progress);
      emit('check', id);
    },
    toggle: function (id) {
      this.setChecked(id, !this.isChecked(id));
      return this.isChecked(id);
    },
    countChecked: function (ids) {
      var n = 0;
      for (var i = 0; i < ids.length; i++) if (progress.checked[ids[i]]) n++;
      return n;
    },

    /* ---- settings ---- */
    getSetting: function (name) { return settings[name]; },
    setSetting: function (name, value) {
      settings[name] = value;
      save(SETTINGS_KEY, settings);
      emit('setting', name);
    },
    /* Same as setSetting but without notifying views — used for bookkeeping
       like lastChapter, where a re-render mid-render would be harmful. */
    setSettingQuiet: function (name, value) {
      settings[name] = value;
      save(SETTINGS_KEY, settings);
    },

    /* ---- per-section collapse memory ---- */
    isCollapsed: function (sectionId, defaultCollapsed) {
      if (Object.prototype.hasOwnProperty.call(collapse, sectionId)) {
        return collapse[sectionId] === true;
      }
      return defaultCollapsed === true;
    },
    setCollapsed: function (sectionId, value) {
      collapse[sectionId] = value === true;
      save(COLLAPSE_KEY, collapse);
    },

    /* ---- backup: export / import everything as one JSON blob ---- */
    exportJSON: function () {
      return JSON.stringify({
        app: 'wind-waker-compass',
        version: 1,
        exportedAt: new Date().toISOString(),
        progress: progress,
        settings: settings,
        collapse: collapse
      }, null, 2);
    },
    importJSON: function (text) {
      var data = JSON.parse(text); // throws on bad JSON — caller shows the error
      if (!data || data.app !== 'wind-waker-compass' || !data.progress) {
        throw new Error('Not a Wind Waker Compass backup file.');
      }
      progress = data.progress;
      if (!progress.checked) progress.checked = {};
      settings = Object.assign({}, DEFAULT_SETTINGS, data.settings || {});
      collapse = data.collapse || {};
      save(PROGRESS_KEY, progress);
      save(SETTINGS_KEY, settings);
      save(COLLAPSE_KEY, collapse);
      emit('import');
    },
    resetAll: function () {
      progress = { checked: {} };
      settings = Object.assign({}, DEFAULT_SETTINGS, { welcomed: true });
      collapse = {};
      save(PROGRESS_KEY, progress);
      save(SETTINGS_KEY, settings);
      save(COLLAPSE_KEY, collapse);
      emit('import');
    },

    subscribe: subscribe
  };
})();
