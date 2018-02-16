define(function () {

    return function () {

        let timeline = new TimelineMax({
            id: 'Page Intro Animation'
        });

        // page logo

        let logo = document.querySelector('.redline__logo');

        timeline.to(logo, 0.5, {
            autoAlpha: 1,
            scale: 1,
            ease: Power4.easeOut
        });


        // page navigation

        let nav__list__items = document.querySelectorAll('nav ul li.scroll__button');

        timeline.staggerTo(
            nav__list__items,
            0.5, {
                autoAlpha: 1,
                x: 0,
                ease: Power4.easeOut
            }, '0.2'
        );

        // social icons

        let socialIcons = document.querySelectorAll('.social__icon__wrap ul li a');

        timeline.staggerTo(
            socialIcons, 0.1, {
                autoAlpha: 1,
                scale: 1,
                ease: Bounce.easeOut
            }, '0.2', '-=0.4'
        );

        // contact button

        let contactButton = document.querySelector('.contact__btn');

        timeline.to(
            contactButton, 1.5, {
                autoAlpha: 1,
                y: 0,
                ease: Power4.easeOut
            },
            '-=0.61'
        );

        return timeline

    }

})