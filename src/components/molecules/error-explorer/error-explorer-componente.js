import React from 'react'
import { ReactComponent as ChromeIcon } from '../../../assets/images/icons/chrome-icon.svg'
import { ReactComponent as EdgeIcon } from '../../../assets/images/icons/edge-icon.svg'
import { ReactComponent as FireFoxIcon } from '../../../assets/images/icons/firefox-icon.svg'
import imagePrehome from '../../../assets/images/imagen-prehome-interna-error-IE.png'
import './error-explorer.scss'
import parrafoImage from '../../../assets/images/download-cloud.png'
import Button from '../../atoms/button/button'
import { navigate } from 'gatsby'

export default function ErrorExplorerComponente() {
  return (
    <div className="error-explorer-container" id="error-explorer-container">
      <div
        className="error-explorer-container-info"
        id="error-explorer-container-info"
      >
        <div
          className="error-explorer-container-info-title"
          id="error-explorer-container-info-title"
        >
          <div
            className="error-explorer-container-info-title-header"
            id="error-explorer-container-info-title-header"
          >
            <span>¡Bienvenido a Proteccion.com!</span>
          </div>
          <div
            className="error-explorer-container-info-title-descripcion"
            id="error-explorer-container-info-title-descripcion"
          >
            <span>
              Este navegador no es compatible con nuestro sitio, para tener una
              mejor experiencia de navegación te sugerimos visitar nuestra
              página desde estos navegadores:
            </span>
          </div>
        </div>
        <div
          className="error-explorer-container-title"
          id="error-explorer-container-title"
        >
          <span>Te recomendamos instalar Google Chrome</span>
        </div>
        <div
          className="error-explorer-container-info-recomendado"
          id="error-explorer-container-info-recomendado"
        >
          <div
            id="error-explorer-container-info-other-navegador-icon-3"
            onClick={() => {
              window.location.href =
                'https://www.google.com/intl/es/chrome/?brand=UUXU&gclid=Cj0KCQiAyJOBBhDCARIsAJG2h5fi48W94guahnIlwoKRgE0GEjbLMN5BuFXXEYWSEiFNYTxcl_dBMSwaAomyEALw_wcB&gclsrc=aw.ds'
            }}
          >
            <ChromeIcon
              className={'imgNavegarChrome '}
              id={'imgimgNavegarChrome'}
              alt="Imagen Navegador Chrome"
            />
            <div
              className="error-explorer-container-info-recomendado-chrome"
              id="error-explorer-container-info-recomendado-chrome"
            >
              <div
                className="error-explorer-container-info-recomendado-chrome-title"
                id="error-explorer-container-info-recomendado-chrome-title"
              >
                <span>Descarga Google Chrome</span>
              </div>
              <div
                className="error-explorer-container-info-recomendado-chrome-link"
                id="error-explorer-container-info-recomendado-chrome-link"
              >
                <img
                  className="container-parrafo__img container-parrafo__img--nube"
                  src={parrafoImage}
                  alt="icono del asset"
                />
                <span>Quiero descargarlo</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="error-explorer-container-sub-title"
          id="error-explorer-container-sub-title"
        >
          <span>Prueba también con otros navegadores</span>
        </div>
        <div
          className="error-explorer-container-info-other-navegador"
          id="error-explorer-container-info-other-navegador"
        >
          <div
            className="error-explorer-container-info-other-navegador-icon"
            id="error-explorer-container-info-other-navegador-icon-1"
            onClick={() => {
              window.location.href = 'https://www.microsoft.com/es-es/edge'
            }}
          >
            <div
              className="error-explorer-container-info-other-navegador-icon-title"
              id="error-explorer-container-info-other-navegador-icon-title"
            >
              <EdgeIcon
                className={'imgNavegarEdge '}
                id={'imgimgNavegarEdge'}
                alt="Imagen Navegador Edge"
              />
              <span>Microsoft Edge</span>
            </div>
            <div
              className="error-explorer-container-info-recomendado-chrome-link"
              id="error-explorer-container-info-recomendado-chrome-link"
            >
              <img
                className="container-parrafo-link-img container-parrafo-link-img-nube"
                src={parrafoImage}
                alt="icono del asset"
              />
              <span>Descargar</span>
            </div>
          </div>
        </div>
        <div
          className="error-explorer-container-info-other-navegador"
          id="error-explorer-container-info-other-navegador"
        >
          <div
            className="error-explorer-container-info-other-navegador-icon"
            id="error-explorer-container-info-other-navegador-icon-2"
            onClick={() => {
              window.location.href =
                'https://www.mozilla.org/es-ES/firefox/new/'
            }}
          >
            <div
              id="error-explorer-container-info-other-navegador-icon-title"
              className="error-explorer-container-info-other-navegador-icon-title"
            >
              <FireFoxIcon
                className={'imgNavegarfirexfox '}
                id={'imgimgNavegarfirexfox'}
                alt="Imagen Navegador firexfox"
              />
              <span>Firefox</span>
            </div>
            <div
              id="error-explorer-container-info-recomendado-chrome-link"
              className="error-explorer-container-info-recomendado-chrome-link"
            >
              <img
                src={parrafoImage}
                alt="icono del asset"
                className="container-parrafo-link-img container-parrafo-link-img-nube"
              />
              <span>Descargar</span>
            </div>
          </div>
        </div>
        <div
          style={{ margin: '69px 0px 0px 0px' }}
          id="error-explorer-container-info-other-navegador-icon-4"
          onClick={() => {
            navigate(`/`, {
              state: {
                label:
                  'Home | Protección: Pensiones, Cesantías, Ahorro e Inversión '
              }
            })
          }}
        >
          <Button className="secondary" title={'Continuar de todos modos'} />
        </div>
      </div>
      <div
        className="error-explorer-container-img"
        id="error-explorer-container-img"
      >
        <img
          src={imagePrehome}
          name="imagen del prehome para la interna de ahorro de IE"
          alt="imagen del prehome para la interna de ahorro de IE"
        />
      </div>
    </div>
  )
}
