import React, { useEffect, useState } from 'react'
import ItemAcordion from '../../atoms/item-acordion/item-acordion'
import RichText from '../../../utils/rich-text/rich-text'
import Alert from '../../atoms/alert/alert'
import './meal-mobile.scss'
import CallToAction from '../call-to-action/call-to-action'
import {
  removeAccents,
  upperFirst,
  sendGaPush,
  getTypeName,
  getSubCategoryNameWhenIsPensionAndPerson
} from '../../../utils/classGtmUtil'
import { clickWithScrollCenter } from '../../../utils/commons-event-content'
import useGetUserInfoIndexDBState from './../../../hooks/useGetUserInfoIndexDBState'
import { getMenuTitlesWithSuboptions } from '../../../utils/meal-utils'
import ContentUtil from '../../../utils/ContentUtil'

export default function MealMobile({
  data,
  alertText,
  notData,
  line,
  titleH2,
  type,
  user,
  lineGtm,
  actionGA,
  accessibility,
  THS,
  keyEmbedded,
  tabEmbedded,
  componetEmbedded,
  changeTab,
  corporativoAccionista = false
}) {
  const userInfo = useGetUserInfoIndexDBState()
  const [indexActiveMenu, setIndexActiveMenu] = useState(0)
  const [indexTitleH4, setindexTitleH4] = useState(0)
  const [indexActiveSuboption, setIndexActiveSuboption] = useState(1)
  const text = alertText?.textoCierre
  const dataMeal = data
  const allTitle = []
  const newData = []
  const allTitleH4 = []
  const actionGtm = upperFirst(removeAccents(data.title))

  const mealMobileClasses = `container-meal-mobile ${
    line === 'Inversión' ? 'container-meal-mobile--inversion' : ''
  }`

  useEffect(() => {
    if (changeTab) {
      setindexsTitle(
        changeTab === indexActiveMenu ? null : changeTab,
        allTitle[changeTab]?.titulo
      )
      clickWithScrollCenter(
        document.getElementById(`container-meal-title-value-${changeTab}`)
      )
    }
  }, [changeTab])

  const countTitle = (content, nodeType, index, parrafos, subMenu) => {
    if (
      nodeType.indexOf('heading-3') >= 0 ||
      nodeType.indexOf('heading-4') >= 0 ||
      nodeType.indexOf('heading-2') >= 0
    ) {
      let indexH4 = []

      newData[index]?.content?.map((items, indexs, array) => {
        items.content.map((item, indexItems) => {
          if (item.nodeType.indexOf('heading-4') >= 0) {
            for (let i = indexs; i <= indexs && i > 0; i--) {
              if (
                (array[i - 1].content[indexItems].nodeType.indexOf(
                  'heading-2'
                ) >= 0 &&
                  array[i].content[indexItems].nodeType.indexOf('heading-4') >=
                    0) ||
                (array[i - 1].content[indexItems].nodeType.indexOf(
                  'heading-3'
                ) >= 0 &&
                  array[i].content[indexItems].nodeType.indexOf('heading-4') >=
                    0)
              ) {
                indexH4.push({
                  index: index,
                  type: item.nodeType,
                  subMenu: i - 1,
                  position: subMenu
                })
              }
            }
          }
        })
      })

      let indexSubMenu = null
      if (nodeType.indexOf('heading-4') >= 0 && indexH4.length > 0) {
        indexSubMenu = indexH4.filter(x => {
          return x.index === index && x.position === subMenu
        })?.[0]
      }

      content.map(value => {
        if (value.value && value.value.trim().length > 0) {
          allTitleH4.push({
            index: index,
            titulo: value.value,
            type: nodeType,
            subMenu: indexSubMenu ? indexSubMenu.subMenu : subMenu,
            content: parrafos
          })
        }
        return null
      })
    }
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
          ? '-Lat'
          : '-ContenidosLat'
      }-${actionGtm}`
    }
    if (!gtmAction || type === 'InternaAhorro') {
      gtmAction = `Clic${type}-${
        type === 'InternaAhorro' ? 'Lat-' : 'ContenidosLat-'
      }${actionGtm}`
    }
    sendGaPush(
      userInfo.category
        ? removeAccents(userInfo.category)
        : removeAccents(line),
      actionGA || gtmAction,
      titulo
    )
    setIndexActiveMenu(x)
  }

  const contentUtil = new ContentUtil()
  contentUtil.getParagraphByTitle(dataMeal.parrafos, allTitle, newData)

  if (dataMeal.parrafos) {
    newData.map(paragraph => {
      return paragraph.content.map((items, i) => {
        return items.content.map(item => {
          return countTitle(
            item.content,
            item.nodeType,
            paragraph.index,
            items,
            i
          )
        })
      })
    })
  }

  const menuTitlesWithSuboptions = getMenuTitlesWithSuboptions(newData)

  const thereAreHeadingsH3 = menuTitlesWithSuboptions?.some(menu =>
    menu?.subOptions?.some(submenu => submenu?.length)
  )

  const validationContentMenu = indexMenu => {
    const title =
      menuTitlesWithSuboptions[indexMenu].option[0][0].heading.content[0].value
    const search = allTitleH4.find(item => item.titulo === title)
    if (search.content.content.length === 1) {
      setIndexActiveSuboption(1)
    } else {
      setIndexActiveSuboption(-1)
    }
  }

  return (
    <div id="container-meal" className={mealMobileClasses}>
      <span className="hidden-lable" id="hidden-lable">
        meal
      </span>
      <div id="container-meal-title">
        {allTitle.map((x, index) => {
          return (
            <div
              id={`container-meal-title-value-${index}`}
              className="container-meal-mobile-title"
              role="presentation"
            >
              <span id={`container-meal-title-value-items${index}`}>
                <ItemAcordion
                  title={x.titulo}
                  accessibility={accessibility}
                  line={lineGtm}
                  idItem={index}
                  showArrows={true}
                  showIconsMinusAndPlus={false}
                  active={indexActiveMenu}
                  titleH2={titleH2}
                  click={() => {
                    setindexsTitle(
                      index === indexActiveMenu ? null : index,
                      x.titulo
                    )
                    validationContentMenu(index)
                    clickWithScrollCenter(
                      document.getElementById(
                        `container-meal-title-value-${index}`
                      )
                    )
                  }}
                  isNotMargin={
                    keyEmbedded
                      ? allTitle[index].titulo === tabEmbedded
                        ? true
                        : false
                      : false
                  }
                  dataMenuSuboptions={menuTitlesWithSuboptions}
                  indexActiveSuboption={indexActiveSuboption}
                >
                  {thereAreHeadingsH3 && (
                    <React.Fragment>
                      <div className="container-meal-suboptions">
                        <div className="menu-meal-suboptions">
                          {menuTitlesWithSuboptions[index].subOptions.map(
                            subOption => {
                              return subOption.map(contentSuboption => {
                                return (
                                  <div
                                    className={`${
                                      index === indexActiveMenu &&
                                      indexActiveSuboption ===
                                        contentSuboption?.index
                                        ? 'item-acordion-container-suboption item-acordion-container-suboption--active'
                                        : 'item-acordion-container-suboption'
                                    }`}
                                  >
                                    <button
                                      onClick={() => {
                                        setIndexActiveSuboption(
                                          contentSuboption?.index
                                        )
                                      }}
                                      className={`${
                                        index === indexActiveMenu &&
                                        indexActiveSuboption ===
                                          contentSuboption?.index
                                          ? 'item-acordion-suboption item-acordion-suboption--active'
                                          : 'item-acordion-suboption'
                                      }`}
                                    >
                                      {contentSuboption?.heading?.content?.[0]
                                        ?.value ?? ''}
                                    </button>
                                    <div className="item-acordion-suboption-separator" />
                                  </div>
                                )
                              })
                            }
                          )}
                        </div>
                      </div>
                    </React.Fragment>
                  )}
                  <div
                    id="container-meal-content"
                    className="container-meal-content-mobile"
                  >
                    {allTitleH4.map((contenido, i) => {
                      if (
                        contenido.index === indexActiveMenu &&
                        contenido.type !== 'heading-4'
                      ) {
                        return (
                          <>
                            <div
                              className="container-meal-content-value"
                              id={`container-meal-content-value-parrafo-${i}`}
                            >
                              {contenido.content.content.map(item => {
                                if (
                                  contenido.subMenu === indexActiveSuboption ||
                                  (contenido.subMenu === 0 &&
                                    indexActiveSuboption === -1) ||
                                  (!thereAreHeadingsH3 &&
                                    contenido.subMenu === 0)
                                ) {
                                  return (
                                    <RichText
                                      accessibility={accessibility}
                                      type={type}
                                      line={lineGtm}
                                      title={data.title}
                                      text={item}
                                      THS={THS}
                                    />
                                  )
                                }
                              })}
                              {keyEmbedded
                                ? allTitle[i].titulo === tabEmbedded
                                  ? componetEmbedded
                                  : null
                                : null}
                            </div>
                          </>
                        )
                      } else if (contenido.index === indexActiveMenu) {
                        if (
                          contenido.subMenu === indexActiveSuboption ||
                          (contenido.subMenu === 0 &&
                            indexActiveSuboption === -1)
                        ) {
                          return (
                            <div
                              id={`container-talento-title-value-${i}`}
                              className="container-internal-item-accordion-mobile"
                              role="presentation"
                            >
                              <ItemAcordion
                                accessibility={accessibility}
                                line={line}
                                title={contenido.titulo}
                                active={indexTitleH4}
                                idItem={i}
                                classTitle="internal"
                                click={() => {
                                  setindexTitleH4(i === indexTitleH4 ? null : i)
                                  clickWithScrollCenter(
                                    document.querySelector(
                                      `#container-talento-title-value-${i}`
                                    )
                                  )
                                }}
                                showArrows={false}
                                showIconsMinusAndPlus={true}
                              >
                                <div
                                  className="container-meal-content-mobile"
                                  id="container-meal-content"
                                >
                                  {contenido.content.content.map(
                                    (dataContent, pos) => {
                                      let content
                                      if (corporativoAccionista) {
                                        content =
                                          dataContent.nodeType.indexOf(
                                            'heading'
                                          ) === 0
                                            ? ''
                                            : dataContent
                                      } else {
                                        content = dataContent
                                      }
                                      return (
                                        <div
                                          id={`container-meal-content-value-parrafo-${pos}`}
                                        >
                                          <RichText
                                            line={line}
                                            accessibility={accessibility}
                                            text={content}
                                            title={dataContent.titulo}
                                          />
                                        </div>
                                      )
                                    }
                                  )}
                                </div>
                              </ItemAcordion>
                            </div>
                          )
                        }
                      }

                      return null
                    })}
                    <div className="container-meal-content-mobile__separator" />
                  </div>
                </ItemAcordion>
              </span>
            </div>
          )
        })}
      </div>
      <div
        id="alert-meal"
        style={{
          marginLeft: '16px',
          marginRight: '16px',
          marginTop: '16px'
        }}
      >
        {text && !notData ? (
          <Alert accessibility={accessibility} text={text} />
        ) : (
          ''
        )}
      </div>
      <div
        id="call-to-action-meal"
        style={{
          marginTop: '48px',
          marginBottom: '48px',
          marginLeft: '16px',
          marginRight: '16px'
        }}
      >
        {data.cta && !notData ? (
          <CallToAction
            accessibility={accessibility}
            descripcion={data.cta.titulo}
            titulo={data.cta.textoButton}
            link={data.cta.url}
            titleContent={data.title}
            line={line}
            lineGtm={lineGtm}
            type={type}
            user={user}
          />
        ) : null}
      </div>
    </div>
  )
}
