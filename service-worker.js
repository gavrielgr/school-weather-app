// Import OneSignal
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');

const CACHE_NAME = 'school-weather-v5'; // שנה את המספר בכל עדכון
// בשורה זו תוכל לכפות עדכון של קבצים ספציפיים בכל פעם
const ALWAYS_REFRESH_FILES = ['/index.html'];

const urlsToCache = [
    '/school-weather-app/',
    '/school-weather-app/index.html',
    '/school-weather-app/styles.css',
    '/school-weather-app/script.js',
    '/school-weather-app/manifest.json'
];

// הוסף אירוע התקנה שיכריח מחיקת כל המטמונים הקודמים
self.addEventListener('install', event => {
    self.skipWaiting(); // גורם לשירות עובד החדש להיכנס לפעולה מיד
    
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
        // בדיקה אם הקובץ נמצא ברשימת "תמיד לרענן"
        ALWAYS_REFRESH_FILES.some(file => event.request.url.endsWith(file))
        ? 
        // אם כן - קודם מנסים מהרשת ואז מהמטמון
        fetch(event.request)
            .then(response => {
                // אם הבקשה הצליחה, נשמור במטמון ונחזיר
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });
                return response;
            })
            .catch(() => {
                // אם נכשל, ננסה מהמטמון
                return caches.match(event.request);
            })
        :
        // אחרת - קודם מהמטמון ואז מהרשת (הקוד המקורי שלך)
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
    event.waitUntil(
        // מחיקת כל המטמונים הישנים
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('מוחק מטמון ישן:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // הודע לכל החלונות הפתוחים לרענן
            return self.clients.matchAll().then(clients => {
                return Promise.all(clients.map(client => {
                    return client.postMessage({
                        type: 'REFRESH_APP',
                        version: CACHE_NAME
                    });
                }));
            });
        })
    );
});
