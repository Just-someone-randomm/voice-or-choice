self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('voice-or-choice-v1').then(cache => {
      return cache.addAll(['/', '/manifest.json']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});