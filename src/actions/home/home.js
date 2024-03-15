export const ADD_INFO_PERFIL = 'ADD_INFO_PERFIL'

export const ADD_STATUS_MENU = 'ADD_STATUS_MENU'

export const ADD_STATUS_TOURGUIDE = 'ADD_STATUS_TOURGUIDE'

export const addInfoPerfil = (categoria, subCategoria) => ({
  type: ADD_INFO_PERFIL,
  categoria,
  subCategoria
})

export const addStatusMenu = status => ({
  type: ADD_STATUS_MENU,
  status
})

export const addStatusTourGuide = status => ({
  type: ADD_STATUS_TOURGUIDE,
  status
})
