/* ==========================================================================
   Wind Waker Compass — service worker
   Precaches every asset so the app works fully offline after the first load.

   TO SHIP AN UPDATE: bump CACHE_VERSION below. The new worker installs with a
   fresh cache, and old caches are deleted on activate.
   ========================================================================== */

var CACHE_VERSION = 'wwc-v3';

var PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/store.js',
  './js/app.js',
  './js/data/collectibles.js',
  './js/data/chapters.js',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(function (cache) { return cache.addAll(PRECACHE_URLS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        if (key !== CACHE_VERSION) return caches.delete(key);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Cache-first: everything the app needs is precached, so offline just works.
   Anything not in the cache falls back to the network (and is then cached),
   which keeps same-origin additions working without a version bump. */
self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(function (cached) {
      if (cached) return cached;
      return fetch(event.request).then(function (response) {
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          var copy = response.clone();
          caches.open(CACHE_VERSION).then(function (cache) { cache.put(event.request, copy); });
        }
        return response;
      });
    })
  );
});
