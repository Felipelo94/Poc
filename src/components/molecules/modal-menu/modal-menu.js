import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import './modal-menu.scss'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

const ContainerStyled = styled.div`
  background-color: ${props =>
    props.theme.colors && props.theme.colors.header.menu.background} !important;
  transition: ${props => props.theme.animation};
  filter: ${props =>
    props.theme.colors && props.theme.colors.header.menu.filterBackground};
`

export default function ModalMenu(props) {
  const setWrapperRef = useRef()

  return (
    props.modalIsOpen && (
      <AnimatePresence>
        {props.modalIsOpen && (
          <motion.div
            style={{
              borderRadius: 15,
              backgroundColor: '#fff',
              top: props.top,
              left: props.left,
              right: props.right
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <ContainerStyled
              ref={setWrapperRef}
              id="container-content-modal"
              className="container-content-modal"
              style={{
                width: props.maxWidth,
                bottom: props.bottom,
                float: props.float,
                right: props.float
              }}
            >
              {props.children}
            </ContainerStyled>
          </motion.div>
        )}
      </AnimatePresence>
    )
  )
}

ModalMenu.defaultProps = {
  maxWidth: 200,
  top: 'auto',
  left: 'auto',
  bottom: 'auto',
  right: 'auto',
  float: 'left',
  isBlue: false
}

ModalMenu.propTypes = {
  maxWidth: PropTypes.number,
  top: PropTypes.string,
  left: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
  float: PropTypes.string
}
