$(document).ready(function() {
    $(window).scroll(function() {
      var windowWidth = $(window).width();
  
      if (windowWidth > 800) {
        var scroll = $(window).scrollTop();
  
        $('header .container-description').css({
          'transform': 'translate(0px, ' + scroll / 2 + '%)'
        });
  
        $('.aboutme article').css({
          'transform': 'translate(0px, ' + (-scroll / 4) + '%)'
        });
      }
    });
  });
  