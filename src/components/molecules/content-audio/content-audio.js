import React, { useState } from 'react'
import './content-audio.scss'
import Podcast from '../podcast/podcast'
import RichText from '../../../utils/rich-text/rich-text'
import { Breakpoint } from 'react-socks'
import Image from '../../atoms/image/image'
import CallToAction from '../call-to-action/call-to-action'
import { checkIfExtensionImageIsAllowed } from '../../../utils/image-utils'

export default function ContentAudio({ lineGtm, type, data, line, user }) {
  const contefullPosdcat = data
    ? data.podcast
      ? data.podcast.filter(item => {
          return (
            item.OrigenDeAudio.filter(post => ['Contentful'].indexOf(post) >= 0)
              .length > 0
          )
        })
      : []
    : []

  const spotifyPosdcat = data
    ? data.podcast
      ? data.podcast.filter(item => {
          return (
            item.OrigenDeAudio.filter(post => ['Spotify'].indexOf(post) >= 0)
              .length > 0
          )
        })
      : []
    : []

  const [audioActive, setAudioActive] = useState(
    contefullPosdcat ? (contefullPosdcat[0] ? contefullPosdcat[0] : '') : ''
  )

  return (
    <div className="container-content-audio" id="container-content-audio">
      <span className="hidden-lable" id="hidden-lable">
        audio
      </span>
      <div
        className="container-content-audio-reproductor"
        id="container-content-audio-reproductor"
      >
        {audioActive ? (
          <div
            className="container-content-audio-reproductor-item"
            id="container-content-audio-reproductor-item"
          >
            <Podcast
              data={audioActive}
              dataCompleta={contefullPosdcat}
              list={true}
              setAudioActive={setAudioActive}
            />
          </div>
        ) : null}
        {spotifyPosdcat
          ? spotifyPosdcat.length > 0
            ? spotifyPosdcat.map(i => {
                return (
                  <div
                    className="container-content-audio-reproductor-item"
                    id="container-content-audio-reproductor-item"
                  >
                    <Podcast data={i} dataCompleta={spotifyPosdcat} />
                  </div>
                )
              })
            : null
          : null}
      </div>
      <div
        className="container-content-audio-descripcion"
        id="container-content-audio-descripcion"
      >
        <div
          className="container-content-audio-descripcion-parrafo"
          id="container-content-audio-descripcion-parrafo"
        >
          {data
            ? data.parrafos
              ? data.parrafos.map((items, index) => {
                  return (
                    <div id={`container-content-podcasts-parrafos-${index}`}>
                      <RichText
                        fontSize="15px"
                        title={data.title}
                        text={items}
                        lineHeight="22px"
                        type={type}
                        line={lineGtm}
                      />
                    </div>
                  )
                })
              : null
            : null}
        </div>
        <div
          className="container-large-text2-img"
          id="container-large-text2-img"
        >
          <Breakpoint customQuery="(max-width: 1024px)">
            {data ? (
              data.imagenes ? (
                data.imagenes[0] ? (
                  <Image
                    width={'194px'}
                    height={'194px'}
                    line={lineGtm}
                    imgTitle={data.imagenes[0].title}
                    imagen={data.imagenes[0].imagen}
                    id="container-large-text2-img-value"
                    alt={data.imagenes[0].nameImage}
                    animacion={true}
                    style={
                      checkIfExtensionImageIsAllowed(data.imagenes[0].imagen)
                        ? {
                            borderRadius: '50%',
                            position: 'absolute'
                          }
                        : {}
                    }
                    classGtm=""
                  />
                ) : null
              ) : null
            ) : null}
          </Breakpoint>
          <Breakpoint customQuery="(min-width: 1025px)">
            {data ? (
              data.imagenes ? (
                data.imagenes[0] ? (
                  <Image
                    line={lineGtm}
                    height={'350px'}
                    imagen={data.imagenes[0].imagen}
                    width={'350px'}
                    imgTitle={data.imagenes[0].title}
                    alt={data.imagenes[0].nameImage}
                    style={
                      checkIfExtensionImageIsAllowed(data.imagenes[0].imagen)
                        ? {
                            borderRadius: '50%',
                            position: 'absolute'
                          }
                        : {}
                    }
                    id="container-large-text2-img-value"
                    animacion={true}
                    classGtm=""
                  />
                ) : null
              ) : null
            ) : null}
          </Breakpoint>
        </div>
      </div>
      {data ? (
        data.cta && data.cta['titulo'] !== null && data.cta['url'] !== null ? (
          <div
            id="container-content-audio-calltoaction"
            className="container-content-audio-call-to-action"
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
        ) : null
      ) : null}
    </div>
  )
}
