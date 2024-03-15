import React from 'react'
import renderer from 'react-test-renderer'
import SubCategories from './subcategories'
import darkMode from '../../../themes/dark'
import { ThemeProvider } from 'styled-components'
import { cleanup, fireEvent, render } from '@testing-library/react'

describe('SubCategories', () => {
  const data = {
    orden: 1,
    titulo: 'Quiero invertir',
    category: 'Inversión',
    classGtm: 'gtmCuentQuierHacHoyQuieroInvertir',
    IsActivo: false,
    IsIcon: false,
    id: 'e1825aaa-b1c4-50cd-ab37-6b44225c7b3b',
    imagen: {
      fluid: {
        src:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU4LjY2NjcgNTAuNjY2N0M1OC42NjY3IDUxLjM3NCA1OC4zODU3IDUyLjA1MjMgNTcuODg1NiA1Mi41NTI0QzU3LjM4NTUgNTMuMDUyNSA1Ni43MDczIDUzLjMzMzQgNTYgNTMuMzMzNEgxMC42NjY3QzkuMjUyMTkgNTMuMzMzNCA3Ljg5NTYzIDUyLjc3MTUgNi44OTU0NCA1MS43NzEzQzUuODk1MjUgNTAuNzcxMSA1LjMzMzM0IDQ5LjQxNDYgNS4zMzMzNCA0OC4wMDAxVjEzLjMzMzRDNS4zMzMzNCAxMi42MjYyIDUuNjE0MyAxMS45NDc5IDYuMTE0MzkgMTEuNDQ3OEM2LjYxNDQ5IDEwLjk0NzcgNy4yOTI3NyAxMC42NjY3IDguMDAwMDEgMTAuNjY2N0M4LjcwNzI1IDEwLjY2NjcgOS4zODU1MyAxMC45NDc3IDkuODg1NjMgMTEuNDQ3OEMxMC4zODU3IDExLjk0NzkgMTAuNjY2NyAxMi42MjYyIDEwLjY2NjcgMTMuMzMzNFY0OC4wMDAxSDU2QzU2LjcwNzMgNDguMDAwMSA1Ny4zODU1IDQ4LjI4MSA1Ny44ODU2IDQ4Ljc4MTFDNTguMzg1NyA0OS4yODEyIDU4LjY2NjcgNDkuOTU5NSA1OC42NjY3IDUwLjY2NjdaTTU4LjQ1MzMgMTguMjEzNEM1OC4yNTMzIDE3LjcyNjQgNTcuOTEzNiAxNy4zMDk2IDU3LjQ3NyAxNy4wMTUzQzU3LjA0MDQgMTYuNzIxMSA1Ni41MjY1IDE2LjU2MjcgNTYgMTYuNTYwMUg0NS44MTMzQzQ1LjEwNjEgMTYuNTYwMSA0NC40Mjc4IDE2Ljg0MSA0My45Mjc3IDE3LjM0MTFDNDMuNDI3NiAxNy44NDEyIDQzLjE0NjcgMTguNTE5NSA0My4xNDY3IDE5LjIyNjdDNDMuMTQ2NyAxOS45MzQgNDMuNDI3NiAyMC42MTIzIDQzLjkyNzcgMjEuMTEyNEM0NC40Mjc4IDIxLjYxMjUgNDUuMTA2MSAyMS44OTM0IDQ1LjgxMzMgMjEuODkzNEg0OS41NzMzTDQwIDMxLjU3MzRMMzMuMjggMjQuOTg2N0MzMi43ODA0IDI0LjQ5MDEgMzIuMTA0NSAyNC4yMTEzIDMxLjQgMjQuMjExM0MzMC42OTU1IDI0LjIxMTMgMzAuMDE5NiAyNC40OTAxIDI5LjUyIDI0Ljk4NjdMMTYuNzczMyAzNy43MDY3QzE2LjUyMzQgMzcuOTU0NiAxNi4zMjUgMzguMjQ5NiAxNi4xODk2IDM4LjU3NDVDMTYuMDU0MyAzOC44OTk1IDE1Ljk4NDUgMzkuMjQ4IDE1Ljk4NDUgMzkuNjAwMUMxNS45ODQ1IDM5Ljk1MjEgMTYuMDU0MyA0MC4zMDA3IDE2LjE4OTYgNDAuNjI1NkMxNi4zMjUgNDAuOTUwNiAxNi41MjM0IDQxLjI0NTUgMTYuNzczMyA0MS40OTM0QzE3LjAyMTIgNDEuNzQzNCAxNy4zMTYyIDQxLjk0MTcgMTcuNjQxMSA0Mi4wNzcxQzE3Ljk2NjEgNDIuMjEyNSAxOC4zMTQ2IDQyLjI4MjIgMTguNjY2NyA0Mi4yODIyQzE5LjAxODcgNDIuMjgyMiAxOS4zNjczIDQyLjIxMjUgMTkuNjkyMiA0Mi4wNzcxQzIwLjAxNzIgNDEuOTQxNyAyMC4zMTIxIDQxLjc0MzQgMjAuNTYgNDEuNDkzNEwzMS4zODY3IDMwLjY0MDFMMzggMzcuMzMzNEMzOC40OTk2IDM3LjgzMDEgMzkuMTc1NSAzOC4xMDg5IDM5Ljg4IDM4LjEwODlDNDAuNTg0NSAzOC4xMDg5IDQxLjI2MDQgMzcuODMwMSA0MS43NiAzNy4zMzM0TDUzLjMzMzMgMjUuNjgwMVYyOS4zMzM0QzUzLjMzMzMgMzAuMDQwNyA1My42MTQzIDMwLjcxODkgNTQuMTE0NCAzMS4yMTlDNTQuNjE0NSAzMS43MTkxIDU1LjI5MjggMzIuMDAwMSA1NiAzMi4wMDAxQzU2LjcwNzMgMzIuMDAwMSA1Ny4zODU1IDMxLjcxOTEgNTcuODg1NiAzMS4yMTlDNTguMzg1NyAzMC43MTg5IDU4LjY2NjcgMzAuMDQwNyA1OC42NjY3IDI5LjMzMzRWMTkuMjI2N0M1OC42NjI1IDE4Ljg3ODMgNTguNTkgMTguNTM0IDU4LjQ1MzMgMTguMjEzNFoiIGZpbGw9IiNCNEJDQ0UiLz4KPC9zdmc+Cg=='
      }
    },
    subCategorias: [
      {
        titulo: 'Quiero aprender sobre inversiones',
        etiqueta: 'inexperto',
        image: null,
        toltip: null,
        age: null
      },
      {
        titulo: 'Soy experto en inversiones',
        etiqueta: 'experto',
        image: null,
        toltip: null,
        age: null
      }
    ],
    frase: '¿Qué tan experto eres en inversiones?'
  }

  it('Categories renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <SubCategories data={data} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Categories renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <SubCategories data={undefined} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  afterEach(cleanup)
})
