import { graphql } from 'gatsby'
import queryString from 'query-string'
import React, { useEffect, useState } from 'react'
import { isAndroid, isIOS } from 'react-device-detect'
import { connect } from 'react-redux'
import { Breakpoint, useCurrentWidth } from 'react-socks'
import { ThemeProvider } from 'styled-components'
import { addInfoUser } from '../actions/You-cant-miss/You-cant-miss'
import BreadCrumb from '../components/atoms/bread-crumb/bread-crumb'
import ButtonShare from '../components/atoms/button-share/button-share'
import Like from '../components/atoms/like/like'
import ComponentShare from '../components/molecules/component-share/component-share'
import ExitStreet from '../components/molecules/exit-street/exit-street'
import Footer from '../components/molecules/footer/footer'
import HeaderTalent from '../components/molecules/header-talent/header-talent'
import Header from '../components/molecules/header/header'
import LinksInterest from '../components/molecules/links-interest/links-interest'
import PodcastContentful from '../components/molecules/podcast-contentful/podcast-contentful'
import StepByStepMobile from '../components/molecules/step-by-step-mobile/step-by-step-mobile'
import StepByStep from '../components/molecules/step-by-step/step-by-step'
import { VALID_CATEGORIES_PROFILING } from '../const/dictionary/general-const'
import mapCategories from '../const/dictionary/map-categories'
import options from '../const/dictionary/options-more-content.json'
import { useLineServiceComplete } from '../const/graphql/use-line-services-complete'
import { get } from '../services/service-general/service-general'
import { getDataIb } from '../services/service-indexDB/service-indexDB'
import { clickWithScrollCenter } from '../utils/commons-event-content'
import { createImage } from '../utils/create-image'
import { mapParagraphtoParrafo } from '../utils/map-paragraph-to-parrafo'
import { getDataMoreContent } from '../utils/moreContent'
import { sendUserDataRedux } from '../utils/ReduxDataUtil'
import { selectTheme } from '../utils/select-theme'
import { gtmTSHComponentShare } from './../const/dictionary/gtm-component-share'
import useSetTypeUserAndCategoryState from './../hooks/useSetTypeUserAndCategoryState'
import Seo from '../components/internal-pages/common/seo/seo'
import './internal-talento-si-hay.scss'

function InternalTalentoSiHay({
  data,
  dispatch,
  location,
  pageContext,
  accessibility
}) {
  let isBrowser = typeof window !== 'undefined'
  const [indexDBUserName, setindexDBUserName] = useState('')
  const [imageStepbyStepJpg, setImageStepbyStepJpg] = useState('')
  const [imageStepbyStepSvg, setImageStepbyStepSvg] = useState('')
  const [imageStepbyStepSvgMobile, setImageStepbyStepSvgMobile] = useState('')
  const [dataContenidoTalentoSiHay, setDataContenidoTalentoSiHay] = useState('')
  const [marginAdditional, setMarginAdditional] = useState(false)
  const [isShare, setIsShare] = useState(false)
  const [dataUtils, setdataUtils] = useState([])
  const widthScreen = useCurrentWidth()
  const dataProduct = useLineServiceComplete({
    category: 'Ahorro',
    type: pageContext.cliente
  })
  let category_id = mapCategories(
    dataProduct,
    indexDBUserName ? indexDBUserName.category : 'Ahorro'
  )
  let type_id = mapCategories(
    dataProduct,
    indexDBUserName ? indexDBUserName.type : 1
  )

  let params = isBrowser ? queryString.parse(window.location.search) : false
  let validateQuery = params['Podcats'] ? true : false
  if (validateQuery) {
    clickWithScrollCenter(
      document.getElementById(`Internal-talento-si-hay-container-podcats-title`)
    )
  }

  useSetTypeUserAndCategoryState(pageContext.typeCustomer, pageContext.category)

  const resultUser = user => {
    setindexDBUserName(user)
    setdataUtils(
      dataProduct &&
        getDataMoreContent(
          dataProduct,
          pageContext.id,
          category_id,
          null,
          type_id,
          null,
          pageContext.bites,
          pageContext.line
        )
    )
  }

  const dataTranform = datos => {
    const dataDefualtContenful = datos.contenido[0].cuerpocontenido
      ? datos.contenido[0].cuerpocontenido.json
      : null

    const dataDefualtContenful2 = datos.contenido[0].cuerpocontenido2
      ? datos.contenido[0].cuerpocontenido2.json
      : null

    const dataParrafos = datos.contenido[0].cuerpocontenido
      ? datos.contenido[0].cuerpocontenido.json.content.slice()
      : null

    const dataParrafos2 = datos.contenido[0].cuerpocontenido2
      ? datos.contenido[0].cuerpocontenido2.json.content.slice()
      : null

    const parrafos = datos.contenido[0].cuerpocontenido
      ? mapParagraphtoParrafo(dataParrafos, dataDefualtContenful)
      : []

    const parrafos2 = datos.contenido[0].cuerpocontenido2
      ? mapParagraphtoParrafo(dataParrafos2, dataDefualtContenful2)
      : []

    const titleSeo = datos.contenido[0].metatittleSeo
      ? datos.contenido[0].metatittleSeo
      : 'Talento Sí Hay de Protección te da la bienvenida'

    const metadescripcionSeo = datos.contenido[0].metadescripcionSeo
      ? datos.contenido[0].metadescripcionSeo.metadescripcionSeo
      : ''

    const keywordsSeo = datos.contenido[0].keywordsSeo
      ? datos.contenido[0].keywordsSeo.keywordsSeo
      : ''

    let allTitle = []

    const callToActionSuperior = {
      url: datos.contenido[0].LinkCallToActionSuperior
        ? datos.contenido[0].LinkCallToActionSuperior
        : null,
      texto: datos.contenido[0].TextoCallToActionSuperior
        ? datos.contenido[0].TextoCallToActionSuperior
        : null
    }

    if (parrafos) {
      parrafos.map((paragraph, index) =>
        paragraph.content.map(({ content, nodeType, data }) => {
          if (nodeType.indexOf('heading') >= 0) {
            content.map(value => {
              if (
                value.value &&
                value.value.trim().length > 0 &&
                value.value !== 'Enlaces de interés:'
              ) {
                allTitle.push({
                  element: `Botón ${value.value}`,
                  event: {
                    category: 'LandingOfertas',
                    action: `ClicSuperior-${datos.contenido[0].titulo}`,
                    label: `${value.value}`,
                    tab: value.value
                  },
                  class: `LandingOfertas-ClicSuperior-${datos.contenido[0].titulo}-${value.value}.replace(/\s+/g, '-');`
                })
              }
              return null
            })
          } else if (nodeType.indexOf('embedded-entry-block') >= 0) {
            if (data.target.sys.contentType) {
              if (
                data.target.sys.contentType.sys.id === 'aliados' ||
                data.target.sys.contentType.sys.id === 'PrivilegiosProteccion'
              ) {
                data.target.gtmTSHStepperAllies = {
                  element: `tarjeta ${data.target.fields.titulo['en-US']}`,
                  event: {
                    category: 'LandingOfertas',
                    action: `ClicTarjeta-${allTitle[index].event.tab}`,
                    label: `${data.target.fields.titulo['en-US']}`,
                    tab: data.target.fields.titulo['en-US']
                  },
                  class: `LandingOfertas-ClicTarjeta-${allTitle[index].event.tab}-${data.target.fields.titulo['en-US']}`.replace(
                    /\s+/g,
                    '-'
                  )
                }
              } else if (data.target.sys.contentType.sys.id === 'contenido') {
                if (data.target.fields.listadoVideos) {
                  data.target.fields.gtmTSHStepperAllies = {
                    element: `video ${data.target.fields.titulo['en-US']}`,
                    event: {
                      category: 'LandingOfertas',
                      action: `ClicVideo-${allTitle[index].event.tab}`,
                      label: `${data.target.fields.titulo['en-US']}`,
                      tab: data.target.fields.titulo['en-US']
                    },
                    class: `LandingOfertas-ClicVideo-${allTitle[index].event.tab}-${data.target.fields.titulo['en-US']}`.replace(
                      /\s+/g,
                      '-'
                    )
                  }
                } else {
                  data.target.fields.gtmTSHStepperAllies = {
                    element: `acordeon ${data.target.fields.titulo['en-US']}`,
                    event: {
                      category: 'LandingOfertas',
                      action: `ClicAcordeon-${allTitle[index].event.tab}`,
                      label: `${data.target.fields.titulo['en-US']}`,
                      tab: data.target.fields.titulo['en-US']
                    },
                    class: `LandingOfertas-ClicAcordeon-${allTitle[index].event.tab}-${data.target.fields.titulo['en-US']}`.replace(
                      /\s+/g,
                      '-'
                    )
                  }
                }
              }
            }
          } else {
            content.map(item => {
              if (item.nodeType === 'hyperlink') {
                if (item.content?.[0].value !== '¡Actualízalos aquí!') {
                  item.data.inlinesHyperlink = {
                    element: `Botón ${item.content?.[0].value}`,
                    event: {
                      category: 'LandingOfertas',
                      action: `ClicBotonBanner-${allTitle[index].event.tab}`,
                      label: `${item.content?.[0].value}`
                    },
                    class: `gtmLandingOfertas-ClicBotonBanner-${allTitle[index].event.tab}-${item.content?.[0].value}`.replace(
                      /\s+/g,
                      '-'
                    )
                  }
                } else {
                  item.data.inlinesHyperlink = {
                    event: {
                      label: `${item.content?.[0].value}`,
                      action: `ClicUrlBanner-${allTitle[index].event.tab}`,
                      category: 'LandingOfertas'
                    },
                    element: `Botón ${item.content?.[0].value}`,
                    class: `gtmLandingOfertas-ClicUrlBanner-${allTitle[index].event.tab}-${item.content?.[0].value}.replace(/\s+/g, '-');`
                  }
                }
                return null
              }
            })
          }
        })
      )
    }
    if (parrafos2) {
      parrafos2.map((paragraph, index) =>
        paragraph.content.map(({ content, nodeType, data }) => {
          if (nodeType.indexOf('embedded-entry-block') >= 0) {
            if (data.target.sys.contentType) {
              if (data.target.sys.contentType.sys.id === 'EnlacesDeInteres') {
                data.target.gtmTSHStepperAllies = {
                  element: `tarjeta ${data.target.fields.titulo['en-US']}`,
                  event: {
                    category: 'LandingOfertas',
                    action: `ClicEnlaces-${datos.contenido[0].titulo}`,
                    label: `${data.target.fields.titulo['en-US']}`,
                    tab: data.target.fields.titulo['en-US']
                  },
                  class: `LandingOfertas-ClicEnlaces-${datos.contenido[0].titulo}-${data.target.fields.titulo['en-US']}`.replace(
                    /\s+/g,
                    '-'
                  )
                }
              }
            }
          } else {
            content.map(item => {
              if (item.nodeType === 'hyperlink') {
                item.data.inlinesHyperlink = {
                  element: `tarjeta ${data.target.fields.titulo['en-US']}`,
                  event: {
                    category: 'LandingOfertas',
                    action: `ClicUrlSugerido-${datos.contenido[0].titulo}`,
                    label: `${data.target.fields.TextoCallToAction['en-US']}`,
                    tab: data.target.fields.titulo['en-US']
                  },
                  class: `LandingOfertas-ClicUrlSugerido-${datos.contenido[0].titulo}-${data.target.fields.titulo['en-US']}`.replace(
                    /\s+/g,
                    '-'
                  )
                }
                return null
              } else if (item.nodeType === 'list-item') {
                item.content.map(ite => {
                  if (ite.nodeType === 'paragraph') {
                    ite.content.map(it => {
                      if (it.nodeType === 'hyperlink') {
                        it.data.inlinesHyperlink = {
                          element: `tarjeta ${it.content?.[0].value}`,
                          event: {
                            category: 'LandingOfertas',
                            action: `ClicUrlSugerido-${datos.contenido[0].titulo}`,
                            label: `${it.content?.[0].value}`,
                            tab: it.content?.[0].value
                          },
                          class: `LandingOfertas-ClicUrlSugerido-${datos.contenido[0].titulo}-${it.content?.[0].value}`.replace(
                            /\s+/g,
                            '-'
                          )
                        }
                        return null
                      }
                    })
                  }
                })
                return null
              }
            })
          }
        })
      )
    }

    let arrayTalentoSiHay = {
      banner: datos.ImagenPrincipalEscritorio[0],
      bannerMobile: datos.ImagenPrincipalMobile[0],
      imageSecundaria: datos.ImagenSecundaria?.[0],
      imageSecundariaMobile: datos.ImagenSecundariaMobile?.[0],
      header: {
        title: datos.contenido[0].titulo,
        descripcion: datos.contenido[0].descripcioncorta,
        image: datos.contenido[0].imagenes
      },
      dataSend: {
        title: datos.contenido[0].titulo,
        imagenes: null,
        parrafos: parrafos,
        parrafos2: parrafos2,
        cta: null,
        video: null,
        podcast: null
      },
      linksInterest: {
        opcionOne: parrafos,
        opcionTwo: parrafos2
      },
      podcasts: datos.contenido[0].podcast,
      seo: {
        tittle: titleSeo,
        metadescription: metadescripcionSeo,
        keywords: keywordsSeo
      },
      linea: datos.lineaDeProducto,
      gtmTSHStepperButtons: allTitle,
      callToActionSuperior: callToActionSuperior
    }

    setDataContenidoTalentoSiHay(arrayTalentoSiHay)
    return arrayTalentoSiHay
  }

  const getSelectedTabParameterIfExists = () => {
    if (params.tab) return parseInt(params.tab)
  }

  useEffect(() => {
    const filterTalento = data.allContentfulOfertaDiferencial.edges.filter(
      items => items.node.contentful_id === pageContext.id
    )
    dataTranform(filterTalento[0].node)
    getSelectedTabParameterIfExists()
  }, [])

  useEffect(() => {
    setdataUtils(
      dataProduct &&
        getDataMoreContent(
          dataProduct,
          pageContext.id,
          category_id,
          null,
          type_id,
          null,
          pageContext.bites,
          pageContext.line
        )
    )
  }, [category_id, type_id])

  useEffect(() => {
    sendUserDataRedux(getDataIb, resultUser, get, dispatch, addInfoUser)
  }, [dispatch])

  useEffect(() => {
    dataContenidoTalentoSiHay?.dataSend?.parrafos?.map(paragraph =>
      paragraph.content.map(({ data, nodeType }, i) => {
        const indexElement = nodeType.indexOf('embedded-asset-block')
        if (indexElement >= 0) {
          return createImage(
            data,
            paragraph.content,
            i,
            setImageStepbyStepJpg,
            setImageStepbyStepSvg,
            setImageStepbyStepSvgMobile,
            widthScreen
          )
        }
      })
    )
  }, [dataContenidoTalentoSiHay])

  return (
    <>
      <Seo pageContext={pageContext} />
      <ThemeProvider
        theme={selectTheme(
          indexDBUserName ? indexDBUserName.category : pageContext.category,
          accessibility,
          indexDBUserName ? indexDBUserName.type : pageContext.typeCustomer
        )}
      >
        <div className="hidden-lable">Oferta Diferencial</div>
        <div
          className={`Internal-talento-si-hay-container${
            pageContext.category === VALID_CATEGORIES_PROFILING.inversion
              ? ' internal-talento-si-hay-container--inversion'
              : ''
          }`}
          id="Internal-talento-si-hay-container"
        >
          <Header
            showTypePerson={true}
            isOpenMenu={false}
            showQuickAccess={true}
            defaultTypeUser={pageContext?.cliente}
            defaultCategoryUser={pageContext?.category}
            defaultSubcategoryUser={
              pageContext.category === 'Pensión' && pageContext.cliente === 1
                ? 'pension-vejez'
                : ''
            }
            indexDBUserName={indexDBUserName.nameuser}
            indexDBUser={indexDBUserName}
            enabledAccessibility={e => {
              setMarginAdditional(e)
            }}
          />
          <div
            style={{ marginTop: marginAdditional ? 114 : 52 }}
            className="container-internal-content-bread-crumb"
          >
            {location && (
              <BreadCrumb
                location={location}
                defaultTypeUser={pageContext?.cliente}
                defaultCategoryUser={pageContext?.category}
                defaultSubcategoryUser={
                  pageContext?.category === 'Pensión' &&
                  pageContext?.cliente === 1
                    ? 'pension-vejez'
                    : ''
                }
              />
            )}
            <div className="bread-crumbs" />
          </div>
          <div className="Internal-talento-si-hay-container-big">
            <div
              className="Internal-talento-si-hay-container-banner"
              id="Internal-talento-si-hay-container-banner"
            >
              <img
                title={
                  dataContenidoTalentoSiHay
                    ? widthScreen > 1024
                      ? dataContenidoTalentoSiHay.banner.title
                      : dataContenidoTalentoSiHay.bannerMobile.title
                    : null
                }
                src={
                  dataContenidoTalentoSiHay
                    ? widthScreen > 1024
                      ? dataContenidoTalentoSiHay.banner.file.url
                      : dataContenidoTalentoSiHay.bannerMobile.file.url
                    : null
                }
                alt={
                  dataContenidoTalentoSiHay
                    ? widthScreen > 1024
                      ? dataContenidoTalentoSiHay.banner.description
                      : dataContenidoTalentoSiHay.bannerMobile.description
                    : null
                }
              />
            </div>
            <div
              className="Internal-talento-si-hay-container-header"
              id="Internal-talento-si-hay-container-header"
            >
              <HeaderTalent
                accessibility={accessibility}
                title={
                  dataContenidoTalentoSiHay
                    ? dataContenidoTalentoSiHay.header.title
                    : null
                }
                subtitle={
                  dataContenidoTalentoSiHay
                    ? dataContenidoTalentoSiHay.header.descripcion
                    : null
                }
                image={
                  dataContenidoTalentoSiHay
                    ? dataContenidoTalentoSiHay.header.image?.[0]
                    : null
                }
                isTalento={pageContext.id === '3AZW4bWcQv1Q8k9GkUYHP0'}
                callToActionSuperior={
                  dataContenidoTalentoSiHay.callToActionSuperior
                }
                pageContext={pageContext}
                type={type_id}
              />
            </div>
            {dataContenidoTalentoSiHay && (
              <div
                id="Internal-talento-si-hay-container-StepByStep"
                className="Internal-talento-si-hay-container-StepByStep"
              >
                <Breakpoint customQuery="(max-width: 1024px)">
                  <StepByStepMobile
                    accessibility={accessibility}
                    line={pageContext.category}
                    lineGtm={pageContext.category}
                    data={
                      dataContenidoTalentoSiHay
                        ? dataContenidoTalentoSiHay.dataSend
                        : []
                    }
                    notData={true}
                    user={indexDBUserName.nameuser}
                    titleH2={true}
                    imageStepbyStepJpg={imageStepbyStepJpg}
                    imageStepbyStepSvg={imageStepbyStepSvgMobile}
                    THS={true}
                    gtmClassSteps={
                      dataContenidoTalentoSiHay
                        ? dataContenidoTalentoSiHay.gtmTSHStepperButtons
                        : []
                    }
                    isTalento={pageContext.id !== '3AZW4bWcQv1Q8k9GkUYHP0'}
                    selectedTabIndex={getSelectedTabParameterIfExists()}
                  />
                </Breakpoint>
                <Breakpoint customQuery="(min-width: 1025px)">
                  <StepByStep
                    accessibility={accessibility}
                    line={pageContext.category}
                    lineGtm={pageContext.category}
                    data={
                      dataContenidoTalentoSiHay
                        ? dataContenidoTalentoSiHay.dataSend
                        : null
                    }
                    notData={true}
                    user={indexDBUserName.nameuser}
                    isNotCallToAction={true}
                    imageStepbyStepJpg={imageStepbyStepJpg}
                    imageStepbyStepSvg={imageStepbyStepSvg}
                    THS={true}
                    gtmClassSteps={
                      dataContenidoTalentoSiHay
                        ? dataContenidoTalentoSiHay.gtmTSHStepperButtons
                        : []
                    }
                    isTalento={pageContext.id !== '3AZW4bWcQv1Q8k9GkUYHP0'}
                    selectedTabIndex={getSelectedTabParameterIfExists()}
                  />
                </Breakpoint>
              </div>
            )}
            <div
              id="Internal-talento-si-hay-container-podcats"
              className="Internal-talento-si-hay-container-podcats"
            >
              <div
                id="Internal-talento-si-hay-container-podcats-title"
                className="Internal-talento-si-hay-container-podcats-title"
              >
                <span>
                  {dataContenidoTalentoSiHay
                    ? dataContenidoTalentoSiHay.podcasts?.[0].titulo
                    : null}
                </span>
              </div>
              <div
                id="Internal-talento-si-hay-container-podcats-descripcion"
                className="Internal-talento-si-hay-container-podcats-descripcion"
              >
                <span>
                  {dataContenidoTalentoSiHay
                    ? dataContenidoTalentoSiHay.podcasts?.[0].descripcion
                    : null}
                </span>
              </div>
              {dataContenidoTalentoSiHay
                ? dataContenidoTalentoSiHay.podcasts?.map(podcast => {
                    return (
                      <PodcastContentful
                        eventsGAComponentShare={gtmTSHComponentShare(
                          dataContenidoTalentoSiHay
                            ? dataContenidoTalentoSiHay.header.title
                            : null,
                          'LandingOfertas'
                        )}
                        contentURL={
                          validateQuery
                            ? location.href
                            : `${location.href}?Podcats=true`
                        }
                        contentTitle={
                          dataContenidoTalentoSiHay
                            ? dataContenidoTalentoSiHay.header.title
                            : null
                        }
                        podcast={podcast}
                      />
                    )
                  })
                : null}
            </div>
            <div
              id="Internal-talento-si-hay-container-links-interest"
              className="Internal-talento-si-hay-container-links-interest"
            >
              <LinksInterest
                accessibility={accessibility}
                lineGtm={pageContext.category}
                data={dataContenidoTalentoSiHay?.dataSend}
                notData={true}
                user={indexDBUserName.nameuser}
                isNotCallToAction={true}
                imageSecundaria={
                  dataContenidoTalentoSiHay
                    ? widthScreen > 1024
                      ? dataContenidoTalentoSiHay.imageSecundaria
                      : dataContenidoTalentoSiHay.imageSecundariaMobile
                    : null
                }
              />
            </div>
            <div className="separator" />
            <section className="Internal-talento-si-hay-container-like">
              <Like
                eventsGA={{
                  MeGusta: {
                    category: 'LandingOfertas',
                    action: `ClicContenidos ${
                      dataContenidoTalentoSiHay
                        ? dataContenidoTalentoSiHay.header.title
                        : ''
                    }`,
                    label: 'TeGustoEstaInformacion-MeGusta'
                  },
                  NoMeGusta: {
                    category: 'LandingOfertas',
                    action: `ClicContenidos ${
                      dataContenidoTalentoSiHay
                        ? dataContenidoTalentoSiHay.header.title
                        : ''
                    }`,
                    label: 'TeGustoEstaInformacion-NoMeGusta'
                  }
                }}
                indexDBUser={indexDBUserName}
                item={{
                  node: {}
                }}
                pathname={location}
                title={
                  dataContenidoTalentoSiHay
                    ? dataContenidoTalentoSiHay.header.title
                    : null
                }
              />
              <div
                id="Internal-talento-si-hay-container-like-share"
                className="Internal-talento-si-hay-container-like-share"
              >
                <ButtonShare
                  title={
                    dataContenidoTalentoSiHay
                      ? dataContenidoTalentoSiHay.header.title
                      : null
                  }
                  type="Persona"
                  line="talento"
                  setIsShare={setIsShare}
                  eventsGA={{
                    category: 'LandingOfertas',
                    action: `ClicPersona-Contenidos-${
                      dataContenidoTalentoSiHay
                        ? dataContenidoTalentoSiHay.header?.title
                        : ''
                    }`,
                    label: 'ComparteEsteContenido'
                  }}
                  isShare={isShare}
                />

                <div
                  style={{ display: isShare ? null : 'none' }}
                  className={
                    isShare
                      ? 'container-internal-content-componente-share-component share-animation-active'
                      : 'container-internal-content-componente-share-component share-animation-inactive'
                  }
                >
                  <ComponentShare
                    title={
                      dataContenidoTalentoSiHay
                        ? dataContenidoTalentoSiHay.header.title
                        : null
                    }
                    type="Persona"
                    line="Inversión"
                    url={location.href}
                    isActive={isShare}
                    setIsShare={setIsShare}
                    eventsGA={gtmTSHComponentShare(
                      dataContenidoTalentoSiHay
                        ? dataContenidoTalentoSiHay.header.title
                        : null,
                      'LandingOfertas'
                    )}
                    showEmail
                  />
                </div>
              </div>
            </section>
            <ExitStreet
              accessibility={accessibility}
              dataUtils={dataUtils}
              options={options}
              widthScreen={widthScreen}
              pageContext={pageContext}
              line={pageContext.category}
              indexDBUserName={indexDBUserName}
              title={
                dataContenidoTalentoSiHay
                  ? dataContenidoTalentoSiHay.header.title
                  : null
              }
            />
          </div>
          <Footer
            isIOS={isIOS}
            isAndroid={isAndroid}
            isInterna={true}
            colorFooter={'#FAFBFC'}
          />
        </div>
      </ThemeProvider>
    </>
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

InternalTalentoSiHay = connect(mapStateToProps)(InternalTalentoSiHay)

export default InternalTalentoSiHay
export const pageQuery = graphql`
  query PageContentBySlugTalentoSiHay($ids: [String!]) {
    allContentfulOfertaDiferencial(filter: { contentful_id: { in: $ids } }) {
      edges {
        node {
          lineaDeProducto {
            nombre
            contentful_id
          }
          ImagenSecundaria {
            file {
              fileName
              url
            }
            fluid {
              src
            }
            title
            description
          }
          ImagenSecundariaMobile {
            file {
              url
              fileName
            }
            fluid {
              src
            }
            description
            title
          }
          titulo
          contentful_id
          contenido {
            LinkCallToActionSuperior
            TextoCallToActionSuperior
            podcast {
              contentful_id
              OrigenDeAudio
              linkPodcast {
                linkPodcast
              }
              titulo
              descripcion
              updatedAt
              LinkListaDeReproduccion1
              LinkListaDeReproduccion2
              LinkListaDeReproduccion3
              ImagenListaDeReproduccion1 {
                file {
                  url
                  fileName
                }
                fluid {
                  src
                }
              }
              ImagenListaDeReproduccion2 {
                file {
                  url
                  fileName
                }
                fluid {
                  src
                }
              }
              ImagenListaDeReproduccion3 {
                file {
                  url
                  fileName
                }
                fluid {
                  src
                }
              }
            }
            cuerpocontenido {
              json
            }
            metatittleSeo
            keywordsSeo {
              keywordsSeo
            }
            metadescripcionSeo {
              metadescripcionSeo
            }
            cuerpocontenido2 {
              json
            }
            imagenes {
              file {
                fileName
                url
              }
              fluid {
                src
              }
              title
              description
            }
            urlSeo
            titulo
            descripcioncorta
          }
          ImagenPrincipalMobile {
            fluid {
              src
            }
            description
            file {
              fileName
              url
            }

            title
          }
          ImagenPrincipalEscritorio {
            file {
              fileName
              url
            }
            fluid {
              src
            }
            description
            title
          }
        }
      }
    }
  }
`
