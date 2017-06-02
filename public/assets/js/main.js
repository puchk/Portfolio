/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

// SCROLL===========================================
var b = null;
$( '.carousel-frame ul' ).on( 'mousemove', function(e) {
    var container = $(this).parent();
    if ((e.pageX - container.offset().left) < container.width() / 2) {
        var direction = function() {
            container.animate( {scrollLeft: '-=600'}, 1700, 'linear', direction );
        }
        if ((b == false) || (b == null)) {
            b = true;
            container.stop( true ).animate( {scrollLeft: '-=600'}, 2000, 'linear', direction );
        }
    } else {
        var direction = function() {
            container.animate( {scrollLeft: '+=600'}, 1700, 'linear', direction );
        }
        if ((b == true) || (b == null)) {
            b = false;
            container.stop( true ).animate( {scrollLeft: '+=600'}, 2000, 'linear', direction );
        }
    }
}).on ( 'mouseleave', function() {
    var container = $(this).parent();
    container.stop( true );
    b = null;
});