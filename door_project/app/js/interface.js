$(document).ready(function(){

    $('.toggle-navigation').on('click',function(){
        $('.navigation').slideToggle('fast');

      /* если кнопка этого меню показана*/
        if($('.toggle-search').css('display')=='block'){
            $('.header-top_search-form').attr('style','');
        }

      /* если кнопка этого меню показана*/
        if($('.toggle-header-top_i_p').css('display')=='block'){
            $('.header-top_i_p').attr('style','');
        }
    
    });

    $('.toggle-header-top_i_p').on('click',function(){

        if($('.toggle-navigation').css('display')=='block'){
            $('.navigation').attr('style','');
         } 
         
        /* если кнопка этого меню показана*/
        if($('.toggle-search').css('display')=='block'){
            $('.header-top_search-form').attr('style','');
        }

        $('.header-top_i_p').slideToggle('fast');
    });

    $('.toggle-search').on('click',function(){

        if($('.toggle-navigation').css('display')=='block'){
            $('.navigation').attr('style','');
        }

        if($('.toggle-header-top_i_p').css('display')=='block'){
            $('.header-top_i_p').attr('style','');
        }

        $('.header-top_search-form').slideToggle('fast');
    });

    $('.aside-toggle').on('click',function(){
        $('.aside').slideToggle('fast');
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows:false,
        dotsClass:'slider-dots'
      });

});