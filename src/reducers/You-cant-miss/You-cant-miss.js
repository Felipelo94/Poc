const initialState = {
  userValue: []
}

const Youcantmiss = (state, action) => {
  state = state ? state : initialState
  if (action.type === 'ADD_INFO_USER') {
    state = {
      ...state,
      userValue: action.userValue
    }
  }
  return state
}

export default Youcantmiss
