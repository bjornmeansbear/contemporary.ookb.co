// trying to make a modal thingy simply...
$(".image-list .image").click(function() {
  $(".image-list .lightbox").addClass("overlay");
  var imgsrc = $(this).find("img").attr("src").replace('-300','-1800');
  $(".image-list .lightbox").find("img").attr("src", imgsrc);
});

$(".lightbox .close").click(function() {
  $(".lightbox").removeClass("overlay");
});

$(".lightbox").click(function() {
  $(".lightbox").removeClass("overlay");
});
