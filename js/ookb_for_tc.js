// scroll to content when you click - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
$(".scroll_to").click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 888);
});

/****************************/
/****************************/
// logo craziness!
/****************************/
/****************************/

$('#logo img').hide();
$('#logo img:nth-child(odd)').show();

$(window).scroll(function() {
  var s  = $(window).scrollTop();
  var wh = $(window).height();
  var dh = $(document).height();
  var r  = (dh-wh)/12;

  if (s<=0) {
    $('#logo img:nth-child(even)').fadeOut();
    $('#logo img:nth-child(odd)').fadein();
  } 
  
  else if (s<=r) {
    $('#logo img:nth-child(even)').fadeOut();
    $('#logo img:nth-child(odd)').fadein();
  }
  
  else if ((s>r) && (s<=(2*r))) {
    $('#logo img:nth-child(1)').fadeOut();
    $('#logo img:nth-child(15)').fadeOut();
    $('#logo img:nth-child(3)').fadeOut();
    $('#logo img:nth-child(15)').fadeOut();
    $('#logo img:nth-child(2)').fadeIn();
    $('#logo img:nth-child(14)').fadeIn();
  }
  
  else if ((s>(2*r)) && (s<=(3*r))) {
    $('#logo img:nth-child(2)').fadeOut();
    $('#logo img:nth-child(14)').fadeOut();
    $('#logo img:nth-child(4)').fadeOut();
    $('#logo img:nth-child(16)').fadeOut();
    $('#logo img:nth-child(3)').fadeIn();
    $('#logo img:nth-child(15)').fadeIn();
  }
  
  else if ((s>(3*r)) && (s<=(4*r))) {
    $('#logo img:nth-child(3)').fadeOut();
    $('#logo img:nth-child(13)').fadeOut();
    $('#logo img:nth-child(5)').fadeOut();
    $('#logo img:nth-child(17)').fadeOut();
    $('#logo img:nth-child(4)').fadeIn();
    $('#logo img:nth-child(16)').fadeIn();
  }
  
  else if ((s>(4*r)) && (s<=(5*r))) {
    $('#logo img:nth-child(4)').fadeOut();
    $('#logo img:nth-child(16)').fadeOut();
    $('#logo img:nth-child(6)').fadeOut();
    $('#logo img:nth-child(18)').fadeOut();
    $('#logo img:nth-child(5)').fadeIn();
    $('#logo img:nth-child(17)').fadeIn();
  }
  
  else if ((s>(5*r)) && (s<=(6*r))) {
    $('#logo img:nth-child(5)').fadeOut();
    $('#logo img:nth-child(17)').fadeOut();
    $('#logo img:nth-child(7)').fadeOut();
    $('#logo img:nth-child(19)').fadeOut();
    $('#logo img:nth-child(6)').fadeIn();
    $('#logo img:nth-child(18)').fadeIn();
  }
  
  else if ((s>(6*r)) && (s<=(7*r))) {
    $('#logo img:nth-child(6)').fadeOut();
    $('#logo img:nth-child(18)').fadeOut();
    $('#logo img:nth-child(8)').fadeOut();
    $('#logo img:nth-child(20)').fadeOut();
    $('#logo img:nth-child(7)').fadeIn();
    $('#logo img:nth-child(19)').fadeIn();
  }
  
  else if ((s>(7*r)) && (s<=(8*r))) {
    $('#logo img:nth-child(7)').fadeOut();
    $('#logo img:nth-child(19)').fadeOut();
    $('#logo img:nth-child(9)').fadeOut();
    $('#logo img:nth-child(21)').fadeOut();
    $('#logo img:nth-child(8)').fadeIn();
    $('#logo img:nth-child(20)').fadeIn();
  }
  
  else if ((s>(8*r)) && (s<=(9*r))) {
    $('#logo img:nth-child(8)').fadeOut();
    $('#logo img:nth-child(20)').fadeOut();
    $('#logo img:nth-child(10)').fadeOut();
    $('#logo img:nth-child(22)').fadeOut();
    $('#logo img:nth-child(9)').fadeIn();
    $('#logo img:nth-child(21)').fadeIn();
  }
  
  else if ((s>(9*r)) && (s<=(10*r))) {
    $('#logo img:nth-child(9)').fadeOut();
    $('#logo img:nth-child(21)').fadeOut();
    $('#logo img:nth-child(11)').fadeOut();
    $('#logo img:nth-child(23)').fadeOut();
    $('#logo img:nth-child(10)').fadeIn();
    $('#logo img:nth-child(22)').fadeIn();
  }
  
  else if ((s>(10*r)) && (s<=(11*r))) {
    $('#logo img:nth-child(10)').fadeOut();
    $('#logo img:nth-child(12)').fadeOut();
    $('#logo img:nth-child(22)').fadeOut();
    $('#logo img:nth-child(24)').fadeOut();
    $('#logo img:nth-child(11)').fadeIn();
    $('#logo img:nth-child(23)').fadeIn();
  }
  
  else if ((s>(11*r)) && (s<=(12*r))) {
    $('#logo img:nth-child(odd)').fadeOut();
    $('#logo img:nth-child(even)').fadeIn();
  }

  else if (s>=(12*r)) {
    $('#logo img:nth-child(odd)').fadeOut();
    $('#logo img:nth-child(even)').fadeIn();
  }

  else {
    $('#logo img:nth-child(even)').fadeOut();
    $('#logo img:nth-child(odd)').fadeIn();
  }
    
});

/****************************/
/****************************/
// /END logo craziness!
/****************************/
/****************************/

$(document).ready(function() {
  // set variables for various positioning needs
  var wh = $(window).height();
  var ww = $(window).width();
  var bthfix = ($('#bigtext').height())/2;
  var logoimg = $('.home-2 header img');
  var imgcorrh = ((logoimg.height())/2)*-1;
  var imgcorrw = ((logoimg.width())/2)*-1;

  // use variables to correctly position images, text, and homepage logo
  $('#slideshow').height(wh-300); // set slideshow height
  $('#bigtext').css("top",((wh-150)/2)-bthfix);
  $('.home-2 #white-wrapper').css("margin-top",wh-300);  // set homepage gap height
  $('.speakerseries #white-wrapper').css("margin-top",wh-150);  // set speakers gap height
  $('.home-2 header img').css("margin-top",imgcorrh-75).css("margin-left",imgcorrw);  // set speakers gap height

  // fadein homepage logo layers in sequence
  var fs = 500; // speed in ms
  $('.home-2 header img').hide();
  $('.home-2 header img').each(function(index){
    $(this).delay(index*(fs/2)).fadeIn(fs);
  });

});

/** Board Bio stuff **/
$(".toggle .bio p").hide();
$(".toggle .bio img").click(function() {
  $(this).parent().siblings().find("p").slideUp(300);
  $(this).parent().find("p").slideToggle(300);
});
$(".toggle .bio h2").click(function() {
  $(this).parent().siblings().find("p").slideUp(300);
  $(this).parent().find("p").slideToggle(300);
});

// Make Homepage sections link to their pages.. 
$(".press *").click(function(event) {
  event.preventDefault();
  window.location = "press.html";
});

$(".ccc *").click(function(event) {
  event.preventDefault();
  window.location = "projects.html";
});

$(".speaker *").click(function(event) {
  event.preventDefault();
  window.location = "lectures.html";
});

// placing number in a cool shape and then doing interesting things with it
$( document ).ready(function() {
  var shapeh = $(".speaker-number .shape").height();
  var shapew = $(".speaker-number .shape").width();
  var numw = $(".speaker-number i").width();
  var placement = ((shapew/2)-(numw/2));
  $('.speaker-number').height(shapeh);
  $('.speaker-number').width(shapew);
  $('.speaker-number').css("margin-top",((shapeh/2)*-1));
  $('.speaker-number i').css("left",placement);
  $('.speakers date.lead').css("margin-top",((shapeh/2)*-1)+30).css("margin-left",shapew+15);
});