import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'
import InternalBites from './internal-bites'

describe('InternalBites', () => {
  it('renders correctly with a child and captures click', () => {
    const { getByTestId } = render(
      <InternalBites>
        <div text="¿Por qué estar en Protección?" />
      </InternalBites>
    )

    const node = getByTestId('internal-bite')
    fireEvent.click(node)
    const tree = renderer.create(<InternalBites />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with children', () => {
    const tree = renderer
      .create(
        <InternalBites>
          <div text="¿Por qué estar en Protección?" />
          <div text="¿Para qué estar en Protección?" />
        </InternalBites>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
