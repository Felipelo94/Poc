import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'

import Category from './category'

describe('Category', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Category />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with isActive true', () => {
    const tree = renderer.create(<Category isActive={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('captures click', done => {
    function handleClick() {
      done()
    }

    const { getByTestId } = render(<Category onClick={handleClick} />)

    const node = getByTestId('category')
    fireEvent.click(node)
    const tree = renderer.create(<Category />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  afterEach(cleanup)
})
