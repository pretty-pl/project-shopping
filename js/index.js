$(function() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var recomTop = $(".recom").offset().top;
    toggleTool();
    var flag = true;

    function toggleTool() {
        if ($(document).scrollTop() >= recomTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    $(window).scroll(function() {
        toggleTool();
        if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }
    });

    $(".fixedtool li").click(function() {
        flag = false;
        var index = $(this).index();
        var current = $(".floor .w").eq(index).offset().top;
        $("body, html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });
        $(this).addClass("current").siblings().removeClass("current");
    });
})