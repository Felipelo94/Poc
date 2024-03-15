import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as CloseModalIcon } from '../../../assets/images/close-x.svg'
import logotipoBlanco from '../../../assets/images/logotipo-azul.png'
import logotipoDark from '../../../assets/images/logotipo-claro.png'
import { ReactComponent as LogotipoBlancoMobile } from '../../../assets/images/logo_proteccion_30_años_mobile.svg'
import { ReactComponent as LogotipoBlancoMobileDark } from '../../../assets/images/logo-proteccion_30_años_mobile_dark.svg'
import { Container, Item } from '../../FlexBox/FlexBox'
import { useCurrentWidth } from 'react-socks'
import styled from 'styled-components'
import { connect } from 'react-redux'
import './modal.scss'

const ContainerStyledModal = styled.section`
  .container-modal-content-header {
    background-color: ${props =>
      props.theme.colors ? props.theme.colors.modal.background : null};
    transition: ${props => props.theme.animation};
  }

  box-shadow: ${props =>
    props.theme.colors ? props.theme.colors.modal.box : null}!important;

  .container-home {
    background-color: ${props =>
      props.theme.colors ? props.theme.colors.background : null}!important;
    transition: ${props => props.theme.animation};
  }
  .container-modal-content-body {
    background-color: ${props =>
      props.theme.colors ? props.theme.colors.background : null}!important;
    transition: ${props => props.theme.animation};
  }
`

const H5CloseStyle = styled.h5`
  color: ${props =>
    props.theme.colors
      ? props.theme.colors.menuChannels.titleLineas
      : null} !important;
`

let Modal = props => {
  const {
    animation,
    children,
    style,
    styleBody,
    margin,
    height,
    width,
    image,
    alt,
    close,
    id,
    titte,
    isCosed,
    gtmClose,
    disabledCloseBody,
    isLogo,
    accessibility,
    classGTM
  } = props

  const clickModal = event => {
    if (
      event.target.getAttribute('id') === 'modal-body-' + id &&
      !disabledCloseBody
    ) {
      close()
    }
  }

  return (
    <section className="container-modal" id={`container-modal-${id}`}>
      <ContainerStyledModal
        style={{ margin: margin, height: height, width: width, ...style }}
        className={'container-modal-content ' + (animation ? animation : '')}
      >
        <section
          id={`modal-header-${id}`}
          className="container-modal-content-header"
          style={isLogo ? { padding: '25px 16px' } : { padding: '25px 28px' }}
        >
          <Container style={{ width: '100%' }}>
            {isLogo ? (
              useCurrentWidth() > 1024 ? (
                <figure className="container-modal__figure">
                  <img
                    async
                    className="gtmHomeSupLogoProte"
                    src={
                      accessibility
                        ? accessibility.darkMode
                          ? logotipoDark
                          : logotipoBlanco
                        : logotipoBlanco
                    }
                    alt="Logotipo de Protección, lleva al home principal o el home del producto donde estés logueado"
                    title="Logotipo de Protección"
                    id="Logo-image"
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  />
                </figure>
              ) : accessibility ? (
                accessibility.darkMode ? (
                  <LogotipoBlancoMobileDark
                    className="gtmHomeSupLogoProte"
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    id="Logo-image"
                    alt="Logotipo de Protección, lleva al home principal o el home del producto donde estés logueado"
                    title="Logotipo de Protección"
                  />
                ) : (
                  <LogotipoBlancoMobile
                    className="gtmHomeSupLogoProte"
                    title="Logotipo de Protección"
                    id="Logo-image"
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    alt="Logotipo de Protección, lleva al home principal o el home del producto donde estés logueado"
                  />
                )
              ) : (
                <LogotipoBlancoMobile
                  className="gtmHomeSupLogoProte"
                  alt="Logotipo de Protección, lleva al home principal o el home del producto donde estés logueado"
                  id="Logo-image"
                  style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  title="Logotipo de Protección"
                />
              )
            ) : (
              <>
                {image ? (
                  <Item align-self="center">
                    <figure className="container-modal__figure">
                      <img
                        className="container-modal-content-header-icon"
                        src={image}
                        alt="Ícono de audífonos para teléfono, brinda información de las oficinas de servicio"
                        title="Ícono de Oficinas de Servicio"
                      />
                    </figure>
                  </Item>
                ) : null}
                <Item
                  style={{
                    width: '94%',
                    marginLeft: '20px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <H5CloseStyle
                    id={`title-header-modal-${id}`}
                    className="container-modal-content-header-tittle"
                  >
                    {titte}
                  </H5CloseStyle>
                </Item>
              </>
            )}
            {!isCosed && (
              <Item align-self="center">
                <section
                  id={`btn-modal-close-${id}`}
                  role="presentation"
                  className={`container-modal-content-header-close ${classGTM}`}
                  onClick={close}
                  onKeyDown={close}
                >
                  <CloseModalIcon
                    className={gtmClose ? gtmClose : null}
                    alt={alt}
                  />
                </section>
              </Item>
            )}
          </Container>
        </section>
        <article
          id={`modal-body-${id}`}
          role="presentation"
          onClick={clickModal}
          onKeyDown={clickModal}
          style={styleBody}
          className={`container-modal-content-body ${classGTM}`}
        >
          {children}
        </article>
      </ContainerStyledModal>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    accessibility: state.accesibility
  }
}

Modal = connect(mapStateToProps)(Modal)

Modal.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  titte: PropTypes.string,
  id: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  isCosed: PropTypes.bool
}

export default Modal
