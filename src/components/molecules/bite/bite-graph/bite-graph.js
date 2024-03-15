import React from 'react'
import styled from 'styled-components'
import { getIdDiv } from '../../../../utils/redirect-bread-crumb'
import { getCurrentHost } from '../../../../utils/redirectUtil'
import {
  scaleLine,
  scaleText,
  SCALE_SIZE_15PX,
  SCALE_SIZE_22PX
} from '../../../../utils/scaleText'
import Anchor from '../../../atoms/anchor/anchor'
import './bite-graph.scss'

export const ElementGrph = ({ image, textBotton }) => {
  return (
    <React.Fragment>
      <img
        src={image}
        alt="Ícono de un cuadrado con una flecha saliendo de él, al darle clic, se puede descargar un PDF y conocer más"
        className="bite-graph-container-botton-a-image"
        id="bite-graph-container-botton-a-image"
        title="Ícono de descarga "
      />
      <div
        className="bite-graph-container-botton-a-text"
        id="bite-graph-container-botton-a-text"
      >
        <span>{textBotton}</span>
      </div>
    </React.Fragment>
  )
}

const ContainerCardStyled = styled.div`
  background: ${props =>
    props.theme.colors && props.theme.colors.cardBackground} !important;
  transition: ${props => props.theme.animation};
  box-shadow: ${props =>
    props.theme.colors && props.theme.colors.cardBoxShadow} !important;
  .bite-graph-container-title {
    color: ${props =>
      props.theme.colors && props.theme.colors.cardTitleInforme};
  }
  .bite-graph-container-text {
    color: ${props => props.theme.colors && props.theme.colors.cardSubtitle};
  }
  .bite-graph-container-botton-a-image {
    filter: ${props =>
      props.theme.colors && props.theme.colors.header.menu.filterSubtitle};
  }
  .bite-graph-container-botton-a-text {
    color: ${props =>
      props.theme.colors && props.theme.colors.cardButtonInforme};
  }
`

const BiteGraph = ({ title, text, image, textBotton, link, accessibility }) => {
  return (
    <ContainerCardStyled
      style={{
        height: accessibility
          ? accessibility.fontSize > 2 && accessibility.lineSize <= 5
            ? 250
            : accessibility.lineSize > 5
            ? 284
            : null
          : null
      }}
      className="bite-graph-container"
      id="bite-graph-container"
    >
      <div
        style={{
          fontSize: accessibility
            ? scaleText(accessibility.fontSize, SCALE_SIZE_22PX, 1.5).fontSize
            : null
        }}
        className="bite-graph-container-title"
        id="bite-graph-container-title"
      >
        <span>{title}</span>
      </div>
      <div
        style={{
          fontSize: accessibility
            ? scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1.5).fontSize
            : null,
          lineHeight: accessibility ? scaleLine(accessibility.lineSize) : null,
          height: accessibility
            ? accessibility.lineSize > 5
              ? 152
              : null
            : null
        }}
        className="bite-graph-container-text"
        id="bite-graph-container-text"
      >
        <span>{text}</span>
      </div>
      {link && textBotton && (
        <div
          className="bite-graph-container-botton"
          id="bite-graph-container-botton"
        >
          <Anchor
            className="bite-graph-container-botton-a"
            id="bite-graph-container-botton-a"
            href={
              link?.includes('https:')
                ? link
                : getCurrentHost() + '/' + getIdDiv(link)
            }
            target="_blank"
            rel="noreferrer"
          >
            <ElementGrph image={image} textBotton={textBotton} />
          </Anchor>
        </div>
      )}
    </ContainerCardStyled>
  )
}

export default BiteGraph
