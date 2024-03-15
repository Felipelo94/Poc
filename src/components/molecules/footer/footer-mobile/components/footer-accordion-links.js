import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import getFooterOptions from '../../../../../services/service-footer-options/getFooterOptions'
import CollapseItem from '../../../../atoms/collapse-item/collapse-item'
import ContactInformationFooter from '../../components/contact-information-footer'
import FooterLink from './../../components/footer-link'
import './footer-accordion-links.scss'
import NewPronto from '../../../../atoms/pronto/new-pronto/new-pronto'
import Pronto from '../../../../atoms/pronto/pronto'
import EnlacesFooter from '../../../../../utils/footer.json'

const FooterAccordionLinks = ({ isOpenFooter = true }) => {
  const [isOpenItem, setIsOpenItem] = useState(0)

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

  useEffect(() => {
    if (!isOpenFooter) {
      setIsOpenItem(0)
    }
  }, [isOpenFooter])

  const toggleOpenItem = itemClick => {
    let itemClickTemp = itemClick
    if (isOpenItem === itemClick) {
      itemClickTemp = 0
    }
    setIsOpenItem(itemClickTemp)
  }
  return (
    <div className="footer-content__accordion-links">
      <CollapseItem
        isOpenItem={isOpenItem === 1}
        setIsOpenItem={() => toggleOpenItem(1)}
        title="Información Legal"
        id="0"
      >
        <>
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
        </>
      </CollapseItem>
      <CollapseItem
        isOpenItem={isOpenItem === 2}
        setIsOpenItem={() => toggleOpenItem(2)}
        title="Gobierno Corporativo"
        id="1"
      >
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
      </CollapseItem>
      <CollapseItem
        isOpenItem={isOpenItem === 3}
        setIsOpenItem={() => toggleOpenItem(3)}
        title="Información Personas"
        id="2"
      >
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
        {process.env.NEW_PRONTO === 'true' ? (
          <NewPronto Hidden={true} />
        ) : (
          <Pronto Hidden={true} />
        )}
      </CollapseItem>
      <CollapseItem
        isOpenItem={isOpenItem === 4}
        setIsOpenItem={() => toggleOpenItem(4)}
        title="Información de Contacto"
        id="3"
      >
        <div className="footer-content__accordion-links__contact-info">
          <ContactInformationFooter options={contactInfo[0].footerOption} />
        </div>
      </CollapseItem>
    </div>
  )
}

FooterAccordionLinks.propTypes = {
  isOpenFooter: PropTypes.bool
}

export default FooterAccordionLinks
