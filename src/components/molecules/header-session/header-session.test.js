import React from 'react'
import renderer from 'react-test-renderer'
import HeaderSession from './header-session'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <HeaderSession
          title="Cesantías"
          subtitle="En este espacio podrás encontrar todo lo que necesites saber sobre Cesantías"
          className="title-bold"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
