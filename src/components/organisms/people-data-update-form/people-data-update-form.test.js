import React from 'react'
import { render, screen } from '@testing-library/react'
import PeopleDataUpdateForm from './people-data-update-form'

describe('<PeopleDataUpdateForm/>', () => {
  test('Should render correctly', () => {
    render(<PeopleDataUpdateForm />)
    expect(screen).toMatchSnapshot()
  })

  test('Should show title correctly', () => {
    render(<PeopleDataUpdateForm />)
    screen.getByText('Diligencia tus datos')
  })

  test('Should show subtitle correctly', () => {
    render(<PeopleDataUpdateForm />)
    screen.getByText(
      'Llena los siguientes campos para completar tu información'
    )
  })
})
