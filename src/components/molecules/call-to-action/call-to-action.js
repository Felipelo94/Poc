import React from 'react'
import { useSelector } from 'react-redux'
import { useCurrentWidth } from 'react-socks'
import useInternalPathPages from '../../../hooks/useInternalPathPages'
import {
  getLinkCallToAction,
  getLinkCallToActionFromPathPages
} from '../../../utils/call-to-action-utils'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  getTypeName,
  removeAccents,
  sendGaPush,
  upperFirst
} from '../../../utils/classGtmUtil'
import Anchor from '../../atoms/anchor/anchor'
import Button from '../../atoms/button/button'
import SubTitleSesion from '../../atoms/sub-title-sesion/sub-title-sesion'
import useGetUserInfoIndexDBState from './../../../hooks/useGetUserInfoIndexDBState'
import './call-to-action.scss'

const CallToAction = ({
  titulo,
  descripcion,
  link,
  titleContent = '',
  clickExternal,
  line,
  lineGtm,
  user,
  accessibility,
  type,
  actionGA,
  callToActionSuperior,
  styleCallToActionSupeior = {}
}) => {
  const userInfoPageContext = useSelector(state => state.pageContext)
  const pathPages = useInternalPathPages()
  const userInfo = useGetUserInfoIndexDBState()

  let hrefCTA = ''
  if (link && !clickExternal) {
    hrefCTA = getLinkCallToAction(
      getLinkCallToActionFromPathPages(
        pathPages,
        link,
        userInfoPageContext,
        userInfo
      )
    )
  }
  const tittleTransformate = upperFirst(
    removeAccents(titulo !== null ? titulo : 'Quiero leerlas')
  )
  let gtmAction
  if (userInfo.type && userInfo.category && userInfo.subcategory) {
    gtmAction = `Clic${getTypeName(
      userInfo.type
    )}${getSubCategoryNameWhenIsPensionAndPerson(
      userInfo.type,
      removeAccents(userInfo.category),
      userInfo.subcategory
    )}${
      removeAccents(userInfo.category) === 'Ahorro' ? '-CTA' : '-ContenidosCTA'
    }-${tittleTransformate}`
  }
  if (!gtmAction || type === 'InternaAhorro') {
    gtmAction = `Clic${type}-${
      type === 'InternaAhorro' ? 'CTA-' : 'ContenidosCTA-'
    }${tittleTransformate}`
  }
  const clickBtn = () => {
    sendGaPush(
      userInfo.category
        ? removeAccents(userInfo.category)
        : removeAccents(lineGtm),
      actionGA ? `${actionGA}${tittleTransformate}` : gtmAction,
      titleContent
    )
    if (clickExternal) {
      clickExternal()
    }
  }
  const descripcionFinal = user ? `${user}, ${descripcion}` : descripcion

  const widthScreen = useCurrentWidth()
  return (
    <div>
      {((titulo && link) || clickExternal) && (
        <div
          className={
            callToActionSuperior
              ? 'call-to-action-container-superior gtmContenidosCTASup'
              : 'call-to-action-container gtmContenidosCTA'
          }
          style={styleCallToActionSupeior}
        >
          <div
            id="call-to-action-container-description"
            className={
              callToActionSuperior
                ? 'call-to-action-container-description gtmContenidosCTASup'
                : 'call-to-action-container-description gtmContenidosCTA'
            }
          >
            <SubTitleSesion
              accessibility={accessibility}
              subtitle={descripcionFinal}
              className="interna"
            />
          </div>
          {clickExternal ? (
            <div
              role="button"
              id="call-to-action-container-link"
              onClick={clickBtn}
              className={
                callToActionSuperior
                  ? 'call-to-action-container-link gtmContenidosCTASup'
                  : 'call-to-action-container-link gtmContenidosCTA'
              }
            >
              <div
                className={
                  callToActionSuperior
                    ? 'call-to-action-container-button gtmContenidosCTASup'
                    : 'call-to-action-container-button gtmContenidosCTA'
                }
                style={
                  callToActionSuperior && widthScreen <= 1024
                    ? { justifyContent: 'start' }
                    : {}
                }
              >
                <Button
                  id={callToActionSuperior && 'call-to-action-superior'}
                  title={titulo}
                  className={`${
                    line !== 'Inversión' ? 'primary' : 'primary-dark'
                  } ${
                    callToActionSuperior
                      ? 'gtmContenidosCTASup'
                      : 'gtmContenidosCTA'
                  }`}
                />
              </div>
            </div>
          ) : (
            <Anchor
              target="_blank"
              rel="noreferrer"
              id={
                callToActionSuperior
                  ? 'call-to-action-container-link-button-primary-superior '
                  : 'call-to-action-container-link-button'
              }
              className={
                callToActionSuperior
                  ? 'call-to-action-container-link gtmContenidosCTASup'
                  : 'call-to-action-container-link gtmContenidosCTA'
              }
              onClick={clickBtn}
              href={hrefCTA}
            >
              <div
                style={
                  callToActionSuperior && widthScreen <= 1024
                    ? { justifyContent: 'start' }
                    : {}
                }
                className={
                  callToActionSuperior
                    ? 'call-to-action-container-button gtmContenidosCTASup'
                    : 'call-to-action-container-button gtmContenidosCTA'
                }
              >
                <Button
                  id={callToActionSuperior && 'call-to-action-superior'}
                  title={titulo}
                  className={`${
                    line !== 'Inversión' ? 'primary' : 'primary-dark'
                  } ${
                    callToActionSuperior
                      ? 'gtmContenidosCTASup'
                      : 'gtmContenidosCTA'
                  }`}
                />
              </div>
            </Anchor>
          )}
        </div>
      )}
    </div>
  )
}

export default CallToAction
