import React, { Component } from 'react'
import { ArrowsUp, ArrowsDown } from '../icons'
import './index.css'

const cssClassHandler = (i, active) => {
  if (active === 1) {
    return 'slideshow__item--featured'
  } else if (i === active - 1) {
    return 'slideshow__item slide_up--remove'
  } else if (i === active + 1) {
    return 'slideshow__item slide_up--remove'
  }
}

class SlideShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: 0,
      slides: []
    }
  }

  handleNextSlide = e => {
    e.preventDefault()
    const { active, slides } = this.state
    const slideItems = Array.from(document.querySelectorAll('.slideshow__item'))

    this.setState(
      {
        active: this.handleNextSlideLogic(active)
      },
      () => {
        this.handleNextSlideAnimation(slideItems, active)
      }
    )
  }
  handlePrevSlide = e => {
    e.preventDefault()
    const { active, slides } = this.state
    const slideItems = Array.from(document.querySelectorAll('.slideshow__item'))
    this.setState(
      {
        active: this.handlePrevSlideLogic(active)
      },
      () => {
        this.handlePrevSlideAnimation(slideItems, active)
      }
    )
  }
  componentWillMount() {
    this.setState({
      slides: this.props.portfolioItems
    })
  }
  handleNextSlideLogic = active => {
    const { slides } = this.state
    const next = active + 1
    const prev = active - 1
    if (slides.indexOf(slides[next]) === -1) {
      return active
    } else {
      return next
    }
  }

  handleNextSlideAnimation = (slideItems, active) => {
    const { slides } = this.state
    const next = active + 1
    if (slides.indexOf(slides[next]) === -1) {
      return null
    } else {
      const increment = next * 100
      slideItems.forEach(slide => {
        slide.style.transform = `translateY(-${increment}%)`
      })
    }
  }

  handlePrevSlideAnimation = (slideItems, active) => {
    const { slides } = this.state

    const prev = active - 1
    if (slides.indexOf(slides[prev]) === -1) {
      return null
    } else {
      const increment = prev * 100
      slideItems.forEach(slide => {
        slide.style.transform = `translateY(-${increment}%)`
      })
    }
  }

  handlePrevSlideLogic = () => {
    const { active, slides } = this.state
    const prev = active - 1
    if (slides.indexOf(slides[prev]) === -1) {
      return active
    } else {
      return prev
    }
  }
  render() {
    const { active } = this.state
    return (
      <div className="slideshow">
        {this.props.portfolioItems.map((item, i) => (
          <div
            className={`slideshow__item ${
              i === active ? 'slideshow__item--featured' : ''
            } slideshow__item${i}`}>
            <div
              className={`slideshow__item-img ${
                i === active ? 'slideshow__item-img--larger' : ''
              }`}>
              <div className="slideshow__item-img-inner">
                <img
                  src={item.featuredImage.fields.file.url}
                  alt={item.featuredImage.fields.title}
                  style={{
                    objectFit: 'contain',
                    height: '100%',
                    width: '100%'
                  }}
                />
              </div>
            </div>
            <span className="slideshow__item-number">#{i + 1}</span>
            <div className="slideshow__item-titlewrap slideshow__item-titlewrap--featured">
              <h3 className="slideshow__item-title slideshow__item-title--larger">
                {item.title}
              </h3>
              <p className="slideshow__item-subtitle">{item.url}</p>
            </div>
          </div>
        ))}
        <SlideShowNavigation
          slides={this.props.portfolioItems}
          active={this.state.active}
          nextSlide={this.handleNextSlide}
          prevSlide={this.handlePrevSlide}
        />
      </div>
    )
  }
}

const SlideShowNavigation = ({ slides, active, nextSlide, prevSlide }) => (
  <nav className="slideshow__nav">
    <div onClick={prevSlide} className='prevButtton'>
      <ArrowsUp />
    </div>
    {slides.map((slide, i) => (
      <button
        className={`slideshow__nav-item ${
          active === i ? 'slideshow__nav-item--current' : ''
        } `}>
        {i + 1}
      </button>
    ))}
    <div onClick={nextSlide} className='nextButton'>
      <ArrowsDown />
    </div>
  </nav>
)

export default SlideShow
