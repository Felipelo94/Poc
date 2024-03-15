import React from 'react'
import './contact-information-footer.scss'
import FooterPhoneNumber from './footer-phone-number'

const ContactInformationFooter = ({ options }) => {
  return (
    <div className="footer-contact-information">
      <span className="footer-contact-information__subtitle">
        Sede Principal
      </span>
      <span className="footer-contact-information__caption">
        Calle 49 # 63 - 100 Ed. Torre Protección Medellín, Colombia
      </span>
      {options?.map((option, index) => {
        if (option.nameOption.includes('Resto del')) {
          return (
            <FooterPhoneNumber
              key={`phone-numbers-${index}`}
              id={option.id}
              className="footer-phone-number--border"
              number={option.url}
              title={option.nameOption}
            />
          )
        } else {
          return (
            <FooterPhoneNumber
              key={`phone-numbers-${index}`}
              id={option.id}
              number={option.url}
              title={option.nameOption}
            />
          )
        }
      })}
    </div>
  )
}

export default ContactInformationFooter
