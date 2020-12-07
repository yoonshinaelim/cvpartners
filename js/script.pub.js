(function($) {
    $.fn.topmenu = function(){
        var $header = $('.header');
        var $mbMenu = $('.mb_menu');
        var $mypage = $('.mypage');
        var $topmenu = $('.topmenu');
        var $wrap = $('.wrap');
        var $topmenuCont = $topmenu.find('>li');
        $wrap.removeClass('hidden');
        if($(document).width() > 960){
            $mbMenu.show();
            $topmenuCont.find('.submenu').hide();
            $mypage.find('.cont').hide();
            $topmenuCont.on('mouseenter',function(){
                $('.submenubox').remove();
                $topmenuCont.find('.submenu').hide();
                $(this).find('.submenu').show();
                $header.append('<div class="submenubox"></div>');
            });
            $topmenu.find('.submenu').on('mouseleave',function(){
                reset();
            });
            $mypage.find('.btn').on('mouseenter',function(){
                reset();
                $(this).find('+.cont').stop().fadeIn();
            });
            $mypage.on('mouseleave',function(){
                $(this).find('.cont').stop().fadeOut();
            });
        }else{
            $mypage.off();
            $mbMenu.hide();
            $('.submenubox').remove();
            $topmenuCont.off();
            $topmenu.find('.submenu').off();
            $topmenu.find('.submenu').show();
            $mypage.find('.cont').show();
            $header.find('.btn_menu').on('click',function(){
                $mbMenu.show();
                $wrap.addClass('hidden');
            });
            $mbMenu.find('.btn_close').on('click',function(){
                $mbMenu.hide();
                $wrap.removeClass('hidden');
            });
            
        }
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
                speed: 1000,
                autoplay : 3000,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
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
                slidesPerView: 'auto',
                spaceBetween :70,
                centeredSlides: true,
                onInit : function(swiper){
                    var num = swiper.slides.length;
                    var $active = $('.challengeSlider .swiper-slide-active');
                    var txt = $active.find('.info .txt').text();
                    var company = $active.find('.info .company').text();
                    var name = $active.find('.info .name').text();
                    $count.text(1);
                    $num.text(num);
                    $txt.text(txt);
                    $company.text(company);
                    $name.text(name);
                },
                onSlideChangeStart : function(swiper){
                    var idx = swiper.realIndex+1;
                    $count.text(idx);
                },
                onSlideChangeTransitionStart :function(){
                    var $active = $('.challengeSlider .swiper-slide-active');
                    var txt = $active.find('.info .txt').text();
                    var company = $active.find('.info .company').text();
                    var name = $active.find('.info .name').text();
                    $txt.text(txt);
                    $company.text(company);
                    $name.text(name);
                }
            });
            $challenge.find('.btn_next').on('click',function(){
                challengeSlider.slideNext();
            });
            $challenge.find('.btn_prev').on('click',function(){
                challengeSlider.slidePrev();
            });
            $(window).resize(function(){
                winW = $(window).width();
                if(winW > 1170){
                    challengeSlider.slideTo(0);
                }
            });
        }
        gallerySlider : {
            var $gallerybox = $('.gallery_box');
            var $count2 = $gallerybox.find('.count')
            var $num2 = $gallerybox.find('.num')
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                freeMode: true,
                slidesPerView:'auto',
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
              });
              var galleryTop = new Swiper('.gallery-top', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                onInit : function(){
                    var num = $('.gallery-top .swiper-slide').length;
                    $num2.text(num);
                    $count2.text(1);
                },
                onSlideChangeStart : function(swiper){
                    var idx = swiper.realIndex+1;
                    $count2.text(idx);
                    galleryThumbs.slideTo(idx - 1);
                }
            });
            $('.gallery-thumbs .swiper-slide').on('click',function(){
                var idx = $(this).index();
                galleryTop.slideTo(idx);

            });
            $gallerybox.find('.btn_next').on('click',function(){
                galleryTop.slideNext();
            });
            $gallerybox.find('.btn_prev').on('click',function(){
                galleryTop.slidePrev();
            });
        }
        viewSlider : {
            var $count3 = $('.viewSlider .swiper-pagination-current');
            var $num3 = $('.viewSlider .swiper-pagination-total');
            var viewSlider = new Swiper('.viewSlider', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                onInit: function(){
                    var num = $('.viewSlider .swiper-slide').length;
                    $num3.text(num);
                    $count3.text(1);
                },
                onSlideChangeStart : function(swiper){
                    var idx = swiper.realIndex+1;
                    $count3.text(idx);
                }
              });
        }
    }
    $.fn.swiperMb = function(){
        var challengeSliderMb = new Swiper('.challengeSliderMb', {
            pagination: '.swiper-pagination',
        });
    }
    $.fn.map = function(){
        if($(document).width() > 960){
            var $locList = $('.cv_location_box .cv_list li');
            var $mapList = $('.cv_location_box .map_list li');
            $locList.first().addClass('on');
            $mapList.first().addClass('on');
            $locList.on('mouseenter',function(){
                var idx =$(this).index();
                $locList.removeClass('on');
                $mapList.removeClass('on');
                $(this).addClass('on');
                $mapList.eq(idx).addClass('on');
            });
        }
    }
    $.fn.share = function(){
        var $social = $('.social');
        $social.each(function(){
            $(this).find('.btn_share').on('click',function(){
                $(this).find('+.sel').addClass('on');
            });
            $social.find('.sel').on('mouseleave',function(){
                $(this).removeClass('on');
            });
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
    $.fn.tab = function(){
        var $tabBtn = $('.tab_wrap .tab_navi li');
        var $tabCont = $('.tab_wrap .tab_content');
        var contNum = $tabCont.length;
        $tabCont.hide();
        $tabCont.eq(0).show();
        $tabBtn.on('click', function(){
        var i=$(this).index();
        $tabBtn.removeClass('on');
        $(this).addClass('on');
            if(contNum > 1){
                $tabCont.hide();
                $tabCont.eq(i).show();
            }
        });
    }
    $.fn.toggle = function(){
        $('.btn_toggle button').on('click', function(){
            if(!$(this).hasClass('on')){
                $(this).addClass('on');
                $(this).siblings('button').removeClass('on');
            }else{
                $(this).removeClass('on');
                $(this).siblings('button').addClass('on');
            }
        });
    }
    $.fn.faq = function(){
        var $sortList = $('.sort_list');
        var $faqList = $('.faq_list');
        $sortList.find('li').on('click',function(){
            $sortList.find('li').removeClass('on');
            $(this).addClass('on');
        });
        $faqList.find('dt').on('click',function(){
            var boolean = $(this).hasClass('on');
            $faqList.find('dt').removeClass('on');
            $faqList.find('dd').hide();
            if(!boolean){
                $(this).addClass('on');
                $(this).find('+dd').show();
            }else{
                $(this).removeClass('on');
                $(this).find('+dd').hide();
            }
        });
    }
})(jQuery);

window.onload = function(){
    $.fn.topmenu();     //topmenu
    $.fn.swiper();      //swiper
    $.fn.swiperMb();    //swiperMb
    $.fn.map();         //map
    $.fn.share();       //share button
    $.fn.footer();      //footer
    $.fn.tab();         //tab
    $.fn.toggle();      //toggle
    $.fn.faq();         //faq list
}
window.onresize = function(){
    $.fn.topmenu();     //topmenu
}
