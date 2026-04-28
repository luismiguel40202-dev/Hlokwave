const CACHE_NAME = 'hlokwave-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// Instalar la aplicación en el sistema
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Hacer que la app funcione aunque no haya señal
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
