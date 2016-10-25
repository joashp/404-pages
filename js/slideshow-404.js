/*
 * Slideshow - 404 Page
 * Build Date: October 2016
 * Author: joashp
 */

$(window).load(function() {
    $("body").vegas({
        slides: [
            { src: "img/slide1.jpeg" },
            { src: "img/slide2.jpeg" },
            { src: "img/slide3.jpeg" }
        ],
        delay: 5000,
        transition: 'fade'
    });
});