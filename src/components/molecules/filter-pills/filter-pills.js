import React from 'react'
import TitleSesion from '../../atoms/title-sesion/title-sesion'
import {
  SCALE_SIZE_15PX,
  SCALE_SIZE_18PX,
  SCALE_SIZE_30PX,
  scaleText
} from '../../../utils/scaleText'
import styled from 'styled-components'
import './filter-pills.scss'
import Description from '../../atoms/description/description'

const ContainerTitleStyled = styled.div`
  .relevance-medium-blue {
    color: ${props =>
      props.theme.colors && props.theme.colors.textColor} !important;
    transition: ${props => props.theme.animation};
  }`;

export default function FilterPills({
  accessibility,
  title,
  description,
  subtitle,
  data,
  value,
  handleChange
}) {
  return (
    <div>
      <ContainerTitleStyled className={'container-relevance-low'}>
        <TitleSesion
          className={'relevance-medium-blue'}
          title={title}
          size={scaleText(accessibility, SCALE_SIZE_30PX, 1).fontSize}
        />
      </ContainerTitleStyled>
      <Description
        className={'relevance-low-description'}
        description={description}
        size={scaleText(accessibility, SCALE_SIZE_15PX, 1).fontSize}
      />
      <div className="low-relevance-filter-pills">
        {subtitle && (
          <TitleSesion
            className={'low-relevance-filter-pills-title'}
            title={subtitle}
            hierarchyH3
            size={scaleText(accessibility, SCALE_SIZE_18PX, 1).fontSize}
          />
        )}
        <div className="low-relevance-filter-pills-mobile">
          {data.map((businessLine, index) =>
            businessLine.node.tituloAgrupadorContenidos ? (
              <div
                key={`low-relevance-filter-pills-${index}`}
                role="button"
                tabIndex={0}
                onClick={() => {
                  handleChange(businessLine.node.tituloAgrupadorContenidos)
                }}
                onKeyDown={() => {
                  handleChange(businessLine.node.tituloAgrupadorContenidos)
                }}
                className={
                  businessLine.node.tituloAgrupadorContenidos === value
                    ? 'low-relevance-filter-pills-pill-active'
                    : 'low-relevance-filter-pills-pill-inactive'
                }
                id={`low-relevance-filter-pills-${index}`}
              >
                <span>{businessLine.node.tituloAgrupadorContenidos}</span>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  )
}
