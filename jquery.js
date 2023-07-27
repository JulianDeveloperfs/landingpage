$(document).ready(function() {


function hoverOnInfoOne() {
    $('.col-one').hover(
        function() {
            if ($(window).width() >= 992) {
            $('.custom-col-lg').addClass('hovered');
            $('.col-one').addClass('col-one-hovered');
            $('.col-one').addClass('hvr-shutter-out-horizontal');
            $('.p-info-one').removeClass('inactive');
            $('.svg-one').addClass('inactive');
            $('.svg-one__two').removeClass('inactive');
            $('.video-1').removeClass('inactive');
            $('.video-1')[0].play();
            $('.wwd-img').addClass('inactive');

            }
        },
        function() {
            if ($(window).width() >= 992) {
            $('.custom-col-lg').removeClass('hovered');
            $('.col-one').removeClass('col-one-hovered');
            $('.p-info-one').addClass('inactive');
            $('.svg-one').removeClass('inactive');
            $('.svg-one__two').addClass('inactive');
            $('.video-1').addClass('inactive');
            $('.video-1')[0].pause(); 
            $('.wwd-img').removeClass('inactive');
        }
});
}
hoverOnInfoOne();

function hoverOnInfoTwo() {
    $('.col-two').hover(
        function() {
            if ($(window).width() >= 992) {
                
            $('.custom-col-lg').addClass('hovered');
            $('.col-two').addClass('col-one-hovered');
            $('.col-two').addClass('hvr-shutter-out-horizontal');
            $('.p-info-two').removeClass('inactive');
            $('.svg-two').addClass('inactive');
            $('.svg-two__two').removeClass('inactive');
            $('.video-2').removeClass('inactive');
            $('.video-2')[0].play();
            $('.wwd-img').addClass('inactive');
            }
        },
        function() {
            if ($(window).width() >= 992) {
            $('.custom-col-lg').removeClass('hovered');
            $('.col-two').removeClass('col-one-hovered');
            $('.p-info-two').addClass('inactive');
            $('.svg-two').removeClass('inactive');
            $('.svg-two__two').addClass('inactive');
            $('.video-2').addClass('inactive');
            $('.video-2')[0].pause(); 
            $('.wwd-img').removeClass('inactive');
        }
    }
    );
}
hoverOnInfoTwo();


function hoverOnInfoThree() {
    $('.col-three').hover(
        function() {
            if ($(window).width() >= 992) {
            $('.custom-col-lg').addClass('hovered');
            $('.col-three').addClass('col-one-hovered');
            $('.col-three').addClass('hvr-shutter-out-horizontal');
            $('.p-info-three').removeClass('inactive');
            $('.svg-three').addClass('inactive');
            $('.svg-three__two').removeClass('inactive');
            $('.video-3').removeClass('inactive');
            $('.video-3')[0].play();
            $('.wwd-img').addClass('inactive');
            }
        },
        function() {
            if ($(window).width() >= 992) {
            $('.custom-col-lg').removeClass('hovered');
            $('.col-three').removeClass('col-one-hovered');
            $('.p-info-three').addClass('inactive');
            $('.svg-three').removeClass('inactive');
            $('.svg-three__two').addClass('inactive');
            $('.video-3').addClass('inactive');
            $('.video-3')[0].pause();
            $('.wwd-img').removeClass('inactive');
        }

    }
    );
}
hoverOnInfoThree();



function removeClassOnResize() {
    if ($(window).width() >= 992) {
        $('.custom-col-lg').removeClass('inactive');
        $('.btn').removeClass('inactive');
    } else {
        $('.custom-col-lg').addClass('inactive');
        $('.btn').addClass('inactive');
    }
}

removeClassOnResize();

$(window).resize(function() {
    removeClassOnResize();
});

function removeClassOnResizePInfo() {
    if ($(window).width() >= 992) {
        $('.p-info').addClass('inactive');
        $('.card-text').addClass('inactive');
    } else {
        $('.p-info').removeClass('inactive');
        $('.card-text').removeClass('inactive');
    }
}

removeClassOnResizePInfo();

$(window).resize(function() {
    removeClassOnResizePInfo();
});

function hoverOnCardOne() {
    $('.card-one').hover(
        function() {
            if ($(window).width() >= 992) {
            $('.work-data').addClass('hover-work');
            $('.text-one').removeClass('inactive');
            
            }
        },
        function() {
            if ($(window).width() >= 992) {
            $('.text-one').addClass('inactive');
            $('.work-data').removeClass('hover-work');

        }
});
}
hoverOnCardOne();

function hoverOnCardTwo() {
    $('.card-two').hover(
        function() {
            if ($(window).width() >= 992) {
            $('.work-data').addClass('hover-work');
            $('.text-two').removeClass('inactive');
            
            }
        },
        function() {
            if ($(window).width() >= 992) {
            $('.text-two').addClass('inactive');
            $('.work-data').removeClass('hover-work');

        }
});
}
hoverOnCardTwo();

function hoverOnCardThree() {
    $('.card-three').hover(
        function() {
            if ($(window).width() >= 992) {
            $('.work-data').addClass('hover-work');
            $('.text-three').removeClass('inactive');
            
            }
        },
        function() {
            if ($(window).width() >= 992) {
            $('.text-three').addClass('inactive');
            $('.work-data').removeClass('hover-work');

        }
});
}
hoverOnCardThree();
});

