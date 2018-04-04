var	menu = document.querySelector('.menu');
var	menuBar = document.querySelector('.menuBar');
var closeBtn = document.querySelector('.close');
var hourToggle = document.querySelector('.hourToggle');
var hours = document.querySelector('.hours');

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
  .then(function(){
    console.log('SW Registered');
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
