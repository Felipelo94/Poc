import React from 'react'
import ContentUtil from '../../../utils/ContentUtil'
import { useCurrentWidth } from 'react-socks'
import Alert from '../../atoms/alert/alert'
import ItemFigure from '../../atoms/item-figure/item-figure'
import './market-figures.scss'

export default function MarketFigures({
  figures,
  image,
  texto,
  accessibility
}) {
  const contentUtil = new ContentUtil()
  return (
    <div className={`container-market-figures`} id={`container-market-figures`}>
      {figures && figures.length > 0 ? (
        <div
          className={`container-market-figures-list`}
          id={`container-market-figures-list`}
        >
          {figures.map((figure, index) => {
            return (
              <ItemFigure
                isFirstOne={index === 0}
                isLastOne={figures.length - 1 === index}
                id={index}
                figure={figure}
              />
            )
          })}
        </div>
      ) : null}

      <div
        id="container-market-figures-content"
        className="container-market-figures-content"
      >
        {image ? (
          <img
            className="container-market-figures-content-img"
            alt={contentUtil.generateAltImage(image.file.fileName)}
            src={image.file.url}
          />
        ) : null}
        <div
          id="container-market-figures-end"
          className="container-market-figures-end"
        >
          <iframe
            width="100%"
            style={{
              border: 0,
              marginTop: useCurrentWidth() > 1024 ? 29 : 0,
              marginBottom: useCurrentWidth() > 1024 ? 76 : 32
            }}
            height="393px"
            src="https://widgetsdataifx.blob.core.windows.net/proteccionnew/noticias"
          />
          <Alert
            accessibility={accessibility}
            text={texto}
            alertBlue={false}
            isInversion={true}
            nombreCallToActionTextoCierre={''}
            linkCallToActionTextoCierre={''}
          />
        </div>
      </div>
    </div>
  )
}
