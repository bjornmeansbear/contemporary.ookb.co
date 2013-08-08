// scroll to content when you click on the logo. - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
$(".scroll_to").click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 888);
});

/* craziness with the logo */
$('#logo img').hide()
$('#logo img:nth-child(1)').show();

$(window).scroll(function() {

  var s  = $(window).scrollTop();
  var wh = $(window).height();
  var dh = $(document).height();
  var r  = (dh-wh)/12;

  $("#logo .container").css("-webkit-transform","translateY(" + (s*1) + "px)");

  if ((s>r) && (s<=(2*r))) {
    $('#logo img:nth-child(1)').fadeOut();
    $('#logo img:nth-child(3)').fadeOut();
    $('#logo img:nth-child(2)').fadeIn();
    $('#logo img:nth-child(13)').fadeIn();
  }

  if ((s>(2*r)) && (s<=(3*r))) {
    $('#logo img:nth-child(2)').fadeOut();
    $('#logo img:nth-child(6)').fadeOut();
    $('#logo img:nth-child(3)').fadeIn();
    $('#logo img:nth-child(14)').fadeIn();
  }

  if ((s>(3*r)) && (s<=(4*r))) {
    $('#logo img:nth-child(3)').fadeOut();
    $('#logo img:nth-child(9)').fadeOut();
    $('#logo img:nth-child(4)').fadeIn();
    $('#logo img:nth-child(15)').fadeIn();
  }

  if ((s>(4*r)) && (s<=(5*r))) {
    $('#logo img:nth-child(4)').fadeOut();
    $('#logo img:nth-child(5)').fadeIn();
  }

  if ((s>(5*r)) && (s<=(6*r))) {
    $('#logo img:nth-child(5)').fadeOut();
    $('#logo img:nth-child(6)').fadeIn();
  }

  if ((s>(6*r)) && (s<=(7*r))) {
    $('#logo img:nth-child(5)').fadeOut();
    $('#logo img:nth-child(6)').fadeIn();
  }

  if ((s>(7*r)) && (s<=(8*r))) {
    $('#logo img:nth-child(7)').fadeOut();
    $('#logo img:nth-child(8)').fadeIn();
  }

  if ((s>(8*r)) && (s<=(9*r))) {
    $('#logo img:nth-child(8)').fadeOut();
    $('#logo img:nth-child(9)').fadeIn();
  }

  if ((s>(9*r)) && (s<=(10*r))) {
    $('#logo img:nth-child(9)').fadeOut();
    $('#logo img:nth-child(10)').fadeIn();
  }

  if ((s>(10*r)) && (s<=(11*r))) {
    $('#logo img:nth-child(10)').fadeOut();
    $('#logo img:nth-child(11)').fadeIn();
  }

  if ((s>(11*r)) && (s<=(12*r))) {
    $('#logo img:nth-child(11)').fadeOut();
    $('#logo img:nth-child(12)').fadeIn();
  }


});
