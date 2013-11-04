// scroll to content when you click - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
$(".scroll_to").click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 888);
});

$(document).ready(function() {

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
  $(".home-2 .press *").click(function(event) {
    event.preventDefault();
    window.location = "press.html";
  });
  
  $(".home-2 .ccc *").click(function(event) {
    event.preventDefault();
    window.location = "projects.html";
  });
  
  $(".home-2 .speaker *").click(function(event) {
    event.preventDefault();
    window.location = "lectures.html";
  });

  // set variables for various positioning needs
  var wh = $(window).height();
  var ww = $(window).width();
  var bthfix = ($('#bigtext').height())/2;
  var logoimg = $('.home-2 header img');
  var imgcorrh = ((logoimg.height())/2)*-1;
  var imgcorrw = ((logoimg.width())/2)*-1;

  // use variables to correctly position images, text, and homepage logo
  $('#slideshow').height(wh-300); // set slideshow height
  $('#bigtext').css("top",((wh-300)/2)-bthfix);
  $('.home-2 #bigtext').css("top",((wh-150)/2)-bthfix);
  $('#white-wrapper').css("margin-top",wh-300);  // set homepage gap height
  $('.home-2 header img').css("margin-top",imgcorrh-75).css("margin-left",imgcorrw);  // set speakers gap height

  // fadein homepage logo layers in sequence
  var fs = 500; // speed in ms
  $('.home-2 header img').hide();
  $('.home-2 header img').each(function(index){
    $(this).delay(index*(fs/2)).fadeIn(fs);
  });

// placing number in a cool shape and then doing interesting things with it
  var shapeh = $(".speaker-number .shape").height();
  var shapew = $(".speaker-number .shape").width();
  var numw = $(".speaker-number i").width();
  var placement = ((shapew/2)-(numw/2));
  $('.speaker-number').height(shapeh);
  $('.speaker-number').width(shapew);
  $('.speaker-number').css("margin-top",(((shapeh/2)-20)*-1));
  $('.speaker-number i').css("left",placement);
  $('.speakers date.lead').css("margin-top",((shapeh/2)*-1)).css("margin-left",shapew+15);
});
