import React from 'react'
import renderer from 'react-test-renderer'
import BestMenu from './best-menu'
import data from './best-menu.json'
import { mount } from 'enzyme'

describe('Button', () => {
  global.window = Object.create(window)
  const url = 'http://dummy.com'
  Object.defineProperty(window, 'location', {
    value: {
      href: url,
      search: '?c=2vn2SgPCl0kmJMiXjTU58N'
    }
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <BestMenu
          options={data}
          setitemActive={() => {}}
          active={'31JYCa3KmNmAmNH2Pj5Zxm'}
          setindexActivo={() => {}}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Categories renders correctly empresa click category active', () => {
    const wrapper = mount(
      <BestMenu
        options={data}
        setitemActive={() => {}}
        active={'31JYCa3KmNmAmNH2Pj5Zxm'}
        setindexActivo={() => {}}
      />
    )
    const category = wrapper.find('#simple-tab-0').first()
    category.simulate('click')
  })
})
