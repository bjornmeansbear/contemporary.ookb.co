// Some Custom JS for the site
// scroll to content when you click on the logo. - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
$(".scroll").click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
});

// Scrolling grid magic

$(window).scroll(function(){
  // keep "Cs" in page when scrolling down
  var s = $(window).scrollTop();
  $('.layers').css('top', s);
  //move "C"s into center of screen
  
  if (s<=375) {
    $('.layers .r-two').css('top', s*-.8);
    $('.layers .r-three').css('top', s*-1.6);
    $('.layers .col1').css('left', s*1.2);
    $('.layers .col2').css('left', s*.4);
    $('.layers .col3').css('right', s*.4);
    $('.layers .col4').css('right', s*1.2);
  } else {
    $('.layers .r-two').css('top', -300);
    $('.layers .r-three').css('top', -600);
    $('.layers .col1').css('left', 450);
    $('.layers .col2').css('left', 150);
    $('.layers .col3').css('right', 150);
    $('.layers .col4').css('right', 450);
    
  }

});
