import React, { Fragment } from 'react'
import './audio.scss'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import prevAudio from '../../../assets/images/prev-audio.svg'
import nextAudio from '../../../assets/images/next-audio.svg'
import volumenAudio from '../../../assets/images/volume-audio.svg'
import play from '../../../assets/images/play.svg'
import pause from '../../../assets/images/pause.svg'
import mute from '../../../assets/images/mute.svg'
import icon from '../../../assets/images/audio-img.png'
import { getSizeScreen } from '../../../utils/handleResize'
import { ReactComponent as PlayAudio } from '../../../assets/images/icons/icon-play-internal-audio.svg'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { sendEventGA } from '../../../utils/classGtmUtil'

const ContainerVideoStyled = styled.div`
  background: ${props =>
    props.theme.colors ? props.theme.colors.cardBackground : null} !important;
  transition: ${props => props.theme.animation};
  box-shadow: ${props =>
    props.theme.colors ? props.theme.colors.cardBoxShadow : null} !important;
`

const ContainerVideoInfoStyled = styled.div`
  .container-audio-content-title {
    color: ${props =>
      props.theme.colors ? props.theme.colors.cardTitleInforme : null};
    transition: ${props => props.theme.animation};
  }

  .container-audio-content-description {
    color: ${props =>
      props.theme.colors ? props.theme.colors.cardSubtitle : null};
    transition: ${props => props.theme.animation};
  }

  .rhap_container {
    background: ${props =>
      props.theme.colors ? props.theme.colors.cardBackground : null} !important;
    color: ${props =>
      props.theme.colors ? props.theme.colors.cardDescription : null};
    transition: ${props => props.theme.animation};

    .rhap_time {
      color: ${props =>
        props.theme.colors ? props.theme.colors.cardDescription : null};
      transition: ${props => props.theme.animation};
    }

    .rhap_progress-filled {
      background-color: ${props =>
        props.theme.colors ? props.theme.colors.progressBar : null};
    }
  }
`

const Title = ({ title, subtitle }) => {
  return (
    <>
      <div
        id="container-audio-content-title"
        className="container-audio-content-title"
      >
        <h4>{title}</h4>
      </div>
      <div
        id="container-audio-content-description"
        className="container-audio-content-description"
      >
        <p>{subtitle}</p>
      </div>
    </>
  )
}

let Audio = ({
  title,
  subtitle,
  audio,
  dataCompleta,
  id,
  setAudioActive,
  list,
  accessibility,
  categoryGA = '',
  actionGA = ''
}) => {
  const getStyleImg = () => {
    return accessibility
      ? accessibility.darkMode
        ? {
            filter:
              'invert(93%) sepia(4%) saturate(929%) hue-rotate( 189deg) brightness(224%) contrast(51%)'
          }
        : null
      : null
  }

  const handlerSendEventGA = actionAudioPlayer => {
    sendEventGA(categoryGA, `${actionGA}-${actionAudioPlayer}`, title)
  }

  const dataList = list
    ? dataCompleta.filter(item => item.contentful_id !== id)
    : null

  return (
    <ContainerVideoStyled id="container-audio" className="container-audio">
      <div id="container-audio-list" className="container-audio-list">
        <div id="container-audio-img" className="container-audio-header">
          <img
            id="container-audio-img-src"
            className="container-audio-img"
            src={icon}
            alt=""
          ></img>
          {getSizeScreen() <= 1024 && (
            <div id="container-audio-info" className="container-audio-info">
              {<Title title={title} subtitle={subtitle} />}
            </div>
          )}
        </div>
        <ContainerVideoInfoStyled
          id="container-audio-content"
          className="container-audio-content"
        >
          {getSizeScreen() > 1024 && (
            <Title title={title} subtitle={subtitle} />
          )}
          <AudioPlayer
            id="container-audio-reproductor"
            key="container-audio-reproductor"
            src={audio}
            customAdditionalControls={[]}
            onPlay={() => handlerSendEventGA('Play')}
            onPause={() => handlerSendEventGA('Pausar')}
            customIcons={{
              rewind: (
                <img
                  style={getStyleImg()}
                  id="container-audio-prev"
                  src={prevAudio}
                  alt=""
                  onClick={() => {
                    handlerSendEventGA('Retrocede')
                  }}
                />
              ),
              forward: (
                <img
                  style={getStyleImg()}
                  id="container-audio-next"
                  src={nextAudio}
                  alt=""
                  onClick={() => {
                    handlerSendEventGA('Avanza')
                  }}
                />
              ),
              volume: (
                <img
                  style={getStyleImg()}
                  id="container-audio-volumen"
                  src={volumenAudio}
                  alt=""
                />
              ),
              volumeMute: (
                <img
                  style={getStyleImg()}
                  id="container-audio-mute"
                  src={mute}
                  alt=""
                />
              ),
              play: (
                <img
                  id="container-audio-play"
                  width="48px"
                  height="48px"
                  src={play}
                  alt=""
                />
              ),
              pause: (
                <img
                  id="container-audio-pause"
                  width="48px"
                  height="48px"
                  src={pause}
                  alt=""
                />
              )
            }}
          />
        </ContainerVideoInfoStyled>
      </div>
      {list && dataList.length > 0 && (
        <div id="container-audio-next" className="container-audio-next">
          {dataList.map((i, index) => {
            return (
              <div
                onClick={() => {
                  setAudioActive(i)
                }}
                id="container-audio-next-item"
                className="container-audio-next-item"
                role="presentation"
              >
                <div
                  id="container-audio-next-item-img"
                  className="container-audio-next-item-img"
                >
                  <span
                    id="container-audio-next-item-img-index"
                    className="container-audio-next-item-img-index"
                  >
                    {index <= 9 ? '0' + (index + 1) : index + 1}
                  </span>
                  <img
                    src={icon}
                    id="container-audio-next-item-img-value"
                    className="container-audio-next-item-img-value"
                    alt=""
                  />
                  <div
                    id="container-audio-next-item-header"
                    className="container-audio-next-item-header"
                  >
                    <div
                      id="container-audio-next-item-header-title"
                      className="container-audio-next-item-header-title"
                    >
                      <span>{i.titulo}</span>
                    </div>
                    <div
                      id="container-audio-next-item-header-subtitle"
                      className="container-audio-next-item-header-subtitle"
                    >
                      <span>{i.descripcion}</span>
                    </div>
                  </div>
                </div>
                <PlayAudio
                  className={'play-audio'}
                  id={'play-audio'}
                  alt="Ícono de play de la proximo audio"
                  title="Ícono de play de la proximo audio"
                />
              </div>
            )
          })}
        </div>
      )}
    </ContainerVideoStyled>
  )
}

const mapStateToProps = state => {
  return {
    accessibility: state.accesibility
  }
}

Audio = connect(mapStateToProps)(Audio)

export default Audio
