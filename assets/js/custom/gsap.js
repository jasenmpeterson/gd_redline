class SplashAnimation {
  constructor () {
    this.splashTimeline = new TimelineMax()
    this.curtain = document.querySelector('.curtain')
    this.logo = document.querySelector('.square img')
    this.square = document.querySelector('.curtain .square')
  }
  animateSquare () {
    
    TweenMax.set(this.square, { autoAlpha: 0})
    
    this.splashTimeline.to(
          this.square, 0.8,
        {
          autoAlpha: 1,
          scale: 2,
          ease: Elastic.easeOut.config(1, 0.5)
        }
    ).to(
        this.logo, 0.5,
        {
          autoAlpha: 1,
          ease: Power4.easeOut
        }, '-=0.80'
    ).to(
        this.square, 1.2,
        {
          width: '100%',
          height: '100%',
          autoAlpha: 0,
          delay: 0.5,
          ease: Power4.easeOut
        }
    ).to(
        this.logo, 0.2,
        {
          autoAlpha: 0,
          ease: Power4.easeOut
        }, '1.20'
    ).to(
        this.curtain, 0.1,
        {
          autoAlpha: 0,
          ease: Power4.easeOut
        }, '1.45'
    )
  }
}

new SplashAnimation().animateSquare()

class IntroductionAnimation {
  constructor () {
    this.mainTimeline = new TimelineLite({ delay: 1.50 })
    this.lineTimeline = new TimelineLite()
    this.textTimeline = new TimelineLite()
    this.splitText = new SplitText('.introduction__wrap h1', {type:'words,chars'})
    this.introductionText = document.querySelector('.introduction__wrap h1')
    this.line = document.querySelector('.introduction__wrap .line')
    this.chars = this.splitText.chars
    this.logo = document.querySelector('.redline__logo')
    this.logoTimeline = new TimelineLite()
  }
  AnimateText () {
    
    TweenLite.set(this.introductionText, {perspective:400})
    
    this.textTimeline.staggerFrom(
        this.chars, 0.8,
        {
          opacity:0,
          scale:0,
          y:80,
          rotationX:180,
          transformOrigin:"0% 50% -50",
          ease:Back.easeOut
        },
        0.01,
        '+=0'
    )
  }
  AnimateLine () {
    let lineAnimation = TweenLite.fromTo
    (
      this.line,
      0.5,
      {
        opacity: 0,
        width: 0
      },
        {
          opacity: 1,
          width: '4.0625rem',
          ease: Power1.easeOut,
          delay: 0.60
        }
    )
    
    this.lineTimeline.add(lineAnimation)
    
  }
  AnimateLogo () {
    TweenLite.set(this.logo, { autoAlpha: 0, x: 100})
    let logoAnimation = TweenLite.to
    (   this.logo,
        0.5,
        {
          autoAlpha: 1,
          x: 0,
          delay: 0.65,
          easing: Power4.easeOut
        }
    )
    
    this.logoTimeline.add(logoAnimation)
  }
  Animate () {
    this.AnimateText()
    this.AnimateLine()
    this.AnimateLogo()
    
    this.mainTimeline.add(
        [
          this.textTimeline,
          this.lineTimeline,
          this.logoTimeline
        ]
    )
  }
}

new IntroductionAnimation().Animate()

GSDevTools.create({
  css: {
    zIndex: 100
  }
})