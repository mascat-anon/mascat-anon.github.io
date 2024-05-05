// Cache name
const CACHE_NAME = 'Bus Information Board System-caches-v3.74V2';
// Cache targets
const urlsToCache = [
  './',
  './common/KBS-Disp-JP.woff"',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});
