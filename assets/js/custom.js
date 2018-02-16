'use strict';

// FIXME: Disable Scrolling While Splash Animation is playing
// TODO: Clickable section titles
// TODO: Active button states

require.config({
    baseUrl: pageParams.javascriptDirectory,
    paths: {
        scrollify: 'scrollify',
        emergence: 'emergence',
        mobilemenu: 'mobilemenu',
        snap: 'snap',
        introSlideAnimation: 'introSlideAnimation',
        constructionSlideAnimation: 'constructionSlideAnimation',
        durabilitySlideAnimation: 'durabilitySlideAnimation',
        serviceSlideAnimation: 'serviceSlideAnimation'
    }
});

// intro slide animation

require(['introSlideAnimation'], function (introSlideAnimation) {
    introSlideAnimation();
});

// scrollify

// if (matchMedia('only screen and (min-width: 768px)').matches) {
//     require(['scrollify'], function (scrollify) {
//         scrollify();
//     });
// }

// mobile menu

require(['mobilemenu'], function (mobilemenu) {
    mobilemenu();
});

// emergence

require(['emergence'], function (emergence) {
    emergence();
});

// GSDevTools.create({
//   css: {
//     zIndex: 100
//   }
// });