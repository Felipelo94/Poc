import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Quote } from './quote'
import * as useCurrentWidth from '../../../../hooks/useCurrentWidth/useCurrentWidth'

describe('Quote', () => {
  test('renders correctly with a currentWitch < 1024', () => {
    jest.spyOn(useCurrentWidth, 'default').mockImplementation(() => 720)
    render(<Quote text="test" lineUser="Inversión" />)
  })

  test('renders correctly with a currentWitch > 1024', () => {
    jest.spyOn(useCurrentWidth, 'default').mockImplementation(() => 1280)
    render(<Quote text="test" lineUser="Inversión" />)
  })
})
