import React from 'react'
import ReactDOM from 'react-dom'

let modalRoot =
  typeof document !== 'undefined' ? document.getElementById('modal') : null
if (!modalRoot && typeof document !== 'undefined') {
  modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal')
  document.body.appendChild(modalRoot)
}

const ModalPortal = ({ children }) => {
  const portalRoot = document.getElementById('modal')

  if (portalRoot) {
    return ReactDOM.createPortal(children, portalRoot)
  } else {
    return null
  }
}

export default ModalPortal
