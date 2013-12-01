// JS for contemporary.org

// scroll to content when you click - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
$(".scroll_to").click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 888);
});

// Generally useful JS stuff
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

});

// For the individual speaker pages
$(window).load(function() {
  var th = $('.date-time').height();
  $('.artistswork').css('margin-top',(th*-1));
});

$(window).resize(function() {
  var th = $('.date-time').height();
  $('.artistswork').css('margin-top',(th*-1));
});
