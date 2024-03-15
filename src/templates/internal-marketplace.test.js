import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import InternalMarketplace from './internal-marketplace'
import {
  MARKETPLACE_MOCK_DATA,
  MARKETPLACE_MOCK_DATA_WITHOUT_SALESFORCE
} from '../const/dictionary/marketplace-const'

describe('<InternalMarketplace />', () => {
  let store
  let mockPageContext
  let location

  beforeEach(() => {
    fetch.resetMocks()

    const mockStore = configureStore()
    const initialState = {
      home: { categoria: 'Cesantías', subCategoria: 'Cesante' },
      tourguide: { status: true },
      welcome: { typeUser: 1 },
      menu: { status: true }
    }
    store = mockStore(initialState)
    store.dispatch = jest.fn()

    mockPageContext = {
      id: '2nGwVr1Dk6KSO14BrRR3lC',
      metatittleSeo: 'Meta Title Prueba',
      metadescripcionSeo: 'Meta Description Prueba',
      keywordsSeo: ['Keyword', 'Prueba']
    }
    location = {
      href: 'https://www.example.com'
    }
  })

  it('should render correctly with only pageContext prop', () => {
    const component = render(
      <Provider store={store}>
        <InternalMarketplace
          pageContext={mockPageContext}
          location={location}
        />
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })

  it('should render correctly with props', () => {
    const component = render(
      <Provider store={store}>
        <InternalMarketplace
          pageContext={mockPageContext}
          data={MARKETPLACE_MOCK_DATA}
          location={location}
        />
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })

  it('top banner should have correct title', () => {
    const topBannerTitle = 'Marketplace Prueba'
    const component = render(
      <Provider store={store}>
        <InternalMarketplace
          pageContext={mockPageContext}
          data={MARKETPLACE_MOCK_DATA}
          location={location}
        />
      </Provider>
    )
    component.getByText(topBannerTitle)
  })

  it('bottom banner should not have title', () => {
    const bottomCTAText = 'Ir a Sostenibilidad'
    const component = render(
      <Provider store={store}>
        <InternalMarketplace
          pageContext={mockPageContext}
          data={MARKETPLACE_MOCK_DATA}
          location={location}
        />
      </Provider>
    )

    const bottomCTA = component.getByText(bottomCTAText)
    expect(bottomCTA.closest('div').firstChild.tagName).not.toBe('H1')
  })

  it('should not show salesforce when Agendamiento is "No"', () => {
    const salesforceTitle = '¿Quieres agendar una cita?'
    const component = render(
      <Provider store={store}>
        <InternalMarketplace
          pageContext={mockPageContext}
          data={MARKETPLACE_MOCK_DATA_WITHOUT_SALESFORCE}
          location={location}
        />
      </Provider>
    )
    const salesforce = component.queryByText(salesforceTitle)
    expect(salesforce).toBeNull()
  })
})
