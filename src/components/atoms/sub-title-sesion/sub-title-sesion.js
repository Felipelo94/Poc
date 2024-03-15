import React from 'react'
import PropTypes from 'prop-types'
import './sub-title-sesion.scss'
import { scaleLine, scaleText, SCALE_SIZE_22PX } from '../../../utils/scaleText'
import Markdown from 'markdown-to-jsx'

export default function SubTitleSesion(props) {
  return (
    <div
      style={{ width: props.width }}
      id="container-subtitle"
      className={`container-subtitle-${props.className}`}
    >
      <Markdown
        id="container-subtitle-text"
        style={{
          fontSize: props.accessibility
            ? scaleText(props.accessibility.fontSize, SCALE_SIZE_22PX, 1.5)
                .fontSize
            : 22,
          lineHeight: props.accessibility
            ? scaleLine(props.accessibility.lineSize)
            : null
        }}
      >
        {props?.subtitle || ''}
      </Markdown>
    </div>
  )
}

SubTitleSesion.defaultProps = {
  className: 'default',
  width: 'auto',
  accessibility: undefined
}

SubTitleSesion.propTypes = {
  subtitle: PropTypes.string.isRequired,
  className: PropTypes.string,
  accessibility: PropTypes.any
}
