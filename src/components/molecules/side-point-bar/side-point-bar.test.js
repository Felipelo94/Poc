import React from 'react'
import { Provider } from 'react-redux'
import render from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { SidePointBar, SidePointBarComponent } from './sidePointBar'

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce(success =>
    Promise.resolve(
      success({
        coords: {
          latitude: 51.1,
          longitude: 45.3
        }
      })
    )
  ),
  watchPosition: jest.fn()
}
let getSuccess

let getSuccessOutColombia

let getSuccessNoPoint

global.navigator.geolocation = mockGeolocation
const salesPpin = [
  {
    oficina: 'Avenida El Dorado',
    direccion: 'Calle 26 # 85 B 09 local 101',
    fax: '(054) 2302666',
    horario: 'Lunes a Viernes 8:00 a.m. a 4:00 p.m. Jornada continua',
    ciudad: 'Bogotá',
    latitud: 4.698804,
    longitud: -74.069527
  },
  {
    oficina: 'Palmira',
    direccion: 'Calle 42 # 39 - 68 Local 242  C.C. Unicentro Palmira',
    fax: '275 99 22',
    horario: 'Lunes a Viernes 8:00 a.m. a 12:00 m. - 2:00 p.m. a 4:30 p.m.',
    ciudad: 'Cali',
    latitud: 3.540289,
    longitud: -76.310494
  },
  {
    oficina: 'Camino Real',
    direccion: 'Carrera 47 # 52 - 86, C.C. Camino Real, Local 231',
    fax: '(4)4306220',
    horario: 'Lunes a viernes de 8 a 4 jornada continua',
    ciudad: 'Medellín',
    latitud: 6.249904,
    longitud: -75.565292
  },
  {
    oficina: 'Torre Protección',
    direccion: 'Calle 49 # 63 - 80',
    fax: '(054) 230 26 66',
    horario: 'Lunes a Viernes de 8:00 a.m. a 4:00 p.m. Jornada continua',
    ciudad: 'Medellín',
    latitud: 6.253275,
    longitud: -75.579155
  }
]
const dataCiudad = ['Bogotá', 'Cali', 'Medellín']
describe('SidePointBar', () => {
  beforeEach(() => {
    fetch.resetMocks()
    getSuccess = jest.fn(() =>
      Promise.resolve({
        results: [
          {
            address_components: [
              {
                long_name: 'Medellín',
                short_name: 'Medellín',
                types: ['administrative_area_level_2']
              },
              {
                long_name: 'Colombia',
                short_name: 'Colombia',
                types: ['country']
              }
            ]
          }
        ]
      })
    )
    getSuccessOutColombia = jest.fn(() =>
      Promise.resolve({
        results: [
          {
            address_components: [
              {
                long_name: 'Medellín',
                short_name: 'Berlin',
                types: ['administrative_area_level_2']
              },
              {
                long_name: 'Alemania',
                short_name: 'Alemania',
                types: ['country']
              }
            ]
          }
        ]
      })
    )

    getSuccessNoPoint = jest.fn(() =>
      Promise.resolve({
        results: [
          {
            address_components: [
              {
                long_name: 'Santa Marta',
                short_name: 'Santa Marta',
                types: ['administrative_area_level_2']
              },
              {
                long_name: 'Colombia',
                short_name: 'Colombia',
                types: ['country']
              }
            ]
          }
        ]
      })
    )
  })

  it('renders correctly SidePointBarComponent', () => {
    const indexPage = render.create(
      <SidePointBarComponent
        salesPointsInfo={salesPpin}
        activePoint={{}}
        onClickMarker={e => {}}
        dataCiudad={dataCiudad}
        geoLonLat={getSuccess}
      />
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly SidePointBarComponent outside colombia', () => {
    const indexPage = render.create(
      <SidePointBarComponent
        salesPointsInfo={salesPpin}
        activePoint={{}}
        onClickMarker={e => {}}
        dataCiudad={dataCiudad}
        geoLonLat={getSuccessOutColombia}
      />
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly SidePointBarComponent Other City Colombia', () => {
    const indexPage = render.create(
      <SidePointBarComponent
        salesPointsInfo={salesPpin}
        activePoint={{}}
        onClickMarker={e => {}}
        dataCiudad={dataCiudad}
        geoLonLat={getSuccessNoPoint}
      />
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly SidePointBar', () => {
    const indexPage = render.create(
      <SidePointBar
        salesPointsInfo={salesPpin}
        activePoint={{}}
        onClickMarker={e => {}}
        dataCiudad={dataCiudad}
        geoLonLat={getSuccess}
      />
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
