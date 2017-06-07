$('#certificate-pagin').find('#pagin').find('a').click(function(){
    var $this = $(this);
    MyPagin('certificate-to-load',$this);
});