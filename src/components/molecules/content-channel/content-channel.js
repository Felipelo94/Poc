import React from 'react'
import RichText from '../../../utils/rich-text/rich-text'
import ContentUtil from '../../../utils/ContentUtil'
import './content-channel.scss'

const ContentChannel = ({ data, accessibility }) => {
  const contentUtil = new ContentUtil()
  let parrafosPares = []
  let parrafosImpares = []
  if (data) {
    const dataDefualt = data.json
    const dataParrafos = data.json.content.slice()
    const parrafos = contentUtil.getParagraphByJson(dataParrafos, dataDefualt)
    parrafosPares = parrafos.filter((par, item) => {
      if (item % 2) {
        return par
      }
    })
    parrafosImpares = parrafos.filter((par, item) => {
      if (!item % 2) {
        return par
      }
    })
  }

  return (
    <div className="container-content-channel" id="container-content-channel">
      <div
        id="container-content-channel-impares"
        className={`container-content-channel-${
          parrafosPares.length === 0 ? 'parrafos' : 'impares'
        }`}
      >
        {parrafosImpares.map((items, index) => {
          return (
            <div
              id={`container-content-channel-impares-parrafos-${index}`}
              className={`"container-content-channel-impares-parrafos ${
                parrafosImpares.length === 1 && parrafosPares.length === 0
                  ? 'unique-p'
                  : ''
              }`}
            >
              <RichText
                accessibility={accessibility}
                line={'Canales'}
                title={data.title}
                fontSize="15px"
                lineHeight="22px"
                text={items}
              />
            </div>
          )
        })}
      </div>
      <div
        id="container-content-channel-pares"
        className={`container-content-channel-${
          parrafosPares.length === 0 ? 'no-parrafos' : 'pares'
        }`}
      >
        {parrafosPares.map((items, index) => {
          return (
            <div
              id={`container-content-channel-pares-parrafos-${index}`}
              className="container-content-channel-pares-parrafos"
            >
              <RichText
                accessibility={accessibility}
                line={'Canales'}
                title={data.title}
                fontSize="15px"
                lineHeight="22px"
                text={items}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default ContentChannel
