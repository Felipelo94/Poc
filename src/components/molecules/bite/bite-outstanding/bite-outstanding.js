import React from 'react'
import { useCurrentWidth } from 'react-socks'
import styled from 'styled-components'
import {
  biteCaracter,
  validateCurrentLine
} from '../../../../utils/bite-caracter'
import { dayBeetwenDates } from '../../../../utils/dateUtil'
import { DAY_TAG_NEW } from '../../../../utils/paramApplication'
import {
  onClickToInterna
} from '../../../../utils/redirectUtil'
import {
  scaleLine,
  scaleText,
  SCALE_SIZE_13PX,
  SCALE_SIZE_16PX,
  SCALE_SIZE_18PX
} from '../../../../utils/scaleText'
import Button from '../../../atoms/button/button'
import Image from '../../../atoms/image/image'
import './bite-outstanding.scss'

const ContainerCardStyled = styled.div`
  background: ${props =>
    props.theme.colors && props.theme.colors.cardBackground};
  transition: ${props => props.theme.animation};

  .bite-outstanding-container-content-description {
    color: ${props => props.theme.colors && props.theme.colors.cardDescription};
  }

  .bite-outstanding-container-blue-content-description {
    color: ${props => props.theme.colors && props.theme.colors.cardDescription};
  }

  .bite-outstanding-container-content-button {
    .button-container {
      .button-container__button--secondary {
        background: ${props =>
          props.theme.colors && props.theme.colors.cardButtonHover} !important;
        color: ${props =>
          props.theme.colors &&
          props.theme.colors.cardButtonHoverText} !important;
        border: 1px solid
          ${props => props.theme.colors && props.theme.colors.cardButtonHover} !important;
      }
      .button-container__button--secondary-dark-full {
        background: ${props =>
          props.theme.colors &&
          props.theme.colors.cardButtonHoverInversion} !important;
        color: ${props =>
          props.theme.colors &&
          props.theme.colors.cardButtonHoverTextInversion} !important;
        border: 1px solid
          ${props =>
            props.theme.colors &&
            props.theme.colors.cardButtonHoverInversion} !important;
      }
    }
  }

  .bite-outstanding-container-blue-content-button {
    .button-container {
      .button-container__button--secondary {
        background: ${props =>
          props.theme.colors && props.theme.colors.cardButtonHover} !important;
        color: ${props =>
          props.theme.colors &&
          props.theme.colors.cardButtonHoverText} !important;
        border: 1px solid
          ${props => props.theme.colors && props.theme.colors.cardButtonHover} !important;
      }
      .button-container__button--secondary-dark-full {
        background: ${props =>
          props.theme.colors &&
          props.theme.colors.cardButtonHoverInversion} !important;
        color: ${props =>
          props.theme.colors &&
          props.theme.colors.cardButtonHoverTextInversion} !important;
        border: 1px solid
          ${props =>
            props.theme.colors &&
            props.theme.colors.cardButtonHoverInversion} !important;
      }
    }
  }
`
const ContainerCardAnchorStyled = styled.a`
  box-shadow: ${props =>
    props.isInversion
      ? 'none'
      : props.theme.colors && props.theme.colors.cardBoxShadow};
  &:focus-visible {
    box-shadow: 0 0 25px #719ece !important;
  }
`
export default function BiteOutstanding({
  btn,
  slug,
  link,
  img,
  content,
  imgalt,
  imgTitle,
  classGtm,
  gtmCategory,
  gtmAction,
  title,
  date,
  type,
  line,
  dataTut,
  accessibility
}) {
  const width = useCurrentWidth()
  const testBig =
    accessibility.lineSize > 6 || accessibility.fontSize > 2 ? '-big' : ''
  const daysBetweenUpdate = () => {
    return dayBeetwenDates(new Date(date).getTime(), new Date())
  }
  const getIdDiv = titleChanged => {
    return titleChanged
      .substr(0, 30)
      .replace(/\s/g, '-')
      .replace(/[^a-zA-Z ]/g, '')
      .toLowerCase()
  }

  return (
    <ContainerCardAnchorStyled
      isInversion={validateCurrentLine(line)}
      id={`bite-outstanding-container-${getIdDiv(
        title === null ? '' : title ? title : ''
      )}`}
      style={{
        height:
          width < 1024 &&
          (accessibility.fontSize > 2 || accessibility.lineSize > 6)
            ? 250
            : null
      }}
      href={link ? link : slug}
      target={'_blank'}
      className={
        type === 2
          ? `bite-outstanding-container${testBig}-blue ${
              classGtm ? classGtm : ''
            } noneTextDecoration `
          : `bite-outstanding-container${testBig} ${
              classGtm ? classGtm : ''
            } noneTextDecoration`
      }
      tabIndex="0"
      onClick={() => {
        onClickToInterna(slug, gtmCategory, gtmAction, title)
      }}
      onKeyDown={event => {
        if (event.keyCode === 13) {
          onClickToInterna(slug, gtmCategory, gtmAction, title)
        }
      }}
    >
      {daysBetweenUpdate() < DAY_TAG_NEW ? (
        <div
          style={{
            fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_13PX, 1)
              .fontSize
          }}
          className={
            type === 2
              ? `bite-outstanding-container-blue-label-new`
              : `bite-outstanding-container-label-new`
          }
        >
          <div className="bite-outstanding-container-label-new-text">Nuevo</div>
        </div>
      ) : null}
      <div
        data-tut={dataTut}
        className={
          type === 2
            ? `bite-outstanding-container${testBig}-blue-image ${
                classGtm ? classGtm : ''
              }`
            : `bite-outstanding-container${testBig}-image ${
                classGtm ? classGtm : ''
              }`
        }
        id="bite-outstanding-container-image"
      >
        <Image
          imgTitle={imgTitle}
          classNames={
            type === 2
              ? `"bite-outstanding-container${testBig}-blue-image-value" ${
                  classGtm ? classGtm : ''
                }`
              : `"bite-outstanding-container${testBig}-image-value" ${
                  classGtm ? classGtm : ''
                }`
          }
          imagen={img}
          alt={imgalt}
          width="100%"
          height="100%"
          classGtm={classGtm ? classGtm : ''}
          style={{
            borderRadius: '4px 4px 12px 0px',
            objectFit: 'cover'
          }}
          id="bite-desktop-container-image-value"
        />

        <div
          style={{
            fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_18PX, 1)
              .fontSize,
            lineHeight: scaleLine(accessibility.lineSize),
            height:
              accessibility.lineSize > 6 || accessibility.fontSize > 2
                ? width < 1025
                  ? '130px'
                  : '153px'
                : null,
            marginTop:
              accessibility.lineSize > 6 || accessibility.fontSize > 2
                ? width < 1025
                  ? '-80px'
                  : '-153px'
                : null
          }}
          className={
            type === 2
              ? `bite-outstanding-container-blue-title`
              : `bite-outstanding-container-title`
          }
        >
          <div
            id="bite-outstanding-container-title"
            className={
              type === 2
                ? 'bite-outstanding-container-blue-title-value'
                : 'bite-outstanding-container-title-value'
            }
          >
            {' '}
            <span>{title}</span>{' '}
          </div>
        </div>
      </div>
      <div
        className={
          type === 2
            ? 'bite-outstanding-container-blue-line-blue'
            : 'bite-outstanding-container-line'
        }
      />
      <ContainerCardStyled
        id="bite-outstanding-container-content"
        className={
          type === 2
            ? 'bite-outstanding-container-blue-content'
            : 'bite-outstanding-container-content'
        }
      >
        <div
          id="bite-outstanding-container-content-description"
          style={{
            fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_13PX, 1)
              .fontSize,
            lineHeight: scaleLine(accessibility.lineSize),
            height:
              accessibility.lineSize > 6 || accessibility.fontSize > 2
                ? 100
                : accessibility.lineSize > 6
                ? 90
                : null
          }}
          className={
            type === 2
              ? 'bite-outstanding-container-blue-content-description'
              : 'bite-outstanding-container-content-description'
          }
        >
          <span>
            {biteCaracter(
              content,
              accessibility.lineSize > 6 || accessibility.fontSize > 2
                ? 90
                : 100,
              accessibility.lineSize > 6 || accessibility.fontSize > 2 ? 13 : 15
            )}
          </span>
        </div>
        <div
          className={
            type === 2
              ? 'bite-outstanding-container-blue-content-button'
              : 'bite-outstanding-container-content-button'
          }
        >
          <Button
            style={{
              width: 160,
              fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_13PX)
                .fontSize
            }}
            classGtm={classGtm}
            title={btn}
            className={`secondary${
              validateCurrentLine(line) ? '-dark-full' : ''
            }`}
          />
        </div>
      </ContainerCardStyled>
    </ContainerCardAnchorStyled>
  )
}
