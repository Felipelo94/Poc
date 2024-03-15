import { Link } from 'gatsby'
import Markdown from 'markdown-to-jsx'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as CloseMobileIcon } from '../../../assets/images/close-main.svg'
import { ReactComponent as LogoProteccionMobile } from '../../../assets/images/icons/logo_proteccion_mobile.svg'
import { ReactComponent as ImageMegaMenu } from '../../../assets/images/info-mega-menu.svg'
import { ReactComponent as XIcon } from '../../../assets/images/x.svg'
import { ReactComponent as IconInversionMobile } from '../../../assets/images/Icon-inversion-mobile-gris.svg'
import { ReactComponent as IconAhorroMobile } from '../../../assets/images/Icon-ahorro-mobile-gris.svg'
import { ReactComponent as IconCesantiasMobile } from '../../../assets/images/Icon-cesantias-mobile-gris.svg'
import { ReactComponent as IconPensionesMobile } from '../../../assets/images/Icon-pension-mobile-gris.svg'
import { sendGaPush } from '../../../utils/classGtmUtil'
import { useCurrentWidth } from 'react-socks'
import './menu-info-usuario.scss'
import Anchor from '../../atoms/anchor/anchor'

const MenuInfoStyled = styled.div`
  padding-bottom: -10px;
  .container-menu-info-user-title {
    color: ${props =>
      props.theme.colors && props.theme.colors.header.menu.colorTitle};
  }
  .container-menu-info-user-change-notIsUser {
    color: ${props =>
      props.theme.colors &&
      props.theme.colors.header.menu.colorSubTitle} !important;
  }
  .container-menu-info-close {
    filter: ${props =>
      props.theme.colors && props.theme.colors.header.menu.filterClose};
  }
  .container-menu-hamburger-call-to-action-a-text {
    color: ${props =>
      props.theme.colors &&
      props.theme.colors.header.menu.colorSubTitle} !important;
  }
  .container-menu-hamburger-call-to-action-a-img {
    filter: ${props =>
      props.theme.colors && props.theme.colors.header.menu.filterSubtitle};
  }
  a {
    color: ${props =>
      props.theme.colors &&
      props.theme.colors.header.menu.colorSubTitle} !important;
  }
`

const ContainerButtonClose = styled.div`
  border-top: 1px solid
    ${props => props.theme.colors.menuMobile.colorBorderButtonClose};
  border-bottom: 1px solid
    ${props => props.theme.colors.menuMobile.colorBorderButtonClose};
  border-left: 1px solid
    ${props => props.theme.colors.menuMobile.colorBorderButtonClose};
  .icon-button-close {
    path {
      fill: ${props => props.theme.colors.menuMobile.colorButtonClose};
    }
  }
`

const MenuInfoUsuario = ({
  name,
  welcome,
  category,
  subcategory,
  isService,
  setisOpenMenu,
  isOpenMenu,
  deleteDataBaseUser,
  setclosedMenuPizza,
  services,
  isNotUser,
  typeUser,
  OpenEventTour,
  subCategoryDefaulft,
  categoryDefaulft,
  typeDefault,
  changesPerfilamiento
}) => {
  const currentWidth = useCurrentWidth()
  const pathPrefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'
  const isBrowser = typeof window !== 'undefined'
  const prefix = isBrowser ? window.location.href : ''

  const [textoDescMobile, setTextoDescMobil] = useState('')
  const mapPensiones = {
    'pension-invalidez': 'Invalidez',
    sobrevivencia: 'sobrevivencia',
    'pension-vejez': 'vejez',
    pensionado: 'pensionado',
    inexperto: 'Estoy Aprendiendo',
    experto: 'Conozco de Inversiones'
  }
  const capitalize = word => {
    if (word) {
      const cadena = word.slice(1)
      return word[0].toUpperCase().concat(cadena)
    }
  }

  useEffect(() => {
    let dataSub =
      subCategoryDefaulft !== ''
        ? subCategoryDefaulft
        : categoryDefaulft === ''
        ? services.type === 1
          ? services.subcategory
          : 'Empresas'
        : typeDefault === 1
        ? categoryDefaulft === 'Ahorro'
          ? ''
          : services.subcategory
        : 'Empresas'
    dataSub = dataSub ? dataSub : typeDefault === 2 ? 'Empresas' : dataSub
    const textCategory = capitalize(categoryDefaulft)

    const isPersonPension = textCategory === 'Pensión' && typeDefault === 1
    const isPersonCesantias = textCategory === 'Cesantías' && typeDefault === 1
    const texteSubCate = mapPensiones[dataSub] ? mapPensiones[dataSub] : dataSub

    setTextoDescMobil(
      <React.Fragment>
        <Markdown style={{ marginRight: '3px' }}>
          Estás en la sección de **
        </Markdown>{' '}
        <Anchor
          onClick={() => {
            sendGaPush('Home', 'ClicMenu', 'EstasEnLaSeccionDe-' + textCategory)
          }}
          href={`${prefix}?tipoCliente=${typeDefault}&changeModal=true`}
          style={texteSubCate ? { marginRight: '3px' } : { margin: '0' }}
          id="categoria-menu-info"
        >
          {textCategory}
          {texteSubCate === '' ? '.' : ''}
        </Anchor>
        {texteSubCate &&
        isPersonPension &&
        isPersonCesantias &&
        texteSubCate !== '' ? (
          <React.Fragment>
            <Markdown style={{ marginRight: '3px' }}>para</Markdown>
            {subCategoryDefaulft ? (
              <Anchor
                onClick={() => {
                  sendGaPush(
                    'Home',
                    'ClicMenu',
                    'EstasEnLaSeccionDe-' + textCategory + '' + texteSubCate
                  )
                }}
                href={`${prefix}?tipoCliente=${typeDefault}&linea=${categoryDefaulft}&changeModal=true`}
                id="subcategoria-menu-info"
              >
                {capitalize(texteSubCate) + '.'}
              </Anchor>
            ) : (
              <Markdown>{capitalize(texteSubCate) + '**.'}</Markdown>
            )}
          </React.Fragment>
        ) : (
          ''
        )}
      </React.Fragment>
    )
  }, [services, category, subcategory, typeUser])

  const IconoContainerMobile = styled.button`
    &.profiling-user-type.profiling-user-type {
      background-image: ${props =>
        props.isSelected ? props.theme.colors.menuMobile.bgIconUserType : null};
    }
    & svg {
      path {
        fill: ${props =>
          props.isSelected
            ? props.theme.colors.menuMobile.colorTitleIconosActive
            : props.theme.colors.menuMobile.colorTitleIconosInactive};
      }
    }
  `

  const TituloIconoMobile = styled.span`
    color: ${props =>
      props.isSelected
        ? props.theme.colors.menuMobile.colorTitleIconosActive
        : props.theme.colors.menuMobile.colorTitleIconosInactive};
  `

  const noSoyUser = (
    <div
      className="container-menu-info-user-change gtmHomeMenuNoSoy"
      id="container-menu-info-user-change"
    >
      <Link
        to="/"
        id="isNotUser"
        role="presentation"
        onClick={() => {
          deleteDataBaseUser()
          if (isNotUser) {
            isNotUser()
          }
        }}
        onKeyDown={() => {
          deleteDataBaseUser()
          if (isNotUser) {
            isNotUser()
          }
        }}
        className="gtmHomeMenuNoSoy"
      >
        <ImageMegaMenu
          className="mega-menu-container-info-user-name-image gtmHomeMenuNoSoy"
          id="mega-menu-container-info-user-name-image"
          alt="info del usuario"
        />
      </Link>
    </div>
  )

  const menuTextiDesc = (
    <div
      className="container-menu-info-user-change container-menu-info-user-category"
      id="container-menu-info-user-change"
    >
      <div
        className="container-menu-info-user-change-subtitle"
        id="container-menu-info-user-change-subtitle"
      >
        <span>{textoDescMobile}</span>
      </div>
    </div>
  )
  return (
    <MenuInfoStyled>
      <div className="container-menu-heading">
        <Anchor
          id="logo-a"
          className="gtmHomeSupLogoProte"
          href={pathPrefix}
          target="_self"
        >
          <LogoProteccionMobile className="container-menu-heading__logo" />
        </Anchor>
        <ContainerButtonClose
          id="container-menu-info-close"
          className="container-menu-heading__button-close"
        >
          {currentWidth <= 1024 ? (
            <CloseMobileIcon
              id="btn-cerrar"
              alt="x de cierre"
              className={
                isOpenMenu ? 'spin-btn icon-button-close' : 'icon-button-close'
              }
              role="presentation"
              onClick={() => {
                sendGaPush('Home', 'ClicMenu', 'Cerrar')
                if (setclosedMenuPizza) {
                  setclosedMenuPizza(true)
                }
                setTimeout(() => {
                  setisOpenMenu(false)
                }, 300)
              }}
              onKeyDown={() => {
                if (setclosedMenuPizza) {
                  setclosedMenuPizza(true)
                }
                setTimeout(() => {
                  setisOpenMenu(false)
                }, 1000)
              }}
            />
          ) : (
            <XIcon
              alt="x de cierre"
              id="btn-cerrar"
              className={isOpenMenu ? 'spin-btn' : ''}
              style={{ float: 'right', marginBottom: '12px' }}
              role="presentation"
              onKeyDown={() => {
                if (setclosedMenuPizza) {
                  setclosedMenuPizza(true)
                }
                setTimeout(() => {
                  setisOpenMenu(false)
                }, 1000)
              }}
              onClick={() => {
                sendGaPush('Home', 'ClicMenu', 'Cerrar')
                if (setclosedMenuPizza) {
                  setclosedMenuPizza(true)
                }
                setTimeout(() => {
                  setisOpenMenu(false)
                }, 300)
              }}
            />
          )}
        </ContainerButtonClose>
      </div>
      <div
        className={
          welcome.length > 22
            ? 'container-menu-info-user-nameBig container-menu-info-user-title'
            : 'container-menu-info-user-nameSmall container-menu-info-user-title'
        }
        id="container-menu-info-user-nameBig container-menu-info-user-title"
      >
        <span
          className="container-menu-info-user-title-value"
          id="container-menu-info-user-nameBig container-menu-info-user-title-value"
        >
          {welcome !== undefined && welcome !== '¡Hola undefined!'
            ? welcome.length > 25
              ? '¡Hola!'
              : welcome
            : '¡Hola!'}
        </span>
        {noSoyUser}
      </div>
      {menuTextiDesc}
      <div className="profiling-user-type-container">
        {typeDefault === 1 && (
          <IconoContainerMobile
            className="profiling-user-type"
            id="profiling-user-type-Inversión"
            isSelected={categoryDefaulft === 'Inversión'}
            onClick={() => changesPerfilamiento('Inversión')}
          >
            <IconInversionMobile
              alt="Ícono de un gráfico con flecha ascendente, que lleva a los contenidos relacionados a Inversión"
              title="Ícono de Quiero Invertir"
            />
            <TituloIconoMobile
              isSelected={categoryDefaulft === 'Inversión'}
              className="profiling-user-type__text"
            >
              Inversión
            </TituloIconoMobile>
          </IconoContainerMobile>
        )}

        <IconoContainerMobile
          className="profiling-user-type"
          id="profiling-user-type-Ahorro"
          isSelected={categoryDefaulft === 'Ahorro'}
          onClick={() => changesPerfilamiento('Ahorro')}
        >
          <IconAhorroMobile
            alt="Ícono de un marranito con el signo pesos, lleva a los contenidos relacionados a Ahorro"
            title="Ícono de Quiero Ahorrar"
          />
          <TituloIconoMobile
            isSelected={categoryDefaulft === 'Ahorro'}
            className="profiling-user-type__text"
          >
            Ahorro
          </TituloIconoMobile>
        </IconoContainerMobile>

        <IconoContainerMobile
          className="profiling-user-type"
          id="profiling-user-type-Cesantías"
          isSelected={categoryDefaulft === 'Cesantías'}
          onClick={() => changesPerfilamiento('Cesantías')}
        >
          <IconCesantiasMobile
            alt="Ícono de sombrilla con el signo pesos, que lleva a los contenidos relacionados a Cesantías"
            title="Ícono de Saber sobre Cesantías"
          />
          <TituloIconoMobile
            isSelected={categoryDefaulft === 'Cesantías'}
            className="profiling-user-type__text"
          >
            Cesantías
          </TituloIconoMobile>
        </IconoContainerMobile>

        <IconoContainerMobile
          className="profiling-user-type"
          id="profiling-user-type-Pensión"
          isSelected={categoryDefaulft === 'Pensión'}
          onClick={() => changesPerfilamiento('Pensión')}
        >
          <IconPensionesMobile
            alt="Ícono de escudo con el signo pesos, que lleva a los contenidos relacionados a Pensiones"
            title="Ícono de Saber sobre Pensiones"
          />
          <TituloIconoMobile
            isSelected={categoryDefaulft === 'Pensión'}
            className="profiling-user-type__text"
          >
            Pensión
          </TituloIconoMobile>
        </IconoContainerMobile>
      </div>
    </MenuInfoStyled>
  )
}
export default MenuInfoUsuario
