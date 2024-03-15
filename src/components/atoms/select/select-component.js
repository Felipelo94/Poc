import React, { useState } from 'react'
import Select, { components } from 'react-select'
import { ReactComponent as ErrorFieldIcon } from '../../../assets/images/error-field.svg'
import { ReactComponent as Dropdown } from '../../../assets/images/dropdown-select.svg'
import './select.scss'

const SelectComponent = ({
  dataOptions,
  className,
  customStyles,
  handleChange,
  value,
  id,
  placeHolder,
  label,
  mandatory,
  customStylesError,
  isSearchable = false,
  selectNative = false,
  name
}) => {
  const [error, setError] = useState(false)

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [showData, setShowData] = useState(dataOptions)

  const validateBlur = event => {
    if (event) {
      setError(false)
    } else {
      setError(true)
    }
  }

  const handleSuggestions = e => {
    if (e !== '') {
      setMenuIsOpen(true)
      setShowData(
        dataOptions.filter(
          item => item.label.toUpperCase().indexOf(e.toUpperCase()) >= 0
        )
      )
    } else {
      setMenuIsOpen(false)
      setShowData(dataOptions)
    }
  }

  const DropdownIndicator = props => {
    const { menuIsOpen: newMenuIsOpen } = props.selectProps

    return (
      <components.DropdownIndicator
        {...props}
        className={newMenuIsOpen ? '' : 'selected'}
      >
        <Dropdown />
      </components.DropdownIndicator>
    )
  }

  const labelWithMandatory = mandatory ? '*' : ''
  return (
    <div
      id={id ?? 'SelectComponent-container'}
      className={'SelectComponent-container-active'}
    >
      {label && (
        <section className="SelectComponent-container__box">
          <label for={name} className="SelectComponent-container__label">
            {`${label}${labelWithMandatory}`}
          </label>
        </section>
      )}
      {selectNative && isSearchable ? (
        <>
          <div className="Autocomplete-container">
            <input
              className="Autocomplete-container__input-select SelectComponent-container"
              type="text"
              placeholder={placeHolder}
              onChange={e => handleSuggestions(e.target.value)}
            />
            <button
              type="button"
              className="Autocomplete-container__select-arrow"
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              <i
                className={`${
                  !menuIsOpen ? 'fa fa-chevron-down icon' : 'fa fa-chevron-up'
                } `}
              ></i>
            </button>
          </div>
          <ul
            className={`Autocomplete-container__list${
              menuIsOpen ? '--active' : '--inactive'
            }`}
          >
            {menuIsOpen && showData.length > 0
              ? showData.map(item => <li>{item.label}</li>)
              : menuIsOpen && <li>No se encontraron resultados</li>}
          </ul>
        </>
      ) : (
        selectNative && (
          <select
            className="SelectComponent-container"
            id="select-component-select"
            onChange={selectedOption => {
              handleChange(selectedOption)
              validateBlur(
                selectedOption ? selectedOption.target.value : undefined
              )
              setMenuIsOpen(false)
            }}
          >
            <option value="" disabled hidden selected>
              {placeHolder ? placeHolder : ''}
            </option>
            {showData.map(item => (
              <option value={item.contentful_id}>{item.label}</option>
            ))}
          </select>
        )
      )}

      <Select
        className={className}
        id="select-component-select"
        placeholder={placeHolder ? placeHolder : 'Escribe tu ciudad aquí'}
        value={value}
        components={{ DropdownIndicator }}
        name={name ? name : null}
        isSearchable={isSearchable}
        onChange={selectedOption => {
          handleChange(selectedOption)
          validateBlur(selectedOption ? selectedOption.value : undefined)
          setMenuIsOpen(false)
        }}
        onKeyDown={event => {
          if (event.keyCode === 13) setMenuIsOpen(true)
        }}
        onClick={() => {
          setMenuIsOpen(true)
        }}
        onFocus={() => {
          setMenuIsOpen(true)
        }}
        onBlur={() => {
          setMenuIsOpen(false)
        }}
        openMenuOnClick={true}
        options={dataOptions}
        styles={!error ? customStyles : customStylesError}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: '#FAFBFC',
            primary: '#0033A0'
          }
        })}
      />
      {error && mandatory && (
        <p className="d-flex SelectComponent-container__error-message">
          <ErrorFieldIcon
            style={{ marginRight: 4.67 }}
            height="16.67px"
            width="16.67px"
            alt="img-error"
          />
          <span className={'input-container-label-error'}>
            {`${label} no debe estar vacío`}
          </span>
        </p>
      )}
    </div>
  )
}

export default SelectComponent
