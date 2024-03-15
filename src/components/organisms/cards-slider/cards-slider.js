import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { ReactComponent as InactiveDot } from '../../../assets/images/icons/inactive-dot.svg'
import { ReactComponent as ActiveDot } from '../../../assets/images/icons/active-dot.svg'
import { ReactComponent as PrevArrowImage } from '../../../assets/images/icons/prev-arrow.svg'
import { ReactComponent as NextArrowImage } from '../../../assets/images/icons/next-arrow.svg'
import './cards-slider.scss'

const PrevArrow = ({ onClick }) => {
  return (
    <button className="PrevArrow" onClick={onClick}>
      <PrevArrowImage />
    </button>
  )
}

const NextArrow = ({ onClick }) => {
  return (
    <button className="NextArrow" onClick={onClick}>
      <NextArrowImage />
    </button>
  )
}

const Dots = ({ dots, goPrev, goNext }) => (
  <nav className="Dots">
    <PrevArrow onClick={goPrev} />
    <ul className="Dots__list">{dots}</ul>
    <NextArrow onClick={goNext} />
  </nav>
)

const Dot = ({ active, onClick }) => {
  return (
    <button onClick={onClick}>
      {active ? <ActiveDot /> : <InactiveDot />}
    </button>
  )
}

const CardsSlider = ({ children }) => {
  const refSlider = useRef()

  const goPrev = () => {
    refSlider.current.slickPrev()
  }

  const goNext = () => {
    refSlider.current.slickNext()
  }

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    appendDots: dots => <Dots dots={dots} goPrev={goPrev} goNext={goNext} />,
    customPaging: () => <button className="card-dot" />
  }

  return (
    <Slider ref={refSlider} {...settings}>
      {children}
    </Slider>
  )
}

export default CardsSlider
