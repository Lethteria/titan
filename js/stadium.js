$('#show-stadium').click(function(){
    var $this = $(this);
    if ($this.hasClass('fa-map-marker')) {
        if ($this.next('#stadium-map').children('#stadium-map-load').length != 0){
            $this.next('#stadium-map').show("slow");
        } else {$this.next('#stadium-map').load('to-load.html #stadium-map-load');}
        $this.text('Свернуть карту');

    } else {
        $this.next('#stadium-map').hide("slow");
        $this.text('Показать на карте');
    }
    $this.toggleClass('fa-map-marker');
});

    //$(".fancybox").fancybox();
    $('#stadium-foto').find('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('#stadium-foto').find('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        nextArrow: '<div class="fa fa-chevron-right"></div>',
        prevArrow: '<div class="fa fa-chevron-left"></div>',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

