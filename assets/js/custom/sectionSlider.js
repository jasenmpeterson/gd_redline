// TODO - Button Click to Slide
// TODO - Change Active Button on Scroll
class PageSlider {
  // credit: https://codepen.io/Javarome/pen/LEOQMe
  constructor (section) {
    this.slide = section
    this.slideStart = this.slide.offsetTop
    this.slideJump = false
    this.viewStart
    this.duration = 1000
    this.scrolled = document.querySelector('.scroll__wrap')
  }

  animateScroll () {

    this.slideJump = true

    // Calculate Scroll Length
    var startLocation = this.viewStart
    var endLocation = this.slideStart
    var distance = endLocation - startLocation

    let runAnimation

    // Set animations variables to 0/undefined
    var timeLapsed = 0
    var percentage
    var position

    // acceleration until halfway, then deceleration
    var easing = function (progress) {
      return progress < 0.5 ? 4 * progress * progress * progress : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1
    }

    let stopAnimationIfRequired = (pos) => {
      if (pos === endLocation) {
        cancelAnimationFrame(runAnimation)
        setTimeout( ()=> {
          this.slideJump = false
        }, 500)
      }
    }

    let animate = () => {
      timeLapsed += 16
      percentage = timeLapsed / this.duration
      if (percentage > 1) {
        percentage = 1
        position = endLocation
      } else {
        position = startLocation + distance * easing(percentage)
      }
      this.scrolled.scrollTop = position
      runAnimation = requestAnimationFrame(animate)
      stopAnimationIfRequired(position)
      // console.log('position=' + this.scrolled.scrollTop + '(' + percentage + ')')
    }
    // loop animation function
    runAnimation = requestAnimationFrame(animate)
  }

  scrollToSection () {
    window.addEventListener('wheel', (event)=> {
      this.viewStart = this.scrolled.scrollTop
        if(!this.slideJump) {
        let slideHeight = this.slide.scrollHeight
        let slideStopPortion = slideHeight / 2
        let viewHeight = window.innerHeight

        let viewEnd = this.viewStart + viewHeight
        let slideStartPart = viewEnd - this.slideStart
        let slideEndPart = (this.slideStart + slideHeight) - this.viewStart

        let canJumpDown = slideStartPart >= 0
        let stopJumpDown = slideStartPart > slideStopPortion

        let canJumpUp = slideEndPart >= 0
        let stopJumpUp = slideEndPart > slideStopPortion
        
        let scrollingForward = event.deltaY > 0
        if ( ( scrollingForward && canJumpDown && !stopJumpDown) || ( !scrollingForward && canJumpUp && !stopJumpUp) ) {
          event.preventDefault()
          this.animateScroll()
        }
        false
      } else {
        event.preventDefault()
      }
    })
  }
}

var slides = document.querySelectorAll('.section__wrap')

for(var slide of slides) {
  new PageSlider(slide).scrollToSection()
}