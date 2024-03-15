import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import LayoutMain from '../templates/layout-main'
import { sendUserDataRedux } from '../utils/ReduxDataUtil'
import { getDataIb } from '../services/service-indexDB/service-indexDB'
import { get } from '../services/service-general/service-general'
import { connect } from 'react-redux'
import { addInfoUser } from '../actions/You-cant-miss/You-cant-miss'
import { ReactComponent as IconSombrilla } from '../assets/images/icons/umbrela-money.svg'
import { ReactComponent as IconGrafica } from '../assets/images/icons/chart-arrow-1.svg'
import { ReactComponent as IconPension } from '../assets/images/icons/money-shield.svg'
import { ReactComponent as IconBank } from '../assets/images/icons/piggy-bank.svg'
import { ReactComponent as IconGlobe } from '../assets/images/icons/globe.svg'
import LikeShare from '../components/internal-pages/common/like-share/like-share'
import { ReactComponent as CorporativoYAccionista } from '../assets/images/icons/hand-money.svg'
import { Breakpoint, useCurrentWidth } from 'react-socks'
import CollapseItem from '../components/atoms/collapse-item/collapse-item'
import RichText from '../utils/rich-text/rich-text'
import Anchor from '../components/atoms/anchor/anchor'
import Seo from '../components/internal-pages/common/seo/seo'
import BreadCrumb from '../components/atoms/bread-crumb/bread-crumb'
import './map-site.scss'

function Item({ filterDataSiteMap, category, type, icon }) {
  return (
    <React.Fragment>
      <Breakpoint customQuery="(min-width: 1025px)">
        <div
          className="container-map-site-sesion"
          id="container-map-site-sesion"
        >
          {icon} <span>{category}</span>
        </div>
      </Breakpoint>
      <div className="container-map-site-items" id="container-map-site-items">
        {filterDataSiteMap(category, type).map(itemsCes => (
          <li
            className="container-map-site-items-li"
            id="container-map-site-items-li"
          >
            <Anchor
              href={
                process.env.PATH_PREFIX === ''
                  ? itemsCes.url
                  : '/' + process.env.PATH_PREFIX + itemsCes.url
              }
              style={{ color: '#0033a0' }}
            >
              {itemsCes.titulocontent ? itemsCes.titulocontent : itemsCes.url}
            </Anchor>
          </li>
        ))}
      </div>
      <Breakpoint customQuery="(min-width: 1025px)">
        <div
          style={{
            border: '1px solid #CBD1DE',
            margin: '0px 114px 32px 114px'
          }}
        />
      </Breakpoint>
    </React.Fragment>
  )
}

export function MapaDelSitio({ location, dispatch, mapSiteQuery }) {
  const hiddenCategoria = 'false'

  const [indexDBUserName, setindexDBUserName] = useState('')
  const [dataNewMapSiteQuery, setDataNewMapSiteQuery] = useState([])
  const [dataNewHeaderMapSiteQuery, setDataNewHeaderMapSiteQuery] = useState([])

  const [showOptionsShare, setShowOptionsShare] = useState(false)
  const [indexActiveMenu, setIndexActiveMenu] = useState(0)

  useEffect(() => {
    let newItemsArray = []
    let newHeaderArray = []

    mapSiteQuery?.allSitePage.edges.map(item => {
      newItemsArray.push({
        url: item.node.path,
        cliente: item.node.context?.cliente,
        category: item.node.context?.category,
        id: item.node.context?.id,
        titulocontent: item.node.context?.titulocontent,
        type: item.node.context?.type
      })
      return mapSiteQuery
    })

    mapSiteQuery?.allContentfulContenidoSimple.edges.map(x => {
      newHeaderArray.push({
        url: x.node.urlSeo,
        titulo: x.node.urlSeo === '/canales/' ? 'Canales' : x.node.titulo,
        CuerpoContenido: x.node.CuerpoContenido,
        metatittleSeo: x.node.item,
        metadescripcionSeo: x.node.metadescripcionSeo
      })
      return mapSiteQuery
    })
    setDataNewMapSiteQuery(newItemsArray)
    setDataNewHeaderMapSiteQuery(newHeaderArray)
  }, [mapSiteQuery])

  useEffect(() => {
    sendUserDataRedux(getDataIb, setindexDBUserName, get, dispatch, addInfoUser)
  }, [dispatch])

  const filterDataSiteMap = (category, type) => {
    return dataNewMapSiteQuery.filter(
      items => items.category === category && items.cliente === type
    )
  }

  const filterDataSiteMapCorporativoYAccionistas = () => {
    return dataNewMapSiteQuery.filter(
      items => items.type === 'corporativoyaccionistas'
    )
  }

  const filterDataCanales = () => {
    return dataNewMapSiteQuery.filter(
      items => items.url.split('/')[1] === 'canales'
    )
  }

  const toggleOpenItem = itemClick => {
    let itemClickTemp = itemClick
    if (indexActiveMenu === itemClick) {
      itemClickTemp = 0
    }
    setIndexActiveMenu(itemClickTemp)
  }

  let isBrowser = typeof window !== 'undefined'
  return (
    <>
      <Seo
        pageContext={{
          title: 'Protección: Pensiones, Cesantías, Ahorro e Inversión'
        }}
      />

      <div className="container-map-site" id="container-map-site">
        <LayoutMain
          showType={true}
          showQuickAccess={false}
          defaultTypeUser={1}
          defaultCategoryUser="Pensión"
          defaultSubcategoryUser="pension-vejez"
          isOpenMenu={false}
          indexDBUserName={indexDBUserName.nameuser}
          home={false}
          colorFooter={'#FFFFFF'}
        >
          <div
            className="container-canales-bread-crumb"
            id="container-canales-bread-crumb"
            style={{
              borderBottom: '1px #E2E7ED solid',
              margin: 'auto'
            }}
          >
            <BreadCrumb
              location={location}
              defaultTypeUser={1}
              defaultCategoryUser="Pensión"
              defaultSubcategoryUser="pension-vejez"
            />
          </div>
          <Breakpoint customQuery="(max-width: 1024px)">
            <div
              id="container-map-site-title"
              className="container-map-site-title"
            >
              <span>{dataNewHeaderMapSiteQuery?.[0]?.titulo}</span>
            </div>
            <div
              id="container-map-site-subtitle"
              className="container-map-site-subtitle"
            >
              <span>
                <RichText
                  text={dataNewHeaderMapSiteQuery?.[0]?.CuerpoContenido.json}
                />
              </span>
            </div>
            <div
              id="container-map-site-header"
              className="container-map-site-header"
            >
              <span>Personas</span>
            </div>
            <div className="footer-content__accordion-links">
              <CollapseItem
                isOpenItem={indexActiveMenu === 1}
                setIsOpenItem={() => toggleOpenItem(1)}
                title="Cesantías"
                id="0"
                heightItem={'100%'}
                icon={<IconSombrilla />}
              >
                <Item
                  filterDataSiteMap={filterDataSiteMap}
                  category="Cesantías"
                  type={1}
                  icon={<IconSombrilla />}
                />
              </CollapseItem>

              <CollapseItem
                isOpenItem={indexActiveMenu === 2}
                setIsOpenItem={() => toggleOpenItem(2)}
                title="Inversión"
                id="1"
                heightItem={'100%'}
                icon={<IconGrafica />}
              >
                <Item
                  filterDataSiteMap={filterDataSiteMap}
                  category="Inversión"
                  type={1}
                  icon={<IconGrafica />}
                />
              </CollapseItem>

              <CollapseItem
                isOpenItem={indexActiveMenu === 3}
                setIsOpenItem={() => toggleOpenItem(3)}
                title="Pensión"
                id="2"
                heightItem={'100%'}
                icon={<IconPension />}
              >
                <Item
                  filterDataSiteMap={filterDataSiteMap}
                  category="Pensión"
                  type={1}
                  icon={<IconPension />}
                />
              </CollapseItem>

              <CollapseItem
                isOpenItem={indexActiveMenu === 4}
                setIsOpenItem={() => toggleOpenItem(4)}
                title="Ahorro"
                id="3"
                heightItem={'100%'}
                icon={<IconBank />}
              >
                <Item
                  filterDataSiteMap={filterDataSiteMap}
                  category="Ahorro"
                  type={1}
                  icon={<IconBank />}
                />
              </CollapseItem>
            </div>
            <div
              className="container-map-site-header"
              id="container-map-site-header"
            >
              <span>Empresas</span>
            </div>
            <div className="footer-content__accordion-links">
              <CollapseItem
                isOpenItem={indexActiveMenu === 5}
                setIsOpenItem={() => toggleOpenItem(5)}
                title="Cesantías"
                id="4"
                heightItem={'100%'}
                icon={<IconSombrilla />}
              >
                <Item
                  filterDataSiteMap={filterDataSiteMap}
                  category="Cesantías"
                  type={2}
                  icon={<IconSombrilla />}
                />
              </CollapseItem>
              <CollapseItem
                isOpenItem={indexActiveMenu === 6}
                setIsOpenItem={() => toggleOpenItem(6)}
                title="Pensión"
                id="5"
                heightItem={'100%'}
                icon={<IconPension />}
              >
                <Item
                  filterDataSiteMap={filterDataSiteMap}
                  category="Pensión"
                  type={2}
                  icon={<IconPension />}
                />
              </CollapseItem>
              <CollapseItem
                isOpenItem={indexActiveMenu === 7}
                setIsOpenItem={() => toggleOpenItem(7)}
                title="Ahorro"
                id="6"
                heightItem={'100%'}
                icon={<IconBank />}
              >
                <Item
                  filterDataSiteMap={filterDataSiteMap}
                  category="Ahorro"
                  type={2}
                  icon={<IconBank />}
                />
              </CollapseItem>
              {hiddenCategoria === 'true' ? (
                <CollapseItem
                  isOpenItem={indexActiveMenu === 8}
                  setIsOpenItem={() => toggleOpenItem(8)}
                  title="Corporativo y Accionistas"
                  id="7"
                  heightItem={'100%'}
                  icon={<CorporativoYAccionista />}
                >
                  <Item
                    filterDataSiteMap={filterDataSiteMapCorporativoYAccionistas}
                    category="Corporativo y Accionistas"
                    type={1}
                    icon={<CorporativoYAccionista />}
                  />
                </CollapseItem>
              ) : null}
              <CollapseItem
                isOpenItem={indexActiveMenu === 9}
                setIsOpenItem={() => toggleOpenItem(9)}
                title="Otras páginas"
                id="8"
                heightItem={'100%'}
                icon={<IconGlobe />}
              >
                <Item
                  filterDataSiteMap={filterDataCanales}
                  category="Otras páginas"
                  type={1}
                  icon={<IconGlobe />}
                />
              </CollapseItem>
            </div>
          </Breakpoint>
          <Breakpoint customQuery="(min-width: 1025px)">
            <div
              className="container-map-site-title"
              id="container-map-site-title"
            >
              <span>Mapa del sitio</span>
            </div>
            <div
              className="container-map-site-subtitle"
              id="container-map-site-subtitle"
            >
              <span>
                Disfruta de todo el contenido que tenemos para ti disponible en
                nuestro sitio web, navega y accede a información de utilidad
              </span>
            </div>
            <div
              className="container-map-site-header"
              id="container-map-site-header"
            >
              <span>Personas</span>
            </div>
            <Item
              filterDataSiteMap={filterDataSiteMap}
              category="Cesantías"
              type={1}
              icon={<IconSombrilla />}
            />
            <Item
              filterDataSiteMap={filterDataSiteMap}
              category="Inversión"
              type={1}
              icon={<IconGrafica />}
            />
            <Item
              filterDataSiteMap={filterDataSiteMap}
              category="Pensión"
              type={1}
              icon={<IconPension />}
            />
            <Item
              filterDataSiteMap={filterDataSiteMap}
              category="Ahorro"
              type={1}
              icon={<IconBank />}
            />
            <div
              className="container-map-site-header"
              id="container-map-site-header"
            >
              <span>Empresas</span>
            </div>
            <Item
              filterDataSiteMap={filterDataSiteMap}
              category="Cesantías"
              type={2}
              icon={<IconSombrilla />}
            />
            <Item
              filterDataSiteMap={filterDataSiteMap}
              category="Pensión"
              type={2}
              icon={<IconPension />}
            />
            <Item
              filterDataSiteMap={filterDataSiteMap}
              category="Ahorro"
              type={2}
              icon={<IconBank />}
            />
            {hiddenCategoria === 'true' ? (
              <Item
                filterDataSiteMap={filterDataSiteMapCorporativoYAccionistas}
                category="Corporativo y Accionistas"
                type={1}
                icon={<IconGlobe />}
              />
            ) : null}
            <Item
              filterDataSiteMap={filterDataCanales}
              category="Otras páginas"
              type={1}
              icon={<IconGlobe />}
            />
          </Breakpoint>
          <div className="container-map-site-section-like-share">
            <LikeShare
              location={location}
              setShowOptionsShare={setShowOptionsShare}
              showOptionsShare={showOptionsShare}
              title={'Mapa del sitio'}
              indexDBUser={indexDBUserName}
            />
          </div>
        </LayoutMain>
      </div>
    </>
  )
}

export default function MapaSitteComponent({ location, dispatch }) {
  const mapSiteQuery = useStaticQuery(graphql`
    query MyMapSiteQuery {
      allSitePage {
        edges {
          node {
            path
            context {
              cliente
              category
              metatittleSeo
              id
              titulocontent
              type
            }
          }
        }
      }

      allContentfulContenidoSimple(
        filter: { contentful_id: { eq: "50fhK6QvlrPBT5JK8VKM6D" } }
      ) {
        edges {
          node {
            titulo
            urlSeo
            contentful_id
            CuerpoContenido {
              json
            }
            metatittleSeo {
              metatittleSeo
            }
            metadescripcionSeo {
              metadescripcionSeo
            }
          }
        }
      }
    }
  `)
  return (
    <MapaDelSitio
      location={location}
      dispatch={dispatch}
      mapSiteQuery={mapSiteQuery}
    />
  )
}

function mapStateToProps(state) {
  return {
    accessibility: state.accesibility
  }
}

MapaSitteComponent = connect(mapStateToProps)(MapaSitteComponent)
