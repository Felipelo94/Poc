import React from 'react'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom/extend-expect'
import { combineReducers, createStore } from 'redux'
import { render, screen } from '@testing-library/react'

import { RentabilidadHeaderInternal } from './rentabilidad-header-internal'

const DummyComponent = ({ subtitle }) => subtitle

const renderHeader = (children, profitabilityState = { result: {} }) =>
  render(children, {
    wrapper: ({ children }) => {
      const initialState = { profitability: profitabilityState }
      const store = createStore(
        combineReducers({ profitability: () => profitabilityState }),
        initialState
      )
      return <Provider store={store}>{children}</Provider>
    }
  })

test('renders the given component', () => {
  renderHeader(
    <RentabilidadHeaderInternal>
      <div>foo</div>
    </RentabilidadHeaderInternal>
  )
  expect(screen.getByText('foo')).toBeInTheDocument()
})

test('replaces subtitle interpolating `[VariableFecha]` with the given date', () => {
  const date = '31/01/2022'
  renderHeader(
    <RentabilidadHeaderInternal>
      <DummyComponent subtitle="foo [VariableFecha] bar" />
    </RentabilidadHeaderInternal>,
    {
      result: { date: '2022-01-31' }
    }
  )
  expect(screen.getByText(`foo ${date} bar`)).toBeInTheDocument()
})

test('replaces subtitle interpolating `[VariableFecha]` with one day before current date', () => {
  const now = new Date('2022-02-28')
  renderHeader(
    <RentabilidadHeaderInternal now={now}>
      <DummyComponent subtitle="bar [VariableFecha] baz" />
    </RentabilidadHeaderInternal>,
    {
      result: {
        date: null
      }
    }
  )

  const date = '27/02/2022'
  expect(screen.getByText(`bar ${date} baz`)).toBeInTheDocument()
})
