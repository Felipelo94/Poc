import React from 'react'
import styled from 'styled-components'
import {
  biteCaracter,
  validateCurrentLine
} from '../../../../utils/bite-caracter'
import {
  getCurrentHost,
  onClickToInterna
} from '../../../../utils/redirectUtil'
import {
  scaleLine,
  scaleText,
  SCALE_SIZE_13PX,
  SCALE_SIZE_15PX,
  SCALE_SIZE_16PX,
  SCALE_SIZE_22PX
} from '../../../../utils/scaleText'
import Anchor from '../../../atoms/anchor/anchor'
import Button from '../../../atoms/button/button'
import Image from '../../../atoms/image/image'
import './bite-resposive.scss'
import { dayBeetwenDates } from '../../../../utils/dateUtil'
import { DAY_TAG_NEW } from '../../../../utils/paramApplication'

const ContainerCardStyled = styled.div`
  background: ${props =>
    props.theme.colors && props.theme.colors.cardBackground} !important;
  transition: ${props => props.theme.animation};
  box-shadow: ${props =>
    props.theme.colors && props.theme.colors.cardBoxShadow} !important;
  .bite-resposive-container-small-imagen {
    .image-container {
      .image-container__box {
        .bite-resposive-container-small-imagen-img {
          background: ${props =>
            props.theme.colors && props.theme.colors.cardBackground};
          box-shadow: ${props =>
            props.theme.colors && props.theme.colors.cardBoxShadow};
          transition: ${props => props.theme.animation};
        }
      }
    }
  }

  .bite-resposive-container-imagen {
    .image-container {
      .image-container__box {
        .bite-resposive-container-imagen-img {
          background: ${props =>
            props.theme.colors && props.theme.colors.cardBackground};
          box-shadow: ${props =>
            props.theme.colors && props.theme.colors.cardBoxShadow};
          transition: ${props => props.theme.animation};
        }
      }
    }
  }

  :hover {
    .bite-resposive-container-small-imagen {
      .image-container {
        .image-container__box {
          box-shadow: ${props =>
            props.theme.colors && props.theme.colors.cardImageBoxShadowHover};
        }
      }
    }

    .bite-resposive-container-imagen {
      .image-container {
        .image-container__box {
          box-shadow: ${props =>
            props.theme.colors && props.theme.colors.cardImageBoxShadowHover};
        }
      }
    }

    .bite-resposive-container-small-btn {
      .button-container {
        .button-container__button--secondary {
          background: ${props =>
            props.theme.colors && props.theme.colors.cardButtonHover};
          border: 1px solid
            ${props => props.theme.colors && props.theme.colors.cardButtonHover};
          color: ${props =>
            props.theme.colors &&
            props.theme.colors.cardButtonHoverText} !important;
        }

        .button-container__button--secondary-dark {
          background: ${props =>
            props.theme.colors && props.theme.colors.cardButtonHoverInversion};
          border: 1px solid
            ${props =>
              props.theme.colors &&
              props.theme.colors.cardButtonHoverInversion};
          color: ${props =>
            props.theme.colors &&
            props.theme.colors.cardButtonHoverTextInversion} !important;
        }
      }
    }

    .bite-resposive-container-btn {
      .button-container {
        .button-container__button--secondary {
          background: ${props =>
            props.theme.colors && props.theme.colors.cardButtonHover};
          border: 1px solid
            ${props => props.theme.colors && props.theme.colors.cardButtonHover};
          color: ${props =>
            props.theme.colors &&
            props.theme.colors.cardButtonHoverText} !important;
        }
      }
    }
  }
`

const ContainerCardInfoStyled = styled.div`
  .bite-resposive-container-small-info-title {
    color: ${props => props.theme.colors && props.theme.colors.cardTitle};
  }
  .bite-resposive-container-info-title {
    color: ${props => props.theme.colors && props.theme.colors.cardTitle};
  }
  .bite-resposive-container-small-info-title-dark {
    color: ${props =>
      props.theme.colors && props.theme.colors.cardTitleInversion};
  }

  .bite-resposive-container-info-title-dark {
    color: ${props =>
      props.theme.colors && props.theme.colors.cardTitleInversion};
  }

  .bite-resposive-container-small-info-subtitle {
    color: ${props => props.theme.colors && props.theme.colors.cardSubtitle};
  }

  .bite-resposive-container-info-subtitle {
    color: ${props => props.theme.colors && props.theme.colors.cardSubtitle};
  }
`

const BiteResposive = ({
  title,
  img,
  content,
  btn,
  slug,
  link,
  imgalt,
  imgTitle,
  small,
  imageSmall,
  classGtm,
  date,
  gtmCategory,
  gtmAction,
  line,
  callToAction,
  dataTut,
  classBlock,
  gtmLabel,
  accessibility
}) => {
  const getIdDiv = titleChanged => {
    return titleChanged
      .substr(0, 30)
      .replace(/\s/g, '-')
      .replace(/[^a-zA-Z ]/g, '')
      .toLowerCase()
  }

  const daysBetweenUpdate = () => {
    return dayBeetwenDates(new Date(date).getTime(), new Date())
  }

  return (
    <Anchor
      id={`bite-resposive-container-${getIdDiv(
        title === null ? '' : title ? title : ''
      )}`}
      href={link ? link : slug}
      target={'_blank'}
      className={'noneTextDecoration'}
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
      onClick={() => {
        onClickToInterna(
          slug,
          gtmCategory,
          gtmAction,
          gtmLabel ? gtmLabel : title
        )
        if (callToAction) {
          callToAction(title)
        }
      }}
      tabIndex="0"
    >
      <ContainerCardStyled
        className={
          small
            ? `bite-resposive-container-small${
                classBlock === '' ? '' : '-block'
              } ${classGtm ? classGtm : ''} ${classBlock}`
            : `bite-resposive-container ${
                classGtm ? classGtm : ''
              }  ${classBlock}`
        }
      >
        {/* {daysBetweenUpdate() < DAY_TAG_NEW && (
          <div
            style={{
              fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_13PX, 1)
                .fontSize
            }}
            className="bite-resposive-container-label-new"
          >
            Nuevo
          </div>
        )} */}
        <div
          className={
            imageSmall
              ? `bite-resposive-container-small${
                  classBlock === '' ? '' : '-block'
                }-imagen ${classGtm ? classGtm : ''}`
              : `bite-resposive-container-imagen ${classGtm ? classGtm : ''}`
          }
        >
          <Image
            dataTut={dataTut}
            imgTitle={imgTitle}
            classNames={
              imageSmall
                ? `bite-resposive-container-small${
                    classBlock === '' ? '' : '-block'
                  }-imagen-img ${classGtm ? classGtm : ''}`
                : `bite-resposive-container-imagen-img ${
                    classGtm ? classGtm : ''
                  }	`
            }
            imagen={img}
            alt={imgalt}
            width="150px"
            height="150px"
            classGtm={classGtm ? classGtm : ''}
          />
        </div>
        <ContainerCardInfoStyled
          className={
            small
              ? `bite-resposive-container-small${
                  classBlock === '' ? '' : '-block'
                }-info ${classGtm ? classGtm : ''}`
              : `bite-resposive-container-info ${classGtm ? classGtm : ''}`
          }
        >
          <div
            className={
              small
                ? `bite-resposive-container-small${
                    classBlock === '' ? '' : '-block'
                  }-info-title${validateCurrentLine(!line) ? '-dark' : ''} ${
                    classGtm ? classGtm : ''
                  }`
                : `bite-resposive-container-info-title${
                    validateCurrentLine(!line) ? '-dark' : ''
                  } ${classGtm ? classGtm : ''}`
            }
            style={{
              margin: '0px 16px',
              fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_22PX, 1.5)
                .fontSize,
              lineHeight: scaleLine(accessibility.lineSize)
            }}
          >
            <span className={classGtm}>{biteCaracter(title, 46, 10)}</span>
          </div>
          <div
            style={{
              fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1)
                .fontSize
            }}
            className={
              small
                ? `bite-resposive-container-small${
                    classBlock === '' ? '' : '-block'
                  }-info-subtitle ${classGtm ? classGtm : ''}`
                : `bite-resposive-container-info-subtitle ${
                    classGtm ? classGtm : ''
                  }`
            }
            id="bite-responsibe-container-info-descripcion"
          >
            <span className={classGtm}>
              {biteCaracter(
                content,
                accessibility.lineSize > 6 ? 80 : 90,
                accessibility.lineSize > 6 ? 12 : 15
              )}
            </span>
          </div>
        </ContainerCardInfoStyled>
        <div
          className={
            small
              ? `bite-resposive-container-small${
                  classBlock === '' ? '' : '-block'
                }-btn ${classGtm ? classGtm : ''}`
              : `bite-resposive-container-btn ${classGtm ? classGtm : ''}`
          }
        >
          <Button
            style={{
              width: 200,
              fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_16PX)
                .fontSize
            }}
            classGtm={classGtm}
            title={btn}
            className={`secondary${
              validateCurrentLine(!line) ? '-dark' : ''
            } ${classBlock}`}
          />
        </div>
      </ContainerCardStyled>
    </Anchor>
  )
}

export default BiteResposive
