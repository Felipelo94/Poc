import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { useStaticQuery } from 'gatsby'
import { render, screen } from '@testing-library/react'
import { RentabilidadesErrorCard } from './rentabilidades-error-card'

jest.mock('gatsby')

beforeEach(() => {
  useStaticQuery.mockReturnValue({
    title: {
      cuerpo: {
        cuerpo: 'foo title'
      }
    },
    description: {
      cuerpo: {
        cuerpo: 'bar description'
      }
    }
  })
})

test('renders correctly', () => {
  render(<RentabilidadesErrorCard />)
  expect(screen.getByText('foo title')).toBeInTheDocument()
  expect(screen.getByText('bar description')).toBeInTheDocument()
})

test('renders the given error code', () => {
  const error = new Error('foo')
  error.code = 'BC3003'
  render(<RentabilidadesErrorCard error={error} />)
  expect(screen.getByText(error.code, { exact: false })).toBeInTheDocument()
})

test('does not render `undefined` if error does not have code', () => {
  const errorWithoutCode = new Error('bar')
  render(<RentabilidadesErrorCard error={errorWithoutCode} />)
  expect(
    screen.queryByText('undefined', { exact: false })
  ).not.toBeInTheDocument()
})
