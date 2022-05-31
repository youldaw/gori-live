$(document).ready(function () {
    
    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('input[name=phone2]').mask('+7 (999) 999-99-99');

    
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

    $('.comment-slide').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:2,
        navText: ['<img src="images/pagination-left.png">','<img src="images/pagination-right.png">'],
        responsive:{
            0:{
                items:1.2,
            },
            600:{
                items:1,
            },
            1000:{
                items:2,
            }
        }
    });

});





