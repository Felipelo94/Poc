import React from 'react'
import './contenido-interna-mobile.scss'
import RichText from '../../../utils/rich-text/rich-text'
import { ReactComponent as UserIcon } from '../../../assets/images/internal-icon-responsive-1.svg'
import { ReactComponent as LlaveIcon } from '../../../assets/images/internal-icon-responsive.svg'
import CallToAction from '../call-to-action/call-to-action'

export default function ContenidoInternaMobile({
  data,
  isGetSubtitulo,
  line,
  user,
  type,
  lineGtm,
  accessibility,
  THS
}) {
  let allTitle = []
  let allParagraph = data.parrafos
  let finalArray = []
  const getIcon = indexP => {
    if (indexP === 0) {
      return (
        <UserIcon
          className="contenido-interna-mobile-image"
          id="contenido-interna-mobile-image"
          alt="contenido-interna-mobile-images"
        />
      )
    } else {
      return (
        <LlaveIcon
          className="contenido-interna-mobile-image"
          id="contenido-interna-mobile-image"
          alt="contenido-interna-mobile-images"
        />
      )
    }
  }

  data.parrafos.map(paragraph =>
    paragraph.content.map(({ content, nodeType }) =>
      nodeType.indexOf('heading') >= 0
        ? content.map(value => {
            if (value.value && value.value.trim().length > 0) {
              allTitle.push({ titulo: value.value })
            }
            return null
          })
        : allTitle.push({ titulo: null })
    )
  )

  allTitle = allTitle.filter(item => item.titulo !== null)
  const sliceData = i => {
    if (allParagraph.length > i) {
      const arrayResult = allParagraph[i].content
      let result = []
      arrayResult.map((itemA, index) => {
        if (index > 0) {
          result.push(itemA)
        }
      })
      return { content: result, data: {}, nodeType: 'document' }
    }
  }

  if (allParagraph) {
    finalArray.push(sliceData(0))
    finalArray.push(sliceData(1))
  }

  const validateImage = array => {
    if (array) {
      if (array.titulo) {
        if (array.titulo.length) {
          return true
        }
      }
    }
  }

  return (
    <div
      className="contenido-interna-container"
      id="contenido-interna-container"
    >
      <span className="hidden-lable" id="hidden-lable">
        texto corto
      </span>
      {finalArray.map((items, index) => {
        return (
          <div
            id={`contenido-interna-mobile-${index}`}
            className={`contenido-interna-mobile-${index}`}
          >
            <div
              className="contenido-interna-mobile"
              id="contenido-interna-mobile"
            >
              {validateImage(allTitle[index]) ? getIcon(index) : ''}
              {isGetSubtitulo ? (
                <h3
                  className="contenido-interna-mobile-text"
                  id="contenido-interna-mobile-text"
                >
                  {allTitle[index] && allTitle[index].titulo}
                </h3>
              ) : (
                <h2
                  className="contenido-interna-mobile-text"
                  id="contenido-interna-mobile-text"
                >
                  {allTitle[index] && allTitle[index].titulo}
                </h2>
              )}
            </div>
            <div id="contenido-interna-mobile-parrafos">
              <RichText
                accessibility={accessibility}
                line={lineGtm}
                type={type}
                title={data.title}
                text={items}
                THS={THS}
              />
            </div>
          </div>
        )
      })}
      <div
        className="contenido-interna-container-call-to-action-mobile"
        id="contenido-interna-container-call-to-action-mobile"
      >
        {data.cta && (
          <CallToAction
            accessibility={accessibility}
            descripcion={data.cta.titulo}
            titulo={data.cta.textoButton}
            link={data.cta.url}
            titleContent={data.title}
            line={line}
            lineGtm={lineGtm}
            type={type}
            user={user}
          />
        )}
      </div>
    </div>
  )
}
