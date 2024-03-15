import tourGuide from './tour-guide'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(tourGuide(undefined, { status: false })).toEqual({
      status: false
    })
  })

  it('should handle ADD_STATUS_TOURGUIDE', () => {
    expect(
      tourGuide([], {
        type: 'ADD_STATUS_TOURGUIDE',
        status: true
      })
    ).toEqual({
      status: true
    })
  })
})
