import React, { useEffect, useState } from 'react'
import BiteGraph from '../bite/bite-graph/bite-graph'
import './graph.scss'
import descargar from '../../../assets/images/download-cloud.svg'
import archivo from '../../../assets/images/external-link.svg'
import { getCurrentHost } from '../../../utils/redirectUtil'
import { getIdDiv } from '../../../utils/redirect-bread-crumb'
import { sendEventGA } from '../../../utils/classGtmUtil'
import getPortfolioList from '../../../services/stock-chart/stock-service'
import getPortfolioUnitValue from '../../../services/stock-chart/getPortfolioUnitValue'
import SelectPortafolio from '../../atoms/select-portafolio/select-portafolio'
import ComparePortafolio from '../../atoms/multi-check-portafolio/multi-check-portafolio'
import Chartline from '../chart/chart'

export const ElementGraphComponets = ({
  itemsInforme,
  i,
  accessibilityBite
}) => {
  return (
    <BiteGraph
      accessibility={accessibilityBite}
      title={itemsInforme.titulo}
      text={itemsInforme.texto}
      image={i === 0 ? descargar : archivo}
      link={itemsInforme.url}
      textBotton={i === 0 ? 'Descarga el PDF' : 'Ver informe'}
    />
  )
}

export default function Graph({ data, accessibility, line }) {
  let dataNew = []
  let listSeries = []
  const [portfolioList, setPorfolioList] = useState([])
  const [selectedPortfolio, setSelectedPortfolio] = useState({
    value: null,
    label: null
  })
  const [dataSerieAddPortfolio, setDataSerieAddPortfolio] = useState([])
  data.map(itemsInforme => {
    return dataNew.push({
      titulo: itemsInforme.node.titulo,

      texto: itemsInforme.node.textoIntroductorioBite,

      updatedAt: itemsInforme.node.updatedAt,

      url: itemsInforme.node.linkCallToActionInformes
        ? itemsInforme.node.linkCallToActionInformes.linkCallToActionInformes
        : itemsInforme.node.contenido?.urlSeo,

      lineaDeProducto: itemsInforme.node.lineaDeProducto
    })
  })

  dataNew.sort(function(a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt)
  })

  const getDefaultPortfolioUnitValueFunction = () => {
    getPortfolioUnitValue(1).then(resp => {
      setDataSerieAddPortfolio(prevState => {
        return [
          ...prevState,
          { portfolio: 'PROTECCION RECAUDADOR', data: resp }
        ]
      })
      setSelectedPortfolio({ value: 'PROTECCION RECAUDADOR' })
    })
  }

  const comparePortfolio = ev => {
    const stateOptions = [...portfolioList]

    stateOptions[ev.index].checked = stateOptions[ev.index].checked
      ? (stateOptions[ev.index].checked = true)
      : (stateOptions[ev.index].checked = false)

    if (stateOptions[ev.index].checked) {
      getPortfolioUnitValue(ev.id).then(dataUnitValue => {
        setDataSerieAddPortfolio(prevState => {
          return [...prevState, { portfolio: ev.value, data: dataUnitValue }]
        })
      })
    } else {
      setDataSerieAddPortfolio(prevState => {
        return prevState.filter(portfolio => portfolio.portfolio !== ev.value)
      })
    }
  }

  const seleccionarPortafolio = (e, indice) => {
    const stateOptions = [...portfolioList]
    stateOptions[indice].checked = true
    for (let i = 0; i < stateOptions.length; i++) {
      const opt = stateOptions[i]
      if (opt.value !== e.value) {
        opt.checked = false
      }
    }

    getPortfolioUnitValue(e.id).then(dataUnitValue => {
      setSelectedPortfolio({ value: e.value, label: e.value })
      setDataSerieAddPortfolio([{ portfolio: e.value, data: dataUnitValue }])
    })
  }

  useEffect(() => {
    getDefaultPortfolioUnitValueFunction()
    getPortfolioList().then(resp => {
      resp.forEach((portfolio, index) => {
        portfolio.label = portfolio.nombre
        portfolio.indice = index
        portfolio.value = portfolio.nombre
        if (portfolio.id === '1') {
          portfolio.checked = true
        } else {
          portfolio.checked = false
        }
      })
      setPorfolioList(resp)
      if(resp[0]){
        setSelectedPortfolio(resp[0].label)
      }
    })
  }, [])

  return (
    <div className="graph-container" id="graph-container">
      <div className="graph-container-iframe" id="graph-container-iframe">
        <div className="graph-container-iframe-container">
          <SelectPortafolio
            options={portfolioList}
            onChange={seleccionarPortafolio}
          />
          <Chartline
            selectPortfolio={selectedPortfolio}
            dataSerieAddPortfolioArray={dataSerieAddPortfolio}
            className="mt-3 mb-4"
          />
          <ComparePortafolio
            options={portfolioList}
            portafolio={selectedPortfolio.value}
            onChange={comparePortfolio}
            listSeries={listSeries}
            maximumQuantitySelected={4}
            test={true}
          />
        </div>
      </div>

      <div>
        {dataNew.map((itemsInforme, i) => {
          if (i < 2) {
            return (
              <React.Fragment>
                <a
                  href={
                    itemsInforme.url?.includes('https:')
                      ? itemsInforme.url
                      : getCurrentHost() + getIdDiv(itemsInforme.url)
                  }
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                  onClick={() => {
                    sendEventGA(
                      'Inversion',
                      'ClicTarjetaHome',
                      itemsInforme.titulo
                    )
                  }}
                >
                  <ElementGraphComponets
                    accessibilityBite={accessibility}
                    itemsInforme={itemsInforme}
                    i={i}
                  />
                </a>
              </React.Fragment>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}
