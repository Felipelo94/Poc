import React, { useState } from 'react'
import { useCurrentWidth } from 'react-socks'
import { get } from '../../../services/service-general/service-general'
import { sendEventGA } from '../../../utils/classGtmUtil'
import { clickWithScrollCenter } from '../../../utils/commons-event-content'
import { mapParagraphtoParrafo } from '../../../utils/map-paragraph-to-parrafo'
import ItemAcordion from '../../atoms/item-acordion/item-acordion'
import RichText from '../../../utils/rich-text/rich-text'
import Video from '../../atoms/video/video'
import ContentInfographic from '../content-infographic/content-infographic'
import LongText from '../long-text/long-text'
import './content-proxy-talent.scss'

export default function ContentProxyTalent({
  data,
  line,
  dataSend,
  accessibility
}) {
  const width = useCurrentWidth()
  const allTitle = []

  const countTitle = (content, nodeType) => {
    if (nodeType.indexOf('heading') >= 0) {
      content.map((value, i) => {
        if (value.value && value.value.trim().length > 0) {
          allTitle.push({ titulo: value.value })
        }
        return null
      })
    }
  }

  const deleteTitle = parrafo => {
    parrafo.map(contenido => {
      contenido.content.map((item, i) => {
        if (item.nodeType.indexOf('heading') >= 0) {
          contenido.content.splice(i, 1)
        }
      })
    })
    return parrafo
  }

  const imageTalento = [
    {
      imagen: data.imagenes
        ? data.imagenes['en-US'][0].fields.file['en-US'].url
        : null,
      nameImage: data.imagenes
        ? data.imagenes['en-US'][0].fields.title['en-US']
        : null,
      title: data.imagenes
        ? data.imagenes['en-US'][0].fields.description['en-US']
        : null
    }
  ]

  const dataDefualtContenful = data.cuerpocontenido
    ? data.cuerpocontenido['en-US']
    : null

  const dataParrafos = data.cuerpocontenido
    ? data.cuerpocontenido['en-US'].content.slice()
    : null

  const parrafos = data.cuerpocontenido
    ? mapParagraphtoParrafo(dataParrafos, dataDefualtContenful)
    : []

  const parrafosSinTitle = data.cuerpocontenido ? deleteTitle(parrafos) : []

  const [indexTitle, setindexTitle] = useState(0)

  if (data.cuerpocontenido) {
    data.cuerpocontenido['en-US'].content.map(paragraph => {
      return countTitle(paragraph.content, paragraph.nodeType)
    })
  }

  const setindexsTitle = x => {
    setindexTitle(x)
  }
  const infographic = data.infografico
    ? {
        fluid: {
          src: data.infografico['en-US'].fields.file['en-US'].url
        },
        file: {
          fileName: data.infografico['en-US'].fields.file['en-US'].fileName
        },
        contentful_id: data.infografico['en-US'].sys.contentful_id,
        description: data.infografico['en-US'].fields.file['en-US'].fileName,
        title: data.infografico['en-US'].fields.file['en-US'].fileName
      }
    : null

  const infographicMobile = data.infograficoMobile
    ? {
        fluid: {
          src: data.infograficoMobile['en-US'].fields.file['en-US'].url
        },
        file: {
          fileName:
            data.infograficoMobile['en-US'].fields.file['en-US'].fileName
        },
        contentful_id: data.infograficoMobile['en-US'].sys.contentful_id,
        description:
          data.infograficoMobile['en-US'].fields.file['en-US'].fileName,
        title: data.infograficoMobile['en-US'].fields.file['en-US'].fileName
      }
    : null

  return (
    <div
      className={`content-proxy-talent${
        line === 'Inversión' ? ' content-proxy-talent--inversion' : ''
      }`}
      id="content-proxy-talent"
    >
      <div
        className="content-proxy-talent-header"
        id="content-proxy-talent-header"
      >
        {data.titulo ? (
          <div
            className="content-proxy-talent-header-title"
            id="content-proxy-talent-header-title"
          >
            {data.titulo['en-US']}
          </div>
        ) : null}
        {data.descripcioncorta ? (
          <div
            className="content-proxy-talent-header-descripcion"
            id="content-proxy-talent-header-descripcion"
          >
            {data.descripcioncorta['en-US']}
          </div>
        ) : null}
      </div>
      {data.infografico ? (
        <ContentInfographic
          accessibility={accessibility}
          data={dataSend}
          line={line}
          infographic={infographic}
          infographicMobile={infographicMobile}
        />
      ) : data.listadoVideos ? (
        <Video
          eventGA={{
            category: data.gtmTSHStepperAllies.event.category,
            action: data.gtmTSHStepperAllies.event.action,
            label: data.gtmTSHStepperAllies.event.label
          }}
          get={get}
          titleContent={data.titulo ? data.titulo['en-US'] : 'Talento si hay'}
          type={'InternaAhorro'}
          lineGtm={line}
          line={line}
          videoData={data.listadoVideos['en-US']}
        />
      ) : allTitle.length >= 3 ? (
        <div className="content-proxy-talent-accordions-container">
          {width > 1024 && data.cuerpocontenido ? (
            <img
              className="content-proxy-talent-accordions-container-image"
              src={imageTalento[0].imagen}
              alt={imageTalento[0].title}
              name={imageTalento[0].nameImage}
            />
          ) : null}
          {data.cuerpocontenido ? (
            <div style={{ width: '100%' }}>
              {allTitle.map((x, index) => {
                return (
                  <div
                    id={`container-talento-title-value-${index}`}
                    role="presentation"
                  >
                    <ItemAcordion
                      accessibility={accessibility}
                      title={x.titulo}
                      line={line}
                      idItem={index}
                      active={indexTitle}
                      click={() => {
                        setindexsTitle(index === indexTitle ? null : index)
                        clickWithScrollCenter(
                          document.querySelector(
                            `#container-talento-title-value-${index}`
                          )
                        )
                      }}
                      clickOnItem={() => {
                        sendEventGA(
                          data.gtmTSHStepperAllies.event.category,
                          data.gtmTSHStepperAllies.event.action,
                          data.gtmTSHStepperAllies.event.label
                            ? data.gtmTSHStepperAllies.event.label
                            : x?.titulo ?? ''
                        )
                      }}
                    >
                      <div
                        id="container-meal-content"
                        className="container-meal-content-mobile"
                      >
                        {parrafosSinTitle.map((contenido, i) => {
                          if (i === indexTitle) {
                            return (
                              <div
                                id={`container-meal-content-value-parrafo-${i}`}
                              >
                                <RichText
                                  accessibility={accessibility}
                                  line={line}
                                  title={null}
                                  text={contenido}
                                />
                              </div>
                            )
                          }
                          return null
                        })}
                      </div>
                    </ItemAcordion>
                  </div>
                )
              })}
            </div>
          ) : null}
        </div>
      ) : data.cuerpocontenido && dataSend ? (
        <LongText
          accessibility={accessibility}
          data={{
            title: dataSend.title,
            imagenes: imageTalento,
            parrafos: parrafos,
            callToAction: null
          }}
        />
      ) : null}
    </div>
  )
}
