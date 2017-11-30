// FIXME: Disable Scrolling While Splash Animation is playing
// TODO: Stop and reverse animation if user slides to next section before animation completion

var sceneController;

var introSectionTimeline = new TimelineMax({
  id: 'Intro Section Timeline'
});

var splashLogoTimeline = new TimelineMax({
  id: 'Splash Logo Timeline'
});

var logoTimeline = new TimelineMax({
  id: 'Logo Timeline',
  delay: 1.50
});

var contactButtonTimeline = new TimelineMax({
  id: 'Contact Button Timeline',
  delay: 1.80
});

var socialIconsTimeline = new TimelineMax({
  id: 'Social Icons Timeline',
  delay: .76
});

var navTimeline = new TimelineMax({
  id: 'Nav Timeline',
  delay: .76
});

var sectionTimeline = new TimelineMax({
  id: 'Section Timeline',
  delay: 1.5,
  paused: true
});

// Splash Page Logo Animation

function LogoAnimation() {

  let timeline = new TimelineMax()
  let curtain = document.querySelector('.curtain');
  let logo = document.querySelector('.square img');
  let square = document.querySelector('.curtain .square');

  TweenMax.set(square, {
    autoAlpha: 0
  });

  timeline.to(
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

  return timeline;

}

splashLogoTimeline.add(LogoAnimation());

// Introduction Section Logo Animation

function Intro__RedlineLogo() {

  let timeline = new TimelineMax()
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

logoTimeline.add(Intro__RedlineLogo());

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

navTimeline.add(navigation());

// social icons

function Social__Icons() {

  let timeline = new TimelineMax();
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

contactButtonTimeline.add(Social__Icons());

// contact button

function Contact__Button() {

  let timeline = new TimelineMax();
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

contactButtonTimeline.add(Contact__Button());

function Section__Animations(section = 'introduction__wrap') {

  // SubTitle

  function SubTitle() {

    let timeline = new TimelineMax({
      delay: 1
    });

    let subTitle = document.querySelector('.' + section + ' .grid__wrap .cell h5');

    TweenMax.set(subTitle, {
      autoAlpha: 0,
      x: -300
    });

    let subTitleAnimation = TweenMax.to(
      subTitle,
      0.5, {
        autoAlpha: 1,
        x: 0,
        ease: Power4.easeOut
      }
    );

    timeline.add(subTitleAnimation);

    let line = document.querySelector('.' + section + ' .line');

    // Accent Line

    TweenMax.set(line, {
      autoAlpha: 0,
      x: 300
    });

    let lineAnimation = TweenMax.to(
      line,
      0.5, {
        autoAlpha: 1,
        x: 0,
        ease: Power4.easeOut
      }
    );

    timeline.add(lineAnimation)

    return timeline;
  }
  // Text

  function TextAnimation() {

    let timeline = new TimelineMax({
      delay: 1.5
    });

    let text = document.querySelector('.' + section + ' .grid__wrap .cell .content__wrap');

    TweenMax.set(text, {
      autoAlpha: 0,
      x: -300
    });

    let textAnimation = TweenMax.to(
      text,
      0.5, {
        autoAlpha: 1,
        x: 0,
        ease: Power4.easeInOut
      }
    );

    timeline.add(textAnimation);

    return timeline;

  }


  // Product Shot

  function ProductShot() {

    let timeline = new TimelineMax();
    let productShot = document.querySelector('.' + section + ' .product__shot');

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

  introSectionTimeline.add([
    SubTitle(),
    TextAnimation(),
    ProductShot()
  ]);

};

Section__Animations();

// section title

function Section__Title__Animation(sectionTitle) {

  let timeline = new TimelineMax({
    id: 'Section Title Timeline',
    paused: true
  });

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
    scrollbars: false,
    easing: 'easeOutExpo',
    scrollSpeed: 1100,
    updateHash: false,
    before: function (index, panels) {

      var ref = panels[index].attr('data-id');

      (index !== 0 ? themeSwitcher(true) : themeSwitcher(false))

      var currSection = index + 1;

      if (currSection === 1) {
        var nextSection = jQuery('.section__wrap[data-id="1"]').attr('class').split(' ')[0];
      } else {
        var nextSection = jQuery('.section__wrap[data-id="' + currSection + '"]').attr('class').split(' ')[0];
      }

      Section__Animations(nextSection);

      if(introSectionTimeline.isActive()) {
        introSectionTimeline.reverse(-2);
        introSectionTimeline.play();
      };

    },
    after: function (index, sections) {
      'use strict';
      var currSection = index + 1;
      var nextSection = jQuery('.interior[data-id="' + currSection + '"] .section__title__wrap .scroll__button span');
      jQuery('.scroll__button.active').removeClass('active');
      jQuery('.scroll__button:nth-of-type(' + currSection + ')').addClass('active');
      Section__Title__Animation(nextSection);
      sectionOnEnter(currSection);
    },
    afterRender: function () {
      // pagination
      jQuery('nav li.scroll__button').on('click', function () {
        let ID = jQuery(this).data('id') - 1;
        jQuery.scrollify.move(ID);
      })
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


function themeSwitcher(boolean) {

  var body = document.getElementsByTagName('body')[0];

  boolean ? setTimeout(function () {
    body.classList.add('dark');
  }, 300) : body.classList.remove('dark');
}