import React from 'react'
import './prev-next-button.scss'
import { ReactComponent as ArrowIcon } from '../../../assets/images/arrow-bite.svg'
import styled from 'styled-components'

const ContainerUl = styled.div`
  & > svg {
    & > path {
      ${props =>
        props.theme.colors &&
        props.theme.colors.homeMobile.dots.dotsInactive &&
        `fill: ${props.theme.colors.homeMobile.dots.dotsInactive} !important`};
      ${props =>
        props.theme.colors &&
        props.isInversion &&
        `fill: ${props.theme.colors.homeMobile.dots.inversion} !important`};
      ${props => props.isDark && `fill: #FFFFFF !important`};
    }
  }
`

export default function PrevNextButton({
  tipo,
  clickAction,
  id,
  isDark,
  isDarkInvert
}) {
  return tipo === 1 ? (
    <ContainerUl
      id="container-bite-btns"
      className="container-bite-btns container-bite-btns-prev"
      isInversion={isDarkInvert}
      isDark={isDark}
    >
      <ArrowIcon
        id={'bite-btns-prev-' + id}
        onClick={() => {
          clickAction(tipo)
        }}
        alt="prev-bite"
      />
    </ContainerUl>
  ) : (
    <ContainerUl
      id="container-bite-btns"
      className="container-bite-btns container-bite-btns-next"
      isInversion={isDarkInvert}
      isDark={isDark}
    >
      <ArrowIcon
        id={'bite-btns-next-' + id}
        style={{ transform: 'rotate(180deg)' }}
        onClick={() => {
          clickAction(tipo)
        }}
        alt="prev-bite"
      />
    </ContainerUl>
  )
}
