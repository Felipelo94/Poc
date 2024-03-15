const PATH_URL_SOLUCIONES_AHORRO_DEFAULT = {
  businessLine: 'Pensiones Voluntarias',
  category: 'Ahorro',
  pathURL: 'ahorro'
}

const PATH_URL_TYPE_CUSTOMER_AND_CATEGORY = {
  '1Ahorro': {
    pathURL: 'persona/ahorro',
    typeCustomer: 1,
    category: 'Ahorro'
  },
  '2Ahorro': {
    pathURL: 'empresa/ahorro',
    typeCustomer: 2,
    category: 'Ahorro'
  },
  '1Cesantías': {
    pathURL: 'persona/cesantias',
    typeCustomer: 1,
    category: 'Cesantías'
  },
  '2Cesantías': {
    pathURL: 'empresa/cesantias',
    typeCustomer: 2,
    category: 'Cesantías'
  },
  '1Inversión': {
    pathURL: 'persona/inversion',
    typeCustomer: 1,
    category: 'Inversión'
  },
  '1Pensión': {
    pathURL: 'persona/pension',
    typeCustomer: 1,
    category: 'Pensión'
  },
  '2Pensión': {
    pathURL: 'empresa/pension',
    typeCustomer: 2,
    category: 'Pensión'
  }
}

const BUSINESS_LINE_FROM_ENTITY_CONTENTFUL = [
  { ...PATH_URL_SOLUCIONES_AHORRO_DEFAULT },
  { businessLine: 'Inversión', category: 'Inversión', pathURL: 'inversion' },
  { businessLine: 'Cesantías', category: 'Cesantías', pathURL: 'cesantias' },
  {
    businessLine: 'Pensiones Obligatorias',
    category: 'Pensión',
    pathURL: 'pension'
  }
]

const BUSINESS_LINES_CONTENTFUL = {
  '4ZiidHPjG8Bz3Q0bdS9aRb': { category: 'Inversión', pathURL: 'inversion' },
  '4sjSQocJHJA3wehCeeaQel': { category: 'Ahorro', pathURL: 'ahorro' },
  '45FVyiIWU70wBqFgR750SE': { category: 'Pensión', pathURL: 'pension' },
  '7pUsqgXajww2lAjS8Z8Ult': { category: 'Cesantías', pathURL: 'cesantias' }
}

const CUSTOMER_TYPES_CONTENTFUL = {
  '7IF4VrReibXT0Vb13iX3rd': { customerType: 2, pathURL: 'empresa' },
  '3XCf8zuzh5bGWNcuvFBuwx': { customerType: 1, pathURL: 'persona' }
}

const lineadenegocioPensionesObligatorias = [
  {
    nombre: 'Pensiones Obligatorias'
  }
]

const lineadenegocioInversion = [
  {
    nombre: 'Inversión'
  }
]

const lineadenegocioCesantias = [
  {
    nombre: 'Cesantías'
  }
]

const subcategoryDefault = [
  {
    lineadenegocio: lineadenegocioCesantias,
    descripcion: 'Cesante',
    contentful_id: '5fP153BoelxfRsusePVnBU'
  },
  {
    lineadenegocio: lineadenegocioCesantias,
    descripcion: 'Empleado',
    contentful_id: '2L498woyc1TQ1A3SpyUpxA'
  },
  {
    lineadenegocio: lineadenegocioCesantias,
    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
    descripcion: 'Independiente'
  },
  {
    contentful_id: '7lDDi92WQvINHDoyppiGG1',
    descripcion: 'Pensión por invalidez',
    lineadenegocio: lineadenegocioPensionesObligatorias
  },
  {
    contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
    descripcion: 'Pensión por sobrevivencia',
    lineadenegocio: lineadenegocioPensionesObligatorias
  },
  {
    descripcion: 'Pensión por vejez',
    lineadenegocio: lineadenegocioPensionesObligatorias,
    contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
  },
  {
    lineadenegocio: lineadenegocioPensionesObligatorias,
    descripcion: 'Soy pensionado',
    contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
  },
  {
    contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
    descripcion: 'Conozco de Inversiones',
    lineadenegocio: lineadenegocioInversion
  },
  {
    descripcion: 'Estoy Aprendiendo',
    lineadenegocio: lineadenegocioInversion,
    contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
  }
]

const dataLineas = groups => [
  {
    data: groups.data.allContentfulProducto.edges,
    linea: 'producto'
  },
  {
    data: groups.data.allContentfulInformes.edges,
    linea: 'producto'
  },
  {
    data: groups.data.allContentfulBeneficio.edges,
    linea: 'beneficio'
  },
  {
    data: groups.data.allContentfulNovedad.edges,
    linea: 'novedad'
  },
  {
    data: groups.data.allContentfulCampana.edges,
    linea: 'campaña'
  },
  {
    data: groups.data.allContentfulContenidoEducativo.edges,
    linea: 'educativo'
  }
]

const mapCategories = {
  'pension-vejez': 'nCqE4RiPTxgo0ayMwnilO',
  'pension-invalidez': '7lDDi92WQvINHDoyppiGG1',
  pensionado: '1BCikKVbP8AH0vdkZJMzNF',
  sobrevivencia: 'eP6WF0PzwcNtIU09rfa2g',
  Cesante: '5fP153BoelxfRsusePVnBU',
  Independiente: 'vt2OB7OniS8zFEgAS1qNz',
  Empleado: '2L498woyc1TQ1A3SpyUpxA',
  Cesantías: 'W2zNnmbYol9hf1OXMVGgR,7pUsqgXajww2lAjS8Z8Ult',
  Pensión: '3Do4hL0V01gzUMDUCXlB0D,45FVyiIWU70wBqFgR750SE',
  experto: '3VLoCVOpLMD9hvFFbUwUzo',
  Ahorro:
    '4sjSQocJHJA3wehCeeaQel,017vFbXOC94MeBLY4R44tx,IBMCOurBRnD4pht9Od8Wo,4e3djROf1Dr7Jfogj7iSOi,JqUxWGT2p4bwRNZli6FV3,5CWwfkVR8AkxeilNW4iU48,4dkf3aLiU6E11Wp5tbXqT3,6CyAjQdjyj6ktH9uokULY8,4FMB0tMDCxi8pCb9IvpGj,13fk4wY88IB1fA9aeOB0qM,18bfSEqhamhiOHQeS35Wpw,47oqc4NTZlwGOrMEThd6kE,405Dp5eAH8vHYeKjNquKdd',
  '2': '7IF4VrReibXT0Vb13iX3rd',
  '1': '3XCf8zuzh5bGWNcuvFBuwx',
  soluciones:
    '4sjSQocJHJA3wehCeeaQel,017vFbXOC94MeBLY4R44tx,IBMCOurBRnD4pht9Od8Wo,4e3djROf1Dr7Jfogj7iSOi,JqUxWGT2p4bwRNZli6FV3,5CWwfkVR8AkxeilNW4iU48,4dkf3aLiU6E11Wp5tbXqT3,6CyAjQdjyj6ktH9uokULY8,4FMB0tMDCxi8pCb9IvpGj,13fk4wY88IB1fA9aeOB0qM,18bfSEqhamhiOHQeS35Wpw,47oqc4NTZlwGOrMEThd6kE,405Dp5eAH8vHYeKjNquKdd',
  inexperto: '2DARMfEGFnJmATe8dXP3Uf',
  Inversión: '3L34QSh4x4iaHAec3quWGy,4ZiidHPjG8Bz3Q0bdS9aRb'
}

module.exports.PATH_URL_SOLUCIONES_AHORRO_DEFAULT = PATH_URL_SOLUCIONES_AHORRO_DEFAULT
module.exports.BUSINESS_LINE_FROM_ENTITY_CONTENTFUL = BUSINESS_LINE_FROM_ENTITY_CONTENTFUL
module.exports.PATH_URL_TYPE_CUSTOMER_AND_CATEGORY = PATH_URL_TYPE_CUSTOMER_AND_CATEGORY
module.exports.BUSINESS_LINES_CONTENTFUL = BUSINESS_LINES_CONTENTFUL
module.exports.CUSTOMER_TYPES_CONTENTFUL = CUSTOMER_TYPES_CONTENTFUL
module.exports.subcategoryDefault = subcategoryDefault
module.exports.mapCategories = mapCategories
module.exports.dataLineas = dataLineas
