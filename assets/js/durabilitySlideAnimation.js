define(function () {

    var timelineHasPlayed;
    
    return function () {
        
        var timeline = new TimelineMax({
            id: 'Durability Section Timeline'
        });

        var sub__header = document.querySelector('.section__wrap.third h5');
        var sub__header__line = document.querySelector('.section__wrap.third .line');
        var header = document.querySelector('.section__wrap.third h1');
        var content = document.querySelector('.section__wrap.third p');
        var list = document.querySelectorAll('.section__wrap.third li');


        if (!timelineHasPlayed) {

            const video = document.querySelector('.section__wrap.third video');
            if (window.matchMedia('(min-width: 64rem)').matches) {
                video.play();
            }

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
                ease: Power4.easeInOut
            }, '-=0.8');

            // list

            timeline.staggerTo(
                list, 1, {
                    autoAlpha: 1,
                    x: 0,
                    ease: Power4.easeOut
                }, '0.2', '-=0.4'
            );


            timeline.play();
        }

        timelineHasPlayed = true;
    
    }

})