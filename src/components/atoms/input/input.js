import React, { useState } from 'react'
import { validate } from 'email-validator'
import './input.scss'
import { ReactComponent as ErrorFieldIcon } from '../../../assets/images/error-field.svg'
import { onlyNumbers, getFormat } from '../../../utils/stringUtil'

const Input = props => {
  const {
    id,
    label,
    value,
    max,
    setValue,
    className,
    classGtm,
    readOnly,
    onlyNumber,
    format,
    icon,
    maxLength,
    minLength,
    email,
    mandatory,
    name,
    hidden,
    type,
    min
  } = props

  const [valueText, setValueText] = useState()
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState()
  const [borderColor, setBorderColor] = useState(null)

  const updateTextInput = event => {
    const valueChanged = event.target.value
    let valueClean
    if (onlyNumber) {
      valueClean = onlyNumbers(valueChanged)
      valueClean = valueClean > max ? max : valueClean
    } else {
      valueClean = valueChanged
    }
    setValue(valueClean)
    let valueFormat =
      format === 'currency' ? getFormat(valueClean, format) : valueClean
    valueFormat =
      format === 'currency' ? valueFormat.replace('$', '') : valueFormat
    setValueText(valueFormat)
    if (mandatory) {
      validateMandatory(valueClean)
    }
  }

  const validateMandatory = text => {
    if (text.length > 0) {
      setError(false)
      setErrorMsg('')
      setBorderColor(null)
    } else {
      setError(true)
      setErrorMsg(label + ' no debe estar vacío')
      setBorderColor('#E62323')
    }
  }

  const validateEmail = text => {
    if (validate(text)) {
      setError(false)
      setErrorMsg('')
      setBorderColor(null)
    } else {
      setError(true)
      setErrorMsg('Correo electrónico no es valido')
      setBorderColor('#E62323')
    }
  }

  const validateValue = event => {
    const valueValidate = event.target.value
    if (mandatory) {
      validateMandatory(valueValidate)
    }
    if (email) {
      validateEmail(valueValidate)
    }
  }

  const validateBlur = event => {
    const blurValue = event.target.value

    if (mandatory) {
      validateMandatory(blurValue)
    }

    if (email) {
      validateEmail(blurValue)
    }

    if (minLength) {
      if (minLength > blurValue.length) {
        setError(true)
        setErrorMsg(label + ' acepta mínimo ' + minLength + ' caracteres')
        setBorderColor('#E62323')
      } else {
        setError(false)
        setErrorMsg('')
        setBorderColor(null)
      }
    }
  }

  const handleChange = event => {
    const valueChanged = event.target.value
    let valuefinal = onlyNumber
      ? onlyNumbers(valueChanged)
      : valueChanged.trim()
    valuefinal = valuefinal > max ? max : valuefinal
    setValue(valuefinal)
    if (mandatory) {
      validateMandatory(valuefinal)
    }
    if (email) {
      validateEmail(valuefinal)
    }
  }

  return (
    <section
      id={'input-' + id}
      style={hidden ? { display: 'none' } : {}}
      className={
        'input-container ' + (classGtm ? classGtm : '') + ' ' + className
      }
    >
      {label && (
        <label className="input-container-label">
          {label + (mandatory ? '*' : '')}
        </label>
      )}
      <input
        id={'ipnut-edit-' + id}
        maxLength={maxLength ? maxLength : '250'}
        aria-label={name ? name : null}
        value={format ? valueText : value}
        onChange={format ? updateTextInput : handleChange}
        onFocus={validateValue}
        onBlur={validateBlur}
        style={{ paddingLeft: icon ? 38 : 12, borderColor: borderColor }}
        type={type ? type : 'text'}
        className={
          'input-container-input ' + (classGtm ? classGtm : ' ' + classGtm)
        }
        autoComplete="off"
        readOnly={readOnly}
        name={name ? name : null}
        min={min}
        tabIndex="0"
      />
      {icon && (
        <img
          className={
            'input-container-icon ' + (classGtm ? classGtm : ' ' + classGtm)
          }
          src={icon}
        />
      )}
      {error && (
        <p className="d-flex" style={{ marginTop: 8 }}>
          <ErrorFieldIcon
            style={{ marginRight: 4.67 }}
            height="16.67px"
            width="16.67px"
            alt="img-error"
          />
          <span className={'input-container-label-error'}>{errorMsg}</span>
        </p>
      )}
    </section>
  )
}

export default Input
