import * as actions from './accessibility'

describe('todo actions', () => {
  it('addTodo should create ADD_INFO_ACCESSIBILITY_DARK action', () => {
    expect(actions.addInfoAccessibilityDark(true)).toEqual({
      type: actions.ADD_INFO_ACCESSIBILITY_DARK,
      darkMode: true
    })
  })

  it('addTodo should create ADD_INFO_ACCESSIBILITY_FONT action', () => {
    expect(actions.addInfoAccessibilityFont(3)).toEqual({
      type: actions.ADD_INFO_ACCESSIBILITY_FONT,
      fontSize: 3
    })
  })

  it('addTodo should create ADD_INFO_ACCESSIBILITY_LINE action', () => {
    expect(actions.addInfoAccessibilityLine(3)).toEqual({
      type: actions.ADD_INFO_ACCESSIBILITY_LINE,
      lineSize: 3
    })
  })
})
