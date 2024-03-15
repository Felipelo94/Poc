import PropTypes from 'prop-types'
import React from 'react'
import Collapse from '../../../atoms/collapse/collapse'
import FooterContent from './components/footer-content'
import FooterHeader from './components/footer-header'
import './footer-desktop.scss'

const FooterDesktop = ({
  dataContentful = {},
  isOpenFooter,
  toggleFooter,
  isDarkMode = false
}) => {
  return (
    <footer
      className={`${
        isDarkMode
          ? 'footer-desktop footer-desktop--dark-mode'
          : 'footer-desktop'
      }`}
    >
      <FooterHeader
        isOpenFooter={isOpenFooter}
        handleOpenFooter={toggleFooter}
      />
      <Collapse isOpen={isOpenFooter}>
        <FooterContent dataContentful={dataContentful} />
      </Collapse>
    </footer>
  )
}

FooterDesktop.propTypes = {
  dataContentful: PropTypes.object,
  isOpenFooter: PropTypes.bool,
  isDarkMode: PropTypes.bool,
  toggleFooter: PropTypes.func
}

export default FooterDesktop
