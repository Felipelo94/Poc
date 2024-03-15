import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { Breakpoint } from 'react-socks'
import { useLineService } from '../../../const/graphql/use-line-service'
import useIsContentLoadedOnBrowser from '../../../hooks/useIsContentLoadedOnBrowser'
import { sendGaPush } from '../../../utils/classGtmUtil'
import ContenidosFooter from '../../../utils/contenidosFooter.json'
import openLinkAppFunc from '../../../utils/open-link-app'
import { SHOW_SURVEY_SITE } from '../../../utils/paramApplication'
import ModalButton from '../../atoms/modal-button/modal-button'
import NewPronto from '../../atoms/pronto/new-pronto/new-pronto'
import Pronto from '../../atoms/pronto/pronto'
import VideoAdviserIcon from '../../atoms/video-adviser-icon/video-adviser-icon'
import MenuChannels from '../menu/menu-channels/menu-channels'
import getPhoneNumbers from './../../../utils/get-phone-numbers-proteccion'
import FooterDesktop from './footer-desktop/footer-desktop'
import FooterMobile from './footer-mobile/footer-mobile'
import './footer.scss'

Modal.setAppElement('#___gatsby')

export let FooterComponent = ({
  dataContentful,
  isIOS,
  isAndroid,
  home,
  modal,
  indexDBUser,
  isShare,
  accessibility = { darkMode: false }
}) => {
  const [isOpenFooter, setIsOpenFooter] = useState(true)
  const isLoadedFooterOnBrowser = useIsContentLoadedOnBrowser()

  const linksApp = ContenidosFooter.allContentfulEnlace.edges.filter(
    item => item.node.categoria === 'App'
  )

  const phoneNumbers = getPhoneNumbers(dataContentful)

  const openLinkApp = () => openLinkAppFunc(linksApp, isAndroid, isIOS)
  const toggleFooter = () => {
    sendGaPush('Home', 'ClicInferior', 'Desplegable')
    setIsOpenFooter(prev => !prev)
  }

  if (!isLoadedFooterOnBrowser) return null

  return (
    <>
      <Breakpoint
        style={{ height: 0, position: 'relative' }}
        customQuery="(min-width: 1025px)"
      >
        <div className="footer-options-float">
          {process.env.NEW_PRONTO === 'true' ? (
            <NewPronto
              indexDBUser={indexDBUser}
              footerIsExpanded={isOpenFooter}
              color={!home ? 'white' : '#e5e5e5'}
            />
          ) : (
            <Pronto
              indexDBUser={indexDBUser}
              footerIsExpanded={isOpenFooter}
              color={!home ? 'white' : '#e5e5e5'}
            />
          )}
          <VideoAdviserIcon
            footerIsExpanded={isOpenFooter}
            color={!home ? 'white' : '#e5e5e5'}
          />
        </div>
      </Breakpoint>
      <Breakpoint customQuery="(max-width: 1024px)">
        <MenuChannels lines={phoneNumbers} openLinkApp={openLinkApp} />
      </Breakpoint>
      {SHOW_SURVEY_SITE === 'true' && (
        <ModalButton
          text="Compártenos tus comentarios"
          color={!home ? 'white' : 'transparent'}
          isSticky={isOpenFooter}
          modal={modal}
          isShare={isShare}
          accesibility={accessibility}
        />
      )}
      <Breakpoint customQuery="(max-width: 1024px)">
        <FooterMobile
          toggleFooter={toggleFooter}
          isOpenFooter={isOpenFooter}
          isDarkMode={accessibility.darkMode}
          dataContentful={dataContentful}
        />
      </Breakpoint>
      <Breakpoint customQuery="(min-width: 1025px)">
        <FooterDesktop
          toggleFooter={toggleFooter}
          isOpenFooter={isOpenFooter}
          isDarkMode={accessibility.darkMode}
          dataContentful={dataContentful}
        />
      </Breakpoint>
    </>
  )
}

function mapStateToProps(state) {
  return {
    accessibility: state.accesibility
  }
}

FooterComponent = connect(mapStateToProps)(FooterComponent)

export const Footer = props => {
  const dataContentfulLineas = useLineService()
  let dataContentful = useStaticQuery(graphql`
    query SiteSocialMediaQuery {
      allContentfulRedSocial(sort: { fields: orden }) {
        edges {
          node {
            id
            nombre
            url
            icono {
              fluid {
                sizes
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `)

  if (dataContentfulLineas) {
    dataContentful = {
      ...dataContentful,
      allContentfulCanal: dataContentfulLineas.allContentfulCanal
    }
  }

  return <FooterComponent {...props} dataContentful={dataContentful} />
}

export default Footer
