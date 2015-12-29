$(document).ready(function() {
  // print out menu automatically for these pages...
  $.getJSON('/json/talkingshop.json', function(data) {
    $.each(data.tsmenu, function(data) {
      $('ul#speakermenu').append('<li class="' + this["type"] + '"><a href="' + this["url"] + '">' + this["title"] + ' // ' + this["one"] + ' + ' + this["two"] + '</a></li>');
    });
  });
});
