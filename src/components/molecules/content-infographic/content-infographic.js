import React, { useState } from 'react'
import './content-infographic.scss'
import CallToAction from '../call-to-action/call-to-action'
import ContentUtil from '../../../utils/ContentUtil'
import { useCurrentWidth } from 'react-socks'
import ModalImage from '../modal-image/modal-image'
import { getSizeScreen, getSizeScreenClass } from '../../../utils/handleResize'
import RichText from '../../../utils/rich-text/rich-text'

const ContentInfographic = ({
  data,
  infographic,
  infographicMobile,
  line,
  user,
  lineGtm,
  type,
  accessibility
}) => {
  const getImageInfographic = (image, imageMobile) => {
    return getSizeScreen() <= 1024
      ? imageMobile === null
        ? image
        : imageMobile
      : image
  }
  const contentUtil = new ContentUtil()
  const [openModal, setOpenModal] = useState(false)
  const clickImage = () => {
    if (getSizeScreenClass() > 1024) {
      if (!openModal) {
        document.documentElement.style.overflowX = 'hidden'
        document.body.style.overflowX = 'hidden'
      } else {
        document.body.style.overflowX = 'scroll'
        document.documentElement.style.overflowX = null
      }
      setOpenModal(!openModal)
    }
  }

  return (
    <div>
      <div
        className="container-content-infographic"
        id="container-content-infographic"
      >
        {data['parrafos']
          ? data.parrafos.map(contenido => {
              return <RichText text={contenido} />
            })
          : null}
      </div>
      <div
        className="container-content-infographic"
        id="container-content-infographic"
      >
        <span className="hidden-lable" id="hidden-lable">
          infographic
        </span>
        <span className="hidden-lable" id="id-infographic">
          {infographic.contentful_id}
        </span>
        <span className="hidden-lable" id="id-infographic-mobile">
          {infographicMobile ? infographicMobile.contentful_id : null}
        </span>
        {getSizeScreenClass() < 9999 ? (
          <div
            id="container-content-infographic-img"
            className="container-content-infographic-img"
          >
            <img
              role="presentation"
              onClick={clickImage}
              onKeyDown={clickImage}
              src={
                getImageInfographic(infographic, infographicMobile)
                  ? getImageInfographic(infographic, infographicMobile).file.url
                  : null
              }
              alt={
                getImageInfographic(infographic, infographicMobile)
                  ? getImageInfographic(infographic, infographicMobile)
                      .description === ''
                    ? getImageInfographic(infographic, infographicMobile).title
                    : getImageInfographic(infographic, infographicMobile)
                        .description
                  : 'infografico default'
              }
              title={
                getImageInfographic(infographic, infographicMobile)
                  ? getImageInfographic(infographic, infographicMobile).title
                  : ''
              }
              className="container-content-infographic-img-value"
              id={`container-content-infographic-img-value`}
            />
          </div>
        ) : null}
      </div>

      <div
        id="container-content-calltoaction-infographic"
        className="container-content-calltoaction"
      >
        {data.cta ? (
          <CallToAction
            accessibility={accessibility}
            titleContent={data.title}
            descripcion={data.cta.titulo}
            titulo={data.cta.textoButton}
            link={data.cta.url}
            line={line}
            type={type}
            lineGtm={lineGtm}
            user={user}
          />
        ) : null}
      </div>
      {openModal && useCurrentWidth() > 1024 ? (
        <ModalImage
          id="infographic"
          image={infographic.file.url}
          alt={contentUtil.generateAltImage(infographic.file.fileName)}
          close={clickImage}
        />
      ) : null}
    </div>
  )
}
export default ContentInfographic
