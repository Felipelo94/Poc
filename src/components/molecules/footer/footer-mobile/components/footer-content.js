import PropTypes from 'prop-types'
import React from 'react'
import { ReactComponent as LogoProteccion } from '../../../../../assets/images/logo-proteccion-mobile.svg'
import { ReactComponent as LogoMobileDarkProteccion } from '../../../../../assets/images/logo_proteccion_30_mobile_dark.svg'
import GuardedLogo from '../../components/guarded-logo'
import FooterAccordionLinks from './footer-accordion-links'
import FooterMainLinks from './footer-main-links'
import './footer-content.scss'

const FooterContent = ({ isDarkMode = false, isOpenFooter = true }) => {
  return (
    <div className="footer-mobile__content">
      <FooterMainLinks />
      <FooterAccordionLinks isOpenFooter={isOpenFooter} />
      <div className="footer-content__logos">
        <GuardedLogo />
        {isDarkMode ? <LogoMobileDarkProteccion /> : <LogoProteccion />}
      </div>
    </div>
  )
}

FooterContent.propTypes = {
  isDarkMode: PropTypes.bool,
  isOpenFooter: PropTypes.bool
}

export default FooterContent
