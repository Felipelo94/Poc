import React from 'react'
import { sendEventGA } from '../../../classGtmUtil'
import BiteGraph from '../../../../components/molecules/bite/bite-graph/bite-graph'
import descargar from '../../../../assets/images/download-cloud.svg'

export const LinkOfInterest = ({ node, accessibilityInfo }) => {
  const hrefCard = node.data?.target?.fields?.LinkCallToAction?.['en-US'] ?? ''

  return (
    <a
      href={hrefCard}
      style={{
        textDecoration: 'none',
        cursor: hrefCard !== '' ? 'pointer' : 'default'
      }}
      target="_blank"
      rel="noreferrer"
      onClick={e => {
        if (!hrefCard) {
          e.preventDefault()
        }
        sendEventGA(
          node.data?.target?.gtmTSHStepperAllies.event.category,
          node.data?.target?.gtmTSHStepperAllies.event.action,
          node.data?.target?.gtmTSHStepperAllies.event.label
        )
      }}
      className="container-parrafo__card-links-interest"
      data-testid="container-parrafo__card-links-interest"
      tabIndex="0"
    >
      <BiteGraph
        accessibility={accessibilityInfo}
        title={node.data?.target?.fields?.titulo?.['en-US'] ?? ''}
        text={
          node.data?.target?.fields?.descripcion?.['en-US']?.content?.[0]
            ?.content?.[0]?.value ?? ''
        }
        image={descargar}
        link={hrefCard}
        textBotton={
          node.data?.target?.fields?.TextoCallToAction?.['en-US'] ?? ''
        }
      />
    </a>
  )
}
