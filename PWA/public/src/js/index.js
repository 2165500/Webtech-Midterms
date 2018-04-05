var	menu = document.querySelector('.menu');
var	menuBar = document.querySelector('.menuBar');
var closeBtn = document.querySelector('.close');
var hourToggle = document.querySelector('.hourToggle');
var hours = document.querySelector('.hours');

//if the user use a browser that is not supported by the browser
//then it will throw an error. This line of code will check if
//service worker exist.
if ('serviceWorker' in navigator) {
    //to register the service the worker, it service worker exist
  //it will override
    navigator.serviceWorker.register('/sw.js')
        .then(function() {
            console.log('SW registered');
        });
}

menuBar.addEventListener('click', function(){
  menu.className += ' open';
})


closeBtn.addEventListener('click', function(){
  menu.className = 'menu';
 
})

hourToggle.addEventListener('click', function(){
  hours.className += ' open';
})
