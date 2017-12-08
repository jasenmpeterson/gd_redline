define(function () {

    return class ServiceAnimation {

        constructor(timeline, sub__header, sub__header__line, header, content) {

            this.timeline = new TimelineMax({
                id: 'Service Section Timeline',
                delay: 2.5,
                paused: true
            });

            this.sub__header = document.querySelector('.service__wrap .content__cell h5');
            this.sub__header__line = document.querySelector('.service__wrap .line');
            this.header = document.querySelector('.service__wrap .content__cell h1');
            this.content = document.querySelector('.service__wrap .content__wrap p');

            // sub header

            TweenMax.set(this.sub__header, {
                x: 100,
                autoAlpha: 0
            });


            // sub header line

            TweenMax.set(this.sub__header__line, {
                x: '-100',
                autoAlpha: 0
            });

            // header

            TweenMax.set(this.header, {
                y: '100',
                autoAlpha: 0
            });


            // content

            TweenMax.set(this.content, {
                y: '100',
                autoAlpha: 0
            });

        }

        play() {

            // sub header

            this.timeline.to(this.sub__header, 1, {
                x: 0,
                autoAlpha: 1,
                ease: Power4.easeInOut
            });

            // sub header line

            this.timeline.to(this.sub__header__line, 1, {
                x: 0,
                autoAlpha: 1,
                delay: 1,
                ease: Power4.easeInOut
            }, '-=2');

            // header

            this.timeline.to(this.header, 1, {
                y: 0,
                autoAlpha: 1,
                ease: Power4.easeInOut
            }, '-=0.95');


            // content

            this.timeline.to(this.content, 1, {
                y: 0,
                autoAlpha: 1,
                ease: Power4.easeInOut
            }, '-=0.8');

            this.timeline.play();

        }


    }

})