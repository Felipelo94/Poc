import PropTypes from 'prop-types'
import React from 'react'
import Anchor from '../../../atoms/anchor/anchor'
import './footer-phone-number.scss'

const FooterPhoneNumber = ({ title, number, id, className = '' }) => {
  return (
    <Anchor
      id={`line-link-${id}`}
      className={`footer-phone-number ${className}`}
      href={number}
    >
      <span className="footer-phone-number__title">{`${
        title.split(':')[0]
      }:`}</span>
      <span className="footer-phone-number__number">{title.split(':')[1]}</span>
    </Anchor>
  )
}

FooterPhoneNumber.propTypes = {
  title: PropTypes.string,
  number: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default FooterPhoneNumber
