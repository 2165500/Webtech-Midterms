var	menu = document.querySelector('.menu');
var	menuBar = document.querySelector('.menuBar');
var closeBtn = document.querySelector('.close');
var hourToggle = document.querySelector('.hourToggle');
var hours = document.querySelector('.hours');

menuBar.addEventListener('click', function(){
  menu.className += ' open';
})


closeBtn.addEventListener('click', function(){
  menu.className = 'menu';
 
})

hourToggle.addEventListener('click', function(){
  hours.className += ' open';
})
