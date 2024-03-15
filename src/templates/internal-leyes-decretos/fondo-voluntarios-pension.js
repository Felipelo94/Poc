import React, { useEffect, useState } from 'react'
import { isAndroid, isIOS } from 'react-device-detect'
import { useCurrentWidth } from 'react-socks'
import { ThemeProvider } from 'styled-components'
import { addInfoUser } from '../../actions/You-cant-miss/You-cant-miss'
import BreadCrumb from '../../components/atoms/bread-crumb/bread-crumb'
import ButtonShare from '../../components/atoms/button-share/button-share'
import Like from '../../components/atoms/like/like'
import Video from '../../components/atoms/video/video'
import ComponentShare from '../../components/molecules/component-share/component-share'
import ContentProxy from '../../components/molecules/content-proxy/content-proxy'
import ContentWidget from '../../components/molecules/content-widget/content-widget'
import Footer from '../../components/molecules/footer/footer'
import HeaderInversiones from '../../components/molecules/header-inversiones/header-inversiones'
import Header from '../../components/molecules/header/header'
import LongText from '../../components/molecules/long-text/long-text'
import { gtmTSHComponentShare } from '../../const/dictionary/gtm-component-share'
import useIsContentLoadedOnBrowser from '../../hooks/useIsContentLoadedOnBrowser'
import { get } from '../../services/service-general/service-general'
import { getDataIb } from '../../services/service-indexDB/service-indexDB'
import { mapParagraphtoParrafo } from '../../utils/map-paragraph-to-parrafo'
import { sendUserDataRedux } from '../../utils/ReduxDataUtil'
import { selectTheme } from '../../utils/select-theme'
import Seo from '../../components/internal-pages/common/seo/seo'
import './internal-leyes-y-decretos.scss'

const FondoVoluntariosPension = ({
  data,
  pageContext,
  dispatch,
  location,
  accessibility
}) => {
  const isLoadedInternalOnBrowser = useIsContentLoadedOnBrowser()
  const widthScreen = useCurrentWidth()
  let isBrowser = typeof window !== 'undefined'
  const [indexDBUserName, setindexDBUserName] = useState('')
  const [marginAdditional, setMarginAdditional] = useState(false)
  const [stateLeyesYDecretos, setStateLeyesYDecretos] = useState('')
  const [listVideo, setListVideo] = useState(null)
  const [isShare, setIsShare] = useState(false)

  const resultUser = user => {
    setindexDBUserName(user)
  }

  useEffect(() => {
    sendUserDataRedux(getDataIb, resultUser, get, dispatch, addInfoUser)
  }, [dispatch])

  const createImage = image => ({
    imagen: image.file.url,
    nameImage: image.description,
    title: image.title
  })

  const dataTranform = datos => {
    let contenido = datos[0]

    const videoInitial = contenido.listadoVideos
      ? contenido.listadoVideos.length > 0
        ? contenido.listadoVideos[0]
        : null
      : null
    const idVideoInitial = videoInitial
      ? videoInitial.split('embed/')[1].toString()
      : ''

    get(
      [
        { name: 'key', value: 'AIzaSyCVoE76R8A5F8zFYclIuRkDxT_kW5hwKjI' },
        { name: 'id', value: idVideoInitial },
        { name: 'part', value: 'snippet' }
      ],
      'https://www.googleapis.com/youtube/v3/videos',
      false
    )
      .then(resul => {
        const listFinal = resul.items.map(videoY => {
          const itemVideo = {}
          itemVideo.img = videoY.snippet.thumbnails
          itemVideo.title = videoY.snippet.title
          itemVideo.description = videoY.snippet.description
          itemVideo.url = 'https://www.youtube.com/embed/' + videoY.id
          return itemVideo
        })
        setListVideo(listFinal)
      })
      .catch(error => {})

    const title = contenido.titulo

    const dataDefualtContenful2 = contenido.cuerpocontenido2
      ? contenido.cuerpocontenido2.json
      : null

    const dataDefualtContenful = contenido.cuerpocontenido
      ? contenido.cuerpocontenido.json
      : null

    const dataParrafos2 = contenido.cuerpocontenido2
      ? contenido.cuerpocontenido2.json.content.slice()
      : null

    const dataParrafos = contenido.cuerpocontenido
      ? contenido.cuerpocontenido.json.content.slice()
      : null

    const parrafos = contenido.cuerpocontenido
      ? mapParagraphtoParrafo(dataParrafos, dataDefualtContenful)
      : []

    const parrafos2 = contenido.cuerpocontenido2
      ? mapParagraphtoParrafo(dataParrafos2, dataDefualtContenful2)
      : []

    const callToActionSuperior = {
      url: contenido.LinkCallToActionSuperior
        ? contenido.LinkCallToActionSuperior
        : null,
      texto: contenido.TextoCallToActionSuperior
        ? contenido.TextoCallToActionSuperior
        : null
    }

    if (parrafos) {
      parrafos.map((paragraph, index) =>
        paragraph.content.map(({ content, nodeType, data }) => {
          if (nodeType.indexOf('embedded-entry-block') >= 0) {
            if (data.target.sys.contentType) {
              if (
                data.target.sys.contentType.sys.id === 'EnlacesDeInteres' ||
                data.target.sys.contentType.sys.id === 'Informes'
              ) {
                data.target.gtmTSHStepperAllies = {
                  event: {
                    action: `ClicTarjeta-${contenido?.titulo}`,
                    category: 'LandingDecretos',
                    label: `${data.target.fields.titulo['en-US']}`,
                    tab: data.target.fields.titulo['en-US']
                  },
                  element: `tarjeta ${data.target.fields.titulo['en-US']}`,
                  class: `LandingDecretos-ClicTarjeta-${contenido?.titulo}-${data.target.fields.titulo['en-US']}`.replace(
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
                  element: `tarjeta ${item.content[0].value}`,
                  event: {
                    category: 'LandingDecretos',
                    label: `${item.content[0].value}`,
                    tab: item.content[0].value,
                    action: `ClicUrlBanner-${contenido?.titulo}`
                  },
                  class: `LandingDecretos-ClicUrlBanner-${contenido?.titulo}-${item.content[0].value}`.replace(
                    /\s+/g,
                    '-'
                  )
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
        paragraph.content.map(({ content }) => {
          content.map(item => {
            if (item.nodeType === 'hyperlink') {
              item.data.inlinesHyperlink = {
                element: `tarjeta ${item.content[0].value}`,
                event: {
                  category: 'LandingDecretos',
                  label: `${item.content[0].value}`,
                  tab: item.content[0].value,
                  action: `ClicBotonCTA-${contenido?.titulo}`
                },
                class: `LandingDecretos-ClicBotonCTA-${contenido?.titulo}-${item.content[0].value}`.replace(
                  /\s+/g,
                  '-'
                )
              }

              return null
            }
          })
        })
      )
    }

    let arrayLeyesYDecretos = {
      title: title,
      descripcion: contenido.descripcioncorta,
      image: {
        one: contenido.imagenes
          ? contenido.imagenes.length > 0
            ? createImage(contenido.imagenes[0])
            : null
          : null,
        two: contenido.imagenes
          ? contenido.imagenes.length > 1
            ? createImage(contenido.imagenes[1])
            : null
          : null,
        three: contenido.imagenes
          ? contenido.imagenes.length > 2
            ? createImage(contenido.imagenes[2])
            : null
          : null
      },
      parrafos: parrafos,
      parrafos2: parrafos2,
      dataSend: {
        title: title,
        imagenes: null,
        parrafos: parrafos,
        parrafos2: parrafos2,
        cta: null,
        video: null,
        podcast: null
      },
      video: videoInitial,
      widget: contenido.Widget ? contenido.Widget.Widget : null,
      tituloWidget: contenido.tituloWidget ? contenido.tituloWidget : null,
      callToActionSuperior: callToActionSuperior,
      stateLeyesYDecretos: {
        element: `video ${listVideo?.[0].title}`,
        event: {
          category: 'LandingDecretos',
          action: 'ClicVideo',
          label: `${title}-${listVideo?.[0].title}`,
          tab: listVideo?.[0].title
        },
        class: `LandingDecretos-ClicVideo-${title}-${listVideo?.[0].title}`.replace(
          /\s+/g,
          '-'
        )
      }
    }
    setStateLeyesYDecretos(arrayLeyesYDecretos)
    return arrayLeyesYDecretos
  }

  useEffect(() => {
    dataTranform(
      data.allContentfulLeyesYDecretos.edges[0].node.contenido.filter(
        content => content.contentful_id === pageContext.id
      )
    )
  }, [data])

  if (!isLoadedInternalOnBrowser) return null

  return (
    <>
      <Seo pageContext={pageContext} />
      <div
        className="Internal-leyes-y-decretos-container"
        style={{ background: '#FFFFFF' }}
      >
        <ThemeProvider
          theme={selectTheme(
            indexDBUserName ? indexDBUserName.category : pageContext.line,
            accessibility,
            indexDBUserName ? indexDBUserName.type : pageContext.cliente
          )}
        >
          <div
            className="Internal-leyes-y-decretos-container-header"
            id="Internal-leyes-y-decretos-container-header"
            style={{ position: 'sticky', top: 0, zIndex: 8 }}
          >
            <Header
              showTypePerson={true}
              isOpenMenu={false}
              defaultTypeUser={pageContext?.cliente}
              defaultCategoryUser={pageContext?.line}
              defaultSubcategoryUser={pageContext?.sublinea}
              indexDBUserName={indexDBUserName.nameuser}
              indexDBUser={indexDBUserName}
              enabledAccessibility={e => {
                setMarginAdditional(e)
              }}
            />
          </div>
          <div
            className="container-internal-content-bread-crumb"
            style={{
              marginTop: marginAdditional ? '114px' : '52px',
              background: '#FFFFFF'
            }}
          >
            {location && (
              <BreadCrumb
                isBrowser={isBrowser}
                crumbLabel={'oficina'}
                location={location}
                defaultTypeUser={pageContext?.cliente}
                defaultCategoryUser={pageContext?.line}
                defaultSubcategoryUser={pageContext?.sublinea}
              />
            )}
            <div className="bread-crumbs" />
          </div>
          <div
            className="Internal-leyes-y-decretos-container-big"
            style={{ background: '#FFFFFF' }}
          >
            <div
              className="Internal-leyes-y-decretos-container-header-inversiones"
              id="Internal-leyes-y-decretos-container-header-inversiones"
            >
              <HeaderInversiones
                title={stateLeyesYDecretos ? stateLeyesYDecretos.title : null}
                descripcion={
                  stateLeyesYDecretos ? stateLeyesYDecretos.descripcion : null
                }
                images={
                  stateLeyesYDecretos ? stateLeyesYDecretos.image.one : null
                }
                callToActionSuperior={
                  stateLeyesYDecretos
                    ? stateLeyesYDecretos.callToActionSuperior
                    : null
                }
                accessibility={accessibility}
                pageContext={pageContext}
                type={1}
              />
            </div>
            <div
              className="Internal-leyes-y-decretos-container-LongText"
              id="Internal-leyes-y-decretos-container-LongText"
            >
              {stateLeyesYDecretos.parrafos ? (
                <div
                  id={`container-header-container-parrafo-content-conatiner-parrafo1`}
                >
                  <LongText
                    accessibility={accessibility}
                    data={{
                      title: stateLeyesYDecretos
                        ? stateLeyesYDecretos.title
                        : null,
                      imagenes: stateLeyesYDecretos
                        ? [stateLeyesYDecretos.image.two]
                        : null,
                      parrafos: stateLeyesYDecretos
                        ? stateLeyesYDecretos.parrafos
                        : null,
                      callToAction: null
                    }}
                    line={'Inversión'}
                    lineGtm={'Inversión'}
                  />
                </div>
              ) : null}
            </div>
            {stateLeyesYDecretos ? (
              stateLeyesYDecretos.video ? (
                <div
                  className="Internal-leyes-y-decretos-container-video"
                  id="Internal-leyes-y-decretos-container-video"
                >
                  <Video
                    get={get}
                    type={'InternaAhorro'}
                    lineGtm={'Inversión'}
                    videoData={[stateLeyesYDecretos.video]}
                    eventGA={{
                      category:
                        stateLeyesYDecretos?.gtmTSHStepperAllies?.event
                          .category,
                      action:
                        stateLeyesYDecretos?.gtmTSHStepperAllies?.event.action,
                      label:
                        stateLeyesYDecretos?.gtmTSHStepperAllies?.event.label
                    }}
                  />
                  <div
                    className="Internal-leyes-y-decretos-container-video-info"
                    id="Internal-leyes-y-decretos-container-video-info"
                  >
                    <div
                      className="Internal-leyes-y-decretos-container-video-info-title"
                      id="Internal-leyes-y-decretos-container-video-info-title"
                    >
                      <span>{listVideo ? listVideo[0].title : null}</span>
                    </div>
                    <div
                      className="Internal-leyes-y-decretos-container-video-info-descripcion"
                      id="Internal-leyes-y-decretos-container-video-info-descripcion"
                    >
                      <span>{listVideo ? listVideo[0].description : null}</span>
                    </div>
                  </div>
                </div>
              ) : null
            ) : null}
          </div>
          {stateLeyesYDecretos ? (
            stateLeyesYDecretos.widget ? (
              <div
                className="Internal-leyes-y-decretos-container-iframe"
                id="Internal-leyes-y-decretos-container-iframe"
                style={{ background: '#FAFBFC' }}
              >
                <div
                  className="Internal-leyes-y-decretos-container-iframe-text"
                  id="Internal-leyes-y-decretos-container-iframe-text"
                >
                  <span>{stateLeyesYDecretos.tituloWidget}</span>
                </div>
                <ContentWidget
                  style={{ marginTop: widthScreen < 1024 ? 16 : 100 }}
                  className="content-widget-container"
                  isDark={true}
                  showModal={false}
                  graph={stateLeyesYDecretos.widget}
                  size={{
                    width: '100%',
                    height: '500px',
                    margin: widthScreen > 1024 ? '0px 88px' : '0px',
                    marginBottom: widthScreen > 1024 ? '48px' : '0px'
                  }}
                />
              </div>
            ) : null
          ) : null}
          <div
            className="Internal-leyes-y-decretos-container-big"
            style={{ background: '#FFFFFF' }}
          >
            {stateLeyesYDecretos ? (
              <div
                className="container-header-container-parrafo-content-conatiner-parrafo2"
                id={`container-header-container-parrafo-content-conatiner-parrafo2`}
              >
                <ContentProxy
                  accessibility={accessibility}
                  user={indexDBUserName.nameuser}
                  nombreCallToActionTextoCierre={null}
                  callToActionBtn={null}
                  linkCallToActionTextoCierre={null}
                  video={null}
                  podcast={null}
                  infographic={null}
                  infographicMobile={null}
                  paragraphs={
                    stateLeyesYDecretos ? stateLeyesYDecretos.parrafos2 : null
                  }
                  images={
                    stateLeyesYDecretos
                      ? [stateLeyesYDecretos.image.three]
                      : null
                  }
                  type={'producto'}
                  subtitulo={null}
                  alertText={null}
                  titulo={null}
                  lineGtm={'Inversión'}
                  line={'Inversión'}
                  descrpcionCorta={null}
                  idContent={null}
                  typeCustomer={null}
                  widget={null}
                  isSnack={() => {}}
                  THS={true}
                />
              </div>
            ) : null}
            <div className="separator" />
            <section className="container-internal-content-componente-like">
              <Like
                line="Inversión"
                pathname={location}
                item={{
                  node: {}
                }}
                title={stateLeyesYDecretos ? stateLeyesYDecretos.title : null}
                eventsGA={{
                  MeGusta: {
                    category: 'LandingDecretos',
                    action: `ClicContenidos ${
                      stateLeyesYDecretos ? stateLeyesYDecretos.title : null
                    }`,
                    label: 'TeGustoEstaInformacion-MeGusta'
                  },
                  NoMeGusta: {
                    category: 'LandingDecretos',
                    action: `ClicContenidos ${
                      stateLeyesYDecretos ? stateLeyesYDecretos.title : null
                    }`,
                    label: 'TeGustoEstaInformacion-NoMeGusta'
                  }
                }}
                indexDBUser={indexDBUserName}
              />
              <ButtonShare
                title={stateLeyesYDecretos ? stateLeyesYDecretos.title : null}
                line="Inversión"
                setIsShare={setIsShare}
                isShare={isShare}
                type="Persona"
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
                  type="Persona"
                  title={stateLeyesYDecretos ? stateLeyesYDecretos.title : null}
                  url={location.href}
                  line="Inversión"
                  isActive={isShare}
                  setIsShare={setIsShare}
                  eventsGA={gtmTSHComponentShare(
                    stateLeyesYDecretos ? stateLeyesYDecretos.title : null,
                    'LandingDecretos'
                  )}
                />
              </div>
            </section>
          </div>
          <Footer
            isIOS={isIOS}
            isAndroid={isAndroid}
            isInterna={true}
            colorFooter={'#FFFFFF'}
          />
        </ThemeProvider>
      </div>
    </>
  )
}

export default FondoVoluntariosPension
