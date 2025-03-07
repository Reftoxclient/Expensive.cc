// sw.js — упрощённый пример

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install');
  // Можно закэшировать нужные файлы
  event.waitUntil(
    caches.open('expensive-cache').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/manifest.json',
        // добавьте нужные ресурсы
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activate');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});