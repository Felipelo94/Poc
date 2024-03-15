import { Checkbox, FormControlLabel } from '@material-ui/core'
import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Habeas from './habeas-data'

describe('Habeas', () => {
  it('renders Habeas', () => {
    const tree = renderer.create(<Habeas />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Habeas', () => {
    const tree = mount(<Habeas setState={() => {}} />)
    tree
      .find('#container-habeas-data-check-form')
      .first()
      .simulate('change', { target: { checked: true } })
  })

  it('renders Habeas', () => {
    const tree = mount(<Habeas setState={() => {}} />)
    tree
      .find('#container-habeas-data-check-form')
      .first()
      .simulate('change', { target: { checked: true } })
  })

  it('renders Habeas', () => {
    const tree = mount(<Habeas setState={() => {}} />)
    tree
      .find('#container-habeas-data-check')
      .first()
      .simulate('change', { target: { checked: true } })
  })
})
