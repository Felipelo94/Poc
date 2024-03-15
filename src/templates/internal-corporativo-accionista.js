import { graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { isAndroid, isIOS } from 'react-device-detect'
import { connect } from 'react-redux'
import { Breakpoint, useCurrentWidth } from 'react-socks'
import { ThemeProvider } from 'styled-components'
import { addInfoUser } from '../actions/You-cant-miss/You-cant-miss'
import BreadCrumb from '../components/atoms/bread-crumb/bread-crumb'
import Footer from '../components/molecules/footer/footer'
import Header from '../components/molecules/header/header'
import ExitStreet from '../components/molecules/exit-street/exit-street'
import LongText from '../components/molecules/long-text/long-text'
import MealMobile from '../components/molecules/meal-mobile/meal-mobile'
import ContentProxy from '../components/molecules/content-proxy/content-proxy'
import ButtonShare from '../components/atoms/button-share/button-share'
import ComponentShare from '../components/molecules/component-share/component-share'
import Like from '../components/atoms/like/like'
import Meal from '../components/molecules/meal/meal'
import SEO from '../components/molecules/seo/seo'
import mapCategories from '../const/dictionary/map-categories'
import OptionsMoreContent from '../const/dictionary/options-more-content.json'
import { useLineServiceComplete } from '../const/graphql/use-line-services-complete'
import { getDataMoreContent } from '../utils/moreContent'
import { get } from '../services/service-general/service-general'
import { getDataIb } from '../services/service-indexDB/service-indexDB'
import { mapParagraphtoParrafo } from '../utils/map-paragraph-to-parrafo'
import { sendUserDataRedux } from '../utils/ReduxDataUtil'
import CallToAction from '../components/molecules/call-to-action/call-to-action'
import useSetTypeUserAndCategoryState from '../hooks/useSetTypeUserAndCategoryState'
import Image from '../components/atoms/image/image'
import { checkIfExtensionImageIsAllowed } from '../utils/image-utils'
import { scaleLine } from '../utils/scaleText'
import { selectTheme } from '../utils/select-theme'
import './internal-corporativo-accionista.scss'

let InternalCorporativoAccionista = ({
  pageContext,
  location,
  dispatch,
  data,
  accessibility
}) => {
  const widthScreen = useCurrentWidth()
  const createImage = image => ({
    imagen: image.file.url,
    nameImage: image.description,
    title: image.title
  })

  useSetTypeUserAndCategoryState(
    pageContext?.typeCustomer,
    pageContext?.category
  )
  const allTitle = []

  const [dataUtils, setdataUtils] = useState([])
  const [isShare, setIsShare] = useState(false)
  const [indexDBUserName, setindexDBUserName] = useState('')
  const [marginAdditional, setMarginAdditional] = useState(false)
  const [listVideo, setListVideo] = useState(null)
  const [stateLeyesYDecretos, setStateLeyesYDecretos] = useState('')

  const dataProduct = useLineServiceComplete({
    category: 'Pensión',
    type: pageContext.cliente
  })
  const category_id = mapCategories(dataProduct, 'Pensión')
  const type_id = mapCategories(dataProduct, 1)
  const subcategory_id = mapCategories(dataProduct, 'pension-vejez')

  const dataTranform = datos => {
    let contenido = datos?.contenido ? datos?.contenido[0] : []

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
      .catch(() => {})

    const title = contenido?.titulo ?? ''
    const textoCierre = contenido?.textoCierre

    const dataDefualtContenful = contenido.cuerpocontenido?.json
    const dataDefualtContenful2 = contenido.cuerpocontenido2?.json

    const paragraphFilter = item =>
      !(item?.content?.[0]?.value === '\r' && item?.nodeType === 'heading-2')
    const dataParrafos = contenido.cuerpocontenido?.json.content
      .filter(paragraphFilter)
      .slice()
    const dataParrafos2 = contenido.cuerpocontenido2?.json.content.slice()

    const parrafos = contenido.cuerpocontenido
      ? mapParagraphtoParrafo(dataParrafos, dataDefualtContenful, 'heading-2')
      : []

    const parrafos2 = contenido.cuerpocontenido2
      ? mapParagraphtoParrafo(dataParrafos2, dataDefualtContenful2, 'heading-2')
      : []

    parrafos?.map(paragraph =>
      paragraph.content.map(({ content, nodeType }) => {
        if (nodeType.indexOf('heading-2') >= 0) {
          content.map(value => {
            if (value.value && value.value.trim().length > 0) {
              allTitle.push({ titulo: value.value })
            }
            return null
          })
        }
      })
    )

    let arrayLeyesYDecretos = {
      numParrafos: allTitle.length,
      title: title,
      textoCierre: textoCierre,
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
      descripcioncalltoaction: contenido?.descripcioncalltoaction ?? '',
      textoCallToAction: contenido?.textoCallToAction ?? '',
      linkCallToAction: contenido?.linkCallToAction ?? '',
      titulo: contenido?.titulo ?? ''
    }
    setStateLeyesYDecretos(arrayLeyesYDecretos)
    return arrayLeyesYDecretos
  }

  const resultUser = user => {
    setindexDBUserName(user)
  }

  let isBrowser = typeof window !== 'undefined'

  useEffect(() => {
    sendUserDataRedux(getDataIb, resultUser, get, dispatch, addInfoUser)
  }, [dispatch])

  useEffect(() => {
    setdataUtils(
      dataProduct || test
        ? getDataMoreContent(
            dataProduct,
            pageContext.id,
            category_id,
            subcategory_id,
            type_id,
            indexDBUserName,
            null,
            'Pensión'
          )
        : null
    )
  }, [])

  useEffect(() => {
    dataTranform(data.allContentfulCorporativoYAccionistas.edges[0]?.node)
  }, [data])

  return (
    <div
      className="Internal-leyes-y-decretos-container internal-corporativo-accionista-container"
      style={{ background: '#FFFFFF' }}
    >
      <ThemeProvider
        theme={selectTheme(
          indexDBUserName ? indexDBUserName.category : pageContext.line,
          accessibility,
          indexDBUserName ? indexDBUserName.type : pageContext.cliente
        )}
      >
        {pageContext.metatittleSeo && (
          <SEO
            title={pageContext.metatittleSeo}
            description={pageContext.metadescripcionSeo}
            meta={pageContext.keywordsSeo}
            image={pageContext?.metaimagenseo}
          />
        )}
        <Header
          showTypePerson={true}
          isOpenMenu={false}
          defaultTypeUser={pageContext?.cliente}
          defaultCategoryUser={pageContext?.line}
          defaultSubcategoryUser={
            pageContext?.line === 'Pensión' && pageContext?.cliente === 1
              ? 'pension-vejez'
              : ''
          }
          indexDBUserName={indexDBUserName.nameuser}
          indexDBUser={indexDBUserName}
          enabledAccessibility={setMarginAdditional}
        />
        <div
          className="container-internal-content-bread-crumb"
          style={{
            marginTop: marginAdditional ? '114px' : '52px',
            background: '#FFFFFF'
          }}
        >
          {location && (
            <BreadCrumb
              location={location}
              defaultTypeUser={pageContext?.cliente}
              defaultCategoryUser={pageContext?.line}
              defaultSubcategoryUser={
                pageContext?.line === 'Pensión' && pageContext?.cliente === 1
                  ? 'pension-vejez'
                  : ''
              }
            />
          )}
          <div className="bread-crumbs" />
        </div>
        <div style={{ background: '#FFFFFF' }}>
          <div
            className="internal-corporativo-accionista-container-section-introduction"
            id="Internal-leyes-y-decretos-container-header-inversiones"
          >
            <div className="introduction-container">
              <div className="introduction-container-text" id="anchor-id">
                <h1 className="introduction-container-text-title">
                  {stateLeyesYDecretos ? stateLeyesYDecretos.title : null}
                </h1>
                <p
                  className="introduction-container-text-description"
                  style={{ lineHeight: scaleLine(accessibility.lineSize) }}
                >
                  {stateLeyesYDecretos ? stateLeyesYDecretos.descripcion : null}
                </p>
              </div>
              {stateLeyesYDecretos?.image?.one?.imagen ? (
                <div className="introduction-container-image">
                  <Image
                    imagen={stateLeyesYDecretos?.image?.one?.imagen}
                    imgTitle={stateLeyesYDecretos?.image?.one?.title}
                    height={widthScreen > 1024 ? '350px' : '194px'}
                    line="Pensión"
                    width={widthScreen > 1024 ? '350px' : '194px'}
                    alt={stateLeyesYDecretos?.image?.one?.nameImage}
                    id="internal-corporativo-accionista-introduction-image"
                    classGtm=""
                    style={
                      checkIfExtensionImageIsAllowed(
                        stateLeyesYDecretos?.image?.one?.imagen
                      )
                        ? {
                            borderRadius: '50%',
                            position: 'absolute'
                          }
                        : {}
                    }
                    animacion
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div
            className="internal-corporativo-accionista-container-section-meal"
            id="Internal-leyes-y-decretos-container-LongText"
          >
            {stateLeyesYDecretos ? (
              stateLeyesYDecretos.numParrafos >= 3 ? (
                <div
                  className="content-solutions-container-meal"
                  id="content-solutions-container-meal"
                >
                  <Breakpoint customQuery="(max-width: 1024px)">
                    <MealMobile
                      type={'InternaAhorro'}
                      accessibility={accessibility}
                      data={
                        stateLeyesYDecretos
                          ? stateLeyesYDecretos.dataSend
                          : null
                      }
                      alertText={
                        stateLeyesYDecretos
                          ? stateLeyesYDecretos.textoCierre
                          : null
                      }
                      notData={true}
                      corporativoAccionista={true}
                    />
                  </Breakpoint>
                  <Breakpoint customQuery="(min-width: 1025px)">
                    <Meal
                      type={'InternaAhorro'}
                      accessibility={accessibility}
                      data={stateLeyesYDecretos?.dataSend}
                      alertText={stateLeyesYDecretos?.textoCierre}
                      notData={true}
                      corporativoAccionista={true}
                      anchorId="#anchor-id"
                    />
                  </Breakpoint>
                </div>
              ) : (
                <div
                  className="internal-corporativo-accionista-container-section-meal"
                  id={`container-header-container-parrafo-content-conatiner-parrafo1`}
                >
                  <LongText
                    accessibility={accessibility}
                    data={{
                      title: stateLeyesYDecretos
                        ? stateLeyesYDecretos.title
                        : null,
                      imagenes: stateLeyesYDecretos
                        ? stateLeyesYDecretos.image.two
                        : null,
                      parrafos: stateLeyesYDecretos
                        ? stateLeyesYDecretos.parrafos
                        : null,
                      callToAction: null
                    }}
                  />
                </div>
              )
            ) : null}
          </div>
        </div>
        <div
          className="internal-corporativo-accionista-container-section-content-proxy"
          style={{ background: '#FFFFFF' }}
        >
          {stateLeyesYDecretos?.parrafos2?.length > 0 ?? false ? (
            <div
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
                  stateLeyesYDecretos ? [stateLeyesYDecretos.image.three] : null
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
        </div>
        {stateLeyesYDecretos.linkCallToAction &&
        stateLeyesYDecretos.textoCallToAction ? (
          <div
            id="container-internal-content-component-call-to-action"
            className="internal-corporativo-accionista-container-section-call-to-action"
          >
            <CallToAction
              accessibility={accessibility}
              descripcion={stateLeyesYDecretos.descripcioncalltoaction}
              titulo={stateLeyesYDecretos.textoCallToAction}
              link={stateLeyesYDecretos.linkCallToAction}
              titleContent={stateLeyesYDecretos.titulo}
              line="Pensión"
              lineGtm="Pensión"
              type="Persona"
              user={indexDBUserName.nameuser}
            />
          </div>
        ) : null}
        <div className="separator" />
        <section className="internal-corporativo-accionista-container-section-share">
          <Like
            line="Inversión"
            pathname={location}
            item={{
              node: {}
            }}
            title={stateLeyesYDecretos ? stateLeyesYDecretos.title : null}
            indexDBUser={indexDBUserName}
          />
          <div className="internal-corporativo-accionista-section-share-component">
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
              />
            </div>
          </div>
        </section>
        <div className="internal-investment-savings__more-content-container">
          <div className="internal-corporativo-accionista-container-section-more-content">
            <ExitStreet
              accessibility={accessibility}
              dataUtils={dataUtils}
              options={OptionsMoreContent}
              widthScreen={widthScreen}
              pageContext={{ cliente: 1, line: 'Pensión' }}
              line="Pensión"
              indexDBUserName={indexDBUserName}
            />
          </div>
        </div>
        <Footer
          isIOS={isIOS}
          isAndroid={isAndroid}
          isInterna={true}
          colorFooter={'#FFFFFF'}
        />
      </ThemeProvider>
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

InternalCorporativoAccionista = connect(mapStateToProps)(
  InternalCorporativoAccionista
)
export default InternalCorporativoAccionista

export const pageQuery = graphql`
  query PageContentBySlugCorporativoYAccionistas($entityId: String) {
    allContentfulCorporativoYAccionistas(
      filter: { contentful_id: { eq: $entityId } }
    ) {
      edges {
        node {
          contentful_id
          titulo
          contenido {
            titulo
            descripcioncalltoaction
            textoCallToAction
            linkCallToAction
            contentful_id
            cuerpocontenido {
              json
            }
            textoCierre {
              textoCierre
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
            listadoVideos
            descripcioncorta
            metatittleSeo
            keywordsSeo {
              keywordsSeo
            }
            metadescripcionSeo {
              metadescripcionSeo
            }
          }
        }
      }
    }
  }
`
