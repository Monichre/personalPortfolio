import React from 'react'
import './index.css'

const GridBoxes = () => {
  return (
    <div
      className="boxes-wrapper row parallax cssscan-current"
      data-scale="0"
      data-topoffset="0"
      data-ratio="-0.2"
      style={{ width: '616px', transform: 'translate3d(0px, 0px, 0px)' }}>
      <a
        href="/en/properties/pricelist?stage=MB"
        className="square box col-xs-6 box--1"
        data-id="1">
        <div className="box-content">
          <div className="bg" />
        
        </div>
      </a>

      <a
        href="/en/properties/pricelist?stage=MB"
        className="square box col-xs-6 box--1"
        data-id="1">
        <div className="box-content">
          <div className="bg" />

        </div>
      </a>
      <a
        href="/en/properties/pricelist?stage=MB"
        className="square box col-xs-6 box--1"
        data-id="1">
        <div className="box-content">
          <div className="bg" />

        </div>
      </a>
      <a
        href="/en/properties/pricelist?stage=MB"
        className="square box col-xs-6 box--1"
        data-id="1">
        <div className="box-content">
          <div className="bg" />

        </div>
      </a>
    </div>
  )
}

export default GridBoxes
