import React from 'react'
import Breakpoint from 'react-socks'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { PROPERTIES_CONTAINER } from './../property-container'

const ContainerFlexBox = ({
  breakPont,
  className,
  style,
  children,
  ...props
}) => {
  const classes = []
  PROPERTIES_CONTAINER.forEach(property => {
    const propValue = props[property.name]
    const defaultInfix = property.defaultValue ? property.defaultValue : ''
    const infix = typeof propValue !== 'boolean' ? propValue : defaultInfix
    if (propValue) classes.push(`${property.className}${infix}`)
  })

  return (
    <>
      <Breakpoint
        className={classNames(className, 'flex-wrap', ...classes)}
        style={style}
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

ContainerFlexBox.defaultProps = {
  flex: true,
  breakPont: 'sm',
  className: '',
  style: {}
}

ContainerFlexBox.propTypes = {
  flex: PropTypes.string,
  breakPont: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
export default ContainerFlexBox
