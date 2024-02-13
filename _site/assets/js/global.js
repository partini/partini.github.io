function animateBussniessText(){
    $('#busineses_intro_text').css('animation','animateBusniessText 1s');
}

$('.info-toggles .item').each(function(){
    $(this).find('button').click(function(){
        //$('.info-toggles .content').css('display','none');
        $(this).parent().find('.content').toggle(function(){
            if($(this).is(":visible")){
                //$('.item').hide();
                $(this).parent().show();
            }else{
                $('.item').show();
            }
        });
    });
});

// var myFullpage = new fullpage('#fullpage', {
//     verticalCentered: false,
//     responsiveWidth: 992
// });

// var myFullpageServices = new fullpage('#services', {
//     verticalCentered: false,
//     responsiveWidth: 992
// });

$('.back_top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    //fullpage_api.moveTo(1, 0);
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
        scrollTop: (to.offset().top - 50)
    },500);
}

// $('.go_to_provide').click(function(){
//     fullpage_api.moveTo(2, 0);
// });

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
    var modal_apply = modal.find('.apply');
    var modal_deadline = modal.find('.deadline_modal');

    var title = $(this).find('.title').html();
    var location = $(this).find('.location_modal').html();
    var position = $(this).find('.long_title').html();
    var date = $(this).find('.date').html();
    var content = $(this).find('.content').html();
    var employ = $(this).find('.employer').html();
    var deadline = $(this).find('.deadline').html();

    apply.click(function(){
        modal_name.html(title);
        modal_type.html(position);
        modal_location.html(location);
        modal_body.html(content);
        modal_employ.html(employ);
        modal_date.html(date);
        modal_position.html(position);
        modal_deadline.html(deadline);
        modal.modal('show');
        modal_apply.attr('href', `mailto:careers@incodeks.com?subject=`+position);
    });

    console.log(position);
});

  $('#search_job').keyup(function(){
    var value = $(this).val();
    var filterItems = $('[data-filter-item]');
    var filterItems_title = $('[data-filter-title]');
    //var filterItem = $('[data-filter-item]').val();

    if ( value != '' ) {
        filterItems.addClass('hidden');
        filterItems_title.addClass('hidden');
        $('[data-filter-item][data-filter-title*="' + value.toLowerCase() + '"]').removeClass('hidden');
        $('.results').css('font-weight', 'bold');
        $('.all_jobs').css('font-weight', 'normal');
    } else {
        filterItems.removeClass('hidden');
        filterItems_title.removeClass('hidden');
        $('.results').css('font-weight', 'normal');
        $('.all_jobs').css('font-weight', 'bold');
    }

  });

  $('.search_job_item').each(function(){
    var sub_menu = $(this).find('.menu_sub');
    $(this).click(function(){
        sub_menu.toggle(function(){
            if($(this).is(":visible")){
                $('.menu_sub').hide();
                $(this).show();
            }else{
                $(this).hide();
            }
        });
    });
  });

$(window).on("scroll", function() {
    if($(window).scrollTop() > 400) {
        $(".navbar").addClass("on-scroll");
    } else {
       $(".navbar").removeClass("on-scroll");
    }
});

$(window).on("scroll", function() {
   if($(window).scrollTop() > 400) {
       $(".estimate-button").addClass("in-scroll");
   } else {
      $(".estimate-button").removeClass("in-scroll");
   }
});

// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Enterprise', 20],
  ['Mid-size', 20],
  ['Startup', 60],
]);

let width_chart = 400;

if (window.matchMedia("(max-width: 767px)").matches){
    width_chart = 350;
}

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'',  'width':width_chart, 'height':'100%','is3D':true,};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}


function drawChart1() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
       ['Year', 'Development budget'],
       ['In Development',  50],
       ['In Product Design',  12],
    ]);

    var options = {title: 'Budget (in thousands US dollars)','is3D':true,}; 

    // Instantiate and draw the chart.
    var chart = new google.visualization.ColumnChart(document.getElementById('column_chart'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart1);

 console.clear();
