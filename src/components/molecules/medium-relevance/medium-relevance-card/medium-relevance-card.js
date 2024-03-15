import React from 'react'
import styled from 'styled-components'
import { biteCaracter } from '../../../../utils/bite-caracter'
import { getCurrentHost } from '../../../../utils/redirectUtil'
import {
  scaleLine,
  scaleText,
  SCALE_SIZE_18PX,
  SCALE_SIZE_15PX,
  SCALE_SIZE_14PX
} from '../../../../utils/scaleText'
import Button from '../../../atoms/button/button'
import Image from '../../../atoms/image/image'
import './medium-relevance-card.scss'
import Anchor from '../../../atoms/anchor/anchor'

const ContainerCardStyled = styled.div`
  background: ${props =>
    props.theme.colors && props.theme.colors.cardBackground} !important;
  transition: ${props => props.theme.animation};

    .relevance-medium-card-container-btn {
      .button-container {
        .button-container__button--secondary {
          background: ${props =>
            props.theme.colors && props.theme.colors.cardButtonHover};
          border: 1px solid
            ${props =>
              props.theme.colors && props.theme.colors.cardButtonHover};
          color: ${props =>
            props.theme.colors &&
            props.theme.colors.cardButtonHoverText} !important;
        }
      }
    }
  }
`

const ContainerCardInfoStyled = styled.div`
  .relevance-medium-card-container-info-title {
    color: ${props => props.theme.colors && props.theme.colors.cardTitle};
  }

  .relevance-medium-card-container-info-subtitle {
    color: ${props => props.theme.colors && props.theme.colors.cardSubtitle};
  }
`

export default function MediumRelevanceCard({
  title,
  img,
  content,
  btn,
  link,
  slug,
  imgalt,
  imgTitle,
  dataTut,
  accessibility
}) {
  const getIdDiv = titleChanged => {
    return titleChanged
      .substr(0, 30)
      .replace(/\s/g, '-')
      .replace(/[^a-zA-Z ]/g, '')
      .toLowerCase()
  }
  return (
    <Anchor
      id={`relevance-medium-card-container-${getIdDiv(
        title === null ? '' : title ? title : ''
      )}`}
      href={link ? link : slug}
      target={'_blank'}
      className={'noneTextDecoration'}
      tabIndex="0"
    >
      <ContainerCardStyled className={`relevance-medium-card-container`}>
        <div className={`relevance-medium-card-container-imagen`}>
          <Image
            dataTut={dataTut}
            imgTitle={imgTitle}
            classNames={`relevance-medium-card-container-imagen-img`}
            imagen={img}
            alt={imgalt}
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover',
              borderRadius: '4px 4px 0 0'
            }}
            classGtm={''}
          />
        </div>
        <ContainerCardInfoStyled
          className={`relevance-medium-card-container-info`}
        >
          <div
            className={`relevance-medium-card-container-info-title`}
            style={{
              fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_18PX, 1.5)
                .fontSize,
              lineHeight: scaleLine(accessibility.lineSize)
            }}
          >
            <span>{biteCaracter(
                content,
                accessibility.fontSize > 2 ? 34 : 46,
                accessibility.fontSize > 2 ? 8 : 10
              )}</span>
          </div>
          <div
            style={{
              fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1)
                .fontSize
            }}
            className={`relevance-medium-card-container-info-subtitle`}
            id="bite-responsibe-container-info-descripcion"
          >
            <span>
              {biteCaracter(
                content,
                accessibility.fontSize > 2 ? 50 : 70,
                accessibility.fontSize > 2 ? 12 : 15
              )}
            </span>
          </div>
        </ContainerCardInfoStyled>
        <div className={`relevance-medium-card-container-btn`}>
          <Button
            style={{
              width: 225,
              height: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_14PX)
                .fontSize,
              fontWeight: 500
            }}
            title={btn}
            className={`primary`}
          />
        </div>
      </ContainerCardStyled>
    </Anchor>
  )
}
