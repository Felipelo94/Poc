import PropTypes from 'prop-types'
import React from 'react'
import Collapse from './../../../atoms/collapse/collapse'
import FooterContent from './components/footer-content'
import FooterHeader from './components/footer-header'

const FooterMobile = ({
  dataContentful = {},
  isOpenFooter,
  toggleFooter,
  isDarkMode = false
}) => {
  return (
    <footer
      className={`${
        isDarkMode ? 'footer-mobile footer-mobile--dark-mode' : 'footer-mobile'
      }`}
    >
      <FooterHeader
        isOpenFooter={isOpenFooter}
        handleOpenFooter={toggleFooter}
        dataContentful={dataContentful}
      />
      <Collapse isOpen={isOpenFooter} id="footer-mobile">
        <FooterContent isOpenFooter={isOpenFooter} isDarkMode={isDarkMode} />
      </Collapse>
    </footer>
  )
}

FooterMobile.propTypes = {
  dataContentful: PropTypes.object,
  isOpenFooter: PropTypes.bool,
  isDarkMode: PropTypes.bool,
  toggleFooter: PropTypes.func
}

export default FooterMobile
