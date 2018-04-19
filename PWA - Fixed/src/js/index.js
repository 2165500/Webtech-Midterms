//if the user use a browser that is not supported by the browser
//then it will throw an error. This line of code will check if
//service worker exist.
if ('serviceWorker' in navigator) {
    //to register the service the worker, it service worker exist
    //it will override
    navigator.serviceWorker.register('sw.js').then(function() {
        console.log('SW registered');
    });
}


var path = window.location.href;
var index = path.lastIndexOf("/");

var requestURL = path.substr(0, index) + '/src/js/data.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var data = request.response;

    createModals(data, 'all');
    showRestaurants(data, 'all');

    var links = document.getElementsByClassName('link-category');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            e.preventDefault();
            showRestaurants(data, e.target.id);
        });
    }
}

function createModals(jsonObj, cat) {
    var resto = jsonObj['restaurants'];
    var contentWrap = document.getElementById('contents-wrap');

    for (var i = 0; i < resto.length; i++) {
        var category = resto[i].category;
        var location = resto[i].location;
        var locationImg = resto[i].locationImg;

        if (cat == 'all') {
            var modal = document.createElement("div");
            modal.id = "locationModal-" + i;
            modal.className = "modalDialog";
            modal.innerHTML = '<div class="inner"><a href="#close" title="Close" class="close">X</a><h2>' + location + '</h2><img src="' + locationImg + '" alt=""></div>';

            contentWrap.appendChild(modal);
        } else {
            if (cat == category.toLowerCase()) {
                var modal = document.createElement("div");
                modal.id = "locationModal-" + i;
                modal.className = "modalDialog";
                modal.innerHTML = '<div class="inner"><a href="#close" title="Close" class="close">X</a><h2>' + location + '</h2><img src="' + locationImg + '" alt=""></div>';

                contentWrap.appendChild(modal);
            }
        }
    }
}

function showRestaurants(jsonObj, cat) {
    var resto = jsonObj['restaurants'];

    var contentWrap = document.getElementById('contents-wrap');
    contentWrap.innerHTML = '';
    createModals(jsonObj, cat);

    for (var i = 0; i < resto.length; i++) {
        var name = resto[i].name;
        var imageurl = resto[i].imageurl;
        var category = resto[i].category;
        var price = resto[i].price;
        var description = resto[i].description;
        var location = resto[i].location;
        var website = resto[i].website;

        if (cat == 'all') {
            var hold = document.createElement("div");
            hold.className = "hold";
            hold.innerHTML = '<div class="rest ' + category.toLowerCase() + '"><p class="categoryAndPrice">' + category + '<br><em>Price: ' + price + '</em></p><img src="' + imageurl + '" /><div class="info"><h1>' + name.toUpperCase() + '</h1><p class="desc">' + description + '</p><div class="linkHold"><a href="' + website + '" target="_blank"><img src="src/images/icons/web.png" alt="">Website</a><a href="#locationModal-' + i + '"><img src="src/images/icons/location.png" alt="">Location</a></div></div></div>';

            contentWrap.appendChild(hold);
        } else {
            if (cat == category.toLowerCase()) {
                var hold = document.createElement("div");
                hold.className = "hold";
                hold.innerHTML = '<div class="rest ' + category.toLowerCase() + '"><p class="categoryAndPrice">' + category + '<br><em>Price: ' + price + '</em></p><img src="' + imageurl + '" /><div class="info"><h1>' + name.toUpperCase() + '</h1><p class="desc">' + description + '</p><div class="linkHold"><a href="' + website + '" target="_blank"><img src="src/images/icons/web.png" alt="">Website</a><a href="#locationModal-' + i + '"><img src="src/images/icons/location.png" alt="">Location</a></div></div></div>';

                contentWrap.appendChild(hold);
            }
        }
    }
}

function searchResults() {
    var searchValue = document.getElementById("searchBox").value;
    
    var data = request.response;
    var resto = data['restaurants'];
    var hasResult = false;
    
    var contentWrap = document.getElementById('contents-wrap');
    contentWrap.innerHTML = '';
    createModals(data, 'all');

    for (var i = 0; i < resto.length; i++) {
        var name = resto[i].name;
        var imageurl = resto[i].imageurl;
        var category = resto[i].category;
        var price = resto[i].price;
        var description = resto[i].description;
        var location = resto[i].location;
        var website = resto[i].website;

        if (name.toLowerCase().includes(searchValue.toLowerCase()) || category.toLowerCase().includes(searchValue.toLowerCase()) || description.toLowerCase().includes(searchValue.toLowerCase())) {
            var hold = document.createElement("div");
            hold.className = "hold";
            hold.innerHTML = '<div class="rest ' + category.toLowerCase() + '"><p class="categoryAndPrice">' + category + '<br><em>Price: ' + price + '</em></p><img src="' + imageurl + '" /><div class="info"><h1>' + name.toUpperCase() + '</h1><p class="desc">' + description + '</p><div class="linkHold"><a href="' + website + '" target="_blank"><img src="src/images/icons/web.png" alt="">Website</a><a href="#locationModal-' + i + '"><img src="src/images/icons/location.png" alt="">Location</a></div></div></div>';
            contentWrap.appendChild(hold);
            hasResult = true;
        }
    }

    if (hasResult == false) {
        var hold = document.createElement("div");
        hold.innerHTML = '<H3 class="no-result">No restaurants found...</H3>';
        contentWrap.appendChild(hold);
    }
}