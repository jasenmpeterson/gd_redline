define(function () {

    var timelineHasPlayed;
    
    return function () {

        var timeline = new TimelineMax({
            id: 'Construction Section Timeline'
        });

        var sub__header = document.querySelector('.section__wrap.second h5');
        var sub__header__line = document.querySelector('.section__wrap.second .line');
        var header = document.querySelector('.section__wrap.second h1');
        var content = document.querySelector('.section__wrap.second p:first-of-type');
        var attachment = document.querySelector('.section__wrap.second .attachment__wrap');
        var attachmentText = document.querySelector('.section__wrap.second .attachment__wrap p');
        var video = document.querySelector('.section__wrap.second video');
        var list = document.querySelectorAll('.section__wrap.second li');


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


            timeline.to(video, 1, {
                y: 0,
                autoAlpha: 1,
                delay: 0.6,
                ease: Power4.easeInOut,
                onCompvare: function () {

                    const video = document.querySelector('.section__wrap.second video');
                    if (window.matchMedia('(min-width: 64rem)').matches) {
                        video.play();
                    }

                }
            }, '-=1.2');


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
                }, '0.2', '-=0.6'
            );


            timeline.to(attachment, 1, {
                y: 0,
                autoAlpha: 1,
                ease: Power4.easeInOut
            }, '-=0.6');

            timeline.to(attachmentText, 1, {
                y: 0,
                autoAlpha: 1,
                ease: Power4.easeInOut
            }, '-=0.6');

            timeline.play();

        }

        timelineHasPlayed = true;
        
    }

   

})