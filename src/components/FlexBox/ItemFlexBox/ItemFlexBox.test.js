import React from 'react'
import { mount } from 'enzyme'
import ItemFlexBox from './ItemFlexBox'

describe('FlexBox [Item]', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <ItemFlexBox>
        <h1>Prueba</h1>
      </ItemFlexBox>
    ).render()

    expect(wrapper.hasClass('breakpoint__md-up')).toEqual(true)
  })

  it('should render order default', () => {
    const wrapper = mount(
      <ItemFlexBox order>
        <h1>Prueba</h1>
      </ItemFlexBox>
    ).render()
    expect(wrapper.hasClass('order-0')).toEqual(true)
  })

  it('should render order mobileProperties', () => {
    const wrapper = mount(
      <ItemFlexBox mobileProperties={{ order: 1, witd: 1 }}>
        <h1>Prueba</h1>
      </ItemFlexBox>
    ).render()
    expect(wrapper.hasClass('breakpoint__md-up')).toEqual(true)
  })

  it('should render order classNameMobile', () => {
    const wrapper = mount(
      <ItemFlexBox classNameMobile="test-class">
        <h1>Prueba</h1>
      </ItemFlexBox>
    ).render()
    expect(wrapper.hasClass('breakpoint__md-up')).toEqual(true)
  })

  it('should render order styleMobile', () => {
    const wrapper = mount(
      <ItemFlexBox styleMobile={{ order: 1 }}>
        <h1>Prueba</h1>
      </ItemFlexBox>
    ).render()
    expect(wrapper.hasClass('breakpoint__md-up')).toEqual(true)
  })
})
