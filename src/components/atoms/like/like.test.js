import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import Like from './like'

const store = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

describe('Test for Like component feedback section', () => {
  it('should render comment section when click on like button', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Like />
      </Provider>
    )
    wrapper.find('#likeDefault').simulate('click')
    wrapper.update()
    expect(wrapper.find('.like-container-comment-value').exists()).toBeTruthy()
    expect(wrapper.find('.like-container-comment-button').exists()).toBeTruthy()
  })

  it('should render comment section when click on dislike button', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Like />
      </Provider>
    )
    wrapper.find('#noLike').simulate('click')
    wrapper.update()
    expect(wrapper.find('.like-container-comment').exists()).toBeTruthy()
    expect(
      wrapper.find('input.button-container__button--primary').exists()
    ).toBeTruthy()
  })
})
