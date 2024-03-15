import React from 'react'
import { render, screen } from '@testing-library/react'
import CardsSlider from './cards-slider'

describe('<CardsSlider/>', () => {
  test('Should render correctly', () => {
    render(
      <CardsSlider>
        <div>Test 1</div>
        <div>Test 2</div>
      </CardsSlider>
    )
  })
  expect(screen).toMatchSnapshot()
})
