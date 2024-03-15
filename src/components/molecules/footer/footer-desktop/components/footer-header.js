import PropTypes from 'prop-types'
import React from 'react'
import { isAndroid, isIOS } from 'react-device-detect'
import { ReactComponent as BookIcon } from '../../../../../assets/images/icons/footer-btn-book.svg'
import { ReactComponent as PhoneDonwloadIcon } from '../../../../../assets/images/icons/footer-btn-phone.svg'
import { ReactComponent as GpsIcon } from '../../../../../assets/images/icons/footer-gps.svg'
import { ReactComponent as PhoneIcon } from '../../../../../assets/images/icons/footer-phone.svg'
import { ReactComponent as HandMoney } from '../../../../../assets/images/icons/hand-money.svg'
import {
  SHOW_DIRECTORIO_COMERCIAL_LINK,
  PATH_URL_INTERNA_DECRETO_1207,
  SHOW_FONDO_VOLUNTARIO_PENSION_LINK
} from '../../../../../const/dictionary/footer-const'
import { sendGaPush } from '../../../../../utils/classGtmUtil'
import ContenidosFooter from '../../../../../utils/contenidosFooter.json'
import openLinkAppFunc from '../../../../../utils/open-link-app'
import { getCurrentHost } from '../../../../../utils/redirectUtil'
import Anchor from '../../../../atoms/anchor/anchor'
import ButtonToggleFooter from './../../components/button-toggle-footer'
import { useStaticQuery, graphql } from 'gatsby'
import './footer-header.scss'

export let Footer = ({
  isOpenFooter = true,
  handleOpenFooter,
  dataUrlFooter
}) => {
  const optionsFooter = ContenidosFooter.allContentfulEnlace.edges.filter(
    item => item.node.categoria === 'Enlaces Canales de servicio'
  )
  const linksApp = ContenidosFooter.allContentfulEnlace.edges.filter(
    item => item.node.categoria === 'App'
  )
  const urlApp = `/canales/${dataUrlFooter.allContentfulCanal.edges?.[2].node.urlSeo}`
  const openLinkApp = () => openLinkAppFunc(linksApp, isAndroid, isIOS, urlApp)

  return (
    <div className="footer-desktop__header">
      <ButtonToggleFooter
        isOpenFooter={isOpenFooter}
        handleOpenFooter={handleOpenFooter}
      />
      {optionsFooter && optionsFooter.length > 2 && (
        <Anchor
          href="/#"
          onClick={e => {
            sendGaPush('Home', 'ClicInferior', 'DescargaLaApp')
            openLinkApp()
            e.preventDefault()
          }}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              sendGaPush('Home', 'ClicInferior', 'DescargaLaApp')
              openLinkApp()
              e.preventDefault()
            }
          }}
          data-testid="openLinkApp"
          className={`footer-header__option gtmfooterApp ${optionsFooter[2].node.classGtm}`}
          id={'option'}
        >
          <PhoneDonwloadIcon
            id={'icon-image'}
            alt={
              'Ícono de un celular, lleva al home de la App dentro de Canales de Servicio. Enseña lo que puedes hacer y dónde descargar la App'
            }
            title={'Ícono de Descarga la App'}
            className={`gtmfooterApp ${optionsFooter[2].node.classGtm}`}
          />
          <span
            id={'link-image'}
            className={`gtmfooterApp ${optionsFooter[2].node.classGtm}`}
          >
            {optionsFooter[2].node.titulo.titulo}
          </span>
        </Anchor>
      )}
      {optionsFooter && optionsFooter.length > 0 && (
        <Anchor
          href={
            getCurrentHost() +
            `/canales/${dataUrlFooter.allContentfulCanal.edges?.[0].node.urlSeo}`
          }
          onClick={() => {
            sendGaPush('Home', 'ClicInferior', 'LineasDeServicio')
          }}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              sendGaPush('Home', 'ClicInferior', 'LineasDeServicio')
            }
          }}
          data-testid="openModal"
          className={`footer-header__option gtmfooterLServicio ${optionsFooter[0].node.classGtm}`}
          id={'option'}
        >
          <PhoneIcon
            id={'icon-image'}
            alt={
              'Ícono de teléfono, al frente tiene las líneas de servicio de las sedes de Medellín y Cali, Bogotá, entre otros.'
            }
            title={'Ícono de Líneas de Servicio'}
            className={`${optionsFooter[0].node.classGtm} gtmfooterLServicio`}
          />
          <span
            id={'link-value'}
            className={`${optionsFooter[0].node.classGtm} gtmfooterLServicio`}
          >
            {optionsFooter[0].node.titulo.titulo}
          </span>
        </Anchor>
      )}
      {optionsFooter && optionsFooter.length > 1 && (
        <Anchor
          onClick={() => {
            sendGaPush('Home', 'ClicInferior', 'OficinasDeServicio')
          }}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              sendGaPush('Home', 'ClicInferior', 'OficinasDeServicio')
            }
          }}
          href={
            getCurrentHost() +
            `/canales/${dataUrlFooter.allContentfulCanal.edges?.[1].node.urlSeo}`
          }
          className={`gtmfooterOservicio footer-header__option ${optionsFooter[1].node.classGtm}`}
        >
          <GpsIcon
            id={'icon-image'}
            alt={'Ícono de Oficinas de Servicio'}
            title={
              'Ícono del símbolo de ubicación, lleva al home de Oficinas de Servicio. Antes abre un pop up informativo de lo que puedes hacer en la web'
            }
            className={`${optionsFooter[1].node.classGtm} gtmfooterOservicio`}
          />
          <span
            id={'link-text'}
            className={`${optionsFooter[1].node.classGtm} gtmfooterOservicio`}
          >
            {optionsFooter[1].node.titulo.titulo}
          </span>
        </Anchor>
      )}

      {SHOW_DIRECTORIO_COMERCIAL_LINK &&
        optionsFooter &&
        optionsFooter.length > 3 && (
          <Anchor
            href="/#"
            className={`footer-header__option ${optionsFooter[3].node.classGtm}`}
            id={'option'}
            data-testid="openLinkApp"
          >
            <BookIcon
              id={'icon-image'}
              alt={optionsFooter[3].node.titulo.titulo}
              className={optionsFooter[3].node.classGtm}
            />
            <span id={'link-image'} className={optionsFooter[3].node.classGtm}>
              {optionsFooter[3].node.titulo.titulo}
            </span>
          </Anchor>
        )}

      {SHOW_FONDO_VOLUNTARIO_PENSION_LINK &&
        optionsFooter &&
        optionsFooter.length > 4 && (
          <Anchor
            href={PATH_URL_INTERNA_DECRETO_1207}
            className={`footer-header__option ${optionsFooter[4].node.classGtm}`}
            id={'option'}
            data-testid="openLinkApp"
          >
            <HandMoney
              id={'icon-image'}
              alt="Ícono de mano derecha con signo pesos , lleva a interna de Fondos Voluntarios de Pensión con documentos, reglamentos y más"
              className={optionsFooter[4].node.classGtm}
              title="Ícono de Fondos Voluntarios de Pensión"
            />
            <span id={'link-image'} className={optionsFooter[4].node.classGtm}>
              {optionsFooter[4].node.titulo.titulo}
            </span>
          </Anchor>
        )}
    </div>
  )
}

Footer.propTypes = {
  isOpenFooter: PropTypes.bool,
  handleOpenFooter: PropTypes.func
}
const FooterHeader = props => {
  const dataUrlFooter = useStaticQuery(graphql`
    query QueryFooter {
      allContentfulCanal(
        filter: {
          contentful_id: {
            nin: [
              "R6FZFkM3O0CRfWZPYeDbN"
              "6NgqzQSfDywLkdsILYXFWB"
              "6sg8keLI1FmaVVKxouylPb"
              "31JYCa3KmNmAmNH2Pj5Zxm"
            ]
          }
        }
      ) {
        edges {
          node {
            contentful_id
            urlSeo
          }
        }
      }
    }
  `)
  return <Footer {...props} dataUrlFooter={dataUrlFooter} />
}

export default FooterHeader
