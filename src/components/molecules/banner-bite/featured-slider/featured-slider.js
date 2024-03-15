import React from 'react'
import { Breakpoint } from 'react-socks'
import styled from 'styled-components'
import { validateCurrentLine } from '../../../../utils/bite-caracter'
import { scaleText, SCALE_SIZE_34PX } from '../../../../utils/scaleText'
import Anchor from '../../../atoms/anchor/anchor'
import TitleSesion from '../../../atoms/title-sesion/title-sesion'
import Desktop from './featured-slider-desktop/featured-slider-desktop'
import Mobile from './featured-slider-mobile/featured-slider-mobile'
import './featured-slider.scss'

const ContainerTitleStyled = styled.div`
  .Destacados-blue {
    color: ${props =>
      props.theme.colors && props.theme.colors.textColor} !important;
    transition: ${props => props.theme.animation};

    a {
      color: ${props =>
        props.theme.colors && props.theme.colors.textColor} !important;
      transition: ${props => props.theme.animation};
    }
  }

  .Destacados-blue-dark {
    transition: ${props => props.theme.animation};

    a {
      transition: ${props => props.theme.animation};
    }
  }
`

export default function FeaturedSlider({
  data,
  line,
  type,
  isStepCardTourGuideActive,
  accessibility,
  title
}) {
  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

  const newTitleFeatured = () => {
    if (title) {
      return <>{title}</>
    }
    return <></>
  }

  return (
    <div style={{ width: '100%' }} className="d-flex flex-column">
      <ContainerTitleStyled
        className={
          validateCurrentLine(line)
            ? 'container-destacados-dark' +
              (isStepCardTourGuideActive
                ? ' container-destacados-dark-tg-active'
                : '')
            : 'container-destacados'
        }
      >
        <TitleSesion
          className={
            validateCurrentLine(line)
              ? 'Destacados-blue-dark'
              : 'Destacados-blue'
          }
          title={newTitleFeatured()}
          size={scaleText(accessibility.fontSize, SCALE_SIZE_34PX, 1).fontSize}
        />
      </ContainerTitleStyled>
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
          isStepCardTourGuideActive={isStepCardTourGuideActive}
          line={line}
          groups={data}
          type={type}
          accessibility={accessibility}
          prefix={prefix}
        />
      </Breakpoint>
    </div>
  )
}
