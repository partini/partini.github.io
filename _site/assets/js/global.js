$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#busineses').position().top - 100 ){
        animateBussniessText();
    }
});

function animateBussniessText(){
    $('#busineses_intro_text').css('animation','animateBusniessText 1s');
}