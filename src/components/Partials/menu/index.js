import React, { Component, Fragment } from 'react'

import { Link } from 'react-router-dom'
import './index.css'

export default class Menu extends Component {
  render () {
    return (
      <div id='navigation'>
        <div className='nav-container'>
          <div className='nav-main'>
            <Link to='/'>
              <div className='nav-item'>
                <div className='nav-item-wrapper'>
                  <div className='nav-item-link'> Home </div>
                </div>
              </div>
            </Link>
            <Link to='/code'>
              <div className='nav-item'>
                <div className='nav-item-wrapper'>
                  <div className='nav-item-link'> Code </div>
                </div>
              </div>
            </Link>
            <Link to='/portfolio'>
              <div className='nav-item'>
                <div className='nav-item-wrapper'>
                  <div className='nav-item-link'> Portfolio </div>
                </div>
              </div>
            </Link>
            <a href='./resume.pdf' target='_blank'>
              <div className='nav-item'>
                <div className='nav-item-wrapper'>
                  <div className='nav-item-link'> Resume </div>
                </div>
              </div>
            </a>
          </div>
          <div className='nav-sec'>
            <Link to='/about'>
              <div className='nav-item'>
                <div className='nav-item-wrapper'>
                  <img src='/img/liam-cutout.png' alt='' id='profile' />
                  <div className='nav-item-link-sec'> About </div>
                </div>
              </div>
            </Link>
          </div>
          <div className='nav-last'>
            <p>
              Email:
              <a href='mailto:liamhellis@gmail.com'>liamhellis @gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
