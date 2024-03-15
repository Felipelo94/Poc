import React, { useState } from 'react'
import PropTypes from 'prop-types'
import InternalBite from '../../../atoms/internal-bite/internal-bite'
import './internal-bites.scss'

export default function InternalBites(props) {
  const [activeBite, setActiveBite] = useState(props.defaultActiveBite || 0)

  function handleClicBite(bite) {
    setActiveBite(bite)
  }

  function renderInternalBite(index, { text, image }) {
    return (
      <div key={index} className="option-bite">
        <InternalBite
          key={index}
          id={index}
          text={text}
          image={image}
          active={activeBite}
          onClick={handleClicBite}
        />
      </div>
    )
  }

  function renderChildren() {
    return props.children.map((child, index) => {
      return renderInternalBite(index, child.props)
    })
  }

  function renderChild() {
    const index = 0
    return renderInternalBite(index, props.children.props)
  }

  function renderChildrenContent() {
    return props.children.map((child, index) => {
      if (index !== activeBite) {
        return undefined
      }
      return child.props.children
    })
  }

  function renderChildContent() {
    return props.children
  }

  return (
    <div className="internal-bites">
      <div className="internal-bites__options" role="menu">
        {props.children && props.children.length > 0 && renderChildren()}
        {props.children && props.children.length === undefined && renderChild()}
      </div>
      <div className="internal-bites__content">
        {props.children && props.children.length > 0 && renderChildrenContent()}
        {props.children &&
          props.children.length === undefined &&
          renderChildContent()}
      </div>
    </div>
  )
}

InternalBite.defaultProps = {
  defaultActiveBite: 0,
  children: []
}

InternalBite.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
  defaultActiveBite: PropTypes.number.isRequired
}
