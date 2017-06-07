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

