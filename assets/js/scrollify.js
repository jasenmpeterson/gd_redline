// https://projects.lukehaas.me/scrollify/#home

define(['./constructionSlideAnimation', './durabilitySlideAnimation', './serviceSlideAnimation'], function (constructionSlideAnimation, durabilitySlideAnimation, serviceSlideAnimation) {
  return function () {

    // animations 

    const constructionAnimation = new constructionSlideAnimation();
    const durabilityAnimation = new durabilitySlideAnimation();
    const serviceAnimation = new serviceSlideAnimation();

    jQuery(function () {
      jQuery.scrollify({
        section: '.section__wrap',
        interstitialSection: '.fifth',
        setHeights: false,
        sectionName: 'id',
        scrollbars: false,
        easing: 'easeOutExpo',
        scrollSpeed: 1100,
        updateHash: false,
        before: function before(index, panels) {

          var nextSection = index + 1;

          beforeScrollifyEnter(nextSection)

        }
      });
    });

    // scrollify CB - before scrollify enters new frame

    function beforeScrollifyEnter(nextSection) {
      
      // ge the data ID from the next slide - this is passed in from the scrollify before callback function 

      let section = jQuery('.section__wrap[data-id="' + nextSection + '"]');

      // get the name via the ID attribute

      let sectionName = (section.attr('id') ? section.attr('id') : '');

      if (sectionName) {

        switch (sectionName) {

          case 'construction':
            constructionAnimation.play();
            break;

          case 'durability':
            durabilityAnimation.play();
            break;

          case 'service':
            serviceAnimation.play();
            break;

          }

      }

    }

  }

})