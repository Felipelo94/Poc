import React, { useState } from 'react'
import LoaderIcon from '../../atoms/loader-icon/loader-icon'
import GifAlternativasCerradas from '../../../assets/images/gifs/gif-alternativas-cerradas-tabla.gif'
import { useCurrentWidth } from 'react-socks'
import Modal from '../../atoms/modal/modal'
import './content-widget.scss'

export default function ContentWidget({
  graph,
  size,
  style,
  className,
  isDark,
  classNameIframe,
  id,
  eventOnload,
  showGiftTable,
  idWidget,
  scrolling,
  test,
  showModal = true
}) {
  const isBrowser = typeof window !== 'undefined'
  const [IsOpenMenu, setIsOpenMenu] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const tutorialTable = isBrowser
    ? localStorage.getItem('modal-table-alternativas') === 'true'
      ? true
      : false
    : false

  const openModal = mobiles => {
    if (mobiles <= 1024 && !tutorialTable) {
      setIsOpenMenu(true)
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    }
  }

  const closeModal = () => {
    setIsOpenMenu(false)
    localStorage.setItem('modal-table-alternativas', true)
    document.body.style.overflowY = 'scroll'
    document.body.style.overflow = 'scroll'
    document.documentElement.style.overflow = null
  }

  const modal = (
    <Modal
      close={closeModal}
      style={{ overflow: 'auto' }}
      styleBody={{ height: 'auto' }}
      gtmClose=""
      titte="Explora las tablas y las gráficas"
      id="encuesta-oficinas"
      height={'420px'}
      alt="icon-encuesta"
      width={'320px'}
      margin="50% 0px"
      isCosed={false}
    >
      <p className="p-gif-table">
        Puedes arrastrar las tablas horizontalmente para ver mas información en
        las demás columnas
      </p>
      <img
        src={GifAlternativasCerradas}
        alt="Gif Alternativas Cerradas"
        style={{ width: 280, height: 280 }}
      />
    </Modal>
  )

  const mobile = useCurrentWidth()
  return (
    <section
      style={style}
      className={'d-flex flex-column' + (className ? ' ' + className : '')}
    >
      {showLoader ? <LoaderIcon isDark={isDark} /> : null}
      {(IsOpenMenu && showGiftTable) || test ? modal : null}
      <span style={{ display: 'none', width: 0 }} id="iframe-value">
        {idWidget ? idWidget : graph}
      </span>
      <iframe
        className={classNameIframe}
        id={id}
        onLoad={() => {
          if (showModal) {
            openModal(mobile)
          }
          setShowLoader(false)
          if (eventOnload) {
            eventOnload()
          }
        }}
        title={'iframe-widget'}
        src={graph}
        style={showLoader ? null : size}
        frameBorder="0"
        scrolling={scrolling ? scrolling : 'no'}
      />
      <span style={{ width: 0 }} className="hidden-lable" id="hidden-lable">
        widget
      </span>
    </section>
  )
}
