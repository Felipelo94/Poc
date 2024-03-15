import React, { useState, useEffect, useRef } from 'react'
import BestMenu from '../components/molecules/best-menu/best-menu'
import { graphql } from 'gatsby'
import LineServices from '../components/molecules/line-services/line-services'
import BreadCrumb from '../components/atoms/bread-crumb/bread-crumb'
import LayoutMain from '../templates/layout-main'
import { getDataIb } from '../services/service-indexDB/service-indexDB'
import { get } from '../services/service-general/service-general'
import { addInfoUser } from '../actions/You-cant-miss/You-cant-miss'
import { connect } from 'react-redux'
import { sendUserDataRedux } from '../utils/ReduxDataUtil'
import './internal-canales.scss'
import HeaderOficina from '../components/molecules/header-oficina/header-oficina'
import dataRespald from './internal-canales.json'
import { useLineService } from '../const/graphql/use-line-service'
import OficinaComponent from '../components/molecules/oficina/oficina'
import ContentChannel from '../components/molecules/content-channel/content-channel'
import VideoAdviser from '../components/molecules/video-adviser/video-adviser'
import globe from '../assets/images/headset.svg'
import appstore from '../assets/images/appstore.png'
import playstore from '../assets/images/playstore.png'
import appgallery from '../assets/images/AppGallery.png'

import Modal from '../components/atoms/modal/modal'
import dataModal from '../const/dictionary/data-modal-oficina-servicio.json'
import TabMenu from '../components/atoms/tab-menu/tab-menu'
import OptionChannel from '../components/molecules/option-channel/option-channel'
import { sendGaPush } from '../utils/classGtmUtil'
import { useCurrentWidth } from 'react-socks'
import { scaleText, SCALE_SIZE_15PX } from '../utils/scaleText'
import { ThemeProvider } from 'styled-components'
import { selectTheme } from '../utils/select-theme'
import Seo from '../components/internal-pages/common/seo/seo'
import { getCurrentHost } from '../utils/redirectUtil'

export function CanalesComponet({
  data,
  props,
  location,
  dispatch,
  accessibility
}) {
  let options = []
  let ordenid = [
    '31JYCa3KmNmAmNH2Pj5Zxm',
    '5JLi7v4HSJnhZGWiEjjfcP',
    '2vn2SgPCl0kmJMiXjTU58N',
    'R6FZFkM3O0CRfWZPYeDbN',
    '6jE41usupqw773MH9JWlMl',
    '6sg8keLI1FmaVVKxouylPb',
    '6NgqzQSfDywLkdsILYXFWB'
  ]

  let ordenGtm = [
    'gtmCanalesMenuProte',
    'gtmCanalesMenuAppProte',
    'gtmCanalesMenuLinServ',
    'gtmCanalesMenuVidases',
    'gtmCanalesMenuOfServ',
    'gtmCanalesMenuPronto'
  ]
  const dataContentful = useLineService()

  let isBrowser = typeof window !== 'undefined'
  let arrayNew = []
  const dataInfo = {
    allContentfulCanal: {
      edges: [
        {
          node: {
            descripcion: {
              descripcion:
                '__Bogotá:__ (031) 744 44 64\n__Medellín:__ (034) 510 90 99\n__Cali:__ (032) 510 90 99\n__Barranquilla:__ (035) 319 79 99\n__Cartagena:__ (035) 642 49 99\n__Resto del país desde una línea fija al:__ 01 8000 52 8000\n'
            },
            nombre: 'Líneas de Servicio'
          }
        }
      ]
    }
  }
  const canalesData = data ? data : dataRespald
  const lineServices = dataContentful ? dataContentful : dataInfo

  canalesData.allContentfulCanal.edges.map(items => {
    options.push({
      nombre: items.node.nombre,
      id: items.node.contentful_id,
      dateImage: items.node.imagen,
      textoIntroductorio: items.node.textoIntroductorio,
      cuerpocontenido: items.node.cuerpocontenido,
      title: items.node.nombre,
      urlSeo: items.node.urlSeo,
      subtitle: items.node.textoIntroductorio.textoIntroductorio,
      image: items.node.imagen.file.url,
      textoCallToAction: items.node.textoCallToAction,
      linkCallToAction: items.node.linkCallToAction,
      textoCallToActionSuperior: items.node.TextoCallToActionSuperior,
      linkCallToActionSuperior: items.node.LinkCallToActionSuperior,
      textoCallToAction2: items.node.textoCallToAction2,
      linkCallToAction2: items.node.linkCallToAction2,
      descripcionCallToAction: items.node.descripcionCallToAction
    })
  })

  let width = useCurrentWidth()
  const FilterArray = id => {
    const result = options.filter(word => word.id === id)
    return result[0]
  }

  ordenid.map(x => {
    const result = FilterArray(x)
    arrayNew.push(result)
    return arrayNew
  })

  const closeModal = () => {
    setIsOpenMenu(false)
    document.body.style.overflowY = 'scroll'
    document.body.style.overflow = 'scroll'
    document.documentElement.style.overflow = null
    sendGaPush('Canales', 'ClicModal', 'Cerrar')
  }

  const [itemActive, setitemActive] = useState('')
  const [onload, setOnload] = useState(false)
  const [indexDBUserName, setindexDBUserName] = useState('')
  const [indexActivo, setindexActivo] = useState(0)
  const [IsOpenMenu, setIsOpenMenu] = useState(false)
  const [ItemActive, setItemActive] = useState(null)
  const [actualLocation, setActualLocation] = useState(location)

  const ref = useRef(null)

  const modalHeight =
    width <= 1024
      ? '75%'
      : itemActive === '6jE41usupqw773MH9JWlMl'
      ? '520px'
      : '498px'

  const redirectMenu = () => {
    const internalUrl = data.allContentfulCanal.edges.find(
      item => item?.node.contentful_id === itemActive
    )
    if (internalUrl) {
      const currentHost = getCurrentHost()
      let state = {
        label: 'Protección: Pensiones, Cesantías, Ahorro e Inversión '
      }

      window.history.replaceState(
        state,
        'canales',
        `${currentHost}/canales/${internalUrl.node.urlSeo}`
      )
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setOnload(true)
    }, 100)
  }, [])

  useEffect(() => {
    if (window) {
      const splitUrl = window.location.pathname.split('/')
      const query = splitUrl[2] !== 'canales' ? splitUrl[2] : splitUrl[3]
      const idChanel = data.allContentfulCanal.edges.find(
        item => item.node.urlSeo === query
      )
      if (idChanel) {
        setitemActive(idChanel.node.contentful_id)
        if (
          idChanel.contentful_id === 'R6FZFkM3O0CRfWZPYeDbN' ||
          idChanel.contentful_id === '6jE41usupqw773MH9JWlMl'
        ) {
          document.documentElement.style.overflow = 'hidden'
          document.body.style.overflow = 'hidden'
        }
      }
    }
  }, [])

  useEffect(() => {
    if (itemActive === '') {
      redirectMenu()
    }
  }, [])

  useEffect(() => {
    sendUserDataRedux(getDataIb, setindexDBUserName, get, dispatch, addInfoUser)
  }, [dispatch])

  const modal = (
    <Modal
      close={closeModal}
      style={{ overflow: 'auto' }}
      styleBody={{ height: 'auto' }}
      id="encuesta-oficinas"
      titte={
        itemActive === '6jE41usupqw773MH9JWlMl'
          ? 'Oficinas de servicio'
          : 'Videoasesoria'
      }
      image={globe}
      height={modalHeight}
      alt="icon-encuesta"
      width={width <= 1024 ? '90%' : '580px'}
      margin=" 72px 0px "
      isCosed={false}
    >
      <div
        style={{
          fontSize: accessibility
            ? scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1.5).fontSize
            : null
        }}
        className="info-modal-lineas-services"
      >
        <div className="info-modal-lineas-services-text">
          {itemActive === '6jE41usupqw773MH9JWlMl' ? (
            <span>
              Si estás buscando nuestras oficinas para realizar alguno de los
              siguientes transacciones, ¡recuerda que los puedes hacer en línea!
              sin necesidad de moverte de tu casa
            </span>
          ) : (
            <span>
              ¿Estás buscando realizar alguna de las siguientes transacciones?
              ¡recuerda que los puedes hacer en línea! sin necesidad de moverte
              de tu casa
            </span>
          )}
        </div>
        <div>
          <div className="container-tab-modal-oficina">
            <TabMenu
              accessibility={accessibility}
              data={dataModal}
              active={ItemActive}
              setItemActive={setItemActive}
              close={closeModal}
            />
          </div>
        </div>
      </div>
    </Modal>
  )

  const openModal = () => {
    setIsOpenMenu(true)
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
  }

  const proxyTemplateServices = (id, accessibilityNew) => {
    switch (id) {
      case '2vn2SgPCl0kmJMiXjTU58N':
        return (
          <React.Fragment>
            <Seo
              pageContext={{
                title:
                  'Canales' +
                  (arrayNew[indexActivo]
                    ? ' ' + arrayNew[indexActivo].nombre
                    : '')
              }}
            />
            <LineServices
              accessibility={accessibilityNew}
              dataHeader={arrayNew[indexActivo]}
            />
          </React.Fragment>
        )
      case 'R6FZFkM3O0CRfWZPYeDbN':
        return (
          <React.Fragment>
            <Seo
              pageContext={{
                title:
                  'Canales' +
                  (arrayNew[indexActivo]
                    ? ' ' + arrayNew[indexActivo].nombre
                    : '')
              }}
            />
            <VideoAdviser
              accessibility={accessibilityNew}
              dataHeader={arrayNew[indexActivo]}
              IsOpenMenu={IsOpenMenu}
              modal={modal}
              openModal={openModal}
            />
          </React.Fragment>
        )
      case '6jE41usupqw773MH9JWlMl':
        return (
          <React.Fragment>
            <Seo
              pageContext={{
                title:
                  'Canales' +
                  (arrayNew[indexActivo]
                    ? ' ' + arrayNew[indexActivo].nombre
                    : '')
              }}
            />
            <OficinaComponent
              {...props}
              data={canalesData}
              dataContent={lineServices}
              IsOpenMenu={IsOpenMenu}
              dataHeader={arrayNew[indexActivo]}
              modal={modal}
              openModal={openModal}
              accessibility={accessibilityNew}
            />
          </React.Fragment>
        )
      case '5JLi7v4HSJnhZGWiEjjfcP':
        let dataOption = []
        const { linkCallToAction, descripcionCallToAction } = arrayNew[
          indexActivo
        ]
        dataOption.push({
          link: linkCallToAction,
          image: playstore,
          gtmTag: 'gtmCanalesAppProteGooglePlay',
          alt:
            'Ícono Google Play, lleva al home de la App de Protección dentro de la tienda, para su descarga',
          title: 'Ícono de Google Play'
        })
        dataOption.push({
          link: 'https://apps.apple.com/co/app/protecci%C3%B3n/id1015636587',
          image: appstore,
          gtmTag: 'gtmCanalesAppProteAppStore',
          alt:
            'Ícono de App Store, lleva al home de la App de Protección dentro de la tienda, para su descarga',
          title: 'Ícono de App Store'
        })
        dataOption.push({
          link: 'https://appgallery.huawei.com/#/app/C103925671',
          image: appgallery,
          gtmTag: 'gtmCanalesAppProteHuaweiAppGallery',
          alt:
            'Ícono de App Gallery Huawei, lleva al home de la App de Protección dentro de la tienda, para su descarga',
          title: 'Ícono de App Gallery Huawei'
        })
        return (
          <>
            <Seo
              pageContext={{
                title:
                  'Canales' +
                  (arrayNew[indexActivo]
                    ? ' ' + arrayNew[indexActivo].nombre
                    : '')
              }}
            />
            <div className="container-app-store">
              <OptionChannel
                accessibility={accessibilityNew}
                title={descripcionCallToAction}
                data={dataOption}
                isApp={true}
              />
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <ThemeProvider
      theme={selectTheme(
        indexDBUserName?.category,
        accessibility,
        indexDBUserName?.type
      )}
    >
      <div ref={ref} className="container-canales" id="container-canales">
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
            style={{ borderBottom: '1px #E2E7ED solid', margin: 'auto' }}
          >
            <BreadCrumb
              location={actualLocation}
              defaultTypeUser={1}
              defaultCategoryUser="Pensión"
              defaultSubcategoryUser="pension-vejez"
            />
          </div>
          <div>
            {onload && (
              <BestMenu
                options={arrayNew}
                setitemActive={setitemActive}
                active={itemActive}
                gmtTag={ordenGtm}
                setindexActivo={setindexActivo}
                indexActivo={indexActivo}
                categoryGtm="Canales"
                actionGtm="ClicMenu"
                isChannel={true}
                setActualLocation={setActualLocation}
                actualLocation={actualLocation}
              >
                <HeaderOficina
                  accessibility={accessibility}
                  data={arrayNew[indexActivo]}
                />
                <div className="container-content-canales">
                  {arrayNew[indexActivo].cuerpocontenido && (
                    <ContentChannel
                      accessibility={accessibility}
                      data={arrayNew[indexActivo].cuerpocontenido}
                    />
                  )}
                  {proxyTemplateServices(itemActive, accessibility)}
                </div>
              </BestMenu>
            )}
          </div>
        </LayoutMain>
      </div>
    </ThemeProvider>
  )
}

function mapStateToProps(state) {
  return {
    accessibility: state.accesibility
  }
}

CanalesComponet = connect(mapStateToProps)(CanalesComponet)

export const pageQuery = graphql`
  query MyQuerys($ids: [String!]) {
    allContentfulCanal(filter: { contentful_id: { in: $ids } }) {
      edges {
        node {
          nombre
          contentful_id
          urlSeo
          imagen {
            file {
              url
              fileName
            }
          }
          textoIntroductorio {
            textoIntroductorio
          }
          cuerpocontenido {
            json
          }
          textoCallToAction
          linkCallToAction
          descripcionCallToAction
        }
      }
    }
    allContentfulOficina(sort: { fields: ciudad }) {
      edges {
        node {
          nombre
          direccion {
            direccion
          }
          telefono
          horario {
            horario
          }
          ciudad
          coordenadas {
            lat
            lon
          }
        }
      }
    }
  }
`
export default CanalesComponet
