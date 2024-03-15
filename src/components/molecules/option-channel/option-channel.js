import React from 'react'
import './option-channel.scss'
import { removeAccents, upperFirst } from '../../../utils/classGtmUtil'
import {
  scaleLine,
  scaleText,
  SCALE_SIZE_16PX,
  SCALE_SIZE_18PX
} from '../../../utils/scaleText'
import Anchor from '../../atoms/anchor/anchor'

export default function OptionChannel({ data, title, accessibility, isApp }) {
  return (
    <div className="option-channel-container" id="option-channel-container">
      <div
        style={{
          fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_18PX, 1)
            .fontSize,
          lineHeight: scaleLine(accessibility.lineSize)
        }}
        id="option-channel-container-text"
        className="option-channel-container-text"
      >
        <span>{title}</span>
      </div>
      <div
        style={{
          fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_16PX, 1)
            .fontSize,
          lineHeight: scaleLine(accessibility.lineSize)
        }}
        id="option-channel-container-call-to-action"
        className="option-channel-container-call-to-action"
      >
        {data.map((item, index) => {
          return (
            <Anchor
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={
                item.texto
                  ? `option-channel-container-call-to-action-item ${item.gtmTag}`
                  : `option-channel-container-call-to-action-item-wtext ${item.gtmTag}`
              }
              id={'option-channel-item-' + index}
              style={{ marginRight: item.texto ? 36 : 0 }}
            >
              <div
                className={
                  item.texto
                    ? `option-channel-container-call-to-action-item-container ${item.gtmTag}`
                    : `option-channel-container-call-to-action-item-wtext-container ${item.gtmTag}`
                }
                id={
                  'option-channel-item-container-' +
                  upperFirst(removeAccents(item.texto))
                }
              >
                {item.texto || isApp ? (
                  <img
                    className={item.gtmTag ? item.gtmTag : null}
                    src={item.image}
                    alt={item.alt ? item.alt : null}
                    title={item.title ? item.title : null}
                    style={{ marginRight: 16 }}
                  />
                ) : null}
                {item.texto ? (
                  <span className={item.gtmTag ? item.gtmTag : null}>
                    {item.texto}
                  </span>
                ) : null}
              </div>
            </Anchor>
          )
        })}
      </div>
    </div>
  )
}
