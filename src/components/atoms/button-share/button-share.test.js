import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import ButtonShare from './button-share'

const store = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ButtonShare isShare={true} setIsShare={() => {}} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ButtonShare isShare={true} setIsShare={() => {}} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ButtonShare isShare={false} setIsShare={() => {}} />
      </Provider>
    )
    wrapper
      .find('#container-internal-content-componente-share')
      .simulate('click')
  })

  it('renders correctly without props', () => {
    global.innerWidth = 400
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ButtonShare isShare={false} setIsShare={() => {}} widthScreen={400} />
      </Provider>
    )
    wrapper
      .find('#container-internal-content-componente-share')
      .simulate('click')
  })
})
