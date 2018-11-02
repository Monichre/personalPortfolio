import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => (
  <div className='sidebar'>
    <nav className='menu'>
      <Link to='/portfolio' className='menu__item menu__item--current'>
        Portfolio
      </Link>
      <a href='/resume.pdf' className='menu__item'>
        Resume
      </a>
    </nav>
    <a
      className='pater'
      rel='noopener'
      target='_blank'
      href='https://www.soundpruf.com/'>
      <p className='pater__description'>
        I am currently developing a next generation application with my partner
        and CEO Alex Nordenson.
        <span style={{ color: '#000' }}>Soundpruf</span> is built for music lovers by music lovers to support
        up and coming artists and allow listeners to share in the success of
        their careers.
        <strong>Learn more</strong>
      </p>
      <div className='pater__img'>
        <div className='pater__img-inner' />
      </div>
    </a>
  </div>
)

export default Sidebar
