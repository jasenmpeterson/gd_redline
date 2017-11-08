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
        rotation: 0,
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
    this.lineTimeline = new TimelineLite();
    this.textTimeline = new TimelineLite();
    this.splitText = new SplitText('.introduction__wrap h1', { type: 'words,chars' });
    this.introductionText = document.querySelector('.introduction__wrap h1');
    this.line = document.querySelector('.introduction__wrap .line');
    this.chars = this.splitText.chars;
    this.logo = document.querySelector('.redline__logo');
    this.logoTimeline = new TimelineLite();
  }

  _createClass(IntroductionAnimation, [{
    key: 'AnimateText',
    value: function AnimateText() {

      TweenLite.set(this.introductionText, { perspective: 400 });

      this.textTimeline.staggerFrom(this.chars, 0.8, {
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: Back.easeOut
      }, 0.01, '+=0');
    }
  }, {
    key: 'AnimateLine',
    value: function AnimateLine() {
      var lineAnimation = TweenLite.fromTo(this.line, 0.5, {
        opacity: 0,
        width: 0
      }, {
        opacity: 1,
        width: '4.0625rem',
        ease: Power1.easeOut,
        delay: 0.60
      });

      this.lineTimeline.add(lineAnimation);
    }
  }, {
    key: 'AnimateLogo',
    value: function AnimateLogo() {
      TweenLite.set(this.logo, { autoAlpha: 0, x: 100 });
      var logoAnimation = TweenLite.to(this.logo, 0.5, {
        autoAlpha: 1,
        x: 0,
        delay: 0.65,
        easing: Power4.easeOut
      });

      this.logoTimeline.add(logoAnimation);
    }
  }, {
    key: 'Animate',
    value: function Animate() {
      this.AnimateText();
      this.AnimateLine();
      this.AnimateLogo();

      this.mainTimeline.add([this.textTimeline, this.lineTimeline, this.logoTimeline]);
    }
  }]);

  return IntroductionAnimation;
}();

new IntroductionAnimation().Animate();

GSDevTools.create({
  css: {
    zIndex: 100
  }
});
// TODO - Button Click to Slide
// TODO - Change Active Button on Scroll

var PageSlider = function () {
  // credit: https://codepen.io/Javarome/pen/LEOQMe
  function PageSlider(section) {
    _classCallCheck(this, PageSlider);

    this.slide = section;
    this.slideStart = this.slide.offsetTop;
    this.slideJump = false;
    this.viewStart;
    this.duration = 1000;
    this.scrolled = document.querySelector('.scroll__wrap');
  }

  _createClass(PageSlider, [{
    key: 'animateScroll',
    value: function animateScroll() {
      var _this = this;

      this.slideJump = true;

      // Calculate Scroll Length
      var startLocation = this.viewStart;
      var endLocation = this.slideStart;
      var distance = endLocation - startLocation;

      var runAnimation = void 0;

      // Set animations variables to 0/undefined
      var timeLapsed = 0;
      var percentage;
      var position;

      // acceleration until halfway, then deceleration
      var easing = function easing(progress) {
        return progress < 0.5 ? 4 * progress * progress * progress : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
      };

      var stopAnimationIfRequired = function stopAnimationIfRequired(pos) {
        if (pos === endLocation) {
          cancelAnimationFrame(runAnimation);
          setTimeout(function () {
            _this.slideJump = false;
          }, 500);
        }
      };

      var animate = function animate() {
        timeLapsed += 16;
        percentage = timeLapsed / _this.duration;
        if (percentage > 1) {
          percentage = 1;
          position = endLocation;
        } else {
          position = startLocation + distance * easing(percentage);
        }
        _this.scrolled.scrollTop = position;
        runAnimation = requestAnimationFrame(animate);
        stopAnimationIfRequired(position);
        // console.log('position=' + this.scrolled.scrollTop + '(' + percentage + ')')
      };
      // loop animation function
      runAnimation = requestAnimationFrame(animate);
    }
  }, {
    key: 'scrollToSection',
    value: function scrollToSection() {
      var _this2 = this;

      window.addEventListener('wheel', function (event) {
        _this2.viewStart = _this2.scrolled.scrollTop;
        if (!_this2.slideJump) {
          var slideHeight = _this2.slide.scrollHeight;
          var slideStopPortion = slideHeight / 2;
          var viewHeight = window.innerHeight;

          var viewEnd = _this2.viewStart + viewHeight;
          var slideStartPart = viewEnd - _this2.slideStart;
          var slideEndPart = _this2.slideStart + slideHeight - _this2.viewStart;

          var canJumpDown = slideStartPart >= 0;
          var stopJumpDown = slideStartPart > slideStopPortion;

          var canJumpUp = slideEndPart >= 0;
          var stopJumpUp = slideEndPart > slideStopPortion;

          var scrollingForward = event.deltaY > 0;
          if (scrollingForward && canJumpDown && !stopJumpDown || !scrollingForward && canJumpUp && !stopJumpUp) {
            event.preventDefault();
            _this2.animateScroll();
          }
          false;
        } else {
          event.preventDefault();
        }
      });
    }
  }]);

  return PageSlider;
}();

var slides = document.querySelectorAll('.section__wrap');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = slides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var slide = _step.value;

    new PageSlider(slide).scrollToSection();
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