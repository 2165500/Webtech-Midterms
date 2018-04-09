(function() {
    'use strict';

    var CACHE_NAME = 'static-cache';

    var urlsToCache = [
        '/',
        '/index.html',
        '/filipino.html',
        '/chinese.html',
        '/korean.html',
        '/italian.html',
        '/american.html',
        '/src/js/index.js',
        '/src/css/style.css',
        '/src/images/chinese1.jpg',
        '/src/images/96x96.png',
        '/src/images/144x144.png',
        '/src/images/256x256.png',
        '/src/images/512x512.png',
        '/src/images/web.png',
        '/src/images/location.png',
        '/src/images/chinese1.jpg',
        '/src/images/filipino1.JPG',
        '/src/images/filipino2.jpg',
        '/src/images/filipino3.JPG',
        '/src/images/filipino4.jpg',
        '/src/images/filipino5.jpg',
        '/src/images/filipino6.png',
        '/src/images/filipino7.jpg',
        '/src/images/filipino8.jpg',
        '/src/images/filipino9.JPG',
        '/src/images/filipino10.JPG',
        '/src/images/filipino11.JPG',
        '/src/images/filipino12.JPG',
        '/src/images/filipino13.jpg',
        '/src/images/italian1.jpg',
        '/src/images/italian2.jpg',
        '/src/images/italian3.jpg',
        '/src/images/italian4.JPG',
        '/src/images/italian5.jpg',
        '/src/images/italian6.jpg',
        '/src/images/korean1.jpg',
        '/src/images/korean2.jpg',
        '/src/images/korean3.jpg',
        '/src/images/korean4.JPG',
        '/src/images/korean5.jpg',
        '/src/images/korean6.jpg',
        '/src/images/korean7.jpg',
        '/src/images/korean8.jpg',
        'https://fonts.googleapis.com/css?family=Open+Sans',
        '/src/images/maps/55.PNG',
        '/src/images/maps/amare-la-cucina.PNG',
        '/src/images/maps/army.PNG',
        '/src/images/maps/baguio-central-park.PNG',
        '/src/images/maps/barn.PNG',
        '/src/images/maps/central.PNG',
        '/src/images/maps/chicken.PNG',
        '/src/images/maps/chil.PNG',
        '/src/images/maps/chocolate.PNG',
        '/src/images/maps/chow.PNG',
        '/src/images/maps/date.PNG',
        '/src/images/maps/dev.PNG',
        '/src/images/maps/diner.PNG',
        '/src/images/maps/don.PNG',
        '/src/images/maps/forest.PNG',
        '/src/images/maps/frok.PNG',
        '/src/images/maps/garden.PNG',
        '/src/images/maps/gerry.PNG',
        '/src/images/maps/good-taste.PNG',
        '/src/images/maps/grump-joe.PNG',
        '/src/images/maps/gulay.PNG',
        '/src/images/maps/hill.PNG',
        '/src/images/maps/hodori.PNG',
        '/src/images/maps/home.PNG',
        '/src/images/maps/korean-palace.PNG',
        '/src/images/maps/kuya.PNG',
        '/src/images/maps/mang-inasal.PNG',
        '/src/images/maps/mario.PNG',
        '/src/images/maps/pamana.PNG',
        '/src/images/maps/park.PNG',
        '/src/images/maps/pearl-meat-korean-restaurant.PNG',
        '/src/images/maps/red.PNG',
        '/src/images/maps/red2.PNG',
        '/src/images/maps/ruins.PNG',
        '/src/images/maps/seoul.PNG',
        '/src/images/maps/shake.PNG',
        '/src/images/maps/solibao-burnham.PNG',
        '/src/images/maps/trad.PNG',
        '/src/images/maps/tros.PNG',
        '/src/images/maps/wood-nymph.PNG',
        '/src/images/maps/zark.PNG'
    ];

    self.addEventListener('install', function(event) {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function(cache) {
                    return cache.addAll(urlsToCache);
                })
        );
    });

    self.addEventListener('fetch', function(event) {
        event.respondWith(
            caches.match(event.request)
                .then(function(response) {
                    return response || fetchAndCache(event.request);
                })
        );
    });

    function fetchAndCache(url) {
        return fetch(url)
            .then(function(response) {
                //To check if a valid response is received
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return caches.open(CACHE_NAME)
                    .then(function(cache) {
                        cache.put(url, response.clone());
                        return response;
                    });
            })
            .catch(function(error) {
                console.log('Request failed:', error);
            });
    }

})();
