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
        $('nav').addClass('nav-fixed');
        Headerlogo.addClass('logo-small');
        $('nav .header-logo-img img').fadeOut();
        NavLogo.fadeIn();
        HeaderLadle.addClass('ladle-opacity');
        BackToTop.addClass('show');
    } else {
        $('nav').removeClass('nav-fixed');
        $('nav .header-logo-img img').fadeIn();
        Headerlogo.removeClass('logo-small');
        NavLogo.fadeOut();
        $('nav .nav-search-form').css({'float':'none'});
        HeaderLadle.removeClass('ladle-opacity');
        BackToTop.removeClass('show');
    }
});

BackToTop.click(function(){
    $('html, body').animate({scrollTop: 0},500);
});