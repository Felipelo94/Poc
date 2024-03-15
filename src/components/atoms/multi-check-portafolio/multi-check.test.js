import React from 'react'
import { mount } from 'enzyme'
import * as am4plugins_rangeSelector from '@amcharts/amcharts4/plugins/rangeSelector'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ComparePortafolio from './multi-check-portafolio'

let options = [
  {
    nombre: 'PROTECCION RECAUDADOR',
    id: '1',
    label: 'PROTECCION RECAUDADOR',
    indice: 0,
    value: 'PROTECCION RECAUDADOR',
    checked: true
  },
  {
    nombre: 'ACCIONES PESOS',
    id: '2',
    label: 'ACCIONES PESOS',
    indice: 1,
    value: 'ACCIONES PESOS',
    checked: true
  },
  {
    nombre: 'ACCIONES ESTADOS UNIDOS',
    id: '4',
    label: 'ACCIONES ESTADOS UNIDOS',
    indice: 2,
    value: 'ACCIONES ESTADOS UNIDOS',
    checked: false
  },
  {
    nombre: 'ACCIONES EUROPA',
    id: '5',
    label: 'ACCIONES EUROPA',
    indice: 3,
    value: 'ACCIONES EUROPA',
    checked: false
  },
  {
    nombre: 'PROTECCION BALANCE MODERADO',
    id: '8',
    label: 'PROTECCION BALANCE MODERADO',
    indice: 4,
    value: 'PROTECCION BALANCE MODERADO',
    checked: false
  },
  {
    nombre: 'BONOS COLOMBIA',
    id: '11',
    label: 'BONOS COLOMBIA',
    indice: 5,
    value: 'BONOS COLOMBIA',
    checked: false
  }
]

class SVGPathElement extends HTMLElement {}
window.SVGPathElement = SVGPathElement

let selector = new am4plugins_rangeSelector.DateAxisRangeSelector()
selector.container = document.getElementById('controls')

describe('Button', () => {
  it('renders correctly without props', () => {
    render(<ComparePortafolio options={options} listSeries={[]} />)
  })

  it('compareButton is clicked', () => {
    render(<ComparePortafolio options={options} listSeries={[]} />)
    const compareButton = screen.getByTestId(`button-compare`)
    fireEvent.click(compareButton)
  })
})
