const CACHE_NAME = 'school-weather-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json'
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
    // בדיקה שזו בקשה שנוכל לטפל בה
    if (!shouldHandleRequest(event.request)) {
        return;
    }

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
                // בדיקה שהתשובה תקינה ושהבקשה שאנחנו יכולים לשמור במטמון
                if (!response || response.status !== 200 || response.type !== 'basic' || 
                    event.request.url.includes('api.openweathermap.org')) {
                    return response;
                }
                
                // שכפל את התשובה כי אפשר להשתמש בזרם תשובות רק פעם אחת
                const responseToCache = response.clone();
                
                // שמור את התשובה במטמון - רק אם סוג הבקשה מתאים
                if (shouldCacheRequest(event.request)) {
                    caches.open(CACHE_NAME)
                    .then(cache => {
                        try {
                            cache.put(event.request, responseToCache);
                        } catch (error) {
                            console.error('שגיאה בשמירת בקשה במטמון:', error);
                        }
                    });
                }
                
                return response;
            });
        })
        .catch(error => {
            console.error('שגיאה בעת אחזור משאב:', error);
            // אפשר להחזיר כאן תשובת גיבוי למקרה של שגיאה
        })
    );
});

// פונקציה שבודקת אם צריך לטפל בבקשה
function shouldHandleRequest(request) {
    // טיפול רק בבקשות HTTP/HTTPS
    if (!request.url.startsWith('http')) {
        return false;
    }
    
    // אין טיפול בבקשות chrome-extension
    if (request.url.startsWith('chrome-extension://')) {
        return false;
    }
    
    return true;
}

// פונקציה שבודקת אם צריך לשמור את הבקשה במטמון
function shouldCacheRequest(request) {
    // שמור רק בקשות HTTP/HTTPS
    if (!request.url.startsWith('http')) {
        return false;
    }
    
    // לא שומר במטמון בקשות chrome-extension
    if (request.url.startsWith('chrome-extension://')) {
        return false;
    }
    
    // לא שומר במטמון בקשות API מזג אוויר (כי הן משתנות)
    if (request.url.includes('api.openweathermap.org')) {
        return false;
    }
    
    return true;
}

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
