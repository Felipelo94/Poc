import React from 'react'
import classNames from 'classnames'
import Breakpoint from 'react-socks'
import PropTypes from 'prop-types'

const PROPERTIES_CONTAINER = [
  { name: 'align-self', className: 'align-self-', defaultValue: 'start' },
  { name: 'shrink', className: 'flex-shrink-', defaultValue: '1' },
  { name: 'grow', className: 'flex-grow-', defaultValue: '1' },
  { name: 'order', className: 'order-', defaultValue: '0' }
]

const ItemFlexBox = ({
  mobileProperties,
  styleMobile,
  classNameMobile,
  className,
  widthItem,
  style,
  children,
  ...props
}) => {
  const classes = []
  let classesMobile = []
  PROPERTIES_CONTAINER.forEach(property => {
    const propValue = props[property.name]
    const defaultInfix = property.defaultValue
    const infix = typeof propValue !== 'boolean' ? propValue : defaultInfix
    if (propValue) classes.push(`${property.className}${infix}`)
  })

  for (let object in mobileProperties) {
    const property = PROPERTIES_CONTAINER.find(prop => prop.name === object)
    if (property)
      classesMobile.push(`${property.className}${mobileProperties[object]}`)
  }
  if (!mobileProperties) classesMobile = classes
  if (!classNameMobile) classNameMobile = className
  if (!styleMobile) styleMobile = style

  return (
    <>
      <Breakpoint
        className={classNames(classNameMobile, 'order-0', ...classesMobile)}
        style={{ width: widthItem, ...styleMobile }}
        sm
        down
      >
        {children}
      </Breakpoint>
      <Breakpoint
        className={classNames(className, ...classes)}
        style={style}
        md
        up
      >
        {children}
      </Breakpoint>
    </>
  )
}

ItemFlexBox.defaultProps = {
  className: '',
  widthItem: '100%',
  style: {}
}

ItemFlexBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  widthItem: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
export default ItemFlexBox
