import React, { useEffect, useState } from 'react'
import BiteGraph from '../bite/bite-graph/bite-graph'
import descargar from '../../../assets/images/download-cloud.svg'
import archivo from '../../../assets/images/external-link.svg'
import './component-present.scss'
import YoucantmissComponent from '../banner-bite/You-cant-miss/You-cant-miss'
import { get } from '../../../services/service-general/service-general'
import TitleSesion from '../../atoms/title-sesion/title-sesion'
import HeaderSession from '../header-session/header-session'
import Podcast from '../podcast/podcast'
import { getSizeScreen } from '../../../utils/handleResize'
import { getCurrentHost } from '../../../utils/redirectUtil'
import { getIdDiv } from '../../../utils/redirect-bread-crumb'
import { sendEventGA } from '../../../utils/classGtmUtil'
import Anchor from '../../atoms/anchor/anchor'

export const ElementGraphComponets = ({
  itemsInforme,
  i,
  line,
  accessibility
}) => {
  return (
    <React.Fragment>
      <div
        id="container-biteGraph-url"
        style={{
          display: 'none',
          visibility: 'hidden',
          height: 0,
          width: 0
        }}
      >
        <span id="container-biteGraph-url-title">{itemsInforme.titulo}</span>
        <span id="container-biteGraph-url-texto">{itemsInforme.texto}</span>
        <span id="container-biteGraph-url-url">{itemsInforme.url}</span>
      </div>
      <BiteGraph
        accessibility={accessibility}
        title={itemsInforme.titulo}
        text={itemsInforme.texto}
        image={i === 0 || i === 1 ? descargar : archivo}
        link={itemsInforme.url}
        textBotton={i === 0 || i === 1 ? 'Descarga el PDF' : 'Ver informe'}
      />
    </React.Fragment>
  )
}

export default function ComponentPresent({
  imagen,
  data,
  line,
  userData,
  type,
  dataNovedad,
  indexBitestateSecond,
  tituloSeccionPodcast,
  descripcionSeccionPodcast,
  podcasts,
  accessibility
}) {
  const [itemBiteInversiones, setItemBiteInversiones] = useState([])
  const [itemPodcastInversiones, setItemPodcastInversiones] = useState([])

  const dataBitesInfo = () => {
    const dataSort = data.sort(function(a, b) {
      return new Date(b.updatedAt) - new Date(a.updatedAt)
    })

    const dataNew = dataSort.map(itemsInforme => ({
      texto: itemsInforme.textoIntroductorioBite,
      titulo: itemsInforme.titulo,
      url: itemsInforme.linkCallToActionInformes
        ? itemsInforme.linkCallToActionInformes.linkCallToActionInformes
        : itemsInforme.contenido.urlSeo,
      updatedAt: itemsInforme.updatedAt,
      type: itemsInforme.tipoDeInforme,
      visible: Boolean(
        itemsInforme.contenido || itemsInforme.linkCallToActionInformes
      )
    }))
    setItemBiteInversiones(dataNew)
  }

  const dataPosdcatsinfo = () => {
    let newPodcast = []
    const dataNewPosdcats = podcasts
      .filter(item => {
        return (
          item.lineaDeProducto.filter(
            catego =>
              ['4ZiidHPjG8Bz3Q0bdS9aRb'].indexOf(catego.contentful_id) >= 0
          ).length > 0
        )
      })
      .sort(function(a, b) {
        return new Date(b.updatedAt) - new Date(a.updatedAt)
      })

    const contefullPosdcat = dataNewPosdcats.filter(item => {
      return (
        item.OrigenDeAudio.filter(post => ['Contentful'].indexOf(post) >= 0)
          .length > 0
      )
    })

    const spotifyPosdcat = dataNewPosdcats.filter(item => {
      return (
        item.OrigenDeAudio.filter(post => ['Spotify'].indexOf(post) >= 0)
          .length > 0
      )
    })

    newPodcast.push(
      spotifyPosdcat.length > 0 && spotifyPosdcat[0],
      contefullPosdcat.length > 0 && contefullPosdcat[0]
    )

    setItemPodcastInversiones(newPodcast)
  }

  useEffect(() => {
    dataBitesInfo()
  }, [data])
  useEffect(() => {
    dataPosdcatsinfo()
  }, [podcasts])

  return (
    <React.Fragment>
      <section
        className="component-present-container"
        id="component-present-container"
      >
        <section
          className="component-present-container-sesion"
          id="component-present-container-sesion"
        >
          {itemBiteInversiones.map((itemsInforme, i) => {
            if (i <= 3 && itemsInforme.visible) {
              return (
                <React.Fragment>
                  <Anchor
                    href={
                      itemsInforme.url?.includes('https:')
                        ? itemsInforme.url
                        : getCurrentHost() + `/${getIdDiv(itemsInforme.url)}`
                    }
                    onClick={() => {
                      sendEventGA(
                        'Inversion',
                        'ClicInternaInversion-Tarjeta',
                        itemsInforme.titulo
                      )
                    }}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <ElementGraphComponets
                      accessibility={accessibility}
                      itemsInforme={itemsInforme}
                      i={i}
                      line={line}
                    />
                  </Anchor>
                </React.Fragment>
              )
            }
            return null
          })}
        </section>
        <section
          className="component-present-container-image"
          id="component-present-container-image"
        >
          <img src={imagen.file.url} alt={imagen.file.fileName} />
        </section>
      </section>
      {dataNovedad.length > 0 ? (
        <section
          className="d-flex flex-column component-present-container-slider"
          style={
            getSizeScreen() > 1024
              ? {
                  margin: '16px 0px 16px 120px',
                  width: 'inherit',
                  position: 'relative'
                }
              : { margin: '0px', width: '100%' }
          }
        >
          <TitleSesion
            className={'NoTePuedesPerder-dark'}
            title={
              'Mantente bien informado. Entérate aquí de novedades en los mercados:'
            }
            size="24px"
          />
          <YoucantmissComponent
            accessibility={accessibility}
            line={{ category: 'Inversión' }}
            getF={get}
            styleSliderCard={{ marginLeft: 98, marginRight: 0 }}
            id="contendio-Inversiones"
            data={dataNovedad}
            userData={userData}
            numBite={5}
            index={indexBitestateSecond}
            type={type}
            viewTarjet={1}
            actionGA="ClicInternaInversion-ContenidoBienInformado"
          />
        </section>
      ) : null}
      {itemPodcastInversiones.length > 0 ? (
        <section
          className="component-present-container-posdcat"
          id="component-present-container-posdcat"
        >
          {tituloSeccionPodcast && descripcionSeccionPodcast && (
            <HeaderSession
              title={tituloSeccionPodcast}
              subtitle={descripcionSeccionPodcast}
              className="NoTePuedesPerder-dark"
              tamaño="24px"
            />
          )}
          {itemPodcastInversiones.map(post => {
            return <Podcast data={post} />
          })}
        </section>
      ) : null}
    </React.Fragment>
  )
}
