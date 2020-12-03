(function($) {
    $.fn.topmenu = function(){
        var $header = $('.header');
        var $mbMenu = $('.mb_menu');
        var $mypage = $('.mypage');
        var $topmenu = $('.topmenu');
        var $wrap = $('.wrap');
        var $topmenuCont = $topmenu.find('>li');
        if($(document).width() > 960){
            $topmenuCont.find('.submenu').hide();
            $mbMenu.show();
            $mypage.find('.cont').hide();
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
        }else{
            $mbMenu.hide();
            $topmenuCont.find('.submenu').show();
            $mypage.find('.cont').show();
            $header.find('.btn_menu').on('click',function(){
                $mbMenu.fadeIn();
                $wrap.addClass('hidden');

            });
            $mbMenu.find('.btn_close').on('click',function(){
                $mbMenu.fadeOut();
                $wrap.removeClass('hidden');
            });
            
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
            if($(document).width() > 960){
                var $challenge = $('.recruit_challenge_box .info_box');
                var $count = $challenge.find('.fraction .count');
                var $num = $challenge.find('.fraction .num');
                var $txt = $challenge.find('.txt');
                var $company = $challenge.find('.company');
                var $name = $challenge.find('.name');
                var challengeSlider = new Swiper('.challengeSlider', {
                    slidesPerView: 'auto',
                    spaceBetween: 70,
                    centeredSlides: true,
                    on : {
                        init : function(swiper){
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
                        slideChange : function(swiper){
                            var idx = swiper.realIndex+1;
                            $count.text(idx);
                        },
                        slideChangeTransitionStart :function(){
                            var $active = $('.challengeSlider .swiper-slide-active');
                            var txt = $active.find('.info .txt').text();
                            var company = $active.find('.info .company').text();
                            var name = $active.find('.info .name').text();
                            $txt.text(txt);
                            $company.text(company);
                            $name.text(name);
                        }
                    }
                });
                $challenge.find('.btn_next').on('click',function(){
                    challengeSlider.slideNext();
                });
                $challenge.find('.btn_prev').on('click',function(){
                    challengeSlider.slidePrev();
                });
            }else{
                var challengeSlider = new Swiper('.challengeSlider', {
                    slidesPerView: '1',
                    centeredSlides: true,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                    }
                });
            }
        }
        gallerySlider : {
            var $gallerybox = $('.gallery_box');
            var $count2 = $gallerybox.find('.count')
            var $num2 = $gallerybox.find('.num')
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                spaceBetween: 30,
                slidesPerView:6,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
              });
              var galleryTop = new Swiper('.gallery-top', {
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                thumbs: {
                  swiper: galleryThumbs
                },
                on : {
                    init : function(){
                        var num = $('.gallery-top .swiper-slide').length;
                        $num2.text(num);
                        $count2.text(1);
                    },
                    slideChange : function(swiper){
                        var idx = swiper.realIndex+1;
                        $count2.text(idx);
                    }
                }
            });
            $gallerybox.find('.btn_next').on('click',function(){
                galleryTop.slideNext();
            });
            $gallerybox.find('.btn_prev').on('click',function(){
                galleryTop.slidePrev();
            });
        }
        viewSlider : {
            var viewSlider = new Swiper('.swiper-container', {
                pagination: {
                  el: '.swiper-pagination',
                  type: 'fraction',
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              });
        }
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
            $(this).find('.btn_share').on('mouseenter',function(){
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
        var idx = $('.tab_wrap .tab_navi li.on').index();

        $tabCont.hide();
        $tabCont.eq(idx).show();
        $tabBtn.on('click', function(){
            var i=$(this).index();
            $tabCont.hide();
            $tabCont.eq(i).show();
            $tabBtn.removeClass('on');
            $(this).addClass('on');
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
    $.fn.swiper();      //swiper
    $.fn.map();         //map
    $.fn.share();       //share button
    $.fn.footer();      //footer
    $.fn.tab();         //tab
    $.fn.toggle();      //toggle
    $.fn.faq();         //faq list
}
window.onresize = function(){
    $.fn.topmenu();     //topmenu
    $.fn.swiper();      //swiper
}
