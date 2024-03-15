import welcome from './welcome'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(welcome(undefined, { nameValue: '', typeUser: 1 })).toEqual({
      nameValue: '',
      typeUser: 1
    })
  })

  it('should handle ADD_INFO_NAME', () => {
    expect(
      welcome([], {
        type: 'ADD_INFO_NAME',
        nameValue: 'Silvio',
        typeUser: 1
      })
    ).toEqual({
      nameValue: 'Silvio',
      typeUser: 1
    })
  })
})
