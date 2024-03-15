import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MarketplaceBanner from './marketplace-banner'

describe('<MarketplaceBanner />', () => {
  it('Should renders correctly without props', () => {
    const component = render(<MarketplaceBanner />)
    expect(component).toMatchSnapshot()
  })

  it('Should renders correctly with props', () => {
    const props = {
      title: 'Test Title',
      hasTitle: true,
      backgroundImage: null,
      mobileBackgroundImage: null,
      description: 'Test Description',
      callToActionText: 'Call To Action Text',
      callToActionLink: 'http://example.com/'
    }
    const component = render(<MarketplaceBanner {...props} />)
    component.getByText(props.title)
  })

  it('Call To Action should have href attribute as http://example.com/', () => {
    const props = {
      title: 'Test Title',
      hasTitle: true,
      backgroundImage: null,
      mobileBackgroundImage: null,
      description: 'Test Description',
      callToActionText: 'Call To Action Text',
      callToActionLink: 'http://example.com/'
    }
    const component = render(<MarketplaceBanner {...props} />)
    const button = component.getByText(props.callToActionText)
    expect(button).toHaveAttribute('href', props.callToActionLink)
  })
})
