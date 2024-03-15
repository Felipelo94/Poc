import React, { useState, useEffect } from 'react'
import './menu-hamburger.scss'
import MenuInfoUsuario from '../../menu-info-usuario/menu-info-usuario'
import { Item } from '../../../FlexBox/FlexBox'
import MenuItemHamburger from '../../../atoms/menu-item-hamburger/menu-item-hamburger'
import Pronto from '../../../atoms/pronto/pronto'
import Button from '../../../atoms/button/button'
import AccessibilityMenu from '../../accessibility-menu/accessibility-menu'
import { connect } from 'react-redux'
import styled from 'styled-components'
import SkeletonMenuOptionMobile, {
  DEFAULT_OPTIONS_SIZE_MOBILE
} from '../../../atoms/skeleton-menu-option/skeleton-menu-option-mobile'
import UsersType from '../../users-type/users-type'
import UserPerson from '../../users-type/users-type-menu-accesibility-mobile/user-person'
import UserCompany from '../../users-type/users-type-menu-accesibility-mobile/user-company'
import AccessibilityMobile from '../../../atoms/accebility/accessibility-mobile'
import { clickWithScrollCenter } from '../../../../utils/commons-event-content'
import {
  URL_LOGIN_AFILIADOS,
  URL_LOGIN_EMPRESAS
} from '../../../../utils/paramApplication'
import NewPronto from '../../../atoms/pronto/new-pronto/new-pronto'
import Anchor from '../../../atoms/anchor/anchor'

const TutorialContainer = styled.div`
  cursor: pointer;
  color: ${props =>
    props.theme.colors &&
    props.theme.colors.homeMobile.biteResponsive.tutorial} !important;

  & > svg > path {
    fill: ${props =>
      props.theme.colors &&
      props.theme.colors.homeMobile.biteResponsive.tutorial} !important;
  }
`
const MenuBurgerContainer = styled.div`
  background: "${props =>
    props.theme.colors &&
    props.theme.colors.homeMobile.biteResponsive.ExitStreetColor} !important;"
`

const ListBurgerContainer = styled.div`
  background: "${props =>
    props.theme.colors &&
    props.theme.colors.homeMobile.biteResponsive.ExitStreetColor} !important";
`

const ContainerAccessibilityMenuStyled = styled.div`
  border-radius: 0px 0px 24px 4px;
  margin: 0;
  padding: 0;
  background: ${props =>
    props.theme.colors
      ? props.theme.colors.menuAccessibility.backgroundContainerMobile
      : null} !important;
`

const ContainerUserAccessibilityStyled = styled.div`
  border-radius: 0px 0px 24px 4px;
  padding: 0;
  background: ${props =>
    props.theme.colors
      ? props.theme.colors.menuAccessibility.backgroundContainerMobile
      : null} !important;
`

const OpcionesH4Styled = styled.h4`
  color: ${props => props.theme.colors.menuMobile.opcionesTitleH4};
  position: static;
  width: 208px;
  left: calc(50% - 208px / 2);
  top: 0%;
  bottom: 0%;
  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 25px;
  flex: none;
  order: 0;
  margin: 0px 10px;
  padding-bottom: 14px;
`

const BorderSubItemContainer = styled.div`
  border: 0.5px solid
    ${props =>
      props.theme.colors &&
      props.theme.colors.homeMobile.opcionMenuBurger.subItem} !important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

const TutorialTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 15px;
  justify-content: flex-start;
  color: ${props => props.theme.colors.menuMobile.colorOpcionesTitle};
`

const IconoPQRSMobile = styled.svg`
  background: ${props => props.theme.colors.menuMobile.iconoPQRS};
  background-repeat: no-repeat;
  max-width: 24px;
  max-height: 24px;
  margin: 12px 12px 13px 16px;
`
const IconoCerrarPerfilamientoMobile = styled.svg`
  background: ${props =>
    props.theme.colors.menuMobile.iconoCerrarPerfilamiento};
  background-repeat: no-repeat;
  max-width: 24px;
  max-height: 24px;
  margin: 12px 12px 13px 16px;
`

const TituloCategoriaProteccion = styled.span`
  color: ${props => props.theme.colors.menuMobile.opcionesTitleH4};
`

let MenuHamburger = ({
  welcome,
  isOpenMenu,
  setisOpenMenu,
  subcategory,
  category,
  isService,
  name,
  deleteDataBaseUser,
  onToggleModalSalesforce,
  services,
  isNotUser,
  typeUser,
  dataMenuOptions = [],
  settypeUser,
  indexDBUserNames,
  nameUsers,
  setIsOpenMenu,
  lineaActual,
  typeUserValue,
  active,
  IconTypeEmpre,
  validateStreetCard,
  OpenEventTour,
  subCategoryDefaulft,
  categoryDefaulft,
  typeDefault,
  dispatch,
  isActiveAccesibility,
  setActiveAccesibilty,
  accessibility,
  changesPerfilamiento
}) => {
  const isBrowser = typeof window !== 'undefined'
  const [modalOpen, setModalOpen] = useState(false)
  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'
  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = 'hidden'
      if (lineaActual !== 'Inversión') {
        document.body.style.position = 'fixed'
      }
    }
    return () => {
      document.body.style.position = null
      document.body.style.overflow = 'scroll'
      setActiveAccesibilty(false)
    }
  }, [isOpenMenu])
  const [itemSelected, setItemSelected] = useState('')

  const getCurrentUrlMobile = (options = []) => {
    return options.length > 1 ? '' : options?.[0]?.option?.url ?? ''
  }

  useEffect(() => {
    if (modalOpen) {
      window.location.href = `#container-menu-item-hamburger-subitems-item-header`
      window.onhashchange = function() {
        window.history.pushState('', document.title, window.location.pathname)
      }
    } else {
      clickWithScrollCenter(
        document.getElementById(`container-menu-hamburger-header`)
      )
    }
  }, [modalOpen])

  return (
    <div className="animated-menu-hamburger">
      <MenuBurgerContainer
        style={{
          transform: 'scaleX(-1)',
          overflow: modalOpen ? 'hidden' : '',
          overflowX: 'hidden'
        }}
        className="container-menu-hamburger"
      >
        <button
          className={
            isOpenMenu
              ? `container-button-menu-shadow  ripple btn-hamburger-ripper`
              : `btn-hamburger-ripper`
          }
        />

        <MenuInfoUsuario
          welcome={welcome}
          name={name}
          isService={isService}
          setisOpenMenu={setisOpenMenu}
          isOpenMenu={isOpenMenu}
          subcategory={subcategory}
          category={category}
          deleteDataBaseUser={deleteDataBaseUser}
          services={services}
          isNotUser={isNotUser}
          typeUser={typeUser}
          subCategoryDefaulft={subCategoryDefaulft}
          categoryDefaulft={categoryDefaulft}
          typeDefault={typeDefault}
          changesPerfilamiento={changesPerfilamiento}
        />
        <ContainerAccessibilityMenuStyled>
          <ContainerUserAccessibilityStyled className="container-user-accessibility">
            <UsersType
              settypeUser={settypeUser}
              indexDBUserNames={indexDBUserNames}
              nameUser={nameUsers}
              setIsOpenMenu={setIsOpenMenu}
              validateStreetCard={validateStreetCard}
              userPerson={
                <UserPerson isActive={indexDBUserNames?.type === 1} />
              }
              userCompany={
                <UserCompany isActive={indexDBUserNames?.type === 2} />
              }
            />
            <AccessibilityMobile
              isActiveAccessibility={isActiveAccesibility}
              setActiveAccessibilty={setActiveAccesibilty}
            />
          </ContainerUserAccessibilityStyled>
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
            typeCustomer={typeDefault}
            categoryDefaulft={categoryDefaulft}
            dispatch={dispatch}
            setActiveAccesibilty={setActiveAccesibilty}
          />
          <div className="container-menu-info-user-transaciones">
            <Anchor
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: 'none',
                width: '100%'
              }}
              href={
                typeDefault === 1 ? URL_LOGIN_AFILIADOS : URL_LOGIN_EMPRESAS
              }
            >
              <Button
                title="Zona Transaccional"
                className={
                  categoryDefaulft === 'Inversión' || typeDefault === 2
                    ? 'primary'
                    : 'secondary-border'
                }
              />
            </Anchor>
          </div>
        </ContainerAccessibilityMenuStyled>
        <div
          className="container-menu-hamburger-header"
          id="container-menu-hamburger-header"
        >
          <TituloCategoriaProteccion>{`${categoryDefaulft} Protección`}</TituloCategoriaProteccion>
        </div>
        <ListBurgerContainer className="container-menu-hamburger-list">
          <div className="line-subitem" />
          {dataMenuOptions.length === 0 &&
            DEFAULT_OPTIONS_SIZE_MOBILE.map(() => <SkeletonMenuOptionMobile />)}
          {dataMenuOptions.length > 0 &&
            dataMenuOptions.map((items, indexpeperoni) => {
              return (
                <Item key={indexpeperoni}>
                  <MenuItemHamburger
                    itemSelected={itemSelected}
                    setItemSelected={setItemSelected}
                    tittle={items.desciption}
                    more={getCurrentUrlMobile(items.options) === ''}
                    link={getCurrentUrlMobile(items.options)}
                    onToggleModalSalesforce={onToggleModalSalesforce}
                    classGtm={''}
                    services={services}
                    subcategory={subcategory}
                    options={items.options}
                    categoryDefaulft={categoryDefaulft}
                    accessibility={accessibility}
                    icon={items.icon}
                    url={items.url}
                    setModalOpen={setModalOpen}
                  />
                </Item>
              )
            })}
        </ListBurgerContainer>
        <OpcionesH4Styled>Opciones</OpcionesH4Styled>
        <TutorialContainer
          className="container-menu-hamburger-call-to-action-a-text"
          id="container-quick-access-pqrs-text"
          onClick={() => {
            deleteDataBaseUser()
            if (isNotUser) {
              isNotUser()
            }
          }}
        >
          <IconoCerrarPerfilamientoMobile
            id="cerrar-perfilamiento-icon"
            alt="Ícono de on/off para cerrar mi perfilamiento. Lleva al home donde puedes perfilarte nuevamente e ingresar como Persona o Empresa"
            title="ícono de Cerrar mi perfilamiento"
          />
          <TutorialTitle>Cerrar mi perfilamiento</TutorialTitle>
        </TutorialContainer>
        <BorderSubItemContainer />
        {process.env.IS_TOUR_GUIDE_ACTIVATED === 'true' && (
          <TutorialTitle>{OpenEventTour}</TutorialTitle>
        )}
        <BorderSubItemContainer />
        <Anchor
          href="https://www.proteccion.com/portalafiliados/afiliados/pqrs"
          className="chat container-quick-access-call-to-action-link chatbot-pronto-ancla"
          id="container-quick-access-pqrs"
          style={{
            cursor: 'pointer',
            textDecoration: 'none',
            color: '#626277',
            marginRight: 26,
            justifyContent: 'flex-start'
          }}
        >
          <div
            className="container-quick-access-call-to-action-link"
            role="presentation"
            style={{
              cursor: 'pointer',
              textDecoration: 'none',
              color: '#626277',
              justifyContent: 'flex-start'
            }}
          >
            <TutorialContainer className="container-quick-access-pqrs-image">
              <IconoPQRSMobile
                id="pqrs-icon"
                alt="Ícono de hoja con lápiz adentro, al darle clic activa el chat de Pronto para resolver tus PQRS. Debes ingresar tu número de cédula"
                aria-label="pqrs"
                title="Ícono de PQRS"
              />
            </TutorialContainer>
            <TutorialContainer
              className="container-menu-hamburger-call-to-action-a-text"
              id="container-quick-access-pqrs-text"
            >
              <TutorialTitle>PQRS</TutorialTitle>
            </TutorialContainer>
          </div>
        </Anchor>
        {process.env.NEW_PRONTO === 'true' ? (
          <NewPronto Hidden={true} />
        ) : (
          <Pronto Hidden={true} />
        )}
      </MenuBurgerContainer>
    </div>
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

MenuHamburger = connect(mapStateToProps)(MenuHamburger)

export default MenuHamburger
