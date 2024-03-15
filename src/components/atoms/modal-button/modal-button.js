import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Events } from 'react-scroll'
import { useCurrentWidth } from 'react-socks'
import styled from 'styled-components'
import { addInfoUser } from '../../../actions/You-cant-miss/You-cant-miss'
import encuestaicon from '../../../assets/images/encuesta-icon.svg'
import encuestaiconDark from '../../../assets/images/file-text-channels.svg'
import { ReactComponent as ImageIcon } from '../../../assets/images/encuesta-icon2.svg'
import { ReactComponent as ImageInActiveIcon } from '../../../assets/images/icon-cuestion-blue.svg'
import { ReactComponent as ImageActiveIcon } from '../../../assets/images/icon-cuestion-white.svg'
import {
  HEIGHT_FOOTER_DESKTOP,
  HEIGHT_FOOTER_MOBILE
} from '../../../const/dictionary/footer-const'
import { get } from '../../../services/service-general/service-general'
import {
  getDataIb,
  updateIndexDB
} from '../../../services/service-indexDB/service-indexDB'
import { sendGaPush } from '../../../utils/classGtmUtil'
import { getCurrentPathPrefix, getPathClean } from '../../../utils/redirectUtil'
import { sendUserDataRedux } from '../../../utils/ReduxDataUtil'
import Modal from '../modal/modal'
import './modal-button.scss'
import Anchor from '../anchor/anchor'

const ContainerModalButtonStyled = styled.div`
  background: ${props =>
    !props.isMobile
      ? props.theme.colors
        ? props.theme.colors.cardBackground
        : null
      : null} !important;
  box-shadow: ${props =>
    !props.isMobile
      ? props.theme.colors
        ? props.theme.colors.cardBoxShadow
        : null
      : null} !important;
  color: ${props =>
    props.theme.colors ? props.theme.colors.cardTitle : null} !important;
  transition: ${props => props.theme.animation};

  .modal-button-container-image {
    filter: ${props =>
      props.theme.colors ? props.theme.colors.filterImgInactive : null};
  }
`

const SpanCloseStyle = styled.p`
  color: ${props =>
    props.theme.colors
      ? props.theme.colors.menuChannels.titleLineas
      : null} !important;
`

function ModalButton({
  text,
  isSticky,
  dispatch,
  color,
  modal,
  isShare,
  accesibility
}) {
  const currentWidth = useCurrentWidth()
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)
  const [isNotFooter, setisNotFooter] = useState(false)
  const [isAlert, setisAlert] = useState(false)
  const [indexDBUserName, setindexDBUserName] = useState([])
  const [closeMenu, setcloseMenu] = useState(false)
  const [modalReactive, setmodalReactive] = useState(false)
  const [OpenIframe, setOpenIframe] = useState(false)
  const [path, setPath] = useState('')

  let isAlertLocal
  let isAlertModal
  const isBrowser = typeof window !== 'undefined'

  if (isBrowser) {
    isAlertLocal = localStorage.getItem('alert')
    isAlertModal = localStorage.getItem('alert-modal')
  }

  setInterval(() => {
    if (!isAlertModal) {
      setmodalReactive(isAlertModal)
    }
  }, 1000)

  useEffect(() => {
    animatePosition(isSticky)
    sendUserDataRedux(getDataIb, setindexDBUserName, get, dispatch, addInfoUser)
  }, [])
  useEffect(() => {
    animatePosition(isSticky)
  }, [isSticky])

  useEffect(() => {
    setisAlert(isAlertLocal)
  }, [isAlertLocal])

  useEffect(() => {
    setPath(getPathClean())
  }, [isNotFooter])

  useEffect(() => {
    updateDta()
  }, [isAlert])

  const updateDta = () => {
    if (indexDBUserName.encuesta !== 'true') {
      updateIndexDB(isAlert)
    }
  }

  Events.scrollEvent.register('end', function() {
    animatePosition(isSticky)
  })

  const animatePosition = openParam => {
    window.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setisNotFooter(
        clientHeight + scrollTop >=
          scrollHeight -
            (openParam ? HEIGHT_FOOTER_DESKTOP : HEIGHT_FOOTER_MOBILE)
      )
    })
  }

  const openModal = () => {
    setIsOpenMenu(true)
    updateIndexDB('true')
    document.documentElement.style.overflowX = 'hidden'
    document.body.style.overflowX = 'hidden'
  }

  const closeModal = () => {
    sendGaPush('Home', 'ClicInferior', 'CompartenosTusComentarios-Cerrar')
    setIsOpenMenu(false)
    document.body.style.overfloy = 'scroll'
    document.documentElement.style.overflow = null
    setOpenIframe(false)
  }

  const closeModalFloat = () => {
    sendGaPush('Home', 'ClicInferior', 'CompartenosTusComentarios-Cerrar')
    setcloseMenu(true)
    localStorage.setItem('alert-modal', true)
    document.body.style.overfloy = 'scroll'
    document.documentElement.style.overflow = null
    sendGaPush('Home', 'ClicInferior', 'CompartenosTusComentarios-Cerrar')
  }

  const iframe = (
    <iframe
      allow="accelerometer;"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      class="container-modal-content-body-frame"
      src="https://investigaciondemercados.wufoo.com/forms/aayadanos-a-mejorar-proteccioncom/"
      title="Encuesta de satisfacción"
    />
  )

  const modalPequeno = (
    <div
      id="encuetas-modal-content-mobile"
      className="gtmHomeInfCompartenosComent"
    >
      <SpanCloseStyle className="modal-button-container-parrafo gtmHomeInfCompartenosComent">
        Cuéntanos cómo fue tu experiencia en el nuevo portal de proteccion.com
      </SpanCloseStyle>
      {currentWidth > 1024 ? (
        <button
          id="btn-encuesta-modal"
          className="btn-realizar gtmHomeInfCompartenosComent"
          onClick={() => {
            setOpenIframe(true)
            setcloseMenu(true)
            setIsOpenMenu(true)
          }}
        >
          Realizar encuesta
        </button>
      ) : (
        <Anchor
          style={{ textDecoration: 'none' }}
          className="gtmHomeInfCompartenosComent"
          href="https://investigaciondemercados.wufoo.com/forms/aayadanos-a-mejorar-proteccioncom/"
        >
          <button
            id="btn-encuesta-modal"
            className="btn-realizar gtmHomeInfCompartenosComent"
          >
            Realizar encuesta
          </button>
        </Anchor>
      )}
    </div>
  )
  const modalCCuestion = (
    <Modal
      id="encuesta"
      close={closeModal}
      image={
        accesibility
          ? accesibility.darkMode
            ? encuestaiconDark
            : encuestaicon
          : encuestaicon
      }
      titte="Compártenos tus comentarios"
      gtmClose=""
      alt="icon-encuesta"
      style={currentWidth <= 1024 ? { bottom: '76px', right: '88px' } : {}}
      height={currentWidth <= 1024 ? '157px' : '450px'}
      width={currentWidth <= 1024 ? '256px' : '1024px'}
      margin=" 72px 0px "
    >
      {currentWidth <= 1024 ? modalPequeno : iframe}
    </Modal>
  )

  return (
    <div style={{ background: color, height: 0, position: 'relative' }}>
      {isOpenMenu && modalCCuestion}
      {OpenIframe ? modalCCuestion : null}
      {isAlert === 'true' &&
      !modalReactive &&
      !closeMenu &&
      !isOpenMenu &&
      !modal &&
      !isAlertModal &&
      !isShare ? (
        <Modal
          id="encuesta-time-out"
          close={closeModalFloat}
          image={
            accesibility
              ? accesibility.darkMode
                ? encuestaiconDark
                : encuestaicon
              : encuestaicon
          }
          titte="Compártenos tus comentarios"
          gtmClose=""
          alt="icon-encuesta"
          style={{ bottom: '76px', right: '88px' }}
          height={'151px'}
          width={'256px'}
          margin=" 72px 0px "
        >
          {modalPequeno}
        </Modal>
      ) : null}
      <ContainerModalButtonStyled
        id="encuesta-container"
        className={`modal-button-container${
          isNotFooter ? '-' + getCurrentPathPrefix(path) + 'sticky' : ''
        }`}
        style={{ zIndex: isOpenMenu ? 10 : 7 }}
        onClick={() => {
          sendGaPush('Home', 'ClicInferior', 'CompartenosTusComentarios')
          openModal()
        }}
        isMobile={currentWidth < 1024}
      >
        <div
          className="modal-button-container-image"
          id="modal-button-container-image"
        >
          <ImageIcon
            alt="Ícono realizar encuesta"
            title="Ícono realizar encuesta"
            className="img-encuesta-desck"
          />
        </div>
        <div className="modal-button-container-text">
          <span>{text}</span>
        </div>
      </ContainerModalButtonStyled>

      <ContainerModalButtonStyled
        isMobile={currentWidth < 1024}
        id="encuesta-container-mobile"
        className={`encuesta-mobile`}
        style={{ zIndex: isOpenMenu ? 10 : 7 }}
        onClick={() => {
          sendGaPush('Home', 'ClicInferior', 'CompartenosTusComentarios')
          openModal()
        }}
      >
        {isOpenMenu ? (
          <ImageActiveIcon
            id="encuesta-mobile-img"
            style={{ marginBottom: 11, marginRight: 5 }}
            alt="icon-active"
            className="encuesta-mobile-img"
          />
        ) : (
          <ImageInActiveIcon
            id="encuesta-mobile-img"
            alt="icon-inactive"
            className="encuesta-mobile-img gtmHomeInfCompartenosComent"
          />
        )}
      </ContainerModalButtonStyled>
    </div>
  )
}

ModalButton = connect()(ModalButton)

export default ModalButton
