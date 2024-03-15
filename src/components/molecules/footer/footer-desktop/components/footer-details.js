import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import LogoWhiteProteccion from '../../../../../assets/images/logotipo.png'
import LogoDarkProteccion from '../../../../../assets/images/logo_proteccion_30_desktop_dark.png'
import GuardedLogo from '../../components/guarded-logo'
import './footer-details.scss'
import FooterSocials from './footer-socials'

const FooterDetails = ({ dataContentful = {} }) => {
  const isDarkModeActive = useSelector(state => state.accesibility?.darkMode)
  const socialMedia = dataContentful?.allContentfulRedSocial?.edges

  return (
    <div className="footer-content__details">
      <div className="social-media" id="socialMedia-container">
        <h6 id="lbl-siguenos" className="social-media__label">
          Síguenos:
        </h6>
        {socialMedia?.map(({ node }, index) => {
          return (
            <FooterSocials
              key={node.nombre}
              idNode={node.id}
              id={index}
              link={node.url}
              name={node.nombre}
              iconSrc={node.icono ? node.icono.fluid.src : null}
            />
          )
        })}
        <GuardedLogo />
      </div>
      {isDarkModeActive ? (
        <img src={LogoDarkProteccion} alt="Logo Proteccion 30 años" />
      ) : (
        <img src={LogoWhiteProteccion} alt="Logo Proteccion" />
      )}
    </div>
  )
}

FooterDetails.propTypes = {
  dataContentful: PropTypes.object
}

export default FooterDetails
