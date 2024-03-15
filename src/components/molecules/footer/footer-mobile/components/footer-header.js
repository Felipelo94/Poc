import PropTypes from 'prop-types'
import React from 'react'
import ButtonToggleFooter from './../../components/button-toggle-footer'
import FooterSocials from './../../footer-desktop/components/footer-socials'
import './footer-header.scss'

const FooterHeader = ({
  handleOpenFooter,
  isOpenFooter = true,
  dataContentful = {}
}) => {
  const socialMedia = dataContentful?.allContentfulRedSocial?.edges
  return (
    <div className="footer-mobile__header">
      <ButtonToggleFooter
        isOpenFooter={isOpenFooter}
        handleOpenFooter={handleOpenFooter}
      />
      {socialMedia?.map(({ node }, index) => {
        return (
          <FooterSocials
            key={node.nombre}
            id={index}
            link={node.url}
            name={node.nombre}
            iconSrc={node.icono ? node.icono.fluid.src : null}
          />
        )
      })}
    </div>
  )
}

FooterHeader.propTypes = {
  isOpenFooter: PropTypes.bool,
  handleOpenFooter: PropTypes.func,
  dataContentful: PropTypes.object
}

export default FooterHeader
