import * as actions from './internal-categoria'

describe('todo actions', () => {
  it('addTodo should create ADD_INFO_INTERNAL action', () => {
    expect(actions.addInfointernal('Silvio')).toEqual({
      type: 'ADD_INFO_INTERNAL',
      dataInternal: 'Silvio'
    })
  })
})
