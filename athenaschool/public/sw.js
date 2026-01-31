const CACHE_NAME = 'athena-v3';
const STATIC_CACHE = 'athena-static-v3';
const DYNAMIC_CACHE = 'athena-dynamic-v3';
const IMAGE_CACHE = 'athena-images-v3';

// Critical assets to cache immediately
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/sw.js'
];

// Static assets that can be cached aggressively
const STATIC_ASSETS = [
  '/assets/js/vendor-react-*.js',
  '/assets/js/vendor-router-*.js', 
  '/assets/js/vendor-icons-*.js',
  '/assets/css/*.css'
];

// Install event - cache critical resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(CRITICAL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Fetch event - implement different caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Different strategies for different resource types
  if (url.origin === self.location.origin) {
    // Same origin requests
    if (url.pathname.includes('/assets/')) {
      // Static assets - Cache First
      event.respondWith(cacheFirst(request, STATIC_CACHE));
    } else if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|avif)$/i)) {
      // Images - Cache First with longer TTL
      event.respondWith(cacheFirst(request, IMAGE_CACHE));
    } else {
      // HTML pages - Network First
      event.respondWith(networkFirst(request, DYNAMIC_CACHE));
    }
  } else {
    // External requests (CDN, APIs) - Network First with short TTL
    event.respondWith(networkFirst(request, DYNAMIC_CACHE, 5 * 60 * 1000)); // 5 minutes
  }
});

// Cache First strategy
function cacheFirst(request, cacheName) {
  return caches.open(cacheName).then(cache => {
    return cache.match(request).then(response => {
      if (response) {
        return response;
      }
      return fetch(request).then(response => {
        if (response.ok) {
          cache.put(request, response.clone());
        }
        return response;
      });
    });
  });
}

// Network First strategy with TTL
function networkFirst(request, cacheName, maxAge = 24 * 60 * 60 * 1000) { // 24 hours default
  return caches.open(cacheName).then(cache => {
    return cache.match(request).then(cachedResponse => {
      // Check if cached response is still valid
      if (cachedResponse) {
        const dateHeader = cachedResponse.headers.get('date');
        if (dateHeader) {
          const cachedTime = new Date(dateHeader).getTime();
          const now = Date.now();
          if (now - cachedTime < maxAge) {
            return cachedResponse;
          }
        }
      }

      // Try network first
      return fetch(request).then(response => {
        if (response.ok) {
          cache.put(request, response.clone());
        }
        return response;
      }).catch(() => {
        // Network failed, return cached version if available
        return cachedResponse || new Response('Offline', { status: 503 });
      });
    });
  });
}

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheName.startsWith('athena-') || 
              !['athena-v3', 'athena-static-v3', 'athena-dynamic-v3', 'athena-images-v3'].includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
