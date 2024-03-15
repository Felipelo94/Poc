import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react/pure'

import TableRentabilidades from '../../atoms/table-rentabilidades/table-rentabilidades'

import TableRentabilidadesContainer from './table-rentabilidades-container'
import { useTableRentabilidadesContainer } from './use-table-rentabilidades-container'
import { RentabilidadesLoadingCard } from './rentabilidades-loading-card/rentabilidades-loading-card'
import { RentabilidadesErrorCard } from './rentabilidades-error-card/rentabilidades-error-card'

jest.mock('./use-table-rentabilidades-container')
jest.mock('../../atoms/table-rentabilidades/table-rentabilidades')
jest.mock('./rentabilidades-loading-card/rentabilidades-loading-card')
jest.mock('./rentabilidades-error-card/rentabilidades-error-card')

beforeEach(() => {
  jest.clearAllMocks()
  useTableRentabilidadesContainer.mockReturnValue({ result: {} })
  TableRentabilidades.mockImplementation(
    () =>
      new (class extends React.PureComponent {
        render() {
          return <div />
        }
      })()
  )
  RentabilidadesLoadingCard.mockImplementation(() => <div />)
  RentabilidadesErrorCard.mockImplementation(() => <div />)
})

const mockHookValue = props =>
  useTableRentabilidadesContainer.mockReturnValue({ result: {}, ...props })

test('renders profitability table', () => {
  const profitabilities = ['foo']
  mockHookValue({ result: { profitabilities } })
  render(<TableRentabilidadesContainer />)
  expect(TableRentabilidades).toHaveBeenCalledWith(
    expect.objectContaining({
      data: profitabilities
    }),
    expect.anything()
  )
})

test('load profitabilities', () => {
  mockHookValue({ isLoading: true })
  render(<TableRentabilidadesContainer />)
  expect(
    screen.getByTestId('TableRentabilidadesContainer-loading')
  ).toBeInTheDocument()
  expect(RentabilidadesLoadingCard).toHaveBeenCalled()
})

test('handles fetching error', () => {
  const error = new Error('foo')
  mockHookValue({ error })
  render(<TableRentabilidadesContainer />)
  expect(
    screen.getByTestId('TableRentabilidadesContainer-error')
  ).toBeInTheDocument()
  expect(RentabilidadesErrorCard).toHaveBeenCalledWith(
    expect.objectContaining({ error }),
    expect.anything()
  )
})
