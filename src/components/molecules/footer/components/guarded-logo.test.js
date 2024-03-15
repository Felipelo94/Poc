import { shallow } from 'enzyme'
import React from 'react'
import GuardedLogo from './guarded-logo'

describe('Test for Guarded Logo component', () => {
  test('should render without error', () => {
    const wrapper = shallow(<GuardedLogo />)
    expect(wrapper.find('Anchor')).toHaveLength(1)
    expect(wrapper.exists('.guarded-logo__logo')).toBe(true)
  })
})
