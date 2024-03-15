import * as actions from './welcome'

describe('todo actions', () => {
  it('addTodo should create ADD_INFO_NAME action', () => {
    expect(actions.addInfoName('Silvio')).toEqual({
      type: 'ADD_INFO_NAME',
      nameValue: 'Silvio'
    })
  })
})
