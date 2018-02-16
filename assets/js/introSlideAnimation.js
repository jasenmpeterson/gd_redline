define(function () {

    var timeline = new TimelineMax({
        id: 'Intro Section Timeline'
    });

    return function () {

        var sub__header = document.querySelector('.section__wrap.first h5');
        var sub__header__line = document.querySelector('.section__wrap.first .line');
        var header = document.querySelector('.section__wrap.first h1');
        var product__shot = document.querySelector('.section__wrap.first .product__shot');
        var mousey = document.querySelector('.mousey');
        var videoThumbnail = document.querySelector(".video__thumbnail");

        // sub header

        timeline.to( sub__header, 1, {
            x: 0,
            autoAlpha: 1,
            ease: Power4.easeInOut
        });

        // sub header line

        timeline.to( sub__header__line, 1, {
            x: 0,
            autoAlpha: 1,
            delay: 1,
            ease: Power4.easeInOut
        }, '-=1.71');

        // header

        timeline.to( header, 1, {
            y: 0,
            autoAlpha: 1,
            ease: Power4.easeInOut
        }, '-=1.2')

        // video thumbnail

        timeline.to( videoThumbnail, 1, {
            y: 0,
            autoAlpha: 1,
            ease: Power4.easeInOut
        }, '-=1');

        // product shot

        timeline.to( product__shot, 1.5, {
            y: 0,
            autoAlpha: 1,
            ease: Power4.easeInOut
        }, '-=0.5');


        // mousey

        timeline.to( mousey, 1.5, {
            y: 0,
            autoAlpha: 1,
            ease: Power4.easeInOut
        }, '-=1.32');

        return timeline;

    }
})