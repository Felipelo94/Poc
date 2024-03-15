import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ReactComponent as IconLike } from '../../../assets/images/icons/icon-radio-like.svg'

import './radio-button.scss'

const RadioButton = ({
  id,
  className,
  disabled,
  checked,
  value,
  onChangeRadio,
  name,
  children,
  iconProps
}) => {
  const customRadio = iconProps.iconName !== 'check'
  const radioClassName = classnames('control control--radio', className, {
    'control__radio--with_label': children,
    'control__radio--custom': customRadio
  })
  const indicatorClassName = classnames('control__indicator', {
    'control__indicator--disabled': disabled
  })
  const inputId = id || 'radioButtonProductInput'

  return (
    <label className={radioClassName} htmlFor={inputId} id="radioButtonProduct">
      {children && <span className="control__label">{children}</span>}
      <input
        id={inputId}
        alt="Seleccionar producto"
        type="radio"
        checked={checked && !disabled && 'checked'}
        disabled={disabled && 'disabled'}
        name={name}
        value={value}
        onChange={onChangeRadio}
      />
      <div className={indicatorClassName} />
      {(customRadio || checked) && (
        <span className="control--icon">
          <IconLike />
        </span>
      )}
    </label>
  )
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChangeRadio: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  iconProps: PropTypes.object
}

RadioButton.defaultProps = {
  iconProps: {
    iconName: 'check',
    size: 16
  }
}

export default RadioButton
