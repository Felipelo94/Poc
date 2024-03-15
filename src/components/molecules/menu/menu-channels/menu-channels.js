import React, { useEffect, useRef, useState } from 'react'
import './menu-channels.scss'
import { ReactComponent as ChannelsMenuButtonIcon } from '../../../../assets/images/channels-menu-button.svg'
import { ReactComponent as LogoX } from '../../../../assets/images/x.svg'
import { ReactComponent as IconPronto } from '../../../../assets/images/pronto.svg'
import { ReactComponent as Headset } from '../../../../assets/images/headset-canales.svg'
import { ReactComponent as Phone } from '../../../../assets/images/phone-canales.svg'
import { ReactComponent as WhatsApp } from '../../../../assets/images/whatsapp.svg'
import { ReactComponent as AttentionLinesCloseIcon } from '../../../../assets/images/attention-lines-x.svg'
import { enableBody, disableBody } from '../../../../utils/body-scroll-lock'
import Pronto from '../../../atoms/pronto/pronto'
import { Helmet } from 'react-helmet'
import { navigate } from 'gatsby-link'
import MenuItem from '../../../atoms/menu-item/menu-item'
import ChannelsMenuOptions from '../../../../const/dictionary/channels-menu-options.json'
import styled from 'styled-components'
import NewPronto from '../../../atoms/pronto/new-pronto/new-pronto'
import Anchor from '../../../atoms/anchor/anchor'
import { getCurrentHost } from '../../../../utils/redirectUtil'

const CircularMenuStyled = styled.div`
  background: ${props =>
    props.theme.colors ? props.theme.colors.background : null} !important;
`

const CloseButtonStyled = styled.button`
  & > svg > path {
    fill: ${props =>
      props.theme.colors
        ? props.theme.colors.menuChannels.iconCloseServicesLine
        : null} !important;
  }
`

const AttentionLinesMenuStyled = styled.div`
  background: ${props =>
    props.theme.colors ? props.theme.colors.background : null} !important;
`

const AttentionLinesTitleStyled = styled.h5`
  color: ${props =>
    props.theme.colors
      ? props.theme.colors.menuChannels.titleLineas
      : null} !important;
`
const LineCityStyled = styled.span`
  color: ${props =>
    props.theme.colors
      ? props.theme.colors.menuChannels.titleLineas
      : null} !important;
`

const LineNumberStyled = styled.span`
  color: ${props =>
    props.theme.colors
      ? props.theme.colors.menuChannels.contentLineas
      : null} !important;
  & > a {
    color: ${props =>
      props.theme.colors
        ? props.theme.colors.menuChannels.contentLineas
        : null} !important;
  }
`

const MenuChannels = ({ lines }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [showCloseAnimation, setShowCloseAnimation] = useState(false)
  const [selectedItem, setSelectedItem] = useState('pronto')
  const ancorPronto = useRef(null)

  useEffect(() => {
    if (isMenuOpened) {
      disableBody()
    } else {
      enableBody()
    }
  }, [isMenuOpened])

  const openMenu = () => {
    setIsMenuOpened(true)
  }

  const closeMenu = () => {
    setShowCloseAnimation(true)
  }

  const showOpenChannelsMenuButton = () => {
    if (showCloseAnimation) {
      setIsMenuOpened(false)
      setShowCloseAnimation(false)
    }
  }

  const closeAttentionLines = contactNumber => {
    setIsMenuOpened(false)
    window.location.href = `tel:${contactNumber}`
  }

  const addRemoveClasses = () => {
    if (isMenuOpened) {
      setSelectedItem('pronto')
    } else {
      if (ancorPronto) ancorPronto.current.click()
    }
    setIsMenuOpened(!isMenuOpened)
  }

  const linesClick = event => {
    if (
      event.target.getAttribute('id') ===
      'container-float-menu-modal-lineas-atencion'
    ) {
      addRemoveClasses()
    }
  }

  const returnIcon = nameItem => {
    switch (nameItem) {
      case 'lineas-atencion':
        return (
          <Phone
            id="FloatButton-container-image"
            alt="img-lineas-atencion"
            className="container-float-button-icon"
          />
        )
      case 'canales':
        return (
          <Headset
            id="FloatButton-container-image"
            alt="img-canales"
            className="container-float-button-icon"
          />
        )
      case 'whatsapp':
        return (
          <WhatsApp
            id="FloatButton-container-image"
            alt="img-whatsapp"
            className="container-float-button-icon"
          />
        )
      default:
        return (
          <IconPronto
            id="FloatButton-container-image"
            alt="img-pronto"
            className="container-float-button-icon"
          />
        )
    }
  }

  const cickItemMenuFloat = name => {
    setSelectedItem(name)
  }

  const getSelectedOption = itemSelect => {
    switch (itemSelect) {
      case 'canales':
        addRemoveClasses()
        navigate(`${getCurrentHost()}/canales/sitio-web`, {
          state: {
            label:
              'VideoAsesroia | Protección: Pensiones, Cesantías, Ahorro e Inversión '
          }
        })
        break
      case 'lineas-atencion':
        return (
          <div
            className="attention-lines background-disabled active"
            id="container-float-menu-modal-lineas-atencion"
            role="presentation"
            onClick={e => onAttentionLinesClick(e)}
            onKeyDown={e => onAttentionLinesClick(e)}
          >
            <AttentionLinesMenuStyled
              className="attention-lines__container"
              id="container-float-menu-modal-lineas"
            >
              <div className="attention-lines__header">
                <AttentionLinesTitleStyled className="attention-lines__title">
                  Línea de servicio Protección
                </AttentionLinesTitleStyled>
                <CloseButtonStyled
                  className="attention-lines__close-button"
                  role="presentation"
                  onClick={addRemoveClasses}
                  onKeyDown={addRemoveClasses}
                >
                  <AttentionLinesCloseIcon
                    className="attention-lines__close-icon"
                    alt="lineas-icon-close"
                  />
                </CloseButtonStyled>
              </div>
              <div className="attention-lines__content">
                {lines.map((line, index) => {
                  return (
                    <div id={`line-${index}`} key={`line-${index}`}>
                      <div className="attention-lines__line">
                        <LineCityStyled className="attention-lines__line-city">{`${line.titulo}:`}</LineCityStyled>
                        <LineNumberStyled className="attention-lines__line-number">
                          <Anchor
                            id={`line-link-${index}`}
                            className="attention-lines__number-link"
                            onClick={e =>
                              closeAttentionLines(line.numeroContacto)
                            }
                          >
                            {line.numeroContacto.trim()}
                          </Anchor>
                        </LineNumberStyled>
                      </div>
                    </div>
                  )
                })}
              </div>
            </AttentionLinesMenuStyled>
          </div>
        )
      case 'whatsapp':
        window.open(
          'https://api.whatsapp.com/send?phone=573102205575&text=%C2%A1Hola,%20Protecci%C3%B3n!%20Quisiera%20resolver%20algunas%20dudas...'
        )
        setSelectedItem('pronto')
        break
      default:
        return (
          <div className={!showCloseAnimation ? 'background-disabled' : ''} />
        )
    }
  }

  const onAttentionLinesClick = event => {
    linesClick(event)
    setIsMenuOpened(false)
  }

  return (
    <div className="channels-menu">
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <button className="channels-menu__open-button" onClick={openMenu}>
        <ChannelsMenuButtonIcon />
      </button>

      <CircularMenuStyled
        id="circularMenu"
        className={`channels-menu__circular-menu ${
          isMenuOpened
            ? 'channels-menu__active-open'
            : 'channels-menu__inactive-open'
        } ${
          showCloseAnimation ? 'channels-menu__circular-menu--inactive' : ''
        }`}
        onAnimationEnd={showOpenChannelsMenuButton}
      >
        {isMenuOpened && (
          <button className="channels-menu__close-button" onClick={closeMenu}>
            <LogoX />
          </button>
        )}
        <div className="channels-menu__options">
          {ChannelsMenuOptions.map((option, index) => {
            return (
              <div
                key={`option-${index}`}
                className={`channels-menu__option channels-menu__option--${option.name}`}
              >
                <a
                  ref={option.name === 'pronto' ? ancorPronto : null}
                  id={option.name}
                  onClick={e => {
                    cickItemMenuFloat(option.name)
                  }}
                  onKeyDown={e => {
                    cickItemMenuFloat(option.name)
                  }}
                  className={`${option.name === 'pronto' && 'chat'} 
                    channels-menu__option-button channels-menu__option-text`}
                >
                  <MenuItem img={returnIcon(option.name)} text={option.texto} />
                </a>
              </div>
            )
          })}
        </div>
      </CircularMenuStyled>
      {isMenuOpened ? getSelectedOption(selectedItem) : null}
      {process.env.NEW_PRONTO === 'true' ? (
        <NewPronto Hidden={true} />
      ) : (
        <Pronto Hidden={true} />
      )}
    </div>
  )
}

export default MenuChannels
