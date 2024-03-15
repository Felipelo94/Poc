import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { useCurrentWidth } from 'react-socks'
import {
  getSettingsResponsive,
  getSettingsResponsiveDarkInvert
} from '../../../../const/dictionary/settingCarruselMobile'
import { validateCurrentLine } from '../../../../utils/bite-caracter'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  removeAccents
} from '../../../../utils/classGtmUtil'
import BiteResposive from '../../../molecules/bite/bite-resposive/bite-resposive'

export default function LowRelevanceMobile({
  data,
  numBite,
  idCarrusel,
  line,
  isStepCard2TourGuideActive,
  type,
  accessibility,
  actionGA,
  prefix
}) {
  const minimumNumberCard = useCurrentWidth() === 769 ? 2 : 1
  let refSlider = useRef()
  const [activeSlide2, setactiveSlide2] = useState(0)
  const clickSlider = tipo => {
    if (tipo === 1) {
      refSlider.current.slickPrev()
    } else {
      refSlider.current.slickNext()
    }
  }

  let slugPart = ''

  let settingFinal = validateCurrentLine(!line)
    ? getSettingsResponsiveDarkInvert({
        showArrow: data.length > minimumNumberCard && data.length > 2,
        isDarkInvert: validateCurrentLine(line),
        id: idCarrusel,
        clickAction: clickSlider
      })
    : getSettingsResponsive({
        showArrow: data.length > minimumNumberCard && data.length > 2,
        isDarkInvert: validateCurrentLine(line),
        id: idCarrusel,
        clickAction: clickSlider
      })
  settingFinal = {
    afterChange: current => setactiveSlide2(current),
    ...settingFinal
  }
  return (
    <div className="d-flex flex-column" id={idCarrusel} style={{ height: 461 }}>
      <div
        className="You-cant-miss-mobile-container"
        id="You-cant-miss-mobile-container"
      >
        <Slider ref={refSlider} {...settingFinal}>
          {data.map((itemsDataResponsive, indexFilrterData) => {
            itemsDataResponsive.contenido.urlEspecial
              ? (slugPart = `${prefix}${itemsDataResponsive.contenido?.urlSeo}`)
              : (slugPart = `${
                  itemsDataResponsive.contenido?.tipoDeCliente[0].nombre ===
                  'Afiliado'
                    ? `${prefix}persona/`
                    : `${prefix}empresa/`
                }${
                  itemsDataResponsive.contenido?.Tema[0].lineaDeProducto[0]
                    .tituloAgrupadorContenidos === 'Cesantías'
                    ? 'cesantias/'
                    : itemsDataResponsive.contenido?.Tema[0].lineaDeProducto[0]
                        .tituloAgrupadorContenidos === 'Ahorro'
                    ? 'ahorro/'
                    : itemsDataResponsive.contenido?.Tema[0].lineaDeProducto[0]
                        .tituloAgrupadorContenidos === 'Pensión'
                    ? 'pension/'
                    : itemsDataResponsive.contenido?.Tema[0].lineaDeProducto[0]
                        .tituloAgrupadorContenidos === 'Inversión'
                    ? 'inversion/'
                    : ''
                }${itemsDataResponsive.contenido?.urlSeo}`)
            return (
              <div
                id={idCarrusel + '-' + indexFilrterData}
                className="container-bite-Responsive"
                key={idCarrusel + '-' + indexFilrterData}
              >
                <div id="bite-type-customer" style={{ display: 'none' }}>
                  {itemsDataResponsive.type
                    ? itemsDataResponsive.type.map(itemType => {
                        return (
                          <div
                            key={itemType.contentful_id}
                          >{`${itemType.contentful_id}-${itemType.nombre}`}</div>
                        )
                      })
                    : null}
                </div>
                <div id="bite-type-important" style={{ display: 'none' }}>
                  {itemsDataResponsive.contenido?.relevancia}
                </div>
                <div id="bite-type-bite" style={{ display: 'none' }}>
                  {itemsDataResponsive.contenido?.tipoBite}
                </div>
                <BiteResposive
                  date={itemsDataResponsive.contenido?.updatedAt}
                  accessibility={accessibility}
                  dataTut={
                    idCarrusel === 'contendio-complementario'
                      ? activeSlide2 === indexFilrterData
                        ? 'reactour__card2'
                        : null
                      : null
                  }
                  imgalt={itemsDataResponsive.contenido?.imagenpequena}
                  line={line}
                  title={
                    itemsDataResponsive.contenido?.tituloCorto
                      ? itemsDataResponsive.contenido?.tituloCorto
                      : null
                  }
                  img={
                    itemsDataResponsive?.contenido?.imagenpequena
                      ? itemsDataResponsive.contenido?.imagenpequena.fluid
                        ? itemsDataResponsive.contenido?.imagenpequena?.fluid
                            ?.src ?? ''
                        : itemsDataResponsive.contenido?.imagenpequena?.file
                            ?.url ?? ''
                      : ''
                  }
                  imgTitle={
                    itemsDataResponsive.contenido?.imagenpequena
                      ? itemsDataResponsive.contenido?.imagenpequena?.title
                      : ''
                  }
                  content={
                    itemsDataResponsive.contenido?.textoIntroductorio
                      ? itemsDataResponsive.contenido?.textoIntroductorio
                      : null
                  }
                  btn={itemsDataResponsive.contenido?.textoCallToActionBite}
                  link={itemsDataResponsive.contenido?.linkCallToActionBite}
                  slug={slugPart}
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
                  classGtm={''}
                />
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}
