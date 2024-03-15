import React from 'react'
import circleblue from '../../../assets/images/circleblue.png'
import circlegreensvg from '../../../assets/images/circle-green.svg'
import { ReactComponent as PlusIcon } from '../../../assets/images/plus-btn.svg'
import { ReactComponent as PlusBlueIcon } from '../../../assets/images/plus.svg'
import styled from 'styled-components'
import './see-more.scss'

const ContainerCardStyled = styled.span`
  color: ${props =>
    props.isDark
      ? '#292730'
      : props.theme.colors &&
        props.theme.colors.homeMobile.dots.dotsInactive} !important;
`

const SeeMore = props => {
  return (
    <div
      id="container-see-more"
      data-tut="reactour__show"
      className={'container-see-more ' + (props.classGtm ? props.classGtm : '')}
    >
      {!props.bottom ? (
        <div
          id="container-see-more-title-container"
          className={props.classGtm ? props.classGtm : ''}
        >
          <ContainerCardStyled
            className={
              'container-see-more-title' +
              (props.isDark ? '-dark' : '') +
              (props.classGtm ? ' ' + props.classGtm : '')
            }
            id="container-see-more-title"
            isDark={props.isDark}
          >
            {props.title}
          </ContainerCardStyled>
        </div>
      ) : (
        ''
      )}

      <div
        style={props.green ? { color: '#0033a0' } : {}}
        className={
          'container-see-more-icon ' + (props.classGtm ? props.classGtm : '')
        }
        id="container-see-more-icon"
      >
        <figure className="container-see-more-icon__figure">
          <img
            id="imgBtn"
            className={'imgBtn ' + (props.classGtm ? props.classGtm : '')}
            alt={'ver-mas'}
            src={props.green ? circlegreensvg : circleblue}
          />
        </figure>
        {props.symbol === '+' ? (
          props.green ? (
            <PlusIcon
              id="imgBtn-text"
              style={props.styleText}
              className={'imgBtn-img' + (props.isDark ? ' dark-mode-img' : '')}
              alt={`Ícono del símbolo "más" para ver más contenidos, al darle clic se enlistan todos los contenidos relacionados al negocio, según el perfilamiento`}
              title={`Ícono de Ver más contenidos`}
            />
          ) : (
            <PlusBlueIcon
              id="imgBtn-text"
              style={props.styleText}
              className={'imgBtn-img' + (props.isDark ? ' dark-mode-img' : '')}
              alt={`Ícono del símbolo "más" para ver más contenidos, al darle clic se enlistan todos los contenidos relacionados al negocio, según el perfilamiento`}
              title={`Ícono de Ver más contenidos`}
            />
          )
        ) : (
          <span
            id="imgBtn-text"
            style={{ position: 'relative', left: -25, zIndex: 2 }}
            className={props.classGtm ? props.classGtm : ''}
          >
            {props.symbol}
          </span>
        )}
      </div>
      {props.bottom ? (
        <div
          id="container-see-more-title-container"
          className={props.classGtm ? props.classGtm : ''}
        >
          <ContainerCardStyled
            className={
              'container-see-more-title' +
              (props.isDark ? '-dark' : '') +
              (props.classGtm ? ' ' + props.classGtm : '')
            }
            id="container-see-more-title"
            isDark={props.isDark}
          >
            {props.title}
          </ContainerCardStyled>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default SeeMore
