import React from 'react'
import { shallow } from 'enzyme'
import Container from './Container'

describe('FlexBox [Container]', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Container>
        <h1>Prueba</h1>
      </Container>
    )
    expect(wrapper.hasClass('d-flex')).toEqual(true)
  })

  it('should render correctly with props direction', () => {
    const wrapper = shallow(
      <Container direction="column">
        <h1>Prueba</h1>
      </Container>
    )
    expect(wrapper.hasClass('flex-column')).toEqual(true)
  })

  it('should render correctly with props direction', () => {
    const wrapper = shallow(
      <Container direction>
        <h1>Prueba</h1>
      </Container>
    )
    expect(wrapper.hasClass('flex-row')).toEqual(true)
  })
})
