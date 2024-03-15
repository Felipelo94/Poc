import React, { useState } from 'react'
import './accessibility-menu.scss'
import { ReactComponent as CloseModalIcon } from '../../../assets/images/close-x.svg'
import { ReactComponent as IconTextSize } from '../../../assets/images/icons/text-size-icon.svg'
import { ReactComponent as IconLineHeight } from '../../../assets/images/icons/line-height-icon.svg'
import { ReactComponent as IconHightContranst } from '../../../assets/images/icons/sun-and-moon-icon.svg'
import InputRange from '../../atoms/input-range/input-range'
import { Switch, withStyles } from '@material-ui/core'
import {
  addInfoAccessibilityDark,
  addInfoAccessibilityFont,
  addInfoAccessibilityLine
} from '../../../actions/accessibility/accessibility'
import { useEffect } from 'react'
import { useCurrentWidth } from 'react-socks'
import styled from 'styled-components'
import {
  getColorsRangeTrackDesktop,
  getColorsRangeTrackMobile
} from '../../../utils/themes-utils'
import { selectTheme } from '../../../utils/select-theme'
import { sendEventGA } from '../../../utils/classGtmUtil'

const AntSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 20,
    padding: 0,
    display: 'flex'
  },
  switchBase: {
    padding: 2,
    color: '#0033A0',
    '&$checked': {
      transform: 'translateX(23px)',
      color: theme.palette.common.white,
      width: 19,
      '& + $track': {
        opacity: 1,
        backgroundColor: '#3F66B3',
        borderColor: '#3F66B3'
      }
    }
  },
  thumb: {
    width: 16,
    height: 16,
    boxShadow: 'none'
  },
  track: {
    border: `1px solid #0033A0`,
    borderRadius: 24 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white
  },
  checked: {}
}))(Switch)

const AntSwitchDark = withStyles(theme => ({
  root: {
    width: 42,
    height: 20,
    padding: 0,
    display: 'flex'
  },
  switchBase: {
    padding: 2,
    color: '#292730',
    '&$checked': {
      transform: 'translateX(23px)',
      color: '#292730',
      width: 19,
      '& + $track': {
        opacity: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#292730'
      }
    }
  },
  thumb: {
    width: 16,
    height: 16,
    boxShadow: 'none'
  },
  track: {
    border: `1px solid #292730`,
    borderRadius: 24 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white
  },
  checked: {}
}))(Switch)

const AntSwitchMobile = withStyles({
  root: {
    width: 42,
    height: 20,
    padding: 0
  },
  switchBase: {
    padding: 2,
    '&$checked': {
      transform: 'translateX(22px)'
    }
  },
  thumb: {
    width: 16,
    height: 16,
    boxShadow: 'none',
    backgroundColor: props =>
      props.localTheme.colors.menuAccessibility.colorSwitchAccessibilityItem
  },
  track: {
    opacity: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: props =>
      props.localTheme.colors.menuAccessibility
        .borderColorTrackAccessibilityItem,
    backgroundColor: props =>
      `${props.localTheme.colors.menuAccessibility.bgColorTrackAccessibilityItem}`
  },
  checked: {
    '& $thumb': {
      backgroundColor: props =>
        props.localTheme.colors.menuAccessibility
          .colorCheckedSwitchAccessibilityItem
    },
    '& + $track': {
      opacity: '1 !important',
      borderColor: props =>
        props.localTheme.colors.menuAccessibility
          .borderColorCheckedTrackAccessibilityItem,
      backgroundColor: props =>
        `${props.localTheme.colors.menuAccessibility.bgColorCheckedTrackAccessibilityItem} !important`
    }
  }
})(props => {
  return <Switch color="default" {...props} />
})

const ContainerAccessibilityItemStyled = styled.div`
  .line-separator {
    background: ${props =>
      props.theme.colors ? props.theme.colors.header.lineAccessibility : null};
    transition: ${props => props.theme.animation};
  }

  .container-accessibility-menu-option-label {
    color: ${props =>
      props.isMobile
        ? props.theme.colors.menuAccessibility.colorLabelAccessibilityItem
        : props.theme.colors?.menuAccessibility
            .colorLabelAccessibilityItemDesktop} !important;
    transition: ${props => props.theme.animation};
  }

  .accessibility-item-icon {
    & path {
      fill: ${props =>
        props.isMobile
          ? props.theme.colors.menuAccessibility.colorIconsAccessibilityItem
          : props.theme.colors?.menuAccessibility
              .colorIconAccessibilityItemDesktop} !important;
    }
  }
`

const DivSeparatorAccessibilityItemStyled = styled.div`
  background-color: ${props =>
    props.theme.colors?.menuAccessibility.colorBorderBottomAccessibilityItem};
`

function AccessibilityItem({
  enabledDarkMode,
  idItem,
  order,
  children,
  limite,
  text,
  isSwitch,
  hideSeparator,
  setData,
  dispatch,
  isActiveAccesibility,
  minLimite,
  defaultValue,
  isDarkMode,
  isMobile,
  typeCustomer,
  categoryDefaulft,
  labelGA = ''
}) {
  const isBrowser = typeof window !== 'undefined'
  const width = useCurrentWidth()
  const [checked, setChecked] = useState(
    isBrowser ? localStorage.getItem(idItem) === 'true' : false
  )
  const [inputDefault, setInputDefault] = useState(
    isBrowser
      ? localStorage.getItem(idItem)
        ? localStorage.getItem(idItem)
        : defaultValue
      : null
  )
  useEffect(() => {
    setData(
      idItem,
      isBrowser
        ? localStorage.getItem(idItem)
          ? localStorage.getItem(idItem)
          : defaultValue
        : null
    )
  }, [])

  function handleChange(checkedChange) {
    sendEventGA('Home', 'ClicSuperior', labelGA)
    setChecked(!checked)
    setData(idItem, !checked)
    dispatch(addInfoAccessibilityDark(!checked))
  }
  return (
    <ContainerAccessibilityItemStyled
      id={idItem}
      className={`container-accessibility-menu-option accessibility-${order}${
        isActiveAccesibility ? '-animation' : ''
      }`}
      isInversiones={categoryDefaulft === 'Inversión'}
      isDarkMode={isDarkMode}
      isMobile={isMobile}
    >
      {!hideSeparator ? <div className="line-separator"></div> : null}
      {children}
      <span
        id={idItem + '-label'}
        // style={{ width: width < 1025 ? (width <= 640 ? '40%' : 134) : null }}
        class="container-accessibility-menu-option-label"
      >
        {text}
      </span>
      <button
        className={`container-accessibility-menu-option-action${
          isSwitch ? ' container-accessibility-menu-option-switch' : ''
        }`}
        id="container-accessibility-menu-option-action"
        style={{
          width: width <= 640 ? '45%' : 193
        }}
        tabIndex="0"
      >
        {isSwitch ? (
          <React.Fragment>
            {isMobile ? (
              <AntSwitchMobile
                localTheme={selectTheme(
                  categoryDefaulft,
                  { darkMode: isDarkMode },
                  typeCustomer
                )}
                onChange={handleChange}
                disabled={enabledDarkMode}
                checked={!enabledDarkMode ? checked : false}
              />
            ) : categoryDefaulft === 'Inversión' ? (
              <AntSwitchDark
                id="switch-cantainer"
                onChange={handleChange}
                disabled={enabledDarkMode}
                checked={!enabledDarkMode ? checked : false}
              />
            ) : (
              <AntSwitch
                id="switch-cantainer"
                onChange={handleChange}
                disabled={true}
                checked={!enabledDarkMode ? checked : false}
              />
            )}
          </React.Fragment>
        ) : (
          <InputRange
            min={minLimite}
            max={limite}
            inputPosition={width <= 425 ? 'left' : null}
            width={width <= 425 ? '100%' : null}
            defualtValue={inputDefault}
            isSetData={1}
            style={{ width: '100%' }}
            input={false}
            onChange={e => {
              let value = parseInt(e)
              setData(idItem, value)
              setInputDefault(value)
              sendEventGA('Home', 'ClicSuperior', labelGA)
              if (idItem === 'accessibility-font-size') {
                dispatch(addInfoAccessibilityFont(value))
              } else {
                dispatch(addInfoAccessibilityLine(value))
              }
            }}
            step={1}
            colorsRangeTrack={
              isMobile
                ? getColorsRangeTrackMobile(typeCustomer, categoryDefaulft)
                : getColorsRangeTrackDesktop(
                    categoryDefaulft,
                    isDarkMode && !enabledDarkMode
                  )
            }
          />
        )}
      </button>
    </ContainerAccessibilityItemStyled>
  )
}

const ContainerAccessibilityStyled = styled.div`
  background: ${props =>
    props.isMobile
      ? props.theme.colors.menuAccessibility.backgroundContainerMobile
      : props.theme.colors?.background} !important;
  border-bottom: ${props =>
    props.isDarkMode
      ? null
      : props.theme.colors
      ? props.theme.colors.header.borderBottom
      : null};
  transition: ${props => props.theme.animation};

  .accesibility-close-icon {
    filter: ${props =>
      props.theme.colors
        ? props.theme.colors.header.menu.filterCloseAccessibility
        : null};
  }
`

export default function AccessibilityMenu({
  enabledDarkMode,
  setActiveAccesibilty,
  dispatch,
  isActiveAccesibility,
  isDarkMode,
  typeCustomer,
  categoryDefaulft
}) {
  function setDataLocal(key, value) {
    localStorage.setItem(key, value)
  }
  const [isActiveAccesibilityV, setIsActiveAccesibilityV] = useState(false)
  useEffect(() => {
    const isBrowser = typeof window !== 'undefined'
    const isActiveMenuAcc = isBrowser
      ? localStorage.getItem('accessibility-menu-open') === 'true'
      : null
    setIsActiveAccesibilityV(isActiveMenuAcc || isActiveAccesibility)
  }, [])
  const currentWidth = useCurrentWidth()
  useEffect(() => {
    const isBrowser = typeof window !== 'undefined'
    const isActiveMenuAcc = isBrowser
      ? localStorage.getItem('accessibility-menu-open') === 'true'
      : null
    setIsActiveAccesibilityV(isActiveMenuAcc || isActiveAccesibility)
  }, [isActiveAccesibility])

  return (
    <ContainerAccessibilityStyled
      id="container-accessibility-menu"
      className={`container-accessibility-menu container-accessibility-menu-${
        isActiveAccesibilityV ? '' : 'in'
      }active`}
      isMobile={currentWidth <= 992}
      isDarkMode={isDarkMode}
    >
      <div
        id="container-accessibility-menu-options"
        className="container-accessibility-menu-options"
      >
        <AccessibilityItem
          enabledDarkMode={enabledDarkMode}
          isDarkMode={isDarkMode}
          order={1}
          defaultValue={2}
          minLimite={1}
          limite={3}
          setData={setDataLocal}
          isActiveAccesibility={isActiveAccesibilityV}
          dispatch={dispatch}
          hideSeparator={true}
          idItem={'accessibility-font-size'}
          text={'Tamaño de fuente'}
          labelGA="Accesibilidad-TamañoFuente"
          categoryDefaulft={categoryDefaulft}
          typeCustomer={typeCustomer}
          isMobile={currentWidth <= 992}
        >
          <IconTextSize
            title="Ícono de Tamaño de la fuente"
            alt="Ícono de dos letras T, permite modificar el tamaño de la letra a través de una barra que permite elegir entre 3 tipos de tamaño"
            className="accessibility-item-icon"
          />
        </AccessibilityItem>
        <DivSeparatorAccessibilityItemStyled className="accessibility-item-separator" />
        <AccessibilityItem
          enabledDarkMode={enabledDarkMode}
          isDarkMode={isDarkMode}
          order={2}
          defaultValue={4}
          minLimite={4}
          limite={10}
          setData={setDataLocal}
          isActiveAccesibility={isActiveAccesibilityV}
          dispatch={dispatch}
          idItem={'accessibility-line-height'}
          categoryDefaulft={categoryDefaulft}
          typeCustomer={typeCustomer}
          text={'Espacio entre líneas'}
          labelGA="Accesibilidad-EspacioLineas"
          isMobile={currentWidth <= 992}
        >
          <IconLineHeight
            title="Ícono de Espacio entre líneas"
            alt="Ícono de una flecha con cuatro líneas al lado, permite elegir entre 7 tipos de interlineado o espacio entre líneas"
            className="accessibility-item-icon"
          />
        </AccessibilityItem>
        <DivSeparatorAccessibilityItemStyled className="accessibility-item-separator" />
        <AccessibilityItem
          enabledDarkMode={enabledDarkMode}
          isDarkMode={isDarkMode}
          order={3}
          setData={setDataLocal}
          isActiveAccesibility={isActiveAccesibilityV}
          categoryDefaulft={categoryDefaulft}
          typeCustomer={typeCustomer}
          dispatch={dispatch}
          idItem={'accessibility-hight-contrast'}
          text={'Alto contraste'}
          labelGA="Accesibilidad-AltoContraste"
          isSwitch={true}
          isMobile={currentWidth <= 992}
        >
          <IconHightContranst
            title="Ícono de Alto contraste"
            alt="Ícono de un sol con media luna adentro, para elegir el contraste del sitio: activarlo o desactivarlo"
            className="accessibility-item-icon"
          />
        </AccessibilityItem>
        <DivSeparatorAccessibilityItemStyled className="accessibility-item-separator" />
      </div>
      <button
        onClick={() => {
          setActiveAccesibilty(false)
        }}
        onKeyDown={event => {
          if (event.keyCode === 13) {
            const element = document.getElementById('accessibility-container')
            if (element) {
              element.focus()
            }
          }
        }}
        className={'accesibility-close-icon-button'}
        tabIndex="0"
      >
        <CloseModalIcon
          id="accessibily-close"
          className={'accesibility-close-icon'}
          alt={'cerrar barra accesibilidad'}
        />
      </button>
    </ContainerAccessibilityStyled>
  )
}
