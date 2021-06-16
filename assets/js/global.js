function animateBussniessText(){
    $('#busineses_intro_text').css('animation','animateBusniessText 1s');
}

$('.info-toggles .item').each(function(){
    $(this).find('button').click(function(){
        //$('.info-toggles .content').css('display','none');
        $(this).parent().find('.content').toggle(function(){
            if($(this).is(":visible")){
                $('.item').hide();
                $(this).parent().show();
            }else{
                $('.item').show();
            }
        });
    });
});

var myFullpage = new fullpage('#fullpage', {
    verticalCentered: false,
    responsiveWidth: 992
});

var myFullpageServices = new fullpage('#services', {
    verticalCentered: false,
    responsiveWidth: 992
});

$('.back_top').click(function(){
    fullpage_api.moveTo(1, 0);
});

$('#explore').click(function(){
    fullpage_api.moveTo(2, 0);
});

$('#menu_burger').click(function(){
    $('#navbarResponsive').toggle(function(){
        if($(this).is(":visible")){
            $('.navbar').addClass('menu_mobile_show')
        }else{
            $('.navbar').removeClass('menu_mobile_show')
        }
    });
});

function animateScrollAnchor(from, to){
    $('html, body').animate({
        scrollTop: (to.offset().top)
    },500);
}

$('.go_to_provide').click(function(){
    fullpage_api.moveTo(2, 0);
});

$('.menu_nav_left_page ul li').each(function(){
    $(this).click(function(){
        $('.menu_nav_left_page ul li').removeClass('active');
        $(this).addClass('active');
    });
});