import React, { useEffect, useState } from 'react'
import ContenidoInterna from '../contenido-interna/contenido-interna'
import LongText from '../long-text/long-text'
import LargeTex2 from '../large-text2/large-text2'
import ContentVideo from '../content-video/content-video'
import ContentWidget from '../content-widget/content-widget'
import ContentQuestion from '../content-question/content-question'
import TitleSesion from '../../atoms/title-sesion/title-sesion'
import Meal from '../meal/meal'
import StepByStep from '../step-by-step/step-by-step'
import ContentInfographic from '../content-infographic/content-infographic'
import { Breakpoint, useCurrentWidth } from 'react-socks'
import ContenidoInternaMobile from '../contenido-interna-mobile/contenido-interna-mobile'
import MealMobile from '../meal-mobile/meal-mobile'
import StepByStepMobile from '../step-by-step-mobile/step-by-step-mobile'
import Error from '../error/error'
import image from '../../../assets/images/Error-content-desktop.png'
import Contentsolutions from '../content-solutions/content-solutions'
import ContentApplication from '../content-application/content-application'
import CalculatorCesantias from '../calulator/cesantia/calculator-cesatias'
import param from '../../../utils/paramApplication'
import ContentAudio from '../content-audio/content-audio'
import SimulatorMutuoColombia from '../simulator-mutuo-colombia/simulator-mutuo-colombia'
import Glossary from '../glossary/glossary'
import IntroductionSection from '../../internal-pages/common/introduction-section/introduction-section'
import TableRentabilidadesContainer from '../../organisms/table-rentabilidades-container/table-rentabilidades-container'
import './content-proxy.scss'

const ContentProxy = ({
  paragraphs,
  images,
  subtitulo,
  type,
  video,
  podcast,
  callToActionBtn,
  isSnack,
  alertText,
  infographic,
  infographicMobile,
  titulo,
  line,
  descrpcionCorta,
  nombreCallToActionTextoCierre,
  linkCallToActionTextoCierre,
  idContent,
  user,
  typeCustomer,
  lineGtm,
  widget,
  accessibility,
  THS,
  callToActionBtn2
}) => {
  let countCharacter = 0

  const [dataSend, setDataSend] = useState({
    title: titulo,
    imagenes: images,
    parrafos: paragraphs,
    cta: callToActionBtn,
    cta2: callToActionBtn2,
    video: video,
    podcast: podcast
  })

  const [changeTab, setChangeTab] = useState(null)

  const widthScreen = useCurrentWidth()
  const style = widthScreen > 1500 ? { maxWidth: '1280px', margin: 'auto' } : {}
  const styleScreen1500Width =
    widthScreen > 1500 ? { maxWidth: '1240px', margin: 'auto' } : {}
  const hasSubtitle = !!subtitulo

  const countChar = data => {
    if (!Array.isArray(data)) {
      if (data.hasOwnProperty('value')) {
        return data.value
      } else {
        return countChar(data.content)
      }
    } else {
      return data.map(item => countChar(item)).toString()
    }
  }

  paragraphs.map(paragraph =>
    paragraph.content.map(({ content }) => {
      const valueData = countChar(content)
      return (countCharacter += valueData ? valueData.length : 0)
    })
  )

  paragraphs.map(paragraph =>
    paragraph.content.map(({ content }) => {
      return content.map(itemP => {
        if (itemP.nodeType === 'text' && itemP.value === '') {
          itemP.value = '\n'
        }
        return itemP
      })
    })
  )

  let contentShow = null

  useEffect(() => {
    setDataSend({
      title: titulo,
      imagenes: images,
      parrafos: paragraphs,
      cta: callToActionBtn,
      video: video,
      podcast: podcast,
      cta2: callToActionBtn2
    })
  }, [titulo, video, podcast])

  const templateContenidoInterna = () => {
    contentShow = (
      <div
        id="templateContenidoInterna-container"
        className="templateContenidoInterna-container"
        style={style}
      >
        <div
          style={{ marginBottom: 36, display: 'none' }}
          id="templateContenidoInterna-container-title-sesion"
          className="ContentProxy-container-markdonw templateContenidoInterna-container-markdonw"
        />
        <div id="templateContenidoInterna-container-subtitle">
          <TitleSesion title={subtitulo} className="title-big" size="30px" />
        </div>
        <div id="templateContenidoInterna-container-contenido">
          <Breakpoint customQuery="(max-width: 1024px)">
            <ContenidoInternaMobile
              accessibility={accessibility}
              data={dataSend}
              isGetSubtitulo={subtitulo ? true : false}
              user={user}
              lineGtm={lineGtm}
              type={typeCustomer}
              line={line}
              THS={THS}
            />
          </Breakpoint>
          <Breakpoint customQuery="(min-width: 1025px)">
            <ContenidoInterna
              accessibility={accessibility}
              data={dataSend}
              type={typeCustomer}
              line={line}
              lineGtm={lineGtm}
              isGetSubtitulo={subtitulo ? true : false}
              user={user}
              THS={THS}
            />
          </Breakpoint>
        </div>
      </div>
    )
  }

  const templateQuestion = () => {
    contentShow = (
      <div style={style}>
        <ContentQuestion
          lineGtm={lineGtm}
          type={typeCustomer}
          line={line}
          accessibility={accessibility}
          data={dataSend}
          notData={false}
          user={user}
          THS={THS}
        />
      </div>
    )
  }

  const templateContenidoLongText = () => {
    contentShow = (
      <div
        className="ContentProxy-container"
        id="templateContenidoLongText-container"
        style={style}
      >
        <div
          className="ContentProxy-container-long-text"
          id="ContentProxy-container-long-text"
        >
          <div id="ContentProxy-container-long-text-LongText">
            <LongText
              accessibility={accessibility}
              data={{
                title: titulo,
                imagenes: images,
                parrafos: paragraphs,
                callToAction: callToActionBtn
              }}
              lineGtm={lineGtm}
              subtitle={subtitulo}
              type={typeCustomer}
              line={line}
              isGetSubtitulo={hasSubtitle}
              user={user}
              THS={THS}
            />
          </div>
        </div>
      </div>
    )
  }

  const templateContenidoLongTextTwo = () => {
    contentShow = (
      <div
        className="large-text-container-proxy"
        id="large-text-container-proxy"
        style={style}
      >
        <div
          id="large-text-container-proxy-title-sesion"
          className="ContentProxy-container-markdonw"
        />
        <div id="large-text-container-proxy-largetext2">
          <LargeTex2
            accessibility={accessibility}
            data={dataSend}
            type={typeCustomer}
            line={line}
            lineGtm={lineGtm}
            isGetSubtitulo={hasSubtitle}
            subtitulo={subtitulo}
            user={user}
            THS={THS}
          />
        </div>
      </div>
    )
  }

  const templateContenidoLongMeal = () => {
    contentShow = (
      <div id="Meal-text-container-proxy">
        <Breakpoint customQuery="(max-width: 1024px)">
          <MealMobile
            accessibility={accessibility}
            data={dataSend}
            type={typeCustomer}
            line={line}
            lineGtm={lineGtm}
            alertText={alertText}
            notData={false}
            titleH2={true}
            user={user}
            THS={THS}
            keyEmbedded={idContent === 'CJ1JOb6BpUlLvwZE8zHob'}
            componetEmbedded={
              <SimulatorMutuoColombia setChangeTab={setChangeTab} />
            }
            tabEmbedded={'Simula tu ahorro\r'}
            changeTab={changeTab}
          />
        </Breakpoint>
        <Breakpoint customQuery="(min-width: 1025px)">
          <Meal
            accessibility={accessibility}
            data={dataSend}
            type={typeCustomer}
            line={line}
            lineGtm={lineGtm}
            alertText={alertText}
            notData={false}
            user={user}
            THS={THS}
            keyEmbedded={idContent === 'CJ1JOb6BpUlLvwZE8zHob'}
            componetEmbedded={
              <SimulatorMutuoColombia setChangeTab={setChangeTab} />
            }
            tabEmbedded={'Simula tu ahorro\r'}
            changeTab={changeTab}
          />
        </Breakpoint>
      </div>
    )
  }

  const templateContenidoStepByStep = () => {
    contentShow = (
      <div id="container-header-step-by-step-container">
        {useCurrentWidth() > 1024 ? (
          <div
            className="container-header-step-by-step"
            id="container-header-step-by-step"
          >
            <div
              className="container-header-step-by-step-value"
              id="container-header-step-by-step-value"
            >
              <div
                className="ContentProxy-container-markdonw"
                id="ContentProxy-container-markdonw"
              />
            </div>
          </div>
        ) : null}
        <div id="container-header-step-by-step-container-StepByStep">
          <Breakpoint customQuery="(max-width: 1024px)">
            <StepByStepMobile
              accessibility={accessibility}
              type={typeCustomer}
              line={line}
              data={dataSend}
              lineGtm={lineGtm}
              notData={false}
              titleH2={true}
              user={user}
              THS={THS}
            />
          </Breakpoint>
          <Breakpoint customQuery="(min-width: 1025px)">
            <StepByStep
              accessibility={accessibility}
              line={line}
              type={typeCustomer}
              lineGtm={lineGtm}
              data={dataSend}
              notData={false}
              user={user}
              THS={THS}
            />
          </Breakpoint>
        </div>
      </div>
    )
  }

  const templateContenidoError = () => {
    contentShow = (
      <div
        id="template-contenido-error"
        className="template-contenido-error"
        style={style}
      >
        <Error
          title="¡Ups!"
          message="Este contenido está en actualización."
          callToAction={false}
          image={image}
          user={user}
        />
      </div>
    )
  }

  const templateContenidoSolutions = paragraph => {
    contentShow = (
      <div
        id="template-contenido-solutions"
        className="template-contenido-solutions"
        style={style}
      >
        <Contentsolutions
          accessibility={accessibility}
          paragraphs={paragraph}
          data={dataSend}
          alertText={alertText}
          lineGtm={lineGtm}
          line={line}
          type={typeCustomer}
          idContent={idContent}
          imagenes={images}
          descrpcionCorta={descrpcionCorta}
          nombreCallToActionTextoCierre={nombreCallToActionTextoCierre}
          linkCallToActionTextoCierre={linkCallToActionTextoCierre}
          user={user}
        />
      </div>
    )
  }

  if (idContent === '7sAAXHZuZo1MPS2j8U6U9G') {
    isSnack(false)
    contentShow = <TableRentabilidadesContainer />
  } else if (idContent === '24aOyom5BmwJVQmmHsV7jY') {
    isSnack(false)
    contentShow = (
      <>
        <div className="internal-page-section-margin template-contenido-glossary-introduction">
          <IntroductionSection
            title={dataSend.title}
            description={descrpcionCorta}
            image={dataSend.imagenes?.[0]}
          />
        </div>
        <div
          id="template-contenido-glossary"
          className="template-contenido-glossary"
          style={styleScreen1500Width}
        >
          <Glossary data={dataSend} lineGtm={lineGtm} />
        </div>
      </>
    )
  } else if (idContent === 'PQcZ8hT1yHyWxd8MTkdFj') {
    isSnack(true)
    contentShow = (
      <div style={style}>
        <ContentApplication
          accessibility={accessibility}
          type={typeCustomer}
          line={line}
          data={dataSend}
          subtitulo={subtitulo}
          user={user}
        >
          <CalculatorCesantias />
        </ContentApplication>
      </div>
    )
  } else if (idContent === '40U6iT93UwkukYi3HzZlHJ') {
    isSnack(true)
    templateContenidoLongMeal()
  } else if (idContent === '45QAunT84EtojZDkUV54Am') {
    isSnack(false)
    contentShow = (
      <div style={style}>
        <ContentWidget
          isDark={line === 'Inversión'}
          graph="https://widgetsdataifx.blob.core.windows.net/proteccionnew/historiconewstyles"
          size={{
            width: '100%',
            height: 'auto',
            minHeight: '432px',
            maxHeight: '661px',
            margin: widthScreen > 1024 ? '0px 88px' : '0px',
            marginBottom: widthScreen > 1024 ? '48px' : '0px'
          }}
          className="evolution-unit-value"
          id="evolution-unit-value"
          user={user}
        />
      </div>
    )
  } else if (widget && widget != null) {
    isSnack(false)
    contentShow = (
      <div style={style}>
        <ContentWidget
          isDark={line === 'Inversión'}
          idWidget={'%' + widget.Widget + '%'}
          graph={
            process.env.PATH_PREFIX === ''
              ? param[widget.Widget]
              : '%' + widget.Widget + '%'
          }
          size={
            idContent === '53aoziFAEUkV88p9hlH4aU'
              ? {
                  height: widthScreen > 1024 ? '1130px' : '1249px'
                }
              : {
                  width: widthScreen > 768 ? '768px' : '100%',
                  height: 'auto',
                  minHeight: '560px',
                  maxHeight: '661px',
                  display: widthScreen > 768 ? 'flex' : null,
                  margin: widthScreen > 768 ? '0 auto' : '0px',
                  marginBottom: widthScreen > 768 ? '48px' : '0px'
                }
          }
          className={
            idContent === '53aoziFAEUkV88p9hlH4aU'
              ? 'content-widget-container'
              : 'container-rentabilidad'
          }
          id="container-rentabilidad"
          user={user}
          showGiftTable={
            idContent === '7sAAXHZuZo1MPS2j8U6U9G' ||
            idContent === '53aoziFAEUkV88p9hlH4aU'
          }
        />
      </div>
    )
  } else if (infographic !== null && infographic) {
    isSnack(true)
    contentShow = (
      <div id="container-infographic-content-proxy" style={style}>
        <ContentInfographic
          accessibility={accessibility}
          data={dataSend}
          line={line}
          type={typeCustomer}
          lineGtm={lineGtm}
          infographic={infographic}
          infographicMobile={infographicMobile}
          user={user}
        />
      </div>
    )
  } else if (type === 'soluciones') {
    templateContenidoSolutions(paragraphs)
  } else if (video !== null) {
    isSnack(true)
    contentShow = (
      <div id="container-video-content-proxy" style={style}>
        <ContentVideo
          accessibility={accessibility}
          lineGtm={lineGtm}
          type={typeCustomer}
          line={line}
          data={dataSend}
          notData={false}
          user={user}
        />
      </div>
    )
  } else if (podcast !== null) {
    isSnack(true)
    contentShow = (
      <div id="container-podcast-content-proxy" style={style}>
        <ContentAudio
          lineGtm={lineGtm}
          type={typeCustomer}
          line={line}
          data={dataSend}
          notData={false}
          user={user}
        />
      </div>
    )
  } else if (type === 'producto') {
    if (paragraphs.length <= 2 && countCharacter <= 980) {
      if (images.length === 2) {
        isSnack(true)
        templateContenidoInterna()
      } else {
        isSnack(true)
        templateContenidoLongText()
      }
    } else if (paragraphs.length >= 5) {
      isSnack(true)
      templateContenidoLongMeal()
    } else if (
      (paragraphs.length > 2 && paragraphs.length < 5) ||
      countCharacter > 980
    ) {
      isSnack(true)
      templateContenidoLongText()
    } else if (paragraphs.length >= 8) {
      isSnack(true)
      templateQuestion()
    } else {
      isSnack(true)
      templateContenidoError()
    }
  } else if (type === 'beneficio') {
    if (
      (paragraphs.length > 2 && paragraphs.length < 5) ||
      countCharacter > 980
    ) {
      isSnack(true)
      templateContenidoLongText()
    } else if (paragraphs.length <= 2 && countCharacter <= 980) {
      if (images.length === 2) {
        isSnack(true)
        templateContenidoInterna()
      } else {
        isSnack(true)
        templateContenidoLongText()
      }
    } else if (paragraphs.length >= 8) {
      isSnack(true)
      templateQuestion()
    } else {
      isSnack(true)
      templateContenidoError()
    }
  } else if (type === 'novedad') {
    isSnack(true)
    templateContenidoLongTextTwo()
  } else if (type === 'servicio') {
    if (paragraphs.length === 1) {
      isSnack(true)
      templateContenidoLongTextTwo()
    } else if (paragraphs.length >= 2 && paragraphs.length <= 4) {
      isSnack(true)
      templateContenidoStepByStep()
    } else if (paragraphs.length >= 5 && paragraphs.length < 8) {
      isSnack(true)
      templateContenidoLongMeal()
    } else if (paragraphs.length >= 8) {
      isSnack(true)
      templateQuestion()
    } else {
      isSnack(true)
      templateContenidoError()
    }
  } else if (type === 'educativo') {
    if (paragraphs.length >= 2 && paragraphs.length <= 4) {
      isSnack(true)
      templateContenidoStepByStep()
    } else if (paragraphs.length === 1) {
      isSnack(true)
      templateContenidoLongTextTwo()
    } else if (paragraphs.length >= 5 && paragraphs.length < 8) {
      isSnack(true)
      templateContenidoLongMeal()
    } else if (paragraphs.length >= 8) {
      isSnack(true)
      templateQuestion()
    } else {
      isSnack(true)
      templateContenidoError()
    }
  } else if (type === 'campaña') {
    templateContenidoLongTextTwo()
    isSnack(true)
  } else if (paragraphs.length >= 8) {
    isSnack(true)
    templateQuestion()
  } else {
    templateContenidoError()
  }

  return <div>{contentShow}</div>
}

export default ContentProxy
