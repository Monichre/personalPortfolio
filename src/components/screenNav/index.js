import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class ScreenNav extends Component {
  render () {
    const welcome_style = {
      opacity: 1,
      transform: 'matrix(1, 0, 0, 1, 0, 0)'
    }
    const welcome_style2 = {
      opacity: 1,
      transform: 'matrix(1, 0, 0, 1, 0, 0)',
      display: 'inline-block',
      position: 'relative'
    }
    return (
      <div>
        <Link to='/'>
          <div className='frame-top' style={welcome_style}>
            <div className='liam-container'>
              <div className='liam-before'>Liam Ellis </div>
              <div className='liam-after'>Liam Ellis </div>
            </div>
          </div>
        </Link>

        <div className='icon-wrapper-container' style={welcome_style}>
          <div className='icon-wrapper main'>
            <img src='icons/computer-alt.svg' alt='' />
          </div>
          <div className='icon-wrapper black'>
            <a href='https://www.facebook.com/liam.ellis'>
              <img src='icons/facebook.svg' alt='' />
            </a>
          </div>
          <div className='icon-wrapper grey'>
            <a href='https://www.instagram.com/gw_bushwick/'>
              <img src='icons/instagram.svg' alt='' />
            </a>
          </div>
          <div className='icon-wrapper white'>
            <a href='https://github.com/Monichre'>
              <img src='icons/github-alt.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
