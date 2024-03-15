import React from 'react'

import { act, fireEvent, render, screen } from '@testing-library/react'

import IndexPage, { IndexComponent } from './index'
import * as useLineServiceComplete from '../const/graphql/use-line-services-complete'
import * as Molecules from '../components/molecules/index/index'
import * as LayoutMain from './layout-main'
import * as Seo from '../components/internal-pages/common/seo/seo'
import * as Helmet from 'react-helmet'
import * as ServiceIndexDB from '../services/service-indexDB/service-indexDB'
import * as ServiceGeneral from '../services/service-general/service-general'
import * as HomeConfiguration from '../utils/home-configuration'
import * as Tour from 'reactour'

import data from '../utils/__mocks__/generate-pages-utils-data.json'

jest.mock('react-redux', () => ({
  connect: mapStateToProps => {
    mapStateToProps?.({
      welcome: {},
      menu: {},
      tourguide: {}
    })
    return ReactComponent => ReactComponent
  }
}))

delete global.window.location
global.window = Object.create(window)
global.window.location = {
  href: '/',
  pathname: '/',
  origin: 'origin'
}

describe('<IndexPage />', () => {
  beforeEach(() => {
    jest
      .spyOn(useLineServiceComplete, 'useLineServiceComplete')
      .mockImplementation(() => ({}))
    jest.spyOn(LayoutMain, 'default').mockImplementation(() => <>LayoutMain</>)
    jest.spyOn(Molecules, 'default').mockImplementation(() => <>Molecules</>)
    jest.spyOn(Seo, 'default').mockImplementation(() => <>Seo</>)
    jest.spyOn(Helmet, 'Helmet').mockImplementation(() => <>Helmet</>)
    jest.spyOn(ServiceIndexDB, 'getDataIb').mockResolvedValue([])
    jest.spyOn(ServiceGeneral, 'get').mockResolvedValue([])
  })

  test('renders', async () => {
    await act(async () => {
      render(<IndexPage pageContext={{ line: 'line', cliente: 'cliente' }} />)
    })
    screen.getByText(/Seo/)
    screen.getByText(/Helmet/)
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
  })

  test('renders with getDataIb', async () => {
    jest.spyOn(ServiceIndexDB, 'getDataIb').mockResolvedValue([
      {
        category: 'Inversión',
        type: 'type',
        nameuser: 'nameuser',
        host: 'host'
      }
    ])
    process.env.RESTRIGIR_REDIRECT = 'true'
    process.env.PATH_PREFIX = ''
    await act(async () => {
      render(<IndexPage pageContext={{ line: 'line', cliente: 'cliente' }} />)
    })

    expect(window.location.href).toBe(
      'https://proteccion.com/wps/portal/proteccion/web/inversion/home/#/'
    )
  })

  test('renders with getDataIb variant conditions', async () => {
    jest.spyOn(ServiceIndexDB, 'getDataIb').mockResolvedValue([
      {
        category: 'Inversión',
        type: 'type',
        nameuser: 'nameuser',
        host: 'host'
      }
    ])
    process.env.RESTRIGIR_REDIRECT = 'true'
    process.env.PATH_PREFIX = 'prefix'
    await act(async () => {
      render(<IndexPage pageContext={{ line: 'line', cliente: 'cliente' }} />)
    })
    expect(window.location.href).toBe(
      'origin/wps/portal/proteccion/web/inversion/home/#/'
    )
  })

  test('renders with getDataIb variant conditions', async () => {
    global.window.location = {
      href: '/',
      pathname: '/',
      origin: 'origin',
      search: '?tipoCliente=1234&linea=Inversión'
    }
    jest.spyOn(ServiceIndexDB, 'getDataIb').mockResolvedValue([
      {
        category: 'Inversión',
        type: 1234,
        nameuser: 'nameuser',
        host: 'host'
      }
    ])
    process.env.RESTRIGIR_REDIRECT = ''
    process.env.PATH_PREFIX = 'prefix'
    await act(async () => {
      render(<IndexPage pageContext={{ line: 'line', cliente: 'cliente' }} />)
    })
  })

  test('renders with getDataIb variant conditions', async () => {
    global.window.location = {
      href: '/',
      pathname: '/',
      origin: 'origin',
      search: '?x=x'
    }
    jest.spyOn(ServiceIndexDB, 'getDataIb').mockResolvedValue([
      {
        category: 'Inversión',
        type: 'type',
        nameuser: 'nameuser',
        host: 'host'
      }
    ])
    process.env.RESTRIGIR_REDIRECT = ''
    process.env.PATH_PREFIX = 'prefix'
    await act(async () => {
      render(<IndexPage pageContext={{ line: 'line', cliente: 'cliente' }} />)
    })
  })

  test('renders with getDataIb variant conditions', async () => {
    global.window.location = {
      href: '/',
      pathname: '/',
      origin: 'origin',
      search: '?linea=linea'
    }
    jest.spyOn(ServiceIndexDB, 'getDataIb').mockResolvedValue([
      {
        category: 'Inversión',
        type: 'type',
        nameuser: 'nameuser',
        host: 'host'
      }
    ])
    process.env.RESTRIGIR_REDIRECT = ''
    process.env.PATH_PREFIX = 'prefix'
    await act(async () => {
      render(<IndexPage pageContext={{ line: 'line', cliente: 'cliente' }} />)
    })
  })

  test('renders with getDataIb variant conditions', async () => {
    global.window.location = {
      href: '/',
      pathname: '/',
      origin: 'origin',
      search: '?changeModal=modal'
    }
    jest.spyOn(ServiceIndexDB, 'getDataIb').mockResolvedValue([
      {
        category: 'Inversión',
        type: 'type',
        nameuser: 'nameuser',
        host: 'host'
      }
    ])
    process.env.RESTRIGIR_REDIRECT = ''
    process.env.PATH_PREFIX = 'prefix'
    await act(async () => {
      render(<IndexPage pageContext={{ line: 'line', cliente: 'cliente' }} />)
    })
  })

  test('renders with validationLink variant conditions', async () => {
    global.window.location = {
      href: '/',
      pathname: '/home',
      origin: 'origin'
    }
    jest.spyOn(ServiceIndexDB, 'getDataIb').mockResolvedValue([
      {
        category: 'line',
        type: 1234,
        nameuser: 'nameuser',
        host: 'host'
      }
    ])
    process.env.RESTRIGIR_REDIRECT = ''
    process.env.PATH_PREFIX = 'prefix'
    await act(async () => {
      render(<IndexPage pageContext={{ line: 'line', cliente: 1234 }} />)
    })
  })

  test('renders with get', async () => {
    jest.spyOn(ServiceIndexDB, 'getDataIb').mockResolvedValue([
      {
        category: 'category',
        type: 'type',
        nameuser: 'nameuser',
        host: 'host'
      }
    ])
    jest.spyOn(ServiceGeneral, 'get').mockResolvedValue([{}])
    await act(async () => {
      render(<IndexPage pageContext={{ line: 'line', cliente: 'cliente' }} />)
    })
  })

  test('renders <IndexComponent />', async () => {
    jest.useFakeTimers()
    let fnParams
    jest
      .spyOn(HomeConfiguration, 'validationChangeHome')
      .mockImplementation((...params) => {
        fnParams = params
      })
    const { rerender } = render(<IndexComponent />)
    await act(async () => {
      rerender(
        <IndexComponent
          showTest
          pageContext={{ line: 'line', cliente: 'cliente' }}
          dispatch={jest.fn()}
        />
      )
    })

    await act(async () => {
      fnParams[5]()
    })

    await act(async () => {
      fnParams[6]()
    })

    await act(async () => {
      fnParams[7]()
      jest.advanceTimersByTime(500)
    })
  })

  test('renders <IndexComponent />', async () => {
    const { rerender } = render(
      <IndexComponent
        pageContext={{ line: 'line', cliente: 'cliente' }}
        dispatch={jest.fn()}
      />
    )
    await act(async () => {
      rerender(<IndexComponent />)
    })
  })

  test('renders <IndexComponent />', async () => {
    const { rerender } = render(
      <IndexComponent
        pageContext={{ line: 'line', cliente: 'cliente' }}
        dispatch={jest.fn()}
      />
    )
    await act(async () => {
      rerender(
        <IndexComponent
          pageContext={{ line: 'lineX', cliente: 'cliente' }}
          dispatch={jest.fn()}
        />
      )
    })
  })
})
