import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { Events } from 'react-scroll'
import styled from 'styled-components'
import { ReactComponent as ProntoIcon } from '../../../../assets/images/pronto-icon.svg'
import {
  HEIGHT_FOOTER_DESKTOP,
  HEIGHT_FOOTER_MOBILE
} from '../../../../const/dictionary/footer-const'
import { sendGaPush } from '../../../../utils/classGtmUtil'
import { HASH_PRONTO, URL_PRONTO } from '../../../../utils/paramApplication'
import {
  getCurrentPathPrefix,
  getPathClean
} from '../../../../utils/redirectUtil'
import Anchor from '../../anchor/anchor'
import '../pronto.scss'

const ContainerModalStyled = styled.section`
  box-shadow: ${props =>
    props.theme.colors ? props.theme.colors.cardBoxShadow : null} !important;
  background: ${props =>
    props.theme.colors ? props.theme.colors.cardBackground : null} !important;
  transition: ${props => props.theme.animation};
  a {
    h3 {
      color: ${props =>
        props.theme.colors ? props.theme.colors.cardTitle : null} !important;
    }
  }
`

const NewPronto = props => {
  const [flag, setFlag] = useState(null)
  const [isNotFooter, setisNotFooter] = useState(false)
  const [path, setPath] = useState('')
  const [enabledPronto, setEnabledPronto] = useState(false)

  const initChatPronto = () => {
    pratech.parly.initChat()
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

  let openPronto = () => {
    setPath(getPathClean())
    animatePosition(props.footerIsExpanded)
    let loadPronto = setInterval(() => {
      if (typeof pratech === 'object') {
        pratech.parly.getScript(
          pratech.parly.getUrlBaseJS() + 'jqchat.min.js',
          initChatPronto
        )
        setEnabledPronto(true)
        if (props.enableText) {
          props.enableText(true)
        }
        clearInterval(loadPronto)
      }
    }, 2000)
  }

  useEffect(() => {
    openPronto()
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
          }flotante gtmfooterPronto`}
        >
          <ContainerModalStyled
            id={'flotante-pronto'}
            className={'flotante-pronto gtmfooterPronto'}
          >
            <Anchor
              href="#/"
              onClick={e => {
                e.preventDefault()
              }}
              onKeyDown={e => {
                e.preventDefault()
              }}
              className={'chat gtmLateralChat gtmfooterPronto'}
              valor="reiniciar"
              target=""
              id={'gtmLateralChat'}
            >
              <ProntoIcon
                alt="Ícono de robot Pronto, al darle clic abre un chat para recibir asesoría virtual"
                title="Ícono de Pronto"
                className="chat-pronto-img gtmfooterPronto"
              />
              <h3 className="gtmfooterPronto">Pronto</h3>
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
      className="container-pronto gtmfooterPronto"
      id="container-pronto"
    >
      {props.indexDBUser !== '' ? (
        <Helmet>
          <script
            type="text/javascript"
            integrity={HASH_PRONTO}
            crossorigin="anonymous"
            src={URL_PRONTO}
            defer
          ></script>
        </Helmet>
      ) : null}
      {props.Hidden ? null : flag}
    </div>
  )
}

export default NewPronto
