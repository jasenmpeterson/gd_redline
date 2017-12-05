define(function () {

    return class ConstructionAnimation {

        constructor(timeline, sub__header, sub__header__line, header, product__shot, content, attachment) {

            this.timeline = new TimelineMax({
                id: 'Construction Section Timeline',
                delay: 2.5,
                paused: true
            });

            this.sub__header = document.querySelector('.construction__wrap .content__cell h5');
            this.sub__header__line = document.querySelector('.construction__wrap .line');
            this.header = document.querySelector('.construction__wrap .content__cell h1');
            this.product__shot = document.querySelector('.construction__wrap .product__shot');
            this.content = document.querySelector('.construction__wrap .content__wrap p');
            this.attachment = document.querySelector('.construction__wrap .attachment__wrap');

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


            // product shot

            TweenMax.set(this.product__shot, {
                y: '100',
                autoAlpha: 0
            });

            // content

            TweenMax.set(this.content, {
                y: '100',
                autoAlpha: 0
            });

            TweenMax.set(this.attachment, {
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


            this.timeline.to(this.content, 1, {
                y: 0,
                autoAlpha: 1,
                ease: Power4.easeInOut
            }, '-=0.8');

            // attachment

            this.timeline.to(this.attachment, 1.5, {
                y: 0,
                autoAlpha: 1,
                ease: Power4.easeInOut
            }, '-=0.8');

            // product shot

            this.timeline.to(this.product__shot, 1.5, {
                y: 0,
                autoAlpha: 1,
                ease: Power4.easeInOut
            }, '-=0.5');

            this.timeline.play();

        }


    }

})