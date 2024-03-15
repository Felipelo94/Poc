import React from 'react'
import renderer from 'react-test-renderer'
import BiteDesktop from './bite-desktop'
import { mount } from 'enzyme'
import darkMode from '../../../../themes/dark'
import { ThemeProvider } from 'styled-components'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <BiteDesktop
            accessibility={{ fontSize: 3, lineSize: 2 }}
            title="xxxxxxxxxxxx"
            img="xxxxxxxxxxxx"
            content="xxxxxxxxxxxx"
            btn="xxxxxxxxxxxx"
            slug="xxxxxxxxxxxx"
            imgalt="xxxxxxxxxxxx"
            classGtm="xxxxxxxxxxxx"
            gtmCategory="xxxxxxxxxxxx"
            gtmAction="xxxxxxxxxxxx"
            date="2020-07-29T21:07:49.247Z"
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <BiteDesktop
            accessibility={{ fontSize: 3, lineSize: 2 }}
            title="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            img="xxxxxxxxxxxx"
            content="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            btn="xxxxxxxxxxxx"
            slug="xxxxxxxxxxxx"
            imgalt="xxxxxxxxxxxx"
            date="2020-06-29T21:07:49.247Z"
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <BiteDesktop
            accessibility={{ fontSize: 3, lineSize: 2 }}
            title={null}
            img="xxxxxxxxxxxx"
            content="xxxxxxxxxxxx"
            btn="xxxxxxxxxxxx"
            slug="xxxxxxxxxxxx"
            imgalt="xxxxxxxxxxxx"
            date="2020-07-29T21:07:49.247Z"
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('click bite', () => {
    const tree = mount(
      <ThemeProvider theme={darkMode}>
        <BiteDesktop
          accessibility={{ fontSize: 3, lineSize: 2 }}
          title="xxxxxxxxxxxx"
          img="xxxxxxxxxxxx"
          btn="xxxxxxxxxxxx"
          slug="xxxxxxxxxxxx"
          imgalt="xxxxxxxxxxxx"
          date="2020-06-29T21:07:49.247Z"
        />
      </ThemeProvider>
    )
    tree
      .find('.bite-desktop-container')
      .first()
      .simulate('click')
  })

  it('keydown bite', () => {
    const tree = mount(
      <ThemeProvider theme={darkMode}>
        <BiteDesktop
          accessibility={{ fontSize: 3, lineSize: 2 }}
          title="xxxxxxxxxxxx"
          img="xxxxxxxxxxxx"
          content="xxxxxxxxxxxx"
          btn="xxxxxxxxxxxx"
          slug="xxxxxxxxxxxx"
          imgalt="xxxxxxxxxxxx"
          date="2020-07-29T21:07:49.247Z"
        />
      </ThemeProvider>
    )
    tree
      .find('.bite-desktop-container')
      .first()
      .simulate('keydown')
  })
})
