$('header img').hide()
$('header img:nth-child(odd)').show();

$(window).scroll(function() {

  var s  = $(window).scrollTop();
  var wh = $(window).height();
  var dh = $(document).height();
  var r  = (dh-wh)/12;

  if ((s>r) && (s<=(2*r))) {
    $('header img:nth-child(1)').fadeOut();
    $('header img:nth-child(15)').fadeOut();
    $('header img:nth-child(3)').fadeIn();
    $('header img:nth-child(15)').fadeIn();
    $('header img:nth-child(2)').fadeIn();
    $('header img:nth-child(14)').fadeIn();
  }

  if ((s>(2*r)) && (s<=(3*r))) {
    $('header img:nth-child(2)').fadeOut();
    $('header img:nth-child(14)').fadeOut();
    $('header img:nth-child(4)').fadeIn();
    $('header img:nth-child(16)').fadeIn();
    $('header img:nth-child(3)').fadeIn();
    $('header img:nth-child(15)').fadeIn();
  }

  if ((s>(3*r)) && (s<=(4*r))) {
    $('header img:nth-child(3)').fadeOut();
    $('header img:nth-child(13)').fadeOut();
    $('header img:nth-child(5)').fadeIn();
    $('header img:nth-child(17)').fadeIn();
    $('header img:nth-child(4)').fadeIn();
    $('header img:nth-child(16)').fadeIn();
  }

  if ((s>(4*r)) && (s<=(5*r))) {
    $('header img:nth-child(4)').fadeOut();
    $('header img:nth-child(16)').fadeOut();
    $('header img:nth-child(6)').fadeIn();
    $('header img:nth-child(18)').fadeIn();
    $('header img:nth-child(5)').fadeIn();
    $('header img:nth-child(17)').fadeIn();
  }

  if ((s>(5*r)) && (s<=(6*r))) {
    $('header img:nth-child(5)').fadeOut();
    $('header img:nth-child(17)').fadeOut();
    $('header img:nth-child(7)').fadeIn();
    $('header img:nth-child(19)').fadeIn();
    $('header img:nth-child(6)').fadeIn();
    $('header img:nth-child(18)').fadeIn();
  }

  if ((s>(6*r)) && (s<=(7*r))) {
    $('header img:nth-child(6)').fadeOut();
    $('header img:nth-child(18)').fadeOut();
    $('header img:nth-child(7)').fadeIn();
    $('header img:nth-child(19)').fadeIn();
  }

  if ((s>(7*r)) && (s<=(8*r))) {
    $('header img:nth-child(7)').fadeOut();
    $('header img:nth-child(19)').fadeOut();
    $('header img:nth-child(9)').fadeIn();
    $('header img:nth-child(21)').fadeIn();
    $('header img:nth-child(8)').fadeIn();
    $('header img:nth-child(20)').fadeIn();
  }

  if ((s>(8*r)) && (s<=(9*r))) {
    $('header img:nth-child(8)').fadeOut();
    $('header img:nth-child(20)').fadeOut();
    $('header img:nth-child(9)').fadeIn();
    $('header img:nth-child(21)').fadeIn();
  }

  if ((s>(9*r)) && (s<=(10*r))) {
    $('header img:nth-child(9)').fadeOut();
    $('header img:nth-child(21)').fadeOut();
    $('header img:nth-child(11)').fadeIn();
    $('header img:nth-child(23)').fadeIn();
    $('header img:nth-child(10)').fadeIn();
    $('header img:nth-child(22)').fadeIn();
  }

  if ((s>(10*r)) && (s<=(11*r))) {
    $('header img:nth-child(10)').fadeOut();
    $('header img:nth-child(12)').fadeOut();
    $('header img:nth-child(22)').fadeOut();
    $('header img:nth-child(24)').fadeOut();
    $('header img:nth-child(11)').fadeIn();
    $('header img:nth-child(23)').fadeIn();
  }

  if ((s>(11*r)) && (s<=(12*r))) {
    $('header img:nth-child(odd)').fadeOut();
    $('header img:nth-child(even)').fadeIn();
  }


});
