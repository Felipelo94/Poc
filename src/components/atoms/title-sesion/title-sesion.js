import React from 'react'
import PropTypes from 'prop-types'
import { useCurrentWidth } from 'react-socks'
import './title-sesion.scss'

const TitleSesion = props => {
  const {
    className,
    hierarchy,
    padding,
    size,
    lineHeight,
    whiteSpace,
    addPadding,
    title,
    hierarchyH3
  } = props

  const width = useCurrentWidth()

  const headingStyles = {
    fontSize: size,
    padding: padding,
    paddingBottom: addPadding ? 12 : null,
    lineHeight: width > 1025 ? lineHeight : null
  }

  const headingId = whiteSpace
    ? `TitleSesion-container-title-big-pre`
    : `TitleSesion-container-title-big`

  return (
    <div id="TitleSesion-container" className={className}>
      {hierarchy ? (
        <h1 style={headingStyles} id={headingId}>
          {title}
        </h1>
      ) : hierarchyH3 ? (
        <h3 style={headingStyles} id={headingId}>
          {title}
        </h3>
      ) : (
        <h2 style={headingStyles} id={headingId}>
          {title}
        </h2>
      )}
    </div>
  )
}

TitleSesion.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default TitleSesion
