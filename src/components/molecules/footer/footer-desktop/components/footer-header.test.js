import { shallow } from 'enzyme'
import React from 'react'
import { Footer } from './footer-header'

const defaultProps = {
  dataUrlFooter: {
    allContentfulCanal: {
      edges: [
        {
          node: {
            urlSeo: 'oficinas'
          }
        },
        {
          node: {
            urlSeo: 'lineas'
          }
        },
        {
          node: {
            urlSeo: 'app'
          }
        }
      ]
    }
  }
}
describe('Test for FooterHeader component', () => {
  test('should render without props', () => {
    const wrapper = shallow(<Footer {...defaultProps} />)
    expect(wrapper.hasClass('footer-desktop__header')).toBeTruthy()
    expect(
      wrapper
        .find('Anchor')
        .first()
        .hasClass('footer-header__option')
    ).toBeTruthy()
    expect(wrapper.find('Anchor').length).toBe(4)
  })

  test('should render without props and simulate click and keyDown', () => {
    const preventDefaultfn = jest.fn()
    const wrapper = shallow(<Footer {...defaultProps} />)
    wrapper
      .find('Anchor')
      .forEach(element =>
        element.simulate('click', { preventDefault: preventDefaultfn })
      )
    wrapper.find('Anchor').forEach(element =>
      element.simulate('keydown', {
        preventDefault: preventDefaultfn,
        keyCode: 13
      })
    )
    wrapper.find('Anchor').forEach(element =>
      element.simulate('keydown', {
        preventDefault: preventDefaultfn,
        keyCode: 11
      })
    )

    expect(wrapper.hasClass('footer-desktop__header')).toBeTruthy()
    expect(wrapper.find('Anchor').length).toBe(4)
    expect(preventDefaultfn).toBeCalledTimes(2)
  })
})
