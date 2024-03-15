import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import './multi-check-portafolio.scss'
import Modal from 'react-modal'

const ComparePortafolio = props => {
  const [change, setChange] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleCloseOrOpenModal = () => {
    setShowModal(!showModal)
  }

  const countPortfoliosChecked = () => {
    let count = 0
    for (const portfolio of props.options) {
      if (portfolio.checked === true) count += 1
    }
    return count
  }

  const handleChange = (e, i) => {
    if (
      countPortfoliosChecked() < props.maximumQuantitySelected ||
      props.options[i].checked
    ) {
      props.options[i].checked = !props.options[i].checked
      setChange(!change)
      props.onChange({
        value: props.options[i].value,
        index: i,
        id: props.options[i].id
      })
      return
    }
  }

  const isDisabledChecked = typeStr => {
    return props.portafolio === typeStr
  }

  const options = props.options
  return (
    <div id="control-compare" className="control-compare">
      <button
        className="button-compare"
        onClick={() => handleCloseOrOpenModal()}
        data-testid="button-compare"
      >
        Comparar Portafolios
      </button>

      {props.test && (
        <Modal
          isOpen={showModal}
          onRequestClose={handleCloseOrOpenModal}
          toggle="control-compare"
          style={{
            overlay: {
              backgroundColor: 'transparent',
              zIndex: '7',
              position: 'static'
            },
            content: {
              width: '80%',
              height: '70%',
              margin: 'auto'
            }
          }}
          parentSelector={() => document.getElementById('control-compare')}
          contentLabel="Minimal Modal Example"
        >
          <button
            className="button-close-modal"
            onClick={() => handleCloseOrOpenModal()}
          >
            X
          </button>

          <span className="Portafolio-title">
            Seleccione los portafolios a comparar
          </span>

          <span className="Portafolio-subtitle">
            (Recuerde que las comparaciones se hacen en términos porcentuales)
          </span>
          <div className="portfolio-list">
            {options.map((option, i) => (
              <div className="portfolio-compare">
                <Checkbox
                  id={'checkbox-' + i}
                  name={option.value}
                  onChange={evt => handleChange(evt, i)}
                  color="primary"
                  size="small"
                  checked={option.checked}
                  disabled={isDisabledChecked(option.value)}
                />

                <span
                  className="name-portfolio-compare"
                  style={{
                    fontFamily: 'Barlow',
                    fontSize: '0.8em'
                  }}
                >
                  {option.label}
                </span>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  )
}

export default ComparePortafolio
