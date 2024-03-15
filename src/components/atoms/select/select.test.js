import React from 'react'
import renderer from 'react-test-renderer'
import SelectComponet from './select-component'
import { mount, shallow } from 'enzyme'

const ciudad = [
  { value: 'Medellín', label: 'Medellín' },
  { value: 'Bogotá', label: 'Bogotá' }
]

const defaultProps = {
  dataOptions: [],
  className: '',
  customStyles: '',
  handleChange: jest.fn(),
  placeHolder: '',
  label: '',
  mandatory: true,
  isSearchable: false,
  selectNative: false
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<SelectComponet {...setupProps} />)
}

describe('BiteInformation', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(<SelectComponet dataCiudad={ciudad} value="Medellín" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(<SelectComponet dataCiudad={ciudad} value="Medellín" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <SelectComponet dataCiudad={ciudad} value="Medellín" mandatory={true} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without value props', () => {
    const tree = renderer
      .create(<SelectComponet dataCiudad={ciudad} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  const eventObj = { target: { value: 'Cesantias' } }

  it('ModalButton close modal mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <SelectComponet
        dataCiudad={ciudad}
        value="Medellín"
        className={'container-select-oficina-servicio'}
      />
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
    const wrapper = mount(
      <SelectComponet
        dataCiudad={ciudad}
        className={'container-select-oficina-servicio'}
      />
    )
    wrapper
      .find('input')
      .first()
      .simulate('blur')
  })
  it('should render the select native with prop selectNative', () => {
    const wrapper = setup({ selectNative: true })
    const select = wrapper.find('#select-component-select')
    expect(select.exists()).toBe(true)
  })

  it('should render the autocomplete with prop isSearchable', () => {
    const wrapper = setup({ isSearchable: true, selectNative: true })
    const autocomplete = wrapper.find('.Autocomplete-container')
    expect(autocomplete.exists()).toBe(true)
  })

  it('should render the list autocomplete with simulate click', () => {
    const wrapper = setup({ isSearchable: true, selectNative: true })
    const buttonArrow = wrapper.find('.Autocomplete-container__select-arrow')
    buttonArrow.simulate('click')
    const listItems = wrapper.find('.Autocomplete-container__list--active')
    expect(listItems.exists()).toBe(true)
  })
})
