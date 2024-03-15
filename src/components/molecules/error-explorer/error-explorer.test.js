import React from 'react'
import { mount } from 'enzyme'
import ErrorExplorerComponente from './error-explorer-componente'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = mount(<ErrorExplorerComponente />)
    tree
      .find('#error-explorer-container-info-other-navegador-icon-1')
      .simulate('click')
    tree
      .find('#error-explorer-container-info-other-navegador-icon-2')
      .simulate('click')
    tree
      .find('#error-explorer-container-info-other-navegador-icon-3')
      .simulate('click')
    tree
      .find('#error-explorer-container-info-other-navegador-icon-4')
      .simulate('click')
  })
})
