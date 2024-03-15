import React from 'react'
import { useCurrentWidth } from 'react-socks'
import styled from 'styled-components'
import { ReactComponent as CloseModalIcon } from '../../../assets/images/close-x.svg'
import { ReactComponent as IconAccesibility } from '../../../assets/images/icons/aa-plus.svg'
import { sendEventGA } from '../../../utils/classGtmUtil'
import './accessibility.scss'

const SvgStyle = styled.button`
  .accebility-container-icon {
    filter: ${props =>
      props.theme.colors ? props.theme.colors.filterImgInactive : null};
  }
`

export default function Accessibility({
  isActiveAccesibility,
  setActiveAccesibilty,
  lineaActual
}) {
  const width = useCurrentWidth()
  return (
    <SvgStyle
      id={'accessibility-container'}
      role="presentation"
      onClick={() => {
        setActiveAccesibilty(!isActiveAccesibility)
        sendEventGA('Home', 'ClicSuperior', 'Accesibilidad-EstiloFuente')
      }}
      onKeyDown={event => {
        if (event.keyCode === 13) {
          sendEventGA('Home', 'ClicSuperior', 'Accesibilidad-EstiloFuente')
          if (isActiveAccesibility) {
            const element = document.getElementById(
              'container-accessibility-menu-option-action'
            )
            if (element) {
              element.focus()
            }
          }
        }
      }}
      className={
        'accebility-container' + (isActiveAccesibility ? '-active' : '')
      }
      tabIndex="0"
    >
      {!isActiveAccesibility ? (
        <IconAccesibility
          className={'accebility-container-icon'}
          id="accesibility-icon"
          alt="Ícono de dos letras A para cambiar el tamaño de la fuente del sitio web, el espacio entre líneas y el contraste"
          title="Ícono de configuración del texto en el sitio web"
        />
      ) : (
        <CloseModalIcon
          id="accessibily-close"
          className={
            width > 1025
              ? lineaActual === 'Inversión'
                ? 'dark-mode-img'
                : 'accebility-container-icon-active'
              : 'accebility-container-icon-active'
          }
          alt={'cerrar barra accesibilidad'}
        />
      )}
    </SvgStyle>
  )
}
