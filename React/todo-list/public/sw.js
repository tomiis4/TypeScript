self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // Tento listener je nutný pro instalaci, i když nic nedělá
  event.respondWith(fetch(event.request));
});
