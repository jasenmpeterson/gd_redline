// Thanks! https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/

// Button Click Page Scroll

function scrollIt(destination, duration = 200, easing = 'linear', callback) {
  
  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };
  
  const start = window.pageYOffset;
  
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/performance
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
  
  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }
  
  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
    const time = Math.min(1, ((now - startTime) / duration));
    
    const timeFunction = easings[easing](time);
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
  
    // Stop requesting animation when window reached its destination
    // And run a callback function
    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }
  
    requestAnimationFrame(scroll);
  }
  
  scroll();
  
}

let scrollButtons = document.querySelectorAll('.scroll__button');
for(let button of scrollButtons) {
  button.addEventListener('click', (event) => {
    'use strict';
    let sectionID = event.target.dataset.id;
    
    let currentActiveLink = document.querySelector('.scroll__button.active');
    currentActiveLink.classList.remove('active');
    event.target.classList.add('active');
    
    scrollIt(
        document.getElementById(sectionID),
        700,
        'easeOutQuad',
        () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });
}