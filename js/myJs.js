$(document).ready(function(){

    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();

    var MyNav = $('nav'),
        MyNavPos = MyNav.offset().top,
        Headerlogo = MyNav.find('.header-logo-img img'),
        NavLogo = MyNav.find('.nav-logoTitan'),
        HeaderLadle = $('header').find('.header-ladle img'),
        BackToTop = $('#back-to-top');

    $(window).scroll(function(){
        if ($(window).scrollTop() >= MyNavPos){
            MyNav.addClass('nav-fixed');
            Headerlogo.addClass('logo-small');
            MyNav.find('.header-logo-img img').fadeOut();
            NavLogo.fadeIn();
            HeaderLadle.addClass('ladle-opacity');
            BackToTop.addClass('show');
        } else {
            MyNav.removeClass('nav-fixed');
            MyNav.find('.header-logo-img img').fadeIn();
            Headerlogo.removeClass('logo-small');
            NavLogo.fadeOut();
            MyNav.find('.nav-search-form').css({'float':'none'});
            HeaderLadle.removeClass('ladle-opacity');
            BackToTop.removeClass('show');
        }
    });

    BackToTop.click(function(){
        $('html, body').animate({scrollTop: 0},500);
    });

    $('nav .search-icon').click(function(){
        $(this).next().toggleClass('search-open');
    });

    $('#titan-search').click(function(){
        $(this).val("Поиск временно не работает");
        $(this).attr('disabled', true);
    });

    $(document).mouseup(function (e) {
        var container = $('#titan-search');
        if (container.has(e.target).length === 0){
            container.val(" ").attr('disabled', false);
            //container.next('label').removeClass('active');
        }
    });

    var MyPaginLink = {
        LinkId: "",
        LinkDisabled: false,
        numOfElem: $('#pagin li').length,
        GetId: function(link){
            this.LinkId = link.attr('href').substr(1);
            if (this.LinkId == 'prev-arrow' || this.LinkId == 'next-arrow'){
                if ($(link).parent().hasClass('disabled')){
                    this.LinkDisabled = true;
                }else {
                    var linkHref = $('#pagin').find('.active a').attr('href').substr(1),
                        next = +linkHref.slice(-1) + 1,
                        prev = +linkHref.slice(-1) - 1;
                    this.LinkDisabled = false;
                    if (this.LinkId == 'next-arrow'){
                        return this.LinkId = linkHref.substring(0,linkHref.length-1)+next;
                    } else {return this.LinkId = linkHref.substring(0,linkHref.length-1)+prev;}
                }
            } else {
                this.LinkDisabled = false;
                return this.LinkId;
            }
        },
        ActiveLink: function(){
            if(!this.LinkDisabled){
                $('#pagin').find('li').removeClass('active');

                var ActivHref = this.LinkId;

                $('#pagin').find('a').each(function(){
                    if ($(this).attr('href') == "#"+ActivHref){
                        $(this).parent().addClass('active');
                    }
                });
            }
        },
        LoadPage: function(page){
            if(!this.LinkDisabled){
                $('#page-wrap').append('<div class="progress"><div class="indeterminate"></div></div>');
                $('html, body').animate({scrollTop: 0},700);
                $('#page-wrap').load(page+'.html #'+this.LinkId);
            }
        },
        AddDisabled: function(){
            var LastLi = $('#pagin').find('li').eq(this.numOfElem-2),
                FirstLi = $('#pagin').find('li').eq(1);
            $('#pagin').find('li').removeClass('disabled');
            if (LastLi.hasClass('active')){
                LastLi.next().addClass('disabled');
            }else {
                if (FirstLi.hasClass('active')){
                    FirstLi.prev().addClass('disabled');
                }
            }
        }
    };

    function MyPagin(page,link){
        MyPaginLink.GetId(link);
        MyPaginLink.LoadPage(page);
        MyPaginLink.ActiveLink();
        MyPaginLink.AddDisabled();
    };

    $('#achievements-page').find('.section-content .achievements-more').click(function(){
        var $this = $(this);
        var last = this.previousElementSibling.id.slice(-1);

        if ($this.hasClass('chevron-down')) {
            if ($this.prev('#load-more-tbl-'+last).children('#load-tbl-'+last).length != 0){
                $this.prev('#load-more-tbl-'+last).show("slow");
            } else {$this.prev('#load-more-tbl-'+last).load('to-load.html #load-tbl-'+last);}
            $this.text('Свернуть');

        } else {
            $this.prev('#load-more-tbl-'+last).hide("slow");
            $this.text('Показать подробнее участие в турнирах');
        }
        $this.toggleClass('chevron-down');
        $this.toggleClass('chevron-up');
        $this.prev('#load-more-tbl-'+last).toggleClass('padding-top');
    });

    $('#achievements-gallery-pagin').find('#pagin').find('a').click(function(){
        var $this = $(this);
        MyPagin('achievements-gallery-to-load',$this);
    });

    $('#certificate-pagin').find('#pagin').find('a').click(function(){
        var $this = $(this);
        MyPagin('certificate-to-load',$this);
    });

    $('#page-wrap').on('click', '.indoor-soccer-item .load-more', function(){
        var $this = $(this),
            last = this.previousElementSibling.id.slice(-1);
        $this.hide();
        $this.prev('#load-more-'+last).append('<div class="progress"><div class="indeterminate"></div></div>');
        $this.prev('#load-more-'+last).load('to-load.html #load-gallery-'+last);
    });

    $('#football-pagin').find('#pagin').find('a').click(function(){
        var $this = $(this);
        MyPagin('football-to-load',$this);
    });

    var docWidth = $(document).width(),
        HistoryTab = $('#history-control-tab');
    if (docWidth<480){
        HistoryTab.find("a[href^='#history-kkts']").text('история конвертерного цеха');
    }

    HistoryTab.find('a').click(function(){
        $('#history-control-tab').find('a').removeClass('active-ind');
        $(this).addClass('active-ind');
    });

    $('#indoor-soccer-pagin').find('#pagin').find('a').click(function(){
        var $this = $(this);
        MyPagin('indoor-soccer-to-load',$this);
    });

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

    $("#trainer-slider").not('.slick-initialized').slick({
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

    $(".fancybox").fancybox();
    $(document).ajaxSuccess(function(){
        $(".fancybox").fancybox();
    });
})