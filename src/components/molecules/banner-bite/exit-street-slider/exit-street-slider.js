import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import './exit-street-slider.scss'
import {
  getSettingsResponsive,
  getSettingsResponsiveDarkInvert
} from '../../../../const/dictionary/settingCarruselMobile'
import options from '../../../../const/dictionary/options-more-content.json'
import BiteResposive from '../../bite/bite-resposive/bite-resposive'
import inversion from '../../../../assets/images/inversion-bite.svg'
import ahorro from '../../../../assets/images/ahorro-bite.svg'
import ahorroInversiones from '../../../../assets/images/ahorro-inversiones.svg'
import ahorroDark from '../../../../assets/images/ahorro-dark.svg'
import pension from '../../../../assets/images/pension-bite.svg'
import pensionDark from '../../../../assets/images/pension-dark.svg'
import pensionInversiones from '../../../../assets/images/pension-inversiones.svg'
import cesantia from '../../../../assets/images/cesantia-bite.svg'
import cesantiaDark from '../../../../assets/images/cesantias-dark.svg'
import cesantiaInversiones from '../../../../assets/images/cesantias-inversiones.svg'
import TitleSesion from '../../../atoms/title-sesion/title-sesion'
import { validateCurrentLine } from '../../../../utils/bite-caracter'
import { updateHostUser } from '../../../../services/service-indexDB/service-indexDB'
import { addInfoPerfil } from '../../../../actions/home/home'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { useCurrentWidth } from 'react-socks'
import {
  scaleLine,
  scaleText,
  SCALE_SIZE_30PX
} from '../../../../utils/scaleText'
import styled from 'styled-components'
import { redirectHome } from '../../../../utils/home-configuration'

const ExitStreetContainer = styled.div`
  background: ${props =>
    props.theme.colors &&
    props.theme.colors.homeMobile.biteResponsive.ExitStreetColor} !important;
`

const ContainerTitleStyled = styled.div`
  .calles-salida {
    color: ${props =>
      props.theme.colors && props.theme.colors.textSubtitleColor} !important;
    transition: ${props => props.theme.animation};
  }

  .calles-salida-dark {
    color: ${props =>
      props.theme.colors &&
      props.theme.colors.textSubtitleColorInversion} !important;
    transition: ${props => props.theme.animation};
  }
`

let ExitStreetSlider = ({
  data,
  currentLine,
  line,
  dispatch,
  isStepExitTourGuideActive,
  validateStreetCard,
  changeData,
  accessibility
}) => {
  const minimumNumberCard = useCurrentWidth() === 1024 ? 2 : 1
  const refSlider = useRef(null)
  const [activeSlide2, setactiveSlide2] = useState(0)
  const getAvaliableLines = () => {
    let linesEnable = options.filter(itemLine => itemLine.name !== currentLine)
    const currentType = changeData
      ? changeData.nameValue === ''
        ? line.type
        : changeData.typeUser
      : changeData
    if (currentType === 2) {
      linesEnable = linesEnable.filter(
        itemLine => itemLine.name !== 'Inversión'
      )
    }
    return linesEnable
  }
  const [dataEC, setDataEC] = useState(getAvaliableLines())

  useEffect(() => {
    setDataEC(getAvaliableLines())
  }, [line, changeData])

  const getIconLine = lineSelect => {
    switch (lineSelect) {
      case 'Inversión':
        return inversion
      case 'Ahorro':
        return accessibility
          ? accessibility.darkMode
            ? ahorroDark
            : validateCurrentLine(line)
            ? ahorroInversiones
            : ahorro
          : validateCurrentLine(line)
          ? ahorroInversiones
          : ahorro
      case 'Pensión':
        return accessibility
          ? accessibility.darkMode
            ? pensionDark
            : validateCurrentLine(line)
            ? pensionInversiones
            : pension
          : validateCurrentLine(line)
          ? pensionInversiones
          : pension
      default:
        return accessibility
          ? accessibility.darkMode
            ? cesantiaDark
            : validateCurrentLine(line)
            ? cesantiaInversiones
            : cesantia
          : validateCurrentLine(line)
          ? cesantiaInversiones
          : cesantia
    }
  }

  const getClassBlock = lineBlock => {
    if (process.env.RESTRIGIR_PREHOME === 'true') {
      if (lineBlock === 'Inversión') {
        return 'block-card'
      }
    }
    return ''
  }

  const clickSlider = tipo => {
    if (tipo !== 1) {
      refSlider.current.slickNext()
    } else {
      refSlider.current.slickPrev()
    }
  }

  const clickExitStreet = titleClick => {
    if (getClassBlock(titleClick) === '') {
      const currentType = changeData
        ? changeData.nameValue === ''
          ? line.type
          : changeData.typeUser
        : changeData
      const lines = {
        category: titleClick,
        type: currentType
      }
      updateHostUser({ category: titleClick, subcategory: '' }, () => {
        if (
          titleClick === 'Ahorro' ||
          titleClick === 'Inversión' ||
          currentType === 2
        ) {
          redirectHome(lines)
        }
      })
      dispatch(addInfoPerfil(titleClick, ''))
      validateStreetCard(titleClick === 'Ahorro' || titleClick === 'Inversión')
      let params = queryString.parse(window.location.search)
      let validateQuery =
        params['tipoCliente'] || params['linea'] || params['changeModal']
          ? true
          : false
      if (
        titleClick === 'Inversión' &&
        !validateQuery &&
        process.env.RESTRIGIR_REDIRECT === 'true'
      ) {
        const prefix =
          process.env.PATH_PREFIX === ''
            ? 'https://proteccion.com/wps/portal/proteccion/web/inversion/home/#/'
            : `${window.location.origin}/wps/portal/proteccion/web/inversion/home/#/`
        window.location.href = prefix
      }
    }
  }
  const getRealLinea = lineMock => {
    return lineMock === 'Pensiones Voluntarias'
      ? 'Ahorro'
      : lineMock === 'Pensiones Obligatorias'
      ? 'Pensión'
      : lineMock
  }
  const getShortText = lineSelect => {
    const dataLines = data ? data.edges : []
    const foundLine = dataLines.find(
      element => getRealLinea(element.node.nombre) === lineSelect
    )
    return foundLine ? foundLine.node.textoIntroductorioBite : ''
  }

  let settingFinal = validateCurrentLine(line)
    ? getSettingsResponsiveDarkInvert({
        id: 'calles-salida',
        showArrow: dataEC.length > minimumNumberCard && dataEC.length > 2,
        isDarkInvert: validateCurrentLine(line),
        clickAction: clickSlider
      })
    : getSettingsResponsive({
        id: 'calles-salida',
        showArrow: dataEC.length > minimumNumberCard && dataEC.length > 2,
        isDarkInvert: validateCurrentLine(line),
        clickAction: clickSlider
      })
  settingFinal = {
    afterChange: current => setactiveSlide2(current),
    ...settingFinal
  }

  return (
    <ExitStreetContainer
      className="exit-street-container"
      style={{
        marginBottom: useCurrentWidth() <= 1024 && dataEC.length <= 2 ? 50 : 0
      }}
      id="exit-street-container"
    >
      <ContainerTitleStyled id="exit-street-title">
        <TitleSesion
          isDark={validateCurrentLine(line)}
          className={
            'calles-salida' + (validateCurrentLine(line) ? '-dark' : '')
          }
          title={'Además tenemos para ti'}
          size={scaleText(accessibility.fontSize, SCALE_SIZE_30PX, 1).fontSize}
          padding={
            accessibility.fontSize > 2 || accessibility.lineSize > 6
              ? '0px 12px 0px 0px'
              : null
          }
          lineHeight={scaleLine(accessibility.lineSize)}
        />
      </ContainerTitleStyled>
      {isStepExitTourGuideActive && useCurrentWidth() > 1024 ? (
        <div
          style={{
            left:
              useCurrentWidth() > 1024 ? (dataEC.length === 2 ? 442 : 787) : 12,
            height: 320,
            maxWidth: '551px',
            width: useCurrentWidth() > 1024 ? 365 : 336,
            marginTop: 20
          }}
          className="backgroud-tour-guide"
        />
      ) : null}
      <Slider ref={refSlider} {...settingFinal}>
        {dataEC.map((lineItem, index) => {
          return (
            <div
              id={`street-exit-line${index}`}
              data-tut={
                useCurrentWidth() > 1024
                  ? index === dataEC.length - 1
                    ? 'reactour__exit'
                    : null
                  : null
              }
              className={`street-exit-line ${getClassBlock(lineItem.name)} ${
                lineItem.classGtm
              }`}
            >
              <BiteResposive
                accessibility={accessibility}
                title={lineItem.name}
                dataTut={
                  useCurrentWidth() <= 1024
                    ? index === activeSlide2
                      ? 'reactour__exit'
                      : null
                    : undefined
                }
                img={getIconLine(lineItem.name)}
                content={getShortText(lineItem.name)}
                btn={'Me interesa'}
                slug={null}
                small={true}
                classBlock={getClassBlock(lineItem.name)}
                imageSmall={true}
                line={line}
                classGtm={lineItem.classGtm}
                callToAction={clickExitStreet}
                imgalt={lineItem.alt}
                imgTitle={`Ícono de ${lineItem.name}`}
              />
            </div>
          )
        })}
      </Slider>
    </ExitStreetContainer>
  )
}
ExitStreetSlider = connect()(ExitStreetSlider)

export default ExitStreetSlider
