import menu from './menu'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(menu(undefined, { status: false })).toEqual({
      status: false
    })
  })

  it('should handle ADD_INFO_NAME', () => {
    expect(
      menu([], {
        type: 'ADD_STATUS_MENU',
        status: true
      })
    ).toEqual({
      status: true
    })
  })
})
