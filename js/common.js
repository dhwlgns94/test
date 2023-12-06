$(document).ready(function (){

    $('.depth2,.depth2_bg').hide();

    $('.gnb > li').mouseenter(function(){
        $(this).find('.depth2').stop().fadeIn();
        $('.depth2_bg').stop().fadeIn();
    });

    $('.gnb > li').mouseleave(function(){
        $(this).find('.depth2').stop().fadeOut();
        $('.depth2_bg').stop().fadeOut();
    });

    $(".sitemap").hide();
    $(".btn_sitemap").click(function(){
        $(".sitemap").fadeIn();
    });
    $(".sitemap_close").click(function(){
        $(".sitemap").fadeOut();
    });
    $(".lang ul").hide();
    $(".lang").click(function(){
        $(".lang ul").slideToggle();
    });
    /* poptup */
    $(".popup_close").click(function(){
        $(".popup").slideUp();
    });

    /* mgnb */
/*     $(".mgnb_wrap").hide();
    $(".btn_ham").click(function(){
        $(".mgnb_wrap").slideDown();
    });
    $(".mgnb_close").click(function(){
        $(".mgnb_wrap").slideUp();
    }); */
    $(".mdepth2").hide();
    $(".mgnb > li").click(function(){
        $(this).find('.mdepth2').stop().slideDown();
        $(this).siblings().find('.mdepth2').stop().slideUp();

        return false;
        /* 함수를 쓸때 리턴하여 최종결과값을 되돌려받는 스크립트 기본 코드 중 하나임. a태그 링크를 안되게 하는것 */

    });
    $(".mgnb_wrap").hide();
    $(".btn_ham").click(function(){
        $(".mgnb_wrap").slideDown();
    });
    $(".mgnb_close").click(function(){
        $(".mgnb_wrap").slideUp();
        return false;

    });
});