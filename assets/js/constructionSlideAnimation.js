define(function () {

    var timelineHasPlayed;

    return class ConstructionAnimation {

        constructor(timeline, sub__header, sub__header__line, header, content, attachment, attachmentText, video) {

            this.timeline = new TimelineMax({
                id: 'Construction Section Timeline'
            });

            this.sub__header = document.querySelector('.section__wrap.second h5');
            this.sub__header__line = document.querySelector('.section__wrap.second .line');
            this.header = document.querySelector('.section__wrap.second h1');
            this.content = document.querySelector('.section__wrap.second p:first-of-type');
            this.attachment = document.querySelector('.section__wrap.second .attachment__wrap');
            this.attachmentText = document.querySelector('.section__wrap.second .attachment__wrap p');
            this.video = document.querySelector('.section__wrap.second video');
        }

        play() {

            if (!timelineHasPlayed) {

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


                this.timeline.to(this.video, 1, {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.6,
                    ease: Power4.easeInOut,
                    onComplete: function () {

                        const video = document.querySelector('.section__wrap.second video');
                        if (window.matchMedia('(min-width: 64rem)').matches) {
                            video.play();
                        }

                    }
                }, '-=1.2');


                this.timeline.to(this.content, 1, {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.3,
                    ease: Power4.easeInOut
                }, '-=0.8');

                this.timeline.to(this.attachment, 1, {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.2,
                    ease: Power4.easeInOut
                }, '-=0.8');

                this.timeline.to(this.attachmentText, 1, {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.4,
                    ease: Power4.easeInOut
                }, '-=0.8');

                this.timeline.play();
            }

            timelineHasPlayed = true;

        }


    }

})