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

$('.job_item').each(function(){
    var apply = $(this).find('.apply');
    var modal = $('#modal_job');

    var modal_name = modal.find('.name');
    var modal_type = modal.find('.type');
    var modal_body = modal.find('.body_text');
    var modal_location= modal.find('.location_test');
    var modal_employ = modal.find('.employer');
    var modal_date = modal.find('.date');
    var modal_position = modal.find('.position_title');
    
    var title = $(this).find('.title').html();
    var location = $(this).find('.location_modal').html();
    var position = $(this).find('.long_title').html();
    var date = $(this).find('.date').html();
    var content = $(this).find('.content').html();
    var employ = $(this).find('.employer').html();

    apply.click(function(){
        modal_name.html(title);
        modal_type.html(position);
        modal_location.html(location);
        modal_body.html(content);
        modal_employ.html(employ);
        modal_date.html(date);
        modal_position.html(position);
        modal.modal('show');
    });
});



  // Search contractor
  $('#search_job').keyup(function(){
    
    var value = $(this).val();
    // var parent = $(this).parent().parent().find('#first_last_name').val();
    // var company_name = $(this).parent().parent().find('#company_name').val();
    // var description = $(this).parent().parent().find('#description').val();

    var filterItems = $('[data-filter-item]');
    var filterItems_title = $('[data-filter-title]');
    // var filterItems_description = $('[data-filter-description]');
    var filterItem = $('[data-filter-item]').val();

    if ( value != '' ) {
        filterItems.addClass('hidden');
        filterItems_title.addClass('hidden');

        $('[data-filter-item][data-filter-title*="' + value.toLowerCase() + '"]').removeClass('hidden');

        $('.results').css('font-weight', 'bold');
        $('.all_jobs').css('font-weight', 'normal');
        console.log('test')
    } else {
        filterItems.removeClass('hidden');
        filterItems_title.removeClass('hidden');
        $('.results').css('font-weight', 'normal');
        $('.all_jobs').css('font-weight', 'bold');
    }

  });