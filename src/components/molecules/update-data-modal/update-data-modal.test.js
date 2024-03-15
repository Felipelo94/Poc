import React from 'react'
import { MOCKED_HOOK_MODAL_DATA } from '../../../const/dictionary/update-data-modal'
import { render, screen, fireEvent } from '@testing-library/react'
import useUpdateDataModal from '../../../hooks/useUpdateDataModal/useUpdateDataModal'
import UpdateDataModal from './update-data-modal'

jest.mock('../../../hooks/useUpdateDataModal/useUpdateDataModal')

describe('<UpdateDataModal/>', () => {
  beforeEach(() => {
    useUpdateDataModal.mockReturnValue(MOCKED_HOOK_MODAL_DATA)
  })

  test('Should render correctly', () => {
    render(<UpdateDataModal />)
    expect(screen).toMatchSnapshot()
  })

  test('Should have the correct title', () => {
    render(<UpdateDataModal />)
    screen.getByText('¡Gracias por actualizar tus datos!')
  })

  test('Should have the correct subtitle', () => {
    render(<UpdateDataModal />)
    screen.getByText('Tienes 20% dcto. en Medipiel')
  })

  test('Should have the correct relevant information', () => {
    render(<UpdateDataModal />)
    screen.getByText('MEDIPIELYPROTECCION')
  })

  test('Should run onCloseModal when button is clicked', () => {
    const mockedFn = jest.fn()
    render(<UpdateDataModal onCloseModal={mockedFn} />)
    const closeButton = screen.getByRole('button')

    fireEvent.click(closeButton)

    expect(mockedFn).toHaveBeenCalled()
  })

  test('Should have only one call to action', () => {
    render(<UpdateDataModal />)
    const callToActions = screen.getAllByRole('link')
    expect(callToActions).toHaveLength(1)
  })
})
