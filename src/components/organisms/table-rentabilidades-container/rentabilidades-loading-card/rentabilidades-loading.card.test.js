import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { useStaticQuery } from 'gatsby'
import { render, screen } from '@testing-library/react'
import { RentabilidadesLoadingCard } from './rentabilidades-loading-card'

jest.mock('gatsby')

beforeEach(() => {
  useStaticQuery.mockReturnValue({
    contentfulMensajeServicio: {
      titulo: 'foo',
      cuerpo: {
        cuerpo: 'bar'
      }
    }
  })
})

test('renders correctly', () => {
  render(<RentabilidadesLoadingCard />)
  expect(screen.getByText('foo')).toBeInTheDocument()
  expect(screen.getByText('bar')).toBeInTheDocument()
})
