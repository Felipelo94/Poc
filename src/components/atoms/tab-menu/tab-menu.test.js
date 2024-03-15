import React from 'react'
import renderer from 'react-test-renderer'
import dataModal from '../../../const/dictionary/data-modal-oficina-servicio.json'
import TabMenu from './tab-menu'
import { mount } from 'enzyme'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <TabMenu
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={dataModal}
          active={1}
          setItemActive={() => {}}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders onMouseEnter bosillo prev', () => {
    global.innerWidth = 2000
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <TabMenu
        accessibility={{ fontSize: 3, lineSize: 2 }}
        data={dataModal}
        active={1}
        setItemActive={() => {}}
      />
    )
    const element = wrapper.find('#tab-modal-container').first()
    element.simulate('click')
  })

  it('renders onMouseEnter bosillo prev', () => {
    global.innerWidth = 2000
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <TabMenu
        accessibility={{ fontSize: 3, lineSize: 2 }}
        data={dataModal}
        active={0}
        setItemActive={() => {}}
      />
    )
    wrapper
      .find('#tab-modal-container')
      .first()
      .simulate('mouseover')
    wrapper
      .find('#tab-modal-container')
      .first()
      .simulate('mouseleave')
  })
})
