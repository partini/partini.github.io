$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#busineses').position().top - 100 ){
        animateBussniessText();
    }
});

function animateBussniessText(){
    $('#busineses_intro_text').css('animation','animateBusniessText 1s');
}

$('.info-toggles .item').each(function(){
    $(this).find('button').click(function(){
        //$('.info-toggles .content').css('display','none');
        $(this).parent().find('.content').toggle();
    });
});

var myFullpage = new fullpage('#fullpage', {
    verticalCentered: false,
});