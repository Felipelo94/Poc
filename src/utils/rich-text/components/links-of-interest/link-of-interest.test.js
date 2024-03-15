import React from 'react'
import { screen, render, fireEvent, createEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { LinkOfInterest } from './link-of-interest'

const dataTest = {
  node: {
    data: {
      target: {
        fields: {
          TextoCallToAction: {
            'en-US': 'textCallToAction'
          },
          LinkCallToAction: {
            'en-US': 'linkCallToAction'
          },
          titulo: {
            'en-US': 'title'
          },
          descripcion: {
            'en-US': {
              content: [
                {
                  content: [
                    {
                      value: 'description'
                    }
                  ]
                }
              ]
            }
          }
        },
        gtmTSHStepperAllies: {
          event: {
            category: 'category',
            action: 'action',
            label: 'label'
          }
        }
      }
    }
  }
}

const dataTest2 = {
  node: {
    data: {
      target: {
        fields: {
          TextoCallToAction: {},
          LinkCallToAction: {},
          titulo: {},
          descripcion: {}
        },
        gtmTSHStepperAllies: {
          event: {
            category: 'category',
            action: 'action',
            label: 'label'
          }
        }
      }
    }
  }
}

describe('LinkOfInterest', () => {
  test('renders', () => {
    render(LinkOfInterest(dataTest, true))
    fireEvent.click(
      screen.getByTestId('container-parrafo__card-links-interest')
    )
  })

  test('preventDefault and renders without en-US content', () => {
    render(LinkOfInterest(dataTest2, true))

    const link = screen.getByTestId('container-parrafo__card-links-interest')
    const clickEvent = createEvent.click(link)

    fireEvent(link, clickEvent)

    expect(clickEvent.defaultPrevented).toBe(true)
  })
})
