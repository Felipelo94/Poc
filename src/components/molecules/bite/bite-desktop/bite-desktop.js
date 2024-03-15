import React from 'react'
import Button from '../../../atoms/button/button'
import Image from '../../../atoms/image/image'
import { onClickToInterna } from '../../../../utils/redirectUtil'
import { DAY_TAG_NEW } from '../../../../utils/paramApplication'
import { dayBeetwenDates } from '../../../../utils/dateUtil'
import {
  biteCaracter,
  validateCurrentLine
} from '../../../../utils/bite-caracter'
import {
  scaleText,
  SCALE_SIZE_20PX,
  SCALE_SIZE_15PX,
  SCALE_SIZE_16PX,
  SCALE_SIZE_13PX,
  scaleLine
} from '../../../../utils/scaleText'
import styled from 'styled-components'
import Anchor from '../../../atoms/anchor/anchor'
import './bite-desktop.scss'

const ContainerCardStyled = styled.div`
  background: ${props =>
    props.theme.colors && props.theme.colors.cardBackground} !important;
  transition: ${props => props.theme.animation};
  box-shadow: ${props =>
    props.theme.colors && props.theme.colors.cardBoxShadow} !important;

  .bite-desktop-container-image {
    .image-container {
      .image-container__box {
        box-shadow: ${props =>
          props.theme.colors && props.theme.colors.cardBoxShadow} !important;
      }
    }
  }

  :hover {
    .bite-desktop-container-image {
      .image-container {
        .image-container__box {
          box-shadow: ${props =>
            props.theme.colors &&
            props.theme.colors.cardImageBoxShadowHover} !important;
        }
      }
    }

    .bite-desktop-container-info {
      .bite-desktop-container-info-button {
        .button-container {
          .button-container__button--secondary {
            background: ${props =>
              props.theme.colors &&
              props.theme.colors.cardButtonHover} !important;
            border: 1px solid
              ${props =>
                props.theme.colors &&
                props.theme.colors.cardButtonHover} !important;
            color: ${props =>
              props.theme.colors &&
              props.theme.colors.cardButtonHoverText} !important;
          }

          .button-container__button--secondary-dark {
            background: ${props =>
              props.theme.colors &&
              props.theme.colors.cardButtonHoverInversion} !important;
            border: 1px solid
              ${props =>
                props.theme.colors &&
                props.theme.colors.cardButtonHoverInversion} !important;
            color: ${props =>
              props.theme.colors &&
              props.theme.colors.cardButtonHoverTextInversion} !important;
          }
        }
      }
    }
  }
`

const ContainerCardInfoStyled = styled.div`
  .bite-desktop-container-info-title {
    color: ${props =>
      props.theme.colors && props.theme.colors.cardTitle} !important;
  }

  .bite-desktop-container-info-title-dark {
    color: ${props =>
      props.theme.colors && props.theme.colors.cardTitleInversion} !important;
  }

  .bite-desktop-container-info-descripcion {
    color: ${props =>
      props.theme.colors && props.theme.colors.cardDescription} !important;
  }
`

const BiteDesktop = ({
  title,
  link,
  img,
  content,
  btn,
  slug,
  imgalt,
  imgTitle,
  classGtm,
  gtmCategory,
  gtmAction,
  date,
  line,
  accessibility,
  gtmLabel
}) => {
  const getIdDiv = titleChanged => {
    return titleChanged
      ? titleChanged
          .substr(0, 30)
          .replace(/\s/g, '-')
          .replace(/[^a-zA-Z ]/g, '')
          .toLowerCase()
      : ''
  }

  const daysBetweenUpdate = () => {
    return dayBeetwenDates(new Date(date).getTime(), new Date())
  }

  return (
    <Anchor
      className={`noneTextDecoration`}
      id={`bite-desktop-container-${getIdDiv(
        title === null ? '' : title ? title : ''
      )}`}
      onKeyDown={event => {
        if (event.keyCode === 13) {
          onClickToInterna(
            slug,
            gtmCategory,
            gtmAction,
            gtmLabel ? gtmLabel : title
          )
        }
      }}
      href={link ? link : slug}
      target={'_blank'}
      onClick={() => {
        onClickToInterna(
          slug,
          gtmCategory,
          gtmAction,
          gtmLabel ? gtmLabel : title
        )
      }}
      style={{
        height:
          accessibility.lineSize > 6 || accessibility.fontSize > 2 ? 300 : 260,
        marginTop:
          accessibility.lineSize > 6 || accessibility.fontSize > 2 ? 67 : 17
      }}
      tabIndex="0"
    >
      <ContainerCardStyled
        style={{
          height: 'inherit',
          maxHeight: 295
        }}
        className={`bite-desktop-container ${
          classGtm ? classGtm : ''
        } noneTextDecoration`}
      >
        {/* {daysBetweenUpdate() < DAY_TAG_NEW && (
          <div
            style={{
              fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_13PX, 1)
                .fontSize
            }}
            className="bite-desktop-container-label-new"
          >
            {' '}
            Nuevo{' '}
          </div>
        )} */}
        <div
          className={`bite-desktop-container-image ${classGtm ? classGtm : ''}`}
          id="bite-desktop-container-image"
        >
          <Image
            classNames={`"bite-desktop-container-image-value" ${
              classGtm ? classGtm : ''
            }`}
            imgTitle={imgTitle}
            imagen={img}
            alt={imgalt}
            width="150px"
            height="150px"
            classGtm={classGtm ? classGtm : ''}
            style={{ borderRadius: '4px 4px 24px 4px' }}
            id="bite-desktop-container-image-value"
          />
        </div>

        <ContainerCardInfoStyled
          style={{
            bottom:
              accessibility.lineSize > 8 || accessibility.fontSize > 2
                ? 134
                : null
          }}
          className={`bite-desktop-container-info ${classGtm ? classGtm : ''}`}
          id="bite-desktop-container-info"
        >
          <div
            style={{
              fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_20PX, 1)
                .fontSize,
              lineHeight: scaleLine(accessibility.lineSize),
              height:
                accessibility.lineSize > 6 || accessibility.fontSize > 2
                  ? 80
                  : null
            }}
            className={`bite-desktop-container-info-title${
              validateCurrentLine(!line) ? '-dark' : ''
            } ${classGtm ? classGtm : ''}`}
            id="bite-desktop-container-info-title"
          >
            <span>
              {biteCaracter(
                title,
                accessibility.lineSize > 6 || accessibility.fontSize > 2
                  ? 55
                  : 65,
                accessibility.lineSize > 6 || accessibility.fontSize > 2
                  ? 8
                  : 10
              )}
            </span>
          </div>
          {accessibility.lineSize > 6 || (accessibility.fontSize > 2 && <br />)}
          <div
            style={{
              fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1)
                .fontSize,
              lineHeight: scaleLine(accessibility.lineSize),
              height:
                accessibility.lineSize > 8 || accessibility.fontSize > 2
                  ? 70
                  : null
            }}
            className={`bite-desktop-container-info-descripcion ${
              classGtm ? classGtm : ''
            }`}
            id="bite-responsibe-container-info-descripcion"
          >
            <span>
              {biteCaracter(
                content,
                accessibility.lineSize > 6 ? 80 : 90,
                accessibility.lineSize > 6 ? 12 : 15
              )}
            </span>
          </div>
          {accessibility.lineSize > 6 || (accessibility.fontSize > 2 && <br />)}
          <div className="bite-desktop-container-info-button">
            <Button
              style={{
                width: 200,
                fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_16PX)
                  .fontSize
              }}
              accessibility={accessibility}
              classGtm={classGtm}
              title={btn}
              className={`secondary${
                validateCurrentLine(!line) ? '-dark' : ''
              }`}
            />
          </div>
        </ContainerCardInfoStyled>
      </ContainerCardStyled>
    </Anchor>
  )
}

export default BiteDesktop
