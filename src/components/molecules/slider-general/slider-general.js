import React from 'react'
import Slider from 'react-slick'

const SliderGeneral = ({ children, settings, ref }) => {
  return (
    <Slider ref={ref} {...settings}>
      {children}
    </Slider>
  )
}
export default SliderGeneral
