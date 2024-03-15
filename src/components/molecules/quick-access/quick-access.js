import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useCurrentWidth } from 'react-socks'
import styled from 'styled-components'
import { ReactComponent as ImgClosedIcon } from '../../../assets/images/chevron-down-active.svg'
import { ReactComponent as ImgAbrirIcon } from '../../../assets/images/chevron-down.svg'
import useQuickAccess from '../../../hooks/useQuickAccess'
import { generateGtmTag, sendEventGA } from '../../../utils/classGtmUtil'
import { getCurrentHost } from '../../../utils/redirectUtil'
import QuickAccessItem from '../../atoms/quick-access-item/quick-access-item'
import { ID_QUICK_ACCESS_OPEN_SALESFORCE_FORM } from '../../../const/dictionary/general-const'
import './quick-access.scss'
import Anchor from '../../atoms/anchor/anchor'

const ContainerQuickStyled = styled.div`
  background: ${props =>
    props.theme.colors &&
    (props.isEmpresa && props.theme.name === 'dark'
      ? '#13236F'
      : props.theme.colors.header.quickAccess.background)} !important;
  transition: ${props => props.theme.animation};
`
const ContainerQuickStyledMobile = styled.div`
  background: ${props =>
    props.theme.colors && props.ActiveMenu
      ? props.theme.colors.homeMobile.quickAccess.quickAcessActive
      : props.theme.colors.homeMobile.quickAccess
          .quickAcessInactive} !important;

  & > #container-quick-access-mobile-text {
    color: ${props =>
      props.theme.colors && props.ActiveMenu
        ? props.theme.colors.homeMobile.quickAccess.quickAcessActiveColor
        : props.theme.colors.homeMobile.quickAccess
            .quickAcessInactiveColor} !important;
  }

  transition: ${props => props.theme.animation};
`

const ContainerQuickStyledMobileOpciones = styled.div`
  background: ${props =>
    props.theme.colors &&
    props.theme.colors.homeMobile.quickAccess.opcionColor} !important;
`

const ContainerQuickStyledMobileOpcionesIcon = styled.div`
  & > svg > path {
    fill: ${props =>
      props.theme.colors &&
      props.theme.colors.homeMobile.quickAccess.iconColor} !important;
  }
`

export function Item({
  i,
  item,
  onMouseOver,
  setActive,
  onclickMobile,
  lineaActual,
  Active,
  accessibility,
  category,
  classGTM
}) {
  const width = useCurrentWidth()

  let lineMenu = category === 'PREHOME' ? 2 : 1

  return (
    <div
      className={`${classGTM} container-quick-access-option-mobile ${generateGtmTag(
        item.pcontoption.pcontdesciption,
        'gtmHomeSup'
      )} `}
      style={
        width <= 1024 && i <= lineMenu
          ? {
              borderBottom: '1px  #E2E7ED solid'
            }
          : {}
      }
      onMouseOver={() => {
        onMouseOver(i)
      }}
      onMouseOut={() => {
        setActive(null)
      }}
      onClick={() => {
        onclickMobile(i)
      }}
    >
      <QuickAccessItem
        accessibility={accessibility}
        lineaActual={lineaActual}
        text={item.pcontoption.pcontdesciption}
        alt={item.pcontoption.pcontalticon}
        index={i}
        active={Active}
        classGTM={classGTM}
      />
    </div>
  )
}

export function Element({
  dataServicesa,
  onMouseOver,
  setActive,
  onclickMobile,
  onToggleModalSalesforce,
  lineaActual,
  Active,
  animation,
  accessibility,
  category
}) {
  const getIdDiv = titleChanged => {
    return titleChanged
      ? titleChanged
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
      : ''
  }
  return (
    <React.Fragment>
      {dataServicesa.map((item, i) => {
        const gtmClass = generateGtmTag(
          item.pcontoption.pcontdesciption,
          'gtmHomeSup'
        )
        return item.pcontoption.pconturl !== '' && item.pcontoption.pconturl ? (
          <Anchor
            key={item.pcontoption.pcontoption}
            href={
              item.pcontoption.pconturl.includes('https:')
                ? item.pcontoption.pconturl
                : getIdDiv(getCurrentHost() + item.pcontoption.pconturl)
            }
            className={`quick-access-${i + 1}${
              animation ? '-animation' : ''
            } ${gtmClass} gtmAccesosRapidos-${
              item.pcontoption.pcontdesciption
            }`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
            id={'container-quick-access-option-link'}
            onClick={e => {
              if (
                item.pcontoption.pcontoption ===
                ID_QUICK_ACCESS_OPEN_SALESFORCE_FORM.agendarCitaInversion
              ) {
                e.preventDefault()
                onToggleModalSalesforce()
              }
              sendEventGA(
                'Home',
                'ClicSuperior-AccesosRapidos',
                item.pcontoption.pcontdesciption
              )
            }}
          >
            <Item
              accessibility={accessibility}
              i={i}
              item={item}
              onMouseOver={onMouseOver}
              setActive={setActive}
              onclickMobile={onclickMobile}
              lineaActual={lineaActual}
              Active={Active}
              category={category}
              classGTM={`gtmAccesosRapidos-${item.pcontoption.pcontdesciption}`}
            />
          </Anchor>
        ) : null
      })}
    </React.Fragment>
  )
}

function QuickAccess({
  animation,
  type,
  category,
  subCategory,
  openModalSalesforce,
  lineaActual,
  accessibility
}) {
  const [Active, setActive] = useState(null)
  const [ActiveMenu, setActiveMenu] = useState(false)
  const [dataServices, setDataServices] = useState([])
  const width = useCurrentWidth()
  const onclickMobile = i => {
    if (width <= 1024) {
      setActive(i)
    }
    return null
  }

  const onMouseOver = i => {
    if (width > 1024) {
      setActive(i)
    }
    return null
  }

  const { menuOptions } = useQuickAccess(type, category, subCategory)

  const filterDataServices = quickAccess => {
    if (quickAccess.length > 0) {
      const sortedQuickAccess = quickAccess.sort(function(a, b) {
        return a.pcontoption.pconticon - b.pcontoption.pconticon
      })
      if (sortedQuickAccess.length > 0) {
        return setDataServices(sortedQuickAccess)
      }
    }
  }

  useEffect(() => {
    filterDataServices(menuOptions)
  }, [menuOptions, type, category, subCategory])

  return (
    <section className="container-quick-access">
      {width <= 1024 ? (
        <React.Fragment>
          <ContainerQuickStyledMobile
            onClick={() => {
              setActiveMenu(ActiveMenu ? false : true)
            }}
            isEmpresa={type === 2}
            role="presentation"
            className={
              animation
                ? 'container-quick-access-mobile-active gtmHomeSupAccesRap'
                : 'container-quick-access-mobile-inactive gtmHomeSupAccesRap'
            }
            id="container-quick-access-mobile"
            ActiveMenu={ActiveMenu}
          >
            <div
              className={
                ActiveMenu
                  ? 'container-quick-access-mobile-text-active gtmHomeSupAccesRap'
                  : 'container-quick-access-mobile-text-inactive gtmHomeSupAccesRap'
              }
              id="container-quick-access-mobile-text"
            >
              <span className="gtmHomeSupAccesRap">Accesos Rápidos</span>
            </div>
            <ContainerQuickStyledMobileOpcionesIcon
              className="container-quick-access-mobile-item gtmHomeSupAccesRap"
              id="container-quick-access-mobile-item"
            >
              {!ActiveMenu ? (
                <ImgAbrirIcon
                  alt="icono de menu"
                  className="gtmHomeSupAccesRap"
                />
              ) : (
                <ImgClosedIcon
                  alt="icono de menu"
                  className="gtmHomeSupAccesRap"
                />
              )}
            </ContainerQuickStyledMobileOpcionesIcon>
          </ContainerQuickStyledMobile>
          <ContainerQuickStyledMobileOpciones
            className={
              ActiveMenu && animation
                ? category === 'PREHOME'
                  ? 'container-quick-access-option-active-prehome'
                  : 'container-quick-access-option-active'
                : 'container-quick-access-option-inactive'
            }
            id="container-quick-access-option"
          >
            <Element
              dataServicesa={dataServices}
              accessibility={accessibility}
              setActive={setActive}
              onToggleModalSalesforce={openModalSalesforce}
              onclickMobile={onclickMobile}
              lineaActual={lineaActual}
              Active={Active}
              onMouseOver={onMouseOver}
              animation={animation}
              category={category}
            />
          </ContainerQuickStyledMobileOpciones>
        </React.Fragment>
      ) : (
        <ContainerQuickStyled
          className={
            animation
              ? 'container-quick-access-active'
              : 'container-quick-access-inactive'
          }
          isEmpresa={type === 2}
          id="container-quick-access"
        >
          <Element
            dataServicesa={dataServices}
            setActive={setActive}
            accessibility={accessibility}
            onclickMobile={onclickMobile}
            onToggleModalSalesforce={openModalSalesforce}
            lineaActual={lineaActual}
            Active={Active}
            onMouseOver={onMouseOver}
            animation={animation}
          />
        </ContainerQuickStyled>
      )}
    </section>
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

QuickAccess = connect(mapStateToProps)(QuickAccess)

export default QuickAccess
