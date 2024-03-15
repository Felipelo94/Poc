const initialState = {
  status: false
}

const statusMenu = (state, action) => {
  state = state ? state : initialState
  if (action.type === 'ADD_STATUS_TOURGUIDE') {
    state = {
      ...state,
      status: action.status
    }
  }
  return state
}

export default statusMenu