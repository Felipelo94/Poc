import React from 'react'
import alerta from '../../../assets/images/alerta.png'
import alertaBlue from '../../../assets/images/alertBlue.png'
import finalAlert from '../../../assets/images/final-text.png'
import alertaResponsive from '../../../assets/images/alert-responsive.svg'
import './alert.scss'
import { Breakpoint } from 'react-socks'
import Markdown from 'markdown-to-jsx'
import Button from '../button/button'
import { getSizeScreen } from '../../../utils/handleResize'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  getTypeName,
  removeAccents,
  sendGaPush,
  upperFirst
} from '../../../utils/classGtmUtil'
import useGetUserInfoIndexDBState from './../../../hooks/useGetUserInfoIndexDBState'
import {
  scaleLine,
  scaleText,
  SCALE_SIZE_16PX,
  SCALE_SIZE_22PX
} from '../../../utils/scaleText'
import Anchor from '../anchor/anchor'

export default function Alert({
  text,
  alertBlue,
  nombreCallToActionTextoCierre,
  linkCallToActionTextoCierre,
  isInversion,
  type,
  titleContent,
  lineGtm,
  accessibility,
  isMealMenuAlert = false
}) {
  const userInfo = useGetUserInfoIndexDBState()
  const imgAlert = alertBlue ? alertaBlue : isInversion ? finalAlert : alerta
  const imgAlertResposive = alertBlue ? alertaBlue : alertaResponsive
  const widthScreen = getSizeScreen()

  return (
    <div
      className="container-alert"
      id="container-alert"
      style={{ marginTop: alertBlue ? 48 : 0 }}
    >
      <div
        id="container-alert-image"
        className="container-alert-image"
        style={{ marginBottom: '16px' }}
      >
        <Breakpoint
          customQuery="(max-width: 1024px)"
          className="container-alert-image-res"
        >
          <img
            async
            src={imgAlertResposive}
            alt="imagen de alerta"
            className="container-alert-image-value"
            id="container-alert-image-value"
            style={{ marginRight: '32px' }}
          />
        </Breakpoint>
        <Breakpoint
          customQuery="(min-width: 1025px)"
          className="container-alert-image-no-res"
        >
          <img
            async
            src={imgAlert}
            alt="imagen de alerta"
            id="container-alert-image-value"
            style={{
              marginRight: isInversion ? 24 : null,
              height: isInversion ? 96 : null,
              width: isInversion ? 96 : null
            }}
          />
        </Breakpoint>
      </div>
      <div
        className={
          alertBlue ? 'container-alert-titulo-blue' : 'container-alert-titulo'
        }
        id="container-alert-titulo"
        style={{ color: alertBlue ? '#0033a0' : '#292730' }}
      >
        {alertBlue ? (
          <React.Fragment>
            <Markdown
              style={{
                fontSize: scaleText(
                  accessibility.fontSize,
                  SCALE_SIZE_16PX,
                  1.5
                ).fontSize,
                lineHeight: scaleLine(accessibility.lineSize)
              }}
            >
              {text}
            </Markdown>
            {linkCallToActionTextoCierre && nombreCallToActionTextoCierre && (
              <div style={widthScreen >= 1024 ? {} : { marginTop: '25px' }}>
                <Anchor
                  href={linkCallToActionTextoCierre}
                  onClick={() => {
                    const tittleTransformate = upperFirst(
                      removeAccents(nombreCallToActionTextoCierre)
                    )
                    let gtmAction
                    if (
                      userInfo.type &&
                      userInfo.category &&
                      userInfo.subcategory
                    ) {
                      gtmAction = `Clic${getTypeName(
                        userInfo.type
                      )}${getSubCategoryNameWhenIsPensionAndPerson(
                        userInfo.type,
                        removeAccents(userInfo.category),
                        userInfo.subcategory
                      )}${
                        removeAccents(userInfo.category) === 'Ahorro'
                          ? '-CTA'
                          : '-ContenidosCTA'
                      }-${tittleTransformate}`
                    }
                    if (!gtmAction || type === 'InternaAhorro') {
                      gtmAction = `Clic${type}-${
                        type === 'InternaAhorro' ? 'CTA-' : 'ContenidosCTA-'
                      }${tittleTransformate}`
                    }
                    sendGaPush(
                      userInfo.category
                        ? removeAccents(userInfo.category)
                        : lineGtm,
                      gtmAction,
                      titleContent
                    )
                  }}
                  target="_blank"
                  style={
                    widthScreen >= 1024
                      ? { textDecoration: 'none' }
                      : {
                          textDecoration: 'none',
                          display: 'flex',
                          justifyContent: 'center',
                          paddingRight: '25px'
                        }
                  }
                  className="gtmContenidosCTAOtro"
                >
                  <Button
                    title={nombreCallToActionTextoCierre}
                    className={`secondary gtmContenidosCTAOtro`}
                  />
                </Anchor>
              </div>
            )}
          </React.Fragment>
        ) : (
          <span
            id="container-alert-titulo-value"
            style={{
              fontSize: scaleText(
                accessibility.fontSize,
                !isMealMenuAlert ? SCALE_SIZE_16PX : SCALE_SIZE_22PX,
                1.5
              ).fontSize,
              lineHeight: scaleLine(accessibility.lineSize)
            }}
          >
            <Markdown>{text}</Markdown>
          </span>
        )}
      </div>
    </div>
  )
}
