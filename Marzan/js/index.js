var	menu = document.querySelector('.menu');
var	menuBar = document.querySelector('.menuBar');
var closeBtn = document.querySelector('.close');
menuBar.addEventListener('click', function(){
  menu.className += ' open';
})


closeBtn.addEventListener('click', function(){
  menu.className = 'menu';
 
})