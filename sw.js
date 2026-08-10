/* Service Worker
   Eigene Dateien: Netzwerk zuerst, Cache nur als Rückfall (offline).
   Fremde Bibliotheken: Cache zuerst, die ändern sich nie.
   Dadurch siehst du Änderungen sofort, bleibst aber offline nutzbar. */

const CACHE = 'planer-v2';

const CORE = [
  './', './index.html', './style.css', './app.js', './config.js', './manifest.json', './icon.svg',
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(CORE.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = e.request.url;
  if (e.request.method !== 'GET') return;
  // Anmeldung und Kalender nie zwischenspeichern
  if (url.includes('googleapis.com') || url.includes('accounts.google.com')) return;

  const sameOrigin = url.startsWith(self.location.origin);

  if (sameOrigin) {
    // Netzwerk zuerst: neue Fassung gewinnt, Cache springt nur offline ein
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        })
        .catch(() => caches.match(e.request).then((hit) => hit || caches.match('./index.html')))
    );
    return;
  }

  // Fremde Dateien: Cache zuerst
  e.respondWith(
    caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
      }
      return res;
    }))
  );
});
