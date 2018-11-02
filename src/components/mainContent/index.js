import React from 'react'
import './index.css'
import Sidebar from '../sidebar'
import SlideShow from '../slideshow'

const MainContent = ({ aboutMe, portfolioItems }) => {
  return (
    <div className='content'>
      <Sidebar />
      <SlideShow portfolioItems={portfolioItems} />
    </div>
  )
}

export default MainContent
