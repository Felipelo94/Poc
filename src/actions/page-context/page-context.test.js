import { SET_PAGE_CONTEXT } from '../../const/dictionary/reducers'
import { setPageContext } from './page-context'

describe('test for setPageContext action', () => {
  test('should return action SET_PAGE_CONTEXT', () => {
    const payload = { typeUser: 1, userCategory: 'Ahorro' }
    const pageContextAction = setPageContext(payload)
    expect(pageContextAction).toMatchObject({
      type: SET_PAGE_CONTEXT,
      payload
    })
  })
})
