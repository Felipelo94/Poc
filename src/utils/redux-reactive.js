export const getDataUserRedux = (
  user,
  nameUser,
  setname,
  setcategory,
  mapPension,
  setsubcategory,
  setisService,
  indexDBUserName
) => {
  let result = user
  let resultName = nameUser
  if (
    result &&
    result.userValue &&
    result.userValue.name &&
    !Array.isArray(result.userValue) &&
    result.userValue.hasOwnProperty('name') &&
    result.userValue.hasOwnProperty('category') &&
    result.userValue.hasOwnProperty('subcategory')
  ) {
    setname(result.userValue.name.split(' ', 1)[0])
    setcategory(result.userValue.category)
    const subCat = mapPension[result.userValue.subcategory]
      ? mapPension[result.userValue.subcategory]
      : result.userValue.subcategory
    setsubcategory(subCat)
    setisService(true)
  } else if (
    resultName &&
    resultName.nameValue &&
    !Array.isArray(resultName.nameValue)
  ) {
    if (resultName.nameValue.length > 0) {
      setname(resultName.nameValue.split(' ', 1)[0])
    }
  } else {
    setname(indexDBUserName ? indexDBUserName.split(' ', 1) : indexDBUserName)
  }
}

export const ReactiveData = (
  setwelcome,
  name,
  services,
  setServicesData,
  nameUser,
  setTypeUser,
  perfilamiento,
  setcategory,
  mapPension,
  setsubcategory
) => {
  setwelcome(`¡Hola ${name}!`)
  setServicesData(services)
  setTypeUser(nameUser.typeUser)
  setcategory(perfilamiento.categoria)
  const subategoria = mapPension[perfilamiento.subCategoria]
    ? mapPension[perfilamiento.subCategoria]
    : perfilamiento.subCategoria
  setsubcategory(subategoria)
}
