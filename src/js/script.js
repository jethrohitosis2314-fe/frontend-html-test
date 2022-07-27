$(document).ready(function() {
	app.init();
});
var app = {
    init: function() {

        $('.owl-carousel.frame-2-slider, .owl-carousel.frame-4-slider').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            responsive:{
                0:{
                    items: 1
                },
                700:{
                    items: 2
                },
                1024:{
                    items: 3
                },
            }
        });

        /*
        * Mobile Navigation
        */
        $('.mbl-menu .open').on('click',function() {
            $(this).fadeOut(0);
            $(this).next().fadeIn(100);
            $(".mbl-header-nav").slideDown(400);
        });

        $('.mbl-menu .close').on('click',function() {
            $(this).fadeOut(0);
            $(this).prev().fadeIn(100);
            $(".mbl-header-nav").slideUp(400);
        });
       
    }
}