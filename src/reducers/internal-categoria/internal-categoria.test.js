import internalCategoria from './internal-categoria'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(internalCategoria(undefined, { dataInternal: [] })).toEqual({
      dataInternal: []
    })
  })

  it('should handle ADD_INFO_INTERNAL', () => {
    expect(
      internalCategoria([], {
        type: 'ADD_INFO_INTERNAL',
        dataInternal: []
      })
    ).toEqual({
      dataInternal: []
    })
  })
})
