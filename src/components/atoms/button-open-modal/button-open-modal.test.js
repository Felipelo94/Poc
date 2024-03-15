import { mount } from 'enzyme'
import React from 'react'
import ButtonOpenModal from './button-open-modal'
import darkMode from '../../../themes/light'
import { ThemeProvider } from 'styled-components'

describe('Button', () => {
  it('renders correctly without props', () => {
    const closeModal = jest.fn()
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <ButtonOpenModal
          classGtm="gtmHomeMenuSolucionesUnClic"
          top="-18px"
          left="-81px"
          statusOver={true}
          tittle="Soluciones a un clic"
          setmodalClosed={() => {}}
          eventClose={() => {}}
          overModal={() => {}}
          services={1}
          servicesUser={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 1,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          subcategory={''}
          idIcon={1}
          options={[]}
          closeModal={closeModal}
        />
      </ThemeProvider>
    )
    wrapper.find('#Soluciones').simulate('mouseenter')
    wrapper.find('#Soluciones').simulate('mouseleave')
  })

  it('renders correctly without props', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <ButtonOpenModal
          classGtm="gtmHomeMenuSolucionesUnClic"
          top="-18px"
          left="-81px"
          statusOver={true}
          tittle="Explora"
          setmodalClosed={() => {}}
          eventClose={() => {}}
          overModal={() => {}}
          services={1}
          servicesUser={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 1,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          subcategory={''}
          idIcon={1}
          options={[]}
        />{' '}
      </ThemeProvider>
    )
  })
})
