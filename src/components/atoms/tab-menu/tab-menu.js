import React from 'react'
import { useCurrentWidth } from 'react-socks'
import { scaleText, SCALE_SIZE_15PX } from '../../../utils/scaleText'
import Anchor from '../anchor/anchor'
import './tab-menu.scss'

export default function TabMenu({
  data,
  active,
  setItemActive,
  accessibility,
  close
}) {
  const width = useCurrentWidth()
  return (
    <>
      {data.map((x, i) => {
        return (
          <>
            <Anchor
              href={x.url}
              id="link-tab-ofice"
              className={'tab-link ' + x.gtmTag}
            >
              <div
                className={'tab-modal-container ' + x.gtmTag}
                id="tab-modal-container"
                onMouseOver={() => {
                  if (width > 768) {
                    setItemActive(i)
                  }
                }}
                onMouseLeave={() => {
                  if (width > 768) {
                    setItemActive(null)
                  }
                }}
                onClick={() => {
                  setItemActive(i)
                }}
              >
                <div
                  className={'tab-modal-container-tab ' + x.gtmTag}
                  id="tab-modal-container-tab"
                >
                  <div
                    className={
                      i === active
                        ? `tab-modal-container-tab-image-active ${x.gtmTag}`
                        : `tab-modal-container-tab-image-inactive ${x.gtmTag}`
                    }
                    id="tab-modal-container-tab-image"
                    style={{ marginRight: 10 }}
                  >
                    <img
                      src={i === active ? x.imageactive : x.imageinactive}
                      className={x.gtmTag}
                      alt={x.alt}
                      title={x.titleImg}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: scaleText(
                        accessibility.fontSize,
                        SCALE_SIZE_15PX,
                        1.5
                      ).fontSize
                    }}
                    className={
                      i === active
                        ? `tab-modal-container-tab-tile-active ${x.gtmTag}`
                        : `tab-modal-container-tab-tile-inactive ${x.gtmTag}`
                    }
                    id="tab-modal-container-tab-title"
                  >
                    <span className={x.gtmTag}>{x.titulo}</span>
                  </div>
                </div>
              </div>
            </Anchor>
            <div />
          </>
        )
      })}
      {close && (
        <div className="tab-modal-container__button-container">
          <button className="tab-modal-container__button" onClick={close}>
            Omitir
          </button>
        </div>
      )}
    </>
  )
}
