$(function(){

    
               
    $(window).scroll(function(){

        let scrollBar =  $(window).scrollTop();
        console.log(scrollBar);

        //헤더가 니콘 목업이미지위로 오면 헤더안 글씨가 #fff로 변경
        // && = 그리고

        let nikonImg = $('.web .web_item .nikonimg').offset().top;

        if(scrollBar >= nikonImg && 4046 > scrollBar){
            $('.header .nav .gnb').addClass('active');
        }else{
            $('.header .nav .gnb').removeClass('active');
        }


                    

    });

    //헤더 메뉴 클릭시 > 해당 섹션으로 이동
    //클릭 이벤트 후 offset top 값을 구하여야함.
    //추후 같은 효과 사용 시 eq index (탭메뉴 같은)활용해보기

    //인트로

    $('.header .gnb .depth01:nth-child(1)').click(function(){
        let introPage = $('.main_typo').offset().top;
        $('html, body').stop().animate({

            scrollTop : 0

        },1800);

    });

    //어바웃

    $('.header .gnb .depth01:nth-child(2)').click(function(){
        let aboutPage = $('.about').offset().top;
    $('html, body').stop().animate({

        scrollTop : aboutPage

    },1800);

    });

    //프로젝트

    $('.header .gnb .depth01:nth-child(3)').click(function(){
        let projectPage =  $('.web').offset().top;
    $('html, body').stop().animate({

        scrollTop : projectPage

    },1800);

    });

    //디자인

    $('.header .gnb .depth01:nth-child(4)').click(function(){
        let designPage =  $('.graphic').offset().top;
        
        $('html, body').stop().animate({
            
            scrollTop : designPage 

        },1800);
     

    });

    //푸터

    $('.header .gnb .depth01:nth-child(5)').click(function(){
        let contactPage = $('.footer').offset().top;
    $('html, body').stop().animate({

        scrollTop : contactPage 

    },1800);

    });




    //텍스트 내부 슬라이드 이미지

    var swiper = new Swiper(".visualSwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,   
    });   


    // 웹디자인 버튼 아코디언 스타일

    let webBtn = $('.web .web_item:nth-child(2) .main_sub');

    webBtn.click(function(){

        $(this).children('ul').slideToggle();

    })

    //그래픽 디자인 슬라이드

    var swiper = new Swiper(".graphicSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,   
    });   

    




    //aos

    AOS.init();
    
});