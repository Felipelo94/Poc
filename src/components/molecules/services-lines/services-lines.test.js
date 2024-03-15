import React from 'react'
import renderer from 'react-test-renderer'
import ServicesLines from './services-lines'
import { cleanup } from '@testing-library/react'

describe('SubCategories', () => {
  const data = [
    {
      titulo: 'aaaa',
      numeroContacto: '454545454'
    }
  ]

  it('Categories renders correctly', () => {
    const tree = renderer.create(<ServicesLines lines={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  afterEach(cleanup)
})
