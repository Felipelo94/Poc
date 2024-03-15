import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { renderHook } from '@testing-library/react-hooks'

import profitability from '../../../reducers/profitability/profitability'
import { getProfitabilityTable } from '../../../services/profitability-service/get-profitability-table'

import { useTableRentabilidadesContainer } from './use-table-rentabilidades-container'

jest.mock('../../../services/profitability-service/get-profitability-table')

const PROFIT_DATA = {
  id: '1',
  title: 'PROTECCION RECAUDADOR',
  comision: '1,82',
  historica: '9,51',
  anual: '3,22',
  benchmarkAnual: 'N/A'
}

beforeEach(() => {
  jest.clearAllMocks()

  getProfitabilityTable.mockResolvedValue({
    date: '2022-02-28',
    profitabilities: [PROFIT_DATA]
  })
})

const renderRentabilidadesHook = () =>
  renderHook(() => useTableRentabilidadesContainer(), {
    wrapper: ({ children }) => (
      <Provider store={createStore(combineReducers({ profitability }))}>
        {children}
      </Provider>
    )
  })

test('load profitabilities', async () => {
  const { result, waitFor } = renderRentabilidadesHook()
  await waitFor(() => expect(result.current.isLoading).toBe(true))
  expect(getProfitabilityTable).toHaveBeenCalled()

  await waitFor(() =>
    expect(result.current.result.profitabilities).toBeDefined()
  )
  expect(result.current.result.profitabilities).toEqual([PROFIT_DATA])
})

test('handles fetching error', async () => {
  const error = new Error('foo')
  getProfitabilityTable.mockRejectedValue(error)
  const { result, waitFor } = renderRentabilidadesHook()
  await waitFor(() => expect(result.current.error).toBe(error))
})
