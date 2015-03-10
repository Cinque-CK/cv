$(window).load(function(){
    iso();
    initialize();
});

/* 
 * Helper function for set active menu link.
 */
 var current_hash, current_url, current_url_array;
function set_active_menu_link() {
    "use strict";
    // Set active classe.
    current_hash = window.location.hash.substr(3);

    if (current_hash == undefined || current_hash == '') {
        current_url = window.location.pathname.substr(1);
    } else {
        current_url = current_hash;
    }

    current_url_array = current_url.split('/');

    if (current_url_array.length > 1) {
        current_url = current_url_array[current_url_array.length - 1];
    }

    if (current_url.length > 0) {
        $('ul.header-menu a[href$="' + current_url + '"]').addClass('active not-use-pjax');
    }
    // Block click for active menu link
    $('ul.header-menu a.active.not-use-pjax').on('click', function(event) {
        return false;
    });
}

//Isotope portfolio
function iso() {
    "use strict";

    var $container = $('#container');

    $container.isotope({
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        },
        animationEngine: 'best-available',
        itemSelector: '.element',
        layoutMode: 'fitRows',
        filter: '.page-1'
    });

    //Filter categories
    $('#filters a').click(function(){
        var $categories = $(this).attr('data-filter');
        $('#filters').attr('data-active', $categories);
        
        var $optionSet = $(this).parents('#filters');
        $optionSet.find('.active').removeClass('active');
        $(this).addClass('active');
        
        reorder();
        return false;
    });

    //Filter pages
    $('#filters-page a').click(function(){
        var $pages = $(this).attr('data-filter');
        $('#filters-page').attr('data-active', $pages);

        var $optionSet = $(this).parents('#filters-page');
        $optionSet.find('.active').removeClass('active');
        $(this).addClass('active');

        reorder();
        return false;
    });

    //PrettyPhoto
    $("a[rel^='prettyPhoto']").click(function(e) {
        if ($(window).width()<480) {
            e.stopImmediatePropagation();
            window.location = $(this).attr('href');
        }
        e.preventDefault();
        return false;
    });
        
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: '',
        theme: 'light_rounded'
    });
// }
    // alert('This is a test');
}
        
    
function reorder(){
    "use strict";

    var $categories = $('#filters').attr('data-active'),
        $pages = $('#filters-page').attr('data-active'),
        $container = $('#container');


    if (typeof $categories === 'undefined') {
        $categories = "";
    }
    if (typeof $pages === 'undefined') {
        $pages = "";
    }

    var filterString = $categories + $pages;

    if (filterString === "**"){
        filterString = "*";
    }

    $container.isotope({
        filter: filterString,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
}

function initialize() {
    "use strict";

    var map_canvas = document.getElementById('map_canvas');
    var map_options = {
      center: new google.maps.LatLng(52.5177242, 13.3956712),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(map_canvas, map_options);
}

$(document).ready(function($){
    "use strict";

    //switcher
    if($('.layout-switcher').length > 0) {
        if($.cookie('onoffswitch') === 'on'){
            $('.layout-switcher').find('span.basic-view').removeClass('active');
            $('.layout-switcher').find('span.timeline').addClass('active');
            $('#resume-basicview').hide();
            $('.onoffswitch-checkbox').prop("checked", true);
        }else{
            $('.layout-switcher').find('span.timeline').removeClass('active');
            $('.layout-switcher').find('span.basic-view').addClass('active');
            $('#resume-timeline').hide();
            $('.onoffswitch-checkbox').prop("checked", null);
        }

        $('.onoffswitch-checkbox').change(function(){
            $(this).parents('.layout-switcher').find('span').toggleClass('active');

            if($('.timeline').hasClass('active')) {
                $('#resume-basicview').fadeToggle(300);
                $('#resume-timeline').delay(300).fadeToggle(300);
                $.cookie('onoffswitch', 'on', { path: '/', expires: 10 });
            }else{
                $('#resume-timeline').fadeToggle(300);
                $('#resume-basicview').delay(300).fadeToggle(300);
                $.cookie('onoffswitch', 'off', { path: '/', expires: 10 });
            }
        });
    }

    //qr-code
    if($('.qr-code').length > 0) {
        $('.qr-code').click(function(){
            $(this).toggleClass('active');
        });
    }

    //contact-form
    if ($('#contact-form').length > 0){
        $('#contact-form').on('submit', function(e) {
            $.post('mail.php', $(this).serialize(), function(feedback) {
                $('#contact-form .message p').remove();
                $('#contact-form .message').append(feedback);
            });
            e.preventDefault();
        });
    }
});

$(window).bind('scroll',function(){
    "use strict";
    
    var offset = (document.all)?document.body.scrollTop:window.pageYOffset;

    if(offset > 500){
        $('.technical-skills ul li').each(function(){
            var $wd = $(this).find('.progress').attr('data-process');
            if($(this).find('.progress').width() === 0) {
                $(this).find('.progress').animate({'width': $wd}, 700);
                $(this).find('.value').delay(500).fadeIn("slow");
            }
        });
    }
});