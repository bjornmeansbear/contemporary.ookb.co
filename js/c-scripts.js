// Some Custom JS for the site

$(window).load(function() {
  // declaring various variables
  var wh = $(window).height();
  var ww = $(window).width();
  var th = $('.teaser').height();
  var lh = $('.layer').height();

  //using the variables to initially position things
  $('html,body,.layers').height(wh*2);
  $('#main,#secondary').height(wh);
  $('.layers .layer').height(wh/3);
  $('.layers .layer').width(ww/4);
  $('#secondary .teaser').css('margin-top',(wh/2)-(th/2));
});

// try to keep things correct even if there is a resizing...
$(window).resize(function() {
  // declaring various variables
  var wh = $(window).height();
  var ww = $(window).width();
  var th = $('.teaser').height();

  //using the variables to initially position things
  $('html,body').height(wh*2);
  $('#main,#secondary,.layers').height(wh);
  $('.layers .layer').height(wh/3);
  $('.layers .layer').width(ww/4);
  $('#secondary .teaser').css('margin-top',(wh/2)-(th/2));
});

// Scrolling grid magic
$(window).scroll(function(){
  // declaring various variables
  var s  = $(window).scrollTop();
  var wh = $(window).height();
  var ww = $(window).width();
  var dh = $(document).height();
  
  //changing heights and positions on scrolling
  $('footer').height(s);
  
  //reposition Cs on scrolling so that they end up centered
  //correctly position based on heights
  $('.layer').css('top',s);
  $('.layer.r-one').css('top',s+(s/3));
  $('.layer.r-three').css('top',s*2/3);

  //correctly position based on widths
  var wr = (ww/wh);
  var marginfix = (ww/8);
  var howfar = (s/wh);

  $('.layer.c-one').css('left',((s*wr)/2)-(marginfix*howfar));
  $('.layer.c-two').css('left',((s*wr)/4)-(marginfix*howfar));
  $('.layer.c-three').css('right',((s*wr)/4)-(marginfix*howfar));
  $('.layer.c-four').css('right',((s*wr)/2)-(marginfix*howfar));

  //hide a few things when scrolling down
  if (s>=wh*.5) {
    $("#pagedown").fadeOut(200);
    }

});

$("#pagedown").click(function() {
  $(this).fadeOut(200);
});

// scroll to content when you click on the logo. - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
$(".scroll").click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
});
