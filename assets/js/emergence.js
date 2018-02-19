define(['./constructionSlideAnimation', './durabilitySlideAnimation', './serviceSlideAnimation'], function (constructionSlideAnimation, durabilitySlideAnimation, serviceSlideAnimation) {
    return function () {
        emergence.init({
            reset: false,
            elemCusion: 0.9,
            offsetTop: -60,
            callback: function(element, state) {
                if (state === "visible") {

                    // vars

                    // const constructionAnimation = new constructionSlideAnimation();
                    //const durabilityAnimation = new durabilitySlideAnimation();
                    // const serviceAnimation = new serviceSlideAnimation();

                    var currSection = jQuery(element).attr("id");
                    var currSectionID = jQuery(element).data("id");

                    let sectionName = (currSection ? currSection : '');

                    // set sections menu item to active

                    let inactiveSection = jQuery('.mobile__menu__wrap li');
                    let activeSection = jQuery('.mobile__menu__wrap li[data-id="' + currSectionID + '"]');

                    inactiveSection.removeClass('active');
                    activeSection.addClass("active");

                    // check for light/dark section

                    if (jQuery(element).hasClass('dark')) {

                        jQuery('.redline__logo, .mobile__menu__button, .logo__wrap svg').addClass('dark');


                    } else {

                        jQuery('.redline__logo, .mobile__menu__button, .logo__wrap svg').removeClass('dark');

                    }

                    if (jQuery(element).hasClass('fifth')) {

                        jQuery('.contact__button').addClass('dim');

                    } else {

                        jQuery('.contact__button').removeClass('dim');

                    }

                    // animations


                    if (sectionName) {

                        switch (sectionName) {

                            case 'innovation':
                                constructionSlideAnimation();
                                break;

                            case 'resilience':
                                durabilitySlideAnimation();
                                break;

                            case 'service':
                                serviceSlideAnimation();
                                break;

                        }

                    }

                }
            }
        });

        // GSAP Page Scrolling

        let $window = jQuery(window);
        let scrollTime = 1.2;
        let scrollDistance = 170;

        // $window.on("mousewheel DOMMouseScroll", function(event){
        //
        //     event.preventDefault();
        //
        //     var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
        //     var scrollTop = $window.scrollTop();
        //     var finalScroll = scrollTop - parseInt(delta*scrollDistance);
        //
        //     TweenMax.to($window, scrollTime, {
        //         scrollTo : { y: finalScroll, autoKill:true },
        //         ease: Power1.easeOut,
        //         overwrite: 5
        //     });
        //
        // });

        jQuery(".mobile__menu__wrap ul li, .section__title h6, .contact__button").click(function(e) {
            let scrollSection = jQuery(this).html().toLowerCase().trim();
            let $this = jQuery(this);
            jQuery(".mobile__menu__wrap ul li").removeClass("active");
            $this.addClass("active");
            TweenMax.to($window, 1, {
                scrollTo: "#"+scrollSection,
                ease: Power3.easeOut
            });
        });

    }
});
