export const ADD_INFO_ACCESSIBILITY_FONT = 'ADD_INFO_ACCESSIBILITY_FONT'
export const ADD_INFO_ACCESSIBILITY_LINE = 'ADD_INFO_ACCESSIBILITY_LINE'
export const ADD_INFO_ACCESSIBILITY_DARK = 'ADD_INFO_ACCESSIBILITY_DARK'

export const addInfoAccessibilityFont = fontSize => ({
  type: ADD_INFO_ACCESSIBILITY_FONT,
  fontSize
})

export const addInfoAccessibilityLine = lineSize => ({
  type: ADD_INFO_ACCESSIBILITY_LINE,
  lineSize
})

export const addInfoAccessibilityDark = darkMode => ({
  type: ADD_INFO_ACCESSIBILITY_DARK,
  darkMode
})
