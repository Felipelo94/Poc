import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DEFAULT_COLORS_RANGE_TRACK } from '../../../const/dictionary/general-const'
import { getTrackBackground, Range } from 'react-range'
import { getFormat } from '../../../utils/stringUtil'
import './input-range.scss'

const InputStyle = styled.input`
  border: ${props =>
    props.theme.colors ? props.theme.colors.input.border : null} !important;
  background: ${props =>
    props.theme.colors ? props.theme.colors.background : null} !important;
  transition: ${props => props.theme.animation};
  color: ${props =>
    props.theme.colors ? props.theme.colors.input.color : null};

  ::placeholder {
    color: ${props =>
      props.theme.colors ? props.theme.colors.input.color : null};
  }
`

const InputRange = ({
  min,
  max,
  style,
  inputPosition,
  className,
  classGtm,
  input,
  width,
  step,
  onChange,
  formatInput,
  ranngeRequerid: rangeRequired,
  label,
  alert,
  defualtValue,
  isResetInputRange = false,
  isRange = true,
  colorsRangeTrack = DEFAULT_COLORS_RANGE_TRACK,
  changesMax = false
}) => {
  const STEP = step
  const MIN = min
  const MAX = max

  const [age, setAge] = useState(defualtValue ? defualtValue : min)
  const [isChanged, setIsChanged] = useState(false)

  const [valueInput, setValueInput] = useState(
    getFormat(defualtValue ? defualtValue : min, formatInput)
  )

  const [isDragged, setIsDragged] = useState(false)

  useEffect(() => {
    if (!isChanged) {
      setAge(defualtValue ? defualtValue : min)
    }
  })

  useEffect(() => {
    if (isResetInputRange) {
      setAge(defualtValue ? defualtValue : min)
      setValueInput(getFormat(defualtValue ? defualtValue : min, formatInput))
    }
  }, [defualtValue, formatInput, isResetInputRange, min])

  useEffect(() => {
    if (changesMax) {
      setValueInput(getFormat(max, formatInput))
      setAge(max)
    }
  }, [changesMax, max])

  useEffect(() => {
    if (!changesMax) {
      setValueInput(getFormat(min, formatInput))
      setAge(min)
    }
  }, [min, max])

  const onlyNumbers = valueText => {
    const arrayvalue = (valueText + '').split('')
    let valueClean = ''
    for (let i = 0; i < arrayvalue.length; i++) {
      if (!isNaN(arrayvalue[i]) && arrayvalue[i] !== ' ') {
        valueClean = valueClean + arrayvalue[i]
      }
    }
    return valueClean
  }

  const updateTextInput = (val, range) => {
    setIsChanged(true)
    let valueClean = onlyNumbers(val)
    valueClean = valueClean > max ? max : valueClean
    setAge(valueClean)
    onChange(valueClean)
    setValueInput(
      formatInput === 'currency' || range
        ? getFormat(valueClean, formatInput)
        : valueClean
    )
  }

  const onFocusInput = val => {
    if (formatInput !== 'currency') {
      const valueClean = onlyNumbers(val)
      setValueInput(valueClean)
    }
  }

  const onBlurInput = val => {
    if (formatInput !== 'currency') {
      setValueInput(getFormat(onlyNumbers(val), formatInput))
    } else {
      val = onlyNumbers(val)
    }
    if (val < min) {
      setAge(min)
      onChange(min)
      setValueInput(getFormat(min, formatInput))
    } else if (val > max) {
      setAge(max)
      onChange(max)
      setValueInput(getFormat(max, formatInput))
    }
  }

  return (
    <section
      className="ranger-cantainer"
      style={{
        flexDirection: inputPosition ? 'column-reverse' : 'none',
        ...style
      }}
      id="ranger-cantainer"
    >
      {isRange && (
        <Range
          values={[age]}
          className={classGtm}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={values => updateTextInput(values, true)}
          renderTrack={({ props, children }) => (
            <button
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              id="range-range-container"
              className={`${
                !rangeRequired || isDragged
                  ? 'range-range-container-active'
                  : ''
              } ${classGtm} range-range-container`}
              style={{
                ...props.style,
                height: '36px',
                display: 'flex',
                maxWidth: width ? width : '100%',
                width: '100%',
                marginRight: inputPosition ? '0px' : '32px',
                border: 0,
                background: 'none'
              }}
            >
              <div
                ref={props.ref}
                className={classGtm}
                style={{
                  height: '2px',
                  width: '100%',
                  maxWidth: '358px',
                  borderRadius: '1px',
                  marginLeft: '5px',
                  background: getTrackBackground({
                    values: [age],
                    colors: colorsRangeTrack,
                    min: MIN,
                    max: MAX
                  })
                }}
              >
                {children}
              </div>
            </button>
          )}
          renderThumb={({ props, isDragged }) => {
            setIsDragged(isDragged)
            const styleInput = {
              ...props.style,
              height: '20px',
              width: '20px',
              borderRadius: '50%',
              backgroundColor: '#FAFBFC',
              border: '2px solid #E2E7ED',
              display: 'flex',
              boxSizing: 'border-box',
              justifyContent: 'center',
              alignItems: 'center'
            }
            return (
              <div className={classGtm} {...props} style={styleInput}>
                <div className={classGtm} {...props} style={styleInput} />
              </div>
            )
          }}
        />
      )}
      {input && (
        <div
          className="d-flex flex-column align-items-start"
          style={{
            width: inputPosition ? '100%' : '60px',
            marginRight: inputPosition ? '0px' : '32px'
          }}
        >
          {label && (
            <label className="button-range-container-label">{label}</label>
          )}
          <InputStyle
            type="text"
            autocomplete="off"
            value={valueInput}
            onFocus={e => onFocusInput(e.target.value)}
            onChange={e => updateTextInput(e.target.value, false)}
            onBlur={e => onBlurInput(e.target.value)}
            min={min}
            max={max}
            style={{
              width: inputPosition ? '100%' : '60px',
              marginBottom: inputPosition ? (!alert ? '18px' : '4px') : '0px'
            }}
            className={
              'inputName button-range-container ' +
              (className ? className : '') +
              (' ' + classGtm)
            }
            id={'button-range-container-' + (label ? label : '')}
            pattern="[0-9]*"
            minLength="3"
          />
          {alert && (
            <div className="button-range-container-alert">
              <span>{alert}</span>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default InputRange
