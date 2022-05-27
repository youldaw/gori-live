$(document).ready(function () {
    
    $('input[name=phone]').mask('+7 (999) 999-99-99');

    
    $('.main-slide').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots:true,
        center: false,
        smartSpeed:900,
        items:1,
        // navText: ['<img src="images/left.svg">','<img src="images/right.svg">'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
                margin:0,
            },
            1000:{
                items:1,
                margin:0,
            }
        }
    });

});





