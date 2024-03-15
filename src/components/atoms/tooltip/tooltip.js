import React from 'react'
import Markdown from 'markdown-to-jsx'
import './tooltip.scss'

const Tooltip = props => {
  const { style, styleText = {}, text, positionArrow, color } = props

  const arrowAfterClasses = `arrow-after 
    ${positionArrow ? 'arrow-after--rotated' : ''}
  `

  return (
    <div id="container-tooltip" style={style}>
      <div
        className="tooltip-container"
        style={styleText}
        id="tooltip-container"
      >
        <div className="tooltip-container-text" id="tooltip-container-text">
          <span id="tooltip-container-text-value">
            <Markdown>{text}</Markdown>
          </span>
        </div>
      </div>
      <div
        style={{ background: color }}
        className={arrowAfterClasses}
        id="arrow-after"
      />
    </div>
  )
}

export default Tooltip
