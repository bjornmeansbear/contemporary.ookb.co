// Some Custom JS for the site
// scroll to content when you click on the logo. - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
$(".scroll").click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
});

// Scrolling grid magic

$(window).scroll(function(){
  // keep "Cs" in page when scrolling down
  var s  = $(window).scrollTop();
  var wh = $(window).height();
  var dh = $(document).height();
  
  $('.layers').css('top', s*1.123456789);
  if (s>676) {
    $('.layers').css('top', 760).height(220);
  } else { }
  
  //move "C"s into center of screen  
  if (s<=300) {
    $('.layers .r-two').css('top', s*-.8);
    $('.layers .r-three').css('top', s*-1.6);
    $('.layers .col1').css('left', s*1.2);
    $('.layers .col2').css('left', s*.4);
    $('.layers .col3').css('right', s*.4);
    $('.layers .col4').css('right', s*1.2);
  } else {
    $('.layers .r-two').css('top', -240);
    $('.layers .r-three').css('top', -480);
    $('.layers .col1').css('left', 360);
    $('.layers .col2').css('left', 120);
    $('.layers .col3').css('right', 120);
    $('.layers .col4').css('right', 360);
  }

  $('footer').height(s*1.66);


});