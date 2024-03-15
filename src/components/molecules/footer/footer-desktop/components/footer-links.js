import React, { useEffect, useState } from 'react'
import getFooterOptions from '../../../../../services/service-footer-options/getFooterOptions'
import EnlacesFooter from '../../../../../utils/footer.json'
import ContactInformationFooter from '../../components/contact-information-footer'
import FooterLink from '../../components/footer-link'
import './footer-links.scss'

const FooterLinks = () => {
  const [footerOptions, setFooterOptions] = useState(EnlacesFooter)

  const getFooterOptionsRequest = () => {
    getFooterOptions()
      .then(response => {
        if (response.status === 200) {
          response
            .json()
            .then(footerData => {
              setFooterOptions(footerData)
            })
            .catch(() => {
              setFooterOptions(EnlacesFooter)
            })
        } else {
          setFooterOptions(EnlacesFooter)
        }
      })
      .catch(() => {
        setFooterOptions(EnlacesFooter)
      })
  }

  const legalInfoLinks = footerOptions?.filter(
    item => item.title === 'Información Legal' && item.footerOption
  )

  const corporateGovernanceLinks = footerOptions?.filter(
    item => item.title === 'Gobierno Corporativo' && item.footerOption
  )

  const infoPeopleLinks = footerOptions?.filter(
    item => item.title === 'Información Personas' && item.footerOption
  )

  const contactInfo = footerOptions?.filter(
    item => item.title === 'Información de Contacto' && item.footerOption
  )

  useEffect(() => {
    getFooterOptionsRequest()
  }, [])

  return (
    <div className="footer-content__links">
      <div className="footer-links">
        <h5 className="footer-links__title">Información Legal</h5>
        {legalInfoLinks[0]?.footerOption.map((item, index) => {
          return (
            <FooterLink
              key={`legal-info-link-${index}`}
              title={item.nameOption}
              link={item.url}
              classGtm={item.nameClass}
              id={index}
            />
          )
        })}
      </div>
      <div className="footer-links">
        <h5 className="footer-links__title">Gobierno Corporativo</h5>
        {corporateGovernanceLinks[0]?.footerOption.map((item, index) => {
          return (
            <FooterLink
              key={`corporate-governance-link-${index}`}
              title={item.nameOption}
              link={item.url}
              classGtm={item.nameClass}
              id={index}
            />
          )
        })}
      </div>
      <div className="footer-links">
        <h5 className="footer-links__title">Información Personas</h5>
        {infoPeopleLinks[0]?.footerOption.map((item, index) => {
          return (
            <FooterLink
              key={`info-people-link-${index}`}
              title={item.nameOption}
              link={item.url}
              classGtm={item.nameClass}
              id={index}
            />
          )
        })}
      </div>

      <div className="footer-links footer-links--large">
        <h5 className="footer-links__title">Información de Contacto</h5>
        <ContactInformationFooter options={contactInfo[0].footerOption} />
      </div>
    </div>
  )
}

export default FooterLinks
