import React from 'react'
import { render } from '@testing-library/react'
import MarketplaceScheduling from './marketplace-scheduling'

describe('<MarketplaceScheduling />', () => {
  it('Should renders correctly without props', () => {
    const component = render(<MarketplaceScheduling />)
    expect(component).toMatchSnapshot()
  })
})
