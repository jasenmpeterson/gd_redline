define(['./snap'], function (snap) {

    return function () {

        let bodyEl = document.getElementsByTagName('body')[0];
        let content = document.querySelector('.main');
        let open__button = document.querySelector('.mobile__menu__button');
        let menu__bar = document.querySelector('.bar');
        let close__button = document.querySelector('.close__button');
        var isOpen = false;
        let isAnimating = false;
        let mobile__menu = document.querySelectorAll('.mobile__menu__wrap li');

        function init () {
            initEvents();
        }

        function initEvents () {

            // toggle the menu closed when a selection is made
            for (var item of mobile__menu) {
                item.addEventListener('click', toggleMenu);
              }
            
            open__button.addEventListener( 'click', toggleMenu );
            
            if(close__button) {
                close__button.addEventListener( 'click', toggleMenu );
            }

            // close the menu element if the target it´s not the menu element or one of its descendants..

            content.addEventListener( 'click', function (event) {
                let target = event.target;
                if( isOpen && target !== open__button ) {
                    toggleMenu();
                }
            })

        }

        function toggleMenu () {

            classie.toggle( menu__bar, 'animate');
            
            if( isAnimating ) {
                return false;
            }

            isAnimating = true;

            if( isOpen ) {
                classie.remove( bodyEl, 'show__menu' );

                //animate path

                setTimeout( function () {
                    isAnimating = false;
                }, 300);
            } else {
                
                classie.add( bodyEl, 'show__menu' );
                isAnimating = false
            }

            isOpen = !isOpen;

        }

        init();

        
    }

});