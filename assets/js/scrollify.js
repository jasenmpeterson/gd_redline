// https://projects.lukehaas.me/scrollify/#home

define(['./constructionSlideAnimation', './durabilitySlideAnimation', './serviceSlideAnimation'], function (constructionSlideAnimation, durabilitySlideAnimation, serviceSlideAnimation) {
  return function () {

    // animations 

    let constructionAnimation = new constructionSlideAnimation();
    let durabilityAnimation = new durabilitySlideAnimation();
    let serviceAnimation = new serviceSlideAnimation();

    jQuery(function () {
      jQuery.scrollify({
        section: '.section__wrap',
        sectionName: 'id',
        scrollbars: false,
        easing: 'easeOutExpo',
        scrollSpeed: 1100,
        updateHash: false,
        before: function before(index, panels) {

          // don't bother using the themeSwitcher function if it's the first slide
          // -- the theme switcher bascially swaps dark/light color schemes via a class injected into the body tag

          index !== 0 ? themeSwitcher(true) : themeSwitcher(false);

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

        },
        afterRender: function afterRender() {

          // pagination
          jQuery('nav li.scroll__button').on('click', function () {
            var ID = jQuery(this).data('id') - 1;
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


    function themeSwitcher(boolean) {

      var body = document.getElementsByTagName('body')[0];

      boolean ? setTimeout(function () {
        body.classList.add('dark');
      }, 300) : body.classList.remove('dark');

    }
  }
})