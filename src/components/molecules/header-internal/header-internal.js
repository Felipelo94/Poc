import React from 'react'
import PropTypes from 'prop-types'
import './header-internal.scss'
import { ReactComponent as RelojIcon } from '../../../assets/images/icons/reloj-header.svg'
import SubTitleSesion from '../../atoms/sub-title-sesion/sub-title-sesion'
import { useCurrentWidth } from 'react-socks'
import RichText from '../../../utils/rich-text/rich-text'

export default function HeaderInternal({
  titulo,
  tiempo,
  subtitle,
  inversiones,
  twoSubtitulo,
  isParrafo2,
  border,
  isCallToAction
}) {
  const widthScreen = useCurrentWidth()
  return (
    <div
      className={
        inversiones
          ? 'container-haderComponent-inversiones'
          : 'container-haderComponent'
      }
      id="container-haderComponent"
    >
      <div
        className={
          inversiones ? 'container-header-inversiones' : 'container-header'
        }
        id="container-header"
      >
        <div
          className={
            inversiones
              ? 'container-header-inversiones-title'
              : 'container-header-title'
          }
          id="container-header-title"
        >
          <h1 id="container-header-title.value">{titulo}</h1>
        </div>
        <div
          className={
            inversiones
              ? 'container-header-inversiones-container'
              : 'container-header-container'
          }
          id="container-header-container"
        >
          {tiempo ? (
            <div
              className="container-header-container-opcion"
              id="container-header-container-opcion-tiempo"
            >
              <RelojIcon
                className="container-header-container-opcion-icon"
                alt="icono reloj"
                id="container-header-container-opcion-icon"
              />
              <span id="container-header-container-opcion-value">{`Tiempo de lectura ${tiempo} min.`}</span>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div id="container-header-container-sub-title-sesion">
        <SubTitleSesion
          width={widthScreen <= 1024 ? 'auto' : null}
          subtitle={subtitle}
          className="interna"
        />
        {!isParrafo2 && widthScreen <= 1024 && !isCallToAction && titulo && (
          <div style={{ borderBottom: border, marginBottom: 32 }} />
        )}
        <div
          id={`container-header-container-parrafo-content-conatiner-${
            isParrafo2 ? '2' : '1'
          }`}
        >
          {twoSubtitulo
            ? twoSubtitulo.map(contenido => {
                return <RichText text={contenido} />
              })
            : null}
        </div>
      </div>
    </div>
  )
}

HeaderInternal.propTypes = {
  titulo: PropTypes.string.isRequired,
  tiempo: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

HeaderInternal.defaultProps = {
  border: '1px solid #E2E7ED'
}
