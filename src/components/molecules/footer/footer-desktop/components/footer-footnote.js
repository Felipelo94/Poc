import React from 'react'
import { ReactComponent as MonitorIcon } from '../../../../../assets/images/icons/monitor.svg'
import { URL_DOWNLOAD_CHROME } from '../../../../../const/dictionary/footer-const'
import ContenidosFooter from '../../../../../utils/contenidosFooter.json'
import Anchor from '../../../../atoms/anchor/anchor'
import './footer-footnote.scss'

const FooterFootnote = props => {
  const footnote = ContenidosFooter.allContentfulEnlace.edges.filter(
    item => item.node.categoria === 'Navegador'
  )

  return (
    <div className="footer-footnote">
      <div className="footer-footnote__content">
        <Anchor
          id="footer-computer-icon"
          className="footnote-content__browser-link"
          href={URL_DOWNLOAD_CHROME}
          target="_blank"
          rel="noreferrer"
        >
          <MonitorIcon
            async
            className="footnote-content__browser-icon"
            alt="Ícono de una pantalla para descargar Google Chrome y tener una mejor visualización al realizar consultas."
            title="Ícono de Mejor navegación"
          />
        </Anchor>
        <p className="footnote-content__text">
          {footnote[0] ? `${footnote[0].node.titulo.titulo} ` : ' '}
          <Anchor
            className="gtmHomeInfVersNavegInfer"
            target="_blank"
            rel="noreferrer"
            href={URL_DOWNLOAD_CHROME}
          >
            clic aquí
          </Anchor>
        </p>
      </div>
    </div>
  )
}

export default FooterFootnote
