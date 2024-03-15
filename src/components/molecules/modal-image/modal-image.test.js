import { mount } from 'enzyme'
import React from 'react'
import ModalImage from './modal-image'

describe('Button', () => {
  it('renders correctly OficinaComponent', () => {
    const wrapper = mount(
      <ModalImage
        id="infographic"
        image={'xxxxxxxxxxxxx'}
        alt={'xxxxxxxxxxxxxxxxxxxxx'}
        close={() => {}}
      />
    )
    wrapper.find('#modal-body-infographic').simulate('click')
    wrapper.find('#modal-body-infographic').simulate('keydown')
  })
})
