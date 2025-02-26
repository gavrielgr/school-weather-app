const CACHE_NAME = 'school-weather-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json'
    // הסרתי את הקבצים שאינם קיימים כרגע כמו favicon.ico והאייקונים
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('המטמון נפתח בהצלחה');
            return cache.addAll(urlsToCache);
        })
        .catch(error => {
            console.error('שגיאה בעת שמירת קבצים במטמון:', error);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            // החזר את התשובה מהמטמון אם היא קיימת
            if (response) {
                return response;
            }
            
            // אחרת, הבא את הבקשה מהרשת
            return fetch(event.request)
            .then(response => {
                // אין טעם לשמור במטמון אם התשובה לא תקינה או אם זו תשובה של API מזג אוויר
                if (!response || response.status !== 200 || response.type !== 'basic' || 
                    event.request.url.includes('api.openweathermap.org')) {
                    return response;
                }
                
                // שכפל את התשובה כי אפשר להשתמש בזרם תשובות רק פעם אחת
                const responseToCache = response.clone();
                
                // שמור את התשובה במטמון
                caches.open(CACHE_NAME)
                .then(cache => {
                    cache.put(event.request, responseToCache);
                });
                
                return response;
            });
        })
        .catch(error => {
            console.error('שגיאה בעת אחזור משאב:', error);
            // אפשר להחזיר כאן תשובת גיבוי למקרה של שגיאה
        })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
