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
//vertically center images in their section
$(window).load(function(){
	//declaring variables
	var lh = $('.layer').height();
	var ih = $('.layer img').height();
	var ww = $(window).width();
	//only applying script under 767px body width
	if (ww <= 767){
	//using the variables to position images in their section
		if (lh>ih){
			$('.layer img').css('margin-top', (lh/2)-(ih/2));
		}
	}
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

});
// scroll to content when you click on the logo. - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
$(".scroll").click(function(event){    
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
});

/* 
helpful reference for different screen resolutions affecting JS commands:
http://www.coalmarch.com/blog/how-to-execute-javascript-based-on-screen-size-using-jqueryhttp://stackoverflow.com/questions/7996858/running-different-javascript-at-different-screen-resolutions
http://stackoverflow.com/questions/4811238/how-to-serve-up-different-javascript-files-by-browser-width
*/


