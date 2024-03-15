import { getCurrentPathPrefix, onClickToInterna } from './redirectUtil'

test('array data null', () => {
  onClickToInterna(null)
})

test('array data null', () => {
  onClickToInterna('/ahorro-siempreactivo/', 'aaaa', 'aaaaa', 'aaaaa')
})

test('array data null', () => {
  onClickToInterna(
    '/contenidos/ahorro-siempreactivo/',
    'aaaa',
    'aaaaa',
    'aaaaa'
  )
})

test('array data null', () => {
  onClickToInterna(
    'https://www.proteccion.com/wps/portal/proteccion/web/accesodirecto/app-proteccion',
    'aaaa',
    'aaaaa',
    'aaaaa'
  )
})

test('array data null', () => {
  getCurrentPathPrefix('/')
})

test('array data null', () => {
  getCurrentPathPrefix('')
})

test('array data null', () => {
  getCurrentPathPrefix('/canales')
})

test('array data null', () => {
  getCurrentPathPrefix('/canaleses')
})
