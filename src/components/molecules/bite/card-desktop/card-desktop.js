import React, { useState } from 'react'
import {
  getSizeScreen,
  getSizeScreenClass
} from '../../../../utils/handleResize'
import { getFormat } from '../../../../utils/stringUtil'
import './card-desktop.scss'
import { ReactComponent as InfoIcon } from '../../../../assets/images/icons/info-small.svg'
import Tooltip from '../../../atoms/tooltip/tooltip'

export default function CardDesktop({ data, title, icon, formatInput }) {
  const [showInfo, setShowInfo] = useState(false)
  const [indexActivo, setIndexActivo] = useState(null)
  return (
    <React.Fragment>
      <div id="card-desktop-container" className="card-desktop-container">
        <div
          id="card-desktop-container-title"
          className="card-desktop-container-title"
        >
          {icon}
          <span style={{ marginLeft: 8 }}>{title}</span>
        </div>

        <div
          id="card-desktop-container-aporte"
          className="card-desktop-container-aporte"
        >
          {data.map((items, i) => {
            return (
              <React.Fragment>
                <div
                  id="card-desktop-container-aporte-div"
                  className="card-desktop-container-aporte-div"
                  style={
                    i === 0 && getSizeScreen() > 1024
                      ? { marginRight: 113 }
                      : {}
                  }
                >
                  <div
                    id="card-desktop-container-aporte-title"
                    className="card-desktop-container-aporte-title"
                  >
                    <span
                      style={getSizeScreen() < 1024 ? { marginRight: 6 } : {}}
                    >
                      {items.title}
                    </span>
                    {items.titleTwo ? (
                      <span className="card-desktop-container-aporte-title-two">
                        {`${getFormat(parseInt(items.titleTwo), 'currency')}`}
                      </span>
                    ) : null}
                  </div>
                  <div
                    id="card-desktop-container-aporte-subtitle"
                    className="card-desktop-container-aporte-subtitle"
                    style={{
                      position: 'relative'
                    }}
                  >
                    <span
                      style={{
                        marginRight: 13,
                        maxWidth: items.style === 2 ? 248 : ''
                      }}
                    >
                      {items.subtitle}
                    </span>
                    <div
                      id="container-result-operation-icon"
                      style={{ cursor: 'pointer' }}
                      role="presentation"
                      onMouseOver={() => {
                        if (getSizeScreenClass() > 1024) {
                          setShowInfo(true)
                          setIndexActivo(i)
                        }
                      }}
                      onMouseOut={() => {
                        if (getSizeScreenClass() > 1024) {
                          setShowInfo(false)
                          setIndexActivo(null)
                        }
                      }}
                      onBlur={() => {
                        if (getSizeScreenClass() > 1024) {
                          setShowInfo(false)
                          setIndexActivo(null)
                        }
                      }}
                      onClick={() => {
                        if (getSizeScreenClass() <= 1024) {
                          setShowInfo(!showInfo)
                          setIndexActivo(indexActivo !== i ? i : null)
                        }
                      }}
                      onFocus={() => {
                        if (getSizeScreenClass() > 1024) {
                          setShowInfo(true)
                          setIndexActivo(i)
                        }
                      }}
                      onKeyDown={() => {
                        if (getSizeScreenClass() <= 1024) {
                          setShowInfo(!showInfo)
                          setIndexActivo(indexActivo !== i ? i : null)
                        }
                      }}
                    >
                      <InfoIcon />
                    </div>
                    {(getSizeScreen() > 1024 &&
                      showInfo &&
                      indexActivo === i) ||
                    (getSizeScreen() <= 1024 && indexActivo === i) ? (
                      <Tooltip
                        styleText={{ padding: 8, width: 141 }}
                        text={items.tooltip}
                        style={
                          getSizeScreen() <= 1024
                            ? items.positionMobile
                            : items.position
                        }
                      />
                    ) : null}
                  </div>
                  <div
                    id="card-desktop-container-aporte-value"
                    className="card-desktop-container-aporte-value"
                    style={{
                      color: items.style === 1 ? '#626277' : '#0033A0',
                      marginBottom:
                        i === 0 && items.style === 1 && getSizeScreen() < 1024
                          ? 24
                          : 0
                    }}
                  >
                    <span>{`${getFormat(
                      parseInt(items.value),
                      formatInput
                    )}`}</span>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}
