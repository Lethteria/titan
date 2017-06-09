$('#achievements-gallery-pagin').find('#pagin').find('a').click(function(){
    var $this = $(this);
    MyPagin('achievements-gallery-to-load',$this);
});