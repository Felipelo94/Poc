import React from 'react'
import './error.scss'
import Button from '../../atoms/button/button'
import Anchor from '../../atoms/anchor/anchor'

export default function Error({ title, message, callToAction, image }) {
  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'
  return (
    <div className="error-container" id="error-container">
      <div className="error-container-title" id="error-container-title">
        <span>{title}</span>
      </div>
      <div className="error-container-message" id="error-container-message">
        <span>{message}</span>
      </div>
      <div
        className="error-container-call-to-action gtmInfoNoDispIrProte"
        id="error-container-call-to-action"
      >
        <Anchor
          href={prefix}
          id="cerror-container-call-to-action-link"
          className="error-container-call-to-action-link gtmInfoNoDispIrProte"
        >
          {callToAction ? (
            <Button
              classGtm="gtmInfoNoDispIrProte"
              title="Ir a proteccion.com"
              className="primary"
            />
          ) : null}
        </Anchor>
      </div>
      <div className="error-container-image" id="error-container-image">
        <img
          className="error-container-image-value"
          id="error-container-image-value"
          src={image}
          alt="image-de-error"
        />
      </div>
    </div>
  )
}
