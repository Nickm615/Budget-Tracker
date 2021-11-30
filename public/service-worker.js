const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/db.js',
    '/styles.css',
    '/index.js',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];
  
const PRECACHE = 'precache-budget';
const RUNTIME = 'runtime-budget';
  
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches
        .open(PRECACHE)
        .then((cache) => cache.addAll(FILES_TO_CACHE))
        .then(self.skipWaiting())
    );
});
  