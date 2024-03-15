import React from 'react'
import { ReactComponent as PersonIcon } from '../../../assets/images/type-person.svg'
import { ReactComponent as CompanyIcon } from '../../../assets/images/company.svg'
import './who-are-you-option.scss'

const WhoAreYouOption = ({ type }) => {
  const optionIconClasses = `who-are-you-option__icon ${
    type.status
      ? 'who-are-you-option__icon--active'
      : 'who-are-you-option__icon--inactive'
  }`

  const optionTextClasses = `who-are-you-option__text ${
    type.status
      ? 'who-are-you-option__text--active'
      : 'who-are-you-option__text--inactive'
  }`

  return (
    <div className="who-are-you-option">
      <div className={optionIconClasses}>
        {type.img === 1 ? (
          <PersonIcon alt={type.name} />
        ) : (
          <CompanyIcon alt={type.name} />
        )}
      </div>
      <div className={optionTextClasses}>{type.name}</div>
    </div>
  )
}

export default WhoAreYouOption
