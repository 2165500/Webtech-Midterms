// JavaScript Document
$('.menuBar i').click(function(){
  $('.menuBar').toggleClass('open');
  $('.menu').toggleClass('open');
});

$('.hourToggle').click(function(){
  $(this).siblings('.hours').toggleClass('open');  
});

$('.menu a').click(function(event){
  event.preventDefault();
  var cat = $(this).attr('href');
  if(cat == 'all'){
    $('.rest').css('display','block');
  }else{  
    $('.rest').css('display','none');
    $('.rest.'+cat).css('display','block');
  }
});