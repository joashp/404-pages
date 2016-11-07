/*
 * Video - 404 Page
 * Build Date: October 2016
 * Author: joashp
 */

$(window).load(function() {

    var myPlayer = jQuery("#bgndVideo").YTPlayer();

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    // fallback for smaller devices
    if (isMobile.any()) {
        $("body").vegas({
            slides: [
                { src: "img/slide1.jpeg" },
                { src: "img/slide2.jpeg" },
                { src: "img/slide3.jpeg" }
            ],
            delay: 5000,
            transition: 'fade'
        });

    } else {
        $(".player").mb_YTPlayer();
    }

});