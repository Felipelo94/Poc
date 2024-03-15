import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import darkMode from '../../../themes/dark'
import CallToAction from './call-to-action'
import { useStaticQuery } from 'gatsby'
import { initialState as pageContextInitialState } from '../../../reducers/page-context/page-context'

const initialState = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    },
    pageContext: {
      ...pageContextInitialState
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

describe('CallToAction', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      }
    })
  })
  it('render correctly DataFull', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ThemeProvider theme={darkMode}>
            <CallToAction
              titulo={'dataFull'}
              descripcion="nada"
              link="https://www.google.com/"
              titleContent="ddd"
            />
          </ThemeProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('CallToAction click', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ThemeProvider theme={darkMode}>
          <CallToAction
            titulo={'QuieroConocer'}
            descripcion="nada"
            link="https://www.google.com/"
            titleContent="ddd"
          />
        </ThemeProvider>
      </Provider>
    )
    const anchor = wrapper.find('#call-to-action-container-link-button')
    anchor.first().simulate('click')
  })
})
