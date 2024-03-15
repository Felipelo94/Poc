import React from 'react'
import Select from 'react-select'
import './select-portafolio.scss'

class SelectPortafolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
    this.onChange = this.props
  }

  findIndexOption(value) {
    const indexOption = this.props.options.findIndex(
      option => option.value === value
    )
    return {
      index: indexOption,
      isFinded: indexOption !== -1
    }
  }

  portafolioSeleccionado = e => {
    this.setState({ name: e.value })
    const configFindIndex = this.findIndexOption(e.value)
    if (configFindIndex.isFinded) {
      this.props.onChange(e, configFindIndex.index)
    }
  }

  customStyles = {
    control: base => ({
      ...base,
      height: 40,
      width: 200,
      minHeight: 40,
      fontSize: 13,
      fontFamily: 'Barlow',
      marginTop: 2,
      border: '1px solid #E2E7ED'
    }),
    singleValue: base => ({
      ...base,
      color: '#626277'
    }),
    option: (base, { isDisabled, isSelected }) => ({
      ...base,
      fontSize: 13,
      fontFamily: 'Barlow',
      color: isDisabled ? '#ccc' : isSelected ? '#ffffff' : '#626277'
    })
  }

  render() {
    const defaultOption = { label: 'PROTECCION RECAUDADOR' }
    const options = this.props.options

    return (
      <div className="form-field field-portafolio">
        <br></br>
        <span className="form-label">
          <span className="Portafolio-title">Portafolios</span>
          <span className="subtitulo-gris">
            Evolución del valor de la unidad
          </span>
        </span>
        <div className="form-input-field">
          <Select
            className="basic"
            id="select-component-select"
            onChange={this.portafolioSeleccionado}
            defaultValue={defaultOption}
            value={this.name}
            options={options}
            styles={this.customStyles}
            theme={theme => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#FAFBFC',
                primary: '#595959'
              }
            })}
          />
        </div>
      </div>
    )
  }
}

export default SelectPortafolio
