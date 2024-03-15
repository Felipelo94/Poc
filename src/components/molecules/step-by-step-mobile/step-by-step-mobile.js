import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ItemAcordion from '../../atoms/item-acordion-step-by-step/item-acordion'
import RichText from '../../../utils/rich-text/rich-text'
import CallToAction from '../call-to-action/call-to-action'
import {
  imagenes,
  getImagesContainer
} from '../../../const/dictionary/step-by-step.js'
import Image from '../../atoms/image/image'
import AllyList from '../ally-list/allyList'
import './step-by-step-mobile.scss'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  getTypeName,
  removeAccents,
  upperFirst
} from '../../../utils/classGtmUtil'
import { sendGaPush, sendEventGA } from '../../../utils/classGtmUtil'
import { clickWithScrollCenter } from '../../../utils/commons-event-content'
import { shuffle } from '../../../utils/shuffle'
import ContentProxyTalent from '../content-proxy-talent/content-proxy-talent'
import imageTalentoSiHay from '../../../assets/images/talentosihay.png'
import useGetUserInfoIndexDBState from './../../../hooks/useGetUserInfoIndexDBState'

export default function StepByStepMobile({
  data,
  line,
  notData,
  type,
  titleH2,
  user,
  lineGtm,
  accessibility,
  imageStepbyStepJpg,
  imageStepbyStepSvg,
  THS,
  gtmClassSteps,
  isTalento,
  selectedTabIndex
}) {
  const userInfo = useGetUserInfoIndexDBState()
  const [arrows, setArrows] = useState([])
  const datastepbystep = data
  const actionGtm = upperFirst(removeAccents(data.title))
  const [indexTitle, setindexTitle] = useState(0)
  const allTitle = []
  const allyListContent = []
  let allyListAll = []
  const allyList = []
  const imagesContainer = getImagesContainer(line)
  const [indexActive, setindexActive] = useState(false)
  const [imageActive, setImageActive] = useState(imagenes)

  datastepbystep.parrafos.map((paragraph, indexTab) =>
    paragraph.content.map(({ content, nodeType, data }) => {
      if (nodeType.indexOf('heading') >= 0) {
        content.map(value => {
          if (value.value && value.value.trim().length > 0) {
            allTitle.push({ titulo: value.value })
          }
          return null
        })
      } else if (nodeType.indexOf('embedded-entry-block') >= 0) {
        if (
          data.target.sys.contentType.sys.id === 'aliados' ||
          data.target.sys.contentType.sys.id === 'PrivilegiosProteccion'
        ) {
          allyList.push({
            descripcion: data.target
              ? data.target.fields.descripcion['en-US']
              : '',
            titulo: data.target ? data.target.fields.titulo['en-US'] : '',
            linkCallToAction: data.target
              ? data.target.fields.linkCallToAction['en-US']
              : '',
            textoCallToAction: data.target
              ? data.target.fields.textoCallToAction['en-US']
              : '',
            imageName:
              data.target.fields.imagen['en-US'][0].fields?.file['en-US']
                .fileName,
            imageUrl: data.target
              ? data.target.fields.imagen['en-US'][0].fields
                ? data.target.fields.imagen['en-US'][0].fields.file['en-US'].url
                : imageTalentoSiHay
              : imageTalentoSiHay,
            updatedAt: data.target.sys.updatedAt,
            imageTittle:
              data.target.fields.imagen['en-US'][0].fields?.title['en-US'],
            indexTab: indexTab,
            gtmClass: data.target ? data.target.gtmTSHStepperAllies : ''
          })
        } else if (data.target.sys.contentType.sys.id === 'contenido') {
          allyListContent.push({
            contenido: data.target.fields,
            indexTab: indexTab,
            gtmClass: data.target ? data.target.gtmTSHStepperAllies : ''
          })
        }
      }
    })
  )

  allyList.sort(function(a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt)
  })

  const separacionAllyList = () => {
    if ((datastepbystep && !indexActive) || arrows <= 0) {
      if (datastepbystep.parrafos) {
        for (var i = 0; i < datastepbystep.parrafos.length; i++) {
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
    setindexTitle(x)
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
      sendGaPush(removeAccents(line), gtmAction, titulo)
    }
  }

  const setSelectedTabIndexIfExists = () => {
    if (selectedTabIndex !== undefined && allTitle[selectedTabIndex]) {
      setindexTitle(selectedTabIndex)
      clickWithScrollCenter(
        document.getElementById(
          `container-step-by-step-title-value-${selectedTabIndex}`
        )
      )
    }
  }

  useEffect(() => {
    shuffle(imagesContainer)
    setSelectedTabIndexIfExists()
  }, [])

  useEffect(() => {
    separacionAllyList()
  }, [allyList])

  useEffect(() => {
    const imagesToShow = imageStepbyStepSvg ?? imagenes
    setImageActive(imagesToShow)
  }, [imageStepbyStepSvg])

  return (
    <div id="container-step-by-step" className="container-step-by-step">
      <span className="hidden-lable" id="hidden-lable">
        step-by-step
      </span>
      <div id="container-step-by-step-title">
        {allTitle.map((x, index) => {
          return (
            <div
              key={`container-step-by-step-title-value-${index}`}
              id={`container-step-by-step-title-value-${index}`}
              role="presentation"
            >
              <span
                id={`container-step-by-step-title-value-items${index}`}
                className="container-step-by-step-title"
              >
                <ItemAcordion
                  accessibility={accessibility}
                  title={x.titulo}
                  idItem={index}
                  active={indexTitle}
                  showIconsMinusAndPlus={true}
                  showArrows={false}
                  icon={imageActive}
                  line={lineGtm}
                  titleH2={titleH2}
                  click={() => {
                    setindexsTitle(
                      index === indexTitle ? null : index,
                      x.titulo
                    )
                    clickWithScrollCenter(
                      document.getElementById(
                        `container-step-by-step-title-value-${index}`
                      )
                    )
                  }}
                  clickOnItem={() => {
                    const event = gtmClassSteps
                      ? gtmClassSteps[index]?.event ?? {}
                      : {}
                    sendEventGA(event.category, event.action, event.label)
                  }}
                  THS={THS}
                >
                  <div
                    id="container-step-by-step-content"
                    className="container-step-by-step-content-mobile"
                  >
                    {datastepbystep.parrafos.map((contenido, i) => {
                      if (i === indexTitle) {
                        return (
                          <div
                            key={`container-step-by-step-content-mobile-container-${index}`}
                            className="container-step-by-step-content-mobile-container"
                            id="container-step-by-step-content-mobile-container"
                          >
                            <div
                              className="container-step-by-step-content-mobile-container-image"
                              id="container-step-by-step-content-mobile-container-image"
                              style={
                                THS
                                  ? {
                                      background: '#e3e829',
                                      position: imageStepbyStepJpg
                                        ? imageStepbyStepJpg[indexTitle]
                                          ? imageStepbyStepJpg[indexTitle].step
                                            ? 'relative'
                                            : null
                                          : null
                                        : null,
                                      bottom: imageStepbyStepJpg
                                        ? imageStepbyStepJpg[indexTitle]
                                          ? imageStepbyStepJpg[indexTitle].step
                                            ? '20px'
                                            : null
                                          : null
                                        : null
                                    }
                                  : {}
                              }
                            >
                              <Image
                                alt={
                                  imageStepbyStepJpg
                                    ? imageStepbyStepJpg[indexTitle]
                                      ? imageStepbyStepJpg[indexTitle].alt
                                      : imagesContainer[indexTitle].alt
                                    : imagesContainer[indexTitle].alt
                                }
                                imagen={
                                  imageStepbyStepJpg
                                    ? imageStepbyStepJpg[indexTitle]
                                      ? imageStepbyStepJpg[indexTitle].step
                                      : imagesContainer[indexTitle].step
                                    : imagesContainer[indexTitle].step
                                }
                                style={
                                  imageStepbyStepJpg
                                    ? imageStepbyStepJpg[indexTitle]
                                      ? imageStepbyStepJpg[indexTitle].step
                                        ? {
                                            height: '360px',
                                            width: '100%',
                                            position: 'relative',
                                            top: '4px'
                                          }
                                        : {
                                            height: '200px',
                                            width: '200px'
                                          }
                                      : {
                                          height: '200px',
                                          width: '200px'
                                        }
                                    : {
                                        height: '200px',
                                        width: '200px'
                                      }
                                }
                                resize="250px"
                                classGtm=""
                              />
                              <span
                                className="hidden-lable"
                                id="container-step-by-step-image-name"
                                name={
                                  imageStepbyStepJpg
                                    ? imageStepbyStepJpg[indexTitle]
                                      ? imageStepbyStepJpg[indexTitle].alt
                                      : imagesContainer[indexTitle].alt
                                    : imagesContainer[indexTitle].alt
                                }
                              />
                            </div>
                            <div
                              id={`container-step-by-step-content-value-parrafo-${i}`}
                              className={`container-step-by-step-content-value-parrafo`}
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
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                  {arrows.map((items, i) => {
                    let indexTab = items?.[0].indexTab
                    if (items) {
                      return (
                        <React.Fragment key={`arrow-${i}`}>
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
                    ? allyListContent.map((proxy, i) => {
                        if (indexTitle === proxy.indexTab) {
                          return (
                            <ContentProxyTalent
                              key={`allyC-${i}`}
                              accessibility={accessibility}
                              data={proxy.contenido}
                              line={line}
                              dataSend={data}
                            />
                          )
                        }
                      })
                    : ''}
                </ItemAcordion>
              </span>
            </div>
          )
        })}
      </div>
      <div
        id="call-to-action-step-by-step"
        style={{
          marginBottom: '48px',
          marginLeft: '16px',
          marginRight: '16px',
          marginTop: '48px'
        }}
      >
        {data.cta && !notData ? (
          <CallToAction
            accessibility={accessibility}
            descripcion={data.cta.titulo}
            titulo={data.cta.textoButton}
            link={data.cta.url}
            line={line}
            lineGtm={lineGtm}
            type={type}
            titleContent={data.title}
            user={user}
          />
        ) : null}
      </div>
    </div>
  )
}

StepByStepMobile.defaultProps = {
  gtmClassSteps: undefined
}

StepByStepMobile.propTypes = {
  gtmClassSteps: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.string,
      event: PropTypes.string,
      class: PropTypes.string.isRequired
    })
  )
}
