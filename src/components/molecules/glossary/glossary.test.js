import React from 'react'
import { useStaticQuery } from 'gatsby'

import { act, fireEvent, render, screen } from '@testing-library/react'

import GlossaryComponent from './glossary'

jest.mock('react-infinite-scroll-component', () => ({ children, next }) => (
  <>
    {children}
    <button onClick={next}>Next</button>
  </>
))

const data = {
  title: 'Glosario',
  imagenes: [
    {
      imagen:
        '//images.ctfassets.net/y3qdch79qxiw/TTspID302QQRkoAVd7Evo/8325c842545ffae9324702df8ff8079a/GettyImages-1191816185.jpg?w=800&q=50',
      nameImage:
        'Mujer joven de gafas, cabello castaño y camiseta terracota, con un computador y libreta tomando apuntes. Está consultado en el glosario, el significado de las palabras que desconoce.',
      title: 'Glosario'
    },
    {
      imagen:
        '//images.ctfassets.net/y3qdch79qxiw/TTspID302QQRkoAVd7Evo/8325c842545ffae9324702df8ff8079a/GettyImages-1191816185.jpg?w=800&q=50',
      nameImage:
        'Mujer joven de gafas, cabello castaño y camiseta terracota, con un computador y libreta tomando apuntes. Está consultado en el glosario, el significado de las palabras que desconoce.',
      title: 'Glosario'
    }
  ],
  parrafos: [
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Selecciona la letra que deseas consultar',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    }
  ],
  cta: {
    titulo: null,
    textoButton: null,
    url: null
  },
  video: null,
  podcast: null
}

describe('Test for Glossary component', () => {
  beforeEach(() => {
    useStaticQuery.mockReturnValue({
      allContentfulGlosario: {
        edges: [
          {
            node: {
              letra: { letra: 'a' },
              palabra: { palabra: 'abc' },
              significado: { significado: 'abacedario' }
            }
          }
        ]
      }
    })
  })
  test('renders', async () => {
    jest.useFakeTimers()
    const { rerender } = render(<GlossaryComponent data={data} lineGtm="Ahorro" />)
    screen.getByText('Selecciona la letra que deseas consultar')
    await act(async () => {
      fireEvent.click(screen.getByText('Next'))
    })
    await act(async () => {
      fireEvent.click(screen.getByText('Todas'))
    })
    useStaticQuery.mockReturnValue({
      allContentfulGlosario: {
        edges: [
          {
            node: {
              letra: { letra: 'a' },
              palabra: { palabra: 'abc' },
              significado: { significado: 'abacedario' }
            }
          }
        ]
      }
    })

    rerender(<GlossaryComponent data={data} lineGtm="Ahorro" />)
    await act(async () => {
      fireEvent.click(document.getElementById('letter-container-Z'))
    })
  })
})
