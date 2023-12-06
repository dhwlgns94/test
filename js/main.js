$(document).ready(function () {
    const mb = new Swiper('.mb', {
        loop: true,  // 슬라이드 반복 여부
        speed: 1000,  // 슬라이드 동작 속도
        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'fraction',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true,  // 버튼 클릭 여부
        },
        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },



    });
    /* 재생버튼관련 */
    $('.btn_play').hide();
    $('.btn_pause').on('click', function () {
        /* click(function(){});과같음 */
        mb.autoplay.stop(); //mb는 슬라이드의 변수명임.
        $('.btn_pause').hide();
        $('.btn_play').show();
    });
    $('.btn_play').on('click', function () {
        /* click(function(){});과같음 */
        mb.autoplay.start(); //mb는 슬라이드의 변수명임.
        $('.btn_play').hide();
        $('.btn_pause').show();
    });
    /* news slide */
    const news_list = new Swiper('.news_list', {
        loop: true,  // 슬라이드 반복 여부
        speed: 1000,  // 슬라이드 동작 속도
        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        direction: 'vertical',
    });
    const prd_list = new Swiper('.prd_list', {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        loop: true,  // 슬라이드 반복 여부
        speed: 1000,  // 슬라이드 동작 속도

        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 50,
        breakpoints: {

            1024: {  // 가로해상도가 1200px 이상일 경우
                slidesPerView: 4,
                spaceBetween: 50,
            },
            1400: {  // 가로해상도가 1400px 이상일 경우
                slidesPerView: 6,
                spaceBetween: 50,
            },

        },



    });

/*     $('.tab li:nth-child(1)').addClass('active');
 */    $(".tab li").eq(0).addClass('active');
 $(".tab_img img:nth-child(n+2)").hide();
//안됨//
    /* teaware */

//.tab li를 클릭했을때 
// 클릭한 번호를 찾아서
//.tab.img img 중 클릭한 li와 일치하는것을 보여라.
$(".tab li").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    var indexNum = $(this).index();
    $(".tab_img img").eq(indexNum).fadeIn().siblings().fadeOut();
   
});


   /* 
 $('.tab li:nth-child(1)').click(function(){ 
        $(this).addClass('active').siblings().removeClass('active');

        $('.tab_img img:nth-child(1)').animate({
            opacity: '1'
        });
        $('.tab_img img:nth-child(1)').siblings().animate({
            opacity:'0'
       
        });
    });
    $('.tab li:nth-child(2)').click(function(){ 
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab_img img:nth-child(2)').animate({
            opacity: '1'
        });
        $('.tab_img img:nth-child(2)').siblings().animate({
            opacity:'0'
       
        });
    });
    $('.tab li:nth-child(3)').click(function(){ 
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab_img img:nth-child(3)').animate({
            opacity: '1'
        });
        $('.tab_img img:nth-child(3)').siblings().animate({
            opacity:'0'
       
        });
    });
    $('.tab li:nth-child(4)').click(function(){ 
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab_img img:nth-child(4)').animate({
            opacity: '1'
        });
        $('.tab_img img:nth-child(4)').siblings().animate({
            opacity:'0'
       
        });
    }); 
    */



    /* $('.tab li:nth-child(2)').addClass('active'); */

/*     $('.tab li:nth-child(2)').addClass('active');
    $('.tab li:child(2)').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.tab li:nth-child(3)').addClass('active');
    $('.tab li:child(3)').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.tab li:nth-child(4)').addClass('active');
    $('.tab li:child(4)').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });  */

/*     $('.tab_img img:nth-child(1)').animate({
        opacity: '1'
    });
    $('.tab_img img:nth-child(1)').siblings().animate({
        opacity: '0'
    });
    $('.tab_img img:nth-child(2)').animate({
        opacity: '1'
    });
    $('.tab_img img:nth-child(2)').siblings().animate({
        opacity: '0'
    });

    $('.tab_img img:nth-child(3)').animate({
        opacity: '1'
    });
    $('.tab_img img:nth-child(3)').siblings().animate({
        opacity: '0'
    });

    $('.tab_img img:nth-child(4)').animate({
        opacity: '1'
    });
    $('.tab_img img:nth-child(4)').siblings().animate({
        opacity: '0'
    }); */
    

/* museum_list */
$(".museum_list li:nth-child(1)").addClass("on");
$(".museum_list li").mouseenter(function(){
    $(this).addClass("on").siblings().removeClass("on");
});


});/* 문서준비이벤트종료 */