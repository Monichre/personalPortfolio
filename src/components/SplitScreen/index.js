import React, { Component } from 'react'
import mojs from 'mo-js'
import * as codeBub1 from './code-bubble-1.svg'
import * as codeBub2 from './code-bubble-2.svg'
import './index.css'

console.log(codeBub1)
console.log(codeBub2)

class CodeBubbleOne extends mojs.CustomShape {
  getShape () {
    return <img src={codeBub1} />
  }
}

class CodeBubbleTwo extends mojs.CustomShape {
  getShape () {
    return <img src={codeBub2} />
  }
}

class SplitScreen extends Component {
  componentDidMount () {
    const viewAfter = document.getElementById('viewAfter')
    const changeWidth = e => {
      viewAfter.style = 'width: ' + e.clientX + 'px;'
    }
    const setRadius = () => {
      if (window.innerWidth <= 425) {
        innerRadius = parseInt(window.innerWidth * 0.1)
        outerRadius = parseInt(window.innerWidth * 0.6)
      } else if (window.innerWidth > 425 && window.innerWidth < 1080) {
        innerRadius = parseInt(window.innerWidth * 0.07)
        outerRadius = parseInt(window.innerWidth * 0.28)
      } else if (window.innerWidth > 1080) {
        innerRadius = parseInt(window.innerHeight * 0.15)
        outerRadius = parseInt(window.innerHeight * 0.3)
      } else {
      }
    }

    mojs.addShape('codeBubbleOne', CodeBubbleOne)
    mojs.addShape('codeBubbleTwo', CodeBubbleTwo)

    document.addEventListener('click', changeWidth)

    let innerRadius
    let outerRadius
    let smallSize = 20
    let bigSize = 25

    setRadius()
    const DURATION = 1000
    const count = 15

    let smoke = new mojs.Burst({
      opacity: 0.7,
      parent: '#viewAfter',
      left: 0,
      top: 0,
      degree: 270,
      angle: -135,
      count: count,
      radius: {
        [innerRadius]: outerRadius
      },
      children: {
        shape: 'codeBubbleOne',
        fill: ['white', '#2A3A3F'],
        pathScale: 'rand(0.5, 1)',
        radius: 'rand(12, 13)',
        swirlSize: 'rand(20, 25)',
        swirlFrequency: 'rand(2, 4)',
        direction: [1, -1],
        duration: `rand(${1 * DURATION}, ${2 * DURATION})`,
        delay: 'rand(0, 2000)',
        easing: 'quad.out',
        isSwirl: true,
        isForce3d: true
      }
    })

    let smokeBefore = new mojs.Burst({
      opacity: 0.7,
      parent: '#viewBefore',
      left: 0,
      top: 0,
      degree: 270,
      angle: -135,
      count: count,
      radius: {
        [innerRadius]: outerRadius
      },

      children: {
        fill: [`${codeBub1}`, '#2f5056cc'],
        shape: 'circle',
        pathScale: 'rand(0.5, 1)',
        radius: 'rand(12, 13)',
        swirlSize: `rand(20, 25)`,
        swirlFrequency: 'rand(2, 4)',
        direction: [1, -1],
        duration: `rand(${1 * DURATION}, ${2 * DURATION})`,
        delay: 'rand(0, 2000)',
        easing: 'quad.out',
        isSwirl: true,
        isForce3d: true
      }
    })

    smokeBefore
      .tune({
        x: '50vw',
        y: '50vh'
      })
      .generate()
      .replay()
    smoke
      .tune({
        x: '50vw',
        y: '50vh'
      })
      .generate()
      .replay()

    let leftParticles = new mojs.Tween({
      repeat: 99999,
      delay: 3000,
      onUpdate: function () {
        smokeBefore
          .tune({
            x: '50vw',
            y: '50vh'
          })
          .generate()
          .replay()
      }
    }).play()

    let rightParticles = new mojs.Tween({
      repeat: 99999,
      delay: 3000,
      onUpdate: function () {
        smoke
          .tune({
            x: '50vw',
            y: '50vh'
          })
          .generate()
          .replay()
      }
    }).play(500)
  }

  render () {
    return (
      <div id='hero'>
        <div className='triangles'>
          <div className='triangle' />
          <div className='triangle' />
          <div className='triangle' />
          <div className='triangle' />
        </div>
        <div
          className='view view-after'
          style={{
            width: '50vw'
          }}
          id='viewAfter'>
          <div className='wrapper-after'>
            <div className='img-wrapper'>
              <img src='/img/liam-cutout-code.png' alt='' />
            </div>{' '}
            <div className='img-shadow' />
          </div>{' '}
        </div>{' '}
        <div className='view view-before' id='viewBefore'>
          <div className='wrapper-before'>
            <div className='img-wrapper'>
              <img src='/img/liam-cutout.png' alt='' />
            </div>{' '}
            <div className='img-shadow' />
          </div>{' '}
        </div>{' '}
      </div>
    )
  }
}

export default SplitScreen
