import { enableBody } from '../../../utils/body-scroll-lock'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ReactComponent as CloseIcon } from '../../../assets/images/icons/icon-close-share-redes-sociales.svg'
import { ReactComponent as CopyIcon } from '../../../assets/images/icons/icon-copy-share-redes-sociales.svg'
import { ReactComponent as EmailIcon } from '../../../assets/images/icons/icon-email-share-redes-sociales.svg'
import { ReactComponent as FacebookIcon } from '../../../assets/images/icons/icon-facebook-share-redes-sociales.svg'
import { ReactComponent as LinkedinIcon } from '../../../assets/images/icons/icon-linkedin-share-redes-sociales.svg'
import { ReactComponent as TwitterIcon } from '../../../assets/images/icons/icon-twitter-share-redes-sociales.svg'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  getTypeName,
  removeAccents,
  sendEventGA,
  sendGaPush
} from '../../../utils/classGtmUtil'
import { getSizeScreen } from '../../../utils/handleResize'
import useGetUserInfoIndexDBState from './../../../hooks/useGetUserInfoIndexDBState'
import './component-share.scss'

const ComponentShare = ({
  url,
  isActive,
  setIsShare,
  title,
  showEmail = true,
  eventsGA
}) => {
  const [isClickOnShare, setIsClickOnShare] = useState(false)
  const [QA, setQA] = useState(null)

  const userInfo = useGetUserInfoIndexDBState()

  const sendEventGAButton = buttonName => {
    if (!!eventsGA?.[buttonName] ?? false) {
      sendEventGA(
        eventsGA[buttonName].category,
        eventsGA[buttonName].action,
        eventsGA[buttonName].label
      )
    }
  }

  const copyText =
    '¡Está información que encontré en Protección me gustó! Pienso que te podría servir para que sigas construyendo tu futuro. Ingresa ahora.'

  const widthScreen = getSizeScreen() <= 1024

  const showAlert = () => {
    if (isClickOnShare) {
      toast.dark('Copiado')
      setIsClickOnShare(false)
    }
  }

  useEffect(showAlert, [isClickOnShare])

  const closeModalAndSendAnalytics = () => {
    sendEventGAButton('close')
    setIsShare(false)
    if (widthScreen) {
      enableBody()
    }
    if (!eventsGA) {
      sendGaPush(
        removeAccents(userInfo.category),
        `Clic${getTypeName(
          userInfo.type
        )}${getSubCategoryNameWhenIsPensionAndPerson(
          userInfo.type,
          removeAccents(userInfo.category),
          userInfo.subcategory
        )}-ContenidosComparteEsteContenido-Cerrar`,
        title
      )
    }
  }

  const copyUrlToShareAndSendAnalytics = () => {
    setQA(url)
    setIsClickOnShare(true)
    if (!eventsGA) {
      sendGaPush(
        removeAccents(userInfo.category),
        `Clic${getTypeName(
          userInfo.type
        )}${getSubCategoryNameWhenIsPensionAndPerson(
          userInfo.type,
          removeAccents(userInfo.category),
          userInfo.subcategory
        )}-ContenidosComparteEsteContenido-CopiarEnlace`,
        title
      )
    }
  }

  const sendAnalyticsEventsByButtonName = (buttonName, eventClassSuffix) => {
    sendEventGAButton(buttonName)
    if (!eventsGA) {
      sendGaPush(
        removeAccents(userInfo.category),
        `Clic${getTypeName(
          userInfo.type
        )}${getSubCategoryNameWhenIsPensionAndPerson(
          userInfo.type,
          removeAccents(userInfo.category),
          userInfo.subcategory
        )}-ContenidosComparteEsteContenido-${eventClassSuffix}`,
        title
      )
    }
  }

  return (
    <>
      <div
        className={
          isActive
            ? 'component-share-container component-share-container-animation-active'
            : 'component-share-container component-share-container-animation-inactive'
        }
        id="component-share-container"
      >
        <section
          className="component-share-container-sesion"
          id="component-share-container-sesion"
        >
          <div
            className="component-share-container-sesion-text"
            id="component-share-container-sesion-text"
          >
            <span>Compartir</span>
          </div>
          <button
            className="component-share-container-sesion-close"
            id="component-share-container-sesion-close"
            style={{ cursor: 'pointer' }}
            onClick={closeModalAndSendAnalytics}
          >
            <CloseIcon async alt="icono de cerrar de modal" id="share-image" />
          </button>
        </section>
        <div
          style={
            widthScreen
              ? { display: 'flex', justifyContent: 'space-between' }
              : {}
          }
        >
          <CopyToClipboard
            text={url}
            onCopy={() => {
              sendEventGAButton('copyLink')
            }}
            id="compartir-copy"
          >
            <button
              className="component-share-container-copy"
              id="component-share-container-copy-0"
              onClick={copyUrlToShareAndSendAnalytics}
            >
              <div
                className="component-share-container-copy-icon"
                id="component-share-container-copy-icon"
              >
                <CopyIcon
                  async
                  alt="Ícono de dos cuadrados"
                  title="Ícono de copiar enlace"
                  id="copy-image"
                />
              </div>
              <div
                className="component-share-container-copy-text"
                id="component-share-container-copy-text-copy"
              >
                <span>Copiar enlace</span>
                {QA && (
                  <span
                    className="hidden-lable"
                    id="component-share-container-copy-text-copy-QA"
                  >
                    {QA}
                  </span>
                )}
              </div>
            </button>
          </CopyToClipboard>
          {showEmail && (
            <div
              id="button-email"
              onClick={() =>
                sendAnalyticsEventsByButtonName('email', 'ViaEmail')
              }
            >
              <EmailShareButton
                subject="¡Mira lo que he encontrado en Protección!"
                body={copyText}
                separator=" "
                url={url}
                id="compartir-email"
              >
                <section
                  className="component-share-container-copy"
                  id="component-share-container-copy"
                >
                  <div
                    id="component-share-container-copy-icon"
                    className="component-share-container-copy-icon"
                  >
                    <EmailIcon
                      async
                      alt="Ícono de un sobre"
                      id="email-image"
                      title="Ícono de enviar por mail"
                    />
                  </div>
                  <div
                    id="component-share-container-copy-text-email"
                    className="component-share-container-copy-text"
                  >
                    <span>Vía email</span>
                  </div>
                </section>
              </EmailShareButton>
            </div>
          )}
        </div>
        <div
          style={{
            background: '#E2E7ED',
            height: '1px',
            margin: '0px 12px'
          }}
        />
        <section
          className="component-share-container-red-social"
          id="component-share-container-red-social"
        >
          <FacebookShareButton
            url={url}
            onClick={() => {
              sendAnalyticsEventsByButtonName('facebook', 'Facebook')
            }}
            quote={copyText}
            id="compartir-facebook"
          >
            <FacebookIcon
              async
              alt="Ícono de una F para para ingresar al perfil de Protección en Facebook"
              title="Ícono de Facebook"
              id="facebook-image"
            />
          </FacebookShareButton>
          <TwitterShareButton
            url={url}
            onClick={() => {
              sendAnalyticsEventsByButtonName('twitter', 'Twitter')
            }}
            id="compartir-twitter"
            title={copyText}
          >
            <TwitterIcon
              async
              alt="Ícono de un pájaro para para ingresar al perfil de Protección en Twitter"
              title="Ícono de Twitter"
              id="twitter-image"
            />
          </TwitterShareButton>
          <LinkedinShareButton
            title={url}
            onClick={() => {
              sendAnalyticsEventsByButtonName('linkedin', 'Linkedin')
            }}
            summary={copyText}
            url={url}
            id="compartir-link"
          >
            <LinkedinIcon
              async
              alt="Ícono de las letras IN para para ingresar al perfil de Protección en Linkedin"
              title="Ícono de Linkedin"
              id="Linked-image"
            />
          </LinkedinShareButton>
        </section>
      </div>
    </>
  )
}

ComponentShare.defaultProps = {
  eventsGA: {}
}

ComponentShare.propTypes = {
  eventsGA: PropTypes.shape({
    close: PropTypes.shape({
      category: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }),
    email: PropTypes.shape({
      category: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }),
    copyLink: PropTypes.shape({
      category: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }),
    facebook: PropTypes.shape({
      category: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }),
    twitter: PropTypes.shape({
      category: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }),
    linkedin: PropTypes.shape({
      category: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  })
}

export default ComponentShare
