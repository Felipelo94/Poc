import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'

import Header from '../components/molecules/header/header'
import './layout.scss'
import Footer from '../components/molecules/footer/footer'
import { isIOS, isAndroid } from 'react-device-detect'
import { contentScript } from '../utils/contentScript'

const Layout = ({ children, showType, showQuickAccess = true }) => {
  if (typeof window !== 'undefined') {
    contentScript(withPrefix('/tittle-content.js'))
  }

  return (
    <>
      <Header
        showTypePerson={showType}
        showQuickAccess={showQuickAccess}
        customStyles={{ backgroundColor: '#ffffff', padding: '1.1rem 1.1rem' }}
      />

      <div
        id="Layout"
        style={{
          flex: 1,
          msFlex: ' 1',
          WebkitFlex: ' 1',
          paddingTop: 0,
          background: '#ffffff'
        }}
      >
        <main>{children}</main>
      </div>
      <Footer isIOS={isIOS} isAndroid={isAndroid} colorFooter={'#FFFFFF'} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
