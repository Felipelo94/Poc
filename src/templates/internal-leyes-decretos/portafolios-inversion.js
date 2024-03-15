import React, { useEffect, useState } from 'react'
import { isAndroid, isIOS } from 'react-device-detect'
import { Breakpoint, useCurrentWidth } from 'react-socks'
import { ThemeProvider } from 'styled-components'
import { addInfoUser } from '../../actions/You-cant-miss/You-cant-miss'
import BreadCrumb from '../../components/atoms/bread-crumb/bread-crumb'
import ButtonShare from '../../components/atoms/button-share/button-share'
import Image from '../../components/atoms/image/image'
import Like from '../../components/atoms/like/like'
import ComponentShare from '../../components/molecules/component-share/component-share'
import ExitStreet from '../../components/molecules/exit-street/exit-street'
import Footer from '../../components/molecules/footer/footer'
import Header from '../../components/molecules/header/header'
import MealMobile from '../../components/molecules/meal-mobile/meal-mobile'
import Meal from '../../components/molecules/meal/meal'
import mapCategories from '../../const/dictionary/map-categories'
import OptionsMoreContent from '../../const/dictionary/options-more-content.json'
import { useLineServiceComplete } from '../../const/graphql/use-line-services-complete'
import { get } from '../../services/service-general/service-general'
import { getDataIb } from '../../services/service-indexDB/service-indexDB'
import { mapParagraphtoParrafo } from '../../utils/map-paragraph-to-parrafo'
import { getDataMoreContent } from '../../utils/moreContent'
import { sendUserDataRedux } from '../../utils/ReduxDataUtil'
import { selectTheme } from '../../utils/select-theme'
import { checkIfExtensionImageIsAllowed } from '../../utils/image-utils'
import useIsContentLoadedOnBrowser from '../../hooks/useIsContentLoadedOnBrowser'
import { gtmTSHComponentShare } from '../../const/dictionary/gtm-component-share'
import Seo from '../../components/internal-pages/common/seo/seo'
import './portafolios-inversion.scss'

const PortafoliosInversion = ({
  dataPage,
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
  const [isShare, setIsShare] = useState(false)
  const [dataUtils, setdataUtils] = useState([])

  const dataProduct = useLineServiceComplete({
    category: pageContext.line,
    type: pageContext.cliente
  })
  const category_id = mapCategories(dataProduct, 'Inversión')
  const type_id = mapCategories(dataProduct, 1)

  const resultUser = user => {
    setindexDBUserName(user)
  }

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
            null,
            type_id,
            indexDBUserName,
            null,
            pageContext.line
          )
        : null
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createImage = image => ({
    src: image.file.url,
    nameImage: image.description,
    title: image.title
  })

  const content = dataPage.allContentfulLeyesYDecretos.edges[0].node.contenido.filter(
    content => content.contentful_id === pageContext.id
  )[0]

  const title = content?.titulo

  const dataDefaultContentful2 = content.cuerpocontenido2
    ? content.cuerpocontenido2.json
    : null

  const dataDefaultContentful = content.cuerpocontenido
    ? content.cuerpocontenido.json
    : null

  const dataParagraphs2 = content.cuerpocontenido2
    ? content.cuerpocontenido2.json.content.slice()
    : null

  const dataParagraphs = content.cuerpocontenido
    ? content.cuerpocontenido.json.content.slice()
    : null

  const paragraphs = content.cuerpocontenido
    ? mapParagraphtoParrafo(dataParagraphs, dataDefaultContentful)
    : []

  const parrafos2 = content.cuerpocontenido2
    ? mapParagraphtoParrafo(dataParagraphs2, dataDefaultContentful2)
    : []

  const arrayLeyesYDecretos = {
    title: title,
    description: content.descripcioncorta,
    image: content.imagenes
      ? content.imagenes.length > 0
        ? createImage(content.imagenes[0])
        : null
      : null,
    parrafos: paragraphs,
    parrafos2: parrafos2,
    dataSend: {
      title: title,
      imagenes: null,
      parrafos: paragraphs,
      parrafos2: parrafos2,
      cta: null,
      video: null,
      podcast: null
    },
    video: null,
    widget: null,
    tituloWidget: null
  }
  const indexOfParagraphsWithTechnicalSheets = paragraphs.map((p, i) => {
    const filteredParagraphs = p.content.filter(pc => {
      return (
        pc.nodeType === 'embedded-entry-block' &&
        pc?.data?.target?.sys?.contentType?.sys?.contentful_id ===
          'portafolio' &&
        !!pc?.data?.target?.fields?.fichastecnicas
      )
    })
    if (!!filteredParagraphs?.length > 0) return i
    return -1
  })
  const paragraphsWithTechnicalSheets = indexOfParagraphsWithTechnicalSheets
    .filter(index => index !== -1)
    .map(re => paragraphs[re])

  const dataMeal = {
    title: arrayLeyesYDecretos.title,
    imagenes: arrayLeyesYDecretos.image,
    parrafos: paragraphsWithTechnicalSheets
  }

  if (!isLoadedInternalOnBrowser) return null

  return (
    <>
      <Seo pageContext={pageContext} />

      <div
        className="internal-investment-savings"
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
            className="internal-investment-savings__header"
            id="internal-investment-savings__header"
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
            className="internal-investment-savings__breadcrumb"
            id="internal-investment-savings__breadcrumb"
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

          <div className="Internal-leyes-y-decretos-container-big internal-section-introduction">
            <div
              className="internal-investment-savings__internal-header"
              id="internal-investment-savings__internal-header"
              style={{ background: '#FFFFFF' }}
            >
              <div className="internal-investment-savings__content-text">
                <h1 className="content-text__title">
                  {arrayLeyesYDecretos?.title ?? ''}
                </h1>
                <p className="content-text__description">
                  {arrayLeyesYDecretos?.description ?? ''}
                </p>
              </div>
              {arrayLeyesYDecretos.image && (
                <div className="internal-investment-savings__content-image">
                  <Image
                    animacion
                    classNames="content-image__image"
                    imagen={arrayLeyesYDecretos?.image?.src ?? null}
                    imgTitle={arrayLeyesYDecretos?.image?.title ?? null}
                    alt={arrayLeyesYDecretos?.image?.nameImage ?? null}
                    line={'Inversión'}
                    id="internal-investment-savings__content-image"
                    classGtm=""
                    style={
                      checkIfExtensionImageIsAllowed(
                        arrayLeyesYDecretos?.image?.src
                      )
                        ? {
                            borderRadius: '50%',
                            position: 'absolute'
                          }
                        : {}
                    }
                    height={widthScreen > 1024 ? '350px' : '194px'}
                    width={widthScreen > 1024 ? '350px' : '194px'}
                  />
                </div>
              )}
            </div>
            <div
              className={`internal-investment-savings__internal-content ${
                checkIfExtensionImageIsAllowed(arrayLeyesYDecretos.image?.src)
                  ? 'internal-investment-savings__internal-content--margin-top'
                  : ''
              }`}
              id="internal-investment-savings__internal-content"
            >
              <Breakpoint
                className="internal-investment-savings__meal-mobile"
                customQuery="(max-width: 1024px)"
              >
                <MealMobile
                  accessibility={accessibility}
                  lineGtm={'Inversión'}
                  line={'Inversión'}
                  alertText={''}
                  actionGA="ClicPersona-TabLateral"
                  data={dataMeal}
                  notData={true}
                />
              </Breakpoint>
              <Breakpoint
                className="internal-investment-savings__meal-desktop"
                customQuery="(min-width: 1025px)"
              >
                <Meal
                  accessibility={accessibility}
                  line={'Inversión'}
                  lineGtm={'Inversión'}
                  data={dataMeal}
                  notData={true}
                  actionGA="ClicPersona-TabLateral"
                  alertText={''}
                />
              </Breakpoint>
            </div>
          </div>
          <div
            className="Internal-leyes-y-decretos-container-big"
            style={{ background: '#FFFFFF' }}
          >
            <div className="separator" />
            <section className="container-internal-content-componente-like">
              <Like
                line="Inversión"
                pathname={location}
                item={{
                  node: {}
                }}
                title={arrayLeyesYDecretos?.title ?? null}
                eventsGA={{
                  MeGusta: {
                    category: 'LandingDecretos',
                    action: `ClicContenidos ${arrayLeyesYDecretos?.title ??
                      null}`,
                    label: 'TeGustoEstaInformacion-MeGusta'
                  },
                  NoMeGusta: {
                    category: 'LandingDecretos',
                    action: `ClicContenidos ${arrayLeyesYDecretos?.title ??
                      null}`,
                    label: 'TeGustoEstaInformacion-NoMeGusta'
                  }
                }}
                indexDBUser={indexDBUserName}
              />
              <ButtonShare
                title={arrayLeyesYDecretos?.title ?? null}
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
                  title={arrayLeyesYDecretos?.title ?? null}
                  url={location.href}
                  line="Inversión"
                  isActive={isShare}
                  setIsShare={setIsShare}
                  eventsGA={gtmTSHComponentShare(
                    arrayLeyesYDecretos?.title ?? null,
                    'LandingDecretos'
                  )}
                />
              </div>
            </section>
          </div>
          <div className="internal-investment-savings__more-content-container">
            <div className="Internal-leyes-y-decretos-container-big">
              <ExitStreet
                accessibility={accessibility}
                dataUtils={dataUtils}
                options={OptionsMoreContent}
                widthScreen={widthScreen}
                pageContext={pageContext}
                line={'Inversión'}
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
    </>
  )
}

PortafoliosInversion.propTypes = {}

export default PortafoliosInversion
