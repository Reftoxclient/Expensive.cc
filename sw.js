// sw.js – простой пример сервис-воркера для кэширования файлов
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('expensive-cache').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/manifest.json',
        '/assets/emulator.apk',
        '/assets/photoo.png',
        '/assets/photoo.png',
        '/assets/photoo.png',
        '/assets/photoo.png',
        '/assets/photoo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
