import * as actions from './You-cant-miss'

describe('todo actions', () => {
  it('addTodo should create ADD_INFO_NAME action', () => {
    expect(actions.addInfoUser('Silvio')).toEqual({
      type: 'ADD_INFO_USER',
      userValue: 'Silvio'
    })
  })
})
