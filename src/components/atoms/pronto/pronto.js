import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { Events } from 'react-scroll'
import styled from 'styled-components'
import { ReactComponent as ProntoIcon } from '../../../assets/images/pronto-icon.svg'
import {
  HEIGHT_FOOTER_DESKTOP,
  HEIGHT_FOOTER_MOBILE
} from '../../../const/dictionary/footer-const'
import { sendGaPush } from '../../../utils/classGtmUtil'
import { HASH_PRONTO, URL_PRONTO } from '../../../utils/paramApplication'
import { getCurrentPathPrefix, getPathClean } from '../../../utils/redirectUtil'
import Anchor from '../anchor/anchor'
import './pronto.scss'

const ContainerModalStyled = styled.section`
  background: ${props =>
    props.theme.colors ? props.theme.colors.cardBackground : null} !important;
  box-shadow: ${props =>
    props.theme.colors ? props.theme.colors.cardBoxShadow : null} !important;
  transition: ${props => props.theme.animation};
  a {
    h3 {
      color: ${props =>
        props.theme.colors ? props.theme.colors.cardTitle : null} !important;
    }
  }
`

const Pronto = props => {
  const [flag, setFlag] = useState(null)
  const [isNotFooter, setisNotFooter] = useState(false)
  const [path, setPath] = useState('')
  const [enabledPronto, setEnabledPronto] = useState(false)

  const initChatPronto = () => {
    window.pratech.parly.initChat()
  }

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

  useEffect(() => {
    setPath(getPathClean())
    animatePosition(props.footerIsExpanded)
    setTimeout(() => {
      if (window && typeof window.pratech !== 'undefined') {
        window.pratech.parly.getScript(
          window.pratech.parly.getUrlBaseJS() + 'jqchat.js',
          initChatPronto
        )
        setEnabledPronto(true)
      }
    }, 2000)
  }, [props.indexDBUser])

  useEffect(() => {
    animatePosition(props.footerIsExpanded)
  }, [props.footerIsExpanded])

  useEffect(() => {
    if (enabledPronto) {
      setFlag(
        <div
          data-testid="servicio-chat"
          id="servicio-chat"
          onClick={() => {
            sendGaPush('Home', 'ClicInferior', 'Pronto')
          }}
          className={`${
            isNotFooter ? 'no-' + getCurrentPathPrefix(path) : ''
          }flotante  `}
        >
          <ContainerModalStyled
            id={'flotante-pronto'}
            className={'flotante-pronto'}
          >
            <Anchor
              href="#/"
              onClick={e => {
                e.preventDefault()
              }}
              onKeyDown={e => {
                e.preventDefault()
              }}
              className={'chat gtmLateralChat'}
              valor="reiniciar"
              target=""
              id={'gtmLateralChat'}
            >
              <ProntoIcon
                alt="Ícono de robot Pronto, al darle clic abre un chat para recibir asesoría virtual"
                title="Ícono de Pronto"
                className="chat-pronto-img"
              />
              <h3>Pronto</h3>
            </Anchor>
          </ContainerModalStyled>
        </div>
      )
    }
  }, [enabledPronto, isNotFooter])

  Events.scrollEvent.register('end', function() {
    animatePosition(props.footerIsExpanded)
  })

  return (
    <div
      style={{ background: props.color }}
      className="container-pronto"
      id="container-pronto"
    >
      {props.indexDBUser !== '' && (
        <Helmet>
          <script
            type="text/javascript"
            integrity={HASH_PRONTO}
            crossorigin="anonymous"
            src={URL_PRONTO}
            defer
          />
        </Helmet>
      )}
      {props.Hidden ? null : flag}
    </div>
  )
}

export default Pronto
