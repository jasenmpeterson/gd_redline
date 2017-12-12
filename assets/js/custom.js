'use strict';

// FIXME: Disable Scrolling While Splash Animation is playing
// TODO: Clickable section titles
// TODO: Active button states

require.config({
  baseUrl: pageParams.javascriptDirectory,
  paths: {
    scrollify: 'scrollify',
    mobilemenu: 'mobilemenu',
    snap: 'snap',
    introSlideAnimation: 'introSlideAnimation',
    constructionSlideAnimation: 'constructionSlideAnimation'
  }
});

// intro slide animation

require(['introSlideAnimation'], function (introSlideAnimation) {
  introSlideAnimation();
});

// scrollify

require(['scrollify'], function (scrollify) {
  scrollify();
});

// scrollify

require(['mobilemenu'], function (mobilemenu) {
  mobilemenu();
});

// GSDevTools.create({
//   css: {
//     zIndex: 100
//   }
// });