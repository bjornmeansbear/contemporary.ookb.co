$('header img').hide()
$('header img:nth-child(1)').show();
$('header img:nth-child(3n)').show();

$(window).scroll(function() {

  var s  = $(window).scrollTop();
  var wh = $(window).height();
  var dh = $(document).height();
  var r  = (dh-wh)/12;
  var m  = Math.ceil(s/r);
  var mr = m*r;

  $('.scrollcount').text(s);
  $('.documentheight').text(dh);
  $('.windowheight').text(wh);
  $('.ratio').text(r);
  $('.multiplier').text(m);
  $('.multiplier2').text(mr);

  if ((s>r) && (s<=(2*r))) {
    $('header img:nth-child(1)').fadeOut();
    $('header img:nth-child(2n)').fadeOut();
    $('header img:nth-child(2)').fadeIn();
    $('header img:nth-child(3n)').fadeIn();
  }

  if ((s>(2*r)) && (s<=(3*r))) {
    $('header img:nth-child(2)').fadeOut();
    $('header img:nth-child(4n)').fadeOut();
    $('header img:nth-child(3)').fadeIn();
    $('header img:nth-child(5n)').fadeIn();
  }

  if ((s>(3*r)) && (s<=(4*r))) {
    $('header img:nth-child(3)').fadeOut();
    $('header img:nth-child(3n)').fadeOut();
    $('header img:nth-child(4)').fadeIn();
    $('header img:nth-child(6n)').fadeIn();
  }

  if ((s>(4*r)) && (s<=(5*r))) {
    $('header img:nth-child(4)').fadeOut();
    $('header img:nth-child(2n)').fadeOut();
    $('header img:nth-child(5)').fadeIn();
    $('header img:nth-child(4n)').fadeIn();
  }

  if ((s>(5*r)) && (s<=(6*r))) {
    $('header img:nth-child(5)').fadeOut();
    $('header img:nth-child(4n)').fadeOut();
    $('header img:nth-child(6)').fadeIn();
    $('header img:nth-child(6n)').fadeIn();
  }

  if ((s>(6*r)) && (s<=(7*r))) {
    $('header img:nth-child(5)').fadeOut();
    $('header img:nth-child(3n)').fadeOut();
    $('header img:nth-child(6)').fadeIn();
    $('header img:nth-child(3n)').fadeIn();
  }

  if ((s>(7*r)) && (s<=(8*r))) {
    $('header img:nth-child(7)').fadeOut();
    $('header img:nth-child(2n)').fadeOut();
    $('header img:nth-child(8)').fadeIn();
    $('header img:nth-child(3n+1)').fadeIn();
  }

  if ((s>(8*r)) && (s<=(9*r))) {
    $('header img:nth-child(8)').fadeOut();
    $('header img:nth-child(3n)').fadeOut();
    $('header img:nth-child(9)').fadeIn();
    $('header img:nth-child(5n-1)').fadeIn();
  }

  if ((s>(9*r)) && (s<=(10*r))) {
    $('header img:nth-child(9)').fadeOut();
    $('header img:nth-child(4n)').fadeOut();
    $('header img:nth-child(10)').fadeIn();
    $('header img:nth-child(4n-1)').fadeIn();
  }

  if ((s>(10*r)) && (s<=(11*r))) {
    $('header img:nth-child(10)').fadeOut();
    $('header img:nth-child(2n)').fadeOut();
    $('header img:nth-child(11)').fadeIn();
    $('header img:nth-child(6n)').fadeIn();
  }

  if ((s>(11*r)) && (s<=(12*r))) {
    $('header img:nth-child(11)').fadeOut();
    $('header img').fadein()
    $('header img:nth-child(2n)').fadeOut();
  }


});
