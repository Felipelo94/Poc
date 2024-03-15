import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as AccessibilityIcon } from '../../../assets/images/menu-accessibility/icon_accessibility_aa.svg'
import { ReactComponent as CloseXIcon } from '../../../assets/images/x-24.svg'
import { sendEventGA } from '../../../utils/classGtmUtil'
import './accessibility-mobile.scss'

const SpanIconAccessibilityStyled = styled.span`
  background-image: ${props =>
    props.isActive
      ? props.theme.colors.menuAccessibility.bgIconAccessibilityActive
      : props.theme.colors.menuAccessibility.bgIconAccessibilityInactive};
  & svg {
    & path {
      fill: ${props =>
        props.isActive
          ? props.theme.colors.menuAccessibility.colorIconAccessibilityActive
          : props.theme.colors.menuAccessibility
              .colorIconAccessibilityInactive};
    }
  }
`

const SpanLabelAccessibilityStyled = styled.span`
  color: ${props =>
    props.theme.colors.menuAccessibility.colorLabelAccessibility};
`

const AccessibilityMobile = ({
  isActiveAccessibility,
  setActiveAccessibilty
}) => {
  return (
    <button
      className="accessibility-button"
      onClick={() => {
        setActiveAccessibilty(prevState => !prevState)
        sendEventGA('Home', 'ClicSuperior', 'Accesibilidad-EstiloFuente')
      }}
    >
      <SpanIconAccessibilityStyled
        className="accessibility-button__icon"
        isActive={isActiveAccessibility}
      >
        {isActiveAccessibility ? (
          <CloseXIcon id="accessibily-close" alt="cerrar barra accesibilidad" />
        ) : (
          <AccessibilityIcon
            id="accesibility-icon"
            alt="Ícono de dos letras A para cambiar el tamaño de la fuente del sitio web, el espacio entre líneas y el contraste"
            title="Ícono de configuración del texto en el sitio web"
          />
        )}
      </SpanIconAccessibilityStyled>
      <SpanLabelAccessibilityStyled
        id="accebility-container-label"
        aria-label="Opcion accesibilidad"
        className="accessibility-button__label"
      >
        Accesibilidad
      </SpanLabelAccessibilityStyled>
    </button>
  )
}

AccessibilityMobile.propTypes = {
  isActiveAccessibility: PropTypes.bool,
  setActiveAccessibilty: PropTypes.func
}

export default AccessibilityMobile
