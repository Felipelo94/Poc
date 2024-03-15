import React from 'react'
import { Breakpoint } from 'react-socks'
import {
  SCALE_SIZE_15PX,
  SCALE_SIZE_30PX,
  scaleText
} from '../../../utils/scaleText'
import TitleSesion from '../../atoms/title-sesion/title-sesion'
import Mobile from './medium-relevance-mobile/medium-relevance-mobile'
import './medium-relevance.scss'
import styled from 'styled-components'
import Desktop from './medium-relevance-desktop/medium-relevance-desktop'
import Description from '../../atoms/description/description'

const ContainerTitleStyled = styled.div`
  .relevance-medium-blue {
    color: ${props =>
      props.theme.colors && props.theme.colors.textColor} !important;
    transition: ${props => props.theme.animation};
    }
`

export default function MediumRelevance({
  data,
  line,
  type,
  isStepCardTourGuideActive,
  accessibility,
  title,
  description
}) {
  const prefix =
  process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

  return (
    <div style={{ width: '100%' }} className="d-flex flex-column">
      <ContainerTitleStyled className={'container-relevance-medium'}>
        <TitleSesion
          className={'relevance-medium-blue'}
          title={title ? title : ''}
          size={scaleText(accessibility.fontSize, SCALE_SIZE_30PX, 1).fontSize}
        />
      </ContainerTitleStyled>
      <Description
        className={'relevance-medium-description'}
        description={description ? description : ''}
        size={scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1).fontSize}
      />
      <Breakpoint customQuery="(max-width: 992px)">
        <Mobile
          accessibility={accessibility}
          isStepCardTourGuideActive={isStepCardTourGuideActive}
          line={line}
          data={data}
          type={type}
          prefix={prefix}
        />
      </Breakpoint>
      <Breakpoint
        className="d-flex flex-column"
        customQuery="(min-width: 993px)"
      >
        <Desktop
          accessibility={accessibility}
          isStepCardTourGuideActive={isStepCardTourGuideActive}
          line={line}
          data={data}
          type={type}
          prefix={prefix}
        />
      </Breakpoint>
    </div>
  )
}
