import home from './home'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(home(undefined, { categoria: '', subCategoria: '' })).toEqual({
      categoria: '',
      subCategoria: ''
    })
  })

  it('should handle ADD_INFO_NAME', () => {
    expect(
      home([], {
        type: 'ADD_INFO_PERFIL',
        categoria: 'Cesantías',
        subCategoria: 'Cesante'
      })
    ).toEqual({
      categoria: 'Cesantías',
      subCategoria: 'Cesante'
    })
  })
})
