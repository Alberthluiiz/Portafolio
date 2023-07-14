$(document).ready(() => {
    // Efecto Menú
    $('.container-menu a').each(function (index, elemento) {
      $(this).css({
        top: '-200px'
      });
  
      $(this).animate({
        top: '0'
      }, 2000 + (index * 500));
    });
  
    // Efecto Header
    if ($(window).width() > 800) {
      $('header .container-description').css({
        opacity: 0,
        marginTop: 0
      });
      $('header .container-description').animate({
        opacity: 1,
        marginTop: '-52px'
      }, 3500);
    }
  
    // Scroll Elementos Menu
    // Variables 
    var sobreMi = $('#sobre-mi').offset().top,
        proyectos = $('#proyectos').offset().top,
        blog = $('#blog').offset().top;
        // Sobre mi
    $('#btn-sobre-mi').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: sobreMi - 200
      }, 500);
    });
    // Proyectos
    $('#btn-proyectos').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: proyectos + 850
      }, 500);
    });
    // Blog
    $('#btn-blog').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: blog + 300
      }, 500);
    });

    // Efecto Paralax

  });
  