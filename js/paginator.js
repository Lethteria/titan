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
}

function MyPagin(page,link){
    MyPaginLink.GetId(link);
    MyPaginLink.LoadPage(page);
    MyPaginLink.ActiveLink();
    MyPaginLink.AddDisabled();
}

