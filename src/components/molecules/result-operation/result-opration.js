import React, { useState } from 'react'

import { ReactComponent as InfoIcon } from '../../../assets/images/incon-info.svg'
import { getSizeScreen, getSizeScreenClass } from '../../../utils/handleResize'
import Tooltip from '../../atoms/tooltip/tooltip'
import './result-opration.scss'

export default function ResultOpration({
  title,
  toottipText,
  value,
  className
}) {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div
      id={'container-result-operation'}
      className={'container-result-operation ' + className}
    >
      <div className="container-result-operation-header">
        <h4 className="container-result-operation-title">{title}</h4>
        <div
          id="container-result-operation-icon"
          style={{ cursor: 'pointer' }}
          onMouseOut={() => {
            setShowInfo(false)
          }}
          onMouseOver={() => {
            setShowInfo(true)
          }}
          onClick={() => {
            if (getSizeScreenClass() <= 1024) {
              setShowInfo(!showInfo)
            }
          }}
        >
          <InfoIcon />
        </div>

        {showInfo ? (
          <Tooltip
            styleText={{ padding: 8, width: 141 }}
            positionArrow="left"
            style={
              getSizeScreen() > 1024
                ? {
                    position: 'relative',
                    right: 0,
                    left: 0,
                    top: 0,
                    width: 0,
                    marginLeft: -11
                  }
                : {
                    position: 'relative',
                    right: 0,
                    left: 0,
                    top: 0,
                    marginLeft: 0,
                    width: 0
                  }
            }
            text={toottipText}
          />
        ) : null}
      </div>
      <div
        className="container-result-operation-data"
        id="container-result-operation-data"
      >
        {value}
      </div>
    </div>
  )
}
