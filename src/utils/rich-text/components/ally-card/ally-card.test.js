import React from 'react'
import { screen, render, fireEvent, createEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { AllyCard } from './ally-card'

const dataTest = {
  data: {
    target: {
      fields: {
        titulo: {
          'en-US': 'test1'
        },
        descripcion: {
          'en-US': 'test2'
        },
        textoCallToAction: {
          'en-US': 'test3'
        },
        linkCallToAction: {
          'en-US': 'https://www.test.com'
        }
      }
    }
  }
}

const dataTestNoValues = {
  data: {
    target: {
      fields: {
        titulo: {},
        descripcion: {},
        textoCallToAction: {},
        linkCallToAction: {}
      }
    }
  }
}

describe('<AllyCard/>', () => {
  test('renders with buttonTHS as true or false', () => {
    render(
      <AllyCard node={dataTest} buttonTHS={false} accessibilityInfo={true} />
    )
    render(
      <AllyCard node={dataTest} buttonTHS={true} accessibilityInfo={true} />
    )
  })

  test('renders without values and executes e.preventDefault()', () => {
    render(
      <AllyCard
        node={dataTestNoValues}
        buttonTHS={false}
        accessibilityInfo={true}
      />
    )

    const link = screen.getByTestId('container-parrafo__card-allies')
    const clickEvent = createEvent.click(link)

    fireEvent(link, clickEvent)

    expect(clickEvent.defaultPrevented).toBe(true)
  })

  test('renders without values and executes e.preventDefault()', () => {
    render(
      <AllyCard node={dataTest} buttonTHS={false} accessibilityInfo={true} />
    )

    const link = screen.getByTestId('container-parrafo__card-allies')
    const clickEvent = createEvent.click(link)

    fireEvent(link, clickEvent)

    expect(clickEvent.defaultPrevented).toBe(false)
  })
})
