define(function () {
    
        var timelineHasPlayed;
    
        return class ServiceAnimation {
    
            constructor(timeline, sub__header, sub__header__line, header, content) {
    
                this.timeline = new TimelineMax({
                    id: 'Service Section Timeline'
                });
    
                this.sub__header = document.querySelector('.section__wrap.fourth h5');
                this.sub__header__line = document.querySelector('.section__wrap.fourth .line');
                this.header = document.querySelector('.section__wrap.fourth h1');
                this.content = document.querySelector('.section__wrap.fourth p:first-of-type');
                this.contentTwo = document.querySelector('.section__wrap.fourth p:last-of-type');

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
    
                    // content
    
                    this.timeline.to(this.content, 1, {
                        y: 0,
                        autoAlpha: 1,
                        delay: 0.3,
                        ease: Power4.easeInOut
                    }, '-=0.8');

                    this.timeline.to(this.contentTwo, 1, {
                        y: 0,
                        autoAlpha: 1,
                        delay: 0.3,
                        ease: Power4.easeInOut
                    }, '-=0.7');
    
    
                    this.timeline.play();
                }
    
                timelineHasPlayed = true;
    
            }
    
    
        }
    
    })