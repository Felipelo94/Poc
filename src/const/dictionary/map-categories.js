const fuctionmapCategories = (data, item, defaultData) => {
  let jsonMap = {}

  if (data && defaultData) {
    const clientes = data?.allContentfulTipoDeCliente?.edges
    clientes?.map(x => {
      if (x.node) {
        if (x.node.contentful_id === '3XCf8zuzh5bGWNcuvFBuwx') {
          jsonMap['1'] = x.node.contentful_id
        } else if (x.node.contentful_id === '7IF4VrReibXT0Vb13iX3rd') {
          jsonMap['2'] = x.node.contentful_id
        } else {
          jsonMap[x.node.nombre] = x.node.contentful_id
        }
      }
    })

    const subCategorias = data?.allContentfulCategoriaCliente?.edges
    subCategorias?.map(x => {
      if (x.node) {
        if (x.node.contentful_id === '2DARMfEGFnJmATe8dXP3Uf') {
          jsonMap['inexperto'] = x.node.contentful_id
        } else if (x.node.contentful_id === '3VLoCVOpLMD9hvFFbUwUzo') {
          jsonMap['experto'] = x.node.contentful_id
        } else if (x.node.contentful_id === '7lDDi92WQvINHDoyppiGG1') {
          jsonMap['pension-invalidez'] = x.node.contentful_id
        } else if (x.node.contentful_id === 'eP6WF0PzwcNtIU09rfa2g') {
          jsonMap['sobrevivencia'] = x.node.contentful_id
        } else if (x.node.contentful_id === '1BCikKVbP8AH0vdkZJMzNF') {
          jsonMap['pensionado'] = x.node.contentful_id
        } else if (x.node.contentful_id === 'nCqE4RiPTxgo0ayMwnilO') {
          jsonMap['pension-vejez'] = x.node.contentful_id
        } else {
          jsonMap[x.node.descripcion] = x.node.contentful_id
        }
      }
    })

    const categoria = data?.allContentfulLineaDeNegocio?.edges
    categoria?.map(x => {
      if (x.node) {
        if (x.node.contentful_id === '45FVyiIWU70wBqFgR750SE') {
          jsonMap['Pensión'] = x.node.contentful_id
        }
        if (x.node.contentful_id === '4sjSQocJHJA3wehCeeaQel') {
          jsonMap['Ahorro'] = x.node.contentful_id
        } else if (x.node.contentful_id !== '2e0KrA4SiYEKYQvQ4ao6hl') {
          jsonMap[x.node.nombre] = x.node.contentful_id
        }
      }
    })

    const productos = data?.allContentfulProducto?.edges
    productos?.map(x => {
      if (x.node) {
        if (jsonMap[x.node.titulo]) {
          jsonMap[x.node.titulo] = jsonMap[x.node.titulo]?.concat(
            ' ',
            x.node.contentful_id
          )
        } else if (x.node.categoriaProducto) {
          const id = x.node.lineadenegocio?.contentful_id
          if (id === '4ZiidHPjG8Bz3Q0bdS9aRb') {
            jsonMap['Inversión'] = jsonMap['Inversión']?.concat(
              ' ',
              x.node.contentful_id
            )
          } else if (id === '4sjSQocJHJA3wehCeeaQel') {
            jsonMap['Ahorro'] = jsonMap['Ahorro']?.concat(
              ' ',
              x.node.contentful_id
            )
          } else if (id === '45FVyiIWU70wBqFgR750SE') {
            jsonMap['Pensión'] = jsonMap['Pensión']?.concat(
              ' ',
              x.node.contentful_id
            )
          } else if (id === '7pUsqgXajww2lAjS8Z8Ult') {
            jsonMap['Cesantías'] = jsonMap['Cesantías']?.concat(
              ' ',
              x.node.contentful_id
            )
          }
        } else {
          if (x.node.contentful_id === '3L34QSh4x4iaHAec3quWGy') {
            jsonMap['Inversión'] = jsonMap['Inversión']?.concat(
              ' ',
              x.node.contentful_id
            )
          } else if (x.node.contentful_id === '3Do4hL0V01gzUMDUCXlB0D') {
            jsonMap['Pensión'] = jsonMap['Pensión']?.concat(
              ' ',
              x.node.contentful_id
            )
          } else {
            jsonMap[x.node.titulo] = x.node.contentful_id
          }
        }
      }
    })

    jsonMap['soluciones'] = jsonMap['Ahorro']
  }

  const datafinal = defaultData ? jsonMap[item] : data[item]
  return datafinal
}

export const mapCategories = (data, item) => {
  const dataDefault = {
    'pension-invalidez': '7lDDi92WQvINHDoyppiGG1',
    'pension-vejez': 'nCqE4RiPTxgo0ayMwnilO',
    sobrevivencia: 'eP6WF0PzwcNtIU09rfa2g',
    pensionado: '1BCikKVbP8AH0vdkZJMzNF',
    Empleado: '2L498woyc1TQ1A3SpyUpxA',
    Cesante: '5fP153BoelxfRsusePVnBU',
    Independiente: 'vt2OB7OniS8zFEgAS1qNz',
    Pensión: '3Do4hL0V01gzUMDUCXlB0D,45FVyiIWU70wBqFgR750SE',
    Cesantías: 'W2zNnmbYol9hf1OXMVGgR,7pUsqgXajww2lAjS8Z8Ult',
    Ahorro:
      '4sjSQocJHJA3wehCeeaQel,017vFbXOC94MeBLY4R44tx,IBMCOurBRnD4pht9Od8Wo,4e3djROf1Dr7Jfogj7iSOi,JqUxWGT2p4bwRNZli6FV3,5CWwfkVR8AkxeilNW4iU48,4dkf3aLiU6E11Wp5tbXqT3,6CyAjQdjyj6ktH9uokULY8,4FMB0tMDCxi8pCb9IvpGj,13fk4wY88IB1fA9aeOB0qM,18bfSEqhamhiOHQeS35Wpw,47oqc4NTZlwGOrMEThd6kE,405Dp5eAH8vHYeKjNquKdd',
    '1': '3XCf8zuzh5bGWNcuvFBuwx',
    '2': '7IF4VrReibXT0Vb13iX3rd',
    soluciones:
      '4sjSQocJHJA3wehCeeaQel,017vFbXOC94MeBLY4R44tx,IBMCOurBRnD4pht9Od8Wo,4e3djROf1Dr7Jfogj7iSOi,JqUxWGT2p4bwRNZli6FV3,5CWwfkVR8AkxeilNW4iU48,4dkf3aLiU6E11Wp5tbXqT3,6CyAjQdjyj6ktH9uokULY8,4FMB0tMDCxi8pCb9IvpGj,13fk4wY88IB1fA9aeOB0qM,18bfSEqhamhiOHQeS35Wpw,47oqc4NTZlwGOrMEThd6kE,405Dp5eAH8vHYeKjNquKdd',
    Inversión: '3L34QSh4x4iaHAec3quWGy,4ZiidHPjG8Bz3Q0bdS9aRb',
    inexperto: '2DARMfEGFnJmATe8dXP3Uf',
    experto: '3VLoCVOpLMD9hvFFbUwUzo'
  }
  if (data && item) {
    return fuctionmapCategories(data, item, true)
  } else if (item) {
    return fuctionmapCategories(dataDefault, item, false)
  } else {
    return undefined
  }
}

export default mapCategories
