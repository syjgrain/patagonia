$(function(){
    const win_w = $(window).width();
    const base_line = -650;
    let last = 0;
    let sec_pos = [];
    
    
    
    

    save_offset_top();
    function save_offset_top(){
        sec_pos = [];
        
        $('section').each(function(){
            var this_offset = $(this).offset().top;
            sec_pos.push(this_offset); 
        });

        last = $('section').last().offset().top + $('section').last().height();
        sec_pos.push(last);
    }
    
    //------------ scroll 이벤트
    $(window).on('scroll', function(){    
        const scroll = $(this).scrollTop();
        
        $('section').each(function(index){
            if(scroll >=sec_pos[index] + base_line && scroll<sec_pos[index+1]){

                $('section').eq(index).addClass('on');
            }
        });
        
        if($(window).scrollTop() > 50) {
            $("#header").addClass("active");
        } else { 
            $("#header").removeClass("active");
        }
        
        
    });

    $('#header .gnb > li').on('mouseover', function(){
        
        $(this).find(".shop_gnb, .about_gnb").stop().slideDown(300); 
    });
    $('#header .gnb > li').on('mouseleave', function(){
        
        $(this).find(".shop_gnb, .about_gnb").stop().slideUp(300); 

    });
    
    
    
    $("#visual .slide").eq(0).removeClass('active').addClass('active').siblings().hide();
    let slideI = 0;
    setInterval(function(){
        if(slideI<3){
            slideI++;
        }else{
            slideI = 0;
        }
    $("#visual .slide").eq(slideI).siblings().fadeOut(900).removeClass('active');
    $("#visual .slide").eq(slideI).fadeIn(900).addClass('active');
    },4000);

    var swiper = new Swiper('#action .swiper-container', {

        loop : true, // 무한반복
        navigation: {
            nextEl: '#action .swiper-button-next', // 다음 버튼 지정
            prevEl: '#action .swiper-button-prev', // 이전 버튼 지정
        },
        
        // 모바일에서 값
        slidesPerView: 1, 
        slidesPerGroup: 1,
        spaceBetween: 25,
        
        // 반응형 - 수치마다 바뀔값 입력
        breakpoints: {
            
            768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            },
            960: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            },
            1300: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            },
        }
    });
    
    $("video").play();
    
});




