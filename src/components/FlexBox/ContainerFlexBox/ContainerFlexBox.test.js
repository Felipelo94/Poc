import React from 'react'
import { mount } from 'enzyme'
import ContainerFlexBox from './ContainerFlexBox'

describe('FlexBox [ContainerFlexBox]', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <ContainerFlexBox>
        <h1>Prueba</h1>
      </ContainerFlexBox>
    ).render()
    expect(wrapper.hasClass('breakpoint__md-up d-flex')).toEqual(true)
  })

  it('should render correctly with props direction', () => {
    const wrapper = mount(
      <ContainerFlexBox direction="column">
        <h1>Prueba</h1>
      </ContainerFlexBox>
    ).render()
    expect(wrapper.hasClass('breakpoint__md-up d-flex flex-column')).toEqual(
      true
    )
  })

  it('should render correctly with props direction defualt', () => {
    const wrapper = mount(
      <ContainerFlexBox direction>
        <h1>Prueba</h1>
      </ContainerFlexBox>
    ).render()
    expect(wrapper.hasClass('breakpoint__md-up d-flex flex-row')).toEqual(true)
  })
})
