define(function () {

    let timeline = new TimelineMax({
        id: 'Intro Section Timeline',
        delay: '2'
    });

    return function () {

        let sub__header = document.querySelector('.introduction__wrap h5');
        let sub__header__line = document.querySelector('.introduction__wrap .line');
        let header = document.querySelector('.introduction__wrap h1');
        let product__shot = document.querySelector('.introduction__wrap .product__shot');
        let mousey = document.querySelector('.mousey');

        // sub header

        TweenMax.set( sub__header, {
            x: 100,
            autoAlpha: 0
        });

        timeline.to( sub__header, 1, {
            x: 0,
            autoAlpha: 1,
            ease: Power4.easeInOut
        });

        // sub header line

        TweenMax.set( sub__header__line, {
            x: '-100',
            autoAlpha: 0
        });

        timeline.to( sub__header__line, 1, {
            x: 0,
            autoAlpha: 1,
            delay: 1,
            ease: Power4.easeInOut
        }, '-=1.71');

        // header

        TweenMax.set( header, {
            y: '100',
            autoAlpha: 0
        });

        timeline.to( header, 1, {
            y: 0,
            autoAlpha: 1,
            ease: Power4.easeInOut
        }, '-=1.2');

        // product shot

        TweenMax.set( product__shot, {
            y: '100',
            autoAlpha: 0
        });

        timeline.to( product__shot, 1.5, {
            y: 0,
            autoAlpha: 1,
            ease: Power4.easeInOut
        }, '-=0.5');


        // mousey

        TweenMax.set( mousey, {
            y: '100',
            autoAlpha: 0
        });

        timeline.to( mousey, 1.5, {
            y: 0,
            autoAlpha: 1,
            ease: Power4.easeInOut
        }, '-=1.32');

        return timeline

    }
})