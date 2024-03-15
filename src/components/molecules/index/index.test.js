import React from 'react'
import { Provider } from 'react-redux'
import render from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import IndexPage from './index'
import { mount } from 'enzyme'
import Category from '../../atoms/category/category'
import SubCategory from '../../atoms/subcategory/subcategory'
import { IDBFactory, IDBKeyRange, reset } from 'shelving-mock-indexeddb'
import InputRange from '../../atoms/input-range/input-range'
import { ThemeProvider } from 'styled-components'
import lightTheme from '../../../themes/light'

jest.useFakeTimers()

const mockStore = configureStore()
const getSuccess = jest.fn(() => Promise.resolve({ ip: '10.52.25.65' }))
const getSuccesa = jest.fn(() => Promise.resolve([{ ip: '10.52.25.65' }]))
const getData = jest.fn(() =>
  Promise.resolve([{ name: '', hostUser: { host: '' }, category: 'Cesantías' }])
)
const initialState = {
  welcome: {
    nameValue: '',
    typeUSer: 1
  },
  home: {
    categoria: 'Cesantías',
    subcategoria: 'Cesante'
  },
  menu: {
    status: false
  },
  youcantmiss: {
    userValue: []
  }
}

describe('IndexPage', () => {
  let store
  window.indexedDB = new IDBFactory()

  window.IDBKeyRange = IDBKeyRange

  beforeEach(() => reset())
  afterEach(() => reset())

  beforeEach(() => jest.useFakeTimers())
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })

  const dataj = {
    allContentfulContenidosPaginas: {
      edges: [
        {
          node: {
            nombreTexto: 'titulo-categorias',
            valorTexto: {
              internal: {
                content: '¿Qué quieres hacer hoy?'
              }
            }
          }
        }
      ]
    },
    allContentfulCategoriasContenidos: {
      edges: [
        {
          node: {
            orden: 3,
            titulo: 'Saber sobre Pensiones',
            category: 'Pensión',
            classGtm: 'gtmCuentQuierHacHoySabSobPension',
            IsActivo: true,
            IsIcon: true,
            id: 'e1825aaa-b1c4-50cd-ab37-6b44225c7b3b',
            imagen: {
              fluid: {
                src:
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zNS4wNjY3IDI5LjcyMTFIMzQuMjRWMjcuMDU1OEgzNy42QzM4LjE1NTQgMjYuOTk1MyAzOC42Njg4IDI2LjczMiAzOS4wNDE4IDI2LjMxNjNDMzkuNDE0OSAyNS45MDA3IDM5LjYyMTIgMjUuMzYyIDM5LjYyMTIgMjQuODAzNkMzOS42MjEyIDI0LjI0NTIgMzkuNDE0OSAyMy43MDY1IDM5LjA0MTggMjMuMjkwOUMzOC42Njg4IDIyLjg3NTIgMzguMTU1NCAyMi42MTE5IDM3LjYgMjIuNTUxNEgzNC4yNFYyMC45MjU2QzM0LjI0IDIwLjYyOCAzNC4xODE0IDIwLjMzMzQgMzQuMDY3NSAyMC4wNTg2QzMzLjk1MzUgMTkuNzgzNyAzMy43ODY2IDE5LjUzNCAzMy41NzYxIDE5LjMyMzZDMzMuMzY1NiAxOS4xMTMyIDMzLjExNTcgMTguOTQ2MyAzMi44NDA3IDE4LjgzMjVDMzIuNTY1NyAxOC43MTg2IDMyLjI3MSAxOC42NiAzMS45NzMzIDE4LjY2QzMxLjY3NTcgMTguNjYgMzEuMzgwOSAxOC43MTg2IDMxLjEwNTkgMTguODMyNUMzMC44MzA5IDE4Ljk0NjMgMzAuNTgxIDE5LjExMzIgMzAuMzcwNiAxOS4zMjM2QzMwLjE2MDEgMTkuNTM0IDI5Ljk5MzEgMTkuNzgzNyAyOS44NzkyIDIwLjA1ODZDMjkuNzY1MyAyMC4zMzM0IDI5LjcwNjcgMjAuNjI4IDI5LjcwNjcgMjAuOTI1NlYyMi42ODQ3SDI4Ljg4QzI3LjM0NTMgMjIuNjg0NyAyNS44NzM0IDIzLjI5NCAyNC43ODgyIDI0LjM3ODdDMjMuNzAzIDI1LjQ2MzQgMjMuMDkzMyAyNi45MzQ1IDIzLjA5MzMgMjguNDY4NEMyMy4wOTMzIDMwLjAwMjQgMjMuNzAzIDMxLjQ3MzUgMjQuNzg4MiAzMi41NTgyQzI1Ljg3MzQgMzMuNjQyOCAyNy4zNDUzIDM0LjI1MjIgMjguODggMzQuMjUyMkgyOS43MDY3VjM2Ljc4NDNIMjUuMzZDMjUuMDQzNSAzNi43NDk4IDI0LjcyMzMgMzYuNzgyNCAyNC40MjAyIDM2Ljg3OThDMjQuMTE3MSAzNi45NzczIDIzLjgzOCAzNy4xMzc1IDIzLjYwMSAzNy4zNUMyMy4zNjQgMzcuNTYyNCAyMy4xNzQ0IDM3LjgyMjQgMjMuMDQ0NyAzOC4xMTNDMjIuOTE0OSAzOC40MDM2IDIyLjg0NzggMzguNzE4MiAyMi44NDc4IDM5LjAzNjVDMjIuODQ3OCAzOS4zNTQ3IDIyLjkxNDkgMzkuNjY5MyAyMy4wNDQ3IDM5Ljk1OTlDMjMuMTc0NCA0MC4yNTA1IDIzLjM2NCA0MC41MTA1IDIzLjYwMSA0MC43MjI5QzIzLjgzOCA0MC45MzU0IDI0LjExNzEgNDEuMDk1NiAyNC40MjAyIDQxLjE5MzFDMjQuNzIzMyA0MS4yOTA2IDI1LjA0MzUgNDEuMzIzMSAyNS4zNiA0MS4yODg3SDI5LjcwNjdWNDMuMDQ3OEMyOS43MDY3IDQzLjY0ODYgMjkuOTQ1NSA0NC4yMjQ5IDMwLjM3MDYgNDQuNjQ5N0MzMC43OTU2IDQ1LjA3NDYgMzEuMzcyMiA0NS4zMTMzIDMxLjk3MzMgNDUuMzEzM0MzMi41NzQ1IDQ1LjMxMzMgMzMuMTUxIDQ1LjA3NDYgMzMuNTc2MSA0NC42NDk3QzM0LjAwMTIgNDQuMjI0OSAzNC4yNCA0My42NDg2IDM0LjI0IDQzLjA0NzhWNDEuMjg4N0gzNS4wNjY3QzM2LjYwMTQgNDEuMjg4NyAzOC4wNzMyIDQwLjY3OTMgMzkuMTU4NSAzOS41OTQ2QzQwLjI0MzcgMzguNTEgNDAuODUzMyAzNy4wMzg4IDQwLjg1MzMgMzUuNTA0OUM0MC44NTMzIDMzLjk3MDkgNDAuMjQzNyAzMi40OTk4IDM5LjE1ODUgMzEuNDE1MkMzOC4wNzMyIDMwLjMzMDUgMzYuNjAxNCAyOS43MjExIDM1LjA2NjcgMjkuNzIxMVpNMjkuNzMzMyAyOS43MjExSDI4LjkwNjdDMjguNzM5OCAyOS43MjQ3IDI4LjU3NCAyOS42OTQ5IDI4LjQxODggMjkuNjMzNUMyOC4yNjM3IDI5LjU3MjIgMjguMTIyNCAyOS40ODA1IDI4LjAwMzEgMjkuMzYzOEMyNy44ODM5IDI5LjI0NzEgMjcuNzg5MiAyOS4xMDc4IDI3LjcyNDYgMjguOTU0MUMyNy42NTk5IDI4LjgwMDMgMjcuNjI2NiAyOC42MzUyIDI3LjYyNjcgMjguNDY4NEMyNy42MjY3IDI4LjEyOTEgMjcuNzYxNSAyNy44MDM3IDI4LjAwMTYgMjcuNTYzOEMyOC4yNDE2IDI3LjMyMzkgMjguNTY3MiAyNy4xODkxIDI4LjkwNjcgMjcuMTg5MUgyOS43MzMzVjI5LjcyMTFaTTM1LjA2NjcgMzYuNzg0M0gzNC4yNFYzNC4yNTIySDM1LjA2NjdDMzUuMjMzNSAzNC4yNDg2IDM1LjM5OTMgMzQuMjc4NCAzNS41NTQ1IDM0LjMzOThDMzUuNzA5NiAzNC40MDExIDM1Ljg1MSAzNC40OTI5IDM1Ljk3MDIgMzQuNjA5NUMzNi4wODk0IDM0LjcyNjIgMzYuMTg0MSAzNC44NjU1IDM2LjI0ODggMzUuMDE5M0MzNi4zMTM0IDM1LjE3MyAzNi4zNDY3IDM1LjMzODEgMzYuMzQ2NyAzNS41MDQ5QzM2LjM0NjcgMzUuODQ0MiAzNi4yMTE4IDM2LjE2OTYgMzUuOTcxOCAzNi40MDk1QzM1LjczMTcgMzYuNjQ5NSAzNS40MDYxIDM2Ljc4NDMgMzUuMDY2NyAzNi43ODQzWk0zMiA1OC42NjY2QzMxLjU4MjYgNTguNjY0MSAzMS4xNzE1IDU4LjU2MzcgMzAuOCA1OC4zNzM0QzI5Ljk0NjcgNTcuOTQ2OSAxMC42NjY3IDQ4LjAwNTMgMTAuNjY2NyAzMi42NTNWMTQuOTgxOUMxMC42NzAzIDE0LjQ0MTggMTAuODM4IDEzLjkxNTYgMTEuMTQ3NSAxMy40NzNDMTEuNDU3MSAxMy4wMzAzIDExLjg5MzggMTIuNjkyMSAxMi40IDEyLjUwMzFMMzEuMDY2NyA1LjQ5MzMxQzMxLjY3MDYgNS4yNzk5IDMyLjMyOTQgNS4yNzk5IDMyLjkzMzMgNS40OTMzMUw1MS42IDEyLjUwMzFDNTIuMTA2MSAxMi42OTIxIDUyLjU0MjkgMTMuMDMwMyA1Mi44NTI0IDEzLjQ3M0M1My4xNjIgMTMuOTE1NiA1My4zMjk3IDE0LjQ0MTggNTMuMzMzMyAxNC45ODE5VjMyLjY1M0M1My4zMzMzIDQ4LjExMTkgMzQuMDI2NyA1Ny45NDY5IDMzLjIgNTguMzQ2N0MzMi44MzA4IDU4LjU0NjMgMzIuNDE5NiA1OC42NTU5IDMyIDU4LjY2NjZaTTE2IDE2Ljg0NzZWMzIuNjUzQzE2IDQyLjkxNDUgMjguMTA2NyA1MC42OTczIDMyIDUyLjkzNjFDMzUuODkzMyA1MC42OTczIDQ4IDQyLjkxNDUgNDggMzIuNjUzVjE2Ljg0NzZMMzIgMTAuODUwNkwxNiAxNi44NDc2WiIgZmlsbD0iIzAwMzNBMCIvPg0KPC9zdmc+DQo='
              }
            },
            subCategorias: [
              {
                titulo: 'Pensión Obligatoria',
                etiqueta: 'pension-obligatoria',
                image:
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyLjAwMDMgMi42NjY2OUMxNS43MzM3IDIuNjY2NjkgMi42NjY5OSAxNS43MzM0IDIuNjY2OTkgMzJDMi42NjY5OSA0OC4yNjY3IDE1LjczMzcgNjEuMzMzNCAzMi4wMDAzIDYxLjMzMzRDNDguMjY3IDYxLjMzMzQgNjEuMzMzNyA0OC4yNjY3IDYxLjMzMzcgMzJDNjEuMzMzNyAxNS43MzM0IDQ4LjI2NyAyLjY2NjY5IDMyLjAwMDMgMi42NjY2OVpNMzIuMDAwMyA1NkMxOC42NjcgNTYgOC4wMDAzMyA0NS4zMzM0IDguMDAwMzMgMzJDOC4wMDAzMyAxOC42NjY3IDE4LjY2NyA4LjAwMDAyIDMyLjAwMDMgOC4wMDAwMkM0NS4zMzM3IDguMDAwMDIgNTYuMDAwMyAxOC42NjY3IDU2LjAwMDMgMzJDNTYuMDAwMyA0NS4zMzM0IDQ1LjMzMzcgNTYgMzIuMDAwMyA1NlpNMzUuNzMzNyAyOS4zMzM0SDM0LjY2N1YyNC41MzM0SDM5LjIwMDNDNDAuODAwMyAyNC41MzM0IDQxLjg2NyAyMy40NjY3IDQxLjg2NyAyMS44NjY3QzQxLjg2NyAyMC4yNjY3IDQwLjgwMDMgMTkuMiAzOS4yMDAzIDE5LjJIMzQuNjY3VjE2QzM0LjY2NyAxNC40IDMzLjYwMDMgMTMuMzMzNCAzMi4wMDAzIDEzLjMzMzRDMzAuNDAwMyAxMy4zMzM0IDI5LjMzMzcgMTQuNCAyOS4zMzM3IDE2VjE5LjJIMjguMjY3QzI0LjAwMDMgMTkuMiAyMC41MzM3IDIyLjY2NjcgMjAuNTMzNyAyNi45MzM0QzIwLjUzMzcgMzEuMiAyNC4wMDAzIDM0LjY2NjcgMjguMjY3IDM0LjY2NjdIMjkuMzMzN1YzOS40NjY3SDIzLjIwMDNDMjEuNjAwMyAzOS40NjY3IDIwLjUzMzcgNDAuNTMzNCAyMC41MzM3IDQyLjEzMzRDMjAuNTMzNyA0My43MzM0IDIxLjYwMDMgNDQuOCAyMy4yMDAzIDQ0LjhIMjkuMzMzN1Y0OEMyOS4zMzM3IDQ5LjYgMzAuNDAwMyA1MC42NjY3IDMyLjAwMDMgNTAuNjY2N0MzMy42MDAzIDUwLjY2NjcgMzQuNjY3IDQ5LjYgMzQuNjY3IDQ4VjQ0LjhIMzUuNzMzN0M0MC4wMDAzIDQ0LjggNDMuNDY3IDQxLjMzMzQgNDMuNDY3IDM3LjA2NjdDNDMuNDY3IDMyLjggNDAuMDAwMyAyOS4zMzM0IDM1LjczMzcgMjkuMzMzNFpNMjkuMzMzNyAyOS4zMzM0SDI4LjI2N0MyNi45MzM3IDI5LjMzMzQgMjUuODY3IDI4LjI2NjcgMjUuODY3IDI2LjkzMzRDMjUuODY3IDI1LjYgMjYuOTMzNyAyNC41MzM0IDI4LjI2NyAyNC41MzM0SDI5LjMzMzdWMjkuMzMzNFpNMzUuNzMzNyAzOS40NjY3SDM0LjY2N1YzNC42NjY3SDM1LjczMzdDMzcuMDY3IDM0LjY2NjcgMzguMTMzNyAzNS43MzMzIDM4LjEzMzcgMzcuMDY2N0MzOC4xMzM3IDM4LjQgMzcuMDY3IDM5LjQ2NjcgMzUuNzMzNyAzOS40NjY3WiIgZmlsbD0iIzAwMzNBMCIvPgo8L3N2Zz4K',
                toltip:
                  'Selecciona esta opción si estás pensionado por vejez, si estás construyendo tu pensión o si quieres afiliarte',
                age: true
              },
              {
                titulo: 'Pensión de Invalidez o Sobrevivencia',
                etiqueta: 'pension-inv-sobre',
                image:
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA2NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNy4zMzMzIDEzLjY2NjZDMzcuMzMzMyAyMS4xMzMzIDMxLjQ2NjcgMjcgMjQgMjdDMTYuNTMzMyAyNyAxMC42NjY3IDIxLjEzMzMgMTAuNjY2NyAxMy42NjY2QzEwLjY2NjcgNi4xOTk5OCAxNi41MzMzIDAuMzMzMzEzIDI0IDAuMzMzMzEzQzMxLjQ2NjcgMC4zMzMzMTMgMzcuMzMzMyA2LjE5OTk4IDM3LjMzMzMgMTMuNjY2NlpNMzIgMTMuNjY2NkMzMiA5LjEzMzMxIDI4LjUzMzMgNS42NjY2NSAyNCA1LjY2NjY1QzE5LjQ2NjcgNS42NjY2NSAxNiA5LjEzMzMxIDE2IDEzLjY2NjZDMTYgMTguMiAxOS40NjY3IDIxLjY2NjYgMjQgMjEuNjY2NkMyOC41MzMzIDIxLjY2NjYgMzIgMTguMiAzMiAxMy42NjY2Wk0wIDQ1LjY2NjZDMCAzOC4yIDUuODY2NjcgMzIuMzMzMyAxMy4zMzMzIDMyLjMzMzNIMzQuNjY2N0M0Mi4xMzMzIDMyLjMzMzMgNDggMzguMiA0OCA0NS42NjY2VjUxQzQ4IDUyLjYgNDYuOTMzMyA1My42NjY2IDQ1LjMzMzMgNTMuNjY2NkM0My43MzMzIDUzLjY2NjYgNDIuNjY2NyA1Mi42IDQyLjY2NjcgNTFWNDUuNjY2NkM0Mi42NjY3IDQxLjEzMzMgMzkuMiAzNy42NjY2IDM0LjY2NjcgMzcuNjY2NkgxMy4zMzMzQzguOCAzNy42NjY2IDUuMzMzMzMgNDEuMTMzMyA1LjMzMzMzIDQ1LjY2NjZWNTFDNS4zMzMzMyA1Mi42IDQuMjY2NjcgNTMuNjY2NiAyLjY2NjY3IDUzLjY2NjZDMS4wNjY2NyA1My42NjY2IDAgNTIuNiAwIDUxVjQ1LjY2NjZaTTUzLjg2NjcgMzIuODY2OEM1Mi41MzMzIDMyLjYwMDIgNTAuOTMzMyAzMy40MDAyIDUwLjY2NjcgMzQuNzMzNUM1MC40IDM2LjA2NjggNTEuMiAzNy42NjY4IDUyLjUzMzMgMzcuOTMzNUM1NiAzOC43MzM1IDU4LjQgNDEuOTMzNSA1OC40IDQ1LjY2NjhWNTEuMDAwMkM1OC40IDUyLjYwMDIgNTkuNDY2NyA1My42NjY4IDYxLjA2NjcgNTMuNjY2OEM2Mi42NjY3IDUzLjY2NjggNjMuNzMzMyA1Mi42MDAyIDYzLjczMzMgNTEuMDAwMlY0NS42NjY4QzY0IDM5LjUzMzUgNjAgMzQuMjAwMiA1My44NjY3IDMyLjg2NjhaTTQwIDIuNzMzMDFDNDAuNTMzNCAxLjEzMzAxIDQxLjg2NjcgMC4zMzMwMTQgNDMuMiAwLjg2NjM0OEM1MC40IDIuNDY2MzUgNTQuNjY2NyA5LjkzMzAxIDUyLjggMTcuMzk5N0M1MS43MzM0IDIyLjE5OTcgNDggMjUuNjY2MyA0My4yIDI2Ljk5OTdINDIuNjY2N0M0MS4zMzM0IDI2Ljk5OTcgNDAuMjY2NyAyNi4xOTk3IDQwIDI0Ljg2NjNDMzkuNDY2NyAyMy41MzMgNDAuNTMzNCAyMS45MzMgNDEuODY2NyAyMS42NjYzQzQ0LjggMjAuODY2MyA0Ni45MzM0IDE4LjczMyA0Ny43MzM0IDE1Ljc5OTdDNDguOCAxMS4yNjYzIDQ2LjEzMzQgNi45OTk2OCA0MS44NjY3IDUuOTMzMDFDNDAuNTMzNCA1LjY2NjM1IDM5LjczMzQgNC4wNjYzNSA0MCAyLjczMzAxWiIgZmlsbD0iIzAwMzNBMCIvPgo8L3N2Zz4K',
                toltip:
                  'Selecciona esta opción si estás pensionado por Invalidez o Sobrevivencia, o si quieres iniciar el proceso de pensión por alguno de estos dos motivos.',
                age: null
              }
            ],
            frase: '¿Qué tipo de Pensión quieres consultar?'
          }
        }
      ]
    },
    allContentfulCategoriasContenidosEmpresas: {
      edges: [
        {
          node: {
            orden: 3,
            titulo: 'Saber sobre Pensiones',
            category: 'Pensión',
            classGtm: 'gtmCuentQuierHacHoySabSobPension',
            IsActivo: true,
            IsIcon: true,
            id: 'e1825aaa-b1c4-50cd-ab37-6b44225c7b3b',
            imagen: {
              fluid: {
                src:
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zNS4wNjY3IDI5LjcyMTFIMzQuMjRWMjcuMDU1OEgzNy42QzM4LjE1NTQgMjYuOTk1MyAzOC42Njg4IDI2LjczMiAzOS4wNDE4IDI2LjMxNjNDMzkuNDE0OSAyNS45MDA3IDM5LjYyMTIgMjUuMzYyIDM5LjYyMTIgMjQuODAzNkMzOS42MjEyIDI0LjI0NTIgMzkuNDE0OSAyMy43MDY1IDM5LjA0MTggMjMuMjkwOUMzOC42Njg4IDIyLjg3NTIgMzguMTU1NCAyMi42MTE5IDM3LjYgMjIuNTUxNEgzNC4yNFYyMC45MjU2QzM0LjI0IDIwLjYyOCAzNC4xODE0IDIwLjMzMzQgMzQuMDY3NSAyMC4wNTg2QzMzLjk1MzUgMTkuNzgzNyAzMy43ODY2IDE5LjUzNCAzMy41NzYxIDE5LjMyMzZDMzMuMzY1NiAxOS4xMTMyIDMzLjExNTcgMTguOTQ2MyAzMi44NDA3IDE4LjgzMjVDMzIuNTY1NyAxOC43MTg2IDMyLjI3MSAxOC42NiAzMS45NzMzIDE4LjY2QzMxLjY3NTcgMTguNjYgMzEuMzgwOSAxOC43MTg2IDMxLjEwNTkgMTguODMyNUMzMC44MzA5IDE4Ljk0NjMgMzAuNTgxIDE5LjExMzIgMzAuMzcwNiAxOS4zMjM2QzMwLjE2MDEgMTkuNTM0IDI5Ljk5MzEgMTkuNzgzNyAyOS44NzkyIDIwLjA1ODZDMjkuNzY1MyAyMC4zMzM0IDI5LjcwNjcgMjAuNjI4IDI5LjcwNjcgMjAuOTI1NlYyMi42ODQ3SDI4Ljg4QzI3LjM0NTMgMjIuNjg0NyAyNS44NzM0IDIzLjI5NCAyNC43ODgyIDI0LjM3ODdDMjMuNzAzIDI1LjQ2MzQgMjMuMDkzMyAyNi45MzQ1IDIzLjA5MzMgMjguNDY4NEMyMy4wOTMzIDMwLjAwMjQgMjMuNzAzIDMxLjQ3MzUgMjQuNzg4MiAzMi41NTgyQzI1Ljg3MzQgMzMuNjQyOCAyNy4zNDUzIDM0LjI1MjIgMjguODggMzQuMjUyMkgyOS43MDY3VjM2Ljc4NDNIMjUuMzZDMjUuMDQzNSAzNi43NDk4IDI0LjcyMzMgMzYuNzgyNCAyNC40MjAyIDM2Ljg3OThDMjQuMTE3MSAzNi45NzczIDIzLjgzOCAzNy4xMzc1IDIzLjYwMSAzNy4zNUMyMy4zNjQgMzcuNTYyNCAyMy4xNzQ0IDM3LjgyMjQgMjMuMDQ0NyAzOC4xMTNDMjIuOTE0OSAzOC40MDM2IDIyLjg0NzggMzguNzE4MiAyMi44NDc4IDM5LjAzNjVDMjIuODQ3OCAzOS4zNTQ3IDIyLjkxNDkgMzkuNjY5MyAyMy4wNDQ3IDM5Ljk1OTlDMjMuMTc0NCA0MC4yNTA1IDIzLjM2NCA0MC41MTA1IDIzLjYwMSA0MC43MjI5QzIzLjgzOCA0MC45MzU0IDI0LjExNzEgNDEuMDk1NiAyNC40MjAyIDQxLjE5MzFDMjQuNzIzMyA0MS4yOTA2IDI1LjA0MzUgNDEuMzIzMSAyNS4zNiA0MS4yODg3SDI5LjcwNjdWNDMuMDQ3OEMyOS43MDY3IDQzLjY0ODYgMjkuOTQ1NSA0NC4yMjQ5IDMwLjM3MDYgNDQuNjQ5N0MzMC43OTU2IDQ1LjA3NDYgMzEuMzcyMiA0NS4zMTMzIDMxLjk3MzMgNDUuMzEzM0MzMi41NzQ1IDQ1LjMxMzMgMzMuMTUxIDQ1LjA3NDYgMzMuNTc2MSA0NC42NDk3QzM0LjAwMTIgNDQuMjI0OSAzNC4yNCA0My42NDg2IDM0LjI0IDQzLjA0NzhWNDEuMjg4N0gzNS4wNjY3QzM2LjYwMTQgNDEuMjg4NyAzOC4wNzMyIDQwLjY3OTMgMzkuMTU4NSAzOS41OTQ2QzQwLjI0MzcgMzguNTEgNDAuODUzMyAzNy4wMzg4IDQwLjg1MzMgMzUuNTA0OUM0MC44NTMzIDMzLjk3MDkgNDAuMjQzNyAzMi40OTk4IDM5LjE1ODUgMzEuNDE1MkMzOC4wNzMyIDMwLjMzMDUgMzYuNjAxNCAyOS43MjExIDM1LjA2NjcgMjkuNzIxMVpNMjkuNzMzMyAyOS43MjExSDI4LjkwNjdDMjguNzM5OCAyOS43MjQ3IDI4LjU3NCAyOS42OTQ5IDI4LjQxODggMjkuNjMzNUMyOC4yNjM3IDI5LjU3MjIgMjguMTIyNCAyOS40ODA1IDI4LjAwMzEgMjkuMzYzOEMyNy44ODM5IDI5LjI0NzEgMjcuNzg5MiAyOS4xMDc4IDI3LjcyNDYgMjguOTU0MUMyNy42NTk5IDI4LjgwMDMgMjcuNjI2NiAyOC42MzUyIDI3LjYyNjcgMjguNDY4NEMyNy42MjY3IDI4LjEyOTEgMjcuNzYxNSAyNy44MDM3IDI4LjAwMTYgMjcuNTYzOEMyOC4yNDE2IDI3LjMyMzkgMjguNTY3MiAyNy4xODkxIDI4LjkwNjcgMjcuMTg5MUgyOS43MzMzVjI5LjcyMTFaTTM1LjA2NjcgMzYuNzg0M0gzNC4yNFYzNC4yNTIySDM1LjA2NjdDMzUuMjMzNSAzNC4yNDg2IDM1LjM5OTMgMzQuMjc4NCAzNS41NTQ1IDM0LjMzOThDMzUuNzA5NiAzNC40MDExIDM1Ljg1MSAzNC40OTI5IDM1Ljk3MDIgMzQuNjA5NUMzNi4wODk0IDM0LjcyNjIgMzYuMTg0MSAzNC44NjU1IDM2LjI0ODggMzUuMDE5M0MzNi4zMTM0IDM1LjE3MyAzNi4zNDY3IDM1LjMzODEgMzYuMzQ2NyAzNS41MDQ5QzM2LjM0NjcgMzUuODQ0MiAzNi4yMTE4IDM2LjE2OTYgMzUuOTcxOCAzNi40MDk1QzM1LjczMTcgMzYuNjQ5NSAzNS40MDYxIDM2Ljc4NDMgMzUuMDY2NyAzNi43ODQzWk0zMiA1OC42NjY2QzMxLjU4MjYgNTguNjY0MSAzMS4xNzE1IDU4LjU2MzcgMzAuOCA1OC4zNzM0QzI5Ljk0NjcgNTcuOTQ2OSAxMC42NjY3IDQ4LjAwNTMgMTAuNjY2NyAzMi42NTNWMTQuOTgxOUMxMC42NzAzIDE0LjQ0MTggMTAuODM4IDEzLjkxNTYgMTEuMTQ3NSAxMy40NzNDMTEuNDU3MSAxMy4wMzAzIDExLjg5MzggMTIuNjkyMSAxMi40IDEyLjUwMzFMMzEuMDY2NyA1LjQ5MzMxQzMxLjY3MDYgNS4yNzk5IDMyLjMyOTQgNS4yNzk5IDMyLjkzMzMgNS40OTMzMUw1MS42IDEyLjUwMzFDNTIuMTA2MSAxMi42OTIxIDUyLjU0MjkgMTMuMDMwMyA1Mi44NTI0IDEzLjQ3M0M1My4xNjIgMTMuOTE1NiA1My4zMjk3IDE0LjQ0MTggNTMuMzMzMyAxNC45ODE5VjMyLjY1M0M1My4zMzMzIDQ4LjExMTkgMzQuMDI2NyA1Ny45NDY5IDMzLjIgNTguMzQ2N0MzMi44MzA4IDU4LjU0NjMgMzIuNDE5NiA1OC42NTU5IDMyIDU4LjY2NjZaTTE2IDE2Ljg0NzZWMzIuNjUzQzE2IDQyLjkxNDUgMjguMTA2NyA1MC42OTczIDMyIDUyLjkzNjFDMzUuODkzMyA1MC42OTczIDQ4IDQyLjkxNDUgNDggMzIuNjUzVjE2Ljg0NzZMMzIgMTAuODUwNkwxNiAxNi44NDc2WiIgZmlsbD0iIzAwMzNBMCIvPg0KPC9zdmc+DQo='
              }
            },
            subCategorias: [
              {
                titulo: 'Pensión Obligatoria',
                etiqueta: 'pension-obligatoria',
                image:
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyLjAwMDMgMi42NjY2OUMxNS43MzM3IDIuNjY2NjkgMi42NjY5OSAxNS43MzM0IDIuNjY2OTkgMzJDMi42NjY5OSA0OC4yNjY3IDE1LjczMzcgNjEuMzMzNCAzMi4wMDAzIDYxLjMzMzRDNDguMjY3IDYxLjMzMzQgNjEuMzMzNyA0OC4yNjY3IDYxLjMzMzcgMzJDNjEuMzMzNyAxNS43MzM0IDQ4LjI2NyAyLjY2NjY5IDMyLjAwMDMgMi42NjY2OVpNMzIuMDAwMyA1NkMxOC42NjcgNTYgOC4wMDAzMyA0NS4zMzM0IDguMDAwMzMgMzJDOC4wMDAzMyAxOC42NjY3IDE4LjY2NyA4LjAwMDAyIDMyLjAwMDMgOC4wMDAwMkM0NS4zMzM3IDguMDAwMDIgNTYuMDAwMyAxOC42NjY3IDU2LjAwMDMgMzJDNTYuMDAwMyA0NS4zMzM0IDQ1LjMzMzcgNTYgMzIuMDAwMyA1NlpNMzUuNzMzNyAyOS4zMzM0SDM0LjY2N1YyNC41MzM0SDM5LjIwMDNDNDAuODAwMyAyNC41MzM0IDQxLjg2NyAyMy40NjY3IDQxLjg2NyAyMS44NjY3QzQxLjg2NyAyMC4yNjY3IDQwLjgwMDMgMTkuMiAzOS4yMDAzIDE5LjJIMzQuNjY3VjE2QzM0LjY2NyAxNC40IDMzLjYwMDMgMTMuMzMzNCAzMi4wMDAzIDEzLjMzMzRDMzAuNDAwMyAxMy4zMzM0IDI5LjMzMzcgMTQuNCAyOS4zMzM3IDE2VjE5LjJIMjguMjY3QzI0LjAwMDMgMTkuMiAyMC41MzM3IDIyLjY2NjcgMjAuNTMzNyAyNi45MzM0QzIwLjUzMzcgMzEuMiAyNC4wMDAzIDM0LjY2NjcgMjguMjY3IDM0LjY2NjdIMjkuMzMzN1YzOS40NjY3SDIzLjIwMDNDMjEuNjAwMyAzOS40NjY3IDIwLjUzMzcgNDAuNTMzNCAyMC41MzM3IDQyLjEzMzRDMjAuNTMzNyA0My43MzM0IDIxLjYwMDMgNDQuOCAyMy4yMDAzIDQ0LjhIMjkuMzMzN1Y0OEMyOS4zMzM3IDQ5LjYgMzAuNDAwMyA1MC42NjY3IDMyLjAwMDMgNTAuNjY2N0MzMy42MDAzIDUwLjY2NjcgMzQuNjY3IDQ5LjYgMzQuNjY3IDQ4VjQ0LjhIMzUuNzMzN0M0MC4wMDAzIDQ0LjggNDMuNDY3IDQxLjMzMzQgNDMuNDY3IDM3LjA2NjdDNDMuNDY3IDMyLjggNDAuMDAwMyAyOS4zMzM0IDM1LjczMzcgMjkuMzMzNFpNMjkuMzMzNyAyOS4zMzM0SDI4LjI2N0MyNi45MzM3IDI5LjMzMzQgMjUuODY3IDI4LjI2NjcgMjUuODY3IDI2LjkzMzRDMjUuODY3IDI1LjYgMjYuOTMzNyAyNC41MzM0IDI4LjI2NyAyNC41MzM0SDI5LjMzMzdWMjkuMzMzNFpNMzUuNzMzNyAzOS40NjY3SDM0LjY2N1YzNC42NjY3SDM1LjczMzdDMzcuMDY3IDM0LjY2NjcgMzguMTMzNyAzNS43MzMzIDM4LjEzMzcgMzcuMDY2N0MzOC4xMzM3IDM4LjQgMzcuMDY3IDM5LjQ2NjcgMzUuNzMzNyAzOS40NjY3WiIgZmlsbD0iIzAwMzNBMCIvPgo8L3N2Zz4K',
                toltip:
                  'Selecciona esta opción si estás pensionado por vejez, si estás construyendo tu pensión o si quieres afiliarte',
                age: true
              },
              {
                titulo: 'Pensión de Invalidez o Sobrevivencia',
                etiqueta: 'pension-inv-sobre',
                image:
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA2NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNy4zMzMzIDEzLjY2NjZDMzcuMzMzMyAyMS4xMzMzIDMxLjQ2NjcgMjcgMjQgMjdDMTYuNTMzMyAyNyAxMC42NjY3IDIxLjEzMzMgMTAuNjY2NyAxMy42NjY2QzEwLjY2NjcgNi4xOTk5OCAxNi41MzMzIDAuMzMzMzEzIDI0IDAuMzMzMzEzQzMxLjQ2NjcgMC4zMzMzMTMgMzcuMzMzMyA2LjE5OTk4IDM3LjMzMzMgMTMuNjY2NlpNMzIgMTMuNjY2NkMzMiA5LjEzMzMxIDI4LjUzMzMgNS42NjY2NSAyNCA1LjY2NjY1QzE5LjQ2NjcgNS42NjY2NSAxNiA5LjEzMzMxIDE2IDEzLjY2NjZDMTYgMTguMiAxOS40NjY3IDIxLjY2NjYgMjQgMjEuNjY2NkMyOC41MzMzIDIxLjY2NjYgMzIgMTguMiAzMiAxMy42NjY2Wk0wIDQ1LjY2NjZDMCAzOC4yIDUuODY2NjcgMzIuMzMzMyAxMy4zMzMzIDMyLjMzMzNIMzQuNjY2N0M0Mi4xMzMzIDMyLjMzMzMgNDggMzguMiA0OCA0NS42NjY2VjUxQzQ4IDUyLjYgNDYuOTMzMyA1My42NjY2IDQ1LjMzMzMgNTMuNjY2NkM0My43MzMzIDUzLjY2NjYgNDIuNjY2NyA1Mi42IDQyLjY2NjcgNTFWNDUuNjY2NkM0Mi42NjY3IDQxLjEzMzMgMzkuMiAzNy42NjY2IDM0LjY2NjcgMzcuNjY2NkgxMy4zMzMzQzguOCAzNy42NjY2IDUuMzMzMzMgNDEuMTMzMyA1LjMzMzMzIDQ1LjY2NjZWNTFDNS4zMzMzMyA1Mi42IDQuMjY2NjcgNTMuNjY2NiAyLjY2NjY3IDUzLjY2NjZDMS4wNjY2NyA1My42NjY2IDAgNTIuNiAwIDUxVjQ1LjY2NjZaTTUzLjg2NjcgMzIuODY2OEM1Mi41MzMzIDMyLjYwMDIgNTAuOTMzMyAzMy40MDAyIDUwLjY2NjcgMzQuNzMzNUM1MC40IDM2LjA2NjggNTEuMiAzNy42NjY4IDUyLjUzMzMgMzcuOTMzNUM1NiAzOC43MzM1IDU4LjQgNDEuOTMzNSA1OC40IDQ1LjY2NjhWNTEuMDAwMkM1OC40IDUyLjYwMDIgNTkuNDY2NyA1My42NjY4IDYxLjA2NjcgNTMuNjY2OEM2Mi42NjY3IDUzLjY2NjggNjMuNzMzMyA1Mi42MDAyIDYzLjczMzMgNTEuMDAwMlY0NS42NjY4QzY0IDM5LjUzMzUgNjAgMzQuMjAwMiA1My44NjY3IDMyLjg2NjhaTTQwIDIuNzMzMDFDNDAuNTMzNCAxLjEzMzAxIDQxLjg2NjcgMC4zMzMwMTQgNDMuMiAwLjg2NjM0OEM1MC40IDIuNDY2MzUgNTQuNjY2NyA5LjkzMzAxIDUyLjggMTcuMzk5N0M1MS43MzM0IDIyLjE5OTcgNDggMjUuNjY2MyA0My4yIDI2Ljk5OTdINDIuNjY2N0M0MS4zMzM0IDI2Ljk5OTcgNDAuMjY2NyAyNi4xOTk3IDQwIDI0Ljg2NjNDMzkuNDY2NyAyMy41MzMgNDAuNTMzNCAyMS45MzMgNDEuODY2NyAyMS42NjYzQzQ0LjggMjAuODY2MyA0Ni45MzM0IDE4LjczMyA0Ny43MzM0IDE1Ljc5OTdDNDguOCAxMS4yNjYzIDQ2LjEzMzQgNi45OTk2OCA0MS44NjY3IDUuOTMzMDFDNDAuNTMzNCA1LjY2NjM1IDM5LjczMzQgNC4wNjYzNSA0MCAyLjczMzAxWiIgZmlsbD0iIzAwMzNBMCIvPgo8L3N2Zz4K',
                toltip:
                  'Selecciona esta opción si estás pensionado por Invalidez o Sobrevivencia, o si quieres iniciar el proceso de pensión por alguno de estos dos motivos.',
                age: null
              }
            ],
            frase: '¿Qué tipo de Pensión quieres consultar?'
          }
        }
      ]
    }
  }

  it('renders correctly', () => {
    const indexPage = render.create(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <IndexPage data={dataj} />
        </ThemeProvider>
      </Provider>
    )
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const indexPage = mount(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <IndexPage data={dataj} layaout={true} />
        </ThemeProvider>
      </Provider>
    )
  })

  it('KeyDown TypePerson', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDb={getData} getInfoDB={getSuccess} />
      </Provider>
    )
    wrapper.find('#person-type').simulate('keydown')
  })

  it('Click Categories', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDb={getData} getInfoDB={getSuccess} />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('click')
    const category = wrapper.find(Category).first()
    category.simulate('click')
  })

  it('Click Categories Type Factory', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDB={getSuccess} />
      </Provider>
    )
    wrapper.find('#factory-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('click')
    const category = wrapper.find(Category).first()
    category.simulate('click')
  })

  it('button InputRange ', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDb={getData} getInfoDB={getSuccess} />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('keydown')
    const category = wrapper.find(Category).first()
    category.simulate('click')
    wrapper.find(Category).first()
    category.simulate('click')
    const subCategory = wrapper.find(SubCategory).first()
    subCategory.simulate('click')
    const inputContainer = wrapper.find('#container-range-input')
    const input = inputContainer.find('input')
    const eventRange = { target: { value: '12' } }
    input.simulate('change', eventRange)
  })

  it('blur InputRange ', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDb={getData} getInfoDB={getSuccess} />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('keydown')
    const category = wrapper.find(Category).first()
    category.simulate('click')
    const subCategory = wrapper.find(SubCategory).first()
    subCategory.simulate('click')
    const inputContainer = wrapper.find('#container-range-input')
    const input = inputContainer.find('input')
    const eventRange = { target: { value: '18' } }
    input.simulate('blur', eventRange)
  })

  it('blur InputRange ', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDb={getData} getInfoDB={getSuccess} />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('keydown')
    const category = wrapper.find(Category).first()
    category.simulate('click')
    const subCategory = wrapper.find(SubCategory).first()
    subCategory.simulate('click')
    const inputContainer = wrapper.find('#container-range-input')
    const input = inputContainer.find('input')
    const eventRange = { target: { value: '10' } }
    input.simulate('blur', eventRange)
  })

  it('blur InputRange ', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDb={getData} getInfoDB={getSuccess} />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('keydown')
    const category = wrapper.find(Category).first()
    category.simulate('click')
    const subCategory = wrapper.find(SubCategory).first()
    subCategory.simulate('click')
    const inputContainer = wrapper.find('#container-range-input')
    const input = inputContainer.find('input')
    const eventRange = { target: { value: '102' } }
    input.simulate('blur', eventRange)
  })

  it('button gener Hombre ', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDb={getData} getInfoDB={getSuccess} />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    const eventNumObj = { target: { value: 30 } }

    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('keydown')
    const category = wrapper.find(Category).first()
    category.simulate('click')
    const subCategory = wrapper.find(SubCategory).first()
    subCategory.simulate('click')
    wrapper
      .find('#button-range-container-')
      .first()
      .simulate('change', eventNumObj)
    const inputContainer = wrapper.find('#container-genero-value-h')
    inputContainer.first().simulate('click')
  })

  it('button gener Mujer ', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDb={getData} getInfoDB={getSuccess} />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    const eventNumObj = { target: { value: 30 } }

    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('keydown')
    const category = wrapper.find(Category).first()
    category.simulate('click')
    const subCategory = wrapper.find(SubCategory).first()
    subCategory.simulate('click')
    wrapper
      .find('#button-range-container-')
      .first()
      .simulate('change', eventNumObj)
    const inputContainer = wrapper.find('#container-genero-value-m')
    inputContainer.first().simulate('click')
  })

  it('keyDown button Continuar Welcome', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDb={getData} getInfoDB={getSuccess} />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('keydown')
  })

  it('Focus button Continuar Welcome', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDb={getData} getInfoDB={getSuccess} />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('focus')
  })

  it('KeyDown Categories', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDb={getData} getInfoDB={getSuccess} />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('click')
    const category = wrapper.find(Category).first()
    category.simulate('keydown')
  })

  it('Focus Categories', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDb={getData} getInfoDB={getSuccess} />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('click')
    const category = wrapper.find(Category).first()
    category.simulate('focus')
  })
  it('Click SubCategories', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage
          data={dataj}
          getInfoDB={getSuccess}
          getInfoDb={getData}
          next={() => {}}
        />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('click')
    const category = wrapper.find(Category).first()
    category.simulate('click')
    const subcategory = wrapper.find(SubCategory).first()
    subcategory.simulate('click')
    wrapper
      .find('#button-range-container-')
      .first()
      .simulate('change', eventObj)
    const inputContainer = wrapper.find('#container-genero-value-m')
    inputContainer.first().simulate('click')
  })

  it('Click SubCategories', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage
          data={dataj}
          getInfoDB={getSuccess}
          getInfoDb={getData}
          next={() => {}}
        />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    const eventNumObj = { target: { value: 30 } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('click')
    const category = wrapper.find(Category).first()
    category.simulate('click')
    const subcategory = wrapper.find(SubCategory).first()
    subcategory.simulate('click')
    wrapper
      .find('#button-range-container-')
      .first()
      .simulate('change', eventNumObj)
    const inputContainer = wrapper.find('#container-genero-value-m')
    inputContainer.first().simulate('click')
  })

  it('Keydown SubCategories', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage data={dataj} getInfoDB={getSuccess} getInfoDb={getData} />
      </Provider>
    )
    wrapper.find('#person-type').simulate('click')
    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper
      .find('#btn-welcome')
      .first()
      .simulate('click')
    const category = wrapper.find(Category).first()
    category.simulate('click')
    const subcategory = wrapper.find(SubCategory).first()
  })

  it('Click Continue', async () => {
    const request = window.indexedDB.open('content-prote', 1)

    request.addEventListener('upgradeneeded', () => {
      const store = request.result.createObjectStore('hosts', {
        keyPath: 'id',
        autoIncrement: true
      })

      const index = store.createIndex('hosts', 'hosts')
    })

    request.addEventListener('success', () => {
      global.innerWidth = 1500
      global.dispatchEvent(new Event('resize'))
      const wrapper = mount(
        <Provider store={store}>
          <IndexPage
            dbIndex={request.result}
            data={dataj}
            getF={getSuccess}
            getInfoDB={getSuccess}
          />
        </Provider>
      )
      wrapper.find('#person-type').simulate('click')
      const eventObj = { target: { value: 'tes' } }
      wrapper.find('input').simulate('change', eventObj)
      wrapper
        .find('#btn-welcome')
        .first()
        .simulate('click')
      const category = wrapper.find(Category).first()
      category.simulate('click')
      const subcategory = wrapper.find(SubCategory).first()
      subcategory.simulate('click')
      const btn = wrapper.find('#btn-index-prehome')
      btn.simulate('click')
      wrapper.find('.container-genero-value').simulate('click')
    })
  })

  it('onChanged inputName Right text', () => {
    const request = window.indexedDB.open('content-prote', 1)

    request.addEventListener('upgradeneeded', () => {
      const store = request.result.createObjectStore('hosts', {
        keyPath: 'id',
        autoIncrement: true
      })

      const index = store.createIndex('hosts', 'hosts')
    })

    request.addEventListener('success', () => {
      global.innerWidth = 1500
      global.dispatchEvent(new Event('resize'))

      const wrapper = mount(
        <Provider store={store}>
          <IndexPage
            dbIndex={request.result}
            data={dataj}
            getF={getSuccess}
            getInfoDB={getSuccess}
          />
        </Provider>
      )
      wrapper
        .find(
          <InputRange
            min={0}
            max={100}
            input={true}
            step={1}
            onChange={() => {}}
          />
        )
        .simulate('change')

      expect(wrapper.state('age')).toBe(0)
      const eventObj = { target: { value: 10 } }
      wrapper
        .find('#button-range-container-')
        .first()
        .simulate('focus')
      wrapper
        .find('#button-range-container-')
        .first()
        .simulate('change', eventObj)
      expect(wrapper.state('age')).toBe(10)
    })
  })

  it('KeyDown Continue', () => {
    const request = window.indexedDB.open('content-prote', 1)

    request.addEventListener('upgradeneeded', () => {
      const store = request.result.createObjectStore('hosts', {
        keyPath: 'id',
        autoIncrement: true
      })

      const index = store.createIndex('hosts', 'hosts')
    })

    request.addEventListener('success', () => {
      global.innerWidth = 1500
      global.dispatchEvent(new Event('resize'))
      global.window = Object.create(window)
      const url = 'http://dummy.com/?tipoCliente=1&changeModal=true'
      Object.defineProperty(window, 'location', 'hash', {
        value: {
          href: url,
          search: '?tipoCliente=1&changeModal=true',
          writable: true,
          value: '?tipoCliente=1&changeModal=true'
        }
      })
      const wrapper = mount(
        <Provider store={store}>
          <IndexPage
            dbIndex={request.result}
            data={dataj}
            getF={getData}
            getInfoDB={getSuccesa}
            resetData={true}
          />
        </Provider>
      )
      wrapper.find('#person-type').simulate('click')
      const eventObj = { target: { value: 'tes' } }
      wrapper.find('input').simulate('change', eventObj)
      wrapper
        .find('#btn-welcome')
        .first()
        .simulate('click')
      const category = wrapper.find(Category).first()
      category.simulate('click')
      const subcategory = wrapper.find(SubCategory).first()
      subcategory.simulate('click')
      const btn = wrapper.find('#btn-index-prehome')
      btn.simulate('keydown')
    })
  })
})
