import React, { useEffect } from 'react'
import styled from 'styled-components'
import { sendEventGA } from '../../../utils/classGtmUtil'
import { getIdDiv } from '../../../utils/redirect-bread-crumb'
import { getCurrentHost } from '../../../utils/redirectUtil'
import Anchor from '../anchor/anchor'
import './peperoni.scss'

const PeperoniStyled = styled.div`
  .peperoni-text {
    ${props =>
      !props.isHoverActive &&
      !props.isHoverActiveAnotherPeperoni &&
      `color: ${props.theme.colors.menuDesktop.colorNoTouchPeperoni};`}
    ${props =>
      (props.selectedOption || props.isHoverActive) &&
      `color: ${props.theme.colors.menuDesktop.colorHoverPeperoniTitle};`}
    ${props =>
      !props.selectedOption &&
      props.isHoverActiveAnotherPeperoni &&
      `color: ${props.theme.colors.menuDesktop.colorHoverAnotherPeperoni};`}
  }
  .peperoni-container-image {
    ${props =>
      props.selectedOption &&
      `background: ${props.theme.colors.menuDesktop.bgIconPeperoni};`}
    & svg {
      path {
        ${props =>
          !props.isHoverActive &&
          !props.isHoverActiveAnotherPeperoni &&
          `fill: ${props.theme.colors.menuDesktop.colorNoTouchPeperoni};`}
        ${props =>
          (props.selectedOption || props.isHoverActive) &&
          `fill: ${props.theme.colors.menuDesktop.colorHoverPeperoniIcon};`}
        ${props =>
          !props.selectedOption &&
          props.isHoverActiveAnotherPeperoni &&
          `fill: ${props.theme.colors.menuDesktop.colorHoverAnotherPeperoni};`}
      }
    }
  }
`
const MoreIcono = styled.svg`
  ${props =>
    !props.isHoverActive &&
    !props.isHoverActiveAnotherPeperoni &&
    `background: ${props.theme.colors.menuDesktop.bgIconMoreInactive};`}
  ${props =>
    (props.selectedOption || props.isHoverActive) &&
    `background: ${props.theme.colors.menuDesktop.bgIconMoreActive};`}
  ${props =>
    !props.selectedOption &&
    props.isHoverActiveAnotherPeperoni &&
    `background: ${props.theme.colors.menuDesktop.bgIconMoreInactive};`}
  background-repeat: no-repeat;
  max-width: 22px;
  max-height: 22px;
`
export default function Peperoni({
  title,
  more,
  link,
  classGtm,
  image,
  overModal,
  titleActive,
  icon,
  setSelectedTitle,
  selectedTitle,
  setSelectedMenu,
  className = '',
  isHoverActive = false,
  isHoverActiveAnotherPeperoni = false
}) {
  const [selectedOption, setSelectedOption] = React.useState(false)
  const finalClassGtm = classGtm
  const peperoniClick = () => {
    if (!selectedOption) {
      let finaltitle = icon
      overModal(more, true, icon, finaltitle)
    }
    setSelectedOption(!selectedOption)
    setSelectedTitle(titleActive)
    setSelectedMenu(!selectedOption)
  }

  useEffect(() => {
    if (icon !== selectedTitle) {
      setSelectedOption(false)
    }
  }, [icon, selectedTitle, setSelectedOption])

  return (
    <PeperoniStyled
      titleActive={titleActive}
      icon={icon}
      id={`peperoni-container-${title ? title.replace(/ /g, '-') : ''}`}
      className={`peperoni-main-container ${finalClassGtm}`}
      selectedOption={selectedOption}
      isHoverActive={isHoverActive}
      isHoverActiveAnotherPeperoni={isHoverActiveAnotherPeperoni}
    >
      {link !== '' && link ? (
        <Anchor
          target={link?.includes('https:') ? '_blank' : '_self'}
          rel="noreferrer"
          onMouseEnter={() => {
            let finaltitle = icon
            overModal(more, true, icon, finaltitle)
          }}
          onMouseLeave={() => {
            let finaltitle = -1
            overModal(more, false, icon, finaltitle)
          }}
          id={`peperoni-container-link-${icon}`}
          className={`peperoni-container-link ${finalClassGtm} ${className}`}
          href={
            link?.includes('https:') ? link : getCurrentHost() + getIdDiv(link)
          }
          onClick={() => {
            sendEventGA('Home', 'ClicMenu', title)
            peperoniClick()
          }}
          tabIndex="0"
          style={{ cursor: 'pointer' }}
        >
          <div
            id={`peperoni-container`}
            className={`peperoni-container ${finalClassGtm}`}
          >
            <div
              id={`peperoni-container-image`}
              className={`peperoni-container-image`}
            >
              {image}
            </div>
            <span
              id={`peperoni-container-text`}
              className={`peperoni-text ${finalClassGtm}`}
            >
              {title}
            </span>
          </div>
        </Anchor>
      ) : (
        <button
          onMouseEnter={() => {
            let finaltitle = icon
            overModal(more, true, icon, finaltitle)
          }}
          onMouseLeave={() => {
            let finaltitle = ''
            overModal(more, false, icon, finaltitle)
          }}
          id={`peperoni-container-link-${icon}`}
          className={`peperoni-container-over peperoni-container ${finalClassGtm} ${className}`}
          onClick={() => {
            sendEventGA('Home', 'ClicMenu', title)
            peperoniClick()
          }}
          tabIndex="0"
          style={{ cursor: 'pointer' }}
        >
          <div
            id={`peperoni-container-image`}
            className={`peperoni-container-image`}
          >
            {image}
          </div>
          <span
            className={`peperoni-text ${finalClassGtm}`}
            id={`peperoni-container`}
          >
            {title}
          </span>
          {more && (
            <div style={{ marginTop: '4px' }}>
              <MoreIcono
                selectedOption={selectedOption}
                isHoverActive={isHoverActive}
                isHoverActiveAnotherPeperoni={isHoverActiveAnotherPeperoni}
              />
            </div>
          )}
        </button>
      )}
    </PeperoniStyled>
  )
}
