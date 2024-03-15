import React from 'react'

import ModalMenu from '../../molecules/modal-menu/modal-menu'

import ContainerModalMenu from '../../molecules/contianer-modal-menu/container-modal-menu'
import './button-open-modal.scss'

const ButtonOpenModal = props => {
  const colorShow = props.tittle === 'Explora'
  function closeModal() {
    props.eventClose(false)
  }

  return (
    <div
      id={props.tittle.split(' ')[0]}
      onMouseEnter={() => {
        let finaltitle = props.idIcon
        props.overModal(true, true, props.idIcon, finaltitle)
      }}
      onMouseLeave={() => {
        let finaltitle = -1
        props.overModal(true, false, props.idIcon, finaltitle)
      }}
      className={`peperoni-container-modal ${props.className} ${
        colorShow
          ? `container-buton-open-2 ${props.classGtm}`
          : `container-buton-open-1 ${props.classGtm}`
      }`}
    >
      <ModalMenu
        top={props.top}
        left={props.left}
        isBlue={!colorShow}
        modalIsOpen={props.statusOver}
        closeModal={closeModal}
      >
        <ContainerModalMenu
          titleMainMenu={props.titleMainMenu}
          onToggleModalSalesforce={props.onToggleModalSalesforce}
          tittle={props.tittle}
          items={props.options}
          image={colorShow ? 1 : 2}
          blackTheme={props.blackTheme}
        />
      </ModalMenu>
    </div>
  )
}

export default ButtonOpenModal
