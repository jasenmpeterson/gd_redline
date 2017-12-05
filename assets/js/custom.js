'use strict';

// FIXME: Disable Scrolling While Splash Animation is playing
// TODO: Clickable section titles
// TODO: Active button states

require.config({
  baseUrl: pageParams.javascriptDirectory,
  paths: {
    splashPageAnimation: 'splashPageAnimation',
    introAnimation: 'introAnimation',
    introSlideAnimation: 'introSlideAnimation',
    constructionSlideAnimation: 'constructionSlideAnimation',
    durabilitySlideAnimation: 'durabilitySlideAnimation',
    serviceSlideAnimation: 'serviceSlideAnimation',
    scrollify: 'scrollify'
  }
});

// splash page animation

require(['splashPageAnimation'], function (splashPageAnimation) {
  splashPageAnimation();
});

// intro animation

require(['introAnimation'], function (introAnimation) {
  introAnimation();
});

// intro slide animation

require(['introSlideAnimation'], function (introSlideAnimation) {
  introSlideAnimation();
});

// scrollify

require(['scrollify'], function (scrollify) {
  scrollify();
});

// GSDevTools.create({
//   css: {
//     zIndex: 100
//   }
// });