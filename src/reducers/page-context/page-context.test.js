import { SET_PAGE_CONTEXT } from '../../const/dictionary/reducers'
import PageContext, { initialState } from './page-context'

describe('test for PageContext reducer', () => {
  test('should return initial state when received empty payload', () => {
    const pageContextState = PageContext(undefined, {
      type: SET_PAGE_CONTEXT,
      payload: {}
    })
    expect(pageContextState).toMatchObject(initialState)
  })

  test('should return initial state when received an invalid type', () => {
    const pageContextState = PageContext(initialState, {
      type: 'INVALID_TYPE',
      payload: {}
    })
    expect(pageContextState).toMatchObject(initialState)
  })

  test('should return new state when received payload', () => {
    const payload = { typeUser: 1, userCategory: 'Ahorro' }
    const pageContextState = PageContext(undefined, {
      type: SET_PAGE_CONTEXT,
      payload
    })
    expect(pageContextState).toMatchObject(payload)
  })
})
