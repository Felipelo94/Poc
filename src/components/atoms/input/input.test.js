import React from 'react'
import renderer from 'react-test-renderer'
import Input from './input'
import { mount } from 'enzyme'

describe('Input', () => {
  it('renders Input', () => {
    const tree = renderer.create(<Input />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Input classGtm', () => {
    const tree = renderer.create(<Input classGtm="dsfsdf" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Input chanes', () => {
    const wrapper = mount(
      <Input id="hola" classGtm="dsfsdf" label="adf" setValue={() => {}} />
    )
    wrapper
      .find('#ipnut-edit-hola')
      .simulate('change', { target: { value: 'abc' } })
  })

  it('renders Input chanes', () => {
    const wrapper = mount(
      <Input
        id="hola"
        max={100}
        onlyNumber={true}
        maxLength={1}
        classGtm="dsfsdf"
        label="adf"
        setValue={() => {}}
      />
    )
    wrapper
      .find('#ipnut-edit-hola')
      .simulate('change', { target: { value: '123' } })
  })

  it('renders Input no number', () => {
    const wrapper = mount(
      <Input
        id="hola"
        max={100}
        mandatory={true}
        classGtm="dsfsdf"
        label="adf"
        setValue={() => {}}
      />
    )
    wrapper
      .find('#ipnut-edit-hola')
      .simulate('change', { target: { value: '' } })
  })

  it('renders Input mandatury fullfil', () => {
    const wrapper = mount(
      <Input
        id="hola"
        max={100}
        mandatory={true}
        classGtm="dsfsdf"
        label="adf"
        setValue={() => {}}
      />
    )
    wrapper
      .find('#ipnut-edit-hola')
      .simulate('change', { target: { value: 'Prebaa' } })
  })

  it('renders Input mandatury fullfil focus', () => {
    const wrapper = mount(
      <Input
        id="hola"
        max={100}
        mandatory={true}
        classGtm="dsfsdf"
        label="adf"
        setValue={() => {}}
      />
    )
    wrapper
      .find('#ipnut-edit-hola')
      .simulate('change', { target: { value: 'Prebaa' } })
    wrapper.find('#ipnut-edit-hola').simulate('focus')
  })

  it('renders Input no mandatury fullfil focus', () => {
    const wrapper = mount(
      <Input
        id="hola"
        max={100}
        mandatory={false}
        classGtm="dsfsdf"
        label="adf"
        setValue={() => {}}
      />
    )
    wrapper
      .find('#ipnut-edit-hola')
      .simulate('change', { target: { value: 'Prebaa' } })
    wrapper.find('#ipnut-edit-hola').simulate('focus')
  })

  it('renders Input mandatury fullfil blur minLength  menor', () => {
    const wrapper = mount(
      <Input
        id="hola"
        max={100}
        minLength={5}
        mandatory={true}
        classGtm="dsfsdf"
        label="adf"
        setValue={() => {}}
      />
    )
    wrapper
      .find('#ipnut-edit-hola')
      .simulate('change', { target: { value: 'Pre' } })
    wrapper.find('#ipnut-edit-hola').simulate('blur')
  })

  it('renders Input mandatury fullfil blur minLength', () => {
    const wrapper = mount(
      <Input
        id="hola"
        max={100}
        email={true}
        minLength={5}
        mandatory={true}
        classGtm="dsfsdf"
        label="adf"
        setValue={() => {}}
      />
    )
    wrapper
      .find('#ipnut-edit-hola')
      .simulate('change', { target: { value: 'Prebbsbb' } })
    wrapper.find('#ipnut-edit-hola').simulate('blur')
  })

  it('renders Input mandatury fullfil blur minLength', () => {
    const wrapper = mount(
      <Input
        id="hola"
        max={100}
        email={true}
        minLength={5}
        mandatory={true}
        classGtm="dsfsdf"
        label="adf"
        setValue={() => {}}
      />
    )
    wrapper
      .find('#ipnut-edit-hola')
      .simulate('change', { target: { value: 'sjcantilo@gmail.com' } })
    wrapper.find('#ipnut-edit-hola').simulate('blur')
  })
  it('renders Input chanes', () => {
    const wrapper = mount(
      <Input
        format="currency"
        mandatory={true}
        icon={''}
        id="hola"
        max={100}
        onlyNumber={true}
        classGtm="dsfsdf"
        label="adf"
        setValue={() => {}}
      />
    )
    wrapper
      .find('#ipnut-edit-hola')
      .simulate('change', { target: { value: '123' } })
  })
})
