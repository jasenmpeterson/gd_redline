// https://projects.lukehaas.me/scrollify/#home

// TODO: BROWSER TESTING
// TODO: SHAW REVIEW

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

        },
        afterRender: function afterRender() {

          // pagination:
          jQuery('.mobile__menu__wrap li').on('click', function (event) {

            var ID = jQuery(this).data('id') - 1;
            jQuery.scrollify.move(ID);

            // remove active state
            jQuery('.mobile__menu__wrap li').removeClass('active');

            // active state
            jQuery(this).addClass('active');

          });

        }
      });
    });


    // scrollify CB - before scrollify enters new frame

    function beforeScrollifyEnter(nextSection) {

      // get the data ID from the next slide - this is passed in from the scrollify before callback function 

      let section = jQuery('.section__wrap[data-id="' + nextSection + '"]');

      // change color of logo (if necessary)

      if (jQuery(section).hasClass('dark')) {
        jQuery('.redline__logo, .mobile__menu__button').addClass('dark');
      } else {
        jQuery('.redline__logo, .mobile__menu__button').removeClass('dark');
      }

      // fade labels on entry

      let section__title = section.find('.section__title');

      TweenMax.to(section__title, 1.5, {
        delay: 1,
        autoAlpha: 0.2,
        ease: Power4.easeInOut,
        immediateRender: false
      });

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