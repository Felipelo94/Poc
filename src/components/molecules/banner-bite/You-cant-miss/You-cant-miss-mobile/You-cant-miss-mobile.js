import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { useCurrentWidth } from 'react-socks'
import {
  getSettingsResponsive,
  getSettingsResponsiveDarkInvert
} from '../../../../../const/dictionary/settingCarruselMobile'
import { validateCurrentLine } from '../../../../../utils/bite-caracter'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  removeAccents
} from '../../../../../utils/classGtmUtil'
import BiteResposive from '../../../bite/bite-resposive/bite-resposive'

export default function YouCantMissMobile({
  data,
  numBite,
  idCarrusel,
  line,
  isStepCard2TourGuideActive,
  type,
  accessibility,
  actionGA
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
  let settingFinal = validateCurrentLine(line)
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
            return indexFilrterData >= numBite - 5 &&
              indexFilrterData <= numBite ? (
              <div
                id={idCarrusel + '-' + indexFilrterData}
                className="container-bite-Responsive"
              >
                <div id="bite-type-customer" style={{ display: 'none' }}>
                  {itemsDataResponsive.type
                    ? itemsDataResponsive.type.map(itemType => {
                        return (
                          <div>{`${itemType.contentful_id}-${itemType.nombre}`}</div>
                        )
                      })
                    : null}
                </div>
                <div id="bite-type-important" style={{ display: 'none' }}>
                  {itemsDataResponsive.relevancia}
                </div>
                <div id="bite-type-bite" style={{ display: 'none' }}>
                  {itemsDataResponsive.tipoBite}
                </div>
                <BiteResposive
                  date={itemsDataResponsive.updatedAt}
                  accessibility={accessibility}
                  dataTut={
                    idCarrusel === 'contendio-complementario'
                      ? activeSlide2 === indexFilrterData
                        ? 'reactour__card2'
                        : null
                      : null
                  }
                  imgalt={itemsDataResponsive.nombreImagen}
                  line={line}
                  title={
                    itemsDataResponsive.tituloCorto
                      ? itemsDataResponsive.tituloCorto
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
                  content={
                    itemsDataResponsive.textoIntroductorio
                      ? itemsDataResponsive.textoIntroductorio
                      : null
                  }
                  btn={itemsDataResponsive.textoCallToActionBite}
                  slug={itemsDataResponsive.urlSeo}
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
            ) : null
          })}
        </Slider>
      </div>
    </div>
  )
}
