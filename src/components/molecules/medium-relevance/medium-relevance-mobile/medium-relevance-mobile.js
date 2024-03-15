import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { useCurrentWidth } from 'react-socks'
import { validateCurrentLine } from '../../../../utils/bite-caracter'
import {
  getSettingsResponsive,
  getSettingsResponsiveDarkInvert
} from '../../../../const/dictionary/settingCarruselMobile'
import MediumRelevanceCard from '../medium-relevance-card/medium-relevance-card'

export default function MediumRelevanceMobile({
  data,
  type,
  line,
  accessibility,
  prefix
}) {
  const minimumNumberCard = useCurrentWidth() === 1024 ? 2 : 1
  let refSlider = useRef()
  const [activeSlide2, setactiveSlide2] = useState(0)
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
    ? getSettingsResponsiveDarkInvert({
        id: 'Relevancia media',
        showArrow: data.length > minimumNumberCard && data.length > 2,
        clickAction: clickSlider,
        isDarkInvert: validateCurrentLine(line)
      })
    : getSettingsResponsive({
        id: 'Relevancia media',
        showArrow: data.length > minimumNumberCard && data.length > 2,
        clickAction: clickSlider,
        isDarkInvert: validateCurrentLine(line)
      })
  settingFinal = {
    afterChange: current => setactiveSlide2(current),
    ...settingFinal
  }
  return (
    <div className="medium-relevance-container" id="medium-relevance-container">
      <Slider ref={refSlider} {...settingFinal}>
        {data.map((itemsDataResponsive, index) => {
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
          if (indexContmobile.length <= 6) {
            return (
              <div
                id={'medium-relevance-' + index}
                key={'medium-relevance-' + index}
                className="container-bite-Responsive"
              >
                <MediumRelevanceCard
                  accessibility={accessibility}
                  btn={itemsDataResponsive.textoCallToActionBite}
                  link={itemsDataResponsive.linkCallToActionBite}
                  slug={slugPart}
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
              </div>
            )
          }
          return null
        })}
      </Slider>
    </div>
  )
}
