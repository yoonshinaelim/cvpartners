(function($) {
    $.fn.topmenu = function(){
        var $header = $('.header');
        var $mypage = $('.mypage');
        var $topmenu = $('.topmenu');
        var $topmenuCont = $topmenu.find('>li');
        $topmenuCont.on('mouseenter',function(){
            $('.submenubox').remove();
            $topmenuCont.find('.submenu').hide();
            $(this).find('.submenu').show();
            $header.append('<div class="submenubox"></div>');
        });
        $topmenuCont.find('.submenu').on('mouseleave',function(){
            reset();
        });
        $mypage.find('.btn').on('mouseenter',function(){
            reset();
            $(this).find('+.cont').stop().fadeIn();
        });
        $mypage.on('mouseleave',function(){
            $(this).find('.cont').stop().fadeOut();
        });
        function reset(){
            $('.submenubox').remove();
            $topmenuCont.find('.submenu').hide();
        }
    }
    $.fn.swiper = function(){
        mainSlider : {
            var mainSlider = new Swiper('.mainSlider', {
                loop: true,
                spaceBetween: 30,
                effect: 'fade',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay : {
                    delay: 5000,
                },
            });
        }
        challengeSlider : {
            var $challenge = $('.recruit_challenge_box .info_box');
            var $count = $challenge.find('.fraction .count');
            var $num = $challenge.find('.fraction .num');
            var $txt = $challenge.find('.txt');
            var $company = $challenge.find('.company');
            var $name = $challenge.find('.name');
            var challengeSlider = new Swiper('.challengeSlider', {
                slidesPerView: '1',
                spaceBetween: 70,
                on : {
                    init : function(swiper){
                        var num = swiper.slides.length;
                        $count.text(1);
                        $num.text(num);
                    },
                    slideChange : function(swiper){
                        var idx = swiper.realIndex+1;
                        $count.text(idx);
                        console.log(idx);
                    }
                }
              });
            $('.recruit_challenge_box .btn_next').on('click',function(){
                challengeSlider.slideNext();
            });
            $('.recruit_challenge_box .btn_prev').on('click',function(){
                challengeSlider.slidePrev();
            });
        }
    }
    $.fn.map = function(){
        var $locList = $('.cv_location_box .cv_list li');
        var $mapList = $('.cv_location_box .map_list li');
        $locList.on('mouseenter',function(){
            var idx =$(this).index();
            $locList.removeClass('on');
            $mapList.removeClass('on');
            $(this).addClass('on');
            $mapList.eq(idx).addClass('on');
        });
    }
    $.fn.footer = function(){
        var $family = $('.family_link');
        $family.find('.btn').on('mouseenter',function(){
            $(this).find('+.list').show();
        });
        $family.on('mouseleave',function(){
            $(this).find('.list').hide();
        });
    }
})(jQuery);

window.onload = function(){
    $.fn.topmenu();     //topmenu
    $.fn.swiper();      //swiper
    $.fn.map();         //map
    $.fn.footer();      //footer
    

}
