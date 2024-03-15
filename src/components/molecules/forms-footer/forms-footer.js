import React from 'react'
import { ReactComponent as TelephoneIcon } from '../../../assets/images/icons/telephone-icon.svg'
import FOOTER_OPTIONS from '../../../const/dictionary/forms-footer-data.json'

import './forms-footer.scss'

const FormsFooter = () => {
  return (
    <footer className="forms-footer">
      <div className="forms-footer__title-container">
        <TelephoneIcon />
        <h3 className="forms-footer__title">Línea de Servicio</h3>
      </div>
      {FOOTER_OPTIONS.map((option, index) => {
        const redirectRef =
          option.description === 'WhatsApp'
            ? `https://wa.me/${option.compactNumber}`
            : `tel: +57 ${option.number}`
        return (
          <a
            className="forms-footer__telephone-link"
            href={redirectRef}
            key={index}
          >
            <span className="forms-footer__description">
              {option.description}
            </span>
            <span className="forms-footer__number">{option.number}</span>
          </a>
        )
      })}
    </footer>
  )
}

export default FormsFooter
