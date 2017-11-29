// TODO - Disable Scrolling While Splash Animation is Playing

var siteTimeline = new TimelineMax({
  id: 'Site Timeline'
});
var sectionTimeline = new TimelineMax({
  id: 'Section Timeline',
  delay: 1.5,
  paused: true
});

// Splash Page Logo Animation

function LogoAnimation() {

  let logoTimeline = new TimelineMax();
  let curtain = document.querySelector('.curtain');
  let logo = document.querySelector('.square img');
  let square = document.querySelector('.curtain .square');

  TweenMax.set(square, {
    autoAlpha: 0
  });

  logoTimeline
    .add('logo_animation')
    .to(
      square, 0.8, {
        autoAlpha: 1,
        scale: 2,
        ease: Elastic.easeOut.config(1, 0.5)
      }
    ).to(
      logo, 0.5, {
        autoAlpha: 1,
        ease: Power4.easeOut
      }, '-=0.80'
    ).to(
      square, 1.2, {
        width: '100%',
        height: '100%',
        autoAlpha: 0,
        delay: 0.5,
        ease: Power4.easeOut
      }
    ).to(
      logo, 0.2, {
        autoAlpha: 0,
        ease: Power4.easeOut
      }, '1.20'
    ).to(
      curtain, 0.1, {
        autoAlpha: 0,
        ease: Power4.easeOut
      }, '1.45'
    );

  return logoTimeline;

}

// Introduction Section Logo Animation

function Intro__RedlineLogo() {

  let timeline = new TimelineMax({
    delay: 1.50
  })
  let logo = document.querySelector('.redline__logo');

  TweenMax.set(logo, {
    autoAlpha: 0,
    scale: 0.5
  });

  let logoAnimation = TweenMax.to(logo,
    1.2, {
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

  let timeline = new TimelineMax({
    delay: 2.15
  });
  let splitText = new SplitText('.introduction__wrap h1', {
    type: 'words,chars'
  });
  let chars = splitText.chars;
  let introductionText = document.querySelector('.introduction__wrap h1');
  let line = document.querySelector('.introduction__wrap .line');

  // Accent Line

  TweenMax.set(line, {
    autoAlpha: 0,
    width: 0
  });

  let lineAnimation = TweenMax.to(
    line,
    0.5, {
      autoAlpha: 1,
      width: '4.0625rem',
      ease: Power4.easeOut
    }
  );

  timeline.add(lineAnimation)

  // Text

  TweenMax.set(introductionText, {
    perspective: 400
  });

  timeline.staggerFrom(
    chars, 0.8, {
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

  let timeline = new TimelineMax({
    delay: .95
  });
  let productShot = document.querySelector('.introduction__wrap .product__shot');

  TweenMax.set(productShot, {
    autoAlpha: 0,
    x: 350
  });
  let productShotAnimation = TweenMax.to(
    productShot,
    1, {
      autoAlpha: 1,
      x: 0,
      delay: 1.5,
      ease: Power4.easeInOut
    }
  );

  timeline.add(productShotAnimation);

  return timeline;

}

// navigation

function navigation() {

  let timeline = new TimelineMax({
    delay: 1.15
  });
  let nav = document.querySelectorAll('nav ul li');

  for (let link of nav) {
    TweenMax.set(link, {
      autoAlpha: 0,
      x: 125
    })
  };

  timeline.staggerTo(
    nav,
    0.5, {
      autoAlpha: 1,
      x: 0,
      delay: 0.84,
      ease: Power4.easeOut
    }, '0.2'
  );

  return timeline;

}

// social icons

function Social__Icons() {

  let timeline = new TimelineMax({
    delay: .76
  });
  let socialIcons = document.querySelectorAll('.social__icon__wrap ul li a');

  for (let icon of socialIcons) {
    TweenMax.set(icon, {
      autoAlpha: 0,
      scale: 0.5
    })
  }

  timeline.staggerTo(
    socialIcons,
    0.1, {
      autoAlpha: 1,
      scale: 1,
      delay: 0.84,
      ease: Bounce.easeOut
    }, '0.2'
  );

  return timeline;

}

// contact button

function Contact__Button() {

  let timeline = new TimelineMax({
    delay: 1.80
  });
  let contactButton = document.querySelector('.contact__btn');

  TweenLite.set(contactButton, {
    autoAlpha: 0
  });

  const rule = CSSRulePlugin.getRule('header div.contact__btn:before');
  let contactButtonAnimation = TweenMax.to(
    contactButton,
    0.5, {
      autoAlpha: 1,
      ease: Power2.easeOut
    }
  );

  TweenMax.set(rule, {
    cssRule: {
      width: 0
    }
  });

  let contactButtonBeforeAnimation = TweenLite.to(
    rule,
    0.3, {
      cssRule: {
        width: '100%'
      },
      delay: 0.2,
      ease: Power4.easeInOut
    }
  );

  timeline.add([contactButtonAnimation, contactButtonBeforeAnimation])

  return timeline;

}

siteTimeline.add([
  LogoAnimation(),
  Intro__RedlineLogo(),
  Intro__Text(),
  Intro__ProductShot(),
  navigation(),
  Social__Icons(),
  Contact__Button()
]);

siteTimeline.play('logo_animation');

// section title

let timeline = new TimelineMax({
  id: 'Section Title Timeline',
  paused: true
});

function Section__Title__Animation(sectionTitle) {

  let section = jQuery('.interior .section__title__wrap .scroll__button span.invisible');
  TweenMax.to(
    section,
    1.2, {
      autoAlpha: 1,
      ease: Power4.easeInOut
    }
  );

  section.removeClass('invisible').addClass('visible');

  let scrollButtonOutAnimation = TweenMax.to(
    sectionTitle,
    1.2, {
      autoAlpha: 0,
      ease: Power4.easeInOut
    }
  );
  
  sectionTitle.removeClass('visible').addClass('invisible');
  timeline.add(scrollButtonOutAnimation);
  timeline.play();
}

// GSDevTools.create({
//   css: {
//     zIndex: 100
//   },
//   paused: true
// });

// https://projects.lukehaas.me/scrollify/#home

jQuery(function () {
  jQuery.scrollify({
    section: '.section__wrap',
    sectionName: 'id',
    easing: 'easeOutExpo',
    scrollSpeed: 1100,
    updateHash: false,
    before: function (index) {
      (index !== 0 ? themeSwitcher(true) : themeSwitcher(false))
    },
    after: function (index, sections) {
      'use strict';
      var currSection = index + 1;
      var nextSection = jQuery('.interior[data-id="' + currSection + '"] .section__title__wrap .scroll__button span');
      jQuery('.scroll__button.active').removeClass('active');
      jQuery('.scroll__button:nth-of-type(' + currSection + ')').addClass('active');
      Section__Title__Animation(nextSection);
      sectionOnEnter(currSection);
    }
  });
});

let sectionOnEnter = function (currSection) {

  var section = jQuery('.scroll__button:nth-of-type(' + currSection + ')').data('id');

  switch (section) {
    case 'introduction':
      break;
    case 'construction':
      break;
  }

}