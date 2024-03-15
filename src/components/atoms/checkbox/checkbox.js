import React from 'react'
import './checkbox.scss'

const Checkbox = ({ id, children, control = () => {}, error }) => {
  const blockClass = 'checkbox'

  return (
    <div className={blockClass}>
      <div className={`${blockClass}__box-container`}>
        <input
          className={`${blockClass}__box`}
          type="checkbox"
          id={id}
          {...control}
        />
      </div>
      <label className={`${blockClass}__text`} htmlFor={id}>
        {children}
      </label>
      {error && 
        <span className={`${blockClass}__error-message`}>
          {error}
        </span>
      }
    </div>
  )
}

export default Checkbox
