import Youcantmiss from './You-cant-miss'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(Youcantmiss(undefined, { userValue: [] })).toEqual({
      userValue: []
    })
  })

  it('should handle ADD_INFO_USER', () => {
    expect(
      Youcantmiss(
        {},
        {
          type: 'ADD_INFO_USER',
          userValue: []
        }
      )
    ).toEqual({
      userValue: []
    })
  })
})
