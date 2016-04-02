$(document).ready(function() {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll > 584) {

            $('.my_sammich').addClass('animated flip');

        }

        console.log(verticalScroll);

    });

    //four items function
    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll >= 1074) {
            
            $('#unhide_me').removeClass('hide_me');

            $('#my_1').addClass('animated fadeInDownBig');

            $('#my_2').addClass('animated fadeInRightBig');

            $('#my_3').addClass('animated fadeInUpBig');

            $('#my_4').addClass('animated fadeInLeftBig');


        }

    });
});