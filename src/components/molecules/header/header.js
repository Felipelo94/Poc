import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { useCurrentWidth } from 'react-socks'
import styled from 'styled-components'
import { disableBody, enableBody } from '../../../utils/body-scroll-lock'
import {
  addInfoAccessibilityDark,
  addInfoAccessibilityFont,
  addInfoAccessibilityLine
} from '../../../actions/accessibility/accessibility'
import { addInfoPerfil } from '../../../actions/home/home'
import { addInfoName } from '../../../actions/welcome/welcome'
import { addInfoUser } from '../../../actions/You-cant-miss/You-cant-miss'
import bgYellowUserType from '../../../assets/images/bg-icono-tipo-publico.svg'
import globe from '../../../assets/images/globe.svg'
import { ReactComponent as LogotipoBlancoMobileDark } from '../../../assets/images/logo-proteccion_30_años_mobile_dark.svg'
import logotipoBlanco from '../../../assets/images/logotipo-azul.png'
import logotipoDark from '../../../assets/images/logotipo-azul.png'
import logotipoBlancoTable from '../../../assets/images/logotipo-azul.png'
import logotipoDarkTable from '../../../assets/images/logotipo-claro.png'
import { ReactComponent as LogotipoBlancoMobile } from '../../../assets/images/logotipo-proteccion.svg'
import useMenuOptions from '../../../hooks/useMenuOptions'
import { get } from '../../../services/service-general/service-general'
import Salesforce from '../salesforce/salesforce'
import {
  deleteDataBases,
  getDataIb
} from '../../../services/service-indexDB/service-indexDB'
import dataIndex from '../../../utils/contenidosPrehomeValue.json'
import { sendUserDataRedux } from '../../../utils/ReduxDataUtil'
import Button from '../../atoms/button/button'
import Modal from '../../atoms/modal/modal'
import { Container } from '../../FlexBox/FlexBox'
import AccessibilityMenu from '../accessibility-menu/accessibility-menu'
import IndexComponents from '../index'
import Menu from '../menu/menu'
import QuickAccess from '../quick-access/quick-access'
import Search from '../search/search'
import UsersType from '../users-type/users-type'
import UserPerson from '../users-type/users-type-header/user-person'
import UserCompany from '../users-type/users-type-header/user-company'
import {
  URL_LOGIN_AFILIADOS,
  URL_LOGIN_EMPRESAS
} from '../../../utils/paramApplication'
import Anchor from '../../atoms/anchor/anchor'
import './header.scss'

const ContainerStyled = styled.div`
  background-color: ${props =>
    props.theme.colors ? props.theme.colors.background : null} !important;
  transition: ${props => props.theme.animation};
  border-top: ${props =>
    props.theme.colors ? props.theme.colors.header.borderTop : null} !important;
  border-bottom: ${props =>
    props.theme.colors
      ? props.theme.colors.header.borderBottom
      : null} !important;
`

export let HeaderComponent = (
  {
    showTypePerson,
    customStyles,
    isOpenMenu,
    indexDBUserName,
    getF,
    getInfoDb,
    dispatch,
    isNotUser,
    defaultTypeUser = '',
    defaultCategoryUser = '',
    defaultSubcategoryUser = '',
    showQuickAccess = true,
    perfilamiento,
    nameUser,
    typeCliente,
    isStepTourGuideActive,
    isTourOpen,
    isTourGuideActive,
    validateStreetCard,
    OpenEventTour,
    indexDBUser,
    enabledAccessibility,
    accessibility
  },
  props
) => {
  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

  const [toggleModalSalesforce, setToggleModalSalesforce] = useState(false)
  const [IsOpenMenu, setIsOpenMenu] = useState(false)
  const [typeUser, settypeUser] = useState(false)
  const [typeUserValue, settypeUserValue] = useState()
  const [indexDBUserNames, setindexDBUserNames] = useState('')
  const [animation, setanimation] = useState(true)
  const [animationSobra, setAnimationSobra] = useState(false)
  const [dataMenu, setDataMenu] = useState([])
  const [lineaActual, setLineaActual] = useState(
    perfilamiento.categoria === ''
      ? indexDBUserNames.category
      : perfilamiento.categoria
  )
  const [logoImageSource, setLogoImageSource] = useState(logotipoBlanco)

  const isBrowser = typeof window !== 'undefined'
  const isActiveMenuAcc = isBrowser
    ? localStorage.getItem('accessibility-menu-open') === 'true'
    : null
  const [isActiveAccesibility, setIsActiveAccesibility] = useState(
    isActiveMenuAcc
  )

  useEffect(() => {
    if (enabledAccessibility) {
      enabledAccessibility(isActiveAccesibility)
    }
  }, [isActiveAccesibility])

  useEffect(() => {
    const isActiveMenuAccGet = isBrowser
      ? localStorage.getItem('accessibility-menu-open') === 'true'
      : null
    setIsActiveAccesibility(isActiveMenuAccGet)
    selectLogoImageSource()
  }, [])

  const validateAccesibilityField = () => {
    if (isBrowser) {
      const line = localStorage.getItem('accessibility-line-height')
      const font = localStorage.getItem('accessibility-font-size')
      const darkMode = localStorage.getItem('accessibility-hight-contrast')
      dispatch(
        addInfoAccessibilityLine(
          line ? Number(line) : window.location.href.includes('home') ? 1 : 6
        )
      )
      dispatch(
        addInfoAccessibilityFont(
          font ? Number(font) : window.location.href.includes('home') ? 1 : 2
        )
      )
      dispatch(addInfoAccessibilityDark(darkMode ? darkMode === 'true' : false))
    }
  }

  const width = useCurrentWidth()

  useEffect(() => {
    if (indexDBUser !== '') {
      const googleSearch = document.createElement('script')
      googleSearch.src =
        'https://cse.google.com/cse.js?cx=010906632929058965901:9qtmxior6a8'
      googleSearch.async = true
      document.head.appendChild(googleSearch)
    }
  }, [indexDBUser])

  useEffect(() => {
    validateAccesibilityField()
    sendUserDataRedux(
      getInfoDb,
      setindexDBUserNames,
      getF,
      dispatch,
      addInfoUser
    )
  }, [])

  useEffect(() => {
    const typeParam =
      perfilamiento.categoria !== '' ? nameUser.typeUser : indexDBUserNames.type
    settypeUserValue(typeParam)

    setLineaActual(
      perfilamiento.categoria === ''
        ? indexDBUserNames.category
        : perfilamiento.categoria
    )
  }, [perfilamiento, indexDBUserNames])

  const deleteDataBaseUser = () => {
    deleteDataBases()
  }

  const closeModal = () => {
    setIsOpenMenu(false)
    dispatch(
      addInfoName(
        indexDBUser ? indexDBUser.nameuser : indexDBUserNames.nameuser,
        indexDBUser ? indexDBUser.type : indexDBUserNames.type
      )
    )
    dispatch(
      addInfoPerfil(
        indexDBUser ? indexDBUser.category : indexDBUserNames.category,
        indexDBUser ? indexDBUser.subcategory : indexDBUserNames.subcategory
      )
    )

    document.body.style.overfloy = 'scroll'
    document.documentElement.style.overflow = null
    document.documentElement.style.overflowX = 'scroll'
    document.body.style.overflowX = null
  }

  let scrollPos = 0
  if (isBrowser) {
    window.addEventListener('scroll', function() {
      if (document.body.getBoundingClientRect().top >= scrollPos) {
        setanimation(true)
      } else if (!document.body.getBoundingClientRect().top > scrollPos) {
        setanimation(false)
      }
      scrollPos = document.body.getBoundingClientRect().top
    })
  }

  const modal = (
    <Modal
      close={closeModal}
      style={{ overflow: 'auto' }}
      id="encuesta-home"
      image={globe}
      titte="proteccion.com"
      alt="icon-encuesta"
      height="90%"
      width={width > 1024 ? '50%' : '90%'}
      margin=" 30px 0px "
      isCosed={false}
      isLogo={true}
    >
      <IndexComponents
        {...props}
        pageContext={props.pageContext}
        data={dataIndex}
        getF={get}
        resetData={true}
        getInfoDB={getDataIb}
        eventClose={() => {
          enableBody(document.body)
        }}
        dataContefull={props.data}
        layaout={false}
        next={() => {
          setIsOpenMenu(false)
          setMockup(false)
          servicesIndexbd()
          document.body.style.overflowY = 'scroll'
          document.documentElement.style.overflow = null
        }}
        deleteDataBaseUser={() => {
          deleteDataBaseUser()
        }}
        typeUser={indexDBUser ? indexDBUser.type : indexDBUserNames.type}
      />
    </Modal>
  )

  const openModalSalesforce = () => {
    setToggleModalSalesforce(prevState => !prevState)
    if (width <= 1024) {
      document.documentElement.style.overflowX = 'hidden'
      document.body.style.overflowX = 'hidden'
    } else {
      disableBody()
    }
  }

  const closeModalSalesforce = () => {
    setToggleModalSalesforce(prevState => !prevState)
    if (width <= 1024) {
      document.body.style.overflowY = 'scroll'
      document.documentElement.style.overflow = null
    } else {
      enableBody()
    }
  }

  useEffect(() => {
    if (IsOpenMenu) {
      const element = document.getElementById('ipnut-edit-salesforce-product')
      if (element) {
        element.focus()
      }
    }
  }, [IsOpenMenu])

  const modalSalesforce = (
    <Modal
      close={closeModalSalesforce}
      styleBody={{ height: 'auto' }}
      id="modal-salesforce-inversion"
      animation={`container-modal-content-salesforce-inversion ${
        toggleModalSalesforce ? 'move' : ''
      }`}
      titte={''}
      image={null}
      height={width <= 1024 ? '100%' : '775px'}
      alt=""
      width={width <= 1024 ? '100%' : '787px'}
      margin={width <= 1024 ? '' : '159px 0px'}
      disabledCloseBody={true}
    >
      <iframe
        src={`${process.env.PROSPECTS_UTM_URL}Inversiones`}
        width={width <= 1024 ? '100%' : '670px'}
        height={width <= 1024 ? '1080px' : '695px'}
      />
    </Modal>
  )

  const { menuOptions } = useMenuOptions(
    indexDBUserNames?.type || defaultTypeUser,
    indexDBUserNames?.category || defaultCategoryUser,
    indexDBUserNames?.subcategory || defaultSubcategoryUser
  )

  useEffect(() => {
    const cleanDataMenu = dataDirty => {
      const newDataMenu = []
      dataDirty.map((items, index) =>
        newDataMenu.push({
          id: items.id,
          desciption: items.description,
          icon: index,
          order: items.order,
          options: items.suboptions,
          url: items.url
        })
      )
      return newDataMenu
    }
    const cleanMenuOptions = cleanDataMenu(menuOptions)
    setDataMenu(cleanMenuOptions)
  }, [menuOptions])

  const [quickAccessDefaultTypeUser, setQuickAccessDefaultTypeUser] = useState(
    defaultTypeUser
  )
  const [
    quickAccessDefaultCategoryUser,
    setQuickAccessDefaultCategoryUser
  ] = useState(defaultCategoryUser)
  const [
    quickAccessDefaultSubcategoryUser,
    setQuickAccessDefaultSubcategoryUser
  ] = useState(defaultSubcategoryUser)

  useEffect(() => {
    setQuickAccessDefaultTypeUser(indexDBUserNames?.type || defaultTypeUser)

    setQuickAccessDefaultCategoryUser(
      indexDBUserNames?.category || defaultCategoryUser
    )

    setQuickAccessDefaultSubcategoryUser(
      indexDBUserNames?.subcategory || defaultSubcategoryUser
    )
  }, [indexDBUserNames])

  const selectClassName = () => {
    let classNameStyle = ''
    if (perfilamiento) {
      if (perfilamiento.categoria !== '' || typeCliente || indexDBUserNames) {
        if (
          nameUser.typeUser === 2 ||
          typeCliente?.[0].nombre === 'Empleador' ||
          indexDBUserNames.type === 2
        ) {
          classNameStyle = 'lineInital-blue'
        } else {
          classNameStyle = 'lineInital'
        }
      }
    } else {
      classNameStyle = 'lineInital'
    }
    return classNameStyle
  }

  const selectLogoImageSource = () => {
    let logoImgSource

    if (accessibility) {
      if (
        accessibility.darkMode &&
        (isBrowser ? window.location.pathname.indexOf('home') >= 0 : false)
      ) {
        if (useCurrentWidth() > 1200) {
          logoImgSource = logotipoDark
        } else {
          logoImgSource = logotipoBlancoTable
        }
      } else {
        if (width > 1200) {
          logoImgSource = logotipoBlanco
        } else {
          logoImgSource = logotipoDarkTable
        }
      }
    } else {
      logoImgSource = logotipoBlancoTable
    }

    setLogoImageSource(logoImgSource)
  }

  return (
    <header
      id="lineInital-header"
      style={{ position: isTourGuideActive ? 'relative' : 'sticky' }}
    >
      <div className="container-modal-salesforce">
        {toggleModalSalesforce && modalSalesforce}
      </div>
      {typeUser && IsOpenMenu && modal}
      <Helmet>
        <meta
          name="facebook-domain-verification"
          content="vqw769x2iqwmnqdx1xocn2dusrruis"
        />
      </Helmet>
      <div id="lineInital" className={selectClassName} />
      <ContainerStyled style={customStyles} className="header" id="header">
        <div id="logo" className="logo">
          <Anchor
            id="logo-a"
            className="gtmHomeSupLogoProte"
            href={prefix}
            target="_self"
            tabIndex="0"
          >
            <div id="logo-container" className="gtmHomeSupLogoProte">
              {useCurrentWidth() > 1024 ? (
                <img
                  async
                  className="gtmHomeSupLogoProte"
                  src={logoImageSource}
                  alt="Logotipo de Protección, lleva al home principal o el home del producto donde estés logueado"
                  title="Logotipo de Protección"
                  id="Logo-image-30-anos"
                />
              ) : accessibility ? (
                accessibility.darkMode ? (
                  <LogotipoBlancoMobileDark
                    id="Logo-image-30-anos"
                    className="gtmHomeSupLogoProte"
                    alt="Logotipo de Protección, lleva al home principal o el home del producto donde estés logueado"
                    title="Logotipo de Protección"
                  />
                ) : (
                  <LogotipoBlancoMobile
                    className="gtmHomeSupLogoProte"
                    id="Logo-image-30-anos"
                    title="Logotipo de Protección"
                    alt="Logotipo de Protección, lleva al home principal o el home del producto donde estés logueado"
                  />
                )
              ) : (
                <LogotipoBlancoMobile
                  title="Logotipo de Protección"
                  alt="Logotipo de Protección, lleva al home principal o el home del producto donde estés logueado"
                  id="Logo-image-30-anos"
                  className="gtmHomeSupLogoProte"
                />
              )}
            </div>
          </Anchor>
          {showTypePerson && width > 1024 && width < 9999 ? (
            <UsersType
              settypeUser={settypeUser}
              indexDBUserNames={indexDBUserNames}
              nameUser={nameUser}
              setIsOpenMenu={setIsOpenMenu}
              validateStreetCard={validateStreetCard}
              typeDefault={
                perfilamiento.categoria !== ''
                  ? nameUser.typeUser
                  : indexDBUserNames.type
              }
              userPerson={
                <UserPerson
                  indexDBUserNames={indexDBUserNames}
                  nameUser={nameUser}
                  typeDefault={
                    perfilamiento.categoria !== ''
                      ? nameUser.typeUser
                      : indexDBUserNames.type
                  }
                  typeUserValue={typeUserValue}
                  active={bgYellowUserType}
                  accessibility={accessibility}
                  lineaActual={lineaActual}
                />
              }
              userCompany={
                <UserCompany
                  indexDBUserNames={indexDBUserNames}
                  nameUser={nameUser}
                  typeDefault={
                    perfilamiento.categoria !== ''
                      ? nameUser.typeUser
                      : indexDBUserNames.type
                  }
                  typeUserValue={typeUserValue}
                  active={bgYellowUserType}
                  accessibility={accessibility}
                  lineaActual={lineaActual}
                />
              }
            />
          ) : null}
        </div>
        {showTypePerson && (
          <Search
            lineaActual={lineaActual}
            isActiveAccesibility={isActiveAccesibility}
            setActiveAccesibilty={() => {
              if (isActiveAccesibility) {
                localStorage.setItem(
                  'accessibility-menu-open',
                  !isActiveAccesibility
                )
                setIsActiveAccesibility(!isActiveAccesibility)
              } else {
                localStorage.setItem('accessibility-menu-open', true)
                setIsActiveAccesibility(true)
              }
            }}
            isDark={lineaActual === 'Inversión'}
          />
        )}

        {showTypePerson ? (
          <Container
            className={
              typeUserValue === 1
                ? ' gtmHomeSupZonaTransacPers'
                : ' gtmHomeSupZonaTransacEmp'
            }
            style={{ marginRight: '8%' }}
          >
            <div
              id="btn-transacciones"
              className={
                'btn-transacciones-header' +
                (typeUserValue === 1
                  ? ' gtmHomeSupZonaTransacPers'
                  : ' gtmHomeSupZonaTransacEmp')
              }
            >
              <a
                target="_blank"
                rel="noreferrer"
                className={
                  typeUserValue === 1
                    ? 'gtmHomeSupZonaTransacPers'
                    : 'gtmHomeSupZonaTransacEmp'
                }
                style={{
                  textDecoration: 'none'
                }}
                href={
                  typeUserValue === 1 ? URL_LOGIN_AFILIADOS : URL_LOGIN_EMPRESAS
                }
              >
                <Button
                  title="Zona Transaccional"
                  classGtm={
                    typeUserValue === 1
                      ? ' gtmHomeSupZonaTransacPers'
                      : ' gtmHomeSupZonaTransacEmp'
                  }
                  className={
                    lineaActual !== 'Inversión' ? 'primary' : 'primary-dark'
                  }
                />
              </a>
            </div>
            <Menu
              isOpen={width > 1024 && isOpenMenu}
              setAnimationSobra={setAnimationSobra}
              openModalSalesforce={openModalSalesforce}
              isPrehome={true}
              currentWidth={width}
              indexDBUserName={indexDBUserName}
              services={indexDBUserNames}
              isNotUser={isNotUser}
              dataMenu={dataMenu}
              settypeUser={settypeUser}
              indexDBUserNames={indexDBUserNames}
              nameUsers={nameUser}
              setIsOpenMenu={setIsOpenMenu}
              lineaActual={lineaActual}
              active={bgYellowUserType}
              typeUserValue={typeUserValue}
              isActiveAccesibility={isActiveAccesibility}
              setActiveAccesibilty={result => {
                localStorage.setItem('accessibility-menu-open', result)
                setIsActiveAccesibility(result)
              }}
              isStepTourGuideActive={isStepTourGuideActive}
              isTourOpen={isTourOpen}
              validateStreetCard={validateStreetCard}
              OpenEventTour={OpenEventTour}
              typeDefault={indexDBUserNames?.type || defaultTypeUser}
              categoryDefaulft={
                indexDBUserNames?.category || defaultCategoryUser
              }
              subCategoryDefaulft={
                indexDBUserNames?.subcategory || defaultSubcategoryUser
              }
            />
          </Container>
        ) : (
          <div
            style={{ width: '100%', justifyContent: 'flex-end' }}
            className={
              'btn-transacciones-header' +
              (typeUserValue === 1
                ? ' gtmHomeSupZonaTransacPers'
                : ' gtmHomeSupZonaTransacEmp')
            }
            id="btn-transacciones"
          >
            <Anchor
              target="_blank"
              rel="noreferrer"
              className={
                typeUserValue === 1
                  ? 'gtmHomeSupZonaTransacPers'
                  : 'gtmHomeSupZonaTransacEmp'
              }
              style={{
                textDecoration: 'none'
              }}
              href={
                'https://protecciond1.b2clogin.com/ProteccionD1.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_signin&client_id=a73df676-c8c9-48b7-ab28-0c23c676ae4f&redirect_uri=https%3A%2F%2Fwww.proteccion.com%2Fwps%2Fportal%2Fproteccion%2Fweb%2Fhome%2Fingreso-afiliados-pensionados%2F&scope=openid&response_type=id_token&response_mode=form_post&prompt=login'
              }
            >
              <Button
                classGtm={
                  typeUserValue === 1
                    ? ' gtmHomeSupZonaTransacPers'
                    : ' gtmHomeSupZonaTransacEmp'
                }
                title="Zona Transaccional"
                className={
                  lineaActual !== 'Inversión' ? 'primary' : 'primary-dark'
                }
              />
            </Anchor>
          </div>
        )}
      </ContainerStyled>
      <div
        className={width > 1024 && animationSobra ? 'container-modal' : null}
        style={{ zIndex: -1 }}
      />
      {width > 1024 ? (
        <AccessibilityMenu
          isDarkMode={accessibility ? accessibility.darkMode : false}
          isActiveAccesibility={isActiveAccesibility}
          enabledDarkMode={
            process.env.isDarkMode === 'true'
              ? !(isBrowser
                  ? window.location.pathname === prefix ||
                    window.location.pathname.includes('home')
                  : false)
              : true
          }
          dispatch={dispatch}
          setActiveAccesibilty={() => {
            localStorage.setItem('accessibility-menu-open', false)
            setIsActiveAccesibility(false)
          }}
          typeCustomer={
            perfilamiento.categoria !== ''
              ? nameUser.typeUser
              : indexDBUserNames.type
          }
          categoryDefaulft={
            perfilamiento.categoria === ''
              ? indexDBUserNames.category
              : perfilamiento.categoria
          }
        />
      ) : null}
      {/* {isBrowser
        ? showQuickAccess && (
            <QuickAccess
              lineaActual={lineaActual}
              animation={animation}
              openModalSalesforce={openModalSalesforce}
              type={quickAccessDefaultTypeUser}
              category={quickAccessDefaultCategoryUser}
              subCategory={quickAccessDefaultSubcategoryUser}
            />
          )
        : null} */}
    </header>
  )
}

HeaderComponent.defaultProps = {
  showTypePerson: false,
  customStyles: {}
}

function mapStateToProps(state) {
  return {
    user: state.youcantmiss,
    nameUser: state.welcome,
    perfilamiento: state.home,
    accessibility: state.accesibility
  }
}

HeaderComponent = connect(mapStateToProps)(HeaderComponent)

export const Header = props => {
  return (
    <HeaderComponent
      {...props}
      indexDBUserName={props.indexDBUserName}
      indexDBUser={props.indexDBUser}
      getF={get}
      getInfoDb={getDataIb}
      isNotUser={props.isNotUser}
      typeCliente={props.typeCliente}
      isStepTourGuideActive={props.isStepTourGuideActive}
      isTourOpen={props.isTourOpen}
      isTourGuideActive={props.isTourGuideActive}
      validateStreetCard={props.validateStreetCard}
      OpenEventTour={props.OpenEventTour}
    />
  )
}

export default Header
