import React from 'react'
import renderer from 'react-test-renderer'
import BreadCrumb from './bread-crumb'

describe('Bread crumb component', () => {
  global.window = Object.create(window)

  const url = {
    url: 'http://localhost:8000/home/contenido',
    pathname: '/contenido/'
  }

  const secondUrl = {
    url: 'http://localhost:8000/home/contenido',
    pathname: '/contenido/hoal/'
  }

  Object.defineProperty(window, 'location', {
    value: {
      href: url,
      pathname: '/contenido/'
    }
  })

  it('renders correctly without optional props', () => {
    const tree = renderer
      .create(
        <BreadCrumb location={url} crumbLabel="Cesantias" isBrowser={true} />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without optional props', () => {
    const tree = renderer
      .create(
        <BreadCrumb location={url} crumbLabel="Cesantias" isBrowser={false} />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without optional props', () => {
    const tree = renderer
      .create(
        <BreadCrumb
          location={secondUrl}
          crumbLabel="Cesantias"
          isBrowser={true}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without optional props', () => {
    const tree = renderer
      .create(
        <BreadCrumb
          location={secondUrl}
          crumbLabel="Cesantias"
          isBrowser={false}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
