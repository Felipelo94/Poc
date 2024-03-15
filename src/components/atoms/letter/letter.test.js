import { shallow } from 'enzyme'
import React from 'react'
import Letter from './letter'

describe('Test for Letter component', () => {
  test('should render correctly without props', () => {
    const wrapper = shallow(<Letter />)
    expect(wrapper.hasClass('letter-container')).toBeTruthy()
  })

  test('should render character and background when is selected', () => {
    const character = 'A'
    const wrapper = shallow(<Letter character={character} isSelected />)
    expect(
      wrapper.hasClass('letter-container letter-container--selected')
    ).toBeTruthy()
    expect(wrapper.find('.letter').text()).toBe(character)
  })

  test('should invoke onClick prop', () => {
    const character = 'A'
    const onClick = jest.fn()
    const wrapper = shallow(
      <Letter character={character} isSelected onClick={onClick} />
    )
    expect(
      wrapper.hasClass('letter-container letter-container--selected')
    ).toBeTruthy()
    expect(wrapper.find('.letter').text()).toBe(character)
    const button = wrapper.find('.letter-container')
    button.simulate('click')
    expect(onClick).toBeCalled()
  })

  test('should has disabled class when received isDisabled prop', () => {
    const character = 'A'
    const onClick = jest.fn()
    const wrapper = shallow(<Letter character={character} isDisabled />)
    expect(
      wrapper.hasClass('letter-container letter-container--disabled')
    ).toBeTruthy()
    expect(wrapper.find('.letter').text()).toBe(character)
    const button = wrapper.find('.letter-container')
    button.simulate('click')
    expect(onClick).toBeCalledTimes(0)
  })
})
