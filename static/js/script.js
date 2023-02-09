$("#big-section").mouseover(function () {
    $('.hero-red-fill , .hero-white-fill , .first-block').removeClass('d-none');
    $('.hero-content-wrapper').addClass('active');
    $('.top-right-block').removeClass('active-first');
});

$("#big-section").mouseout(function () {
    $('.hero-red-fill , .hero-white-fill , .first-block').addClass('d-none');
    $('.hero-content-wrapper').removeClass('active');
});

$("#mid-second-block").mouseover(function () {
    $('.hero-text-small-container , .hero-small-red-fill , .hero-small-black-fill ').removeClass('d-none');
    $('.hero-content-wrapper').addClass('active-one');
    $('.top-right-block').removeClass('active-first');
});

$("#mid-second-block").mouseout(function () {
    $('.hero-text-small-container , .hero-small-red-fill , .hero-small-black-fill ').addClass('d-none');
    $('.hero-content-wrapper').removeClass('active-one');
});

$("#bottom-big-block").mouseover(function () {
    $('.hero-text-big-container , .hero-big-black-fill').removeClass('d-none');
    $('.hero-content-wrapper').addClass('active');
    $('.top-right-block').removeClass('active-first');
});

$("#bottom-big-block").mouseout(function () {
    $('.hero-text-big-container , .hero-big-black-fill').addClass('d-none');
    $('.hero-content-wrapper').removeClass('active');
});

$('.grid-1-animation').one("webkitAnimationEnd animationend oAnimationEnd animationend",
    function (event) {
        // Do something when the animation ends
        $('.top-right-block').addClass('active-first');
    });




// header scroll hide/show

var lastScrollTop = 0;
$(window).on('scroll', function (event) {
    var st = $(this).scrollTop();
    if (st > 60) {
        if (st > lastScrollTop) {
            $('header').addClass('slide-up-hide');
        } else {
            $('header').removeClass('slide-up-hide');
        }
        lastScrollTop = st;
    } else {
        $('header').removeClass('slide-up-hide');
    }

});


// var swiper = new Swiper(".crousel__slider", {
//     slidesPerView: 1,
//     spaceBetween: 110,
//     // loop: true,
//     effect: "fade",
//     autoplay: {
//         delay: 1500,
//     },
// });


/* Which media query
 **************************************************************/
function swiperMode() {
    let desktop = window.matchMedia('(min-width: 992px)');
    let mobile = window.matchMedia('(max-width: 991px)');

    // Enable (for mobile)
    if (desktop.matches) {
        if (!init) {
            init = true;
            var sectionCrousel = new Swiper(".section_crousel", {
                slidesPerView: 1,
                spaceBetween: 110,
                loop: true,
                effect: "fade",
                autoplay: {
                    delay: 3000,
                },
            });
            // leaders carousal
            var leaderCarousal = new Swiper(".leaders-carousal", {
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: '4',
                spaceBetween: 10,
                loop:true,
                speed: 800,
                // mousewheel: true,
                grabCursor: true,
                autoplay:{
                    delay: 2000,
                }
               
            });

            if ($("#services-landing")[0]) {
            // fullpage customization 
                $('#services-landing').fullpage({
                    sectionSelector: '.vertical-scrolling',
                    normalScrollElements: '#scrolldiv',
                    scrollOverflow: true,
                    offsetSections: true,
                    scrollingSpeed: 800,
                    easing: 'easeOut',
                });
            }

            // menu click action
            $('.has-submenu').on('click', function (e) {
                e.preventDefault();
                var menuName = $(this).data('id');
                $('.mega-menu-item').addClass('slide-down');
                $('body').toggleClass('mega-menu-open');
                if ($(menuName).hasClass('show-menu')) {
                    $('.mega-menu-item').removeClass('slide-down');
                    $('.mega-menu-warp').removeClass('show-menu');
                    $(this).removeClass('active');
                } else {
                    $('.has-submenu').removeClass('active');
                    $('.mega-menu-item').addClass('slide-down');
                    $('.mega-menu-warp').removeClass('show-menu');
                    $(menuName).addClass('show-menu');
                    $(this).addClass('active');
                }
            })
        }

    }

    // Disable (for mobile)
    else if (mobile.matches) {
        // sectionCrousel.destroy();
        // leaderCarousal.destroy();
        init = false;
    }
}

/* On Load
 **************************************************************/
window.addEventListener('load', function () {
    swiperMode();
});

/* On Resize
 **************************************************************/
window.addEventListener('resize', function () {
    swiperMode();
});





// text-thumb-carousal
const selector = '.text-thumb-list li';

$(selector).on('click', function () {
    $(selector).removeClass('active');
    $(this).addClass('active');
    thisdata = '.' + $(this).attr('data-href');
    let n = thisdata.replace(/\s/g, '').charAt(thisdata.length - 1);
    document.getElementById("indicator").innerHTML = 'your success depends on ' + n + '/5';
    $('.list-detail').removeClass('active');
    $(thisdata).addClass('active');
});


// text-thumb-carousal END
var swiper = Swiper;
var init = false;




// hamburger 

$('.hamburger-menu').click(function () {
    $(this).toggleClass('open-menu');
    $('.site-main-menu').toggleClass('open-menu');
    $('header').toggleClass('hamburger-menu-open');
});




setInterval(function () {
    if ($('.mega-menu-item').hasClass('slide-down')) {
        $('.page-layout').addClass('blur-back');
    } else {
        $('.page-layout').removeClass('blur-back');
    }
}, 200);


// when click ing outside of menu close menu
$(document).on("click", function(event){
    var $trigger = $("header");
    if($trigger !== event.target && !$trigger.has(event.target).length){
       
        $('.mega-menu-item').removeClass('slide-down');
        $('.mega-menu-warp').removeClass('show-menu');
        $('body').removeClass('mega-menu-open');
        $('.page-layout').removeClass('blur-black');
        $('header').removeClass('show-hamburger-menu');
        $('product-dropdown').removeClass('show-menu');
    }            
});







if ($("#indicator")[0]) {

    var distance_11 = $('#indicator').offset().top;


    $(window).scroll(function () {
        if ($(this).scrollTop() >= distance_11) {
            $('.text-thumb-list').addClass('showElementsSticky');
            $('.service-list-details').addClass('sticky');
            $('#indicator').addClass('fixed');
        } else {
            $('.text-thumb-list').removeClass('showElementsSticky');
            $('.service-list-details').removeClass('sticky');
            $('#indicator').removeClass('fixed');
        }
    });



    var distance_1 = $('#indicator').offset().top;

    $(window).scroll(function () {
        if ($(this).scrollTop() >= distance_1) {
            $('#indicator').addClass('fixed');
        } else {
            $('#indicator').removeClass('fixed');
        }
    });

}

$.fn.isInViewport = function () {


    var elementTop = $(this).offset().top;

    var elementBottom = elementTop + $(this).outerHeight() / 2;

    var viewportTop = $(window).scrollTop();

    var viewportHalf = viewportTop + $(window).height() / 2;

    return elementBottom > viewportTop && elementTop < viewportHalf;

};

$(window).on('load resize scroll', function () {

    $('.text-thumb-carousal').each(function () {

        if ($(this).isInViewport()) {


        } else {
            $('.text-thumb-list').removeClass('showElementsSticky');
            $('.service-list-details').removeClass('sticky');
            $('#indicator').removeClass('fixed');

        }

    });

});


if ($(".text-parallax")[0]) {
    var distance = $('.text-parallax').offset().top - 800;

    $(window).scroll(function () {
        if ($(this).scrollTop() >= distance) {

            $('.parallax-layer-1').addClass('active');


            // // on scroll inside parallax


            // $(window).scroll(function () {
            //     var pixels = $(window).scrollTop() - $('.fullwidth-text-rotation').offset().top;
            //     var pageHeight = $('.fullwidth-text-rotation').height() - ($(window).height());
            //     var progress = -(200 * pixels / pageHeight);

            //     $(".cubespinner span").css("top", progress + "px");
            // })

        }


        if (window.pageYOffset == 0) {
            $('.parallax-layer-1').removeClass('active');
            $('.full-width-wrapper').removeClass('grid-anim');
            $('.single-img-container').removeClass('active');
        }
    })
}








// on scroll Animation

var controller = new ScrollMagic.Controller();

// build scenes
// new ScrollMagic.Scene({triggerElement: "#triggre" ,    
//                         offset: -200,
//                         reverse: false, // only do once

//                     })
//                 .setClassToggle(".text-thumb-carousal", "snap-start") // add class toggle
//                 .addIndicators() //  (requires plugin)
//                 .addTo(controller);


// build scenes
new ScrollMagic.Scene({
    triggerElement: "#service-card",
    offset: -100,
    reverse: true, // only do once

})
    .setClassToggle(".card", "active") // add class toggle
    // .addIndicators() //  (requires plugin)
    .addTo(controller);

// build scenes
new ScrollMagic.Scene({
    triggerElement: "#insight-three-grid",
    offset: -100,
    reverse: false, // only do once

})
    .setClassToggle(".insight-three-card-single , .insight-three-card", "fadeInUp") // add class toggle
    // .addIndicators() //  (requires plugin)
    .addTo(controller);

// build scenes
new ScrollMagic.Scene({
    triggerElement: "#newsroom-three-card",
    offset: -100,
    reverse: false, // only do once

})
    .setClassToggle(".news-card , .newsroom-three-card", "fadeInUp") // add class toggle
    // .addIndicators() //  (requires plugin)
    .addTo(controller);


// build scenes
new ScrollMagic.Scene({
    triggerElement: "#fullwidth-text",
    offset: -100,
    reverse: true, // only do once

})
    .setClassToggle(".full-width-wrapper", "grid-anim") // add class toggle
    // .addIndicators() //  (requires plugin)
    .addTo(controller);



// build scenes
new ScrollMagic.Scene({
    triggerElement: "#single-img-three-number",
    offset: 100,
    reverse: true, // only do once

})
    .setClassToggle(".single-img-container", "active") // add class toggle
    // .addIndicators() //  (requires plugin)
    .addTo(controller);


// build scenes
new ScrollMagic.Scene({
    triggerElement: "#first-grid-2",
    offset: 100,
    reverse: true, // only do once

})
    .setClassToggle("#first-grid-2", "active") // add class toggle
    // .addIndicators() //  (requires plugin)
    .addTo(controller);

// build scenes
new ScrollMagic.Scene({
    triggerElement: "#second-grid-2",
    offset: 100,
    reverse: true, // only do once

})
    .setClassToggle("#second-grid-2", "active") // add class toggle
    // .addIndicators() //  (requires plugin)
    .addTo(controller);

    
// build scenes
new ScrollMagic.Scene({
    triggerElement: "#logo-grid-animation",
    offset: -100,
    reverse: true, // only do once

})
    .setClassToggle(".logo-grid-animation", "active") // add class toggle
    // .addIndicators() //  (requires plugin)
    .on("enter" , function(){
        animationStart()
    })
    .on("leave" , function(){
        num = 0;
        clearAll()
        animationRefresh()
    })
    .addTo(controller);


// build scenes
new ScrollMagic.Scene({
    triggerElement: "#grid-large-triangle",
    offset: 100,
    reverse: true, // only do once

})
    .setClassToggle("#grid-large-triangle", "active") // add class toggle
    // .addIndicators() //  (requires plugin)
    .addTo(controller);


// build scenes
new ScrollMagic.Scene({
    triggerElement: "#grid-7",
    offset: 100,
    reverse: true, // only do once

})
    .setClassToggle("#grid-7", "active") // add class toggle
    // .addIndicators() //  (requires plugin)
    .addTo(controller);

var image_height = window.innerHeight - 168;
setInterval(function () {
    if ($('body').hasClass('fp-viewing-1')) {
        $('.page-wrap').removeClass('active');
    }

    if ($('body').hasClass('fp-viewing-7')) {
        $('.page-wrap').addClass('active-up');
    }else{
        $('.page-wrap').removeClass('active-up'); 
    }



    if ($('body').hasClass('fp-viewing-2')) {
        $('.page-wrap').addClass('active');
        $('.type-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, 0, 0px)', 'transform-style': 'preserve-3d' });
        $('.title-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, 0, 0px)', 'transform-style': 'preserve-3d' });
        $('.desc-1').css('opacity', '1');
        $('.desc-2 , .desc-3 , .desc-4 , .desc-5').css('opacity', '0');
        $('.image-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, 0, 0px)', 'transform-style': 'preserve-3d' });
        $('.bullets-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, 0, 0px)', 'transform-style': 'preserve-3d' });
    }

    if ($('body').hasClass('fp-viewing-3')) {
        $('.type-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -18px, 0px)', 'transform-style': 'preserve-3d' });
        $('.title-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -112px, 0px)', 'transform-style': 'preserve-3d' });
        $('.desc-2').css('opacity', '1');
        $('.desc-1 , .desc-3 , .desc-4 , .desc-5').css('opacity', '0');
        $('.image-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + image_height + 'px, 0px)', 'transform-style': 'preserve-3d' });
        $('.bullets-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -108px, 0px)', 'transform-style': 'preserve-3d' });
    }

    if ($('body').hasClass('fp-viewing-4')) {
        $('.type-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -36px, 0px)', 'transform-style': 'preserve-3d' });
        $('.title-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -224px, 0px)', 'transform-style': 'preserve-3d' });
        $('.desc-3').css('opacity', '1');
        $('.desc-1 , .desc-2 , .desc-4 , .desc-5').css('opacity', '0');
        $('.image-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 2) + 'px, 0px)', 'transform-style': 'preserve-3d' });
        $('.bullets-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -216px, 0px)', 'transform-style': 'preserve-3d' });
    }

    if ($('body').hasClass('fp-viewing-5')) {
        $('.type-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -54px, 0px)', 'transform-style': 'preserve-3d' });
        $('.title-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -336px, 0px)', 'transform-style': 'preserve-3d' });
        $('.desc-4').css('opacity', '1');
        $('.desc-1 , .desc-2 , .desc-3 , .desc-5').css('opacity', '0');
        $('.image-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 3) + 'px, 0px)', 'transform-style': 'preserve-3d' });
        $('.bullets-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -324px, 0px)', 'transform-style': 'preserve-3d' });
    }

    if ($('body').hasClass('fp-viewing-6')) {
        $('.type-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -72px, 0px)', 'transform-style': 'preserve-3d' });
        $('.title-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -448px, 0px)', 'transform-style': 'preserve-3d' });
        $('.desc-5').css('opacity', '1');
        $('.desc-1 , .desc-2 , .desc-3 , .desc-4').css('opacity', '0');
        $('.image-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 4) + 'px, 0px)', 'transform-style': 'preserve-3d' });
        $('.bullets-list').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -432px, 0px)', 'transform-style': 'preserve-3d' });
    }

}, 200);


var swiper = new Swiper(".timeline-thumb-carousel", {
    spaceBetween: 10,
    slidesPerView: 5,
    // freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 0,
            freeMode: false,
        },
    },
});

var swiper2 = new Swiper(".timeline-text-carousel", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    // mousewheel: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


if ($(".services-menu-sticky")[0]) {
    var servicesMenu = $('.services-menu-sticky').offset().top;
    $(window).scroll(function() {
        if ( $(this).scrollTop() >= servicesMenu ) {
            $('.services-menu-sticky').addClass('showElementsSticky');
        } else {
            $('.services-menu-sticky').removeClass('showElementsSticky');
        }
    });
}



$('.menu-list').on('click', function () {
   $(this).toggleClass('active');
});

$('.menu-list li').on('click', function () {
    $('.menu-list li').removeClass('show');
    $(this).addClass('show');
});




const n = $('.logo-row1 li').length;
// divide number elements in the row by 2
const n2 = (n / 2);

// add class in first 6 elements of the row
var j = 0;
for (let i = 0; i < n2; i++) {
        $('.logo-row li[data-id=' + i + ']').addClass('shown animate p' + j);
    j++;
}


let initial = $('.logo-anim-grid').html();

$.fn.animateLeft = function (i, x, r) {
    // can only be applied to p2, p3, p5 
    // i - logo that will go to left
    // x - next logo that will appear behind
    // r - row to which the animation is applied


    let item0 = $('.logo-row' + r + ' li[data-pos=' + (i-1) + ']');
    let item1 = $('.logo-row' + r + ' li[data-pos=' + i + ']');
    let item2 = $('.logo-row' + r + ' li[data-pos=' + x + ']');
    
    $(item0).attr('data-pos', 0);
    $(item1)
        // .addClass('moveLeft')
        .removeClass('p'+ i)
        .addClass('p'+ (i-1))
        .attr('data-pos', (i-1))
        .css('z-index', 10)
        // .queue(function() {
        //     $( this ).removeClass().addClass('p'+ (i -1 )).dequeue();
        // });



        // $(item1).one("webkitAnimationEnd animationend oAnimationEnd animationend",
        //     function(event) {         
        //         $( this ).removeClass().addClass('p'+ (i -1 ));
        // });
    
        $(item2).removeClass('animate').addClass('p' + i ).css('z-index', -1).addClass('shown').attr('data-pos', (i));

        $(item1).one("transitionend ontransitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
        function(event) {         
        //         $('.logo-row ul li[data-pos="0"]').removeClass().removeAttr("style");
                $(item0).removeClass();
                $( this ).addClass('animate').removeAttr('style');
                $(item2).addClass('animate').removeAttr('style');
        });

    // setTimeout(function () {
    //     console.log('initialise');
    //     $('.logo-row ul li[data-pos="0"]').removeClass().removeAttr("style");
    //     $(item1).removeClass().addClass('shown p' + (i-1));
    //     $(item2).removeAttr("style");
    // }, 1500);

    // .queue(function() {
    //     $( this ).addClass( "newcolor" ).dequeue();
    // })

}

$.fn.refreshLogos = function () {
    $('.logo-row ul li[data-pos="0"]').removeClass().removeAttr("style");
}

$.fn.animateTop = function (i, x, rr) {
    // i - logo that will go to top
    // x - next logo that will appear 
    // r - row to which the animation is applied

    let item1 = $('.logo-row' + rr + ' li[data-pos=' + i + ']');
    let item2 = $('.logo-row' + rr + ' li[data-pos=' + x + ']');

    // $('.logo-row ul li[data-pos="0"]').removeClass();

    $(item2).addClass('p' + i + ' after');        
    
    setTimeout(function(){
        // $(item1).addClass('moveUp').attr('data-pos', 0);
        $(item1).addClass('moveUp');
        $(item2).addClass('animate p' + i).removeClass('after').attr('data-pos', i);
    }, 50);

}

let num = 0;
time = 1500;
let r = 0;

function animationStart(){
    for (let i = 6; i <=n2 ; i++) {
                
        // n - step number
        // time - timeout for each step
        // fn . step (n) - till n = 7 ( n = 1 )


        delay(i)



    }
}


function animationRefresh(){
    $('.logo-anim-grid').html(initial);
}



function delay(i) {
    // console.log(i, 'i : ' + num , num*time );

    // animation step 1
    setTimeout(function () {
        $.fn.animateLeft(2, 7, 1);
        $.fn.animateTop(3, 7, 2);
        // console.log( '0 : ' + num , num*time );
    }, (num*time));

    num = num + 1;
    // animation step 2
    setTimeout(function () {
        $.fn.animateLeft(5, 8, 1);
        $.fn.animateTop(5, 8, 2);
        // console.log( '1 : ' + num , num*time );
    }, (num*time));


    num = num + 1;
    // animation step 3
    setTimeout(() => {
        $.fn.animateTop(3, 9, 1);
        $.fn.animateLeft(2, 9, 2);
        // console.log( '2 : ' + num , num*time );
    }, (num*time));

    num = num + 1;
    // animation step 4
    setTimeout(() => {
        $.fn.animateLeft(5, 10, 1);
        $.fn.animateTop(2, 10, 2);
        // console.log( '3 : ' + num , num*time );
    }, (num*time));

    num = num + 1;
    // animation step 5
    setTimeout(() => {
        $.fn.animateLeft(2, 11, 1);
        $.fn.animateTop(6, 11, 2);
        // console.log( '4 : ' + num , num*time );
    }, (num*time));


    num = num + 1;
    // animation step 6
    setTimeout(() => {
        $.fn.animateTop(3, 12, 1);
        $.fn.animateLeft(5, 12, 2);
        // console.log( '5 : ' + num , num*time );
    }, (num*time));

    num = num + 1;
    // animation step 7
    setTimeout(() => {
        $.fn.animateLeft(3, 13, 1);
        $.fn.animateTop(2, 13, 2);
        // console.log( '6 :' + num , num*time );
    }, (num*time));
}

function clearAll() {
    for (var i = setTimeout(function() {}, 0); i > 0; i--) {
      window.clearInterval(i);
      window.clearTimeout(i);
      if (window.cancelAnimationFrame) window.cancelAnimationFrame(i);
    }
}

// video script
$('video').on('click', function(){
    var parent = $(this).parent('.video-wrapper');
    if(this.paused){
        this.play();
        parent.find('.play-btn').addClass('hide-btn');
    } else {
        this.pause();
        parent.find('.play-btn').removeClass('hide-btn');
    }

})

// diversity scroll magic
var diversity_video = document.getElementById('diversity');

if(diversity_video){
new ScrollMagic.Scene({
    triggerElement: "#diversity-video",
    duration: "100%",
    offset: 0,
    reverse: true, // only do once

})
    .on("enter" , function(){
           diversity_video.play();
           $('#diversity-video .play-btn').addClass('hide-btn');
    })
    .on("leave" , function(){
        diversity_video.pause();
        $('#diversity-video .play-btn').removeClass('hide-btn');
    })
    //.addIndicators() //  (requires plugin)
    .addTo(controller);
}


//SERVICE-DETAIL OVERVIEW

new ScrollMagic.Scene({
    triggerElement: "#services-overview",
    offset: 0,
    reverse: true, // only do once

})
    .on("enter" , function(){
        $(".menu-item").removeClass('show')
        $(".item-1").addClass('show')
        })
    //.addIndicators() //  (requires plugin)
    .addTo(controller);

//SERVICE DETAIL THEME
new ScrollMagic.Scene({
    triggerElement: "#services-themes-horizontal-scroll",
    offset: 0,
    reverse: true, // only do once

})
    .on("enter" , function(){
        $(".menu-item").removeClass('show')
        // $(".item-2").addClass('show')
    })
    .on("leave" , function(){
        $(".item-1").addClass('show')
    })
    .setClassToggle(".item-2", "show") // add class toggle
    //.addIndicators() //  (requires plugin)
    .addTo(controller);

//SERVICE DETAIL SERVICE OFFERING
new ScrollMagic.Scene({
    triggerElement: "#text-thumb-carousal",
    offset: 0,
    reverse: true, // only do once

})
    .on("enter" , function(){
        $(".menu-item").removeClass('show')
        // $(".item-3").addClass('show')
    }) 
    .on("leave" , function(){
        $(".item-2").addClass('show')
    })
    .setClassToggle(".item-3", "show") // add class toggle
    // .addIndicators() //  (requires plugin)
    .addTo(controller);

//SERVICE DETAIL SUCCESS
new ScrollMagic.Scene({
    triggerElement: "#stories",
    offset: 0,
    reverse: true, // only do once

})
    .on("enter" , function(){
        $(".menu-item").removeClass('show')
        // $(".item-4").addClass('show')
    })
    .on("leave" , function(){
        $(".item-3").addClass('show')
    })
    .setClassToggle(".item-4", "show") // add class toggle
    // .addIndicators() //  (requires plugin)
    .addTo(controller);

// SERVICE DETAIL INSIGHT
new ScrollMagic.Scene({
    triggerElement: "#insight-three-grid",
    offset: 0,
    reverse: true, // only do once

})
    // .addIndicators() //  (requires plugin)
    .on("enter" , function(){
        $(".menu-item").removeClass('show')
        // $(".item-5").addClass('show')
    }) 
    .on("leave" , function(){
        $(".item-4").addClass('show')
    })
    .setClassToggle(".item-5", "show") // add class toggle
    // .addIndicators() //  (requires plugin)
    .addTo(controller);



$(window).on('scroll', function (event) {

});

            

$('.magnify-btn').on('click', function(){
    $('.magnify-btn').toggleClass('cross-btn');
    $('.insight-graph').toggleClass('magnify');
    $('body').toggleClass('mega-menu-open');
});


// Insight-download button 

$(".download").click(function (e) {
    e.preventDefault();
    $(".insight-download ").toggleClass("d-none")
    $(".download-insight").toggleClass("d-none")
})

$(".submit").click(function (e) {
    e.preventDefault();
    $(".thanku").removeClass("d-none")
    $(".download-insight").addClass("d-none")
})

// Contact us page

$(document).ready(function(){
    $('ul li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
    });
});

// leadership-landing

$(document).ready(function(){
    $(".leader-landings").click(function(){
      window.location=" /leadership-landing";
    });
});

// carrer master class accordion

var allPanels = $('.accordion > dd').hide();
$('.accordion > dt > a').click(function(e) {
    e.preventDefault();
  allPanels.slideUp();
  $('.accordion dt').removeClass();
  allPanels.removeClass();
  
  $(this).parent().addClass('active').next().slideDown().addClass('slide-down');
 
});


// Podapt-foundation tabs jQuery
$('.tab-link').click( function() {

    var tabID = $(this).attr('data-tab');

    $(this).addClass('active').siblings().removeClass('active');

    $('#tab-'+tabID).addClass('active').siblings().removeClass('active');

    $('#tabyar-'+tabID).addClass('active').siblings().removeClass('active');
});


// diversity page animation
var toShow = $('.diversity-grid .grid-image').not('.shown');
let initial_grid = $('.diversity-grid').html();
// build scenes
new ScrollMagic.Scene({
    triggerElement: "#diversity-full-width-image-animate",
    duration: "100%",
    offset: -100,
    reverse: true, // only do once

})
   .setClassToggle("#diversity-full-width-image-animate", "active") // add class toggle
    //.addIndicators() //  (requires plugin)
    .on("enter" , function(){
        $.each(toShow, function (i) {

            var x = Math.floor( Math.random() * 5) + 1;
        
        
            function showImage() {
                $(toShow[i]).addClass('shown p' + x).css("display", "block").css("z-index", "10");
            }
        
            setTimeout(function () {
                showImage();
                console.log(i);
        
            }, 1000*i);
        
        });
    })
    .on("leave" , function(){
        clearAll()
        $('.diversity-grid').html(initial_grid);
    })
.addTo(controller);




// share button on click

$('.red-share-btn').click(function(){
    $('.share-icon').toggleClass('active');
})