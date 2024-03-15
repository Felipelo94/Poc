import React from 'react'
import './button-arrow.scss'
import { ReactComponent as ArrowIcon } from '../../../assets/images/btn-desplegar.svg'
import { sendGaPush } from '../../../utils/classGtmUtil'

const ButtonArrow = props => (
  <div id="container-button-arrow-shadow-container">
    <button
      style={{
        left: props.opened ? '394px' : '6px',
        marginTop: props.opened ? '21px' : '20px'
      }}
      id="container-button-arrow-shadow"
      className={
        !props.opened
          ? ` container-button-arrow-shadow ripple-btn`
          : `container-button-arrow-shadow ripple`
      }
    ></button>
    <div
      id="btn-arrow"
      style={{
        left: props.opened ? '394px' : '6px',
        marginTop: props.opened ? '21px' : '20px'
      }}
      className="container-button-arrow"
      onClick={e => {
        sendGaPush('Canales', 'ClicOficinasDeServicio', 'DesplegableMapa')
        props.openCloseModal()
      }}
      role="presentation"
      onKeyDown={e => {
        props.openCloseModal()
      }}
    >
      <ArrowIcon
        width="64px"
        height="64px"
        className={
          props.opened
            ? 'container-button-arrow-spin-btn'
            : 'container-button-arrow-spin-btn-reverse'
        }
        id="container-button-arrow-spin-btn"
        alt="btn-arrow"
      />
    </div>
  </div>
)

export default ButtonArrow
