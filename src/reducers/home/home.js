const initialState = {
  categoria: '',
  subCategoria: ''
}

const home = (state, action) => {
  state = state ? state : initialState
  if (action.type === 'ADD_INFO_PERFIL') {
    state = {
      ...state,
      categoria: action.categoria,
      subCategoria: action.subCategoria
    }
  }
  return state
}

export default home
