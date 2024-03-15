import React from 'react'
import { PropTypes } from 'prop-types'
import { disableBody } from '../../../utils/body-scroll-lock'
import { ReactComponent as ShareIcon } from '../../../assets/images/icons/icon-share-inactive-share-redes-sociales.svg'
import {
  removeAccents,
  sendGaPush,
  sendEventGA,
  getSubCategoryNameWhenIsPensionAndPerson
} from '../../../utils/classGtmUtil'
import useGetUserInfoIndexDBState from './../../../hooks/useGetUserInfoIndexDBState'
import { useCurrentWidth } from 'react-socks'
import './button-share.scss'

const ButtonShare = props => {
  const { setIsShare, isShare, eventsGA, title } = props

  const shareIconClasses = isShare
    ? 'container-internal-content-componente-share-active'
    : 'container-internal-content-componente-share-inactive'

  const screenWidth = useCurrentWidth()
  const userInfo = useGetUserInfoIndexDBState()

  const showShareOptionsAndSendAnalytics = () => {
    showShareOptionsAndDisableBody()
    sendGoogleAnalitycsEvents()
  }

  const showShareOptionsAndDisableBody = () => {
    setIsShare(true)
    if (screenWidth <= 1024) {
      disableBody()
    }
  }

  const sendGoogleAnalitycsEvents = () => {
    if (!!eventsGA?.category ?? false) {
      sendEventGA(eventsGA.category, eventsGA.action, eventsGA.label)
    }

    if (!eventsGA) {
      sendGaPush(
        removeAccents(userInfo.category),
        `Clic${
          userInfo.type === 1 ? 'Persona' : 'Empresa'
        }${getSubCategoryNameWhenIsPensionAndPerson(
          userInfo.type,
          removeAccents(userInfo.category),
          userInfo.subcategory
        )}-ContenidosComparteEsteContenido`,
        title
      )
    }
  }

  return (
    <button
      className="container-internal-content-componente-share"
      id={'container-internal-content-componente-share'}
      onClick={showShareOptionsAndSendAnalytics}
    >
      <span
        id={'container-internal-content-componente-share-compartir'}
        style={{ marginRight: 24 }}
      >
        Comparte este contenido
      </span>
      <ShareIcon
        async
        className={shareIconClasses}
        alt="Ícono de dos líneas unidas por 3 puntos, índica que puedes compartir un contenido en redes sociales, copiar el enlace o vía email"
        id="inactivo-image"
        title="Ícono de Comparte este contenido"
      />
    </button>
  )
}

ButtonShare.defaultProps = {
  eventsGA: {}
}

ButtonShare.propTypes = {
  eventsGA: PropTypes.shape({
    category: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })
}

export default ButtonShare
