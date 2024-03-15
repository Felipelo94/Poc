import React from 'react'
import renderer from 'react-test-renderer'
import ModalMenu from './modal-menu'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import darkMode from '../../../themes/light'
import { ThemeProvider } from 'styled-components'

describe('Modal Menu', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <ModalMenu modalIsOpen={true} />
      </ThemeProvider>,
      {
        attachTo: container
      }
    )
    wrapper.simulate('click')
  })

  it('Modal Menu renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <ModalMenu modalIsOpen={true} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
  })
})
