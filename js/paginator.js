
    function MyPagin(page,link){
        var Id = link.attr('href').substr(1);

        $('#page-wrap').append('<div class="progress"><div class="indeterminate"></div></div>');
        $('html, body').animate({scrollTop: 0},700);
        $('#page-wrap').load(page+'.html #'+Id);
        link.parents('#pagin').find('li').removeClass('active');
        link.parent().addClass('active');
    }

