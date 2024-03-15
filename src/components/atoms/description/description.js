import React from 'react'
import PropTypes from 'prop-types'
import { useCurrentWidth } from 'react-socks'

const Description = props => {
  const {
    className,
    padding,
    size,
    lineHeight,
    addPadding,
    description
  } = props

  const width = useCurrentWidth()

  const headingStyles = {
    fontSize: size,
    padding: padding,
    paddingBottom: addPadding ? 12 : null,
    lineHeight: width > 1025 ? lineHeight : null
  }

  return (
    <div className={className}>
      <span style={headingStyles}>{description}</span>
    </div>
  )
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default Description
