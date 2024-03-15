import React from 'react'
import styled from 'styled-components'
import './progress-bar.scss'

const ShowProgressBar = props => {
  const { show, value, valuefinal } = props

  if (!show) {
    return null
  }

  return (
    <>
      <div className="progress-container" id="progressContainer">
        <ContainerStyledDiv
          className="progress-container-label"
          id="labelProgress"
        >
          {value} de {valuefinal}
        </ContainerStyledDiv>
        <progress
          id="progress-container-progress"
          value={value * 10}
          max="30"
        />
      </div>
    </>
  )
}

const ContainerStyledDiv = styled.div`
  color: ${props =>
    props.theme.colors
      ? props.theme.colors.modal.titlePerson.color
      : null}!important;
`

const ProgressBar = ({ show, value, valuefinal }) => (
  <ShowProgressBar show={show} value={value} valuefinal={valuefinal} />
)

export default ProgressBar
