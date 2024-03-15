import React, { useState } from 'react'
import Slider from 'react-slick'
import { ReactComponent as NextSliderIcon } from '../../../../assets/images/next-yellow.svg'
import { ReactComponent as PrevYellowIcon } from '../../../../assets/images/prev-yellow.svg'
import bolsilloNew from '../../../../assets/images/Sombra carrusel modo light.svg'
import { getCategoryName, sendGaPush } from '../../../../utils/classGtmUtil'
import MediumRelevanceCard from '../medium-relevance-card/medium-relevance-card'

const SampleNextArrow = ({
  className,
  style,
  onClick,
  indexSlider,
  indexFeatured,
  setBtnSwitch,
  setnextCarrusel,
  containerSwitch,
  btnSwitch,
  line
}) => {
  const validationShow = indexSlider + 3 < indexFeatured.length
  setnextCarrusel(validationShow)
  if (validationShow) {
    return (
      <NextSliderIcon
        id="btn-next-featured"
        alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos principales"
        title="Ícono de avanzar hacia la izquierda o derecha"
        className={`${className} relevance-medium-next-featured-arrow ${
          containerSwitch || btnSwitch
            ? 'relevance-medium-btn-featured-realce'
            : 'relevance-medium-btn-featured-realce-back'
        }`}
        style={{
          ...style,
          display: 'block',
          width: 48,
          height: 48,
          zIndex: 6
        }}
        onMouseEnter={e => {
          setBtnSwitch(true)
        }}
        onMouseOut={e => {
          setBtnSwitch(false)
        }}
        role="presentation"
        onClick={() => {
          if (onClick) {
            onClick()
          }
          sendGaPush(
            getCategoryName(line.category),
            'ClicRotadorRelevanciaAlta',
            'Flechas'
          )
        }}
        onKeyDown={onClick}
      />
    )
  }
  return null
}

const SamplePrevArrow = ({
  className,
  style,
  onClick,
  indexSlider,
  indexFeatured,
  setBtnSwitch,
  setprevCarrusel,
  containerSwitch,
  btnSwitch,
  type,
  line,
  isDarkMode
}) => {
  const validationShow =
    indexSlider <= indexFeatured.length && indexSlider !== 0
  setprevCarrusel(validationShow)
  if (validationShow) {
    return (
      <PrevYellowIcon
        id="prev-featured"
        alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos principales"
        title="Ícono de avanzar hacia la izquierda o derecha"
        role="presentation"
        className={`${className} relevance-medium-prev-featured-arrow ${
          containerSwitch || btnSwitch
            ? 'relevance-medium-btn-featured-prev-realce'
            : 'relevance-medium-btn-featured-prev-realce-back'
        }`}
        style={{
          ...style,
          display: 'block',
          width: 48,
          height: 48,
          zIndex: 6,
          left: '-90px'
        }}
        onMouseEnter={e => {
          setBtnSwitch(true)
        }}
        onMouseOut={e => {
          setBtnSwitch(false)
        }}
        onClick={() => {
          onClick()
          sendGaPush(
            getCategoryName(line.category),
            'ClicRotadorRelevanciaAlta',
            'Flechas'
          )
        }}
        onKeyDown={onClick}
      />
    )
  }
  return null
}

export default function MediumRelevanceDesktop({
  data,
  type,
  line,
  accessibility,
  prefix
}) {
  const [nextCarrusel, setnextCarrusel] = useState(false)
  const [indexSlider, setIndexSlider] = useState(0)
  const [prevCarrusel, setprevCarrusel] = useState(false)
  const [containerPrevSwitch, setContainerPrevSwitch] = useState(false)
  const [btnPrevSwitch, setBtnPrevSwitch] = useState(false)
  const [containerSwitch, setContainerSwitch] = useState(false)
  const [btnSwitch, setBtnSwitch] = useState(false)
  let indexFeatured = []
  let slugPart = ''
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    className: 'slider variable-width',
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1339,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ],
    nextArrow: (
      <SampleNextArrow
        indexSlider={indexSlider}
        indexFeatured={indexFeatured}
        setnextCarrusel={setnextCarrusel}
        setBtnSwitch={setBtnSwitch}
        btnSwitch={btnSwitch}
        containerSwitch={containerSwitch}
        type={type}
        line={line}
        isDarkMode={accessibility.darkMode}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        indexSlider={indexSlider}
        setprevCarrusel={setprevCarrusel}
        setBtnSwitch={setBtnPrevSwitch}
        btnSwitch={btnPrevSwitch}
        containerSwitch={containerPrevSwitch}
        indexFeatured={indexFeatured}
        type={type}
        line={line}
        isDarkMode={accessibility.darkMode}
        onClick={() => {
          sendGaPush(
            getCategoryName(line.category),
            'ClicRotadorRelevanciaAlta',
            'Flechas'
          )
        }}
      />
    ),
    beforeChange: (current, next) => setIndexSlider(next)
  }

  return (
    <div
      id="relevance-medium"
      className={`relevance-medium-desktop relevance-medium-desktop-prev`}
    >
      {prevCarrusel ? (
        <div
          id="prev-btn"
          onMouseEnter={e => {
            setContainerPrevSwitch(true)
          }}
          onMouseOut={e => {
            setContainerPrevSwitch(false)
          }}
          className={`relevance-medium-desktop-prev-featured ${
            containerPrevSwitch || btnPrevSwitch
              ? 'relevance-medium-desktop-prev-featured-realce'
              : 'relevance-medium-desktop-prev-featured-realce-back'
          }`}
        >
          <img
            className="relevance-medium-desktop-bolsillo-rotate"
            width="100%"
            height="100%"
            src={bolsilloNew}
            alt="bolsillo-prev"
            style={{ paddingRight: '10px' }}
          />
        </div>
      ) : (
        ''
      )}
      {nextCarrusel ? (
        <div
          id="next-btn"
          className={`relevance-medium-desktop-next-featured ${
            containerSwitch || btnSwitch
              ? 'relevance-medium-desktop-div-featured-realce'
              : 'relevance-medium-desktop-div-featured-realce-back'
          }`}
          onMouseEnter={e => {
            setContainerSwitch(true)
          }}
          onMouseOut={e => {
            setContainerSwitch(false)
          }}
        >
          <img
            width="160px"
            height="100%"
            src={bolsilloNew}
            alt="bolsillo-next"
            style={{ paddingRight: '132px' }}
          />
        </div>
      ) : (
        ''
      )}

      <Slider {...settings}>
        {data.map((items, indexFilrterData) => {
          indexFeatured.push(indexFilrterData)
          items.urlEspecial
            ? (slugPart = `${prefix}${items.urlSeo}`)
            : (slugPart = `${
                items.tipoDeCliente[0].nombre === 'Afiliado'
                  ? `${prefix}persona/`
                  : `${prefix}empresa/`
              }${
                items.Tema[0].lineaDeProducto[0].tituloAgrupadorContenidos ===
                'Cesantías'
                  ? 'cesantias/'
                  : items.Tema[0].lineaDeProducto[0]
                      .tituloAgrupadorContenidos === 'Ahorro'
                  ? 'ahorro/'
                  : items.Tema[0].lineaDeProducto[0]
                      .tituloAgrupadorContenidos === 'Pensión'
                  ? 'pension/'
                  : items.Tema[0].lineaDeProducto[0]
                      .tituloAgrupadorContenidos === 'Inversión'
                  ? 'inversion/'
                  : ''
              }${items.urlSeo}`)
          return (
            <div
              id={'contenido-destacado-' + indexFilrterData}
              key={indexFilrterData}
              className={`relevance-medium-desktop-content`}
            >
              <MediumRelevanceCard
                accessibility={accessibility}
                btn={items.textoCallToActionBite}
                link={items.linkCallToActionBite}
                slug={slugPart}
                title={items.tituloCorto ? items.tituloCorto : null}
                imgalt={items.nombreImagen}
                content={
                  items.textoIntroductorio ? items.textoIntroductorio : null
                }
                img={
                  items?.imagenpequena
                    ? items.imagenpequena.fluid
                      ? items.imagenpequena?.fluid?.src ?? ''
                      : items.imagenpequena?.file?.url ?? ''
                    : ''
                }
                imgTitle={items.imagenpequena ? items.imagenpequena.title : ''}
                type={type}
                line={line}
                date={items.updatedAt}
              />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
