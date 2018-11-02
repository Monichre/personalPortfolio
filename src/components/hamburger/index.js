import React from 'react'
import './index.css'

const Hamburger = props => {
  return (
    <div className="hamburger-container" onClick={props.onClick}>
      <span className="lineTop" /> <span className="lineBottom" />
    </div>
  )
}

export default Hamburger
