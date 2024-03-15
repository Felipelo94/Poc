import React from 'react'
import renderer from 'react-test-renderer'
import darkMode from '../../../themes/dark'
import { ThemeProvider } from 'styled-components'
import WhoAreYouOption from './who-are-you-option'

describe('<WhoAreYouOption />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <WhoAreYouOption
            type={{ name: 'Persona', img: 1, status: true, noSeletected: true }}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly status false and noSelected false ', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <WhoAreYouOption
            type={{
              name: 'Persona',
              img: 2,
              status: false,
              noSeletected: false
            }}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly status true and noSelected false', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <WhoAreYouOption
            type={{
              name: 'Persona',
              img: 2,
              status: true,
              noSeletected: false
            }}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly status true and noSelected false', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <WhoAreYouOption
            type={{
              name: 'Persona',
              img: 1,
              status: true,
              noSeletected: false
            }}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
