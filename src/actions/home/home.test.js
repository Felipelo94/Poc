import { addInfoPerfil, addStatusMenu, addStatusTourGuide } from './home'

describe('todo actions', () => {
  it('addInfoPerfil should create ADD_INFO_PERFIL action', () => {
    expect(addInfoPerfil('CETEGORIA', 'SUBCETEGORIA')).toEqual({
      type: 'ADD_INFO_PERFIL',
      categoria: 'CETEGORIA',
      subCategoria: 'SUBCETEGORIA'
    })
  })

  it('addStatusMenu should create ADD_STATUS_MENU action', () => {
    expect(addStatusMenu(true)).toEqual({
      type: 'ADD_STATUS_MENU',
      status: true
    })
  })

  it('addStatusMenu should create ADD_STATUS_MENU action', () => {
    expect(addStatusTourGuide(true)).toEqual({
      type: 'ADD_STATUS_TOURGUIDE',
      status: true
    })
  })
})
