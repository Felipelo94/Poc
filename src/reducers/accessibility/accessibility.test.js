import ccessibility from './accessibility'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      ccessibility([], {
        type: 'ADD_INFO_ACCESSIBILITY_FONT',
        fontSize: 2
      })
    ).toEqual({
      fontSize: 2
    })
  })

  it('should handle initial state', () => {
    expect(
      ccessibility(undefined, {
        type: 'ADD_INFO_ACCESSIBILITY_FONT',
        fontSize: 2,
        lineSize: 1,
        darkMode: false
      })
    ).toEqual({
      fontSize: 2,
      lineSize: 1,
      darkMode: false
    })
  })

  it('should handle initial state', () => {
    expect(
      ccessibility(undefined, {
        type: 'ADD_INFO_ACCESSIBILITY_LINE',
        fontSize: 2,
        lineSize: 1,
        darkMode: false
      })
    ).toEqual({
      fontSize: 2,
      lineSize: 1,
      darkMode: false
    })
  })

  it('should handle initial state', () => {
    expect(
      ccessibility(undefined, {
        type: 'ADD_INFO_ACCESSIBILITY_DARK',
        fontSize: 2,
        lineSize: 1,
        darkMode: false
      })
    ).toEqual({
      fontSize: 2,
      lineSize: 1,
      darkMode: false
    })
  })
})
