import React, { Fragment, useEffect, useState } from 'react'
import { disableBody, enableBody } from '@utils/body-scroll-lock'
import { Breakpoint } from 'react-socks'
import Image from '../../../assets/images/Capa 2-user.png'
import ImageInersion from '../../../assets/images/Group 1646.png'
import { get } from '../../../services/service-general/service-general'
import { sendGaPush } from '../../../utils/classGtmUtil'
import {
  getHeadingsContentSolutionById,
  returnProductLeadSource
} from '../../../utils/content-solutions-utils'
import { getSizeScreen, getSizeScreenClass } from '../../../utils/handleResize'
import {
  scaleLine,
  scaleText,
  SCALE_SIZE_15PX,
  SCALE_SIZE_30PX
} from '../../../utils/scaleText'
import Alert from '../../atoms/alert/alert'
import Modal from '../../atoms/modal/modal'
import Video from '../../atoms/video/video'
import CallToAction from '../call-to-action/call-to-action'
import MealMobile from '../meal-mobile/meal-mobile'
import Meal from '../meal/meal'
import Reserva from '../simulator/reserva/reserva'
import StepByStepMobile from '../step-by-step-mobile/step-by-step-mobile'
import StepByStep from '../step-by-step/step-by-step'
import './content-solutions.scss'

export default function Contentsolutions({
  paragraphs,
  data,
  alertText,
  line,
  descrpcionCorta,
  nombreCallToActionTextoCierre,
  linkCallToActionTextoCierre,
  idContent,
  user,
  type,
  lineGtm,
  accessibility
}) {
  const text = alertText.textoCierre
  const [IsOpenMenu, setIsOpenMenu] = useState(false)
  const [productLeadSource, setProductLeadSource] = useState('')
  const [utmValue, setUtmValue] = useState('')

  useEffect(() => {
    const { value } = returnProductLeadSource(window.location.pathname)
    setProductLeadSource(value)
  }, [])

  useEffect(() => {
    checkUtmActive()
  }, [window.location.pathname])

  const checkUtmActive = async () => {
    switch (
      window.location.pathname.split('/').length === 5
        ? window.location.pathname.split('/')[3]
        : window.location.pathname.split('/')[4]
    ) {
      case 'mi-reserva':
        await setUtmValue(`${process.env.PROSPECTS_UTM_URL}MiReserva`)
        break

      case 'proteccion-hijos':
        await setUtmValue(`${process.env.PROSPECTS_UTM_URL}ProteccionHijos`)
        break

      case 'mas-proteccion':
        await setUtmValue(`${process.env.PROSPECTS_UTM_URL}MasProteccion`)
        break

      case 'siempre-activo':
        await setUtmValue(`${process.env.PROSPECTS_UTM_URL}SiempreActivo`)
        break

      case 'ahorro-100-digital':
        await setUtmValue(`${process.env.PROSPECTS_UTM_URL}AhorroDigital`)
        break

      case 'proteccion-comfama-construccion-futuro':
        await setUtmValue(`${process.env.PROSPECTS_UTM_URL}Comfama`)
        break

      case 'decisiones':
        await setUtmValue(`${process.env.PROSPECTS_UTM_URL}InversionDecisiones`)
        break

      case 'proteccion-hijos-empresas':
        await setUtmValue(
          `${process.env.PROSPECTS_UTM_URL}ProteccionHijosEmpresas`
        )
        break

      case 'mas-proteccion-colaboradores':
        await setUtmValue(
          `${process.env.PROSPECTS_UTM_URL}MasProteccionColaboradores`
        )
        break

      default:
        await setUtmValue('')
    }
  }

  const openModal = () => {
    disableBody()
    setIsOpenMenu(true)
    if (getSizeScreenClass() <= 1024) {
      document.documentElement.style.overflowX = 'hidden'
      document.body.style.overflowX = 'hidden'
    }
  }

  const closeModal = () => {
    enableBody()
    setIsOpenMenu(false)
    sendGaPush('Ahorro', 'ClicFormulario-' + data.title, 'Cerrar')
    if (getSizeScreenClass() <= 1024) {
      document.body.style.overfloy = 'scroll'
      document.documentElement.style.overflow = null
    }
  }

  useEffect(() => {
    if (IsOpenMenu) {
      const element = document.getElementById('ipnut-edit-salesforce-product')
      if (element) {
        element.focus()
      }
    }
  }, [IsOpenMenu])

  const modal = (
    <Modal
      close={closeModal}
      styleBody={{ height: 'auto' }}
      id="modal-salesforce"
      animation={IsOpenMenu ? 'move' : undefined}
      titte={''}
      image={null}
      height={getSizeScreen() <= 1024 ? '100%' : '775px'}
      alt=""
      width={getSizeScreen() <= 1024 ? '100%' : '787px'}
      margin={getSizeScreen() <= 1024 ? '' : ' 72px 0px '}
      disabledCloseBody={true}
      classGTM={`gtmAgendar-${data.title}`}
    >
      {utmValue !== '' && (
        <iframe
          src={utmValue}
          width={getSizeScreen() <= 1024 ? '100%' : '670px'}
          height={getSizeScreen() <= 624 ? '1080px' : '695px'}
        />
      )}
    </Modal>
  )
  return (
    <Fragment>
      <div
        className="content-solutions-container"
        id="content-solutions-container"
      >
        {IsOpenMenu && modal}
        <div
          className="content-solutions-container-info"
          id="content-solutions-container-info"
        >
          <div
            style={{
              fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1.5)
                .fontSize,
              lineHeight: scaleLine(accessibility.lineSize),
              color: lineGtm === 'Inversión' ? '#626277' : '#292730'
            }}
            className="content-solutions-container-info-descripcion-corta"
            id="content-solutions-container-info-descripcion-corta"
          >
            <span>{descrpcionCorta}</span>
          </div>
        </div>
        <CallToAction
          accessibility={accessibility}
          descripcion={''}
          titulo={data.cta2 ? data.cta2.textoButton : null}
          link={data.cta2 ? data.cta2.url : null}
          line={line}
          lineGtm={lineGtm}
          type={type}
          titleContent={data.title}
          callToActionSuperior={true}
          styleCallToActionSupeior={
            getSizeScreen() >= 1024
              ? {
                  marginLeft: '130px',
                  marginRight: '130px',
                  marginBottom: '34px'
                }
              : { marginLeft: '16px', marginBottom: '34px' }
          }
        />
        {data.video && (
          <div
            className="content-solutions-container-video"
            id="content-solutions-container-video"
            style={{
              margin: data.video
                ? data.video.length > 1
                  ? '0px 130px'
                  : '0px 196px'
                : 0
            }}
          >
            <Video
              get={get}
              titleContent={data.title}
              type={'InternaAhorro'}
              lineGtm={lineGtm}
              line={lineGtm}
              videoData={data.video}
            />
          </div>
        )}
        <div
          className="content-solutions-container-title"
          id="content-solutions-container-title"
          style={{
            marginBottom:
              paragraphs.length > 0 && paragraphs.length < 5 ? 90 : 16,
            fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_30PX, 1.5)
              .fontSize,
            lineHeight: scaleLine(accessibility.lineSize),
            color: lineGtm === 'Inversión' ? '#292730' : '#0033a0'
          }}
        >
          <span>{getHeadingsContentSolutionById(idContent).subtitle}</span>
        </div>

        {paragraphs.length > 0 && paragraphs.length < 5 ? (
          <div
            className="content-solutions-container-step-by-step"
            id="content-solutions-container-meal"
          >
            <Breakpoint customQuery="(max-width: 1024px)">
              <StepByStepMobile
                accessibility={accessibility}
                type={'InternaAhorro'}
                lineGtm={lineGtm}
                line={line ? line : lineGtm}
                data={data}
                notData={true}
              />
            </Breakpoint>
            <Breakpoint customQuery="(min-width: 1025px)">
              <StepByStep
                type={'InternaAhorro'}
                accessibility={accessibility}
                lineGtm={lineGtm}
                line={line ? line : lineGtm}
                data={data}
                notData={true}
              />
            </Breakpoint>
          </div>
        ) : (
          <div
            className="content-solutions-container-meal"
            id="content-solutions-container-meal"
          >
            <Breakpoint customQuery="(max-width: 1024px)">
              <MealMobile
                type={'InternaAhorro'}
                accessibility={accessibility}
                line={lineGtm}
                lineGtm={lineGtm}
                data={data}
                alertText={alertText}
                notData={true}
              />
            </Breakpoint>
            <Breakpoint customQuery="(min-width: 1025px)">
              <Meal
                type={'InternaAhorro'}
                accessibility={accessibility}
                line={lineGtm}
                lineGtm={lineGtm}
                data={data}
                alertText={alertText}
                notData={true}
              />
            </Breakpoint>
          </div>
        )}
        {text && (
          <div
            className="content-solutions-container-alert"
            id="content-solutions-container-alert"
          >
            <Alert
              accessibility={accessibility}
              text={text}
              type={'InternaAhorro'}
              lineGtm={lineGtm}
              alertBlue={lineGtm !== 'Inversión'}
              titleContent={data.title}
              nombreCallToActionTextoCierre={nombreCallToActionTextoCierre}
              linkCallToActionTextoCierre={linkCallToActionTextoCierre}
              isInversion={lineGtm === 'Inversión'}
            />
          </div>
        )}
        {(idContent === '12YCBJYldaKys0PKYZ1prN' && !line) ||
        line === '18bfSEqhamhiOHQeS35Wpw' ? (
          <Reserva
            accessibility={accessibility}
            type={type}
            line={lineGtm}
            lineGtm={lineGtm}
            close={closeModal}
          />
        ) : null}
        {data.cta
          ? data.cta.titulo && (
              <div
                className="content-solutions-container-call-to-action"
                id="content-solutions-container-call-to-action"
              >
                <div
                  className="content-solutions-container-call-to-action-text"
                  id="content-solutions-container-call-to-action-text"
                >
                  <CallToAction
                    accessibility={accessibility}
                    descripcion={data.cta.titulo}
                    titulo={data.cta.textoButton}
                    link={data.cta.url}
                    type={'InternaAhorro'}
                    line={line ? line : lineGtm}
                    lineGtm={lineGtm}
                    titleContent={data.title}
                    clickExternal={
                      data.cta.url === null ? openModal : undefined
                    }
                    user={user}
                  />
                </div>
                <div
                  className="content-solutions-container-call-to-action-image"
                  id="content-solutions-container-call-to-action-image"
                >
                  <img
                    src={
                      line === 'Inversión' || lineGtm === 'Inversión'
                        ? ImageInersion
                        : Image
                    }
                    alt="imagen del call to action"
                  />
                </div>
              </div>
            )
          : null}
      </div>
    </Fragment>
  )
}
