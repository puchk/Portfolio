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

var speed = 0;
var scroll = 0;
var container = $('.carousel-frame');
var container_w = container.width();
var max_scroll = container[0].scrollWidth - container.outerWidth();

container.on('mousemove', function(e) {
    var mouse_x = e.pageX - container.offset().left;
    var mouseperc = 100 * mouse_x / container_w;
    speed = mouseperc - 50;
}).on ( 'mouseleave', function() {
    speed = 0;
});

function updatescroll() {
        if (speed !== 0) {
            scroll += speed / 5;
        if (scroll < 0) scroll = 0;
        if (scroll > max_scroll) scroll = max_scroll;
            $('.carousel-frame').scrollLeft(scroll);
    }
    $("#speed").html('Speed: ' + speed);
    $("#scroll").html('Scroll: ' + scroll);
    window.requestAnimationFrame(updatescroll);
}
window.requestAnimationFrame(updatescroll);