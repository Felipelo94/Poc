import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import ComponentShare from './component-share'

const store = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

jest.mock('copy-to-clipboard', () => {
  return jest.fn()
})

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ComponentShare
            url="xxxxxxxxx"
            showEmail
            isActive={true}
            setIsShare={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ComponentShare
            url="xxxxxxxxx"
            showEmail
            isActive={true}
            setIsShare={() => {}}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ComponentShare
          url="xxxxxxxxx"
          showEmail
          isActive={false}
          setIsShare={() => {}}
        />
      </Provider>
    )
    wrapper.find('#component-share-container-sesion-close').simulate('click')
  })

  it('renders correctly without props', () => {
    global.innerWidth = 400
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ComponentShare
          url="xxxxxxxxx"
          showEmail
          isActive={false}
          setIsShare={() => {}}
          eventsGA={false}
        />
      </Provider>
    )
    wrapper.find('#component-share-container-sesion-close').simulate('click')
    wrapper.find('#button-email').simulate('click')
  })

  it('renders correctly without props', () => {
    global.innerWidth = 400
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ComponentShare
          url="xxxxxxxxx"
          showEmail
          isActive={false}
          setIsShare={() => {}}
          eventsGA={false}
        />
      </Provider>
    )

    wrapper
      .find('#compartir-facebook')
      .first()
      .simulate('click')
    wrapper
      .find('#compartir-twitter')
      .first()
      .simulate('click')
    wrapper
      .find('#compartir-link')
      .first()
      .simulate('click')
  })

  it('renders correctly without props', () => {
    global.innerWidth = 400
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ComponentShare
          url="xxxxxxxxx"
          showEmail
          isActive={false}
          setIsShare={() => {}}
        />
      </Provider>
    )
    wrapper.find('#component-share-container-sesion-close').simulate('click')
    wrapper
      .find('#compartir-email')
      .first()
      .simulate('click')
    wrapper
      .find('#compartir-facebook')
      .first()
      .simulate('click')
    wrapper
      .find('#compartir-twitter')
      .first()
      .simulate('click')
    wrapper
      .find('#compartir-link')
      .first()
      .simulate('click')
    wrapper
      .find('#component-share-container-copy')
      .first()
      .simulate('click')
  })

  it('renders correctly without props', () => {
    global.innerWidth = 400
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ComponentShare
          url="xxxxxxxxx"
          showEmail
          isActive={false}
          setIsShare={() => {}}
        />
      </Provider>
    )
    wrapper
      .find('#compartir-copy')
      .first()
      .simulate('focus')
    wrapper.find('#component-share-container-copy').simulate('click')
    wrapper.find('#component-share-container-copy').simulate('keydown')
  })

  it('renders correctly without props', () => {
    global.innerWidth = 2000
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ComponentShare
          url="xxxxxxxxx"
          showEmail
          isActive={false}
          setIsShare={() => {}}
        />
      </Provider>
    )
  })

  it('renders correctly without props', () => {
    global.innerWidth = 2000
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ComponentShare
          url="xxxxxxxxx"
          showEmail
          isActive={false}
          setIsShare={() => {}}
          eventsGA={false}
        />
      </Provider>
    )
    wrapper
      .find('.component-share-container-copy')
      .first()
      .simulate('click')
  })

  it('renders correctly without props', () => {
    global.innerWidth = 900
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <ComponentShare
          url="xxxxxxxxx"
          showEmail
          isActive={false}
          setIsShare={() => {}}
          eventsGA={{ category: 'xxxx', action: 'xxxx' }}
        />
      </Provider>
    )
  })
})
