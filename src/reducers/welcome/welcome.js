const initialState = {
  nameValue: '',
  typeUser: 1
}

const welcome = (state, action) => {
  state = state ? state : initialState
  if (action.type === 'ADD_INFO_NAME') {
    state = {
      ...state,
      nameValue: action.nameValue,
      typeUser: action.typeUser
    }
  }
  return state
}

export default welcome
