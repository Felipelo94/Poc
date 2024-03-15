import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { ReactComponent as CheckCircleIcon } from '../../../../assets/images/menu-options/check-circle.svg'
import { ReactComponent as FileUserIcon } from '../../../../assets/images/menu-options/file-user.svg'
import { ReactComponent as NavigationIcon } from '../../../../assets/images/menu-options/navigation.svg'
import { ReactComponent as FileArrowIcon } from '../../../../assets/images/menu-options/file-pointer.svg'
import { ReactComponent as HeadsetIcon } from '../../../../assets/images/menu-options/headset.svg'
import { ReactComponent as ImageMegaMenu } from '../../../../assets/images/info-mega-menu.svg'
import Peperoni from '../../../atoms/peperoni/peperoni'
import { generateGtmTag, sendGaPush } from '../../../../utils/classGtmUtil'
import { ReactComponent as IconInversion } from '../../../../assets/images/Icon-inversion-mega-menu.svg'
import { ReactComponent as IconAhorro } from '../../../../assets/images/Icon-ahorro-mega-menu.svg'
import { ReactComponent as IconCesantias } from '../../../../assets/images/Icon-cesantias-mega-menu.svg'
import { ReactComponent as IconPensiones } from '../../../../assets/images/Icon-pension-mega-menu.svg'
import { ReactComponent as IconCierre } from '../../../../assets/images/Cerrar-sesion-mega-menu.svg'
import { ReactComponent as VerTutorial } from '../../../../assets/images/eye-ver-tutorial-mega-menu.svg'
import MegaMenuModal from './mega-menu-modal'
import './mega-menu.scss'
import styled from 'styled-components'
import { ReactComponent as VerPQRS } from '../../../../assets/images/file-pqrs-ver-tutorial-mega-menu.svg'
import SkeletonMenuOption, {
  DEFAULT_OPTIONS_SIZE
} from '../../../atoms/skeleton-menu-option/skeleton-menu-option'
import NewPronto from '../../../atoms/pronto/new-pronto/new-pronto'
import Pronto from '../../../atoms/pronto/pronto'

const menuOptions = [
  {
    icon: (
      <IconInversion
        className="gtmHomePerfilInversión gtmPerfilInversion mega-menu-container-info-user-icon-menu-categoria-value-icon"
        id="mega-menu-container-info-user-icon-menu-categoria-value-icon"
        alt="Ícono de un gráfico con flecha ascendente, que lleva a los contenidos relacionados a Inversión"
        title="Ícono de Quiero Invertir"
      />
    ),
    nombre: 'Inversión',
    type: 1
  },
  {
    icon: (
      <IconAhorro
        className="gtmHomePerfilAhorro gtmPerfilAhorro mega-menu-container-info-user-icon-menu-categoria-value-icon"
        id="mega-menu-container-info-user-icon-menu-categoria-value-icon"
        alt="Ícono de un marranito con el signo pesos, lleva a los contenidos relacionados a Ahorro"
        title="Ícono de Quiero Ahorrar"
      />
    ),
    nombre: 'Ahorro',
    type: 'ALL'
  },
  {
    icon: (
      <IconCesantias
        className="gtmHomePerfilCesantías gtmPerfilCesantias mega-menu-container-info-user-icon-menu-categoria-value-icon"
        id="mega-menu-container-info-user-icon-menu-categoria-value-icon"
        alt="Ícono de sombrilla con el signo pesos, que lleva a los contenidos relacionados a Cesantías"
        title="Ícono de Saber sobre Cesantías"
      />
    ),
    nombre: 'Cesantías',
    type: 'ALL'
  },
  {
    icon: (
      <IconPensiones
        className="gtmHomePerfilPensión gtmPerfilPension mega-menu-container-info-user-icon-menu-categoria-value-icon"
        id="mega-menu-container-info-user-icon-menu-categoria-value-icon"
        alt="Ícono de escudo con el signo pesos, que lleva a los contenidos relacionados a Pensiones"
        title="Ícono de Saber sobre Pensiones"
      />
    ),
    nombre: 'Pensión',
    type: 'ALL'
  }
]

const MegaMenuStyle = styled.div`
  background: ${props =>
    props.theme.colors.categorias.colorCategoriaBackground};

  & > .mega-menu-container-info-user-icon-menu-categoria {
    & > .active-item-category {
      color: ${props => props.theme.colors.categorias.colorCategoriaActive};

      & > svg {
        background: ${props =>
          props.theme.colors.categorias.categoriaIconoBackground};

        & > path {
          fill: ${props =>
            props.theme.colors.categorias.colorCategoriaIconoBackgroundFill};
        }
      }
    }

    & > .inactive-item-category {
      color: ${props => props.theme.colors.categorias.colorCategoriaInactive};

      & > svg {
        & > path {
          fill: ${props =>
            props.theme.colors.categorias.colorCategoriaInactive};
        }
      }
    }
  }
`

const NameStyle = styled.div`
  color: ${props => props.theme.colors.categorias.colorCategoriaNameTitulo};

  & > a > .mega-menu-container-info-user-name-image {
    & > path {
      fill: ${props => props.theme.colors.categorias.colorCategoriaLink};
    }
  }
`

const AnchorStyle = styled.a`
  color: ${props => props.theme.colors.categorias.colorCategoriaLink};
`

const DivContainerStyle = styled.div`
  max-height: 200px;
  box-shadow: ${props =>
    props.isDarkMode || props.categoryDefaulft === 'Inversión'
      ? null
      : '0px 8px 10px rgba(149, 150, 153, 0.14),0px 3px 14px rgba(149, 150, 153, 0.12), 0px 5px 5px rgba(149, 150, 153, 0.2)'};
`
const DivOpcionesStyle = styled.a`
  color: ${props =>
    props.isActive
      ? props.theme.colors.opciones.colorOpcionesParaphHover
      : props.theme.colors.opciones.colorOpcionesParaph} !important;
  background: ${props =>
    props.isActive
      ? props.theme.colors.opciones.opcionesIconoBackground
      : null};
  background-repeat: no-repeat;
  background-position: 0;
  background-color: transparent;
  border: none;

  & > svg {
    margin: 3px;

    & > path {
      fill: ${props =>
        props.isActive
          ? props.theme.colors.opciones.colorOpcionesIconosActive
          : props.theme.colors.opciones.colorOpcionesIconosInactive} !important;
    }
  }
`

const OpcionesTitleStyle = styled.p`
  color: ${props => props.theme.colors.opciones.colorOpcionesTitulo};
`
const OpcionesContainerStyle = styled.div`
  background: ${props => props.theme.colors.opciones.colorOpcionesBackground};
  height: auto;
  width: 17%;
  position: relative;
  flex-direction: column;
  display: flex;

  &::before {
    content: '';
    height: 144px;
    width: 1px;
    position: absolute;
    left: -32px;
    top: 15px;
    background-color: ${props => props.theme.colors.opciones.colorSeparator};
  }
`

const BorderHrHorizontalStyle = styled.hr`
  width: 80%;
  border: 1px solid ${props => props.theme.colors.opciones.colorBordeHrMenu};
  margin-left: 0;
`

export default function MegaMenu({
  welcome,
  subcategory,
  category,
  name,
  deleteDataBaseUser,
  onToggleModalSalesforce,
  services,
  isNotUser,
  typeUser,
  subCategoryDefaulft,
  typeDefault,
  categoryDefaulft,
  isDarkMode,
  isOpenMenu,
  setisOpenMenu,
  setclick,
  setsoluciones,
  dataMenuOptions = [],
  OpenEventTour,
  changesPerfilamiento
}) {
  const capitalize = word => {
    if (word) {
      const cadena = word.slice(1)
      return word[0].toUpperCase().concat(cadena)
    }
  }

  const [modalClosed, setmodalClosed] = React.useState(false)
  const [isTextEnabled, setIsTextEnabled] = React.useState(false)
  const [titleActive, setTitleActive] = React.useState(-1)
  const [options, setOptions] = React.useState([])
  const [selectedTitle, setSelectedTitle] = React.useState(-1)
  const [selectedMenu, setSelectedMenu] = React.useState(false)
  const [opcionActive, setOpcionActive] = React.useState(0)

  const getCurrentUrl = optiones => {
    if (optiones) {
      if (optiones?.options?.length >= 1) {
        return ''
      } else {
        return optiones.url
      }
    }
  }

  const iconReturn = icon => {
    switch (icon) {
      case 0:
        return (
          <CheckCircleIcon
            title="Ícono de Accesos Rápidos"
            alt="Ícono de un círculo con un chulo adentro, indica el acceso rápido a las opciones más usadas"
          />
        )
      case 1:
        return (
          <HeadsetIcon
            title="Ícono de Canales de Servicio"
            alt="Ícono de diadema telefónica, que permite conocer los Canales de Servicio disponibles "
          />
        )
      case 2:
        return (
          <FileUserIcon
            title="Ícono de Afíliate a Protección"
            alt="Ícono de una hoja con una figura de persona adentro, permite afiliarte a otros productos de Protección"
          />
        )
      case 3:
        return (
          <NavigationIcon
            title="Ícono de Tenemos para ti"
            alt="Ícono de triangulo, que despliega información de la oferta de Protección: Universidad, Talento Sí Hay, Privilegios y Eventos"
          />
        )
      default:
        return (
          <FileArrowIcon
            title="Ícono de Corporativo y Accionistas"
            alt="Ícono de hoja con una flecha adentro, lleva a la información corporativa y de accionistas de Protección"
          />
        )
    }
  }

  const overModal = (haveMore, value, title, finaltitle) => {
    setTitleActive(finaltitle)
    if (haveMore) {
      setmodalClosed(value)
      setOptions(
        dataMenuOptions.find(findItem => findItem.icon === title)
          ? dataMenuOptions.find(findItem => findItem.icon === title).options
          : []
      )
    }
  }

  const overPeperoni = (haveMore, value, title, finaltitle) => {
    setTitleActive(finaltitle)
    if (haveMore) {
      setmodalClosed(value)
      if (!selectedMenu) {
        setOptions(
          dataMenuOptions.find(findItem => findItem.icon === title).options
        )
      }
    }
  }
  useEffect(() => {
    let optionsTmp = dataMenuOptions.find(
      findItem => findItem.icon === selectedTitle
    )
    if (selectedTitle !== -1 && optionsTmp) {
      setOptions(optionsTmp.options)
    }
  }, [dataMenuOptions, selectedTitle])

  const mapPensiones = {
    'pension-vejez': 'vejez',
    'pension-invalidez': 'Invalidez',
    sobrevivencia: 'sobrevivencia',
    experto: 'Conozco de Inversiones',
    pensionado: 'pensionado',
    inexperto: 'Estoy Aprendiendo'
  }

  const isBrowser = typeof window !== 'undefined'
  const prefix = isBrowser ? window.location.href : ''

  const [textoDesc, setTextoDesc] = useState('')
  const [textCategory, setTextCategory] = useState('')

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
    const categoryCapitalize = capitalize(categoryDefaulft)
    setTextCategory(capitalize(categoryDefaulft))

    const isPersonPension =
      categoryCapitalize === 'Pensión' && typeDefault === 1
    const isPersonCesantias =
      categoryCapitalize === 'Cesantías' && typeDefault === 1
    const texteSubCate = mapPensiones[dataSub] ? mapPensiones[dataSub] : dataSub

    setTextoDesc(
      <React.Fragment>
        <p style={{ margin: '0px 4px 0px 0px' }}>Estás en la sección de</p>{' '}
        <AnchorStyle
          typeDefault={typeDefault}
          categoryDefaulft={categoryDefaulft}
          isDarkMode={isDarkMode}
          href={`${prefix}?tipoCliente=${typeDefault}&changeModal=true`}
          style={{ margin: '0px 4px' }}
          onClick={() => {
            sendGaPush('Home', 'ClicMenu', 'EstasEnLaSeccionDe-' + textCategory)
          }}
          id="categoria-menu-info"
        >
          {textCategory}
          {texteSubCate === '' ? '.' : ''}
        </AnchorStyle>
        {texteSubCate &&
        isPersonPension &&
        isPersonCesantias &&
        texteSubCate !== '' ? (
          <React.Fragment>
            <p style={{ margin: '0px 4px 0px 0px' }}> para </p>{' '}
            {subCategoryDefaulft ? (
              <AnchorStyle
                typeDefault={typeDefault}
                categoryDefaulft={categoryDefaulft}
                isDarkMode={isDarkMode}
                href={`${prefix}?tipoCliente=${typeDefault}&linea=${categoryDefaulft}&changeModal=true`}
                style={{ margin: '0px 4px' }}
                onClick={() => {
                  sendGaPush(
                    'Home',
                    'ClicMenu',
                    'EstasEnLaSeccionDe-' + textCategory + '' + texteSubCate
                  )
                }}
                id="subcategoria-menu-info"
              >
                {capitalize(texteSubCate) + '.'}
              </AnchorStyle>
            ) : (
              <p style={{ margin: '0px 4px' }}>
                {capitalize(texteSubCate) + '.'}
              </p>
            )}
          </React.Fragment>
        ) : (
          ''
        )}
      </React.Fragment>
    )
  }, [services, category, subcategory, typeUser, textCategory])

  return (
    <React.Fragment>
      <DivContainerStyle
        className={`mega-menu-container  ${
          isOpenMenu
            ? 'mega-menu-container-active'
            : 'mega-menu-container-inactive'
        }`}
        id="mega-menu-container"
        categoryDefaulft={categoryDefaulft}
        isDarkMode={isDarkMode}
        typeDefault={typeDefault}
      >
        <div className="container-info-line" id="mega-menu-container-info-line">
          <div className="container-info-line-name">
            <p>
              {textCategory === 'Inversión'
                ? 'Inversiones'
                : textCategory === 'Pensión'
                ? 'Pensiones'
                : textCategory}{' '}
              Protección
            </p>
          </div>
          <ul
            className="container-info-line-menu-pizza-peperoni"
            style={{ justifyContent: 'space-around', margin: '0px' }}
          >
            {dataMenuOptions.length === 0 &&
              DEFAULT_OPTIONS_SIZE.map(() => <SkeletonMenuOption />)}
            {dataMenuOptions.length > 0 &&
              dataMenuOptions.map((items, indexpeperoni) => {
                return (
                  <div
                    className={`${generateGtmTag(
                      items.desciption,
                      'gtmHomeMenu'
                    )} gtmMenuLink`}
                  >
                    <li
                      key={indexpeperoni}
                      className={`${generateGtmTag(
                        items.desciption,
                        'gtmHomeMenu'
                      )} container-info-line-menu-pizza-peperoni-item gtmMenuLink`}
                    >
                      <Peperoni
                        title={items.desciption}
                        more={getCurrentUrl(items) === ''}
                        link={getCurrentUrl(items)}
                        classGtm={`${generateGtmTag(
                          items.desciption,
                          'gtmHomeMenu'
                        )} gtmMenuLink`}
                        image={iconReturn(items.icon)}
                        isHoverActive={titleActive === items.icon}
                        isHoverActiveAnotherPeperoni={
                          titleActive !== '' &&
                          titleActive !== -1 &&
                          titleActive !== items.icon
                        }
                        overModal={overPeperoni}
                        icon={items.icon}
                        titleActive={titleActive}
                        setSelectedTitle={setSelectedTitle}
                        selectedTitle={selectedTitle}
                        setSelectedMenu={setSelectedMenu}
                      />
                    </li>
                    {options && options.length >= 1 && (
                      <MegaMenuModal
                        icon={items.icon}
                        titleMainMenu={items.desciption}
                        subcategory={subcategory}
                        services={typeUser}
                        typeUser={typeUser}
                        servicesUser={services}
                        onToggleModalSalesforce={onToggleModalSalesforce}
                        setmodalClosed={setmodalClosed}
                        modalClosed={modalClosed}
                        overModal={overModal}
                        options={options}
                        selectedMenu={selectedMenu}
                        selectedTitle={selectedTitle}
                        setsoluciones={setsoluciones}
                        setclick={setclick}
                        blackTheme={textCategory === 'Inversión'}
                      />
                    )}
                  </div>
                )
              })}
          </ul>
        </div>
        <MegaMenuStyle
          typeDefault={typeDefault}
          categoryDefaulft={categoryDefaulft}
          isDarkMode={isDarkMode}
          className="mega-menu-container-info-user"
          id="mega-menu-container-info-user"
        >
          <NameStyle
            className="mega-menu-container-info-user-name"
            id="mega-menu-container-info-user-name"
            typeDefault={typeDefault}
            categoryDefaulft={categoryDefaulft}
            isDarkMode={isDarkMode}
          >
            {name !== undefined ? (
              <p>{`Hola ${
                name
                  ? name.length > 22
                    ? ''
                    : name
                  : services
                  ? services.nameuser.length > 22
                    ? ''
                    : services.nameuser
                  : welcome.length > 22
                  ? ''
                  : welcome
              }`}</p>
            ) : (
              <p>{`Quiero personalizar mi contenido`}</p>
            )}
            <Link
              to="/"
              id="isNotUser"
              role="presentation"
              onClick={() => {
                localStorage.clear()
                deleteDataBaseUser()
                if (isNotUser) {
                  isNotUser()
                }
              }}
              onKeyDown={event => {
                if (event.keyCode === 13) {
                  deleteDataBaseUser()
                  if (isNotUser) {
                    isNotUser()
                  }
                }
              }}
              className="gtmHomeMenuNoSoy"
              tabIndex="0"
            >
              <ImageMegaMenu
                className="mega-menu-container-info-user-name-image gtmHomeMenuNoSoy"
                id="mega-menu-container-info-user-name-image"
                alt="info del usuario"
              />
            </Link>
          </NameStyle>
          <NameStyle
            className="mega-menu-container-info-user-categoria"
            id="mega-menu-container-info-user-categoria"
            typeDefault={typeDefault}
            categoryDefaulft={categoryDefaulft}
            isDarkMode={isDarkMode}
          >
            <span
              id="container-menu-info-user-change-subtitle-sesion"
              style={{
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
              {textoDesc}
            </span>
          </NameStyle>
          <div
            className="mega-menu-container-info-user-icon-menu-categoria"
            id="mega-menu-container-info-user-icon-menu-categoria"
          >
            {menuOptions.map(i => {
              if (typeDefault === i.type || i.type === 'ALL') {
                if (categoryDefaulft === i.nombre) {
                  return (
                    <button
                      className={`gtmHomePerfil${i.nombre} gtmPerfil${i.nombre} mega-menu-container-info-user-icon-menu-categoria-value active-item-category`}
                      id={`mega-menu-container-info-user-icon-menu-categoria-value-${i.nombre}`}
                      tabIndex="0"
                    >
                      {i.icon}
                      <span
                        className={`gtmHomePerfil${i.nombre} gtmPerfil${i.nombre}`}
                      >
                        {i.nombre}
                      </span>
                    </button>
                  )
                } else {
                  return (
                    <button
                      className={`gtmHomePerfil${i.nombre} gtmPerfil${i.nombre} mega-menu-container-info-user-icon-menu-categoria-value inactive-item-category`}
                      id={`mega-menu-container-info-user-icon-menu-categoria-value-${i.nombre}`}
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        changesPerfilamiento(i.nombre)
                      }}
                      tabIndex="0"
                    >
                      {i.icon}
                      <span
                        className={`gtmHomePerfil${i.nombre} gtmPerfil${i.nombre}`}
                      >
                        {i.nombre}
                      </span>
                    </button>
                  )
                }
              }
            })}
          </div>
        </MegaMenuStyle>
        <OpcionesContainerStyle
          className="container-info-options"
          id="mega-menu-container-info-options"
        >
          <div className="container-info-options-name">
            <OpcionesTitleStyle>Opciones</OpcionesTitleStyle>
          </div>
          <DivOpcionesStyle
            id="container-cerrar-perfilamiento"
            className={`gtmHomeOpcionesCerrarMiPerfil container-info-options-items ${
              opcionActive === 1
                ? 'container-info-options-items-active'
                : 'container-info-options-items-inactive'
            }`}
            isActive={opcionActive === 1}
            onClick={() => {
              localStorage.clear()
              setisOpenMenu(false)
              setOpcionActive(1)
              deleteDataBaseUser()
              if (isNotUser) {
                isNotUser()
              }
            }}
            onMouseEnter={() => {
              setOpcionActive(1)
            }}
            onMouseLeave={() => {
              setOpcionActive(0)
            }}
            blackTheme={textCategory === 'Inversión'}
            style={{
              cursor: 'pointer',
              textAlign: 'start'
            }}
          >
            <IconCierre
              alt="Ícono de on/off para cerrar mi perfilamiento. Lleva al home donde puedes perfilarte nuevamente e ingresar como Persona o Empresa"
              className="gtmHomeOpcionesCerrarMiPerfil"
              title="ícono de Cerrar mi perfilamiento"
            />
            <p className="gtmHomeOpcionesCerrarMiPerfil">
              {services
                ? 'Cerrar mi perfilamiento'
                : 'Personalizar mi contenido'}
            </p>
          </DivOpcionesStyle>
          {process.env.IS_TOUR_GUIDE_ACTIVATED === 'true' && (
            <DivOpcionesStyle
              className={`gtmHomeSupVolvVerTut container-info-options-items ${
                opcionActive === 2
                  ? 'container-info-options-items-active'
                  : 'container-info-options-items-inactive'
              }`}
              isActive={opcionActive === 2}
              style={{
                cursor: 'pointer'
              }}
              onClick={() => {
                if (isBrowser) {
                  if (window.location.pathname.indexOf('home') >= 0) {
                    OpenEventTour()
                    setisOpenMenu(false)
                    setOpcionActive(2)
                  }
                }
              }}
              id="container-ver-tutorial"
              onMouseEnter={() => {
                setOpcionActive(2)
              }}
              onMouseLeave={() => {
                setOpcionActive(0)
              }}
              blackTheme={textCategory === 'Inversión'}
            >
              <VerTutorial
                className="gtmHomeSupVolvVerTut"
                alt="Ícono de una figura de ojo para Ver tutorial, enseña 5 pasos para navegar y disfrutar el contenido del sitio"
                title="Ícono de Ver tutorial"
              />
              <p className="gtmHomeSupVolvVerTut">Ver tutorial</p>
            </DivOpcionesStyle>
          )}
          <React.Fragment>
            <BorderHrHorizontalStyle />
            <DivOpcionesStyle
              href="https://www.proteccion.com/portalafiliados/afiliados/pqrs"
              className={`gtmHomeOpcionesPqrs container-info-options-items ${
                opcionActive === 3
                  ? 'container-info-options-items-active'
                  : 'container-info-options-items-inactive'
              }`}
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                color: '#626277',
                height: 'fit-content',
                width: '100%'
              }}
              onClick={() => {
                setOpcionActive(3)
              }}
              isActive={opcionActive === 3}
              onMouseEnter={() => {
                setOpcionActive(3)
              }}
              onMouseLeave={() => {
                setOpcionActive(0)
              }}
              blackTheme={textCategory === 'Inversión'}
              id="container-pqrs"
              data-parly-message="PQRS"
              data-parly-modal-title="¿Desea continuar con PQRS o la conversación previa?"
              data-parly-modal-onOk-text="Si, continuar con PQRS"
              data-parly-modal-onCancel-text="No, volver con la conversacion "
            >
              <VerPQRS
                alt="Ícono de hoja con lápiz adentro, al darle clic activa el chat de Pronto para resolver tus PQRS. Debes ingresar tu número de cédula"
                title="Ícono de PQRS"
                id="pqrs-icon"
                className="gtmHomeOpcionesPqrs"
              />
              <p className="gtmHomeOpcionesPqrs">PQRS</p>
            </DivOpcionesStyle>
          </React.Fragment>
          {process.env.NEW_PRONTO === 'true' ? (
            <NewPronto Hidden={true} enableText={setIsTextEnabled} />
          ) : (
            <Pronto Hidden={true} />
          )}
        </OpcionesContainerStyle>
      </DivContainerStyle>
    </React.Fragment>
  )
}
