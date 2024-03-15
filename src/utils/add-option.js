export const addOption = (
  dataAunClic,
  RetiroCesantias,
  setnewDataAunClic,
  subcategory,
  servicesUser
) => {
  if (
    subcategory === 'Empleado' ||
    subcategory === 'Cesante' ||
    servicesUser.subcategory === 'Empleado' ||
    servicesUser.subcategory === 'Cesante'
  ) {
    let data = dataAunClic.concat(RetiroCesantias)
    setnewDataAunClic(data)
  } else {
    setnewDataAunClic(dataAunClic)
  }
}
