import React from 'react'
import { ReactComponent as ErrorFieldIcon } from '../../../assets/images/error-field.svg'
import './input.scss'

const Input = props => {
  const { id, labelText, placeholder, control, error, isRequired } = props
  const blockClass = 'input'

  const starIfIsRequired = isRequired ? '*' : ''

  return (
    <div className={blockClass}>
      <label className={`${blockClass}__text`}>
        {labelText}
        {starIfIsRequired}
      </label>
      <input
        id={id}
        className={`${blockClass}__box ${
          error ? `${blockClass}__box--error` : ''
        }`}
        placeholder={placeholder}
        {...control}
      />
      {error && (
        <span className={`${blockClass}__error-message`}>
          <ErrorFieldIcon />
          {error}
        </span>
      )}
    </div>
  )
}

export default Input
