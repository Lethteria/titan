$(document).ready(function() {
    //$(".fancybox").fancybox();
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        nextArrow: '<div class="fa fa-chevron-right"></div>',
        prevArrow: '<div class="fa fa-chevron-left"></div>',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});
