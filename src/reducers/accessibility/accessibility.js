const initialState = {
  fontSize: 2,
  lineSize: 1,
  darkMode: false
}

const accessibility = (state, action) => {
  state = state ? state : initialState
  if (action.type === 'ADD_INFO_ACCESSIBILITY_FONT') {
    state = {
      ...state,
      fontSize: action.fontSize
    }
  }

  if (action.type === 'ADD_INFO_ACCESSIBILITY_LINE') {
    state = {
      ...state,
      lineSize: action.lineSize
    }
  }

  if (action.type === 'ADD_INFO_ACCESSIBILITY_DARK') {
    state = {
      ...state,
      darkMode: action.darkMode
    }
  }
  return state
}

export default accessibility
