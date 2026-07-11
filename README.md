# Wind Waker Compass 🧭

An offline-first, installable walkthrough and 100%-completion tracker for
**The Legend of Zelda: The Wind Waker** on the **original Nintendo GameCube**
(2002/2003) — built with love, for one very specific sailor.

Everything here matches the GameCube original, never the HD remaster: the
Tingle Tuner (not the Tingle Bottle), no Swift Sail, all **8** Triforce Charts
at 398 rupees each, **41** Treasure Charts, the Forest Firefly for the Deluxe
Picto Box, and the rest.

## Running it

No build step, no dependencies. Serve the folder over HTTP and open it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

(A service worker needs `http://localhost` or `https://` — opening
`index.html` straight from disk works for browsing, but offline caching and
install require a server.)

### Installing on a phone

Host the folder anywhere static (GitHub Pages works perfectly), open the URL
in the phone's browser, and use **Add to Home Screen**. After the first load,
the app works fully offline — checkbox progress is saved on the device
(localStorage), and Settings has JSON **export/import** for backups. No
accounts, no analytics, no network calls.

## Editing the dedication

The welcome-screen message lives in **one obvious place** at the top of
[`js/app.js`](js/app.js):

```js
var DEDICATION_TITLE = 'Welcome aboard, hero.';
var DEDICATION = 'Happy adventuring, Austin — love, Kathryn';
```

## Project layout

| File | What it is |
|---|---|
| `index.html` | App shell: header, bottom nav, script loading |
| `css/styles.css` | Great Sea theme — dark mode default, light mode included |
| `js/data/collectibles.js` | Registry of all 341 trackable items (exact GameCube counts) |
| `js/data/chapters.js` | The walkthrough chapters (written one at a time) |
| `js/store.js` | localStorage state, export/import |
| `js/app.js` | Hash router + all views |
| `service-worker.js` | Precache-everything, cache-first offline support |
| `manifest.json`, `icons/` | PWA install metadata and icons |

## Shipping an update

Bump `CACHE_VERSION` in `service-worker.js` whenever files change so
installed copies fetch the new assets on their next launch.
