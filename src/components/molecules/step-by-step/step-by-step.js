import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import RichText from '../../../utils/rich-text/rich-text'
import './step-by-step.scss'
import {
  imagenes,
  getImagesContainer
} from '../../../const/dictionary/step-by-step.js'
import CallToAction from '../call-to-action/call-to-action'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  getTypeName,
  removeAccents,
  upperFirst
} from '../../../utils/classGtmUtil'
import { sendGaPush, sendEventGA } from '../../../utils/classGtmUtil'
import backgroud from '../../../assets/images/hover-icons.png'
import AllyList from '../ally-list/allyList'
import imageTalentoSiHay from '../../../assets/images/talentosihay.png'
import ContentProxyTalent from '../content-proxy-talent/content-proxy-talent'
import { shuffle } from '../../../utils/shuffle'
import { ReactSVG } from 'react-svg'
import { clickWithScrollCenter } from '../../../utils/commons-event-content'
import useGetUserInfoIndexDBState from './../../../hooks/useGetUserInfoIndexDBState'

export default function StepByStep2({
  data,
  line,
  notData,
  user,
  type,
  lineGtm,
  accessibility,
  imageStepbyStepJpg,
  imageStepbyStepSvg,
  THS,
  gtmClassSteps,
  selectedTabIndex
}) {
  const userInfo = useGetUserInfoIndexDBState()
  const [arrows, setArrows] = useState([])
  const [indexTitle, setindexTitle] = useState(0)
  const [indexActive, setindexActive] = useState(false)
  const allTitle = []
  const allyList = []
  let allyListAll = []
  const allyListContent = []
  const actionGtm = upperFirst(removeAccents(data.title))
  const dataMeal = data
  const imagesContent = getImagesContainer(line)

  const createDataStepByStep = (content, nodeType, datanew, indexTab) => {
    if (nodeType.indexOf('heading') >= 0) {
      content.map(value => {
        if (
          value.value &&
          value.value.trim().length > 0 &&
          value.value !== 'Enlaces de interés:'
        ) {
          allTitle.push({ titulo: value.value })
        }
        return null
      })
    } else if (nodeType.indexOf('embedded-entry-block') >= 0) {
      if (datanew.target.sys.contentType) {
        if (
          datanew.target.sys.contentType.sys.id === 'aliados' ||
          datanew.target.sys.contentType.sys.id === 'PrivilegiosProteccion'
        ) {
          allyList.push({
            titulo: datanew.target ? datanew.target.fields.titulo['en-US'] : '',
            descripcion: datanew.target
              ? datanew.target.fields.descripcion['en-US']
              : '',
            textoCallToAction: datanew.target
              ? datanew.target.fields.textoCallToAction['en-US']
              : '',
            linkCallToAction: datanew.target
              ? datanew.target.fields.linkCallToAction['en-US']
              : '',
            imageUrl: datanew.target
              ? datanew.target.fields.imagen['en-US'][0].fields
                ? datanew.target.fields.imagen['en-US'][0].fields.file['en-US']
                    .url
                : imageTalentoSiHay
              : imageTalentoSiHay,
            imageName:
              datanew.target.fields.imagen['en-US'][0].fields?.file['en-US']
                .fileName,
            imageTittle:
              datanew.target.fields.imagen['en-US'][0].fields?.title['en-US'],
            updatedAt: datanew.target.sys.updatedAt,
            indexTab: indexTab,
            gtmClass: datanew.target ? datanew.target.gtmTSHStepperAllies : ''
          })
        } else if (datanew.target.sys.contentType.sys.id === 'contenido') {
          allyListContent.push({
            contenido: datanew.target.fields,
            indexTab: indexTab,
            gtmClass: datanew.target ? datanew.target.gtmTSHStepperAllies : ''
          })
        }
      }
    }
  }

  if (dataMeal) {
    if (dataMeal.parrafos) {
      dataMeal.parrafos.map((paragraph, index) =>
        paragraph.content.map(({ content, nodeType, data }) => {
          createDataStepByStep(content, nodeType, data, index)
        })
      )
    }
  }

  allyList.sort(function(a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt)
  })

  const separacionAllyList = () => {
    if ((dataMeal && !indexActive) || arrows <= 0) {
      if (dataMeal.parrafos) {
        for (var i = 0; i < dataMeal.parrafos.length; i++) {
          let filterBeneficio = allyList.filter(items => {
            return items.indexTab === i
          })
          if (filterBeneficio) {
            if (filterBeneficio.length > 0) {
              allyListAll.push(filterBeneficio)
              setArrows(allyListAll)
            }
          }
        }
      }
    }
    setindexActive(true)
  }

  const setindexsTitle = (x, titulo) => {
    let gtmAction
    if (userInfo.type && userInfo.category && userInfo.subcategory) {
      gtmAction = `Clic${getTypeName(
        userInfo.type
      )}${getSubCategoryNameWhenIsPensionAndPerson(
        userInfo.type,
        removeAccents(userInfo.category),
        userInfo.subcategory
      )}${
        removeAccents(userInfo.category) === 'Ahorro'
          ? '-Sup'
          : '-ContenidosSup'
      }-${actionGtm}`
    }
    if (!gtmAction || type === 'InternaAhorro') {
      gtmAction = `Clic${type}-${
        type === 'InternaAhorro' ? 'Sup-' : 'ContenidosSup-'
      }${actionGtm}`
    }
    if (type) {
      sendGaPush(
        userInfo.category
          ? removeAccents(userInfo.category)
          : removeAccents(lineGtm),
        gtmAction,
        titulo
      )
    }
    setindexTitle(x)
  }

  const setSelectedTabIndexIfExists = () => {
    if (selectedTabIndex !== undefined && allTitle[selectedTabIndex]) {
      setindexTitle(selectedTabIndex)
      clickWithScrollCenter(document.getElementById('step-by-step'))
    }
  }

  useEffect(() => {
    shuffle(imagesContent)
    setSelectedTabIndexIfExists()
  }, [])

  useEffect(() => {
    separacionAllyList()
  }, [allyList])

  return (
    <div className="step-by-step">
      <span
        className="hidden-lable"
        id="step-by-step"
        style={{ marginTop: '-140px' }}
      />
      <div
        className={`container-step-by-step ${
          imageStepbyStepSvg
            ? imageStepbyStepSvg[indexTitle]
              ? imageStepbyStepSvg[indexTitle].step
                ? 'background-conteful-active'
                : ''
              : ''
            : ''
        }`}
      >
        <span className="hidden-lable" id="hidden-lable">
          step-by-step
        </span>
        <div className={`container-step-by-step-tags`}>
          {allTitle.map((x, index) => {
            const classNames = `container-step-by-step-tags-title-value-container-imagen ${
              indexTitle === index
                ? imageStepbyStepSvg
                  ? imageStepbyStepSvg[index]
                    ? imageStepbyStepSvg[index].step
                      ? indexTitle === index
                        ? 'item-conteful-active'
                        : ''
                      : ''
                    : ''
                  : ''
                : ''
            }`
            const src =
              indexTitle === index
                ? imageStepbyStepSvg
                  ? imageStepbyStepSvg[index]
                    ? imageStepbyStepSvg[index].step
                    : imagenes.menuTags[index].imagenActiva
                  : imagenes.menuTags[index].imagenActiva
                : imageStepbyStepSvg
                ? imageStepbyStepSvg[index]
                  ? imageStepbyStepSvg[index].step
                  : imagenes.menuTags[index]
                  ? imagenes.menuTags[index]?.imagenInactive
                  : imagenes.menuTags
                : imagenes.menuTags[index]?.imagenInactive

            const style =
              indexTitle === index
                ? {
                    position: 'absolute',
                    left: 8,
                    top: 11,
                    filter:
                      line === 'Inversión'
                        ? 'invert(12%) sepia(7%) saturate(1467%) hue-rotate(213deg) brightness(0) contrast(100%)'
                        : null
                  }
                : {
                    filter:
                      line === 'Inversión'
                        ? 'invert(41%) sepia(4%) saturate(1661%) hue-rotate(202deg) brightness(127%) contrast(1%)'
                        : null
                  }

            return (
              <div style={{ textDecoration: 'none', width: '60%' }}>
                <button
                  style={
                    indexTitle === index
                      ? {
                          color: line === 'Inversión' ? '#292730' : '#0033a0',
                          zIndex: 1
                        }
                      : {
                          fontWeight: 'normal',
                          zIndex: 1
                        }
                  }
                  onClick={() => {
                    const event = gtmClassSteps
                      ? gtmClassSteps[index]?.event ?? {}
                      : {}
                    sendEventGA(event.category, event.action, event.label)
                    setindexsTitle(index, x.titulo)
                    clickWithScrollCenter(
                      document.getElementById(`step-by-step`)
                    )
                  }}
                  onKeyDown={e => {
                    if (e.keyCode === 13) {
                      const event = gtmClassSteps
                        ? gtmClassSteps[index]?.event ?? {}
                        : {}
                      sendEventGA(event.category, event.action, event.label)
                      setindexsTitle(index, x.titulo)
                      clickWithScrollCenter(
                        document.getElementById(`step-by-step`)
                      )
                    }
                  }}
                  id={`container-step-by-step-tags-${index}`}
                  className={`container-step-by-step-tags-title-value ${
                    indexTitle === index ? 'active' : 'inactive'
                  }`}
                  tabIndex="0"
                >
                  <div
                    className="container-step-by-step-tags-title-value-container"
                    style={{ maxWidth: '100px' }}
                  >
                    {imageStepbyStepSvg ? (
                      <ReactSVG
                        id={`container-step-by-step-tags-imagen-${index}`}
                        className={classNames}
                        style={style}
                        src={src}
                        title={`Ícono de ${x.titulo}`}
                        alt={imageStepbyStepSvg[index]?.alt}
                      />
                    ) : (
                      <img
                        id={`container-step-by-step-tags-imagen-${index}`}
                        className={classNames}
                        style={style}
                        src={src}
                        title={`Ícono paso ${index + 1}`}
                        alt="Ícono de una pieza de rompecabezas, al darle clic despliega información sobre el tema consultado"
                      />
                    )}
                    {indexTitle === index ? (
                      <img
                        alt="backgournd"
                        style={{ margin: '0 20px' }}
                        src={backgroud}
                      />
                    ) : null}
                  </div>
                  <div
                    id={`container-step-by-step-tags-title-${index}`}
                    className="container-step-by-step-tags-title-value-container-text"
                  >
                    <h2
                      id={`container-step-by-step-tags-title-value-${index}`}
                      style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        textAlign: 'left'
                      }}
                    >
                      {x.titulo}
                    </h2>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
        <div>
          {dataMeal.parrafos.map((contenido, i) => {
            if (i === indexTitle) {
              return (
                <div
                  id={`container-step-by-step-parrafos-${i}`}
                  className="container-step-by-step-parrafos"
                >
                  <div
                    id={`container-step-by-step-parrafos-contenido-${i}`} // rg
                    className={`container-step-by-step-parrafos-contenido ${
                      indexTitle === i ? 'activeTexto' : 'inactiveTexto'
                    }`}
                  >
                    <RichText
                      accessibility={accessibility}
                      type={type}
                      line={lineGtm}
                      title={data.title}
                      text={contenido}
                      THS={THS}
                    />
                  </div>
                  <div
                    id={`container-step-by-step-parrafos-imagenes-${i}`}
                    className={`container-step-by-step-parrafos-imagenes ${
                      indexTitle === i ? 'activeTexto' : 'inactiveTexto'
                    }`}
                    style={!THS ? { position: 'sticky', top: '60px' } : {}}
                  >
                    <img
                      id={`container-step-by-step-parrafos-imagen-${i}`}
                      width="320px"
                      src={
                        imageStepbyStepJpg
                          ? imageStepbyStepJpg[indexTitle]
                            ? imageStepbyStepJpg[indexTitle].step
                            : imagesContent[indexTitle].step
                          : imagesContent[indexTitle].step
                      }
                      style={
                        imageStepbyStepJpg
                          ? imageStepbyStepJpg[indexTitle]
                            ? imageStepbyStepJpg[indexTitle].step
                              ? {
                                  position: 'absolute',
                                  top: 0,
                                  right: 0,
                                  width: 450,
                                  height: 450
                                }
                              : null
                            : null
                          : null
                      }
                      alt={
                        imageStepbyStepJpg
                          ? imageStepbyStepJpg[indexTitle]
                            ? imageStepbyStepJpg[indexTitle].alt
                            : imagesContent[indexTitle].alt
                          : imagesContent[indexTitle].alt
                      }
                    />
                    <span
                      className="hidden-lable"
                      id="container-step-by-step-image-name"
                      name={
                        imageStepbyStepJpg
                          ? imageStepbyStepJpg[indexTitle]
                            ? imageStepbyStepJpg[indexTitle].alt
                            : imagesContent[indexTitle].alt
                          : imagesContent[indexTitle].alt
                      }
                    />
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
      {data.cta && !notData && (
        <div className="container-step-by-step-call-to-action">
          <CallToAction
            accessibility={accessibility}
            descripcion={data.cta.titulo}
            titulo={data.cta.textoButton}
            link={data.cta.url}
            line={line}
            lineGtm={lineGtm}
            type={type}
            titleContent={data.title}
            ujtgf
            user={user}
          />
        </div>
      )}
      {THS && (
        <div
          className="mouse_scroll gtmTSHRutaAprenScrollDown"
          id="mouse_scroll"
        >
          <span
            className={`m_scroll_arrows${
              line === 'Inversión' ? ' m_scroll_arrows--inversion' : ''
            } one`}
          ></span>
          <span
            className={`m_scroll_arrows${
              line === 'Inversión' ? ' m_scroll_arrows--inversion' : ''
            } two`}
          ></span>
        </div>
      )}
      {arrows.map(items => {
        let indexTab = items?.[0].indexTab
        if (items) {
          return (
            <React.Fragment>
              {indexTitle === indexTab ? (
                <AllyList
                  accessibility={accessibility}
                  allyListData={items}
                  line={line}
                />
              ) : null}
            </React.Fragment>
          )
        }
      })}
      {allyListContent
        ? allyListContent.map(proxy => {
            if (indexTitle === proxy.indexTab) {
              return (
                <ContentProxyTalent
                  accessibility={accessibility}
                  data={proxy.contenido}
                  line={line}
                  dataSend={data}
                />
              )
            }
          })
        : ''}
    </div>
  )
}

StepByStep2.defaultProps = {
  gtmClassSteps: undefined
}

StepByStep2.propTypes = {
  gtmClassSteps: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.string,
      event: PropTypes.string,
      class: PropTypes.string.isRequired
    })
  )
}
