//when the service worker is installed
self.addEventListener('install', function (event) {
    console.log('SW Installed');
    //waiting to activate
    event.waitUntil(
        caches.open('static')
            .then(function (cache) {
                // cache.add('/');
                // cache.add('/index.html');
                // cache.add('/src/js/app.js');
                cache.addAll([
                    '/',
                    '/index.html',
                    '/src/js/index.js',
                    '/src/css/style.css',
                    '/src/images/chinese1.jpg',
                    '/src/images/italian1.jpg',
                    '/src/images/italian2.jpg',
                    '/src/images/italian3.jpg',
                    '/src/images/italian4.jpg',
                    '/src/images/italian5.jpg',
                    '/src/images/italian6.jpg',
                    '/src/images/korean1.jpg',
                    '/src/images/korean2.jpg',
                    '/src/images/korean3.jpg',
                    '/src/images/korean4.jpg',
                    '/src/images/korean5.jpg',
                    '/src/images/korean6.jpg',
                    '/src/images/korean7.jpg',
                    '/src/images/korean8.jpg',
                    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
                    'https://fonts.googleapis.com/css?family=Open+Sans'
                ]);
            })
    );
});
//updtate
self.addEventListener('activate', function () {
    console.log('SW Activated');
});

//if you are disconnected in a network it will work
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(res) {
                if (res) {
                    //get the request
                    return res;
                } else {
                    //make network request
                    return fetch(event.request);
                }
            })
    );
});