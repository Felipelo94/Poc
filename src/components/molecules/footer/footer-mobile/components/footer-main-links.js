import React from 'react'
import { isAndroid, isIOS } from 'react-device-detect'
import {
  PATH_URL_INTERNA_DECRETO_1207,
  SHOW_DIRECTORIO_COMERCIAL_LINK,
  SHOW_FONDO_VOLUNTARIO_PENSION_LINK
} from '../../../../../const/dictionary/footer-const'
import { sendGaPush } from '../../../../../utils/classGtmUtil'
import ContenidosFooter from '../../../../../utils/contenidosFooter.json'
import openLinkAppFunc from '../../../../../utils/open-link-app'
import { getCurrentHost } from '../../../../../utils/redirectUtil'
import Anchor from '../../../../atoms/anchor/anchor'
import { useStaticQuery, graphql } from 'gatsby'
import './footer-main-links.scss'

export let FooterLinks = ({ dataUrlFooter }) => {
  const optionsFooter = ContenidosFooter.allContentfulEnlace.edges.filter(
    item => item.node.categoria === 'Enlaces Canales de servicio'
  )
  const linksApp = ContenidosFooter.allContentfulEnlace.edges.filter(
    item => item.node.categoria === 'App'
  )

  const urlApp = `/canales/${dataUrlFooter.allContentfulCanal.edges?.[2].node.urlSeo}`
  const openLinkApp = () => openLinkAppFunc(linksApp, isAndroid, isIOS, urlApp)

  return (
    <div className="footer-content__main-links">
      {optionsFooter && optionsFooter.length > 2 && (
        <Anchor
          href="/#"
          onClick={e => {
            sendGaPush('Home', 'ClicInferior', 'DescargaLaApp')
            openLinkApp()
            e.preventDefault()
          }}
          onKeyDown={e => {
            openLinkApp()
            e.preventDefault()
          }}
          className={`main-link ${optionsFooter[2].node.classGtm}`}
          id="main-link-2"
        >
          <span
            id="main-link-title-2"
            className={optionsFooter[2].node.classGtm}
          >
            {optionsFooter[2].node.titulo.titulo}
          </span>
        </Anchor>
      )}
      {optionsFooter && optionsFooter.length > 0 && (
        <Anchor
          href={
            getCurrentHost() +
            `/canales/${dataUrlFooter.allContentfulCanal.edges?.[1].node.urlSeo}`
          }
          onClick={() => {
            sendGaPush('Home', 'ClicInferior', 'LineasDeServicio')
          }}
          className={`main-link ${optionsFooter[0].node.classGtm}`}
          id="main-link-0"
        >
          <span
            id="main-link-title-0"
            className={optionsFooter[0].node.classGtm}
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
          href={
            getCurrentHost() +
            `/canales/${dataUrlFooter.allContentfulCanal.edges?.[0].node.urlSeo}`
          }
          className={`main-link ${optionsFooter[1].node.classGtm}`}
          id="main-link-1"
        >
          <span
            id="main-link-title-1"
            className={optionsFooter[1].node.classGtm}
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
            className={`main-link ${optionsFooter[3].node.classGtm}`}
            id="main-link-3"
          >
            <span
              id="main-link-title-3"
              className={optionsFooter[3].node.classGtm}
            >
              {optionsFooter[3].node.titulo.titulo}
            </span>
          </Anchor>
        )}

      {SHOW_FONDO_VOLUNTARIO_PENSION_LINK &&
        optionsFooter &&
        optionsFooter.length > 4 && (
          <Anchor
            href={PATH_URL_INTERNA_DECRETO_1207}
            className={`main-link ${optionsFooter[4].node.classGtm}`}
            id="main-link-4"
          >
            <span
              id="main-link-title-4"
              className={optionsFooter[4].node.classGtm}
            >
              {optionsFooter[4].node.titulo.titulo}
            </span>
          </Anchor>
        )}
    </div>
  )
}

FooterLinks.propTypes = {}

const FooterMainLinks = props => {
  const dataUrlFooter = useStaticQuery(graphql`
    query QueryFooterMobile {
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
  return <FooterLinks {...props} dataUrlFooter={dataUrlFooter} />
}

export default FooterMainLinks
