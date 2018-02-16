define(function () {

    var timelineHasPlayed;

    return class DurabilityAnimation {

        constructor(timeline, sub__header, sub__header__line, header, content) {

            this.timeline = new TimelineMax({
                id: 'Durability Section Timeline'
            });

            this.sub__header = document.querySelector('.section__wrap.third h5');
            this.sub__header__line = document.querySelector('.section__wrap.third .line');
            this.header = document.querySelector('.section__wrap.third h1');
            this.content = document.querySelector('.section__wrap.third p');
            this.list = document.querySelectorAll('.section__wrap.third li');

        }

        play() {
            

            if (!timelineHasPlayed) {

                const video = document.querySelector('.section__wrap.third video');
                if (window.matchMedia('(min-width: 64rem)').matches) {
                    video.play();
                }

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
                }, '-=1.71');

                // header

                this.timeline.to(this.header, 1, {
                    y: 0,
                    autoAlpha: 1,
                    ease: Power4.easeInOut
                }, '-=1.2');

                // content

                this.timeline.to(this.content, 1, {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.3,
                    ease: Power4.easeInOut
                }, '-=0.8');

                // list

                this.timeline.staggerTo(
                    this.list, 1, {
                        autoAlpha: 1,
                        x: 0,
                        ease: Power4.easeOut
                    }, '0.2', '-=0.4'
                );


                this.timeline.play();
            }

            timelineHasPlayed = true;

        }


    }

})