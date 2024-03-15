import React from 'react'
import './subcategory.scss'
import { getSizeScreen } from '../../../utils/handleResize'
import { ReactComponent as VejezIcon } from '../../../assets/images/icons/prehome-pension-vejez.svg'
import { ReactComponent as InvIcon } from '../../../assets/images/icons/prehome-pension-invalidez.svg'
import { ReactComponent as SuperIcon } from '../../../assets/images/icons/prehome-pension-sobre.svg'
import { ReactComponent as PensionadoIcon } from '../../../assets/images/icons/prehome-pension-pensionado.svg'

import styled from 'styled-components'

const ContainerStyledDiv = styled.div`
  color: ${props =>
    props.isActive
      ? '#FFFFFF'
      : props.theme.colors &&
        props.theme.colors.modal.subcategory.color}!important;
  border: ${props =>
    props.theme.colors &&
    props.theme.colors.modal.subcategory.border}!important;
  background: ${props =>
    props.theme.colors && props.isActive
      ? props.theme.colors.modal.subcategory.active
      : props.theme.colors &&
        props.theme.colors.modal.subcategory.backgroundColor}!important;
  &:hover {
    color: ${props =>
      props.theme.colors &&
      props.theme.colors.modal.subcategory.colorhover}!important;
    background: ${props =>
      props.theme.colors &&
      props.theme.colors.modal.subcategory.backgroundHoverColor}!important;
  }
`

export default function SubCategory(props) {
  const handleClick = () => {
    const { subcategoryId, onClick } = props
    onClick(subcategoryId)
  }

  const getImgSubCategory = idImg => {
    switch (idImg) {
      case 'prehome-pension-vejez':
        return (
          <VejezIcon
            style={{
              width: '60px',
              height: '60px',
              alignSelf: 'center'
            }}
            alt="icono de subcategory"
          />
        )
      case 'prehome-pension-invalidez':
        return (
          <InvIcon
            style={{
              width: '60px',
              height: '60px',
              alignSelf: 'center'
            }}
            alt="icono de subcategory"
          />
        )
      case 'prehome-pension-sobre':
        return (
          <SuperIcon
            style={{
              width: '60px',
              height: '60px',
              alignSelf: 'center'
            }}
            alt="icono de subcategory"
          />
        )
      default:
        return (
          <PensionadoIcon
            style={{
              width: '60px',
              height: '60px',
              alignSelf: 'center'
            }}
            alt="icono de subcategory"
          />
        )
    }
  }

  const { isActive, classGtm } = props
  let liClasses = 'container ' + (isActive ? 'containerSelect' : '')

  return (
    <React.Fragment>
      {!props.IsIcon ? (
        <ContainerStyledDiv
          role="presentation"
          onKeyDown={handleClick}
          onClick={handleClick}
          data-testid="subcategory"
          id="subcategory"
          className={liClasses + ' ' + classGtm}
          isActive={isActive}
        >
          <div id="labelSubCategory" className={'labelSubCategory ' + classGtm}>
            {props.titlle}
          </div>
        </ContainerStyledDiv>
      ) : (
        <ContainerStyledDiv
          role="presentation"
          onKeyDown={handleClick}
          onClick={handleClick}
          data-testid="subcategory"
          id="subcategory"
          className={` ${classGtm}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '90px',
              paddingTop: getSizeScreen > 1024 ? '1.5rem' : '19px'
            }}
          >
            {getImgSubCategory(props.image)}
          </div>
          <p
            id="labelSubCategory"
            className={'labelSubCategory-pension ' + classGtm}
          >
            {props.titlle}
          </p>
        </ContainerStyledDiv>
      )}
    </React.Fragment>
  )
}

SubCategory.defaultProps = {
  isActive: false
}
