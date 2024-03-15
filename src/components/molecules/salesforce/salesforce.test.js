import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import Salesforce from './salesforce'
import { mount } from 'enzyme'

const mockStore = configureStore()
const eventObj = { target: { value: 'Cesantias' } }
describe('Search', () => {
  let getSuccess
  beforeEach(() => {
    fetch.resetMocks()
    getSuccess = jest.fn(() =>
      Promise.resolve([
        {
          paramvalue: 1,
          code: 'CC',
          desciption: 'Cédula de ciudadanía',
          param: {
            param: 1,
            desciption: 'Tipo de documento'
          }
        },
        {
          paramvalue: 2,
          code: 'CE',
          desciption: 'Cédula de extranjería',
          param: {
            param: 1,
            desciption: 'Tipo de documento'
          }
        },
        {
          paramvalue: 3,
          code: 'CD',
          desciption: 'Carné diplomático',
          param: {
            param: 1,
            desciption: 'Tipo de documento'
          }
        },
        {
          paramvalue: 4,
          code: 'NIT',
          desciption: 'NIT',
          param: {
            param: 1,
            desciption: 'Tipo de documento'
          }
        },
        {
          paramvalue: 5,
          code: 'PAS',
          desciption: 'Pasaporte',
          param: {
            param: 1,
            desciption: 'Tipo de documento'
          }
        },
        {
          paramvalue: 6,
          code: 'PE',
          desciption: 'Permiso especial de permanencia',
          param: {
            param: 1,
            desciption: 'Tipo de documento'
          }
        },
        {
          paramvalue: 7,
          code: 'RCN',
          desciption: 'Registro civil de nacimiento',
          param: {
            param: 1,
            desciption: 'Tipo de documento'
          }
        },
        {
          paramvalue: 8,
          code: 'TI',
          desciption: 'Tarjeta de identidad',
          param: {
            param: 1,
            desciption: 'Tipo de documento'
          }
        }
      ])
    )
  })

  it('Search renders correctly ', () => {
    const tree = renderer.create(<Salesforce get={getSuccess} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Search renders correctly ', () => {
    global.window = Object.create(window)
    const url = {
      url: 'http://localhost:8000/ahorro-mi-reserva/',
      pathname: '/ahorro-mi-reserva/'
    }
    Object.defineProperty(window, 'location', {
      value: {
        href: url,
        search: '?c=2vn2SgPCl0kmJMiXjTU58N',
        pathname: '/ahorro-mi-reserva/'
      }
    })
    const wrapper = mount(<Salesforce get={getSuccess} />)
    wrapper.find('#container-salesforce-btn').simulate('click')
  })

  it('renders responsive', () => {
    global.innerWidth = 455
    global.dispatchEvent(new Event('resize'))
    global.window = Object.create(window)
    const url = {
      url: 'http://localhost:8000/ahorro-mi-reserva/',
      pathname: '/ahorro-mi-reserva/'
    }
    Object.defineProperty(window, 'location', {
      value: {
        href: url,
        search: '?c=2vn2SgPCl0kmJMiXjTU58N',
        pathname: '/ahorro-mi-reserva/'
      }
    })
    const wrapper = mount(<Salesforce get={getSuccess} />)
    wrapper.find('#container-salesforce-btn').simulate('click')
  })
})
