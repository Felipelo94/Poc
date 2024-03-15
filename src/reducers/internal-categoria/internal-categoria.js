const initialState = {
  dataInternal: []
}

const internalCategoria = (state, action) => {
  state = state ? state : initialState
  if (action.type === 'ADD_INFO_INTERNAL') {
    state = {
      ...state,
      dataInternal: action.dataInternal
    }
  }
  return state
}

export default internalCategoria
