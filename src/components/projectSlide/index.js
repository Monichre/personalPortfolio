import React from 'react'
import './index.css'

const ProjectSlide = () => {
  return (
    <div className="slide_wrapper">
      <div className="slide_inner">
        <div className="img_wrapper">
          <img src="" alt="" />
        </div>
        <h1 className="project_title">Title</h1>
      </div>
      <div className="circle_overlay">
        <div className="circle" />
      </div>
      <div className="project_nav_overlay">
        <div className="project_nav left" />
        <div className="project_nav right" />
      </div>
    </div>
  )
}

export default ProjectSlide
