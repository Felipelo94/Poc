import PropTypes from 'prop-types'
import React from 'react'
import './letter.scss'

const Letter = ({
  character,
  onClick = () => {},
  id = 'letter',
  isSelected = false,
  isDisabled = false
}) => {
  return (
    <button
      id={`letter-container-${id}`}
      className={`letter-container${
        isSelected ? ' letter-container--selected' : ''
      }${isDisabled ? ' letter-container--disabled' : ''}`}
      onClick={() => {
        onClick(character)
      }}
      disabled={isDisabled}
    >
      <span className={`letter${isSelected ? ' letter--selected' : ''}`}>
        {character}
      </span>
    </button>
  )
}

Letter.propTypes = {
  character: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default Letter
