import React from 'react'
import PropTypes from 'prop-types'

import './footer-link.scss'
import Anchor from '../../../atoms/anchor/anchor'

const FooterLink = ({ title, classGtm, link, id, icon = undefined }) => {
  return (
    <Anchor
      id={`enlace-${id}-${title.replace(/ /g, '-')}`}
      className={`footer-link ${classGtm} ${icon ? 'footer-link--icon' : ''}`}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {icon && <span className="footer-link__icon">{icon}</span>}
      {title}
    </Anchor>
  )
}

FooterLink.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.element,
  link: PropTypes.string,
  classGtm: PropTypes.string,
  title: PropTypes.string
}

export default FooterLink
