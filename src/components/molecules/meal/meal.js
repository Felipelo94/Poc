import React, { useEffect, useState } from 'react'
import './meal.scss'
import RichText from '../../../utils/rich-text/rich-text'
import Alert from '../../atoms/alert/alert'
import CallToAction from '../call-to-action/call-to-action'
import ContentUtil from '../../../utils/ContentUtil'
import MenuMeal from '../menu-meal/menu-meal'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  getTypeName,
  removeAccents,
  sendGaPush,
  upperFirst
} from '../../../utils/classGtmUtil'
import { clickWithScrollCenter } from '../../../utils/commons-event-content'
import useGetUserInfoIndexDBState from './../../../hooks/useGetUserInfoIndexDBState'
import ItemAcordion from '../../atoms/item-acordion/item-acordion'
import MenuMealSuboptions from '../menu-meal-suboptions/menu-meal-suboptions'
import { getMenuTitlesWithSuboptions } from '../../../utils/meal-utils'

export default function Meal({
  data,
  accessibility,
  alertText,
  notData,
  line,
  user,
  type,
  lineGtm,
  actionGA,
  THS,
  keyEmbedded,
  tabEmbedded,
  componetEmbedded,
  changeTab,
  corporativoAccionista = false,
  anchorId
}) {
  const userInfo = useGetUserInfoIndexDBState()
  const [indexActiveMenu, setIndexActiveMenu] = useState(0)
  const [lastIndexActiveMenu, setLastIndexActiveMenu] = useState(-1)
  const [indexTitleH4, setindexTitleH4] = useState(0)
  const [indexActiveSuboption, setIndexActiveSuboption] = useState(1)
  const [accordeonH4, setAccordeonH4] = useState([])
  const allTitle = []
  const newData = []
  const allTitleH4 = []
  const dataMeal = data
  const text = alertText?.textoCierre
  const actionGtm = upperFirst(removeAccents(data.title))
  useEffect(() => {
    if (changeTab) {
      setindexsTitle(changeTab)
      clickWithScrollCenter(
        document.getElementById(
          type === 'InternaAhorro'
            ? 'content-solutions-container-title'
            : `container-header-container-sub-title-sesion`
        )
      )
    }
  }, [changeTab])

  useEffect(() => {
    let arrayItemsH4 = []
    for (
      let i = !!newData?.[indexActiveMenu]?.content[indexActiveSuboption]
        ? indexActiveSuboption
        : 0;
      i < newData?.[indexActiveMenu]?.content.length;
      i++
    ) {
      const iterableData = newData?.[indexActiveMenu]?.content[i]

      if (iterableData?.content?.[0].nodeType === 'heading-4') {
        arrayItemsH4.push({
          titulo: iterableData.content?.[0].content?.[0].value,
          index: indexActiveMenu,
          content: iterableData.content,
          type: 'heading-4',
          subMenu: indexActiveSuboption
        })
      } else if (
        !!newData?.[indexActiveMenu]?.content[indexActiveSuboption] &&
        i > indexActiveSuboption
      ) {
        break
      }
    }

    setAccordeonH4(arrayItemsH4)
  }, [indexActiveSuboption, indexActiveMenu])

  const setindexsTitle = x => {
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
      allTitle[x]?.titulo
    )
    setIndexActiveMenu(x)
  }

  const countTitle = (content, nodeType, index, parrafos, subMenu) => {
    if (
      nodeType.indexOf('heading-3') >= 0 ||
      nodeType.indexOf('heading-2') >= 0
    ) {
      content.map(value => {
        if (value.value && value.value.trim().length > 0) {
          allTitleH4.push({
            titulo: value.value,
            index: index,
            content: parrafos,
            type: nodeType,
            subMenu: subMenu
          })
        }
        return null
      })
    }
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

  const thereAreheadingsH3 =
    menuTitlesWithSuboptions?.some(
      menu =>
        menu?.subOptions?.some(submenu => submenu?.length ?? false) ?? false
    ) ?? false

  const validationContentMenu = indexMenu => {
    const title =
      menuTitlesWithSuboptions[indexMenu].option[0][0].heading.content[0].value
    const search = allTitleH4.find(item => item.titulo === title)
    if (search.content.content.length === 1) {
      setIndexActiveSuboption(1)
      setIndexActiveMenu(-1)
    } else {
      setIndexActiveSuboption(-1)
    }
  }

  return (
    <div className="meal">
      <div className="container-meal" id="container-meal">
        <span className="hidden-lable" id="hidden-lable">
          meal
        </span>
        {!thereAreheadingsH3 && (
          <div
            role="presentation"
            className="container-meal-title"
            id="container-meal-title"
            onClick={() => {
              clickWithScrollCenter(
                document.getElementById(
                  window.location.href.includes('portafolios-de-inversion')
                    ? 'container-meal-title'
                    : type === 'InternaAhorro'
                    ? 'content-solutions-container-title'
                    : `container-header-container-sub-title-sesion`
                )
              )
            }}
          >
            <MenuMeal
              accessibility={accessibility}
              data={allTitle}
              indexTitle={indexActiveMenu}
              clickEvent={setindexsTitle}
              line={lineGtm}
              type={type}
              changeTab={changeTab}
              anchorId={anchorId}
            />
          </div>
        )}
        {thereAreheadingsH3 && (
          <div className="container-meal-suboptions">
            <MenuMealSuboptions
              idContainer="container-meal-title"
              dataMenuSuboptions={menuTitlesWithSuboptions}
              accessibility={accessibility}
              line={lineGtm}
              indexActiveMenu={indexActiveMenu}
              indexActiveSuboption={indexActiveSuboption}
              onClickMenu={indexClickedMenu => {
                validationContentMenu(indexClickedMenu)
                setLastIndexActiveMenu(indexClickedMenu)
                setIndexActiveMenu(
                  indexClickedMenu === indexActiveMenu ? -1 : indexClickedMenu
                )
                clickWithScrollCenter(
                  document.getElementById('container-meal-content'),
                  80
                )
              }}
              onClickSuboption={indexClickedSuboption => {
                setIndexActiveSuboption(indexClickedSuboption)
                clickWithScrollCenter(
                  document.getElementById('container-meal-content'),
                  80
                )
              }}
            />
          </div>
        )}
        <div
          class="container-meal__separator"
          id="container-meal-content-anchor"
        />
        <div className="container-meal-content" id="container-meal-content">
          {allTitleH4.map((contenido, i) => {
            if (
              (contenido.index === indexActiveMenu ||
                contenido.index === lastIndexActiveMenu) &&
              contenido.type !== 'heading-4'
            ) {
              return (
                <div
                  className="container-meal-content-value"
                  id={`container-meal-content-value-parrafo-${i}`}
                >
                  {contenido.content.content.map(x => {
                    if (
                      contenido.subMenu === indexActiveSuboption ||
                      (contenido.subMenu === 0 &&
                        indexActiveSuboption === -1) ||
                      (!thereAreheadingsH3 && contenido.subMenu === 0) ||
                      (indexActiveMenu === 0 &&
                        menuTitlesWithSuboptions[0].subOptions.length <= 1)
                    ) {
                      return (
                        <RichText
                          accessibility={accessibility}
                          type={type}
                          line={lineGtm}
                          title={data.title}
                          text={x}
                          THS={THS}
                        />
                      )
                    }
                    return null
                  })}
                  {keyEmbedded
                    ? allTitle[i].titulo === tabEmbedded
                      ? componetEmbedded
                      : null
                    : null}
                </div>
              )
            }

            return null
          })}
          {accordeonH4.map((contenido, i) => {
            return (
              <div
                id={`container-talento-title-value-${i}`}
                className="container-internal-item-accordion"
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
                      document.getElementById(
                        `container-talento-title-value-${i}`
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
                    {contenido.content.map((contentInside, pos) => {
                      let content
                      if (corporativoAccionista) {
                        content =
                          contentInside.nodeType.indexOf('heading') === 0
                            ? ''
                            : contentInside
                      } else {
                        content = contentInside
                      }
                      return (
                        <div id={`container-meal-content-value-parrafo-${pos}`}>
                          <RichText
                            line={line}
                            accessibility={accessibility}
                            text={content}
                            title={contenido.titulo}
                          />
                        </div>
                      )
                    })}
                  </div>
                </ItemAcordion>
              </div>
            )
          })}
        </div>
      </div>
      <div id="alert-meal" className="alert-meal">
        <div id="text-alert-meal" className="text-alert-meal">
          {text && !notData ? (
            <Alert
              accessibility={accessibility}
              text={text}
              isMealMenuAlert={true}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <div
        id="call-to-action-meal"
        style={{
          marginBottom: '48px',
          marginLeft: '97px',
          marginRight: '97px'
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
