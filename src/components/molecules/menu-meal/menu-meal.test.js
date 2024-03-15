import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Meal from './menu-meal'
describe('Meal', () => {
  it('renders correctly Meal', () => {
    const indexPage = renderer.create(
      <Meal accessibility={{ fontSize: 3, lineSize: 2 }} data={[]} />
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('meal', () => {
    const menuOptions = [
      {
        titulo: 'Proyecta tu ahorro pensando en lo que puedes ahorrar',
        value: 0
      },
      {
        titulo: 'Proyecta tu ahorro pensando en lo que quieres alcanzar',
        value: 1
      }
    ]
    const wrapper = mount(
      <Meal
        accessibility={{ fontSize: 3, lineSize: 2 }}
        data={menuOptions}
        indexTitle={-1}
        clickEvent={() => {}}
      />
    )
    wrapper
      .find('button')
      .first()
      .simulate('click')
    wrapper
      .find('button')
      .first()
      .simulate('change')
  })

  it('meal', () => {
    const menuOptions = [
      {
        titulo: 'Proyecta tu ahorro pensando en lo que puedes ahorrar',
        value: 0
      },
      {
        titulo: 'Proyecta tu ahorro pensando en lo que quieres alcanzar',
        value: 1
      }
    ]
    const wrapper = mount(
      <Meal
        accessibility={{ fontSize: 3, lineSize: 2 }}
        data={menuOptions}
        indexTitle={1}
        clickEvent={() => {}}
      />
    )
    wrapper
      .find('button')
      .first()
      .simulate('click')
    wrapper
      .find('button')
      .first()
      .simulate('change')
  })
})
