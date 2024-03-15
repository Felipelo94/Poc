import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { useCurrentWidth } from 'react-socks'
import {
  getSettingsResponsive,
  getSettingsResponsiveDark
} from '../../../../../const/dictionary/settingCarruselMobile'
import { validateCurrentLine } from '../../../../../utils/bite-caracter'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  removeAccents
} from '../../../../../utils/classGtmUtil'
import BiteOutstanding from '../../../bite/bite-outstanding/bite-outstanding'

export default function FeaturedSliderMobile({
  data,
  type,
  line,
  accessibility,
  prefix
}) {
  let dataResposiveMobile
  const minimumNumberCard = useCurrentWidth() === 1024 ? 2 : 1
  const [activeSlide2, setactiveSlide2] = useState(0)
  let refSlider = useRef()
  dataResposiveMobile = data
  let indexContmobile = []
  let slugPart = ''
  const clickSlider = tipo => {
    if (tipo === 1) {
      refSlider.current.slickPrev()
    } else {
      refSlider.current.slickNext()
    }
  }
  let settingFinal = validateCurrentLine(line)
    ? getSettingsResponsiveDark({
        id: 'destacado',
        showArrow:
          dataResposiveMobile.length > minimumNumberCard &&
          dataResposiveMobile.length > 2,
        clickAction: clickSlider,
        isDark: validateCurrentLine(line),
        isUseContainerDotsInvert: true,
        classContainerDots: 'carousel-container-section-dots-inversion-featured'
      })
    : getSettingsResponsive({
        id: 'destacado',
        showArrow:
          dataResposiveMobile.length > minimumNumberCard &&
          dataResposiveMobile.length > 2,
        classContainerDots: 'carousel-container-section-dots-featured',
        clickAction: clickSlider
      })
  settingFinal = {
    afterChange: current => setactiveSlide2(current),
    ...settingFinal
  }
  return (
    <div
      className={`fatured-mobile-container${
        validateCurrentLine(line) ? '-dark' : ''
      }`}
      id="fatured-mobile-container"
    >
      <Slider ref={refSlider} {...settingFinal}>
        {dataResposiveMobile.map((itemsDataResponsive, index) => {
          indexContmobile.push(index)
          itemsDataResponsive.urlEspecial
            ? (slugPart = `${prefix}${itemsDataResponsive.urlSeo}`)
            : (slugPart = `${
                itemsDataResponsive.tipoDeCliente[0].nombre === 'Afiliado'
                  ? `${prefix}persona/`
                  : `${prefix}empresa/`
              }${
                itemsDataResponsive.Tema[0].lineaDeProducto[0]
                  .tituloAgrupadorContenidos === 'Cesantías'
                  ? 'cesantias/'
                  : itemsDataResponsive.Tema[0].lineaDeProducto[0]
                      .tituloAgrupadorContenidos === 'Ahorro'
                  ? 'ahorro/'
                  : itemsDataResponsive.Tema[0].lineaDeProducto[0]
                      .tituloAgrupadorContenidos === 'Pensión'
                  ? 'pension/'
                  : itemsDataResponsive.Tema[0].lineaDeProducto[0]
                      .tituloAgrupadorContenidos === 'Inversión'
                  ? 'inversion/'
                  : ''
              }${itemsDataResponsive.urlSeo}`)
          if (indexContmobile.length <= 8) {
            return (
              <div
                id={'contenido-destacado-' + index}
                key={'contenido-destacado-' + index}
                className="container-bite-Responsive-featured"
              >
                <div id="bite-type-important" style={{ display: 'none' }}>
                  {itemsDataResponsive.relevancia}
                </div>
                <div id="bite-type-bite" style={{ display: 'none' }}>
                  {itemsDataResponsive.tipoBite}
                </div>
                <BiteOutstanding
                  accessibility={accessibility}
                  btn={itemsDataResponsive.textoCallToActionBite}
                  slug={slugPart}
                  link={itemsDataResponsive.linkCallToActionBite}
                  dataTut={index === activeSlide2 ? 'reactour__card' : null}
                  title={
                    itemsDataResponsive.tituloCorto
                      ? itemsDataResponsive.tituloCorto
                      : null
                  }
                  imgalt={itemsDataResponsive.nombreImagen}
                  content={
                    itemsDataResponsive.textoIntroductorio
                      ? itemsDataResponsive.textoIntroductorio
                      : null
                  }
                  classGtm={''}
                  gtmCategory={removeAccents(line ? line.category : '')}
                  gtmAction={`Clic${
                    type === 1 ? 'Persona' : 'Empresa'
                  }${getSubCategoryNameWhenIsPensionAndPerson(
                    type,
                    removeAccents(line ? line.category : ''),
                    line?.subcategory ?? ''
                  )}-ContenidosRelevanciaAlta`}
                  img={
                    itemsDataResponsive?.imagenpequena
                      ? itemsDataResponsive.imagenpequena.fluid
                        ? itemsDataResponsive.imagenpequena?.fluid?.src ?? ''
                        : itemsDataResponsive.imagenpequena?.file?.url ?? ''
                      : ''
                  }
                  imgTitle={
                    itemsDataResponsive.imagenpequena
                      ? itemsDataResponsive.imagenpequena.title
                      : ''
                  }
                  type={type}
                  line={line}
                  date={itemsDataResponsive.updatedAt}
                />
                <div id="bite-type-important" style={{ display: 'none' }}>
                  {itemsDataResponsive.relevancia}
                </div>
              </div>
            )
          }
          return null
        })}
      </Slider>
    </div>
  )
}
