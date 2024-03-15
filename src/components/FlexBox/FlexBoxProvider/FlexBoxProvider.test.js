import React from 'react'
import { mount } from 'enzyme'
import FlexBoxProvider from './FlexBoxProvider'

describe('FlexBox [ContainerFlexBox]', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <FlexBoxProvider>
        <h1>Prueba</h1>
      </FlexBoxProvider>
    ).render()
  })
})
