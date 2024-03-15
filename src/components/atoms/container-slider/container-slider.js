import React from 'react'
import PropTypes from 'prop-types'
import ProgressBar from '../progress-bar/progress-bar'

const ContainerSlider = ({
  children,
  showProgress,
  value,
  valuefinal,
  style,
  className,
  idContainer
}) => {
  return (
    <div
      style={style}
      className={`container-slider-general ${className}`}
      id={idContainer ?? 'container-slider-general'}
    >
      <ProgressBar valuefinal={valuefinal} show={showProgress} value={value} />
      {children}
    </div>
  )
}

ContainerSlider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ContainerSlider
