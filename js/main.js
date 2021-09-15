

$(document).ready(function(){

    
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');


    /* click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });


    //owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeot: 3000,
        nav: true,
        dots: false,
        navText : [$('.owl-nav-prev'), $('.owl-nav-next')]
    });




});

