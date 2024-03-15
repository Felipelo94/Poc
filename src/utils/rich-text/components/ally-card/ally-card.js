import React from 'react'
import { getCurrentHost } from '@utils/redirectUtil'
import BiteGraph from '@components/molecules/bite/bite-graph/bite-graph'
import archivo from '@assets/images/external-link.svg'

export const AllyCard = ({ node, buttonTHS, accessibilityInfo }) => {
  const dataCardAlly = {
    title: node.data?.target?.fields?.titulo?.['en-US'] ?? '',
    description: node.data?.target?.fields?.descripcion?.['en-US'] ?? '',
    textCallToAction:
      node.data?.target?.fields?.textoCallToAction?.['en-US'] ?? '',
    linkCallToAction:
      node.data?.target?.fields?.linkCallToAction?.['en-US'] ?? ''
  }

  if (buttonTHS) return null

  return (
    <a
      href={
        dataCardAlly.linkCallToAction.includes('https:')
          ? dataCardAlly.linkCallToAction
          : getCurrentHost() + dataCardAlly.linkCallToAction
      }
      style={{
        textDecoration: 'none',
        cursor: dataCardAlly.linkCallToAction !== '' ? 'pointer' : 'default'
      }}
      target="_blank"
      rel="noreferrer"
      onClick={e => {
        if (!dataCardAlly.linkCallToAction) {
          e.preventDefault()
        }
      }}
      className="container-parrafo__card-allies"
      data-testid="container-parrafo__card-allies"
    >
      <BiteGraph
        title={dataCardAlly.title}
        accessibility={accessibilityInfo}
        image={archivo}
        text={dataCardAlly.description}
        textBotton={dataCardAlly.textCallToAction}
        link={dataCardAlly.linkCallToAction}
      />
    </a>
  )
}
