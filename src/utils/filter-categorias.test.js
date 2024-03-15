import { filterCategorias } from './filter-categorias'
import '@testing-library/jest-dom/extend-expect'

const prueba = [
  {
    cliente: [
      {
        contentful_id: 'xxx'
      },
      {
        contentful_id: 'xxx'
      }
    ],
    category: [
      {
        contentful_id: 'xxx'
      },
      {
        contentful_id: 'xxx'
      },
      {}
    ],
    subcategoria: [
      {
        contentful_id: 'xxx'
      },
      {
        contentful_id: 'xxx'
      },
      {}
    ]
  }
]

const prueba2 = [
  {
    cliente: [{}],
    category: [{}],
    subcategoria: [
      {
        contentful_id: 'xxx'
      }
    ]
  }
]

describe('filterCategorias', () => {
  test('Case 1', () => {
    filterCategorias('Pensión', prueba, 'subcategoria', null)
  })

  test('Case 2', () => {
    filterCategorias('Pensión', prueba, 'subcategoria', 'afiliado')
  })

  test('Case 3', () => {
    filterCategorias('Ahorro', prueba2, null, 'empresa')
  })
})
