import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { addInfoName } from '../../../actions/welcome/welcome'
import './welcome.scss'
import WhoAreYouOption from '../../atoms/type-user-icon/who-are-you-option'
import { ReactComponent as ErrorFieldIcon } from '../../../assets/images/error-field.svg'
import { ReactComponent as InfoIcon } from '../../../assets/images/info-alert-prehome.svg'
import ContentUtil from '../../../utils/ContentUtil'
import { handleResize } from '../../../utils/handleResize'
import contenidosPrehome from '../../../utils/contenidosPrehome.json'
import { dataWelcome } from '../../../utils/contenidosWelcome'
import Button from '../../atoms/button/button'
import Tooltip from '../../atoms/tooltip/tooltip'
import ContainerSlider from '../../atoms/container-slider/container-slider'
import { sendGaPush } from '../../../utils/classGtmUtil'
import { navigate } from 'gatsby'
import styled from 'styled-components'

const textToltip =
  '**Pedimos tus datos para entregarte información a tu medida.** <br />Este no es un inicio de sesión, es un perfilamiento que nos permitirá entregarte información personalizada.'
const textToltipMobile =
  'Este no es un inicio de sesión, es un perfilamiento que nos permitirá entregarte información personalizada.'
const colorTwoSlider = '#FAFBFC'

const ContainerStyledH1 = styled.h1`
  color: ${props =>
    props.theme.colors && props.theme.colors.modal.colorTitle}!important;
`

const ContainerStyledp = styled.p`
  color: ${props =>
    props.theme.colors && props.theme.colors.modal.colorSubTitle}!important;
`

const ContainerStyledH3 = styled.h3`
  color: ${props =>
    props.theme.colors && props.theme.colors.modal.titlePerson.color}!important;
`

const ContainerStyledDiv = styled.div`
  color: ${props =>
    props.theme.colors &&
    props.theme.colors.modal.titlePerson.colorSubTitle}!important;
`

const ContainerStyledDivName = styled.div`
  color: ${props =>
    props.theme.colors &&
    props.theme.colors.modal.titlePerson.colorName}!important;
`

const InputStyle = styled.input`
  background: ${props =>
    props.theme.colors
      ? props.theme.colors && props.theme.colors.background
      : null} !important;
  border: ${props =>
    props.theme.colors && props.theme.colors.input.border} !important;
  color: ${props => props.theme.colors && props.theme.colors.input.color};
  transition: ${props => props.theme.animation};

  ::placeholder {
    color: ${props => props.theme.colors && props.theme.colors.input.color};
  }
`

const ButtonStyle = styled.button`
  .button-container__button--secondary {
    color: ${props =>
      props.theme.colors && props.theme.colors.modal.input.color} !important;
    border: 1px solid
      ${props => props.theme.colors && props.theme.colors.modal.input.color} !important;
    background: ${props =>
      props.theme.colors &&
      props.theme.colors.modal.input.colorButton} !important;
  }

  .button-container-secondary:hover {
    background: ${props =>
      props.theme.colors && props.theme.colors.modal.input.hover} !important;
    color: ${props =>
      props.theme.colors &&
      props.theme.colors.modal.input.colorHover} !important;
  }
`

const isBrowser = typeof window !== 'undefined'
const prefix =
  process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

export function WelcomeComponent(props) {
  const ancorRef = useRef()
  const [isSelectTypeEmpre, setIsSelectTypeEmpre] = useState(
    props.typeDefault === 2
  )
  const isActiveEmpre =
    props.defaultValue && props.typeDefault === 1 ? false : true

  const isActivePerson =
    props.defaultValue && props.typeDefault === 2 ? false : true
  const isResponsive = handleResize()

  const [isPressedButtonNext, setIsPressedButtonNext] = useState(false)
  const [isSelectTypePerson, setIsSelectTypePerson] = useState(
    props.typeDefault === 1
  )
  const [nameValue, setNameValue] = useState('')
  const [selectedType, setSelectedType] = useState(props.typeDefault)
  const [nameValidate, setNameValidate] = useState(true)
  const [onFocusName, setOnFocusName] = useState(false)
  const [copyDefaultIndexdb, setCopyDefaultIndexdb] = useState(null)

  useEffect(() => {
    props.dispatch(addInfoName(nameValue, selectedType))
  }, [nameValue])

  useEffect(() => {
    if (props.defaultIndexdb !== copyDefaultIndexdb) {
      setIsSelectTypePerson(props.defaultIndexdb?.type === 1)
      setIsSelectTypeEmpre(props.defaultIndexdb?.type === 2)
      setNameValue(props.defaultIndexdb?.nameuser)
      setSelectedType(props.typeDefault)
      selectedButtonNext(1)
      setCopyDefaultIndexdb(props.defaultIndexdb)
    }
  })

  const isSelectedPerson = isPerson => {
    setIsSelectTypePerson(isPerson)
    setIsSelectTypeEmpre(!isPerson)
    setSelectedType(isPerson ? 1 : 2)
    props.setType(isPerson ? 1 : 2)
    props.dispatch(addInfoName(nameValue, isPerson ? 1 : 2))
  }

  const selectedButtonNext = value => {
    if (value !== 0) setIsPressedButtonNext(true)
    props.onGetInfoWelcome(value)

    if (typeof window !== 'undefined') {
      if (value !== 0) {
        sendGaPush(
          'Cuentanos',
          'ClicComoTeLlamasPrimerNombre',
          `${selectedType === 1 ? 'Persona' : 'Empresa'}-${nameValue}`
        )
        if (isBrowser) {
          if (window.location.pathname === prefix) {
            navigate(
              `${
                props.defaultValue
                  ? `/?tipoCliente=${props.typeDefault}&linea=${props.categorySelectedURL}`
                  : ''
              }#categories`
            )
          } else {
            const url = `${window.location.pathname}`.substring(11, 999)
            navigate(
              `${
                process.env.PATH_PREFIX === '' ? window.location.pathname : url
              }${
                props.defaultValue
                  ? `/?tipoCliente=${props.typeDefault}&linea=${props.categorySelectedURL}`
                  : ''
              }#categories`
            )
          }
        }
      }
    }
  }

  const handleChange = event => {
    const alphabeticRegex = new RegExp(/^[a-zA-Z\u00C0-\u017F\s]*$/)
    if (alphabeticRegex.test(event.target.value)) {
      const value = event.target.value
      const valuefinal = value.trim()
      setNameValue(value)
      setNameValidate(validdateTextField(value))
      setIsPressedButtonNext(false)
      props.dispatch(addInfoName(valuefinal, selectedType))
    }
  }

  const handleBlur = event => {
    const value = event.target.value
    const valuefinal = value.trim()
    setNameValidate(validdateTextField(event.target.value))
    props.dispatch(addInfoName(valuefinal, selectedType))
    setOnFocusName(false)
  }

  const keyUpHandler = event => {
    if (
      event.keyCode === 13 &&
      nameValidate &&
      nameValue.length > 0 &&
      selectedType
    ) {
      setOnFocusName(false)
      ancorRef.current.click()
    }
  }

  const validdateTextField = textValue => {
    if (textValue.length > 0) {
      if (
        !allLetter(textValue) ||
        !textValue.trim().length > 0 ||
        !textValue
          .split(' ')
          .join('')
          .match(/^[ A-Za-záéíóúAÉÍÓÚÑñ]+$/)
      ) {
        return false
      }
    }
    return true
  }

  const allLetter = text => !!text.match(/^[A-Za-z-ZÀ-ÿ ]+$/)

  const componetToltip = (
    <Tooltip text={isResponsive ? textToltipMobile : textToltip} />
  )

  let divMessage
  let borderColor
  const { data } = props
  let tittles
  if (data !== undefined) {
    tittles = data.allContentfulContenidosPaginas.edges
  } else {
    tittles = []
  }
  const contentUtil = new ContentUtil()

  if (!nameValidate) {
    divMessage = (
      <div
        className={'containerPreHome'}
        style={{ marginTop: 5.67, marginBottom: 22, display: 'flex' }}
      >
        <ErrorFieldIcon
          style={{ marginRight: 4.67 }}
          height="16.67px"
          width="16.67px"
          alt="img-error"
        />
        <div className={'errorLabel'}>Ingresa solo letras en este campo.</div>
      </div>
    )
    borderColor = '#E62323'
  } else {
    divMessage = null
    borderColor = null
  }

  return (
    <>
      <div>
        <ContainerSlider>
          <ContainerStyledH1
            className={
              isBrowser
                ? window.location.pathname.indexOf('home') >= 0
                  ? 'titleWelcome'
                  : 'titleWelcome-home'
                : 'titleWelcome'
            }
          >
            {contentUtil.getValueContent(tittles, 'titulo-principal') ||
              contenidosPrehome.tituloPrincipal}
          </ContainerStyledH1>
          <ContainerStyledp
            className={'description'}
            id={'description-welcome'}
          >
            {contentUtil.getValueContent(tittles, 'descripcion') ||
              contenidosPrehome.descripcion}
          </ContainerStyledp>
          <div className="welcome-alert-info">
            <InfoIcon className="welcome-alert-info__icon" />
            <p className="welcome-alert-info__message">
              {contentUtil.getValueContent(tittles, 'alert-info')}
            </p>
          </div>
        </ContainerSlider>
        <ContainerSlider
          color={colorTwoSlider}
          showProgress={props.showProgressBar}
          value={1}
          valuefinal={selectedType === 1 ? 3 : 2}
        >
          <ContainerStyledH3 className={'subTitle'}>
            {contentUtil.getValueContent(tittles, 'titulo-secundario') ||
              contenidosPrehome.tituloSecundario}
          </ContainerStyledH3>
          <div className="containerPreHome">
            <ContainerStyledDiv className={'labelWelcome'}>
              {contentUtil.getValueContent(tittles, 'texto-tipo-persona') ||
                contenidosPrehome.textoTipoPersona}
            </ContainerStyledDiv>

            <div className={'containerType'} style={{ position: 'relative' }}>
              <div
                id="person-type"
                className="person-type-container"
                role="presentation"
                onClick={() => {
                  sendGaPush('Cuentanos', 'ClicQuienEres', 'Persona')
                  if (isActivePerson && selectedType !== 1) {
                    isSelectedPerson(true)
                    setIsPressedButtonNext(false)
                  }
                }}
                onKeyDown={() => {
                  if (isActivePerson && selectedType !== 1) {
                    isSelectedPerson(true)
                    setIsPressedButtonNext(false)
                  }
                }}
              >
                <WhoAreYouOption
                  className={'btnType'}
                  type={{
                    name: 'Persona',
                    img: 1,
                    status: isSelectTypePerson,
                    noSeletected: selectedType === 0,
                    isActive: isActivePerson
                  }}
                />
              </div>
              <div
                id="factory-type"
                className="person-type-container"
                role="presentation"
                onClick={() => {
                  sendGaPush('Cuentanos', 'ClicQuienEres', 'Empresa')
                  if (isActiveEmpre && selectedType !== 2) {
                    isSelectedPerson(false)
                    setIsPressedButtonNext(false)
                  }
                }}
                onKeyDown={() => {
                  if (isActiveEmpre && selectedType !== 2) {
                    isSelectedPerson(false)
                    setIsPressedButtonNext(false)
                  }
                }}
              >
                <WhoAreYouOption
                  className={'btnType'}
                  type={{
                    name: 'Empresa',
                    img: 2,
                    status: isSelectTypeEmpre,
                    noSeletected: selectedType === 0,
                    isActive: isActiveEmpre
                  }}
                />
              </div>
              {onFocusName && componetToltip}
            </div>
          </div>
          <div className={'containerPreHome marginContainer'}>
            <ContainerStyledDivName className={'labelWelcome'}>
              {contentUtil.getValueContent(tittles, 'texto-nombre') ||
                contenidosPrehome.textoNombre}
            </ContainerStyledDivName>
            <div className="conatinerInput">
              <div className={'containerWelcomComponent'}>
                <div
                  className={`containerName gtmCuentComoTeLlamas${
                    selectedType === 1 ? 'Pers' : 'Emp'
                  }`}
                >
                  <InputStyle
                    id="nameUser"
                    maxLength="250"
                    type="text"
                    value={nameValue}
                    onKeyUp={keyUpHandler}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Escribe tu primer nombre aquí..."
                    style={{ borderColor: borderColor }}
                    className={`inputName gtmCuentComoTeLlamas${
                      selectedType === 1 ? 'Pers' : 'Emp'
                    }`}
                    autoComplete="off"
                    onFocus={() => {
                      setOnFocusName(true)
                    }}
                  />
                  {divMessage}
                </div>
                <div
                  className={`containerWelcomButton gtmCuentPasoUnoSiguiente${
                    selectedType === 1 ? 'Pers' : 'Emp'
                  }`}
                >
                  {nameValidate && nameValue?.length > 0 && selectedType ? (
                    <ButtonStyle
                      id="btn-welcome"
                      className={`btnNextWelcome gtmCuentPasoUnoSiguiente${
                        selectedType === 1 ? 'Pers' : 'Emp'
                      }`}
                      style={{
                        display: isPressedButtonNext ? 'none' : 'inline-block'
                      }}
                      ref={ancorRef}
                      onFocus={() => selectedButtonNext(1)}
                      onKeyDown={() => selectedButtonNext(1)}
                      onClick={() => selectedButtonNext(1)}
                    >
                      <Button
                        title="Siguiente"
                        style={{
                          fontWeight: 500,
                          fontSize: 16,
                          letterSpacing: 0.5
                        }}
                        className={`secondary welcome gtmCuentPasoUnoSiguiente${
                          selectedType === 1 ? 'Pers' : 'Emp'
                        }`}
                        classCustom="btn-size"
                      />
                    </ButtonStyle>
                  ) : (
                    selectedButtonNext(0)
                  )}
                </div>
              </div>
            </div>
          </div>
        </ContainerSlider>
      </div>
    </>
  )
}

export const Welcome = props => {
  return <WelcomeComponent {...props} data={dataWelcome}></WelcomeComponent>
}

export default connect()(Welcome)
