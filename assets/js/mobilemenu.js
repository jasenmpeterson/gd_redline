define(['./snap'], function (snap) {

    return function () {

        let bodyEl = document.getElementsByTagName('body')[0];
        let content = document.querySelector('.main');
        let open__button = document.querySelector('.mobile__menu__button');
        let close__button = document.querySelector('.close__button');
        var isOpen = false;
        let morphEl = document.querySelector('.morph__shape');
        let s = Snap( morphEl.querySelector( 'svg' ) );
        let path = s.select( 'path' );
        let initialPath = path.attr('d');
        let pathOpen = morphEl.getAttribute( 'data-morph-open' );
        let isAnimating = false;

        function init () {
            initEvents();
        }

        function initEvents () {
            
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
            
            if( isAnimating ) {
                return false;
            }

            isAnimating = true;

            if( isOpen ) {
                classie.remove( bodyEl, 'show__menu' );

                //animate path

                setTimeout( function () {
                    // reset path
                    path.attr( 'd', initialPath );
                    isAnimating = false;
                }, 300);
            } else {
                
                classie.add( bodyEl, 'show__menu' );
                path.animate( { 'path' : pathOpen }, 400, mina.easeinout, function() { isAnimating = false; } );

            }

            isOpen = !isOpen;

        }

        init();

        
    }

});