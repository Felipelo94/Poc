import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const PROPERTIES_CONTAINER = [
  { name: 'align-self', className: 'align-self-', defaultValue: 'start' },
  { name: 'shrink', className: 'flex-shrink-', defaultValue: '1' },
  { name: 'grow', className: 'flex-grow-', defaultValue: '1' },
  { name: 'order', className: 'order-', defaultValue: '0' }
]

const Item = ({ className, style, children, ...props }) => {
  const classes = []
  PROPERTIES_CONTAINER.forEach(property => {
    const propValue = props[property.name]
    const defaultInfix = property.defaultValue
    const infix = typeof propValue !== 'boolean' ? propValue : defaultInfix
    if (propValue) classes.push(`${property.className}${infix}`)
  })

  return (
    <section className={classNames(className, ...classes)} style={style}>
      {children}
    </section>
  )
}

Item.defaultProps = {
  className: '',
  style: {}
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default Item
