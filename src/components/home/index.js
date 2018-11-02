import React, { Component, Fragment } from 'react'
// import ScreenNav from './screenNav'
// import GridDecorationLines from './gridDecorationLines/index'
// import SplitScreen from './SplitScreen'
import Intro from '../intro'
import MainContent from '../mainContent'
import anime from 'animejs'

const SvgShit = () => (
  <svg className='hidden'>
    <symbol id='icon-arrow' viewBox='0 0 24 24'>
      <title>arrow</title>
      <polygon points='6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 ' />
    </symbol>
    <symbol id='icon-drop' viewBox='0 0 24 24'>
      <title>drop</title>
      <path d='M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z' /><path d='M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z' />
    </symbol>
    <svg id='icon-github' viewBox='0 0 33 33'>
      <title>github</title>
      <path d='M16.608.455C7.614.455.32 7.748.32 16.745c0 7.197 4.667 13.302 11.14 15.456.815.15 1.112-.353 1.112-.785 0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184-.741-1.882-1.809-2.383-1.809-2.383-1.479-1.01.112-.99.112-.99 1.635.115 2.495 1.679 2.495 1.679 1.453 2.489 3.813 1.77 4.741 1.353.148-1.052.569-1.77 1.034-2.177-3.617-.411-7.42-1.809-7.42-8.051 0-1.778.635-3.233 1.677-4.371-.168-.412-.727-2.069.16-4.311 0 0 1.367-.438 4.479 1.67a15.602 15.602 0 0 1 4.078-.549 15.62 15.62 0 0 1 4.078.549c3.11-2.108 4.475-1.67 4.475-1.67.889 2.242.33 3.899.163 4.311C26.37 12.66 27 14.115 27 15.893c0 6.258-3.809 7.635-7.437 8.038.584.503 1.105 1.497 1.105 3.017 0 2.177-.02 3.934-.02 4.468 0 .436.294.943 1.12.784 6.468-2.159 11.131-8.26 11.131-15.455 0-8.997-7.294-16.29-16.291-16.29' />
    </svg>
    <svg id='icon-arrowup' viewBox='0 0 49 46'>
      <title>arrow up</title>
      <path d='M49 45.946H0L24.5.054z' fill='#fff' />
    </svg>
  </svg>

)

export default class Home extends Component {
  componentDidMount () {
    /**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */
    {
      // From https://davidwalsh.name/javascript-debounce-function.
      function debounce (func, wait, immediate) {
        var timeout
        return function () {
          var context = this; var args = arguments
          var later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
          }
          var callNow = immediate && !timeout
          clearTimeout(timeout)
          timeout = setTimeout(later, wait)
          if (callNow) func.apply(context, args)
        }
      };

      let winsize = { width: window.innerWidth, height: window.innerHeight }

      const DOM = {
        intro: document.querySelector('.intro'),
        slideshowImagesWrappers: document.querySelectorAll('.slideshow__item-img'),
        slideshowImages: document.querySelectorAll('.slideshow__item-img-inner')
      }

      class Panel {
        constructor (el) {
          this.DOM = { el: el }

          this.DOM.logo = DOM.intro.querySelector('.intro__logo')
          this.DOM.logoImg = this.DOM.logo.querySelector('.icon--arrowup')
          this.DOM.enter = DOM.intro.querySelector('.intro__enter')

          this.animatableElems = Array.from(DOM.intro.querySelectorAll('.animatable')).sort(() => 0.5 - Math.random())

          // set layout
          this.boxRect = this.DOM.el.getBoundingClientRect()
          this.layout()

          this.isOpen = true
          this.initEvents()
        }
        layout () {
          this.DOM.el.style.transform = `scaleX(${winsize.width / this.boxRect.width}) scaleY(${winsize.height / this.boxRect.height})`
          document.body.classList.remove('loading')
        }
        initEvents () {
          this.DOM.enter.addEventListener('click', (ev) => {
            ev.preventDefault()
            this.close()
          })

          this.DOM.logo.addEventListener('click', (ev) => {
            ev.preventDefault()
            this.open()
          })

          // Window resize
          this.onResize = () => {
            winsize = { width: window.innerWidth, height: window.innerHeight }
            if (this.isOpen) {
              this.layout()
            }
          }
          window.addEventListener('resize', debounce(() => this.onResize(), 10))
        }
        open () {
          if (this.isOpen || this.isAnimating) return
          this.isOpen = true
          this.isAnimating = true

          DOM.intro.style.pointerEvents = 'auto'

          anime.remove(this.DOM.logoImg)
          anime({
            targets: this.DOM.logoImg,
            translateY: [{ value: '-400%', duration: 200, easing: 'easeOutQuad' }, { value: ['200%', '0%'], duration: 700, easing: 'easeOutExpo' }]
          })

          anime.remove(this.animatableElems)
          anime({
            targets: this.animatableElems,
            duration: 1200,
            delay: (t, i) => 350 + i * 30,
            easing: 'easeOutExpo',
            translateX: '0%',
            opacity: {
              value: 1,
              easing: 'linear',
              duration: 400
            }
          })

          const boxRect = this.DOM.el.getBoundingClientRect()
          anime.remove(this.DOM.el)
          anime({
            targets: this.DOM.el,
            scaleX: { value: winsize.width / boxRect.width, duration: 700, delay: 300, easing: 'easeOutExpo' },
            scaleY: { value: winsize.height / boxRect.height, duration: 300, easing: 'easeOutQuad' },
            complete: () => this.isAnimating = false
          })
        }
        close () {
          if (!this.isOpen || this.isAnimating) return
          this.isOpen = false
          this.isAnimating = true

          DOM.intro.style.pointerEvents = 'none'

          anime.remove(this.DOM.logoImg)
          anime({
            targets: this.DOM.logoImg,
            translateY: [{ value: '-400%', duration: 300, easing: 'easeOutQuad' }, { value: ['200%', '0%'], duration: 700, easing: 'easeOutExpo' }],
            rotate: [{ value: 0, duration: 300 }, { value: [90, 0], duration: 1300, easing: 'easeOutElastic' }]
          })

          anime.remove(this.animatableElems)
          anime({
            targets: this.animatableElems,
            duration: 150,
            easing: 'easeOutQuad',
            translateX: '-30%',
            opacity: 0
          })

          anime.remove(this.DOM.el)
          anime({
            targets: this.DOM.el,
            duration: 1000,
            scaleX: { value: 1, duration: 300, easing: 'easeOutQuad' },
            scaleY: { value: 1, duration: 700, delay: 300, easing: 'easeOutExpo' },
            complete: () => this.isAnimating = false
          })

          anime.remove(DOM.slideshowImages)
          anime({
            targets: DOM.slideshowImages,
            duration: 1000,
            delay: (t, i) => i * 60,
            easing: 'easeOutCubic',
            scale: [1.5, 1]
          })
          anime.remove(DOM.slideshowImagesWrappers)
          anime({
            targets: DOM.slideshowImagesWrappers,
            duration: 1000,
            delay: (t, i) => i * 60,
            easing: 'easeOutCubic',
            translateY: ['10%', '0%']
          })
        }
      }

      const panel = new Panel(DOM.intro.querySelector('.intro__box'))
    }
  }
  render () {
    console.time(this.props)
    return (
      <main id='Home'>
        <SvgShit />
        {
          Object.keys(this.props.context).includes('aboutMe') ? <MainContent {...this.props.context} /> : null
        }
        <Intro />

      </main>
    )
  }
}
{ /* <SplitScreen /> */ }
{ /* <ScreenNav /> */ }
