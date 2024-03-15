import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import {
  LETTERS_GLOSSARY_DEFAULT,
  SHOW_ALL_DEFINITIONS
} from '../../../const/dictionary/glossary-const'
import GlossaryAlphabet from '../../internal-pages/glossary/glossary-alphabet'
import { clickWithScrollCenter } from '../../../utils/commons-event-content'
import './glossary.scss'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Breakpoint } from 'react-socks'
import Image from '../../atoms/image/image'
import { checkIfExtensionImageIsAllowed } from '../../../utils/image-utils'
import RichText from '../../../utils/rich-text/rich-text'

function GlossaryComponent({ words, data, lineGtm }) {
  const [transformedWords, setTransformedWords] = useState([])
  const [letterSelected, setLetterSelected] = useState(LETTERS_GLOSSARY_DEFAULT)
  const [items, setItems] = useState(Array.from({ length: 20 }))
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const transformWords = item => {
      let orderedWords = []

      item.map(x => {
        return orderedWords.push({
          letra: x.node.letra.letra,
          palabra: x.node.palabra.palabra,
          significado: x.node.significado.significado
        })
      })

      return orderedWords.sort((x, y) => x.letra - y.letra).reverse()
    }

    setTransformedWords(transformWords(words.allContentfulGlosario.edges))
  }, [words])

  const fetchMoreData = () => {
    if (items.length >= transformedWords.length) {
      setHasMore(false)
      return
    }
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })))
    }, 500)
  }

  useEffect(() => {
    if (!hasMore) {
      fetchMoreData()
    }
  }, [words])

  useEffect(() => {
    if (letterSelected !== LETTERS_GLOSSARY_DEFAULT) {
      clickWithScrollCenter(
        document.getElementById('glossary-alphabet-container')
      )
    }
  }, [letterSelected])

  const handleClickLetter = letterSelectedParam => {
    setLetterSelected(letterSelectedParam)
  }

  return (
    <React.Fragment>
      <div className="hidden-lable">Glosario</div>
      {data.imagenes ? (
        data.imagenes[1] ? (
          <div
            className="LongText-container-parrafo-imagen"
            id="LongText-container-parrafo-imagen"
          >
            <div>
              <Breakpoint customQuery="(max-width: 1024px)">
                {data.imagenes ? (
                  data.imagenes[1] ? (
                    <Image
                      line={lineGtm}
                      imagen={data.imagenes[1].imagen}
                      imgTitle={data.imagenes[1].title}
                      height={'194px'}
                      width={'194px'}
                      alt={data.imagenes[1].nameImage}
                      id="LongText-container-parrafo-imagen-value"
                      style={
                        checkIfExtensionImageIsAllowed(data.imagenes[1].imagen)
                          ? {
                              borderRadius: '50%',
                              position: 'absolute'
                            }
                          : {}
                      }
                      classGtm=""
                      animacion={true}
                    />
                  ) : null
                ) : null}
              </Breakpoint>
              <Breakpoint customQuery="(min-width: 1025px)">
                {data.imagenes ? (
                  data.imagenes[1] ? (
                    <Image
                      imagen={data.imagenes[1].imagen}
                      imgTitle={data.imagenes[1].title}
                      height={'350px'}
                      line={lineGtm}
                      width={'350px'}
                      alt={data.imagenes[1].nameImage}
                      id="LongText-container-parrafo-imagen-value"
                      style={
                        checkIfExtensionImageIsAllowed(data.imagenes[1].imagen)
                          ? {
                              borderRadius: '50%',
                              position: 'absolute'
                            }
                          : {}
                      }
                      classGtm=""
                      animacion={true}
                    />
                  ) : null
                ) : null}
              </Breakpoint>
            </div>
          </div>
        ) : null
      ) : null}
      <div
        className={`glossary-component-container${
          data.imagenes?.[1]?.imagen
            ? ' glossary-component-container--margin-left'
            : ''
        }`}
        id="glossary-component-container"
      >
        {data.parrafos.map((item, index) => {
          return (
            <div
              key={index}
              id={`LongText-container-${index}`}
              className="LongText-container"
            >
              <div
                id={`LongText-container-parrafo-${index}`}
                className="LongText-container-parrafo"
              >
                <div id={`LongText-container-parrafo-value-${index}`}>
                  <RichText line={lineGtm} text={item} title={data.title} />
                </div>
              </div>
            </div>
          )
        })}
        <GlossaryAlphabet
          words={transformedWords}
          letterSelected={letterSelected}
          handleClickLetter={handleClickLetter}
        />
        {letterSelected !== LETTERS_GLOSSARY_DEFAULT && (
          <h3 id="heading-letter-selected" className="heading-letter-selected">
            {letterSelected}
          </h3>
        )}
        <InfiniteScroll
          id="scroll-contenido"
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
        >
          {transformedWords
            .filter(word => {
              if (letterSelected === LETTERS_GLOSSARY_DEFAULT)
                return SHOW_ALL_DEFINITIONS
              return word.letra.toLowerCase() === letterSelected.toLowerCase()
            })
            .map((x, i) => {
              if (i <= items.length) {
                return (
                  <div
                    className="glossary-component-container-item"
                    id="glossary-component-container-item"
                  >
                    <div
                      className="glossary-component-container-item-palabra"
                      id={`glossary-component-container-item-${x.palabra}`}
                    >
                      <span>{x.palabra}</span>
                    </div>
                    <div
                      className="glossary-component-container-item-significado"
                      id={`glossary-component-container-item-${x.significado}`}
                    >
                      <span>{x.significado}</span>
                    </div>
                  </div>
                )
              }
              return null
            })}
        </InfiniteScroll>
      </div>
    </React.Fragment>
  )
}

export default function Glossary({ data, lineGtm }) {
  const words = useStaticQuery(graphql`
    query MyQueryWords {
      allContentfulGlosario {
        edges {
          node {
            palabra {
              palabra
            }
            significado {
              significado
            }
            letra {
              letra
            }
          }
        }
      }
    }
  `)

  return <GlossaryComponent words={words} data={data} lineGtm={lineGtm} />
}
