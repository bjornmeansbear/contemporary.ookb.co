
// smooth scrolling links
// scroll to content when you click on the logo. - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
$(".scroll").click(function(event){    
  event.preventDefault();
  //$('html,body').animate({scrollTop:$(this.hash).offset().top-52}, 800);
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});

$(document).ready(function() {
  var diw   =  $('.designamation img').width();
  var ratio = (diw*(320/480));
  $('.designamation').height(ratio);

  $('.calendar .week.past .row').hide();
  
  $('.calendar .week.past h2').click(function(event){
    event.preventDefault();
    //$('html,body').animate({scrollTop:$(this.hash).offset().top-52}, 800);
    $(this).parent().find('.row').toggle('slow');
  });

});

$(window).resize(function() {
  var diw   =  $('.designamation img').width();
  var ratio = (diw*(320/480));
  $('.designamation').height(ratio);
});

