import { disableBody, enableBody } from '../../../utils/body-scroll-lock'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addStatusMenu } from '../../../actions/home/home'
import { ReactComponent as IsClosedIcon } from '../../../assets/images/more-vertical.svg'
import { ReactComponent as X } from '../../../assets/images/x-mega-menu-icon-cierre.svg'
import { ID_OPTION_MENU_OPEN_SALESFORCE_FORM } from '../../../const/dictionary/general-const'
import {
  deleteDataBases,
  updateHostUser
} from '../../../services/service-indexDB/service-indexDB'
import { sendGaPush } from '../../../utils/classGtmUtil'
import { getSizeScreenClass } from '../../../utils/handleResize'
import { redirectHome } from '../../../utils/home-configuration'
import { getDataUserRedux, ReactiveData } from '../../../utils/redux-reactive'
import { Container } from '../../FlexBox/FlexBox'
import MegaMenu from './mega-menu/mega-menu'
import MenuHamburger from './menu-hamburger/menu-hamburger'
import './menu.scss'

const MenuCloseStyle = styled.div`
  background: ${props =>
    props.theme.colors ? props.theme.colors.background : null} !important;
  transition: ${props => props.theme.animation};
`

const TutorialContainer = styled.div`
  cursor: pointer;
  color: ${props =>
    props.theme.colors &&
    props.theme.colors.menuMobile.colorOpcionesTitle}} !important;
`

const MenuCloseButtonStyleDesktop = styled.button`
  border-bottom: ${props =>
      props.theme.colors && props.theme.colors.header.borderMenu}
    solid
    ${props =>
      props.categoryDefaulft === 'Inversión'
        ? props.theme.name === 'dark'
          ? '#fff'
          : '#292730'
        : props.theme.colors && props.theme.colors.header.menuColor} !important;
  border-top: ${props =>
      props.theme.colors && props.theme.colors.header.borderMenu}
    solid
    ${props =>
      props.categoryDefaulft === 'Inversión'
        ? props.theme.name === 'dark'
          ? '#fff'
          : '#292730'
        : props.theme.colors && props.theme.colors.header.menuColor} !important;

  transition: ${props => props.theme.animation};
  border-right: transparent !important;
  border-left: ${props =>
      props.theme.colors && props.theme.colors.header.borderMenu}
    solid
    ${props =>
      props.categoryDefaulft === 'Inversión'
        ? props.theme.name === 'dark'
          ? '#fff'
          : '#292730'
        : props.theme.colors && props.theme.colors.header.menuColor} !important;
`

const MenuCloseLabelStyle = styled.div`
  color: ${props =>
    props.theme.colors && props.theme.colors.header.menuColor} !important;

  transition: ${props => props.theme.animation};
  & > span {
    & > svg {
      & > path {
        fill: ${props =>
          props.theme.colors &&
          (props.isInversion
            ? props.theme.name === 'dark'
              ? '#fff'
              : '#292730'
            : props.theme.colors.header.menuColor)} !important;
      }
    }
  }

  & > svg {
    & > path {
      fill: ${props =>
        props.theme.colors &&
        (props.isInversion
          ? props.theme.name === 'dark'
            ? '#fff'
            : '#292730'
          : props.theme.colors.header.menuColor)} !important;
    }
  }
`

const SvgStyle = styled.div`
  & > svg {
    & > path {
      fill: ${props =>
        props.theme.colors && props.theme.colors.header.menuColor} !important;
    }
  }
`
const IconoVerTutorialMobile = styled.svg`
  background: ${props => props.theme.colors.menuMobile.iconoVerTutorialMobile};
  background-repeat: no-repeat;
  max-width: 24px;
  max-height: 24px;
  margin: 12px 12px 13px 16px;
`

let Menu = ({
  isOpen,
  user,
  isPrehome,
  nameUser,
  openModalSalesforce,
  indexDBUserName,
  currentWidth,
  services,
  isNotUser,
  perfilamiento,
  dataMenu,
  dispatch,
  settypeUser,
  indexDBUserNames,
  nameUsers,
  setIsOpenMenu,
  isStepTourGuideActive,
  isTourOpen,
  lineaActual,
  typeUserValue,
  active,
  IconTypeEmpre,
  validateStreetCard,
  OpenEventTour,
  subCategoryDefaulft,
  categoryDefaulft,
  typeDefault,
  isActiveAccesibility,
  setActiveAccesibilty,
  accessibility,
  setAnimationSobra
}) => {
  const [name, setname] = useState('')
  const [typeUser, setTypeUser] = useState(1)
  const [category, setcategory] = useState('')
  const [subcategory, setsubcategory] = useState('')
  const [welcome, setwelcome] = useState('¡Hola!')
  const [isOpenMenu, setisOpenMenu] = useState(isOpen)
  const [isService, setisService] = useState(false)
  const [isFirstClick, seIsFirstClick] = useState(false)
  const [soluciones, setsoluciones] = useState(false)
  const [click, setclick] = useState(false)
  const [servicesData, setServicesData] = useState(services)
  const [modalClosedmenu, setmodalClosedmenu] = useState(false)
  const mapPension = {
    'pension-invalidez': 'Invalidez',
    sobrevivencia: 'sobrevivencia',
    'pension-vejez': 'vejez',
    pensionado: 'pensionado',
    inexperto: 'Estoy Aprendiendo',
    experto: 'Conozco de Inversiones'
  }
  const isBrowser = typeof window !== 'undefined'
  const locationHref = isBrowser ? window.location.href : ''
  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

  useEffect(() => {
    setAnimationSobra(isOpenMenu)
  }, [isOpenMenu])

  const getDataUsersRedux = () => {
    getDataUserRedux(
      user,
      nameUser,
      setname,
      setcategory,
      mapPension,
      setsubcategory,
      setisService,
      indexDBUserName
    )
  }

  useEffect(() => {
    ReactiveData(
      setwelcome,
      name,
      services,
      setServicesData,
      nameUser,
      setTypeUser,
      perfilamiento,
      setcategory,
      mapPension,
      setsubcategory
    )
  }, [name, services, nameUser, perfilamiento])

  useEffect(getDataUsersRedux, [user, nameUser, indexDBUserName])

  useEffect(() => {
    dispatch(addStatusMenu(isOpenMenu))
  }, [isOpenMenu])

  const deleteDataBaseUser = () => {
    deleteDataBases()
  }

  const onToggleModalSalesforce = (eventTarget, idOption) => {
    if (idOption === ID_OPTION_MENU_OPEN_SALESFORCE_FORM.soliciteAsesoria) {
      eventTarget.preventDefault()
      openModalSalesforce()
    }
  }

  const openModal = () => {
    if (getSizeScreenClass() >= 1024) {
      disableBody()
    }
  }

  const closeModal = () => {
    if (getSizeScreenClass() >= 1024) {
      enableBody()
    }
  }

  useEffect(() => {
    if (isOpenMenu) {
      openModal()
    } else {
      closeModal()
    }
  }, [isOpenMenu])

  const getClassBlock = lineBlock => {
    if (
      (typeDefault === 1 && lineBlock === 'Ahorro') ||
      (typeDefault === 1 && lineBlock === 'Inversión') ||
      typeDefault === 2
    ) {
      return true
    }
    return false
  }

  const changesPerfilamiento = titleClick => {
    if (getClassBlock(titleClick)) {
      updateHostUser({ category: titleClick, subcategory: '' })
      window.location.href = `${locationHref}`
      const lines = {
        category: titleClick,
        type: typeDefault
      }
      if (lines) {
        redirectHome(lines)
      }
    } else {
      let splitUrl = window.location.pathname.split('/')
      if (splitUrl.indexOf('home') >= 0) {
        window.location.href = `${locationHref}?tipoCliente=${typeDefault}&linea=${titleClick}&changeModal=true`
      } else {
        window.location.href = `${window.location.origin}${prefix}home/${
          typeDefault === 1 ? 'personas' : 'empresas'
        }/${
          titleClick === 'Ahorro'
            ? 'ahorro'
            : titleClick === 'Cesantías'
            ? 'cesantias'
            : titleClick === 'Inversión'
            ? 'inversion'
            : titleClick === 'Pensión'
            ? 'pension'
            : ''
        }?tipoCliente=${typeDefault}&linea=${titleClick}&changeModal=true`
      }
    }
  }

  useEffect(() => {
    window.document.getElementById('peperoni-container-link-0')?.focus()
  }, [isOpenMenu])

  const showMenu = (menuType, showText) => {
    // return isOpenMenu && isPrehome && !isTourOpen ? (
    //   <React.Fragment>
    //     {currentWidth >= 1024 ? (
    //       <MenuCloseStyle
    //         className={`menu-pizza-closed ${
    //           !isStepTourGuideActive
    //             ? isOpenMenu
    //               ? 'menu-pizza-closed-buttton-true'
    //               : 'menu-pizza-closed-buttton-false'
    //             : ''
    //         } ${
    //           isStepTourGuideActive ? 'active-menu-tour-guide' : ''
    //         }  gtmHomeSupMenu `}
    //       >
            {/* <MenuCloseButtonStyleDesktop
              className={`menu-pizza-closed-buttton-closed${
                lineaActual === 'Inversión' ? '-dark' : ''
              } gtmHomeSupMenu`}
              data-tut="reactour__menu"
              onClick={() => {
                setisOpenMenu(false)
                if (!isFirstClick) seIsFirstClick(true)
                sendGaPush('Home', 'ClicSuperior', 'Menu')
              }}
              id="btn-cerrar"
              onKeyDown={() => {
                setisOpenMenu(false)
                if (!isFirstClick) seIsFirstClick(true)
                sendGaPush('Home', 'ClicSuperior', 'Menu')
              }}
              role="presentation"
              categoryDefaulft={categoryDefaulft}
              tabIndex="0"
            >
              <MenuCloseLabelStyle
                isInversion={lineaActual === 'Inversión'}
                className="menu-pizza-closed-title gtmHomeSupMenu"
              >
                <span
                  className={
                    accessibility
                      ? lineaActual === 'Inversión' && !accessibility.darkMode
                        ? 'dark-mode-text gtmHomeSupMenu'
                        : 'gtmHomeSupMenu'
                      : 'gtmHomeSupMenu'
                  }
                >
                  <X
                    className={
                      accessibility
                        ? accessibility.darkMode
                          ? 'gtmHomeSupVolvVerTut x-mode-dark'
                          : 'gtmHomeSupVolvVerTut'
                        : 'gtmHomeSupVolvVerTut'
                    }
                    alt="image de cierre del menu"
                  />
                </span>
              </MenuCloseLabelStyle>
            </MenuCloseButtonStyleDesktop> */}
    //       </MenuCloseStyle>
    //     ) : null}
    //     {menuType}
    //   </React.Fragment>
    // ) : isPrehome ? (
    //   <MenuCloseStyle
    //     className={`menu-pizza-closed ${
    //       !isStepTourGuideActive
    //         ? isOpenMenu
    //           ? 'menu-pizza-closed-buttton-false'
    //           : 'menu-pizza-closed-buttton-true'
    //         : ''
    //     } ${
    //       isStepTourGuideActive ? 'active-menu-tour-guide' : ''
    //     }  gtmHomeSupMenu `}
    //   >
    //     <MenuCloseButtonStyleDesktop
    //       categoryDefaulft={categoryDefaulft}
    //       data-tut="reactour__menu"
    //       className={`menu-pizza-closed-buttton${
    //         lineaActual === 'Inversión' ? '-dark' : ''
    //       } gtmHomeSupMenu`}
    //       id="btn-abrir"
    //       onClick={() => {
    //         setisOpenMenu(true)
    //         if (!isFirstClick) seIsFirstClick(true)
    //         sendGaPush('Home', 'ClicSuperior', 'Menu')
    //       }}
    //       role="presentation"
    //       onKeyDown={event => {
    //         if (event.keyCode === 13) {
    //           if (!isFirstClick) seIsFirstClick(true)
    //           sendGaPush('Home', 'ClicSuperior', 'Menu')
    //         }
    //       }}
    //       tabIndex="0"
    //     >
    //       <MenuCloseLabelStyle className="menu-pizza-closed-title gtmHomeSupMenu">
    //         <span
    //           className={
    //             lineaActual === 'Inversión'
    //               ? accessibility
    //                 ? !accessibility.darkMode
    //                   ? 'dark-mode-text gtmHomeSupMenu'
    //                   : 'gtmHomeSupMenu'
    //                 : 'gtmHomeSupMenu'
    //               : 'gtmHomeSupMenu'
    //           }
    //         >
    //           Menú
    //         </span>
    //       </MenuCloseLabelStyle>
    //       <SvgStyle>
    //         <IsClosedIcon
    //           style={{ cursor: 'pointer' }}
    //           className={
    //             isFirstClick
    //               ? !isOpenMenu
    //                 ? `${
    //                     lineaActual === 'Inversión'
    //                       ? accessibility
    //                         ? !accessibility.darkMode
    //                           ? 'dark-mode-img'
    //                           : ''
    //                         : ''
    //                       : ''
    //                   }  gtmHomeSupMenu`
    //                 : `${
    //                     lineaActual === 'Inversión'
    //                       ? accessibility
    //                         ? !accessibility.darkMode
    //                           ? 'dark-mode-img'
    //                           : ''
    //                         : ''
    //                       : ''
    //                   }`
    //               : isOpenMenu
    //               ? `${
    //                   lineaActual === 'Inversión'
    //                     ? accessibility
    //                       ? !accessibility.darkMode
    //                         ? 'dark-mode-img'
    //                         : ''
    //                       : ''
    //                     : ''
    //                 } gtmHomeSupMenu`
    //               : `${
    //                   lineaActual === 'Inversión'
    //                     ? !accessibility.darkMode
    //                       ? 'dark-mode-img'
    //                       : ''
    //                     : ''
    //                 }`
    //           }
    //           alt="Ícono en forma de óvalo con la palabra Menú, despliega las opciones a las que puedes acceder según el tipo de negocio en que te encuentres o cambiar a otro"
    //           title="Ícono de Menú del sitio"
    //         />
    //       </SvgStyle>
    //     </MenuCloseButtonStyleDesktop>
    //   </MenuCloseStyle>
    // ) : null
  }

  const ActiveTour = (
    <div
      id="container-menu-hamburger-call-to-action"
      className="container-menu-hamburger-call-to-action gtmHomeSupVolvVerTut"
      onClick={() => {
        if (window.location.pathname.indexOf('home') >= 0) {
          OpenEventTour()
          setisOpenMenu(false)
        }
      }}
    >
      <TutorialContainer
        id="container-menu-hamburger-call-to-action-a-img"
        className="container-menu-hamburger-call-to-action-a-img gtmHomeSupVolvVerTut"
      >
        <IconoVerTutorialMobile
          alt="Ícono de on/off para cerrar mi perfilamiento. Lleva al home donde puedes perfilarte nuevamente e ingresar como Persona o Empresa"
          title="ícono de Cerrar mi perfilamiento"
        />
      </TutorialContainer>
      <TutorialContainer
        id="container-menu-hamburger-call-to-action-a-text"
        className="container-menu-hamburger-call-to-action-a-text gtmHomeSupVolvVerTut"
      >
        <span className="gtmHomeSupVolvVerTut">Ver tutorial</span>
      </TutorialContainer>
    </div>
  )

  return (
    <React.Fragment>
      <div>
        <div
          id="isServices"
          style={{ visibility: 'hidden', position: 'absolute' }}
        >
          <label>{isService ? 'true' : 'false'}</label>
        </div>
        {currentWidth <= 1024 ? (
          <Container
            style={{
              height: isOpenMenu ? '100%' : '100px',
              width: isOpenMenu ? '100%' : '28%',
              zIndex: isOpenMenu ? 12 : 7,
              position: isOpenMenu ? 'fixed' : 'absolute'
            }}
            className={
              'container-menus-hambuger' +
              (isStepTourGuideActive
                ? ' active-tour-guide' +
                  (lineaActual === 'Inversión' ? '-inv' : '')
                : '')
            }
          >
            {showMenu(
              // <MenuHamburger
              //   welcome={welcome}
              //   dispatch={dispatch}
              //   name={name}
              //   isService={isService}
              //   setisOpenMenu={setisOpenMenu}
              //   isOpenMenu={isOpenMenu}
              //   subcategory={subcategory}
              //   category={category}
              //   deleteDataBaseUser={deleteDataBaseUser}
              //   onToggleModalSalesforce={onToggleModalSalesforce}
              //   services={servicesData}
              //   isNotUser={isNotUser}
              //   typeUser={typeUser}
              //   dataMenuOptions={dataMenu}
              //   settypeUser={settypeUser}
              //   indexDBUserNames={indexDBUserNames}
              //   nameUsers={nameUsers}
              //   setIsOpenMenu={setIsOpenMenu}
              //   lineaActual={lineaActual}
              //   active={active}
              //   typeUserValue={typeUserValue}
              //   IconTypeEmpre={IconTypeEmpre}
              //   validateStreetCard={validateStreetCard}
              //   OpenEventTour={ActiveTour}
              //   subCategoryDefaulft={subCategoryDefaulft}
              //   categoryDefaulft={categoryDefaulft}
              //   typeDefault={typeDefault}
              //   isActiveAccesibility={isActiveAccesibility}
              //   setActiveAccesibilty={setActiveAccesibilty}
              //   accessibility={accessibility}
              //   changesPerfilamiento={changesPerfilamiento}
              // />,
              false
            )}
          </Container>
        ) : currentWidth > 1024 && currentWidth < 9999 ? (
          <div
            className={
              (isOpenMenu
                ? !modalClosedmenu
                  ? `container-menus-pizza`
                  : 'container-menus-pizza-click'
                : `container-menus-pizza-false`) +
              (isStepTourGuideActive ? ' active-tour-guide' : '')
            }
            tabIndex="-1"
            onBlur={e => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setisOpenMenu(false)
              }
            }}
          >
            {showMenu(
              // <MegaMenu
              //   isDarkMode={accessibility.darkMode}
              //   welcome={welcome}
              //   name={name}
              //   isService={isService}
              //   setisOpenMenu={setisOpenMenu}
              //   isOpenMenu={isOpenMenu}
              //   subcategory={subcategory}
              //   onToggleModalSalesforce={onToggleModalSalesforce}
              //   category={category}
              //   deleteDataBaseUser={deleteDataBaseUser}
              //   setclick={setclick}
              //   setsoluciones={setsoluciones}
              //   click={click}
              //   soluciones={soluciones}
              //   setmodalClosedmenu={setmodalClosedmenu}
              //   services={servicesData}
              //   isNotUser={isNotUser}
              //   typeUser={typeUser}
              //   dataMenuOptions={dataMenu}
              //   OpenEventTour={OpenEventTour}
              //   subCategoryDefaulft={subCategoryDefaulft}
              //   categoryDefaulft={categoryDefaulft}
              //   typeDefault={typeDefault}
              //   changesPerfilamiento={changesPerfilamiento}
              // />,
              false
            )}
          </div>
        ) : null}
      </div>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    user: state.youcantmiss,
    nameUser: state.welcome,
    perfilamiento: state.home,
    accessibility: state.accesibility
  }
}
Menu = connect(mapStateToProps)(Menu)

export default Menu
