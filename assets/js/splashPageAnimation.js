define(function () {

    return function () {

        let splashPageTimline = new TimelineMax({
            id: 'Splash Page Timeline'
        });

        // Splash Page Animation

        function SplashPageAnimation() {

            let timeline = new TimelineMax();
            let curtain = document.querySelector('.curtain');
            let logo = document.querySelector('.square img');
            let square = document.querySelector('.curtain .square');

            TweenMax.set(square, {
                autoAlpha: 0
            });

            timeline.to(square, 0.8, {
                autoAlpha: 1,
                scale: 2,
                ease: Elastic.easeOut.config(1, 0.5)
            }).to(logo, 0.5, {
                autoAlpha: 1,
                ease: Power4.easeOut
            }, '-=0.80').to(square, 1.2, {
                width: '100%',
                height: '100%',
                autoAlpha: 0,
                delay: 0.5,
                ease: Power4.easeOut
            }).to(logo, 0.2, {
                autoAlpha: 0,
                ease: Power4.easeOut
            }, '1.20').to(curtain, 0.1, {
                autoAlpha: 0,
                ease: Power4.easeOut
            }, '1.45');

            return timeline;
        }

        splashPageTimline.add(SplashPageAnimation());
    }

});