import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import lightTheme from '../../../themes/light'
import Peperoni from './peperoni'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <Peperoni
            color="green"
            title="xxxxxxxxxxxxx"
            more={true}
            link=""
            titleActive="xxxxxxxxxxxxx"
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <Peperoni
            color="green"
            title="xxxxxxxxxxxxx"
            more={true}
            link=""
            titleActive="xxxxxxxxxx"
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <Peperoni color="green" title="xxxxxxxxxxxxx" more={true} link="" />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('item mouseenter', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <Peperoni
          color="green"
          title="xxxxxxxxxxxxx"
          more={true}
          overModal={() => {}}
        />
      </ThemeProvider>
    )
    wrapper
      .find('.peperoni-container-over')
      .first()
      .simulate('mouseenter')
  })

  it('item mouseleave', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <Peperoni
          color="green"
          title="xxxxxxxxxxxxx"
          more={true}
          overModal={() => {}}
        />
      </ThemeProvider>
    )
    wrapper
      .find('.peperoni-container-over')
      .first()
      .simulate('mouseleave')
  })

  it('link mouseenter', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <Peperoni
          color="green"
          title="xxxxxxxxxxxxx"
          more={false}
          icon={0}
          link={'https:_/dfsd'}
          overModal={() => {}}
        />
      </ThemeProvider>
    )
    wrapper
      .find('#peperoni-container-link-0')
      .first()
      .simulate('mouseenter')
  })

  it('link mouseleave', () => {
    const icon = 3
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <Peperoni
          color="green"
          title="xxxxxxxxxxxxx"
          more={false}
          link={'https:_/dfsd'}
          titleActive={3}
          icon={icon}
          overModal={() => {}}
        />
      </ThemeProvider>
    )
    wrapper
      .find(`#peperoni-container-link-${icon}`)
      .first()
      .simulate('mouseleave')
  })

  it('link mouseleave internal link', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        {' '}
        <Peperoni
          color="green"
          title="xxxxxxxxxxxxx"
          more={false}
          icon={0}
          link={'/ces'}
          overModal={() => {}}
        />{' '}
      </ThemeProvider>
    )
    wrapper
      .find('#peperoni-container-link-0')
      .first()
      .simulate('mouseleave')
  })

  it('link mouseenter internal link', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        {' '}
        <Peperoni
          color="green"
          title="xxxxxxxxxxxxx"
          more={false}
          icon={0}
          link={'/ces'}
          overModal={() => {}}
        />
      </ThemeProvider>
    )
    wrapper
      .find('#peperoni-container-link-0')
      .first()
      .simulate('mouseenter')
  })

  it('onClick', () => {
    const setSelectedTitle = jest.fn()
    const setSelectedMenu = jest.fn()
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <Peperoni
          color="yellow"
          title="xxxxxxxxxxxxx"
          more={false}
          icon={0}
          link={'/ces'}
          overModal={() => {}}
          titleActive={1}
          setSelectedTitle={setSelectedTitle}
          selectedTitle={1}
          setSelectedMenu={setSelectedMenu}
        />
      </ThemeProvider>
    )
    wrapper
      .find('#peperoni-container-link-0')
      .first()
      .simulate('click')
    expect(setSelectedTitle).toHaveBeenCalledTimes(1)
  })
})
