$(document).ready(function(){

    //Initialize hamburger menu
    $('span.nav-btn').click(function(){
        $('ul.nav').slideToggle();
    })

    $(window).resize(function (){
        if ( $(window).width() > 768 ) {
            $('ul.nav').removeAttr('style');
        }
    });


    //Initialize Isotope filtering plugin
    if ($('.portfolioContainer').imagesLoaded) {
        var $container = $('.portfolioContainer').imagesLoaded( function() {
            if ($container.isotope) {
            $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
                }
            });
        };

        $('.portfolioFilter a').click(function(){
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
             });
             return false;
            });
        });
    }

    //Initialize accordion plugin
    if ($(".accordion").accordion){
        $(".accordion").accordion({
            firstChildExpand: false,
            multiExpand: true,
        });
    }

});
