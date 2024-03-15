import React from 'react'

import { act, fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import * as Helmet from 'react-helmet'
import * as GatsbyLink from 'gatsby-link'

import darkMode from '../../../../themes/dark'
import MenuChannels from '../menu-channels/menu-channels'

delete global.window.open
delete global.window.location
global.window = Object.create(window)
global.window.open = () => {}
global.window.location = {
  href: '/',
  pathname: '/',
  origin: 'origin'
}

describe('<MenuChannels />', () => {
  beforeEach(() => {
    jest.spyOn(Helmet, 'Helmet').mockImplementation(() => <>Helmet</>)
    jest.spyOn(GatsbyLink, 'navigate').mockImplementation(() => jest.fn())
  })

  test('renders', () => {
    render(
      <ThemeProvider theme={darkMode}>
        <MenuChannels
          lines={[{ numeroContacto: 'numeroContacto', titulo: 'titulo' }]}
        />
      </ThemeProvider>
    )
    screen.getByText('Canales de Servicio')
  })

  test('renders with NEW PRONTO env', () => {
    process.env.NEW_PRONTO = 'true'
    render(
      <ThemeProvider theme={darkMode}>
        <MenuChannels
          lines={[{ numeroContacto: 'numeroContacto', titulo: 'titulo' }]}
        />
      </ThemeProvider>
    )
    screen.getByText('Canales de Servicio')
  })

  test('renders with theme', () => {
    render(
      <ThemeProvider theme={darkMode}>
        <MenuChannels
          lines={[{ numeroContacto: 'numeroContacto', titulo: 'titulo' }]}
        />
      </ThemeProvider>
    )
    screen.getByText('Canales de Servicio')
  })

  test('renders and open menu and close menu', () => {
    render(
      <ThemeProvider theme={darkMode}>
        <MenuChannels
          lines={[{ numeroContacto: 'numeroContacto', titulo: 'titulo' }]}
        />
      </ThemeProvider>
    )
    act(() => {
      fireEvent.click(
        document.getElementsByClassName('channels-menu__open-button')[0]
      )
    })
    act(() => {
      fireEvent.click(
        document.getElementsByClassName('channels-menu__close-button')[0]
      )
    })

    act(() => {
      fireEvent.animationEnd(
        document.getElementsByClassName('channels-menu__circular-menu')[0]
      )
    })
  })

  test('renders and open menu and close menu', () => {
    render(
      <ThemeProvider theme={darkMode}>
        <MenuChannels
          lines={[{ numeroContacto: 'numeroContacto', titulo: 'titulo' }]}
        />
      </ThemeProvider>
    )
    act(() => {
      fireEvent.click(
        document.getElementsByClassName('channels-menu__open-button')[0]
      )
    })
    act(() => {
      fireEvent.animationEnd(
        document.getElementsByClassName('channels-menu__circular-menu')[0]
      )
    })
  })

  test('renders and open Canales de Servicio', () => {
    render(
      <ThemeProvider theme={darkMode}>
        <MenuChannels
          lines={[{ numeroContacto: 'numeroContacto', titulo: 'titulo' }]}
        />
      </ThemeProvider>
    )
    act(() => {
      fireEvent.click(
        document.getElementsByClassName('channels-menu__open-button')[0]
      )
    })
    act(() => {
      fireEvent.click(screen.getByText('Canales de Servicio'))
    })
  })

  test('renders and open Líneas de Servicio', () => {
    render(
      <ThemeProvider theme={darkMode}>
        <MenuChannels
          lines={[{ numeroContacto: 'numeroContacto', titulo: 'titulo' }]}
        />
      </ThemeProvider>
    )
    act(() => {
      fireEvent.click(
        document.getElementsByClassName('channels-menu__open-button')[0]
      )
    })
    act(() => {
      fireEvent.keyDown(screen.getByText('Líneas de Servicio'))
    })
    fireEvent.click(
      document.getElementsByClassName('attention-lines__container')[0]
    )
    act(() => {
      fireEvent.click(
        document.getElementsByClassName('channels-menu__open-button')[0]
      )
    })
    act(() => {
      fireEvent.click(screen.getByText('Líneas de Servicio'))
    })
    fireEvent.keyDown(document.getElementsByClassName('attention-lines')[0])
    act(() => {
      fireEvent.click(
        document.getElementsByClassName('channels-menu__open-button')[0]
      )
    })
    act(() => {
      fireEvent.click(screen.getByText('Líneas de Servicio'))
    })
    act(() => {
      fireEvent.click(screen.getByText('numeroContacto'))
    })
  })

  test('renders and open Líneas de Servicio without them', () => {
    render(
      <MenuChannels
        lines={[{ numeroContacto: 'numeroContacto', titulo: 'titulo' }]}
      />
    )
    act(() => {
      fireEvent.click(
        document.getElementsByClassName('channels-menu__open-button')[0]
      )
    })
    act(() => {
      fireEvent.keyDown(screen.getByText('Líneas de Servicio'))
    })
    fireEvent.click(
      document.getElementsByClassName('attention-lines__container')[0]
    )
    act(() => {
      fireEvent.click(
        document.getElementsByClassName('channels-menu__open-button')[0]
      )
    })
    act(() => {
      fireEvent.click(screen.getByText('Líneas de Servicio'))
    })
    fireEvent.keyDown(document.getElementsByClassName('attention-lines')[0])
    act(() => {
      fireEvent.click(
        document.getElementsByClassName('channels-menu__open-button')[0]
      )
    })
    act(() => {
      fireEvent.click(screen.getByText('Líneas de Servicio'))
    })
    act(() => {
      fireEvent.click(screen.getByText('numeroContacto'))
    })
  })

  test('renders and open WhatsApp', () => {
    render(
      <ThemeProvider theme={darkMode}>
        <MenuChannels
          lines={[{ numeroContacto: 'numeroContacto', titulo: 'titulo' }]}
        />
      </ThemeProvider>
    )
    act(() => {
      fireEvent.click(
        document.getElementsByClassName('channels-menu__open-button')[0]
      )
    })
    act(() => {
      fireEvent.click(screen.getByText('WhatsApp'))
    })
  })
})
