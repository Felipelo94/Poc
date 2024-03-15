import React from 'react'

import { act, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import * as CompaniesDataUpdateForm from '../components/organisms/companies-data-update-form/companies-data-update-form'
import * as PeopleDataUpdateForm from '../components/organisms/people-data-update-form/people-data-update-form'
import DataUpdate from './data-update'

jest.mock('contentful', () => ({
  createClient: () => ({
    getAsset: async () => ({
      fields: {
        file: {
          url: 'url'
        },
        description: 'description'
      }
    })
  })
}))

jest.mock('react-redux', () => ({
  connect: (mapStateToProps) => {
    mapStateToProps({});
    return ReactComponent => ReactComponent
  }
}))

describe('<DataUpdate />', () => {
  beforeEach(() => {
    const AlertButton = (setAlertDetails) => (<button
      onClick={() =>
        setAlertDetails({
          callback: jest.fn(),
          message: 'alert-message',
          type: 'alert-type'
        })
      }
    >
      setAlertDetails
    </button>);
  
    jest
      .spyOn(CompaniesDataUpdateForm, 'default')
      .mockImplementation(({ setAlertDetails }) => (<>CompaniesDataUpdateForm{AlertButton(setAlertDetails)}</>))
    jest
      .spyOn(PeopleDataUpdateForm, 'default')
      .mockImplementation(({ setAlertDetails }) => (<>PeopleDataUpdateForm{AlertButton(setAlertDetails)}</>))
  });

  test('renders with CompaniesDataUpdateForm', async () => {
    await act(async () => {
      render(<DataUpdate pageContext={{ typeCustomer: 2 }} />)
    })
    screen.getByText('CompaniesDataUpdateForm');
  });

  test('renders with PeopleDataUpdateForm', async () => {
    await act(async () => {
      render(<DataUpdate pageContext={{ typeCustomer: 1 }} />)
    })
    screen.getByText('PeopleDataUpdateForm');
  });

  test('renders with PeopleDataUpdateForm and set AlertDetails ', async () => {
    await act(async () => {
      render(<DataUpdate pageContext={{ typeCustomer: 1 }} />)
    })
    fireEvent.click(screen.getByText('setAlertDetails'));
    screen.getByText('alert-message');
  });
})
