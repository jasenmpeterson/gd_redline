define(function () {
    
        var timelineHasPlayed;
        
        return function () {

            var timeline = new TimelineMax({
                id: 'Service Section Timeline'
            });

            var sub__header = document.querySelector('.section__wrap.fourth h5');
            var sub__header__line = document.querySelector('.section__wrap.fourth .line');
            var header = document.querySelector('.section__wrap.fourth h1');
            var content = document.querySelector('.section__wrap.fourth p:first-of-type');
            var contentTwo = document.querySelector('.section__wrap.fourth p:last-of-type');

            if (!timelineHasPlayed) {
                // sub header

                timeline.to(sub__header, 1, {
                    x: 0,
                    autoAlpha: 1,
                    ease: Power4.easeInOut
                });

                // sub header line

                timeline.to(sub__header__line, 1, {
                    x: 0,
                    autoAlpha: 1,
                    delay: 1,
                    ease: Power4.easeInOut
                }, '-=1.71');

                // header

                timeline.to(header, 1, {
                    y: 0,
                    autoAlpha: 1,
                    ease: Power4.easeInOut
                }, '-=1.2');

                // content

                timeline.to(content, 1, {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.3,
                    ease: Power4.easeOut
                }, '-=0.8');

                timeline.to(contentTwo, 1, {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.3,
                    ease: Power4.easeOut
                }, '-=0.7');


                timeline.play();

            }

            timelineHasPlayed = true;


        }
    
    })