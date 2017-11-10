class SplashAnimation {
  constructor () {
    this.splashTimeline = new TimelineMax();
    this.curtain = document.querySelector('.curtain');
    this.logo = document.querySelector('.square img');
    this.square = document.querySelector('.curtain .square')
  }
  animateSquare () {
    
    TweenMax.set(this.square, { autoAlpha: 0});
    
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

new SplashAnimation().animateSquare();

class IntroductionAnimation {
  constructor () {
    this.mainTimeline = new TimelineLite({ delay: 1.50 });
    this.logo = document.querySelector('.redline__logo');
    this.logoTimeline = new TimelineLite();
    this.lineTimeline = new TimelineLite();
    this.textTimeline = new TimelineLite();
    this.splitText = new SplitText('.introduction__wrap h1', {type:'words,chars'});
    this.chars = this.splitText.chars;
    this.introductionText = document.querySelector('.introduction__wrap h1');
    this.line = document.querySelector('.introduction__wrap .line');
    this.productShotTimeline = new TimelineLite();
    this.productShot = document.querySelector('.introduction__wrap .product__shot');
    this.navTimeline = new TimelineLite();
    this.nav = document.querySelectorAll('nav ul li');
    this.socialIconTimline = new TimelineLite();
    this.socialIcons = document.querySelectorAll('.social__icon__wrap ul li a');
    this.contactButtonTimline = new TimelineLite({ delay: 0.84 });
    this.contactButton = document.querySelector('.contact__btn');
}
  AnimateLogo () {
    TweenLite.set(this.logo, { autoAlpha: 0, scale: 0.5});
    let logoAnimation = TweenLite.to
    (   this.logo,
        1.2,
        {
          autoAlpha: 1,
          scale: 1,
          ease: Elastic.easeInOut.config(0.5, 0.3)
        }
    );
    
    this.logoTimeline.add(logoAnimation)
  }
  AnimateText () {
    
    TweenLite.set(this.introductionText, {perspective:400});
    
    this.textTimeline.staggerFrom(
        this.chars, 0.8,
        {
          opacity:0,
          scale:0,
          y:80,
          rotationX:180,
          transformOrigin:"0% 50% -50",
          delay: 0.8,
          ease: Back.easeOut
        },
        0.01,
        '+=0'
    )
  }
  AnimateLine () {
    TweenLite.set( this.line, { autoAlpha: 0, width: 0})
    let lineAnimation = TweenLite.to
    (
      this.line,
      0.5,
        {
          autoAlpha: 1,
          width: '4.0625rem',
          ease: Power4.easeOut,
          delay: 0.8
        }, '+=0'
    );
    
    this.lineTimeline.add(lineAnimation)
    
  }
  AnimateProductShot () {
    TweenLite.set(this.productShot, { autoAlpha: 0 , x: 350 });
    let productShotAnimation = TweenLite.to
    (
        this.productShot,
        1,
        {
          autoAlpha: 1,
          x: 0,
          delay: 1.5,
          ease: Power4.easeInOut
        }
    );
    this.productShotTimeline.add(productShotAnimation)
  }
  AnimateSocialIcons () {

    for(let icon of this.socialIcons) {
      TweenLite.set(icon, { autoAlpha: 0, scale: 0.5})
    }
    this.socialIconTimline.staggerTo
    (
        this.socialIcons,
        0.1,
        {
          autoAlpha: 1,
          scale: 1,
          delay: 0.84,
          ease: Bounce.easeOut
        }, '0.2'
    )
    
  }
  AnimateContactButton () {
    TweenLite.set(this.contactButton, { autoAlpha: 0});
    const rule = CSSRulePlugin.getRule('header div.contact__btn:before');
    let contactButtonAnimation = TweenLite.to
    (
        this.contactButton,
        0.5,
        {
          autoAlpha: 1,
          ease: Power2.easeOut
        }
    );
    TweenLite.set(rule, { cssRule: { width: 0 }});
    let contactButtonBeforeAnimation = TweenLite.to
    (
        rule,
        0.3,
        {
          cssRule: {
            width: '100%'
          },
          ease: Power4.easeInOut
        }
    );
    this.contactButtonTimline.add([contactButtonAnimation, contactButtonBeforeAnimation])
  }
  AnimateNav() {
  
    for(let link of this.nav) {
      TweenLite.set(link, { autoAlpha: 0, x: 125})
    }
    this.navTimeline.staggerTo
    (
        this.nav,
        0.5,
        {
          autoAlpha: 1,
          x: 0,
          delay: 0.84,
          ease: Power4.easeOut
        }, '0.2'
    )
  }
  Animate () {
    this.AnimateLogo();
    this.AnimateText();
    this.AnimateLine();
    this.AnimateProductShot();
    this.AnimateSocialIcons();
    this.AnimateContactButton();
    this.AnimateNav();
    
    this.mainTimeline.add(
        [
          this.textTimeline,
          this.lineTimeline,
          this.logoTimeline,
          this.socialIconTimline,
          this.contactButtonTimline,
          this.navTimeline
        ]
    )
  }
}

new IntroductionAnimation().Animate();

class ConstructionAnimation {
  constructor () {
    this.line = document.querySelector('.construction__wrap .line');
    this.sectionTitle = document.querySelector('.construction__wrap h3')
    this.splitText = new SplitText('.construction__wrap h1', {type:'words,chars'});
    this.chars = this.splitText.chars;
    this.introductionText = document.querySelector('.construction__wrap h1');
  }
}

GSDevTools.create({
  css: {
    zIndex: 100
  }
});

// https://projects.lukehaas.me/scrollify/#home

jQuery(function() {
  jQuery.scrollify({
    section : '.section__wrap',
    sectionName : 'id',
    updateHash: false,
    after: function (index) {
      'use strict';
      var currPosition = index+1
      jQuery('.scroll__button.active').removeClass('active');
      jQuery('.scroll__button:nth-of-type('+currPosition+')').addClass('active');
    }
  });
});