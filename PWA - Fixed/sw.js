self.addEventListener('install', function(event) {
    var cacheName = 'static-cache';
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(
                [
                    '/',
                    'index.html',
                    'manifest.json',
                    'src/css/style.css',
                    'src/js/index.js',
                    'src/images/maps/55.PNG',
                    'src/images/maps/amare-la-cucina.PNG',
                    'src/images/maps/army.PNG',
                    'src/images/maps/baguio-central-park.PNG',
                    'src/images/maps/barn.PNG',
                    'src/images/maps/central.PNG',
                    'src/images/maps/chicken.PNG',
                    'src/images/maps/chil.PNG',
                    'src/images/maps/chocolate.PNG',
                    'src/images/maps/chow.PNG',
                    'src/images/maps/date.PNG',
                    'src/images/maps/dev.PNG',
                    'src/images/maps/diner.PNG',
                    'src/images/maps/don.PNG',
                    'src/images/maps/forest.PNG',
                    'src/images/maps/frok.PNG',
                    'src/images/maps/garden.PNG',
                    'src/images/maps/gerry.PNG',
                    'src/images/maps/good-taste.PNG',
                    'src/images/maps/grump-joe.PNG',
                    'src/images/maps/gulay.PNG',
                    'src/images/maps/hill.PNG',
                    'src/images/maps/hodori.PNG',
                    'src/images/maps/home.PNG',
                    'src/images/maps/korean-palace.PNG',
                    'src/images/maps/kuya.PNG',
                    'src/images/maps/mang-inasal.PNG',
                    'src/images/maps/mario.PNG',
                    'src/images/maps/pamana.PNG',
                    'src/images/maps/park.PNG',
                    'src/images/maps/pearl-meat-korean-restaurant.PNG',
                    'src/images/maps/red.PNG',
                    'src/images/maps/red2.PNG',
                    'src/images/maps/ruins.PNG',
                    'src/images/maps/seoul.PNG',
                    'src/images/maps/shake.PNG',
                    'src/images/maps/solibao-burnham.png',
                    'src/images/maps/trad.PNG',
                    'src/images/maps/tros.PNG',
                    'src/images/maps/wood-nymph.PNG',
                    'src/images/maps/zark.PNG',
                    'https://fonts.googleapis.com/css?family=Open+Sans'
                ]
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open('mysite-dynamic').then(function(cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});