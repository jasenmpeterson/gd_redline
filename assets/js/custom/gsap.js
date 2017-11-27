// TODO - Disable Scrolling While Splash Animation is Playing

var siteTimeline = new TimelineMax({ id: 'Site Timeline' })

// Splash Page Logo Animation

function LogoAnimation() {

  let logoTimeline = new TimelineMax();
  let curtain = document.querySelector('.curtain');
  let logo = document.querySelector('.square img');
  let square = document.querySelector('.curtain .square');

  TweenMax.set(square, { autoAlpha: 0 });
  
  logoTimeline
    .add('logo_animation')
    .to(
    square, 0.8,
    {
      autoAlpha: 1,
      scale: 2,
      ease: Elastic.easeOut.config(1, 0.5)
    }
    ).to(
    logo, 0.5,
    {
      autoAlpha: 1,
      ease: Power4.easeOut
    }, '-=0.80'
    ).to(
    square, 1.2,
    {
      width: '100%',
      height: '100%',
      autoAlpha: 0,
      delay: 0.5,
      ease: Power4.easeOut
    }
    ).to(
    logo, 0.2,
    {
      autoAlpha: 0,
      ease: Power4.easeOut
    }, '1.20'
    ).to(
    curtain, 0.1,
    {
      autoAlpha: 0,
      ease: Power4.easeOut
    }, '1.45'
  );

  return logoTimeline;

}

// Introduction Section Logo Animation

function Intro__RedlineLogo() {

  let timeline = new TimelineMax({ delay: 1.50 })
  let logo = document.querySelector('.redline__logo');

  TweenMax.set(logo, { autoAlpha: 0, scale: 0.5 });

  let logoAnimation = TweenMax.to
    (logo,
    1.2,
    {
      autoAlpha: 1,
      scale: 1,
      ease: Elastic.easeInOut.config(0.5, 0.3)
    }
  );
  
  timeline.add(logoAnimation)

  return timeline;

}

// Introduction Section Text

function Intro__Text() {

  let timeline = new TimelineMax({ delay: 2.15 });
  let splitText = new SplitText('.introduction__wrap h1', { type: 'words,chars' });
  let chars = splitText.chars;
  let introductionText = document.querySelector('.introduction__wrap h1');
  let line = document.querySelector('.introduction__wrap .line');

  // Accent Line

  TweenMax.set(line, { autoAlpha: 0, width: 0 });

  let lineAnimation = TweenMax.to
    (
    line,
    0.5,
    {
      autoAlpha: 1,
      width: '4.0625rem',
      ease: Power4.easeOut
    }
  );
  
  timeline.add(lineAnimation)

  // Text

  TweenMax.set(introductionText, { perspective: 400 });

  timeline.staggerFrom(
    chars, 0.8,
    {
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: Back.easeOut
    }
  );

  return timeline;
}

// Introduction Product Shot

function Intro__ProductShot() {

  let timeline = new TimelineMax({ delay: .95 });
  let productShot = document.querySelector('.introduction__wrap .product__shot');

  TweenLite.set(productShot, { autoAlpha: 0, x: 350 });
  let productShotAnimation = TweenLite.to
    (
      productShot,
    1,
    {
      autoAlpha: 1,
      x: 0,
      delay: 1.5,
      ease: Power4.easeInOut
    }
  );
  
  timeline.add(productShotAnimation);

  return timeline;

}

siteTimeline.add([
  LogoAnimation(),
  Intro__RedlineLogo(),
  Intro__Text(),
  Intro__ProductShot()
]);

siteTimeline.play('logo_animation');

GSDevTools.create({
  css: {
    zIndex: 100
  },
  globalSync: false,
  persist: false,
  paused: true
});

// https://projects.lukehaas.me/scrollify/#home

jQuery(function() {
  jQuery.scrollify({
    section : '.section__wrap',
    sectionName : 'id',
    updateHash: false,
    after: function (index) {
      'use strict';
      var currPosition = index + 1;
      jQuery('.scroll__button.active').removeClass('active');
      jQuery('.scroll__button:nth-of-type(' + currPosition + ')').addClass('active');
     // scrollifyOnEnter(currPosition);
    }
  });
});

// scrollify on enter

// let scrollifyOnEnter = function (currPosition) {

//   var currentSection = jQuery('.scroll__button:nth-of-type(' + currPosition + ')').data('id');

//   switch (currentSection) {
//     case 'introduction':
//       console.log(currentSection);
//       break;
//     case 'construction':
//       break;
//   }

// }