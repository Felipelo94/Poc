import React, { useState } from 'react'
import Slider from 'react-slick'
import { ReactComponent as ImagenNextIcon } from '../../../../../assets/images/btn-next.svg'
import { ReactComponent as PrevIcon } from '../../../../../assets/images/btn-prev.svg'
import { ReactComponent as NextDarkModeIcon } from '../../../../../assets/images/icons/next-dark-mode.svg'
import { ReactComponent as PrevDarkModeIcon } from '../../../../../assets/images/icons/prev-dark-mode.svg'
import { ReactComponent as NextDarkIcon } from '../../../../../assets/images/next-dark.svg'
import { ReactComponent as NextSliderIcon } from '../../../../../assets/images/next-yellow.svg'
import { ReactComponent as PrevDarkIcon } from '../../../../../assets/images/prev-dark.svg'
import { ReactComponent as PrevYellowIcon } from '../../../../../assets/images/prev-yellow.svg'
import bolsilloNew from '../../../../../assets/images/Sombra carrusel modo light.svg'
import { validateCurrentLine } from '../../../../../utils/bite-caracter'
import {
  getCategoryName,
  getSubCategoryNameWhenIsPensionAndPerson,
  removeAccents,
  sendGaPush
} from '../../../../../utils/classGtmUtil'
import BiteOutstanding from '../../../bite/bite-outstanding/bite-outstanding'

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
  type,
  line,
  isDarkMode
}) => {
  const validationShow = indexSlider + 4 < indexFeatured.length
  setnextCarrusel(validationShow)
  if (validationShow) {
    return type === 2 ? (
      isDarkMode ? (
        <NextDarkModeIcon
          id="btn-next-featured"
          alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos principales"
          title="Ícono de avanzar hacia la izquierda o derecha"
          className={`${className} next-featured-arrow ${
            containerSwitch || btnSwitch
              ? 'btn-featured-realce'
              : 'btn-featured-realce-back'
          } `}
          style={{
            ...style,
            display: 'block',
            width: 48,
            height: 48,
            zIndex: 6,
            top: '43%'
          }}
          onMouseEnter={e => {
            setBtnSwitch(true)
          }}
          onMouseOut={e => {
            setBtnSwitch(false)
          }}
          role="presentation"
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
      ) : (
        <NextSliderIcon
          id="btn-next-featured"
          alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos principales"
          title="Ícono de avanzar hacia la izquierda o derecha"
          className={`${className} next-featured-arrow ${
            containerSwitch || btnSwitch
              ? 'btn-featured-realce'
              : 'btn-featured-realce-back'
          }`}
          style={{
            ...style,
            display: 'block',
            width: 48,
            height: 48,
            zIndex: 6,
            top: '43%'
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
    ) : validateCurrentLine(line) ? (
      <NextDarkIcon
        id="btn-next-featured"
        alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos principales"
        title="Ícono de avanzar hacia la izquierda o derecha"
        className={`${className} next-featured-arrow ${
          containerSwitch || btnSwitch
            ? 'btn-featured-realce'
            : 'btn-featured-realce-back'
        } `}
        style={{
          ...style,
          display: 'block',
          width: 48,
          height: 48,
          zIndex: 6,
          top: '43%'
        }}
        onMouseEnter={e => {
          setBtnSwitch(true)
        }}
        onMouseOut={e => {
          setBtnSwitch(false)
        }}
        role="presentation"
        onClick={onClick}
        onKeyDown={onClick}
      />
    ) : isDarkMode ? (
      <NextDarkModeIcon
        id="btn-next-featured"
        alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos principales"
        title="Ícono de avanzar hacia la izquierda o derecha"
        className={`${className} next-featured-arrow ${
          containerSwitch || btnSwitch
            ? 'btn-featured-realce'
            : 'btn-featured-realce-back'
        } `}
        style={{
          ...style,
          display: 'block',
          width: 48,
          height: 48,
          zIndex: 6,
          top: '43%'
        }}
        onMouseEnter={e => {
          setBtnSwitch(true)
        }}
        onMouseOut={e => {
          setBtnSwitch(false)
        }}
        role="presentation"
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
    ) : (
      <ImagenNextIcon
        id="btn-next-featured"
        alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos principales"
        title="Ícono de avanzar hacia la izquierda o derecha"
        className={`${className} next-featured-arrow ${
          containerSwitch || btnSwitch
            ? 'btn-featured-realce'
            : 'btn-featured-realce-back'
        } `}
        style={{
          ...style,
          display: 'block',
          width: 48,
          height: 48,
          zIndex: 6,
          top: '43%'
        }}
        onMouseEnter={e => {
          setBtnSwitch(true)
        }}
        onMouseOut={e => {
          setBtnSwitch(false)
        }}
        role="presentation"
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
    return type === 2 ? (
      isDarkMode ? (
        <PrevDarkModeIcon
          id="prev-featured"
          alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos principales"
          title="Ícono de avanzar hacia la izquierda o derecha"
          role="presentation"
          className={`${className} prev-featured-arrow ${
            containerSwitch || btnSwitch
              ? 'btn-featured-prev-realce'
              : 'btn-featured-prev-realce-back'
          } `}
          style={{
            ...style,
            display: 'block',
            width: 48,
            height: 48,
            zIndex: 6,
            top: '43%',
            left: '-68px'
          }}
          onMouseEnter={e => {
            setBtnSwitch(true)
          }}
          onMouseOut={e => {
            setBtnSwitch(false)
          }}
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
      ) : (
        <PrevYellowIcon
          id="prev-featured"
          alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos principales"
          title="Ícono de avanzar hacia la izquierda o derecha"
          role="presentation"
          className={`${className} prev-featured-arrow ${
            containerSwitch || btnSwitch
              ? 'btn-featured-prev-realce'
              : 'btn-featured-prev-realce-back'
          }`}
          style={{
            ...style,
            display: 'block',
            width: 48,
            height: 48,
            zIndex: 6,
            top: '43%',
            left: '-68px'
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
    ) : validateCurrentLine(line) ? (
      <PrevDarkIcon
        id="prev-featured"
        alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos principales"
        title="Ícono de avanzar hacia la izquierda o derecha"
        role="presentation"
        className={`${className} prev-featured-arrow ${
          containerSwitch || btnSwitch
            ? 'btn-featured-prev-realce'
            : 'btn-featured-prev-realce-back'
        }`}
        style={{
          ...style,
          display: 'block',
          width: 48,
          height: 48,
          zIndex: 6,
          top: '43%',
          left: '-68px'
        }}
        onMouseEnter={e => {
          setBtnSwitch(true)
        }}
        onMouseOut={e => {
          setBtnSwitch(false)
        }}
        onClick={onClick}
        onKeyDown={onClick}
      />
    ) : isDarkMode ? (
      <PrevDarkModeIcon
        id="prev-featured"
        alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos principales"
        title="Ícono de avanzar hacia la izquierda o derecha"
        role="presentation"
        className={`${className} prev-featured-arrow ${
          containerSwitch || btnSwitch
            ? 'btn-featured-prev-realce'
            : 'btn-featured-prev-realce-back'
        } `}
        style={{
          ...style,
          display: 'block',
          width: 48,
          height: 48,
          zIndex: 6,
          top: '43%',
          left: '-68px'
        }}
        onMouseEnter={e => {
          setBtnSwitch(true)
        }}
        onMouseOut={e => {
          setBtnSwitch(false)
        }}
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
    ) : (
      <PrevIcon
        id="prev-featured"
        alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos principales"
        title="Ícono de avanzar hacia la izquierda o derecha"
        role="presentation"
        className={`${className} prev-featured-arrow ${
          containerSwitch || btnSwitch
            ? 'btn-featured-prev-realce'
            : 'btn-featured-prev-realce-back'
        } `}
        style={{
          ...style,
          display: 'block',
          width: 48,
          height: 48,
          zIndex: 6,
          top: '43%',
          left: '-68px'
        }}
        onMouseEnter={e => {
          setBtnSwitch(true)
        }}
        onMouseOut={e => {
          setBtnSwitch(false)
        }}
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

export default function FeaturedSliderDesktop({
  groups,
  type,
  line,
  isStepCardTourGuideActive,
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
    slidesToShow: 5,
    slidesToScroll: 5,
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
        breakpoint: 1340,
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
      id="contenido-destacado"
      className={`Bannerbite BannerbitePrev${
        validateCurrentLine(line) ? '-dark' : ''
      }${isStepCardTourGuideActive ? ' BannerbitePrev-dark-tg-active' : ''}`}
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
          className={`prev-featured${
            validateCurrentLine(line) ? '-dark' : ''
          } ${
            containerPrevSwitch || btnPrevSwitch
              ? 'prev-featured-realce'
              : 'prev-featured-realce-back'
          }`}
        >
          <img
            className="bolsillo-rotate"
            width="100%"
            height="100%"
            src={bolsilloNew}
            alt="bolsillo-prev"
            style={{ paddingRight: '60px' }}
          />
        </div>
      ) : (
        ''
      )}
      {nextCarrusel ? (
        <div
          id="next-btn"
          className={`next-featured${
            validateCurrentLine(line) ? '-dark' : ''
          } ${
            containerSwitch || btnSwitch
              ? 'div-featured-realce'
              : 'div-featured-realce-back'
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
        {groups.map((items, indexFilrterData) => {
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
              className={`items_destacados `}
            >
              <div id="bite-type-important" style={{ display: 'none' }}>
                {items.relevancia}
              </div>
              <div id="bite-type-bite" style={{ display: 'none' }}>
                {items.tipoBite}
              </div>
              <BiteOutstanding
                accessibility={accessibility}
                imgalt={items.nombreImagen}
                imgTitle={items.imagenpequena ? items.imagenpequena.title : ''}
                line={line}
                dataTut={
                  indexSlider + 1 === indexFilrterData ? 'reactour__card' : null
                }
                slug={slugPart}
                link={items.linkCallToActionBite}
                title={items.tituloCorto ? items.tituloCorto : ''}
                img={
                  items?.imagenpequena
                    ? items.imagenpequena.fluid
                      ? items.imagenpequena?.fluid?.src ?? ''
                      : items.imagenpequena?.file?.url ?? ''
                    : ''
                }
                content={
                  items.textoIntroductorio ? items.textoIntroductorio : ''
                }
                btn={items.textoCallToActionBite}
                date={items.updatedAt}
                gtmClassGtm={''}
                gtmCategory={removeAccents(line ? line.category : '')}
                gtmAction={`Clic${
                  type === 1 ? 'Persona' : 'Empresa'
                }${getSubCategoryNameWhenIsPensionAndPerson(
                  type,
                  removeAccents(line ? line.category : ''),
                  line?.subcategory ?? ''
                )}-ContenidosRelevanciaAlta`}
                type={type}
              />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
