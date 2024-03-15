import PropTypes from 'prop-types'
import React from 'react'
import { ReactComponent as Facebook } from '../../../../../assets/images/icons/facebook.svg'
import { ReactComponent as Instagram } from '../../../../../assets/images/icons/instagram.svg'
import { ReactComponent as Linkedin } from '../../../../../assets/images/icons/linkedin.svg'
import { ReactComponent as Twitter } from '../../../../../assets/images/icons/twitter.svg'
import { ID_CONTENTFUL_SOCIAL_MEDIA } from '../../../../../const/dictionary/footer-const'
import Anchor from '../../../../atoms/anchor/anchor'
import './footer-socials.scss'

export const IconoSocialMedia = ({ idNode = undefined, name, id, iconSrc }) => {
  const idTemp = `icon-image-${id}`
  const classNameTemp = `footer-socials__img gtmHomeInf${name
    .charAt(0)
    .toUpperCase()}${name.slice(1)}`

  switch (idNode) {
    case ID_CONTENTFUL_SOCIAL_MEDIA.facebook:
      return (
        <Facebook
          id={idTemp}
          className={classNameTemp}
          alt={`Ícono de una F para para ingresar al perfil de Protección en Facebook`}
          title={`Íconos de ${name}`}
        />
      )
    case ID_CONTENTFUL_SOCIAL_MEDIA.instagram:
      return (
        <Instagram
          id={idTemp}
          className={classNameTemp}
          alt={`Ícono de una cámara para para ingresar al perfil de Protección en Instagram`}
          title={`Íconos de ${name}`}
        />
      )
    case ID_CONTENTFUL_SOCIAL_MEDIA.twitter:
      return (
        <Twitter
          id={idTemp}
          className={classNameTemp}
          alt={`Ícono de un pájaro para para ingresar al perfil de Protección en Twitter`}
          title={`Íconos de ${name}`}
        />
      )
    case ID_CONTENTFUL_SOCIAL_MEDIA.linkedin:
      return (
        <Linkedin
          id={idTemp}
          className={classNameTemp}
          alt={`Ícono de las letras IN para para ingresar al perfil de Protección en Linkedin`}
          title={`Íconos de ${name}`}
        />
      )

    default:
      return (
        <img
          async
          id={idTemp}
          className={classNameTemp}
          alt={`Íconos de ${name}`}
          title={`Íconos de ${name}`}
          src={iconSrc}
        />
      )
  }
}

const FooterSocials = ({ name, id, idNode = undefined, link, iconSrc }) => {
  return (
    <Anchor
      key={name}
      id={`icon-link-${id}`}
      href={link}
      className={`footer-socials gtmHomeInf${name
        .charAt(0)
        .toUpperCase()}${name.slice(1)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {idNode ? (
        <IconoSocialMedia
          idNode={idNode}
          id={id}
          name={name}
          iconSrc={iconSrc}
        />
      ) : (
        <IconoSocialMedia id={id} name={name} iconSrc={iconSrc} />
      )}
    </Anchor>
  )
}

FooterSocials.propTypes = {
  name: PropTypes.string,
  isDefaultIcon: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  idNode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  link: PropTypes.string,
  iconSrc: PropTypes.string
}

export default FooterSocials
