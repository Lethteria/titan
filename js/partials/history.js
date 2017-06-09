var docWidth = $(document).width(),
    HistoryTab = $('#history-control-tab');
if (docWidth<480){
    HistoryTab.find("a[href^='#history-kkts']").text('история конвертерного цеха');
}
HistoryTab.find('a').click(function(){
    $('#history-control-tab').find('a').removeClass('active-ind');
    $(this).addClass('active-ind');
});

    $("#history-slider").not('.slick-initialized').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<div class="fa fa-chevron-right"></div>',
        prevArrow: '<div class="fa fa-chevron-left"></div>',
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

