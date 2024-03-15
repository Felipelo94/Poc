import React from 'react'
import { render, screen } from '@testing-library/react'
import CompaniesDataUpdateForm from './companies-data-update-form'

describe('<PeopleDataUpdateForm/>', () => {
  test('Should render correctly', () => {
    render(<CompaniesDataUpdateForm />)
    expect(screen).toMatchSnapshot()
  })

  test('Should show title correctly', () => {
    render(<CompaniesDataUpdateForm />)
    screen.getByText('Diligencia tus datos')
  })

  test('Should show subtitle correctly', () => {
    render(<CompaniesDataUpdateForm />)
    screen.getByText(
      'Llena los siguientes campos para completar la información'
    )
  })
})
