$(document).ready(() => {

    // Efecto Menú
    $('.container-menu a').each(function (index, elemento) {
        $(this).css({
            'top': '-200px'
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

        // SCrol Elementos Menu

        var acercaDe = $('#aboutMe').offset().top,
            proyectos = $('#projects').offset().top,
            blog = $('#blog').offset().top;

        $('#btn-about-me').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTo: acercaDe - 50
            }, 500);
        });

        $('#btn-project').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTo: proyectos
            }, 500);
        });

        $('#btn-blog').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTo: blog
            }, 500);
        });
});
