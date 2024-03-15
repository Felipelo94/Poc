import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/molecules/footer/footer'
import Header from '../components/molecules/header/header'
import { withPrefix } from 'gatsby'
import { isIOS, isAndroid } from 'react-device-detect'
import BreadCrumb from '../components/atoms/bread-crumb/bread-crumb'
import { contentScript } from '../utils/contentScript'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { useCurrentWidth } from 'react-socks'
import { selectTheme } from '../utils/select-theme'
import './layout.scss'

let LayoutMain = ({
  children,
  showType,
  isOpenMenu,
  showQuickAccess = true,
  defaultTypeUser = '',
  defaultCategoryUser = '',
  defaultSubcategoryUser = '',
  indexDBUserName,
  indexDBUser,
  home,
  modal,
  isNotUser,
  classBread,
  showBread,
  location,
  category,
  isBrowser,
  isStepMenuTourGuideActive,
  isTourOpen,
  isTourGuideActive,
  validateStreetCard,
  OpenEventTour,
  mockup,
  accessibility,
  colorFooter
}) => {
  const [userData, setUserData] = useState(indexDBUser)
  const [marginAdditional, setMarginAdditional] = useState(false)
  const width = useCurrentWidth()
  useEffect(() => {
    setUserData(indexDBUser)
  }, [indexDBUser])

  if (typeof window !== 'undefined') {
    contentScript(withPrefix('/tittle-content.js'))
  }

  const getAdditionalMarginTop = () => {
    if (marginAdditional && showQuickAccess) return '114px'
    if (marginAdditional && !showQuickAccess) return '52px'
    return 0
  }

  return (
    <ThemeProvider
      theme={selectTheme(
        indexDBUser?.category,
        accessibility,
        indexDBUser?.type
      )}
    >
      <>
        <Header
          showTypePerson={showType}
          defaultTypeUser={defaultTypeUser}
          defaultCategoryUser={defaultCategoryUser}
          defaultSubcategoryUser={defaultSubcategoryUser}
          showQuickAccess={showQuickAccess}
          isOpenMenu={isOpenMenu}
          indexDBUser={userData}
          indexDBUserName={indexDBUserName}
          isNotUser={isNotUser}
          isStepTourGuideActive={isStepMenuTourGuideActive}
          isTourOpen={isTourOpen}
          isTourGuideActive={isTourGuideActive}
          validateStreetCard={validateStreetCard}
          OpenEventTour={OpenEventTour}
          indexDBUser={indexDBUser}
          enabledAccessibility={e => {
            setMarginAdditional(e)
          }}
        />

        {showBread && (
          <div
            className={classBread}
            style={{ marginTop: getAdditionalMarginTop() }}
          >
            <BreadCrumb
              location={location}
              defaultTypeUser={defaultTypeUser}
              defaultCategoryUser={defaultCategoryUser}
              defaultSubcategoryUser={defaultSubcategoryUser}
            />
          </div>
        )}
        <div
          style={{
            marginTop: width > 1024 && marginAdditional && !showBread ? 65 : 0,
            background: accessibility
              ? accessibility.darkMode
                ? '#1E1C23'
                : colorFooter
                ? colorFooter
                : '#FFFFFF'
              : '#FFFFFF'
          }}
          className={home ? 'home-mobile' : ''}
          id="layout-main"
        >
          <main>{children}</main>
        </div>

        <Footer
          indexDBUser={userData}
          isIOS={isIOS}
          isAndroid={isAndroid}
          home={home}
          modal={modal}
          colorFooter={colorFooter}
        />
      </>
    </ThemeProvider>
  )
}

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
  indexDBUserName: PropTypes.string
}

function mapStateToProps(state) {
  return {
    accessibility: state.accesibility
  }
}

LayoutMain = connect(mapStateToProps)(LayoutMain)

export default LayoutMain
