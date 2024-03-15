import React from 'react'
import parrafoImage from '../../../../assets/images/download-cloud.png'
import { sendEventGA } from '../../../classGtmUtil'
import Anchor from '../../../../components/atoms/anchor/anchor'

export const Hyperlink = ({ node, children, addClassName, titleContent }) => {
  const isEmailHyperLink = node.data.uri.includes('@')
  return (
    <>
      <a
        className={`${isEmailHyperLink &&
          'email-hyperlink '}noneTextDecoration container-parrafo__a--no-asset gtmContenidosCTAOtro`}
        id="container-parrafo-link-a-no-asset"
        onClick={() => {
          if (node.data && node.data.inlinesHyperlink) {
            sendEventGA(
              node.data.inlinesHyperlink.event.category,
              node.data.inlinesHyperlink.event.action,
              node.data.inlinesHyperlink.event.label
            )
          } else {
            addClassName(titleContent, node.data.uri)
          }
        }}
        rel="noreferrer"
        target="_blank"
        href={`${isEmailHyperLink ? 'mailto:' : ''}${node.data.uri}`}
        style={{ color: '#0033A0' }}
      >
        {children}
      </a>
      <span
        className="hidden-lable gtmContenidosCTAOtro"
        id="type-link-a-no-asset"
      >
        {node.nodeType}
      </span>
    </>
  )
}

export const TechnicalSheetHyperlink = ({
  node,
  children,
  addClassName,
  titleContent
}) => (
  <div className="container-parrafo__link gtmContenidosCTAOtro">
    <img
      className="container-parrafo__img container-parrafo__img--nube gtmContenidosCTAOtro"
      src={parrafoImage}
      alt="icono del asset"
    />
    <a
      className="container-parrafo__a container-parrafo__a--asset gtmContenidosCTAOtro"
      id="container-parrafo-link-a container-parrafo-link-a-asset"
      onClick={e => {
        addClassName(e?.target?.innerText, titleContent, true)
      }}
      target="_blank"
      rel="noreferrer"
      href={node.data.uri}
    >
      {children}
    </a>
    <span className="hidden-lable gtmContenidosCTAOtro" id="type-link-a-asset">
      {node.nodeType}
    </span>
  </div>
)

export const AssetHyperlink = ({
  node,
  children,
  addClassName,
  titleContent
}) => (
  <div className="container-parrafo__link gtmContenidosCTAOtro">
    <img
      className="container-parrafo__img container-parrafo__img--nube gtmContenidosCTAOtro"
      src={parrafoImage}
      alt="Ícono de nube con flecha hacia abajo, descarga documentos o abre contenidos de interés"
      title="Ícono de enlaces de interés"
    />
    <Anchor
      className="container-parrafo__a container-parrafo__a--asset gtmContenidosCTAOtro"
      id="container-parrafo-link-a container-parrafo-link-a-asset"
      onClick={() => {
        addClassName(
          titleContent,
          node.data.target.fields
            ? node.data.target.fields.file['en-US'].url
            : null
        )
      }}
      target="_blank"
      rel="noreferrer"
      href={
        node.data.target.fields
          ? node.data.target.fields.file['en-US'].url
          : null
      }
    >
      {children}
    </Anchor>
    <span className="hidden-lable gtmContenidosCTAOtro" id="type-link-a-asset">
      {node.nodeType}
    </span>
  </div>
)
