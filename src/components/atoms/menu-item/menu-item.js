import React from 'react'
import styled from 'styled-components'
import './menu-item.scss'

const MenuItemStyled = styled.div`
  span {
    color: ${props =>
      props.theme.colors
        ? props.theme.colors.header.quickAccess.colorInactive
        : null} !important;
  }

  & > div > svg > path {
    fill: ${props =>
      props.theme.colors
        ? props.theme.colors.header.quickAccess.colorInactive
        : null} !important;
  }
`

const MenuItem = props => {
  return (
    <MenuItemStyled className="menu-item">
      <div className="menu-item__image">{props.img}</div>
      <span className="menu-item__text">{props.text}</span>
    </MenuItemStyled>
  )
}

export default MenuItem
