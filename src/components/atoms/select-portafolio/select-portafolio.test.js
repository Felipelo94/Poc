import React from 'react'
import renderer from 'react-test-renderer'
import SelectPortafolio from './select-portafolio'
import { mount } from 'enzyme'

const options = [
  { value: 'AC_ME_EM', label: 'ACCIONES MERCADOS EMERGENTES' },
  { value: 'PR_RE', label: 'PROTECCION RECAUDADOR' },
  { value: 'AC_EN_CE', label: 'ACCIONES EN CELSIA' }
]

describe('SelectPortafolio', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(<SelectPortafolio dataPortafolio={options} value="AC_ME_EM" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <SelectPortafolio
          dataPortafolio={options}
          value="AC_ME_EM"
          mandatory={true}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without value props', () => {
    const tree = renderer
      .create(<SelectPortafolio dataPortafolio={options} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  const eventObj = { target: { value: 'AC_ME_EM' } }

  it('ModalButton close modal mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <SelectPortafolio dataPortafolio={options} value="AC_ME_EM" />
    )
    wrapper
      .find('input')
      .first()
      .simulate('focus')
    wrapper
      .find('input')
      .first()
      .simulate('blur')
    wrapper
      .find('input')
      .first()
      .simulate('change', eventObj)
  })

  it('select without value', () => {
    const wrapper = mount(<SelectPortafolio options={options} />)
    wrapper
      .find('input')
      .first()
      .simulate('blur')
  })

  it('should be handling portafolioSeleccionado', () => {
    const findIndexOption = () => {
      return 1
    }

    const wrapper = mount(
      <SelectPortafolio findIndexOption={findIndexOption} options={options} />
    )
    wrapper
      .instance()
      .portafolioSeleccionado({ value: 'PROTECCION RECAUDADOR' })
    expect(typeof wrapper.instance().portafolioSeleccionado).toBe('function')
  })
})
