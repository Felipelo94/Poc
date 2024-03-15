import React from 'react'
import styled from 'styled-components'
import { ReactComponent as QAIconAct1Icon } from '../../../assets/images/icons/quick-access-1-act.svg'
import { ReactComponent as QAIcon1Icon } from '../../../assets/images/icons/quick-access-1.svg'
import { ReactComponent as QAIconAct2Icon } from '../../../assets/images/icons/quick-access-2-act.svg'
import { ReactComponent as QAIcon2Icon } from '../../../assets/images/icons/quick-access-2.svg'
import { ReactComponent as QAIconAct3Icon } from '../../../assets/images/icons/quick-access-3-act.svg'
import { ReactComponent as QAIcon3Icon } from '../../../assets/images/icons/quick-access-3.svg'
import { ReactComponent as QAIcon3Investment } from '../../../assets/images/icons/quick-access-3-investment.svg'
import { ReactComponent as QAIcon3ActInvestment } from '../../../assets/images/icons/quick-access-3-investment-act.svg'
import { generateGtmTag } from '../../../utils/classGtmUtil'
import { scaleLine, scaleText, SCALE_SIZE_15PX } from '../../../utils/scaleText'
import './quick-access-item.scss'

const ContainerQuickItemStyled = styled.div`
  .quick-access-item-text-inactive {
    color: ${props =>
      props.theme.colors
        ? props.theme.colors.header.quickAccess.colorInactive
        : null} !important;
    transition: ${props => props.theme.animation};
  }

  .quick-access-item-text-active {
    color: ${props =>
      props.theme.colors
        ? props.theme.colors.header.quickAccess.color
        : null} !important;
  }

  .quick-access-item-image-inactive {
    filter: ${props =>
      props.theme.colors ? props.theme.colors.filterImgInactive : null};
  }
`

export default function QuickAccessItem({
  text,
  index,
  active,
  lineaActual,
  accessibility,
  alt,
  classGTM
}) {
  const gtmClass = generateGtmTag(text, 'gtmHomeSup')
  const getImage = (
    isActive,
    currentIndex,
    lineaActualP,
    paragraph,
    altImage
  ) => {
    switch (currentIndex) {
      case 0:
        return isActive ? (
          <QAIconAct1Icon
            alt={altImage}
            title={`Ícono de ${paragraph}`}
            className={
              lineaActualP === 'Inversión' && isActive
                ? `dark-mode-img ${gtmClass} ${classGTM}`
                : `${gtmClass} ${classGTM}`
            }
          />
        ) : (
          <QAIcon1Icon
            alt={altImage}
            title={`Ícono de ${paragraph}`}
            className={
              lineaActualP === 'Inversión' && isActive
                ? `dark-mode-img ${gtmClass} ${classGTM}`
                : `${gtmClass} ${classGTM}`
            }
          />
        )
      case 1:
        return isActive ? (
          <QAIconAct2Icon
            alt={altImage}
            title={`Ícono de ${paragraph}`}
            className={
              lineaActualP === 'Inversión' && isActive
                ? `dark-mode-img ${gtmClass} ${classGTM}`
                : `${gtmClass} ${classGTM}`
            }
          />
        ) : (
          <QAIcon2Icon
            alt={altImage}
            title={`Ícono de ${paragraph}`}
            className={
              lineaActualP === 'Inversión' && isActive
                ? `dark-mode-img ${gtmClass} ${classGTM}`
                : `${gtmClass} ${classGTM}`
            }
          />
        )
      default:
        if (lineaActualP === 'Inversión') {
          return isActive ? (
            <QAIcon3ActInvestment
              alt={altImage}
              title={`Ícono de ${paragraph}`}
              className={
                lineaActualP === 'Inversión' && isActive
                  ? `dark-mode-img ${gtmClass} ${classGTM}`
                  : `${gtmClass} ${classGTM}`
              }
            />
          ) : (
            <QAIcon3Investment
              alt={altImage}
              title={`Ícono de ${paragraph}`}
              className={
                lineaActualP === 'Inversión' && isActive
                  ? `dark-mode-img ${gtmClass} ${classGTM}`
                  : `${gtmClass} ${classGTM}`
              }
            />
          )
        } else {
          return isActive ? (
            <QAIconAct3Icon
              alt={altImage}
              title={`Ícono de ${paragraph}`}
              className={
                lineaActualP === 'Inversión' && isActive
                  ? `dark-mode-img ${gtmClass} ${classGTM}`
                  : `${gtmClass} ${classGTM}`
              }
            />
          ) : (
            <QAIcon3Icon
              alt={altImage}
              title={`Ícono de ${paragraph}`}
              className={
                lineaActualP === 'Inversión' && isActive
                  ? `dark-mode-img ${gtmClass} ${classGTM}`
                  : `${gtmClass} ${classGTM}`
              }
            />
          )
        }
    }
  }
  return (
    <ContainerQuickItemStyled
      className={`quick-access-item ${gtmClass} ${classGTM}`}
      id="quick-access-item"
    >
      <div
        className={
          active === index
            ? `quick-access-item-image-active ${gtmClass} ${classGTM}`
            : `quick-access-item-image-inactive ${gtmClass} ${classGTM}`
        }
        id="quick-access-item-image"
      >
        {getImage(active === index, index, lineaActual, text, alt)}
      </div>
      <div
        style={{
          fontSize: accessibility
            ? scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1).fontSize
            : null,
          lineHeight: accessibility ? scaleLine(accessibility.lineSize) : null
        }}
        className={
          active === index
            ? `quick-access-item-text-active ${classGTM} ${gtmClass} ${
                accessibility
                  ? lineaActual === 'Inversión' && !accessibility.darkMode
                    ? 'dark-mode-text'
                    : ''
                  : ''
              }`
            : `quick-access-item-text-inactive ${classGTM} ${gtmClass}`
        }
        id="quick-access-item-text"
      >
        <span className={`${classGTM} ${gtmClass}`}>{text}</span>
      </div>
    </ContainerQuickItemStyled>
  )
}
