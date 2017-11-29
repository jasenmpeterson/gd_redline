'use strict';

// TODO - Disable Scrolling While Splash Animation is Playing

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

  var timeline = new TimelineMax();
  var curtain = document.querySelector('.curtain');
  var logo = document.querySelector('.square img');
  var square = document.querySelector('.curtain .square');

  TweenMax.set(square, {
    autoAlpha: 0
  });

  timeline.to(square, 0.8, {
    autoAlpha: 1,
    scale: 2,
    ease: Elastic.easeOut.config(1, 0.5)
  }).to(logo, 0.5, {
    autoAlpha: 1,
    ease: Power4.easeOut
  }, '-=0.80').to(square, 1.2, {
    width: '100%',
    height: '100%',
    autoAlpha: 0,
    delay: 0.5,
    ease: Power4.easeOut
  }).to(logo, 0.2, {
    autoAlpha: 0,
    ease: Power4.easeOut
  }, '1.20').to(curtain, 0.1, {
    autoAlpha: 0,
    ease: Power4.easeOut
  }, '1.45');

  return timeline;
}

splashLogoTimeline.add(LogoAnimation());

// Introduction Section Logo Animation

function Intro__RedlineLogo() {

  var timeline = new TimelineMax();
  var logo = document.querySelector('.redline__logo');

  TweenMax.set(logo, {
    autoAlpha: 0,
    scale: 0.5
  });

  var logoAnimation = TweenMax.to(logo, 1.2, {
    autoAlpha: 1,
    scale: 1,
    ease: Elastic.easeInOut.config(0.5, 0.3)
  });

  timeline.add(logoAnimation);

  return timeline;
}

logoTimeline.add(Intro__RedlineLogo());

// navigation

function navigation() {

  var timeline = new TimelineMax({
    delay: 1.15
  });
  var nav = document.querySelectorAll('nav ul li');

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nav[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var link = _step.value;

      TweenMax.set(link, {
        autoAlpha: 0,
        x: 125
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  ;

  timeline.staggerTo(nav, 0.5, {
    autoAlpha: 1,
    x: 0,
    delay: 0.84,
    ease: Power4.easeOut
  }, '0.2');

  return timeline;
}

navTimeline.add(navigation());

// social icons

function Social__Icons() {

  var timeline = new TimelineMax();
  var socialIcons = document.querySelectorAll('.social__icon__wrap ul li a');

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = socialIcons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var icon = _step2.value;

      TweenMax.set(icon, {
        autoAlpha: 0,
        scale: 0.5
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  timeline.staggerTo(socialIcons, 0.1, {
    autoAlpha: 1,
    scale: 1,
    delay: 0.84,
    ease: Bounce.easeOut
  }, '0.2');

  return timeline;
}

contactButtonTimeline.add(Social__Icons());

// contact button

function Contact__Button() {

  var timeline = new TimelineMax();
  var contactButton = document.querySelector('.contact__btn');

  TweenLite.set(contactButton, {
    autoAlpha: 0
  });

  var rule = CSSRulePlugin.getRule('header div.contact__btn:before');
  var contactButtonAnimation = TweenMax.to(contactButton, 0.5, {
    autoAlpha: 1,
    ease: Power2.easeOut
  });

  TweenMax.set(rule, {
    cssRule: {
      width: 0
    }
  });

  var contactButtonBeforeAnimation = TweenLite.to(rule, 0.3, {
    cssRule: {
      width: '100%'
    },
    delay: 0.2,
    ease: Power4.easeInOut
  });

  timeline.add([contactButtonAnimation, contactButtonBeforeAnimation]);

  return timeline;
}

contactButtonTimeline.add(Contact__Button());

function Section__Animations() {
  var section = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'introduction__wrap';


  // SubTitle

  function SubTitle() {

    var timeline = new TimelineMax({
      delay: 1
    });

    var subTitle = document.querySelector('.' + section + ' .grid__wrap .cell h5');

    TweenMax.set(subTitle, {
      autoAlpha: 0,
      x: -300
    });

    var subTitleAnimation = TweenMax.to(subTitle, 0.5, {
      autoAlpha: 1,
      x: 0,
      ease: Power4.easeOut
    });

    timeline.add(subTitleAnimation);

    var line = document.querySelector('.' + section + ' .line');

    // Accent Line

    TweenMax.set(line, {
      autoAlpha: 0,
      x: 300
    });

    var lineAnimation = TweenMax.to(line, 0.5, {
      autoAlpha: 1,
      x: 0,
      ease: Power4.easeOut
    });

    timeline.add(lineAnimation);

    return timeline;
  }
  // Text

  function TextAnimation() {

    var timeline = new TimelineMax({
      delay: 1.5
    });

    var text = document.querySelector('.' + section + ' .grid__wrap .cell .content__wrap');

    TweenMax.set(text, {
      autoAlpha: 0,
      x: -300
    });

    var textAnimation = TweenMax.to(text, 0.5, {
      autoAlpha: 1,
      x: 0,
      ease: Power4.easeInOut
    });

    timeline.add(textAnimation);

    return timeline;
  }

  // Product Shot

  function ProductShot() {

    var timeline = new TimelineMax();
    var productShot = document.querySelector('.' + section + ' .product__shot');

    TweenMax.set(productShot, {
      autoAlpha: 0,
      x: 350
    });
    var productShotAnimation = TweenMax.to(productShot, 1, {
      autoAlpha: 1,
      x: 0,
      delay: 1.5,
      ease: Power4.easeInOut
    });

    timeline.add(productShotAnimation);

    return timeline;
  }

  introSectionTimeline.add([SubTitle(), TextAnimation(), ProductShot()]);
};

Section__Animations();

// section title

function Section__Title__Animation(sectionTitle) {

  var timeline = new TimelineMax({
    id: 'Section Title Timeline',
    paused: true
  });

  var section = jQuery('.interior .section__title__wrap .scroll__button span.invisible');
  TweenMax.to(section, 1.2, {
    autoAlpha: 1,
    ease: Power4.easeInOut
  });

  section.removeClass('invisible').addClass('visible');

  var scrollButtonOutAnimation = TweenMax.to(sectionTitle, 1.2, {
    autoAlpha: 0,
    ease: Power4.easeInOut
  });

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
    before: function before(index) {

      index !== 0 ? themeSwitcher(true) : themeSwitcher(false);

      var currSection = index + 1;

      if (currSection === 1) {
        var nextSection = jQuery('.section__wrap[data-id="1"]').attr('class').split(' ')[0];
      } else {
        var nextSection = jQuery('.section__wrap[data-id="' + currSection + '"]').attr('class').split(' ')[0];
      }

      Section__Animations(nextSection);
    },
    after: function after(index, sections) {
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

var sectionOnEnter = function sectionOnEnter(currSection) {

  var section = jQuery('.scroll__button:nth-of-type(' + currSection + ')').data('id');

  switch (section) {
    case 'introduction':
      break;
    case 'construction':
      break;
  }
};
// Thanks! https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/

// Button Click Page Scroll

// TODO - THEME SWITCH ON MOUSE SCROLL.
// TODO - THEME SWITCH ON BUTTON CLICK.

function scrollIt(destination) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  var callback = arguments[3];
  var callbackBefore = arguments[4];


  var easings = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };

  var start = window.pageYOffset;

  // https://developer.mozilla.org/en-US/docs/Web/API/Window/performance
  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  if (callbackBefore) {
    callbackBefore();
  }

  function scroll() {
    var now = 'now' in window.performance ? performance.now() : new Date().getTime();

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
    var time = Math.min(1, (now - startTime) / duration);

    var timeFunction = easings[easing](time);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

    // Stop requesting animation when window reached its destination
    // And run a callback function
    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

function themeSwitcher(boolean) {

  var body = document.getElementsByTagName('body')[0];

  boolean ? setTimeout(function () {
    body.classList.add('dark');
  }, 300) : body.classList.remove('dark');
}

var scrollButtons = document.querySelectorAll('.scroll__button');

var _loop = function _loop(button) {
  button.addEventListener('click', function (event) {

    'use strict';

    event.stopPropagation();
    event.preventDefault();

    if (event.target !== button) return;

    var sectionID = event.target.dataset.id;

    // let currentActiveLink = document.querySelector('.scroll__button.active');
    // currentActiveLink.classList.remove('active');
    // event.target.classList.add('active');

    scrollIt(document.getElementById(sectionID), 100, 'easeInCubic'
    // () => themeSwitcher(),
    // () => themeSwitcher()
    );
  });
};

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = scrollButtons[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var button = _step3.value;

    _loop(button);
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}