// https://projects.lukehaas.me/scrollify/#home

define(['./constructionSlideAnimation', './durabilitySlideAnimation', './serviceSlideAnimation'], function (constructionSlideAnimation, durabilitySlideAnimation, serviceSlideAnimation) {
  return function () {

    function RemoveSectionLabel(label) {

      let current__label = jQuery('.section__title__wrap .scroll__button[data-id="' + label + '"]');

      TweenMax.to(current__label, 0.5, {
        autoAlpha: 0.1
      })

    }

    jQuery(function () {
      jQuery.scrollify({
        section: '.section__wrap',
        interstitialSection: '.header',
        setHeights: false,
        sectionName: 'id',
        scrollbars: false,
        easing: 'easeOutExpo',
        scrollSpeed: 1100,
        updateHash: false
      });
    });
  }
})