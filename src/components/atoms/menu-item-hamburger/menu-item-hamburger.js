import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as MinusMenuIcon } from '../../../assets/images/chevron-up.svg'
import { ReactComponent as PlusMenuIcon } from '../../../assets/images/chevron-down-menu.svg'
import { sendEventGA } from '../../../utils/classGtmUtil'
import { getCurrentHost } from '../../../utils/redirectUtil'
import './menu-item-hamburger.scss'
import { ReactComponent as SolucionesIcon } from '../../../assets/images/menu-options/check-circle.svg'
import { ReactComponent as CorporateIcon } from '../../../assets/images/menu-options/file-user.svg'
import { ReactComponent as TenemosIcon } from '../../../assets/images/menu-options/navigation.svg'
import { ReactComponent as AfiliateIcon } from '../../../assets/images/menu-options/file-pointer.svg'
import { ReactComponent as CanalesIcon } from '../../../assets/images/menu-options/headset.svg'
import { ReactComponent as NivelSubMenuSmall } from '../../../assets/images/chevron-right.svg'
import { ReactComponent as BlackSubMenuSmall } from '../../../assets/images/chevron-left.svg'
import { getIdDiv } from '../../../utils/redirect-bread-crumb'
import Anchor from '../anchor/anchor'

const ListBurgerContainer = styled.div`
  background: ${props =>
    props.categoryDefaulft === 'Inversión'
      ? props.accessibility.darkMode
        ? props.validationSelect
          ? '#464454'
          : '#1E1C23'
        : props.validationSelect
        ? '#292730'
        : '#FFFFFF'
      : props.theme.colors
      ? props.validationSelect
        ? props.theme.colors.homeMobile.opcionMenuBurger.backgroundActive
        : props.theme.colors.homeMobile.opcionMenuBurger.backgroundInactive
      : ''} !important;
`

const H4Container = styled.h4`
  color: ${props =>
    props.categoryDefaulft === 'Inversión'
      ? props.accessibility.darkMode
        ? '#FFFFFF'
        : props.validationSelect
        ? '#FFFFFF'
        : '#292730'
      : props.theme.colors
      ? props.validationSelect
        ? props.theme.colors.homeMobile.opcionMenuBurger.colorActive
        : props.theme.colors.homeMobile.opcionMenuBurger.colorInactive
      : ''} !important;
`

const SubItemContainer = styled.div`
  border: 0.5px solid
    ${props =>
      props.theme.colors &&
      props.theme.colors.homeMobile.opcionMenuBurger.subItem} !important;
`

const SubMenuContainer = styled.div`
  background: ${props =>
    props.categoryDefaulft === 'Inversión'
      ? props.accessibility.darkMode
        ? '#292730'
        : '#FAFBFC'
      : props.theme.colors &&
        props.theme.colors.homeMobile.opcionMenuBurger.subMenu} !important;
`

const SubMenuContainerIcon = styled.div`
width: 24px;
height: 24px;
& > svg > path {
     fill: ${props =>
       props.categoryDefaulft === 'Inversión'
         ? props.accessibility.darkMode
           ? '#FFFFFF'
           : props.validationSelect
           ? '#FFFFFF'
           : '#292730'
         : props.theme.colors
         ? props.validationSelect
           ? props.theme.colors.homeMobile.opcionMenuBurger.iconActive
           : props.theme.colors.homeMobile.opcionMenuBurger.iconInactive
         : null} !important;
  }
}
`

const SubtitleMenu = styled.h4`
  color: ${props => props.theme.colors.menuMobile.colorSubtitleSubopciones};
`

const NivelSubMenuIcon = styled.svg`
  background: ${props => props.theme.colors.menuMobile.iconoSubmenuMobile};
  background-repeat: no-repeat;
  max-width: 24px;
  max-height: 24px;
`

const DivHeaderTwo = styled.div`
  color: ${props => props.theme.colors.menuMobile.colorSubtitleSubopciones};
  display: "flex",
  alignItems: "center",
  borderBottom: "#E2E7ED solid 1px",
`

const CloseSubMenu = styled.svg`
  background: ${props =>
    props.theme.colors.menuMobile.iconoCerrarSubmenuMobile};
  background-repeat: no-repeat;
  max-width: 24px;
  max-height: 24px;
  margin-right: 21px;
`

const tittleConteiner = (validation, showText, setSelect, itemSelected) => {
  return !validation ? (
    showText
  ) : (
    <div
      id="btn-menu-item"
      role="presentation"
      onClick={() => setSelect(showText, itemSelected)}
      onKeyDown={() => setSelect(showText, itemSelected)}
    >
      {showText}
    </div>
  )
}

const iconReturn = icon => {
  switch (icon) {
    case 1:
      return (
        <CanalesIcon
          title="Ícono de Canales de Servicio"
          alt="Ícono de diadema telefónica, que permite conocer los Canales de Servicio disponibles "
        />
      )
    case 2:
      return (
        <AfiliateIcon
          title="Ícono de Afíliate a Protección"
          alt="Ícono de una hoja con una figura de persona adentro, permite afiliarte a otros productos de Protección"
        />
      )
    case 3:
      return (
        <TenemosIcon
          title="Ícono de Tenemos para ti"
          alt="Ícono de triangulo, que despliega información de la oferta de Protección: Universidad, Talento Sí Hay, Privilegios y Eventos"
        />
      )
    case 4:
      return (
        <CorporateIcon
          title="Ícono de Corporativo y Accionistas"
          alt="Ícono de hoja con una flecha adentro, lleva a la información corporativa y de accionistas de Protección"
        />
      )
    default:
      return (
        <SolucionesIcon
          title="Ícono de Accesos Rápidos"
          alt="Ícono de un círculo con un chulo adentro, indica el acceso rápido a las opciones más usadas"
        />
      )
  }
}

const ShowSubItem = (
  onToggleModalSalesforce,
  validation,
  tittle,
  titlleSelected,
  openSubItemList,
  options,
  categoryDefaulft,
  accessibility,
  setModalOpen
) => {
  const [firtsMenu, setFirtsMenu] = useState(false)
  const [twoMenu, setTwoMenu] = useState(false)
  const [firtsMenuIndex, setFirtsMenuIndex] = useState(false)
  const [twoMenuIndex, setTwoMenuIndex] = useState(false)

  const isBrowser = typeof window !== 'undefined'

  useEffect(() => {
    if (!firtsMenu) {
      setTimeout(() => {
        setFirtsMenuIndex(false)
      }, 355)
    }
    setModalOpen(firtsMenu)
  }, [firtsMenu])

  return openSubItemList && validation && tittle === titlleSelected ? (
    <AnimatePresence>
      <motion.div
        style={{ display: 'flex', flexDirection: 'column' }}
        initial={{ opacity: 0, scaleY: 0.75, translateY: -20 }}
        animate={{ opacity: 1, scaleY: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <SubMenuContainer
          class="container-menu-item-hamburger-subitems"
          id="container-menu-item-hamburger-subitems"
          categoryDefaulft={categoryDefaulft}
          accessibility={accessibility}
        >
          {options.map((item, index) => {
            if (item.suboptions.length > 0) {
              return (
                <React.Fragment>
                  <SubtitleMenu
                    className={`container-menu-item-hamburger-subitems-item `}
                    id={`container-menu-item-hamburger-subitems-item-${index}`}
                    style={{
                      borderBottom:
                        index === options.length - 1
                          ? null
                          : '1px solid #E2E7ED'
                    }}
                    onClick={() => {
                      setFirtsMenu(true)
                      setModalOpen(true)
                      setFirtsMenuIndex(index)
                    }}
                  >
                    {item.description} <NivelSubMenuIcon />
                  </SubtitleMenu>
                  {firtsMenuIndex === index ? (
                    <div
                      className={`container-menu-item-hamburger-subitems-item-sub-menu ${
                        firtsMenu
                          ? 'container-menu-item-hamburger-subitems-item-sub-menu-active'
                          : 'container-menu-item-hamburger-subitems-item-sub-menu-inactive'
                      } `}
                      id="container-menu-item-hamburger-subitems-item-sub-menu"
                      style={{
                        height: isBrowser ? window.innerHeight + 30 : null
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderBottom: '#E2E7ED solid 1px'
                        }}
                        id={`container-menu-item-hamburger-subitems-item-header`}
                      >
                        <SubtitleMenu
                          className={`container-menu-item-hamburger-subitems-item-header`}
                        >
                          {item.description}
                        </SubtitleMenu>
                        <CloseSubMenu
                          onClick={() => {
                            setFirtsMenu(false)
                            setModalOpen(false)
                          }}
                        />
                      </div>
                      {item.suboptions.map((ite, inde) => {
                        return (
                          <React.Fragment>
                            {ite.suboptions.length > 0 ? (
                              <React.Fragment>
                                <SubtitleMenu
                                  className={`container-menu-item-hamburger-subitems-item-final`}
                                  id={`container-menu-item-hamburger-subitems-item-${inde}`}
                                  onClick={() => {
                                    setTwoMenu(true)
                                    setTwoMenuIndex(inde)
                                  }}
                                >
                                  {ite.description} <NivelSubMenuSmall />
                                </SubtitleMenu>
                                {twoMenuIndex === inde ? (
                                  <div
                                    className={`container-menu-item-hamburger-subitems-item-sub-menu ${
                                      twoMenu
                                        ? 'container-menu-item-hamburger-subitems-item-sub-menu-sub-active'
                                        : 'container-menu-item-hamburger-subitems-item-sub-menu-sub-inactive'
                                    } `}
                                    id="container-menu-item-hamburger-subitems-item-sub-menu"
                                    style={{
                                      height: isBrowser
                                        ? window.innerHeight + 30
                                        : null
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        borderBottom: '#E2E7ED solid 1px'
                                      }}
                                    >
                                      <SubtitleMenu
                                        className={`container-menu-item-hamburger-subitems-item-header`}
                                        id={`container-menu-item-hamburger-subitems-item-header`}
                                      >
                                        {tittle}
                                      </SubtitleMenu>
                                      <CloseSubMenu
                                        onClick={() => {
                                          setFirtsMenu(false)
                                          setModalOpen(false)
                                          setTwoMenu(false)
                                        }}
                                      />
                                    </div>
                                    <DivHeaderTwo
                                      onClick={() => {
                                        setTwoMenu(false)
                                      }}
                                      className={`container-menu-item-hamburger-subitems-item-header-two`}
                                    >
                                      <BlackSubMenuSmall
                                        style={{ marginRight: 16 }}
                                      />
                                      <h4>{item.description}</h4>
                                    </DivHeaderTwo>
                                    {ite.suboptions.map((i, x) => {
                                      return (
                                        <React.Fragment>
                                          <Anchor
                                            key={inde}
                                            style={{ color: '#0033A0' }}
                                            className={`noneTextDecoration`}
                                            id={`noneTextDecoration-${x}`}
                                            onClick={() => {
                                              sendEventGA(
                                                'Home',
                                                `ClicMenu-${tittle}`,
                                                i.description
                                              )
                                            }}
                                            href={
                                              i.url.includes('https:')
                                                ? i.url
                                                : `${getCurrentHost()}${getIdDiv(
                                                    i.url
                                                  )}`
                                            }
                                            target={
                                              i.url.includes('https:')
                                                ? '_blank'
                                                : '_self'
                                            }
                                            rel="noreferrer"
                                          >
                                            <SubtitleMenu
                                              className={`container-menu-item-hamburger-subitems-item-final`}
                                              id={`container-menu-item-hamburger-subitems-item-${x}`}
                                            >
                                              {i.description}
                                            </SubtitleMenu>
                                          </Anchor>
                                        </React.Fragment>
                                      )
                                    })}
                                  </div>
                                ) : null}
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <Anchor
                                  key={inde}
                                  style={{ color: '#0033A0' }}
                                  className={`noneTextDecoration`}
                                  id={`noneTextDecoration-${inde}`}
                                  onClick={event => {
                                    sendEventGA(
                                      'Home',
                                      `ClicMenu-${tittle}`,
                                      ite.description
                                    )
                                    onToggleModalSalesforce(event, ite.id)
                                  }}
                                  href={
                                    ite.url.includes('https:')
                                      ? ite.url
                                      : `${getCurrentHost()}${getIdDiv(
                                          ite.url
                                        )}`
                                  }
                                  target={
                                    ite.url.includes('https:')
                                      ? '_blank'
                                      : '_self'
                                  }
                                  rel="noreferrer"
                                >
                                  <SubtitleMenu
                                    className={`container-menu-item-hamburger-subitems-item-final`}
                                    id={`container-menu-item-hamburger-subitems-item-${inde}`}
                                  >
                                    {ite.description}
                                  </SubtitleMenu>
                                </Anchor>
                              </React.Fragment>
                            )}
                          </React.Fragment>
                        )
                      })}
                    </div>
                  ) : null}
                </React.Fragment>
              )
            } else {
              return (
                <Anchor
                  key={index}
                  style={{ color: '#0033A0' }}
                  className={`noneTextDecoration`}
                  id={`noneTextDecoration-${index}`}
                  onClick={() => {
                    sendEventGA('Home', `ClicMenu-${tittle}`, item.description)
                  }}
                  href={
                    item.url.includes('https:')
                      ? item.url
                      : `${getCurrentHost()}${getIdDiv(item.url)}`
                  }
                  target={item.url.includes('https:') ? '_blank' : '_self'}
                  rel="noreferrer"
                >
                  <SubtitleMenu
                    className={`container-menu-item-hamburger-subitems-item `}
                    id={`container-menu-item-hamburger-subitems-item-${index}`}
                    style={{
                      borderBottom:
                        index === options.length - 1
                          ? null
                          : '1px solid #E2E7ED'
                    }}
                  >
                    {item.description}
                  </SubtitleMenu>
                </Anchor>
              )
            }
          })}
        </SubMenuContainer>
      </motion.div>
    </AnimatePresence>
  ) : null
}

let MenuItemHamburger = ({
  tittle,
  more,
  link,
  setItemSelected,
  onToggleModalSalesforce,
  itemSelected,
  classGtm,
  services,
  options,
  categoryDefaulft,
  accessibility,
  url,
  icon,
  setModalOpen
}) => {
  const validationSelect = more && itemSelected === tittle
  const [openSubItem, setOpenSubItem] = useState(true)
  const clickSubItem = (tittleVariable, itemSelectedVariable) => {
    if (openSubItem && tittleVariable === itemSelectedVariable) {
      setOpenSubItem(false)
      setItemSelected('')
    } else {
      setItemSelected(tittleVariable)
      setOpenSubItem(true)
    }
  }
  const rediectToPage = linkRedirect => {
    if (window) {
      window.location.href = linkRedirect.includes('https:')
        ? linkRedirect
        : getCurrentHost() + getIdDiv(linkRedirect)
    }
  }

  return (
    <div
      id="container-menu-item-hamburger-container"
      className={'container-menu-item-hamburger-container ' + classGtm}
    >
      {options.length > 0 ? (
        <React.Fragment>
          <ListBurgerContainer
            id={tittle
              .toLowerCase()
              .split(' ')
              .join('')}
            role="presentation"
            onClick={() => {
              sendEventGA('Home', 'ClicMenu', tittle)
              if (!more) {
                rediectToPage(link)
              }
            }}
            className={`container-menu-item-hamburger ${classGtm}`}
            validationSelect={validationSelect}
            style={{ background: validationSelect ? '#0B2987' : '#FFFFFF' }}
            categoryDefaulft={categoryDefaulft}
            accessibility={accessibility}
          >
            {!more ? (
              <span
                id={
                  tittle
                    .toLowerCase()
                    .split(' ')
                    .join('') + '-url'
                }
                style={{ display: 'none' }}
              >
                {link}
              </span>
            ) : null}
            <SubMenuContainerIcon
              validationSelect={validationSelect}
              categoryDefaulft={categoryDefaulft}
              accessibility={accessibility}
            >
              {iconReturn(icon)}
            </SubMenuContainerIcon>
            <H4Container
              style={{
                width: '80%'
              }}
              validationSelect={validationSelect}
              className={`container-menu-item-hamburger-tittle ${classGtm}`}
              id="container-menu-item-hamburger-tittle"
              categoryDefaulft={categoryDefaulft}
              accessibility={accessibility}
            >
              {tittleConteiner(more, tittle, clickSubItem, itemSelected)}
            </H4Container>
            {more ? (
              <SubMenuContainerIcon
                role="presentation"
                id="btn-img-subitem"
                className={classGtm}
                onClick={() => clickSubItem(tittle, itemSelected)}
                onKeyDown={() => clickSubItem(tittle, itemSelected)}
                validationSelect={validationSelect}
                categoryDefaulft={categoryDefaulft}
                accessibility={accessibility}
              >
                {validationSelect ? (
                  <MinusMenuIcon
                    style={{ float: 'right' }}
                    alt="img-plus"
                    className={classGtm}
                    id="btn-img-subitem-ima"
                  />
                ) : (
                  <PlusMenuIcon
                    style={{ float: 'right' }}
                    alt="img-plus"
                    className={classGtm}
                    id="btn-img-subitem-ima"
                  />
                )}
              </SubMenuContainerIcon>
            ) : null}
          </ListBurgerContainer>
          {ShowSubItem(
            onToggleModalSalesforce,
            more,
            tittle,
            itemSelected,
            openSubItem,
            options,
            categoryDefaulft,
            accessibility,
            setModalOpen
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Anchor
            href={url.includes('https:') ? url : `${getCurrentHost()}${url}`}
            style={{ textDecoration: 'none' }}
          >
            <ListBurgerContainer
              id={tittle
                .toLowerCase()
                .split(' ')
                .join('')}
              role="presentation"
              onClick={() => {
                sendEventGA('Home', 'ClicMenu', tittle)
                if (!more) {
                  rediectToPage(link)
                }
              }}
              className={`container-menu-item-hamburger ${classGtm}`}
              validationSelect={validationSelect}
              style={{ background: validationSelect ? '#0B2987' : '#FFFFFF' }}
              categoryDefaulft={categoryDefaulft}
              accessibility={accessibility}
            >
              {!more ? (
                <span
                  id={
                    tittle
                      .toLowerCase()
                      .split(' ')
                      .join('') + '-url'
                  }
                  style={{ display: 'none' }}
                >
                  {link}
                </span>
              ) : null}
              <SubMenuContainerIcon
                validationSelect={validationSelect}
                categoryDefaulft={categoryDefaulft}
                accessibility={accessibility}
              >
                {iconReturn(icon)}
              </SubMenuContainerIcon>
              <H4Container
                style={{
                  width: '80%'
                }}
                validationSelect={validationSelect}
                className={`container-menu-item-hamburger-tittle ${classGtm}`}
                id="container-menu-item-hamburger-tittle"
                categoryDefaulft={categoryDefaulft}
                accessibility={accessibility}
              >
                {tittleConteiner(more, tittle, clickSubItem, itemSelected)}
              </H4Container>
            </ListBurgerContainer>
          </Anchor>
        </React.Fragment>
      )}
      <SubItemContainer className="line-subitem" id="line-subitem" />
    </div>
  )
}

export default MenuItemHamburger
