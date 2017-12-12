define(function () {

    let timeline = new TimelineMax({
        id: 'Intro Section Timeline'
    });

    return function () {

        let sub__header = document.querySelector('.section__wrap.first h5');
        let sub__header__line = document.querySelector('.section__wrap.first .line');
        let header = document.querySelector('.section__wrap.first h1');
        let product__shot = document.querySelector('.section__wrap.first .product__shot');
        let mousey = document.querySelector('.mousey');

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
        }, '-=1.2');

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