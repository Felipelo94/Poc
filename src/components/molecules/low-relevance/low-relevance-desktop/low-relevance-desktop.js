import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import bolsilloDark from '../../../../assets/images/bolsillo-dark-mode.png'
import bolsillo from '../../../../assets/images/bolsillo.png'
import { ReactComponent as ImagenNextIcon } from '../../../../assets/images/btn-next.svg'
import { ReactComponent as PrevIcon } from '../../../../assets/images/btn-prev.svg'
import { ReactComponent as NextDarkModeInvIcon } from '../../../../assets/images/icons/next-dark-mode-inversion.svg'
import { ReactComponent as PrevDarkModeInvIcon } from '../../../../assets/images/icons/prev-dark-mode-inversion.svg'
import { ReactComponent as NextDarkIcon } from '../../../../assets/images/next-dark2.svg'
import { ReactComponent as NextSliderIcon } from '../../../../assets/images/next-yellow.svg'
import { ReactComponent as PrevDarkIcon } from '../../../../assets/images/prev-dark2.svg'
import { ReactComponent as PrevYellowIcon } from '../../../../assets/images/prev-yellow.svg'
import { validateCurrentLine } from '../../../../utils/bite-caracter'
import {
  getCategoryName,
  getSubCategoryNameWhenIsPensionAndPerson,
  removeAccents,
  sendGaPush
} from '../../../../utils/classGtmUtil'
import { getSizeScreenClass } from '../../../../utils/handleResize'
import BiteDesktop from '../../../molecules/bite/bite-desktop/bite-desktop'

const SampleNextArrow = ({
  className,
  style,
  onClick,
  setBtnSwitch,
  nextCarrusel,
  containerSwitch,
  btnSwitch,
  data,
  type,
  line,
  idCarrusel,
  isDarkMode
}) => {
  if (nextCarrusel) {
    return type === 2 ? (
      isDarkMode ? (
        <NextSliderIcon
          id="next"
          alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos del sitio según el perfilamiento"
          title="Ícono de avanzar hacia la izquierda o derecha"
          onClick={() => {
            if (onClick) {
              onClick()
            }
            sendGaPush(
              getCategoryName(line.category),
              `ClicRotadorRelevancia${
                idCarrusel === 'contendio-relevante' ? 'Media' : 'Baja'
              }`,
              'Flechas'
            )
          }}
          style={{
            ...style,
            display: 'block',
            width: 48,
            height: 48,
            zIndex: 6
          }}
          onMouseOut={e => {
            setBtnSwitch(false)
          }}
          className={`${className} next-arrow ${
            containerSwitch || btnSwitch ? 'btn-realce' : 'btn-realce-back'
          } `}
          onMouseEnter={e => {
            setBtnSwitch(true)
          }}
          role="presentation"
          onKeyDown={onClick}
        />
      ) : (
        <ImagenNextIcon
          id="next"
          style={{
            ...style,
            width: 48,
            display: 'block',
            zIndex: 6,
            height: 48
          }}
          alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos del sitio según el perfilamiento"
          title="Ícono de avanzar hacia la izquierda o derecha"
          onMouseEnter={e => {
            setBtnSwitch(true)
          }}
          className={`${className} next-arrow ${
            containerSwitch || btnSwitch ? 'btn-realce' : 'btn-realce-back'
          } `}
          onMouseOut={e => {
            setBtnSwitch(false)
          }}
          onClick={() => {
            if (onClick) {
              onClick()
            }
            sendGaPush(
              getCategoryName(line.category),
              `ClicRotadorRelevancia${
                idCarrusel === 'contendio-relevante' ? 'Media' : 'Baja'
              }`,
              'Flechas'
            )
          }}
          role="presentation"
          onKeyDown={onClick}
        />
      )
    ) : validateCurrentLine(!line) ? (
      isDarkMode ? (
        <NextDarkModeInvIcon
          id="next"
          alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos del sitio según el perfilamiento"
          title="Ícono de avanzar hacia la izquierda o derecha"
          onClick={() => {
            if (onClick) {
              onClick()
            }
            sendGaPush(
              getCategoryName(line.category),
              `ClicRotadorRelevancia${
                idCarrusel === 'contendio-relevante' ? 'Media' : 'Baja'
              }`,
              'Flechas'
            )
          }}
          style={{
            ...style,
            display: 'block',
            width: 48,
            height: 48,
            zIndex: 6
          }}
          onMouseOut={e => {
            setBtnSwitch(false)
          }}
          className={`${className} next-arrow ${
            containerSwitch || btnSwitch ? 'btn-realce' : 'btn-realce-back'
          } `}
          onMouseEnter={e => {
            setBtnSwitch(true)
          }}
          role="presentation"
          onKeyDown={onClick}
        />
      ) : (
        <NextDarkIcon
          id="next"
          alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos del sitio según el perfilamiento"
          title="Ícono de avanzar hacia la izquierda o derecha"
          onClick={() => {
            if (onClick) {
              onClick()
            }
            sendGaPush(
              getCategoryName(line.category),
              `ClicRotadorRelevancia${
                idCarrusel === 'contendio-relevante' ? 'Media' : 'Baja'
              }`,
              'Flechas'
            )
          }}
          style={{
            ...style,
            display: 'block',
            width: 48,
            height: 48,
            zIndex: 6
          }}
          onMouseOut={e => {
            setBtnSwitch(false)
          }}
          className={`${className} next-arrow ${
            containerSwitch || btnSwitch ? 'btn-realce' : 'btn-realce-back'
          } `}
          onMouseEnter={e => {
            setBtnSwitch(true)
          }}
          role="presentation"
          onKeyDown={onClick}
        />
      )
    ) : (
      <NextSliderIcon
        id="next"
        alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos del sitio según el perfilamiento"
        title="Ícono de avanzar hacia la izquierda o derecha"
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
        className={`${className} next-arrow ${
          containerSwitch || btnSwitch ? 'btn-realce' : 'btn-realce-back'
        }`}
        onClick={() => {
          if (onClick) {
            onClick()
          }
          sendGaPush(
            getCategoryName(line.category),
            `ClicRotadorRelevancia${
              idCarrusel === 'contendio-relevante' ? 'Media' : 'Baja'
            }`,
            'Flechas'
          )
        }}
        role="presentation"
        onKeyDown={onClick}
      />
    )
  }
  return null
}

const SamplePrevArrow = props => {
  const {
    className,
    style,
    onClick,
    prevCarrusel,
    containerSwitch,
    btnSwitch,
    type,
    line,
    idCarrusel,
    isDarkMode
  } = props

  if (prevCarrusel) {
    return type === 2 ? (
      isDarkMode ? (
        <PrevYellowIcon
          id="prev"
          alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos del sitio según el perfilamiento"
          title="Ícono de avanzar hacia la izquierda o derecha"
          className={`${className} prev-arrow ${
            containerSwitch || btnSwitch
              ? 'btn-prev-realce'
              : 'btn-prev-realce-back'
          }`}
          style={{
            ...style,
            display: 'block',
            width: 48,
            height: 48,
            zIndex: 6
          }}
          onMouseEnter={e => {
            props.setBtnSwitch(true)
          }}
          onMouseOut={e => {
            props.setBtnSwitch(false)
          }}
          role="presentation"
          onKeyDown={onClick}
          onClick={() => {
            onClick()
            sendGaPush(
              getCategoryName(line.category),
              `ClicRotadorRelevancia${
                idCarrusel === 'contendio-relevante' ? 'Media' : 'Baja'
              }`,
              'Flechas'
            )
          }}
        />
      ) : (
        <PrevIcon
          id="prev"
          alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos del sitio según el perfilamiento"
          title="Ícono de avanzar hacia la izquierda o derecha"
          className={`${className} prev-arrow ${
            containerSwitch || btnSwitch
              ? 'btn-prev-realce'
              : 'btn-prev-realce-back'
          }`}
          style={{
            ...style,
            display: 'block',
            width: 48,
            height: 48,
            zIndex: 6
          }}
          onMouseEnter={e => {
            props.setBtnSwitch(true)
          }}
          onMouseOut={e => {
            props.setBtnSwitch(false)
          }}
          role="presentation"
          onKeyDown={onClick}
          onClick={() => {
            onClick()
            sendGaPush(
              getCategoryName(line.category),
              `ClicRotadorRelevancia${
                idCarrusel === 'contendio-relevante' ? 'Media' : 'Baja'
              }`,
              'Flechas'
            )
          }}
        />
      )
    ) : validateCurrentLine(!line) ? (
      isDarkMode ? (
        <PrevDarkModeInvIcon
          id="prev"
          alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos del sitio según el perfilamiento"
          title="Ícono de avanzar hacia la izquierda o derecha"
          className={`${className} prev-arrow ${
            containerSwitch || btnSwitch
              ? 'btn-prev-realce'
              : 'btn-prev-realce-back'
          }`}
          style={{
            ...style,
            display: 'block',
            width: 48,
            height: 48,
            zIndex: 6
          }}
          onMouseEnter={e => {
            props.setBtnSwitch(true)
          }}
          onMouseOut={e => {
            props.setBtnSwitch(false)
          }}
          role="presentation"
          onKeyDown={onClick}
          onClick={() => {
            onClick()
            sendGaPush(
              getCategoryName(line.category),
              `ClicRotadorRelevancia${
                idCarrusel === 'contendio-relevante' ? 'Media' : 'Baja'
              }`,
              'Flechas'
            )
          }}
        />
      ) : (
        <PrevDarkIcon
          id="prev"
          alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos del sitio según el perfilamiento"
          title="Ícono de avanzar hacia la izquierda o derecha"
          className={`${className} prev-arrow ${
            containerSwitch || btnSwitch
              ? 'btn-prev-realce'
              : 'btn-prev-realce-back'
          }`}
          style={{
            ...style,
            display: 'block',
            width: 48,
            height: 48,
            zIndex: 6
          }}
          onMouseEnter={e => {
            props.setBtnSwitch(true)
          }}
          onMouseOut={e => {
            props.setBtnSwitch(false)
          }}
          role="presentation"
          onKeyDown={onClick}
          onClick={() => {
            onClick()
            sendGaPush(
              getCategoryName(line.category),
              `ClicRotadorRelevancia${
                idCarrusel === 'contendio-relevante' ? 'Media' : 'Baja'
              }`,
              'Flechas'
            )
          }}
        />
      )
    ) : (
      <PrevYellowIcon
        id="prev"
        alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos del sitio según el perfilamiento"
        title="Ícono de avanzar hacia la izquierda o derecha"
        className={`${className} prev-arrow ${
          containerSwitch || btnSwitch
            ? 'btn-prev-realce'
            : 'btn-prev-realce-back'
        } `}
        style={{
          ...style,
          display: 'block',
          width: 48,
          height: 48,
          zIndex: 6
        }}
        onMouseEnter={e => {
          props.setBtnSwitch(true)
        }}
        onMouseOut={e => {
          props.setBtnSwitch(false)
        }}
        role="presentation"
        onKeyDown={onClick}
        onClick={() => {
          if (onClick) {
            onClick()
          }
          sendGaPush(
            getCategoryName(line.category),
            `ClicRotadorRelevancia${
              idCarrusel === 'contendio-relevante' ? 'Media' : 'Baja'
            }`,
            'Flechas'
          )
        }}
      />
    )
  }
  return null
}

export default function LowRelevanceDesktop({
  index,
  data,
  numBite,
  idCarrusel,
  type,
  line,
  isStepCard2TourGuideActive,
  styleSliderCard,
  accessibility,
  viewTarjet,
  actionGA,
  prefix
}) {
  const [indexSlider, setIndexSlider] = useState(0)
  const [indexBitestate, setIndexBitestate] = useState(index)
  const [nextCarrusel, setnextCarrusel] = useState(false)
  const [prevCarrusel, setprevCarrusel] = useState(false)
  const [containerSwitch, setContainerSwitch] = useState(false)
  const [btnSwitch, setBtnSwitch] = useState(false)
  const [containerPrevSwitch, setContainerPrevSwitch] = useState(false)
  const [btnPrevSwitch, setBtnPrevSwitch] = useState(false)
  let indexFeatured = []

  let slugPart = ''

  const ref = useRef(null)
  const sliderRef = useRef(null)
  const width = getSizeScreenClass()

  useEffect(() => {
    setprevCarrusel(indexSlider <= indexFeatured.length && indexSlider !== 0)
  }, [indexSlider, indexBitestate])

  useEffect(() => {
    setnextCarrusel(indexSlider + 2 < indexFeatured.length)
  }, [indexSlider, indexBitestate])

  const next = () => {
    ref.current.slickNext()
  }

  const previous = () => {
    ref.current.slickPrev()
  }

  useEffect(() => {
    setnextCarrusel(data.length > 2)
    setIndexBitestate(index)
  }, [index])

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: viewTarjet ? viewTarjet : 3,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    arrows: false,
    beforeChange: (current, nextItem) => setIndexSlider(nextItem),
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1075,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  return (
    <div className="slider-carrusel-container" ref={sliderRef}>
      <div className="sliderCarrusel">
        {prevCarrusel ? (
          <div
            id="prev-btn"
            onMouseEnter={e => {
              setContainerPrevSwitch(true)
            }}
            onMouseOut={e => {
              setContainerPrevSwitch(false)
            }}
            className={`prev ${
              containerPrevSwitch || btnPrevSwitch
                ? 'prev-realce'
                : 'prev-realce-back'
            }`}
          >
            <img
              className="bolsillo-rotate"
              height="100%"
              src={
                accessibility
                  ? accessibility.darkMode
                    ? bolsilloDark
                    : bolsillo
                  : bolsillo
              }
              alt="bolsillo-prev"
            />
            <SamplePrevArrow
              setprevCarrusel={setprevCarrusel}
              indexSlider={indexSlider}
              idCarrusel={idCarrusel}
              indexBitestate={indexBitestate}
              prevCarrusel={prevCarrusel}
              setBtnSwitch={setBtnPrevSwitch}
              btnSwitch={btnPrevSwitch}
              containerSwitch={containerPrevSwitch}
              type={type}
              line={line}
              isDarkMode={accessibility.darkMode}
              onClick={previous}
              style={{
                position: 'absolute',
                margin: '30px',
                cursor: 'pointer'
              }}
            />
          </div>
        ) : (
          ''
        )}
        {nextCarrusel ? (
          <div
            id="next-btn"
            className={`next ${
              containerSwitch || btnSwitch ? 'div-realce' : 'div-realce-back'
            }`}
            onMouseEnter={e => {
              setContainerSwitch(true)
            }}
            onMouseOut={e => {
              setContainerSwitch(false)
            }}
          >
            <img
              width="250px"
              height="100%"
              src={
                accessibility
                  ? accessibility.darkMode
                    ? bolsilloDark
                    : bolsillo
                  : bolsillo
              }
              alt="bolsillo-next"
              style={{
                position: 'absolute'
              }}
            />

            <SampleNextArrow
              setnextCarrusel={setnextCarrusel}
              idCarrusel={idCarrusel}
              indexSlider={indexSlider}
              indexBitestate={indexBitestate}
              nextCarrusel={nextCarrusel}
              setBtnSwitch={setBtnSwitch}
              btnSwitch={btnSwitch}
              containerSwitch={containerSwitch}
              data={data}
              type={type}
              line={line}
              isDarkMode={accessibility.darkMode}
              onClick={next}
              style={{
                position: 'absolute',
                margin: '30px',
                cursor: 'pointer'
              }}
            />
          </div>
        ) : (
          ''
        )}
        {isStepCard2TourGuideActive ? (
          <div
            style={{
              left: 54,
              top: 391,
              width: '100%',
              maxWidth: '551px',
              height: 270
            }}
            className="backgroud-tour-guide"
          />
        ) : null}
        <div id={idCarrusel} className="Bannerbite_perder">
          <Slider ref={ref} {...settings}>
            {data.map((items, indexFilrterData) => {
              indexFeatured.push(indexFilrterData)
              items.contenido?.urlEspecial
                ? (slugPart = `${prefix}${items.contenido?.urlSeo}`)
                : (slugPart = `${
                    items.contenido?.tipoDeCliente[0].nombre === 'Afiliado'
                      ? `${prefix}persona/`
                      : `${prefix}empresa/`
                  }${
                    items.contenido?.Tema[0].lineaDeProducto[0]
                      .tituloAgrupadorContenidos === 'Cesantías'
                      ? 'cesantias/'
                      : items.contenido?.Tema[0].lineaDeProducto[0]
                          .tituloAgrupadorContenidos === 'Ahorro'
                      ? 'ahorro/'
                      : items.contenido?.Tema[0].lineaDeProducto[0]
                          .tituloAgrupadorContenidos === 'Pensión'
                      ? 'pension/'
                      : items.contenido?.Tema[0].lineaDeProducto[0]
                          .tituloAgrupadorContenidos === 'Inversión'
                      ? 'inversion/'
                      : ''
                  }${items.contenido?.urlSeo}`)
              return (
                <div
                  key={indexFilrterData}
                  data-tut={
                    idCarrusel === 'contendio-complementario'
                      ? indexSlider === indexFilrterData
                        ? 'reactour__card2'
                        : null
                      : null
                  }
                  className="container-bite-carrusel"
                >
                  <div
                    id={idCarrusel + '-' + indexFilrterData}
                    className="items_perder"
                    style={
                      styleSliderCard
                        ? styleSliderCard
                        : {
                            marginRight: 0,
                            marginLeft: 141
                          }
                    }
                  >
                    <div id="bite-type-customer" style={{ display: 'none' }}>
                      {items.type
                        ? items.type.map(itemType => {
                            return (
                              <div>{`${itemType.node.contentful_id}-${itemType.node.nombre}`}</div>
                            )
                          })
                        : null}
                    </div>
                    <div id="bite-type-important" style={{ display: 'none' }}>
                      {items.contenido?.relevancia}
                    </div>
                    <div id="bite-type-bite" style={{ display: 'none' }}>
                      {items.contenido?.tipoBite}
                    </div>
                    <BiteDesktop
                      accessibility={accessibility}
                      imgalt={items.contenido?.imagenpequena}
                      imgTitle={
                        items.contenido?.imagenpequena?.title
                          ? items.contenido.imagenpequena.title
                          : ''
                      }
                      link={items.contenido?.linkCallToActionBite}
                      slug={slugPart}
                      title={
                        items.contenido?.tituloCorto
                          ? items.contenido?.tituloCorto
                          : ''
                      }
                      img={
                        items?.contenido?.imagenpequena
                          ? items.contenido?.imagenpequena.fluid
                            ? items.contenido?.imagenpequena?.fluid?.src ?? ''
                            : items.contenido?.imagenpequena?.file?.url ?? ''
                          : ''
                      }
                      content={
                        items.contenido?.textoIntroductorio
                          ? items.contenido?.textoIntroductorio
                          : ''
                      }
                      line={line}
                      btn={items.contenido?.textoCallToActionBite}
                      type={items.contenido?.tipoBite}
                      date={items.contenido?.updatedAt}
                      gtmClass=""
                      gtmCategory={removeAccents(line ? line.category : '')}
                      gtmAction={
                        actionGA ||
                        `Clic${
                          type === 1 ? 'Persona' : 'Empresa'
                        }${getSubCategoryNameWhenIsPensionAndPerson(
                          type,
                          removeAccents(line ? line.category : ''),
                          line?.subcategory ?? ''
                        )}-ContenidosRelevancia${
                          idCarrusel === 'contendio-complementario'
                            ? 'Baja'
                            : 'Media'
                        }`
                      }
                    />
                  </div>
                </div>
              )
            })}
          </Slider>
          {accessibility.lineSize > 6 || accessibility.fontSize > 2 ? (
            <>
              <br />
              <br />
              <br />
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
