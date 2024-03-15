import PropTypes from 'prop-types'
import React from 'react'
import './footer-content.scss'
import FooterDetails from './footer-details'
import FooterFootnote from './footer-footnote'
import FooterLinks from './footer-links'

const FooterContent = ({ dataContentful = {} }) => {
  return (
    <div className="footer-desktop__content">
      <FooterLinks />
      <FooterDetails dataContentful={dataContentful} />
      <div className="footer-content__container-footnote">
        <FooterFootnote />
      </div>
    </div>
  )
}

FooterContent.propTypes = {
  dataContentful: PropTypes.object
}

export default FooterContent
