'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SplashAnimation = function () {
  function SplashAnimation() {
    _classCallCheck(this, SplashAnimation);

    this.splashTimeline = new TimelineMax();
    this.curtain = document.querySelector('.curtain');
    this.logo = document.querySelector('.square img');
    this.square = document.querySelector('.curtain .square');
  }

  _createClass(SplashAnimation, [{
    key: 'animateSquare',
    value: function animateSquare() {

      TweenMax.set(this.square, { autoAlpha: 0 });

      this.splashTimeline.to(this.square, 0.8, {
        autoAlpha: 1,
        scale: 2,
        ease: Elastic.easeOut.config(1, 0.5)
      }).to(this.logo, 0.5, {
        autoAlpha: 1,
        ease: Power4.easeOut
      }, '-=0.80').to(this.square, 1.2, {
        width: '100%',
        height: '100%',
        autoAlpha: 0,
        delay: 0.5,
        ease: Power4.easeOut
      }).to(this.logo, 0.2, {
        autoAlpha: 0,
        ease: Power4.easeOut
      }, '1.20').to(this.curtain, 0.1, {
        autoAlpha: 0,
        ease: Power4.easeOut
      }, '1.45');
    }
  }]);

  return SplashAnimation;
}();

new SplashAnimation().animateSquare();

var IntroductionAnimation = function () {
  function IntroductionAnimation() {
    _classCallCheck(this, IntroductionAnimation);

    this.mainTimeline = new TimelineLite({ delay: 1.50 });
    this.logo = document.querySelector('.redline__logo');
    this.logoTimeline = new TimelineLite();
    this.lineTimeline = new TimelineLite();
    this.textTimeline = new TimelineLite();
    this.splitText = new SplitText('.introduction__wrap h1', { type: 'words,chars' });
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

  _createClass(IntroductionAnimation, [{
    key: 'AnimateLogo',
    value: function AnimateLogo() {
      TweenLite.set(this.logo, { autoAlpha: 0, scale: 0.5 });
      var logoAnimation = TweenLite.to(this.logo, 1.2, {
        autoAlpha: 1,
        scale: 1,
        ease: Elastic.easeInOut.config(0.5, 0.3)
      });

      this.logoTimeline.add(logoAnimation);
    }
  }, {
    key: 'AnimateText',
    value: function AnimateText() {

      TweenLite.set(this.introductionText, { perspective: 400 });

      this.textTimeline.staggerFrom(this.chars, 0.8, {
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        delay: 0.8,
        ease: Back.easeOut
      }, 0.01, '+=0');
    }
  }, {
    key: 'AnimateLine',
    value: function AnimateLine() {
      TweenLite.set(this.line, { autoAlpha: 0, width: 0 });
      var lineAnimation = TweenLite.to(this.line, 0.5, {
        autoAlpha: 1,
        width: '4.0625rem',
        ease: Power4.easeOut,
        delay: 0.8
      }, '+=0');

      this.lineTimeline.add(lineAnimation);
    }
  }, {
    key: 'AnimateProductShot',
    value: function AnimateProductShot() {
      TweenLite.set(this.productShot, { autoAlpha: 0, x: 350 });
      var productShotAnimation = TweenLite.to(this.productShot, 1, {
        autoAlpha: 1,
        x: 0,
        delay: 1.5,
        ease: Power4.easeInOut
      });
      this.productShotTimeline.add(productShotAnimation);
    }
  }, {
    key: 'AnimateSocialIcons',
    value: function AnimateSocialIcons() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {

        for (var _iterator = this.socialIcons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var icon = _step.value;

          TweenLite.set(icon, { autoAlpha: 0, scale: 0.5 });
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

      this.socialIconTimline.staggerTo(this.socialIcons, 0.1, {
        autoAlpha: 1,
        scale: 1,
        delay: 0.84,
        ease: Bounce.easeOut
      }, '0.2');
    }
  }, {
    key: 'AnimateContactButton',
    value: function AnimateContactButton() {
      TweenLite.set(this.contactButton, { autoAlpha: 0 });
      var rule = CSSRulePlugin.getRule('header div.contact__btn:before');
      var contactButtonAnimation = TweenLite.to(this.contactButton, 0.5, {
        autoAlpha: 1,
        ease: Power2.easeOut
      });
      TweenLite.set(rule, { cssRule: { width: 0 } });
      var contactButtonBeforeAnimation = TweenLite.to(rule, 0.3, {
        cssRule: {
          width: '100%'
        },
        ease: Power4.easeInOut
      });
      this.contactButtonTimline.add([contactButtonAnimation, contactButtonBeforeAnimation]);
    }
  }, {
    key: 'AnimateNav',
    value: function AnimateNav() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {

        for (var _iterator2 = this.nav[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var link = _step2.value;

          TweenLite.set(link, { autoAlpha: 0, x: 125 });
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

      this.navTimeline.staggerTo(this.nav, 0.5, {
        autoAlpha: 1,
        x: 0,
        delay: 0.84,
        ease: Power4.easeOut
      }, '0.2');
    }
  }, {
    key: 'Animate',
    value: function Animate() {
      this.AnimateLogo();
      this.AnimateText();
      this.AnimateLine();
      this.AnimateProductShot();
      this.AnimateSocialIcons();
      this.AnimateContactButton();
      this.AnimateNav();

      this.mainTimeline.add([this.textTimeline, this.lineTimeline, this.logoTimeline, this.socialIconTimline, this.contactButtonTimline, this.navTimeline]);
    }
  }]);

  return IntroductionAnimation;
}();

new IntroductionAnimation().Animate();

var ConstructionAnimation = function ConstructionAnimation() {
  _classCallCheck(this, ConstructionAnimation);

  this.line = document.querySelector('.construction__wrap .line');
  this.sectionTitle = document.querySelector('.construction__wrap h3');
  this.splitText = new SplitText('.construction__wrap h1', { type: 'words,chars' });
  this.chars = this.splitText.chars;
  this.introductionText = document.querySelector('.construction__wrap h1');
};

GSDevTools.create({
  css: {
    zIndex: 100
  }
});

// https://projects.lukehaas.me/scrollify/#home

jQuery(function () {
  jQuery.scrollify({
    section: '.section__wrap',
    sectionName: 'id',
    updateHash: false,
    after: function after(index) {
      'use strict';

      var currPosition = index + 1;
      jQuery('.scroll__button.active').removeClass('active');
      jQuery('.scroll__button:nth-of-type(' + currPosition + ')').addClass('active');
    }
  });
});
// Thanks! https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/

// Button Click Page Scroll

function scrollIt(destination) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  var callback = arguments[3];


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

var scrollButtons = document.querySelectorAll('.scroll__button');
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = scrollButtons[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var button = _step3.value;

    button.addEventListener('click', function (event) {
      'use strict';

      var sectionID = event.target.dataset.id;

      var currentActiveLink = document.querySelector('.scroll__button.active');
      currentActiveLink.classList.remove('active');
      event.target.classList.add('active');

      scrollIt(document.getElementById(sectionID), 700, 'easeOutQuad', function () {
        return console.log('Just finished scrolling to ' + window.pageYOffset + 'px');
      });
    });
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