// https://projects.lukehaas.me/scrollify/#home

define(['./constructionSlideAnimation', './durabilitySlideAnimation', './serviceSlideAnimation'], function (constructionSlideAnimation, durabilitySlideAnimation, serviceSlideAnimation) {
  return function () {

    function RemoveSectionLabel(label) {

      let current__label = jQuery('.section__title__wrap .scroll__button[data-id="' + label + '"]');

      TweenMax.to( current__label, 0.5, {
        autoAlpha: 0.3
      })

    }

    // animations 

    const constructionAnimation = new constructionSlideAnimation();
    const durabilityAnimation = new durabilitySlideAnimation();
    const serviceAnimation = new serviceSlideAnimation();

    jQuery(function () {
      jQuery.scrollify({
        section: '.section__wrap',
        setHeights: false,
        sectionName: 'id',
        scrollbars: false,
        easing: 'easeOutExpo',
        scrollSpeed: 1100,
        updateHash: false,
        before: function before(index, panels) {

          // don't bother using the themeSwitcher function if it's the first slide
          // -- the theme switcher bascially swaps dark/light color schemes via a class injected into the body tag

          index !== 0 && index !== 4 ? themeSwitcher(true) : themeSwitcher(false);

          // get next section

          var nextSection = index + 1;

          if (nextSection !== 1) {
            jQuery('.redline__logo').addClass('shrink');
          } else {
            jQuery('.redline__logo').removeClass('shrink');
          }

          // remove class from what will now be the previous section

          jQuery('.section__wrap.active__section').removeClass('active__section');

          // run the sectionBeforeEnter function - this is basically what controls the section animations

          sectionBeforeEnter(nextSection);

        },
        after: function after(index, sections) {

          var currSection = index + 1;
          sectionOnEnter(currSection);

          // remove section label

          RemoveSectionLabel(currSection);

        },
        afterRender: function afterRender() {

          // scroll to top of page

          window.onbeforeunload = function () {
            window.scrollTo(0, 0);
          }

          // pagination
          jQuery('.scroll__button').on('click', function (event) {
            var ID = jQuery(this).data('id') - 1;
            console.log(event.target);
            jQuery.scrollify.move(ID);
          });

        }
      });
    });

    // this is what needs to happen when scrollify enters a new slide

    function sectionOnEnter(currSection) {

      // ge the data ID from the current slide - this is passed in from the scrollify after callback function 

      let section = jQuery('.section__wrap[data-id="' + currSection + '"]');

      // set the current section to active

      section.addClass('active__section');

      // active/inative button states

      let current__section__button = jQuery('nav .scroll__button.active');
      current__section__button.removeClass('active');

      let next__section__button = jQuery('nav .scroll__button[data-id="' + currSection + '"]');
      next__section__button.addClass('active');

    };

    // this is what needs to before scrollify enters a new slide

    function sectionBeforeEnter(nextSection) {

      // ge the data ID from the next slide - this is passed in from the scrollify before callback function 

      let section = jQuery('.section__wrap[data-id="' + nextSection + '"]');

      // get the name via the ID attribute

      let sectionName = section.attr('id');

      // trigger section animations via a new instance of a class that does the GSAP magic.

      switch (sectionName) {
        case 'introduction':
          break;
        case 'construction':
          const video = document.querySelector('.construction__video video');
          video.play();
          constructionAnimation.play();
          break;
        case 'durability':
          const durability__video = document.querySelector('.durability__wrap video');
          durability__video.play();
          durabilityAnimation.play();
          break;
        case 'service':
          serviceAnimation.play();
          break;
      }

    }


    function themeSwitcher(boolean) {

      var body = document.getElementsByTagName('body')[0];

      boolean ? setTimeout(function () {
        body.classList.add('dark');
      }, 300) : body.classList.remove('dark');

    }
  }
})