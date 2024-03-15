import { shallow } from 'enzyme'
import React from 'react'
import CollapseItem from './collapse-item'

describe('Test for CollapseItem component', () => {
  test('should render without props', () => {
    const wrapper = shallow(<CollapseItem />)
    expect(wrapper.find('button')).toHaveLength(1)
  })
  test('should render and simulate click', () => {
    const setIsOpenItem = jest.fn()
    const wrapper = shallow(<CollapseItem setIsOpenItem={setIsOpenItem} />)
    wrapper.find('button').simulate('click')
    expect(wrapper.find('button')).toHaveLength(1)
    expect(setIsOpenItem).toBeCalled()
  })
  test('should render icon collapsed', () => {
    const wrapper = shallow(<CollapseItem isOpenItem={false} />)
    expect(wrapper.find('#collapse-item__toggle-icon')).toHaveLength(1)
  })
  test('should render icon expanded', () => {
    const wrapper = shallow(<CollapseItem isOpenItem />)
    expect(wrapper.find('.collapse-item__toggle-icon')).toHaveLength(1)
    expect(
      wrapper.find('button').hasClass('collapse-item--active')
    ).toBeTruthy()
  })
})
