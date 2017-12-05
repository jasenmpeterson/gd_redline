define(function () {

    return function () {

        let timeline = new TimelineMax({
            id: 'Page Intro Animation',
            delay: 0.90
        });

        // page logo

        let logo = document.querySelector('.redline__logo');

        TweenMax.set(logo, {
            autoAlpha: 0,
            scale: 0.5
        });

        timeline.to(logo, 1.2, {
            autoAlpha: 1,
            scale: 1,
            ease: Elastic.easeInOut.config(0.5, 0.3)
        });


        // page navigation

        let nav__list__items = document.querySelectorAll('nav ul li.scroll__button');

        for (var item of nav__list__items) {
            TweenMax.set(item, {
                autoAlpha: 0,
                x: 125
            })
        }

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

        for (let item of socialIcons) {
            TweenMax.set(item, {
                autoAlpha: 0,
                scale: 0.5
            })
        };

        timeline.staggerTo(
            socialIcons, 0.1, {
                autoAlpha: 1,
                scale: 1,
                ease: Bounce.easeOut
            }, '0.2', '-=0.4'
        );

        // contact button

        let contactButton = document.querySelector('.contact__btn');

        TweenMax.set(contactButton, {
            autoAlpha: 0,
            y: 50
        });

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