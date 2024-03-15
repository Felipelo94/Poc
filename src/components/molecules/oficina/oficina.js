import React, { useEffect } from 'react'
import MapSalesPoint from '../map-sales-point/mapSalesPoint'
import './oficina.scss'
import ServicesLines from '../services-lines/services-lines'
import ContentUtil from '../../../utils/ContentUtil'

let OficinaComponent = ({
  data,
  dataContent,
  IsOpenMenu,
  modal,
  openModal,
  accessibility
}) => {
  const content = new ContentUtil()
  if (dataContent) {
    data = { ...data, allContentfulCanal: dataContent.allContentfulCanal }
  }
  function returnLines() {
    let dataLines = []
    if (data !== undefined) {
      const lines = data.allContentfulCanal.edges
      if (lines.length > 0) {
        const linesService = lines[0].node.descripcion.descripcion
        dataLines = content.removeSpecialCharLines(linesService)
      }
    }
    return dataLines
  }

  useEffect(openModal, [])

  return (
    <div className="container-oficinas">
      {IsOpenMenu && modal}
      <MapSalesPoint accessibility={accessibility} data={data} isTest={true} />
      <ServicesLines accessibility={accessibility} lines={returnLines()} />
    </div>
  )
}

export default OficinaComponent
