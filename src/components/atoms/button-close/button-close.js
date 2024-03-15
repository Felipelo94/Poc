import React from 'react'
import './button-close.scss'
import { ReactComponent as CruzIcon } from '../../../assets/images/cruz.svg'

const ButtonClose = props => (
  <div className="container-button-close" id="container-button-close">
    <div
      className={
        props.blue
          ? 'container-button-close-icon-dark'
          : 'container-button-close-icon'
      }
      id="container-button-close-icon"
    >
      <div
        className="container-button-close-img"
        id="container-button-close-img"
      >
        <button
          className={
            props.activeAnimation ? 'button-shadow ripple' : 'button-shadow'
          }
          id="button-shadow"
        ></button>
        <CruzIcon
          style={{ position: 'absolute', top: '6px', left: '-5px' }}
          width={16}
          height={16}
          className={props.activeAnimation ? 'rotate-btn' : ''}
          alt="btn-close-modal"
          id="btn-close-modal"
        />
      </div>
    </div>
  </div>
)

export default ButtonClose
