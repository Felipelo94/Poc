export const redirectUrl = (types, categorys) => {
  let url
  if (types === 1 && categorys === 'Cesantías') {
    url =
      'https://www.proteccion.com/wps/portal/proteccion/web/cesantias/personas'
  } else if (types === 2 && categorys === 'Cesantías') {
    url =
      'https://www.proteccion.com/wps/portal/proteccion/web/cesantias/empresas'
  } else if (types === 1 && categorys === 'Ahorro') {
    url = 'https://www.proteccion.com/wps/portal/proteccion/'
  } else if (types === 2 && categorys === 'Ahorro') {
    url = 'https://www.proteccion.com/wps/portal/proteccion/web-empresas'
  } else if (types === 2) {
    url = 'https://www.proteccion.com/wps/portal/proteccion/web-empresas'
  } else {
    url = 'https://www.proteccion.com/wps/portal/proteccion/'
  }
  return url
}
