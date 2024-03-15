import React, { useState } from 'react'
import './content-question.scss'
import CallToAction from '../call-to-action/call-to-action'
import { Breakpoint, useCurrentWidth } from 'react-socks'
import Image from '../../atoms/image/image'
import { Fragment } from 'react'
import ItemAcordion from '../../atoms/item-acordion/item-acordion'
import { clickWithScrollCenter } from '../../../utils/commons-event-content'
import RichText from '../../../utils/rich-text/rich-text'
import { Helmet } from 'react-helmet'
import { checkIfExtensionImageIsAllowed } from '../../../utils/image-utils'

export default function ContentQuestion({
  lineGtm,
  type,
  data,
  line,
  user,
  accessibility,
  THS
}) {
  const [indexTitle, setindexTitle] = useState(0)
  const allTitle = []
  const width = useCurrentWidth()

  data.parrafos.map(paragraph =>
    paragraph.content.map(({ content, nodeType }) =>
      nodeType.indexOf('heading') >= 0
        ? content.map(value => {
            if (value.value && value.value.trim().length > 0) {
              allTitle.push({ titulo: value.value })
            }
            return null
          })
        : ''
    )
  )

  const getContentByTitle = paragraph => {
    let dataParagraph = { ...paragraph }
    let arrayData = []
    dataParagraph.content.map(itemContent => {
      if (itemContent.nodeType.indexOf('heading') < 0) {
        arrayData.push(itemContent)
      }
      return itemContent
    })
    dataParagraph.content = arrayData
    return dataParagraph
  }
  return (
    <div className="container-content-question" id="container-content-question">
      <span className="hidden-lable" id="hidden-lable">
        question
      </span>
      <Helmet
        htmlAttributes={{
          itemScope: true,
          itemType: 'https://schema.org/FAQPage'
        }}
      />
      <div
        className="container-content-question-parrafo"
        id="container-content-question-parrafo"
      >
        {data.imagenes ? (
          data.imagenes[0] ? (
            <div
              className="container-content-question-imagen"
              id="container-content-question-imagen"
            >
              <Fragment>
                <Breakpoint customQuery="(max-width: 1024px)">
                  <Image
                    line={lineGtm}
                    imagen={data.imagenes[0].imagen}
                    imgTitle={data.imagenes[0].title}
                    height={'194px'}
                    width={'194px'}
                    alt={data.imagenes[0].nameImage}
                    id="LongText-container-parrafo-imagen-value"
                    style={
                      checkIfExtensionImageIsAllowed(data.imagenes[0].imagen)
                        ? {
                            borderRadius: '50%',
                            position: 'absolute'
                          }
                        : {}
                    }
                    classGtm=""
                    animacion={true}
                  />
                </Breakpoint>
                <Breakpoint customQuery="(min-width: 1025px)">
                  <Image
                    imagen={data.imagenes[0].imagen}
                    imgTitle={data.imagenes[0].title}
                    height={'350px'}
                    line={lineGtm}
                    width={'350px'}
                    alt={data.imagenes[0].nameImage}
                    id="LongText-container-parrafo-imagen-value"
                    style={
                      checkIfExtensionImageIsAllowed(data.imagenes[0].imagen)
                        ? {
                            borderRadius: '50%',
                            position: 'absolute'
                          }
                        : {}
                    }
                    classGtm=""
                    animacion={true}
                  />
                </Breakpoint>
              </Fragment>
            </div>
          ) : null
        ) : null}
        <div
          className="container-content-question-parrafo-parrafos"
          id="container-content-question-parrafo-parrafos"
          style={{ zIndex: 5 }}
        >
          {allTitle.map((tittle, index) => {
            return (
              <ItemAcordion
                accessibility={accessibility}
                title={tittle.titulo}
                idItem={index}
                active={indexTitle}
                icon={null}
                widthTitle={'100%'}
                line={lineGtm}
                idIndex={index + 1}
                click={() => {
                  setindexTitle(
                    index === indexTitle ? null : index,
                    tittle.titulo
                  )
                  let idScroll =
                    index > 1
                      ? `item-acordion-container-${index - 1}`
                      : `container-content-question`
                  if (width > 1024) {
                    idScroll =
                      index > 1
                        ? `item-acordion-container-${index - 1}`
                        : 'container-parrafo__content'
                  }
                  clickWithScrollCenter(document.getElementById(idScroll))
                }}
              >
                <div
                  itemprop="text"
                  id={`container-content-question-parrafo-value-${index + 1}`}
                  className="container-content-question-parrafo-value"
                >
                  <RichText
                    accessibility={accessibility}
                    type={type}
                    line={lineGtm}
                    title={data.title}
                    text={getContentByTitle(data.parrafos[index])}
                    THS={THS}
                  />
                </div>
              </ItemAcordion>
            )
          })}
        </div>
      </div>

      {data.cta && data.cta['titulo'] !== null && data.cta['url'] !== null ? (
        <div
          id="container-content-question-calltoaction"
          className="container-content-question-call-to-action"
        >
          <CallToAction
            descripcion={data.cta.titulo}
            titulo={data.cta.textoButton}
            link={data.cta.url}
            titleContent={data.title}
            line={line}
            lineGtm={lineGtm}
            type={type}
            user={user}
          />
        </div>
      ) : null}
    </div>
  )
}
