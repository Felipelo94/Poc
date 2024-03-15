import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { isAndroid, isIOS } from 'react-device-detect'
import { ThemeProvider } from 'styled-components'
import { addInfoUser } from '../../../actions/You-cant-miss/You-cant-miss'
import { get } from '../../../services/service-general/service-general'
import { getDataIb } from '../../../services/service-indexDB/service-indexDB'
import { createProcessedImageContentfulData } from '../../../utils/image-utils'
import { mapParagraphtoParrafo } from '../../../utils/map-paragraph-to-parrafo'
import { sendUserDataRedux } from '../../../utils/ReduxDataUtil'
import BreadCrumb from '../../atoms/bread-crumb/bread-crumb'
import ContentProxy from '../../molecules/content-proxy/content-proxy'
import ContactInformationFooter from '../../molecules/footer/components/contact-information-footer'
import Footer from '../../molecules/footer/footer'
import Header from '../../molecules/header/header'
import LongText from '../../molecules/long-text/long-text'
import LikeShare from '../common/like-share/like-share'
import Seo from '../common/seo/seo'
import './ley-transparencia.scss'
import IntroductionSection from '../common/introduction-section/introduction-section'
import { selectTheme } from '../../../utils/select-theme'
import useIsContentLoadedOnBrowser from '../../../hooks/useIsContentLoadedOnBrowser'

const LeyTransparencia = ({
  dataPage,
  pageContext,
  dispatch,
  location,
  accessibility
}) => {
  const isLoadedInternalOnBrowser = useIsContentLoadedOnBrowser()
  const isBrowser = typeof window !== 'undefined'
  const [indexDBUserName, setindexDBUserName] = useState('')
  const [showOptionsShare, setShowOptionsShare] = useState(false)
  const [marginAdditional, setMarginAdditional] = useState(false)
  const [processedContentfulData, setProcessedContentfulData] = useState({})

  const resultUser = user => {
    setindexDBUserName(user)
  }

  useEffect(() => {
    sendUserDataRedux(getDataIb, resultUser, get, dispatch, addInfoUser)
  }, [dispatch])

  useEffect(() => {
    const processContentfulData = internalContentfulData => {
      const contenido = internalContentfulData.allContentfulLeyesYDecretos.edges[0].node.contenido.filter(
        content => content.contentful_id === pageContext.id
      )[0]
      const title = contenido?.titulo ?? ''

      const cuerpoContenido = contenido?.cuerpocontenido?.json ?? null
      const cuerpoContenido2 = contenido?.cuerpocontenido2?.json ?? null
      const dataParagraphsCuerpoContenido = contenido.cuerpocontenido
        ? contenido.cuerpocontenido.json.content.slice()
        : null
      const dataParagraphsCuerpoContenido2 = contenido.cuerpocontenido2
        ? contenido.cuerpocontenido2.json.content.slice()
        : null

      const paragraphsCuerpoContenido = contenido.cuerpocontenido
        ? mapParagraphtoParrafo(dataParagraphsCuerpoContenido, cuerpoContenido)
        : []
      const paragraphsCuerpoContenido2 = contenido.cuerpocontenido2
        ? mapParagraphtoParrafo(
            dataParagraphsCuerpoContenido2,
            cuerpoContenido2
          )
        : []

      if (paragraphsCuerpoContenido) {
        paragraphsCuerpoContenido.map((paragraph, index) =>
          paragraph.content.map(({ content, nodeType, data }) => {
            if (nodeType.indexOf('embedded-entry-block') >= 0) {
              if (data.target.sys.contentType) {
                if (data.target.sys.contentType.sys.id === 'EnlacesDeInteres') {
                  data.target.gtmTSHStepperAllies = {
                    element: `tarjeta ${data.target.fields.titulo['en-US']}`,
                    event: {
                      category: 'LandingDecretos',
                      action: `ClicTarjeta-${contenido?.titulo}`,
                      tab: data.target.fields.titulo['en-US'],
                      label: `${data.target.fields.titulo['en-US']}`
                    },
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
                      action: `ClicUrlBanner-${contenido?.titulo}`,
                      tab: item.content[0].value,
                      label: `${item.content[0].value}`
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

      const processedContentData = {
        title,
        description: contenido.descripcioncorta,
        image: {
          one: createProcessedImageContentfulData(contenido?.imagenes?.[0]),
          two: createProcessedImageContentfulData(contenido?.imagenes?.[1]),
          three: createProcessedImageContentfulData(contenido?.imagenes?.[2])
        },
        paragraphs: paragraphsCuerpoContenido,
        paragraphs2: paragraphsCuerpoContenido2,
        video: null,
        widget: contenido.Widget ? contenido.Widget.Widget : null,
        tituloWidget: contenido.tituloWidget ? contenido.tituloWidget : null
      }
      return processedContentData
    }

    setProcessedContentfulData(processContentfulData(dataPage))
  }, [dataPage])

  if (!isLoadedInternalOnBrowser) return null

  return (
    <div className="container-ley-transparencia">
      <Seo pageContext={pageContext} />
      <ThemeProvider
        theme={selectTheme(
          indexDBUserName ? indexDBUserName.category : pageContext.line,
          accessibility,
          indexDBUserName ? indexDBUserName.type : pageContext.cliente
        )}
      >
        <section
          className="container-ley-transparencia-section-header"
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
        </section>
        <section
          className="container-ley-transparencia-section-bread-crumb"
          style={{
            marginTop: marginAdditional ? '114px' : '52px',
            background: '#FFFFFF'
          }}
        >
          {location && (
            <BreadCrumb
              location={location}
              defaultTypeUser={pageContext.cliente}
              defaultCategoryUser={pageContext.line}
              defaultSubcategoryUser={pageContext.sublinea}
            />
          )}
        </section>

        <div className="container-ley-transparencia-content internal-page-section-margin">
          <IntroductionSection
            title={processedContentfulData.title}
            description={processedContentfulData.description}
            image={processedContentfulData?.image?.one}
            line="Inversión"
          />
          {processedContentfulData.paragraphs?.length > 0 ? (
            <main
              className="container-ley-transparencia-section-content"
              id={`container-header-container-parrafo-content-conatiner-parrafo1`}
            >
              <LongText
                accessibility={accessibility}
                data={{
                  title: processedContentfulData.title,
                  imagenes:
                    processedContentfulData?.image?.two?.imagen ?? []
                      ? [processedContentfulData.image.two]
                      : [],
                  parrafos: processedContentfulData.paragraphs,
                  callToAction: null
                }}
                line={'Inversión'}
                lineGtm={'Inversión'}
              />
            </main>
          ) : null}
          {processedContentfulData.paragraphs2?.length > 0 ? (
            <div
              className="container-ley-transparencia-section-content-2"
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
                paragraphs={processedContentfulData.paragraphs2}
                images={
                  processedContentfulData?.image?.three?.imagen ?? []
                    ? [processedContentfulData.image.three]
                    : []
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
          <div
            className={classNames(
              'container-ley-transparencia-section-contact-information',
              {
                'section-contact-information--margin-left':
                  processedContentfulData?.image?.two?.imagen &&
                  processedContentfulData.paragraphs2?.length === 0
              },
              {
                'section-contact-information--margin-left':
                  processedContentfulData?.image?.three?.imagen &&
                  processedContentfulData.paragraphs2?.length > 0
              }
            )}
          >
            <ContactInformationFooter />
          </div>
          <div className="container-ley-transparencia-section-like-share">
            <LikeShare
              location={location}
              setShowOptionsShare={setShowOptionsShare}
              showOptionsShare={showOptionsShare}
              title={processedContentfulData.title}
              indexDBUser={indexDBUserName}
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

LeyTransparencia.propTypes = {}

export default LeyTransparencia
