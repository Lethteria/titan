//Загрузить еще фото
$('#page-wrap').on('click', '.indoor-soccer-item .load-more', function(){
    var $this = $(this),
        last = this.previousElementSibling.id.slice(-1);
    $this.hide();
    $this.prev('#load-more-'+last).append('<div class="progress"><div class="indeterminate"></div></div>');
    $this.prev('#load-more-'+last).load('to-load.html #load-gallery-'+last);
});
//переход по страницам
$('#football-pagin').find('#pagin').find('a').click(function(){
    var $this = $(this);
    MyPagin('football-to-load',$this);
});

