jQuery(document).ready(function($){
  //change header bg
  $(window).scroll(function(){
    if($(document).scrollTop() > 50){
      $('.masthead.homepage').removeClass('hideme');
      $('.navbar.homepage').removeClass('clear-bg');
    }
    else{
      $('.masthead.homepage').addClass('hideme');
      $('.navbar.homepage').addClass('clear-bg');
    }
  });
});