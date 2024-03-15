import { SET_PAGE_CONTEXT } from '../../const/dictionary/reducers'

export const initialState = {
  userCategory: '',
  typeUser: ''
}

const PageContext = (state, action) => {
  state = state ? state : initialState
  if (action.type === SET_PAGE_CONTEXT) {
    return {
      ...state,
      ...action.payload
    }
  }
  return { ...state }
}

export default PageContext
