import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'
import classNames from 'classnames'
import styled from 'styled-components'

const ContainerButtonStyled = styled.section`
  .button-container__button--secondary {
    background: ${props =>
      props.theme.colors ? props.theme.colors.cardButton : null};
    color: ${props =>
      props.theme.colors ? props.theme.colors.cardButtonText : null} !important;
    border: 1px solid
      ${props =>
        props.theme.colors ? props.theme.colors.cardButtonBorder : null};
  }

  .button-container__button--secondary-dark {
    background: ${props =>
      props.theme.colors ? props.theme.colors.cardButtonInversion : null};
    color: ${props =>
      props.theme.colors
        ? props.theme.colors.cardButtonTextInversion
        : null} !important;
    border: 1px solid
      ${props =>
        props.theme.colors
          ? props.theme.colors.cardButtonBorderInversion
          : null};
  }

  :hover {
    .button-container__button--secondary-dark {
      color: ${props =>
        props.theme.colors
          ? props.theme.colors.cardButtonHoverTextInversion
          : null} !important;
      background: ${props =>
        props.theme.colors
          ? props.theme.colors.cardButtonHoverInversion
          : null};
    }
  }
`

const Button = props => {
  return (
    <ContainerButtonStyled
      className={`button-container ${props.classGtm && props.classGtm}`}
      data-tut={props.dataTut && props.dataTut}
      id={'button-container'}
    >
      <button
        role="presentation"
        {...props}
        style={props.style}
        className={classNames(
          `button-container__button--${props.className} ${
            props.classGtm ? props.classGtm : ''
          }`,
          props.classCustom
        )}
        id={classNames(
          `button-container-${props.id ? props.id : props.className}`,
          props.classCustom
        )}
        onClick={props.onClick}
        onKeyDown={props.onClick}
      >
        {props.iconReverse && (
          <img
            async
            src={props.iconReverse}
            alt="icono del botton"
            className={`button-container__imagen--reverse ${props.classGtm &&
              props.classGtm}`}
            id="imagen-button-reverse"
          />
        )}
        {!props.isnotValidate
          ? props.title
            ? props.title.length > 25
              ? props.title.replace(
                  props.title,
                  props.title.substring(0, 25).concat('...')
                )
              : props.title
            : 'Quiero leerlas'
          : props.title
          ? props.title
          : 'Quiero leerlas'}
        {props.icon.length > 0 && (
          <img
            src={props.icon}
            alt="icono del botton"
            className={`button-container__imagen ${props.classGtm &&
              props.classGtm}`}
            id="imagen-button"
          />
        )}
      </button>
    </ContainerButtonStyled>
  )
}

Button.defaultProps = {
  title: '',
  className: '',
  icon: '',
  classGtm: ''
}

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  classGtm: PropTypes.string
}

export default Button
