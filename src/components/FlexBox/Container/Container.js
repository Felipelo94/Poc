import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { PROPERTIES_CONTAINER } from './../property-container'

const Container = ({ className, style, children, ...props }) => {
  const classes = []
  PROPERTIES_CONTAINER.forEach(property => {
    const propValue = props[property.name]
    const defaultInfix = property.defaultValue ? property.defaultValue : ''
    const infix = typeof propValue !== 'boolean' ? propValue : defaultInfix
    if (propValue) classes.push(`${property.className}${infix}`)
  })
  return (
    <section className={classNames(className, ...classes)} style={style}>
      {children}
    </section>
  )
}

Container.defaultProps = {
  flex: true,
  className: '',
  style: {}
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
export default Container
