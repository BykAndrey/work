$(document).ready(function(){

    $(window).resize(function(e){
     
        $('.top-menu').css('display','none');
        $('.header-phone-block').css('display','none');

        if($(window).width()>=685){
            $('.header-phone-block').css('display','flex');
        }

        if($(window).width()>=1170){
            $('.top-menu').css('display','flex');
        }

    });

    $('.toggle-menu').click(function(){
        $('.top-menu').slideToggle();
        if($('.header-phone-block').css('display')=="block"){

            $('.header-phone-block').slideToggle();
        }
    });
    $('.toggle-phone-menu').click(function(){
        $('.header-phone-block').slideToggle();
        if($('.top-menu').css('display')=="block"){
            $('.top-menu').slideToggle();
        }
    });

    $('.popup-modal').click(function(){
        var wind=$(this).attr('href');
        
        $('html').animate({ scrollTop: 0 }, 500);
        $(wind).toggle();
       
    });

    $('.close_form').click(function(){
            var wind=$(this).parent();
            $('html').animate({ scrollTop: 0 }, 500);
           // $(wind).animate({'opacity':'hide'},300);
           $(wind).toggle();
    });
})

 

   
