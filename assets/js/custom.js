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

require(['scrollify'], function (scrollify) {
    scrollify();
});

// scrollify

require(['mobilemenu'], function (mobilemenu) {
    mobilemenu();
});

// lightbox

var videoButton = document.querySelector(".video__thumbnail");
var videoCloseButton = document.querySelector(".video__close__button");
var videoModal = document.querySelector(".video__modal");

videoButton.addEventListener("click", function () {
    videoModal.classList.add("open");
});

videoCloseButton.addEventListener("click", function () {
    videoModal.classList.remove("open");
});

// GSDevTools.create({
//   css: {
//     zIndex: 100
//   }
// });