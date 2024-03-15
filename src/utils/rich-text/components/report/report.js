import React from 'react'
import { getCurrentHost } from '@utils/redirectUtil'
import { getIdDiv } from '@utils/redirect-bread-crumb'
import { sendEventGA } from '@utils/classGtmUtil'
import BiteGraph from '@components/molecules/bite/bite-graph/bite-graph'
import archivo from '@assets/images/external-link.svg'

export const Report = ({ node, accessibilityInfo }) => {
  let dataInformes = {
    titulo: node.data?.target?.fields?.titulo?.['en-US'] ?? '',
    texto: node.data?.target?.fields?.textoIntroductorioBite?.['en-US'] ?? '',
    updatedAt: node.data.target.sys.updatedAt,
    url: node.data?.target?.fields?.contenido
      ? node.data.target.fields.contenido?.['en-US']?.fields?.urlSeo?.[
          'en-US'
        ] ?? ''
      : node.data?.target?.fields?.linkCallToActionInformes
      ? node.data.target.fields?.linkCallToActionInformes?.['en-US'] ?? ''
      : 'https://www.proteccion.com/contenidos/',
    callToAction:
      node.data?.target?.fields?.textoCallToActionInformes?.['en-US'] ?? ''
  }

  return (
    <a
      href={
        dataInformes.url.includes('https:')
          ? dataInformes.url
          : getCurrentHost() + getIdDiv(dataInformes.url)
      }
      style={{
        textDecoration: 'none',
        cursor: dataInformes.url !== '' ? 'pointer' : 'default'
      }}
      target="_blank"
      rel="noreferrer"
      onClick={e => {
        if (!dataInformes.url) {
          e.preventDefault()
        }
        sendEventGA(
          node.data?.target?.gtmTSHStepperAllies.event.category,
          node.data?.target?.gtmTSHStepperAllies.event.action,
          node.data?.target?.gtmTSHStepperAllies.event.label
        )
      }}
      className="container-parrafo__card-reports"
      data-testid="container-parrafo__card-reports"
    >
      <BiteGraph
        title={dataInformes.titulo}
        accessibility={accessibilityInfo}
        image={archivo}
        text={dataInformes.texto}
        textBotton={dataInformes.callToAction}
        link={dataInformes.url}
      />
    </a>
  )
}
