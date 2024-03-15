import React from 'react'
import { ReactComponent as ErrorFieldIcon } from '../../../assets/images/error-field.svg'
import './select.scss'

const Select = props => {
  const {
    id,
    labelText,
    placeholder,
    control,
    error,
    options,
    isRequired
  } = props
  const blockClass = 'select'

  const starIfIsRequired = isRequired ? '*' : ''

  return (
    <div className={blockClass}>
      <label className={`${blockClass}__text`}>
        {labelText}
        {starIfIsRequired}
      </label>
      <select 
        id={id}
        className={`${blockClass}__list ${
          error ? `${blockClass}__list--error` : ''
        }`}
        {...control}
        required
      >
        <option value="">{placeholder}</option>
        {options?.map((option, index) => (
          <option key={index} value={option.value} >
            {option.name}
          </option>
        ))}
      </select>
      {error && (
        <span className={`${blockClass}__error-message`}>
          <ErrorFieldIcon />
          {error}
        </span>
      )}
    </div>
  )
}

export default Select
