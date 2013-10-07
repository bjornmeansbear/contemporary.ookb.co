$(document).ready(function() {
  $("button.one").show();
  $("button.two").hide();
});

$("button.one").click(function() {
  $("#sideone").css("transform","rotateY(0deg)").css("-webkit-transform","rotateY(0deg)").css("z-index","2");
  $("#sidetwo").css("transform","rotateY(180deg)").css("-webkit-transform","rotateY(180deg)").css("z-index","1");
  $("button.two").show();
  $(this).hide();
});
$("button.two").click(function() {
  $("#sidetwo").css("transform","rotateY(0deg)").css("-webkit-transform","rotateY(0deg)").css("z-index","2");
  $("#sideone").css("transform","rotateY(180deg)").css("-webkit-transform","rotateY(180deg)").css("z-index","1");
  $("button.one").show();
  $(this).hide();
});