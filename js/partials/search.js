﻿$(document).ready(function() {
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
});
