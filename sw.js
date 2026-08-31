/* Service Worker
   Eigene Dateien: Netzwerk zuerst, Cache nur als Rückfall (offline).
   Fremde Bibliotheken: Cache zuerst, die ändern sich nie.
   Dadurch siehst du Änderungen sofort, bleibst aber offline nutzbar. */

const CACHE = 'planer-v3';

const CORE = [
  './', './index.html', './style.css', './app.js', './verse.js', './config.js', './manifest.json', './icon.svg',
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

/* ── Erinnerungen bei geschlossener App ─────────────────────
   Der Push-Dienst schickt nur ein leeres Wecksignal — was ansteht, steht
   hier im Gerät. Deshalb weiss auswaerts niemand, was du vorhast. */
function terminspeicherOeffnen() {
  return new Promise((fertig, schiefgelaufen) => {
    const anfrage = indexedDB.open('planer-hinweise', 1);
    anfrage.onupgradeneeded = () => {
      if (!anfrage.result.objectStoreNames.contains('termine'))
        anfrage.result.createObjectStore('termine', { keyPath: 'id' });
    };
    anfrage.onsuccess = () => fertig(anfrage.result);
    anfrage.onerror = () => schiefgelaufen(anfrage.error);
  });
}

function alleTermine(db) {
  return new Promise((fertig) => {
    try {
      const anfrage = db.transaction('termine', 'readonly').objectStore('termine').getAll();
      anfrage.onsuccess = () => fertig(anfrage.result || []);
      anfrage.onerror = () => fertig([]);
    } catch (e) { fertig([]); }
  });
}

function terminLoeschen(db, id) {
  return new Promise((fertig) => {
    try {
      const anfrage = db.transaction('termine', 'readwrite').objectStore('termine').delete(id);
      anfrage.onsuccess = anfrage.onerror = () => fertig();
    } catch (e) { fertig(); }
  });
}

self.addEventListener('push', (e) => {
  e.waitUntil((async () => {
    let db;
    try { db = await terminspeicherOeffnen(); } catch (err) { db = null; }
    const jetzt = Date.now();
    const termine = db ? await alleTermine(db) : [];
    /* Faellig ist, was jetzt dran ist oder knapp verpasst wurde */
    const dran = termine
      .filter((t) => t.weckzeit <= jetzt + 60000 && t.weckzeit > jetzt - 600000)
      .sort((a, b) => a.weckzeit - b.weckzeit);

    if (!dran.length) {
      /* Kein passender Eintrag: lieber ein schlichter Hinweis als gar keiner,
         sonst verlangt der Browser spaeter das Push-Recht zurueck. */
      await self.registration.showNotification('Wochenplaner', {
        body: 'Gleich geht etwas los.', icon: 'icon-192.png', tag: 'planer-allgemein',
      });
      return;
    }
    for (const t of dran) {
      await self.registration.showNotification(t.titel || 'Termin', {
        body: t.text || '', icon: 'icon-192.png', badge: 'icon-192.png',
        tag: 'planer-' + t.id,
      });
      if (db) await terminLoeschen(db, t.id);
    }
  })());
});

/* Antippen bringt den Planer nach vorne */
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil((async () => {
    const fenster = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const f of fenster) {
      if (f.url.includes(self.location.origin) && 'focus' in f) return f.focus();
    }
    if (self.clients.openWindow) return self.clients.openWindow('./index.html');
  })());
});

self.addEventListener('fetch', (e) => {
  const url = e.request.url;
  if (e.request.method !== 'GET') return;
  // Anmeldung und Kalender nie zwischenspeichern
  if (url.includes('googleapis.com') || url.includes('accounts.google.com')) return;

  const sameOrigin = url.startsWith(self.location.origin);

  if (sameOrigin) {
    // Netzwerk zuerst: neue Fassung gewinnt, Cache springt nur offline ein.
    // 'no-store' geht am Zwischenspeicher des Browsers vorbei. Ohne das
    // liefert GitHub Pages bis zu zehn Minuten lang (max-age=600) die alte
    // Fassung, und eine frisch veroeffentlichte Aenderung kaeme erst
    // verspaetet an. Der eigene Cache unten bleibt davon unberuehrt und
    // traegt weiterhin den Offline-Betrieb.
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
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
