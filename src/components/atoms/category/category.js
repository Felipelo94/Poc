import React from 'react'
import './category.scss'
import { ReactComponent as InversionIcon } from '../../../assets/images/icons/prehome-inversion.svg'
import { ReactComponent as AhorroIcon } from '../../../assets/images/icons/prehome-ahorro.svg'
import { ReactComponent as PensionIcon } from '../../../assets/images/icons/prehome-pension.svg'
import { ReactComponent as CesantiasIcon } from '../../../assets/images/icons/prehome-cesantias.svg'
import styled from 'styled-components'

const ContainerStyled = styled.p`
  color: ${props =>
    props.isActive
      ? props.theme.colors && props.theme.colors.modal.category.colorActive
      : null} !important;
`

export default function Category(props) {
  const getImgCategory = (idImg, titleP, gtm) => {
    switch (idImg) {
      case 'prehome-inversion':
        return (
          <InversionIcon
            className={'categoryImage ' + gtm}
            id={'categoryImage'}
            alt={titleP}
          />
        )
      case 'prehome-ahorro':
        return (
          <AhorroIcon
            className={'categoryImage ' + gtm}
            id={'categoryImage'}
            alt={titleP}
          />
        )
      case 'prehome-pension':
        return (
          <PensionIcon
            className={'categoryImage ' + gtm}
            id={'categoryImage'}
            alt={titleP}
          />
        )
      default:
        return (
          <CesantiasIcon
            className={'categoryImage ' + gtm}
            id={'categoryImage'}
            alt={titleP}
          />
        )
    }
  }

  const handleClick = () => {
    const { categoryId, onClick } = props
    if (onClick) {
      onClick(categoryId)
    }
  }

  const { isActive, orden, classGtm } = props
  const stylesImg = isActive
    ? 'categoryContainerImg categoryContainerImgActive'
    : 'categoryContainerImg'

  const stylesText = isActive
    ? 'categoryText categoryTextActive'
    : 'categoryText'

  return (
    <div
      role="presentation"
      data-testid="category"
      className={'category-container ' + classGtm}
      id={'category'}
      onKeyDown={handleClick}
      onClick={handleClick}
    >
      <div
        id={`category-container-item-${orden}`}
        className={stylesImg + ' ' + classGtm}
      >
        {getImgCategory(props.img, props.title, classGtm)}
      </div>
      <ContainerStyled
        isActive={isActive}
        className={`${
          isActive
            ? 'category-container-container-item-active'
            : 'category-container-container-item-inactive'
        } ${classGtm ? stylesText + ' ' + classGtm : stylesText}`}
        id="categoryText"
      >
        {props.title}
      </ContainerStyled>
    </div>
  )
}

Category.defaultProps = {
  isActive: false
}
