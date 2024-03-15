import {
  grupsBiteInternal,
  filteRDataGroups,
  grupsBiteInternalInversion
} from './grups-bite-internal'

const data = {
  data: {
    allContentfulProducto: {
      edges: [
        {
          node: {
            titulo: 'Cesantías',
            contenido: [
              {
                urlSeo: 'cesantias/para-que-son/cesante',
                contentful_id: '12wxz9mZz9Ok44M64PSSXV'
              },
              {
                urlSeo: 'cesantias/para-que-son/empleado-independiente',
                contentful_id: '3yDxxmBbyiT6GPOnG2Dj5O'
              },
              {
                urlSeo: 'cesantias/extractos',
                contentful_id: '5WmDi3DUOLWYIUuN9OwmO8'
              },
              {
                urlSeo: 'cesantias/que-son',
                contentful_id: '2OJRVMtRN6wT6xJnlJc4sg'
              },
              {
                urlSeo: 'cesantias/portafolios/que-son',
                contentful_id: '7Aj4bDcmiRrjbSAJ4xTdYS'
              },
              {
                urlSeo:
                  'cesantias/pignoracion-embargo-inmovilizacion/inmovilizacion',
                contentful_id: '3twLfLO3fsuqjPv9woLUUf'
              },
              {
                urlSeo: 'cesantias/como-usarlas/para-que-retirarlas/empleado',
                contentful_id: '5cjVo81fAXzvsnlo19Xmqi'
              },
              {
                urlSeo: 'cesantias/como-usarlas/para-que-retirarlas/cesante',
                contentful_id: '45hvk5smrzNIClX4qNW6O2'
              },
              { urlSeo: null, contentful_id: '5SQhhmPt2TGAODy3FzhS9W' },
              {
                urlSeo: 'cesantias/como-usarlas/educacion/empleado',
                contentful_id: '6VayIRbLZHiIADvP2T1X74'
              },
              {
                urlSeo:
                  'cesantias/como-usarlas/educacion/cesante-independiente/oportunidad',
                contentful_id: '5kL0MGvKqd3MyjGBMHhauI'
              },
              {
                urlSeo: 'cesantias/declaracion',
                contentful_id: '687bqpw2AHfdQhkadti9qp'
              },
              {
                urlSeo: 'cesantias/como-usarlas/vivienda/cuanto-ahorrar',
                contentful_id: '5SRgmAyGybjlE53CoyO9xE'
              },
              { urlSeo: null, contentful_id: 'JMgvbNPIdLpAkuktUZ1yp' },
              {
                urlSeo: 'cesantias/independientes',
                contentful_id: '1omXAGrNSZevRYD09pIh3d'
              },
              {
                urlSeo: 'cesantias/como-usarlas/vivienda/cuanto-ahorrar',
                contentful_id: '7v09njktD3kdVHtuSo0S2X'
              },
              {
                urlSeo: 'cesantias/pignoracion-embargo-inmovilizacion/embargo',
                contentful_id: '2iWtieOqgqVgyRzkesMTVo'
              },
              { urlSeo: null, contentful_id: '2h10hWWctjjIj8J4n55xQB' },
              {
                urlSeo:
                  'cesantias/pignoracion-embargo-inmovilizacion/pignoración',
                contentful_id: '2Hg2jZISXRoTNOev3jaVaw'
              },
              {
                urlSeo: 'cesantias/certificados',
                contentful_id: '2Lh4lX3RHAEe46jOVqw1nf'
              },
              { urlSeo: null, contentful_id: '67bLxw6kifiYyfUp0vz3df' },
              {
                urlSeo: 'cesantias/como-usarlas/educacion/empleado/retiro',
                contentful_id: '3PM6cWviUO1D5QWrQhg8rA'
              },
              {
                urlSeo:
                  'cesantias/como-usarlas/educacion/cesante-independiente/retiro',
                contentful_id: '726uLfLeZM7B1ZspgLFYOU'
              }
            ]
          }
        }
      ]
    },
    allContentfulBeneficio: {
      edges: [
        {
          node: {
            contenido: {
              urlSeo: 'cesantias/soat',
              contentful_id: '22QeJSfyfLIj09dk3Vfflm'
            }
          }
        },
        {
          node: {
            contenido: {
              urlSeo: 'Beneficio/Cajadecompensacion',
              contentful_id: '3idU9aEVdgtfAmNIgyFBWM'
            }
          }
        },
        {
          node: {
            contenido: {
              urlSeo: 'cesantias/soat',
              contentful_id: '5AMw5lXeiFSXNUYFk7Qo8x'
            }
          }
        }
      ]
    },
    allContentfulNovedad: {
      edges: [
        {
          node: {
            contenido: {
              contentful_id: '2LTgDjm1j1nHnUz3fNTj2d',
              urlSeo: 'Cesantias-DisminucionIngresos'
            }
          }
        },
        {
          node: {
            contenido: {
              contentful_id: '1lxGp5aG791KVIRqzqJKtI',
              urlSeo: 'novedad/canales-digitales'
            }
          }
        },
        {
          node: {
            contenido: {
              contentful_id: '6e6MdfwAti6gl9cEsGh6BS',
              urlSeo: 'cesantias/novedad/vecindario'
            }
          }
        }
      ]
    },
    allContentfulTransaccion: {
      edges: [
        {
          node: {
            lineaDeNegocio: [
              { nombre: 'Cesantías' },
              { nombre: 'Inversión' },
              { nombre: 'Pensiones Obligatorias' },
              { nombre: 'Pensiones Voluntarias' }
            ],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Cesantías' }],
            contenido: [
              {
                contentful_id: '24C0wWGZpjU6iGAcLnFMyD',
                urlSeo: 'cesantias/como-usarlas/como-retirarlas/empleado',
                titulo: '¿Cómo retirar tus Cesantías?'
              }
            ]
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        {
          node: {
            lineaDeNegocio: [
              { nombre: 'Cesantías' },
              { nombre: 'Pensiones Obligatorias' }
            ],
            contenido: null
          }
        },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        { node: { lineaDeNegocio: null, contenido: null } },
        { node: { lineaDeNegocio: null, contenido: null } },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        { node: { lineaDeNegocio: null, contenido: null } }
      ]
    },
    allContentfulContenidoEducativo: {
      edges: [
        {
          node: {
            lineaDeProducto: { nombre: 'Cesantías' },
            contenido: {
              contentful_id: '6jocC19hxizlFsNxtnEeeb',
              urlSeo: 'cesantias/portafolios/como-cambiar',
              titulo: '¿Por qué y cómo cambiar de portafolio?'
            }
          }
        },
        {
          node: {
            lineaDeProducto: { nombre: 'Cesantías' },
            contenido: {
              contentful_id: '69iYiFT7j8ythJRHXi1FVh',
              urlSeo:
                'cesantias/como-usarlas/vivienda/cesante-independiente/empleado',
              titulo:
                '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?'
            }
          }
        }
      ]
    },
    allContentfulInformes: {
      edges: [
        {
          node: {
            lineaDeProducto: { nombre: 'Cesantías' },
            contenido: {
              contentful_id: '6jocC19hxizlFsNxtnEeeb',
              urlSeo: 'cesantias/portafolios/como-cambiar',
              titulo: '¿Por qué y cómo cambiar de portafolio?'
            }
          }
        },
        {
          node: {
            lineaDeProducto: { nombre: 'Cesantías' },
            contenido: {
              contentful_id: '69iYiFT7j8ythJRHXi1FVh',
              urlSeo:
                'cesantias/como-usarlas/vivienda/cesante-independiente/empleado',
              titulo:
                '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?'
            }
          }
        }
      ]
    },
    allContentfulCampana: {
      edges: [
        {
          node: {
            contenido: {
              urlSeo: 'afiliaciondigital/pension',
              contentful_id: '2KGDTXOz5HAsxrnsqW6IEa'
            }
          }
        },
        {
          node: {
            contenido: {
              urlSeo: 'afiliaciondigital/pension',
              contentful_id: '2KGDTXOz5HAsxrnsqW6IEa'
            }
          }
        }
      ]
    }
  }
}

const datadiferent = {
  data: {
    allContentfulProducto: {
      edges: [
        {
          node: {
            titulo: 'Cesantías',
            contenido: [
              {
                urlSeo: 'cesantias/para-que-son/cesante',
                contentful_id: '12wxz9mZz9Ok44M64PSSXV'
              },
              {
                urlSeo: 'cesantias/para-que-son/empleado-independiente',
                contentful_id: '3yDxxmBbyiT6GPOnG2Dj5O'
              },
              {
                urlSeo: 'cesantias/extractos',
                contentful_id: '5WmDi3DUOLWYIUuN9OwmO8'
              },
              {
                urlSeo: 'cesantias/que-son',
                contentful_id: '2OJRVMtRN6wT6xJnlJc4sg'
              },
              {
                urlSeo: 'cesantias/portafolios/que-son',
                contentful_id: '7Aj4bDcmiRrjbSAJ4xTdYS'
              },
              {
                urlSeo:
                  'cesantias/pignoracion-embargo-inmovilizacion/inmovilizacion',
                contentful_id: '3twLfLO3fsuqjPv9woLUUf'
              },
              {
                urlSeo: 'cesantias/como-usarlas/para-que-retirarlas/empleado',
                contentful_id: '5cjVo81fAXzvsnlo19Xmqi'
              },
              {
                urlSeo: 'cesantias/como-usarlas/para-que-retirarlas/cesante',
                contentful_id: '45hvk5smrzNIClX4qNW6O2'
              },
              { urlSeo: null, contentful_id: '5SQhhmPt2TGAODy3FzhS9W' },
              {
                urlSeo: 'cesantias/como-usarlas/educacion/empleado',
                contentful_id: '6VayIRbLZHiIADvP2T1X74'
              },
              {
                urlSeo:
                  'cesantias/como-usarlas/educacion/cesante-independiente/oportunidad',
                contentful_id: '5kL0MGvKqd3MyjGBMHhauI'
              },
              {
                urlSeo: 'cesantias/declaracion',
                contentful_id: '687bqpw2AHfdQhkadti9qp'
              },
              {
                urlSeo: 'cesantias/como-usarlas/vivienda/cuanto-ahorrar',
                contentful_id: '5SRgmAyGybjlE53CoyO9xE'
              },
              { urlSeo: null, contentful_id: 'JMgvbNPIdLpAkuktUZ1yp' },
              {
                urlSeo: 'cesantias/independientes',
                contentful_id: '1omXAGrNSZevRYD09pIh3d'
              },
              {
                urlSeo: 'cesantias/como-usarlas/vivienda/cuanto-ahorrar',
                contentful_id: '7v09njktD3kdVHtuSo0S2X'
              },
              {
                urlSeo: 'cesantias/pignoracion-embargo-inmovilizacion/embargo',
                contentful_id: '2iWtieOqgqVgyRzkesMTVo'
              },
              { urlSeo: null, contentful_id: '2h10hWWctjjIj8J4n55xQB' },
              {
                urlSeo:
                  'cesantias/pignoracion-embargo-inmovilizacion/pignoración',
                contentful_id: '2Hg2jZISXRoTNOev3jaVaw'
              },
              {
                urlSeo: 'cesantias/certificados',
                contentful_id: '2Lh4lX3RHAEe46jOVqw1nf'
              },
              { urlSeo: null, contentful_id: '67bLxw6kifiYyfUp0vz3df' },
              {
                urlSeo: 'cesantias/como-usarlas/educacion/empleado/retiro',
                contentful_id: '3PM6cWviUO1D5QWrQhg8rA'
              },
              {
                urlSeo:
                  'cesantias/como-usarlas/educacion/cesante-independiente/retiro',
                contentful_id: '726uLfLeZM7B1ZspgLFYOU'
              }
            ]
          }
        }
      ]
    },
    allContentfulBeneficio: {
      edges: [
        {
          node: {
            contenido: {
              urlSeo: 'cesantias/soat',
              contentful_id: '22QeJSfyfLIj09dk3Vfflm'
            }
          }
        },
        {
          node: {
            contenido: {
              urlSeo: 'Beneficio/Cajadecompensacion',
              contentful_id: '3idU9aEVdgtfAmNIgyFBWM'
            }
          }
        },
        {
          node: {
            contenido: {
              urlSeo: 'cesantias/soat',
              contentful_id: '5AMw5lXeiFSXNUYFk7Qo8x'
            }
          }
        }
      ]
    },
    allContentfulNovedad: {
      edges: [
        {
          node: {
            contenido: {
              contentful_id: '2LTgDjm1j1nHnUz3fNTj2d',
              urlSeo: 'Cesantias-DisminucionIngresos'
            }
          }
        },
        {
          node: {
            contenido: {
              contentful_id: '1lxGp5aG791KVIRqzqJKtI',
              urlSeo: 'novedad/canales-digitales'
            }
          }
        },
        {
          node: {
            contenido: {
              contentful_id: '6e6MdfwAti6gl9cEsGh6BS',
              urlSeo: 'cesantias/novedad/vecindario'
            }
          }
        }
      ]
    },
    allContentfulTransaccion: {
      edges: [
        {
          node: {
            lineaDeNegocio: [
              { nombre: 'Cesantías' },
              { nombre: 'Inversión' },
              { nombre: 'Pensiones Obligatorias' },
              { nombre: 'Pensiones Voluntarias' }
            ],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Cesantías' }],
            contenido: [
              {
                contentful_id: '24C0wWGZpjU6iGAcLnFMyD',
                urlSeo: 'cesantias/como-usarlas/como-retirarlas/empleado',
                titulo: '¿Cómo retirar tus Cesantías?'
              }
            ]
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        {
          node: {
            lineaDeNegocio: [
              { nombre: 'Cesantías' },
              { nombre: 'Pensiones Obligatorias' }
            ],
            contenido: null
          }
        },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        {
          node: { lineaDeNegocio: null, contenido: null }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        { node: { lineaDeNegocio: null, contenido: null } },
        { node: { lineaDeNegocio: null, contenido: null } },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        { node: { lineaDeNegocio: null, contenido: null } }
      ]
    },
    allContentfulContenidoEducativo: {
      edges: [
        {
          node: {
            lineaDeProducto: { nombre: 'Cesantías' },
            contenido: {
              contentful_id: '6jocC19hxizlFsNxtnEeeb',
              urlSeo: 'cesantias/portafolios/como-cambiar',
              titulo: '¿Por qué y cómo cambiar de portafolio?'
            }
          }
        },
        {
          node: {
            lineaDeProducto: { nombre: 'Cesantías' },
            contenido: {
              contentful_id: '69iYiFT7j8ythJRHXi1FVh',
              urlSeo:
                'cesantias/como-usarlas/vivienda/cesante-independiente/empleado',
              titulo:
                '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?'
            }
          }
        }
      ]
    },
    allContentfulCampana: {
      edges: [
        {
          node: {
            contenido: {
              urlSeo: 'afiliaciondigital/pension',
              contentful_id: '2KGDTXOz5HAsxrnsqW6IEa'
            }
          }
        },
        {
          node: {
            contenido: {
              urlSeo: 'afiliaciondigital/pension',
              contentful_id: '2KGDTXOz5HAsxrnsqW6IEa'
            }
          }
        }
      ]
    }
  }
}

const dataUndefined = {
  data: {
    allContentfulProducto: { edges: [] },
    allContentfulBeneficio: { edges: [] },
    allContentfulNovedad: { edges: [] },
    allContentfulTransaccion: { edges: [] },
    allContentfulContenidoEducativo: { edges: [] },
    allContentfulCampana: { edges: [] },
    allContentfulInformes: { edges: [] }
  }
}

const dataBeneficio = {
  data: {
    allContentfulProducto: { edges: [] },
    allContentfulBeneficio: {
      edges: [
        {
          node: {
            contenido: {
              urlSeo: 'cesantias/soat',
              contentful_id: '22QeJSfyfLIj09dk3Vfflm'
            }
          }
        },
        {
          node: {
            contenido: {
              urlSeo: 'Beneficio/Cajadecompensacion',
              contentful_id: '3idU9aEVdgtfAmNIgyFBWM'
            }
          }
        },
        {
          node: {
            contenido: {
              urlSeo: 'cesantias/soat',
              contentful_id: '5AMw5lXeiFSXNUYFk7Qo8x'
            }
          }
        }
      ]
    },
    allContentfulNovedad: {
      edges: []
    },
    allContentfulTransaccion: {
      edges: []
    },
    allContentfulInformes: {
      edges: []
    },
    allContentfulContenidoEducativo: {
      edges: []
    },
    allContentfulCampana: {
      edges: []
    }
  }
}

const dataProduct = {
  data: {
    allContentfulBeneficio: { edges: [] },
    allContentfulInformes: {
      edges: []
    },
    allContentfulProducto: {
      edges: [
        {
          node: {
            titulo: 'Cesantías',
            contenido: [
              {
                urlSeo: 'cesantias/para-que-son/cesante',
                contentful_id: '12wxz9mZz9Ok44M64PSSXV',

                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: 'cesantias/para-que-son/empleado-independiente',
                contentful_id: '3yDxxmBbyiT6GPOnG2Dj5O',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: 'cesantias/extractos',
                contentful_id: '5WmDi3DUOLWYIUuN9OwmO8',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  }
                ]
              },
              {
                urlSeo: 'cesantias/que-son',
                contentful_id: '2OJRVMtRN6wT6xJnlJc4sg'
              },
              {
                urlSeo: 'cesantias/portafolios/que-son',
                contentful_id: '7Aj4bDcmiRrjbSAJ4xTdYS',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo:
                  'cesantias/pignoracion-embargo-inmovilizacion/inmovilizacion',
                contentful_id: '3twLfLO3fsuqjPv9woLUUf',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: 'cesantias/como-usarlas/para-que-retirarlas/empleado',
                contentful_id: '5cjVo81fAXzvsnlo19Xmqi',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: 'cesantias/como-usarlas/para-que-retirarlas/cesante',
                contentful_id: '45hvk5smrzNIClX4qNW6O2',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: null,
                contentful_id: '5SQhhmPt2TGAODy3FzhS9W',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: 'cesantias/como-usarlas/educacion/empleado',
                contentful_id: '6VayIRbLZHiIADvP2T1X74',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo:
                  'cesantias/como-usarlas/educacion/cesante-independiente/oportunidad',
                contentful_id: '5kL0MGvKqd3MyjGBMHhauI',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: 'cesantias/declaracion',
                contentful_id: '687bqpw2AHfdQhkadti9qp',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: 'cesantias/como-usarlas/vivienda/cuanto-ahorrar',
                contentful_id: '5SRgmAyGybjlE53CoyO9xE',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: null,
                contentful_id: 'JMgvbNPIdLpAkuktUZ1yp',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: 'cesantias/independientes',
                contentful_id: '1omXAGrNSZevRYD09pIh3d',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: 'cesantias/como-usarlas/vivienda/cuanto-ahorrar',
                contentful_id: '7v09njktD3kdVHtuSo0S2X',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: 'cesantias/pignoracion-embargo-inmovilizacion/embargo',
                contentful_id: '2iWtieOqgqVgyRzkesMTVo',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: null,
                contentful_id: '2h10hWWctjjIj8J4n55xQB',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo:
                  'cesantias/pignoracion-embargo-inmovilizacion/pignoración',
                contentful_id: '2Hg2jZISXRoTNOev3jaVaw',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: 'cesantias/certificados',
                contentful_id: '2Lh4lX3RHAEe46jOVqw1nf',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: null,
                contentful_id: '67bLxw6kifiYyfUp0vz3df',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo: 'cesantias/como-usarlas/educacion/empleado/retiro',
                contentful_id: '3PM6cWviUO1D5QWrQhg8rA',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              },
              {
                urlSeo:
                  'cesantias/como-usarlas/educacion/cesante-independiente/retiro',
                contentful_id: '726uLfLeZM7B1ZspgLFYOU',
                tipoDeCliente: [
                  {
                    nombre: 'Afiliado',
                    contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                  },
                  {
                    nombre: 'Empleador',
                    contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    allContentfulNovedad: {
      edges: []
    },
    allContentfulTransaccion: {
      edges: []
    },
    allContentfulContenidoEducativo: {
      edges: []
    },
    allContentfulCampana: {
      edges: []
    }
  }
}

const dataNovedad = {
  data: {
    allContentfulProducto: { edges: [] },
    allContentfulInformes: {
      edges: []
    },
    allContentfulNovedad: {
      edges: [
        {
          node: {
            contenido: {
              urlSeo: 'cesantias/soat',
              contentful_id: '22QeJSfyfLIj09dk3Vfflm'
            }
          }
        },
        {
          node: {
            contenido: {
              urlSeo: 'Beneficio/Cajadecompensacion',
              contentful_id: '3idU9aEVdgtfAmNIgyFBWM'
            }
          }
        },
        {
          node: {
            contenido: {
              urlSeo: 'cesantias/soat',
              contentful_id: '5AMw5lXeiFSXNUYFk7Qo8x'
            }
          }
        }
      ]
    },
    allContentfulBeneficio: {
      edges: []
    },
    allContentfulTransaccion: {
      edges: []
    },
    allContentfulContenidoEducativo: {
      edges: []
    },
    allContentfulCampana: {
      edges: []
    }
  }
}

const dataCampana = {
  data: {
    allContentfulInformes: {
      edges: []
    },
    allContentfulProducto: { edges: [] },
    allContentfulCampana: {
      edges: [
        {
          node: {
            contenido: {
              urlSeo: 'cesantias/soat',
              contentful_id: '22QeJSfyfLIj09dk3Vfflm'
            }
          }
        },
        {
          node: {
            contenido: {
              urlSeo: 'Beneficio/Cajadecompensacion',
              contentful_id: '3idU9aEVdgtfAmNIgyFBWM'
            }
          }
        },
        {
          node: {
            contenido: {
              urlSeo: 'cesantias/soat',
              contentful_id: '5AMw5lXeiFSXNUYFk7Qo8x'
            }
          }
        }
      ]
    },
    allContentfulBeneficio: {
      edges: []
    },
    allContentfulTransaccion: {
      edges: []
    },
    allContentfulContenidoEducativo: {
      edges: []
    },
    allContentfulNovedad: {
      edges: []
    }
  }
}

const dataEducativa = {
  data: {
    allContentfulProducto: { edges: [] },
    allContentfulCampana: { edges: [] },
    allContentfulInformes: {
      edges: []
    },
    allContentfulBeneficio: {
      edges: []
    },
    allContentfulTransaccion: {
      edges: []
    },
    allContentfulContenidoEducativo: {
      edges: [
        {
          node: {
            lineaDeProducto: { nombre: 'Cesantías' },
            contenido: {
              contentful_id: '6jocC19hxizlFsNxtnEeeb',
              urlSeo: 'cesantias/portafolios/como-cambiar',
              titulo: '¿Por qué y cómo cambiar de portafolio?'
            }
          }
        },
        {
          node: {
            lineaDeProducto: { nombre: 'Cesantías' },
            contenido: {
              contentful_id: '69iYiFT7j8ythJRHXi1FVh',
              urlSeo:
                'cesantias/como-usarlas/vivienda/cesante-independiente/empleado',
              titulo:
                '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?'
            }
          }
        }
      ]
    },
    allContentfulNovedad: {
      edges: []
    }
  }
}

const datanull = {
  data: {
    allContentfulProducto: { edges: [] },
    allContentfulCampana: { edges: [] },
    allContentfulBeneficio: {
      edges: []
    },
    allContentfulTransaccion: {
      edges: []
    },
    allContentfulContenidoEducativo: {
      edges: []
    },
    allContentfulNovedad: {
      edges: []
    },
    allContentfulInformes: {
      edges: []
    }
  }
}

const dataServices = {
  data: {
    allContentfulProducto: { edges: [] },
    allContentfulCampana: { edges: [] },
    allContentfulInformes: {
      edges: []
    },
    allContentfulBeneficio: {
      edges: []
    },
    allContentfulTransaccion: {
      edges: [
        {
          node: {
            lineaDeNegocio: [
              { nombre: 'Cesantías' },
              { nombre: 'Inversión' },
              { nombre: 'Pensiones Obligatorias' },
              { nombre: 'Pensiones Voluntarias' }
            ],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Cesantías' }],
            contenido: [
              {
                contentful_id: '24C0wWGZpjU6iGAcLnFMyD',
                urlSeo: 'cesantias/como-usarlas/como-retirarlas/empleado',
                titulo: '¿Cómo retirar tus Cesantías?'
              }
            ]
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        {
          node: {
            lineaDeNegocio: [
              { nombre: 'Cesantías' },
              { nombre: 'Pensiones Obligatorias' }
            ],
            contenido: null
          }
        },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Voluntarias' }],
            contenido: null
          }
        },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        {
          node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        { node: { lineaDeNegocio: null, contenido: null } },
        { node: { lineaDeNegocio: null, contenido: null } },
        {
          node: {
            lineaDeNegocio: [{ nombre: 'Pensiones Obligatorias' }],
            contenido: null
          }
        },
        { node: { lineaDeNegocio: null, contenido: null } },
        { node: { lineaDeNegocio: null, contenido: null } }
      ]
    },
    allContentfulContenidoEducativo: {
      edges: []
    },
    allContentfulNovedad: {
      edges: []
    }
  }
}

const dataCompleta = {
  data: {
    allContentfulInformes: {
      edges: []
    },
    allContentfulProducto: {
      edges: [
        {
          node: {
            categoriaProducto: null,
            titulo: 'Ahorro',
            contentful_id: '47oqc4NTZlwGOrMEThd6kE',
            contenido: [
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'empresas-ahorro-planes',
                contentful_id: '6F7tDvZ8glmB8eZslrwtgD',
                categoriaCliente: null
              },
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'empresas-ahorro-comision',
                contentful_id: '7piMAz5Eq1wOc54fiezEdo',
                categoriaCliente: null
              },
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'empresas-ahorro-serviciosplanes',
                contentful_id: '4VCdpOEbBS9Ul394PbvAxi',
                categoriaCliente: null
              },
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'empresas-ahorro-acompanamos',
                contentful_id: 'G0m3rvEx8imM6lwa7kPjP',
                categoriaCliente: null
              }
            ],
            lineadenegocio: {
              id: '0ca70c31-c1db-5aee-8013-a7b34a04516a',
              nombre: 'Pensiones Voluntarias'
            }
          }
        },
        {
          node: {
            categoriaProducto: 'Complementario',
            titulo: 'Plan Vive Sura',
            contentful_id: '5CWwfkVR8AkxeilNW4iU48',
            contenido: [
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'ahorro/productos-complementarios-vive-sura',
                contentful_id: '7pbqYWDXBJ1v4Zsxfr49UL',
                categoriaCliente: null
              }
            ],
            lineadenegocio: {
              id: '0ca70c31-c1db-5aee-8013-a7b34a04516a',
              nombre: 'Pensiones Voluntarias'
            }
          }
        },
        {
          node: {
            categoriaProducto: 'Complementario',
            titulo: 'Leasing habitacional Bancolombia',
            contentful_id: '4e3djROf1Dr7Jfogj7iSOi',
            contenido: [
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'ahorro/productos-complementarios-leasing-habitacional',
                contentful_id: '1rn3OY1LM2bylydo88XeKj',
                categoriaCliente: null
              }
            ],
            lineadenegocio: {
              id: '0ca70c31-c1db-5aee-8013-a7b34a04516a',
              nombre: 'Pensiones Voluntarias'
            }
          }
        },
        {
          node: {
            categoriaProducto: 'Complementario',
            titulo: 'Crédito para vivienda Bancolombia',
            contentful_id: 'JqUxWGT2p4bwRNZli6FV3',
            contenido: [
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'ahorro/productos-complementarios-credito-vivienda',
                contentful_id: '4dSE5dBqXkj1OguNJk7tcp',
                categoriaCliente: null
              }
            ],
            lineadenegocio: {
              id: '0ca70c31-c1db-5aee-8013-a7b34a04516a',
              nombre: 'Pensiones Voluntarias'
            }
          }
        },
        {
          node: {
            categoriaProducto: 'Complementario',
            titulo: 'Crédito de consumo con pignoración',
            contentful_id: 'IBMCOurBRnD4pht9Od8Wo',
            contenido: [
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo:
                  'ahorro/productos-complementarios-credito-con-pignoracion',
                contentful_id: 'LOKbtCdPsOkXRPXCGbjHE',
                categoriaCliente: null
              }
            ],
            lineadenegocio: {
              id: '0ca70c31-c1db-5aee-8013-a7b34a04516a',
              nombre: 'Pensiones Voluntarias'
            }
          }
        },
        {
          node: {
            categoriaProducto: null,
            titulo: 'Cesantías',
            contentful_id: 'W2zNnmbYol9hf1OXMVGgR',
            contenido: [
              {
                Tema: [
                  {
                    contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                    tituloCorto: 'Generalidades'
                  }
                ],
                urlSeo: 'cesantias/que-son',
                contentful_id: '4r5NXg7eIYv1aKFEHT3Brk',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: '3Ymr08WpUQinc0MciY6Pwa',
                    tituloCorto: 'Mecanismo de Protección al Cesante'
                  }
                ],
                urlSeo: 'cesantias/mecanismo-proteccion-cesante/como-acceder',
                contentful_id: '2kmCv1McS9VqjAtfkiE7jj',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                    tituloCorto: 'Generalidades'
                  }
                ],
                urlSeo: 'cesantias/para-que-son-ces',
                contentful_id: '7djopz1nxdiCKov302YZMa',
                categoriaCliente: [
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: '3Ymr08WpUQinc0MciY6Pwa',
                    tituloCorto: 'Mecanismo de Protección al Cesante'
                  }
                ],
                urlSeo: 'cesantias/mecanismo-proteccion-cesante',
                contentful_id: '23qtpJMSM4YNIyqXuq6rXe',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                    tituloCorto: 'Generalidades'
                  }
                ],
                urlSeo: 'cesantias/intereses/que-son',
                contentful_id: '4NUxp2FHGN657j83IS6iTO',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                    tituloCorto: 'Generalidades'
                  }
                ],
                urlSeo: 'cesantias/aportes/que-son',
                contentful_id: '7s2xq7rgMj4ktUt3bHhjok',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: 'NtTH8hEGhYSbTgRU51YND',
                    tituloCorto: 'Portafolios y Tributarios'
                  }
                ],
                urlSeo:
                  'cesantias/beneficios-tributarios/como-declaran-trabajadores',
                contentful_id: '3u6HxJ6dKz4VcqryPX4PQS',
                categoriaCliente: [
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: 'NtTH8hEGhYSbTgRU51YND',
                    tituloCorto: 'Portafolios y Tributarios'
                  }
                ],
                urlSeo: 'cesantias/beneficios-tributarios/ahorrar-cesantias',
                contentful_id: '5z89TWtWdNGkWGhQG8x6PR',
                categoriaCliente: [
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: 'NtTH8hEGhYSbTgRU51YND',
                    tituloCorto: 'Portafolios y Tributarios'
                  }
                ],
                urlSeo: 'cesantias/portafolios/corto-largo-plazo',
                contentful_id: '635Er8TYNjTJSRJChKa5R9',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: 'NtTH8hEGhYSbTgRU51YND',
                    tituloCorto: 'Portafolios y Tributarios'
                  }
                ],
                urlSeo: 'cesantias/portafolios/porque-como-cambiar',
                contentful_id: '27WBmPnOOJ5KodhWSeurj9',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: '1XRfmYrwLV3ApgMefhyvJu',
                    tituloCorto: 'Inmovilización, Embargo y Pignoración'
                  }
                ],
                urlSeo:
                  'cesantias/pignoracion-embargo-inmovilizacion/que-signfica-pignorar',
                contentful_id: '18hr0YhTRaMvseK8PEOYOS',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: '1XRfmYrwLV3ApgMefhyvJu',
                    tituloCorto: 'Inmovilización, Embargo y Pignoración'
                  }
                ],
                urlSeo:
                  'cesantias/pignoracion-embargo-inmovilizacion/que-es-embargo',
                contentful_id: '3oZGRnArFGxmoyDVrAoeLX',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: '1XRfmYrwLV3ApgMefhyvJu',
                    tituloCorto: 'Inmovilización, Embargo y Pignoración'
                  }
                ],
                urlSeo:
                  'cesantias/pignoracion-embargo-inmovilizacion/en-que-consiste-inmovilizar',
                contentful_id: '51QUG2hfA3ftt3L2koBTnE',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
                    tituloCorto: 'Extractos y Certificados'
                  }
                ],
                urlSeo: 'cesantias/certificados',
                contentful_id: '3pYpjw2sFa2PdHkmqZIJND',
                categoriaCliente: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'empresas-cesantias-clavepreguntas',
                contentful_id: '6NCf9CaxKvkpaVcs9xDv3l',
                categoriaCliente: null
              },
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'empresas-cesantias-certifacil',
                contentful_id: '7HmVFsoAJ0T04LeYv6fpo',
                categoriaCliente: null
              },
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'empresas-cesantias-liquideypague',
                contentful_id: '27L0hIIKhpuTxBfeC7Aefh',
                categoriaCliente: null
              },
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'empresas-cesantias-paguecesantias',
                contentful_id: '4ZB5MQy4ZgpJYP8leMLPue',
                categoriaCliente: null
              },
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'empresas-cesantias-pila',
                contentful_id: '6VpQ8vnCOoNIeFzzZTkiL6',
                categoriaCliente: null
              },
              {
                Tema: [
                  {
                    contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                    tituloCorto: 'Generalidades'
                  }
                ],
                urlSeo: 'cesantias-calculadora',
                contentful_id: 'PQcZ8hT1yHyWxd8MTkdFj',
                categoriaCliente: [
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  },
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [
                      {
                        nombre: 'Cesantías'
                      }
                    ]
                  }
                ]
              }
            ],
            lineadenegocio: {}
          }
        },
        {
          node: {
            categoriaProducto: 'Soluciones',
            titulo: '+Protección',
            contentful_id: '4dkf3aLiU6E11Wp5tbXqT3',
            contenido: [
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'ahorro/afiliado/mas-proteccion',
                contentful_id: '2Bn0l3tKFkLtewkIZwWh1B',
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B',
                    lineadenegocio: [
                      {
                        nombre: 'Pensiones Voluntarias'
                      }
                    ]
                  }
                ]
              }
            ],
            lineadenegocio: {
              id: '0ca70c31-c1db-5aee-8013-a7b34a04516a',
              nombre: 'Pensiones Voluntarias'
            }
          }
        },
        {
          node: {
            categoriaProducto: 'Soluciones',
            titulo: 'Mi Reserva',
            contentful_id: '18bfSEqhamhiOHQeS35Wpw',
            contenido: [
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'ahorro-mi-reserva',
                contentful_id: '12YCBJYldaKys0PKYZ1prN',
                categoriaCliente: null
              }
            ],
            lineadenegocio: {
              id: '0ca70c31-c1db-5aee-8013-a7b34a04516a',
              nombre: 'Pensiones Voluntarias'
            }
          }
        },
        {
          node: {
            categoriaProducto: 'Soluciones',
            titulo: 'Siempre Activo',
            contentful_id: '6CyAjQdjyj6ktH9uokULY8',
            contenido: [
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'ahorro-siempreactivo',
                contentful_id: '2O1HpSHyL6B9iICv4muS9A',
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B',
                    lineadenegocio: [
                      {
                        nombre: 'Pensiones Voluntarias'
                      }
                    ]
                  }
                ]
              }
            ],
            lineadenegocio: {
              id: '0ca70c31-c1db-5aee-8013-a7b34a04516a',
              nombre: 'Pensiones Voluntarias'
            }
          }
        },
        {
          node: {
            categoriaProducto: 'Soluciones',
            titulo: 'Ahorro 100% Digital',
            contentful_id: '13fk4wY88IB1fA9aeOB0qM',
            contenido: [
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'ahorro/digital',
                contentful_id: '6qfrokQ9v5ZcznecbB6zJG',
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B',
                    lineadenegocio: [
                      {
                        nombre: 'Pensiones Voluntarias'
                      }
                    ]
                  }
                ]
              }
            ],
            lineadenegocio: {
              id: '0ca70c31-c1db-5aee-8013-a7b34a04516a',
              nombre: 'Pensiones Voluntarias'
            }
          }
        },
        {
          node: {
            categoriaProducto: 'Soluciones',
            titulo: 'Protección Hijos',
            contentful_id: '017vFbXOC94MeBLY4R44tx',
            contenido: [
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'ahorro/hijos',
                contentful_id: '4lvr3LTRUqP7Oq8jYzPhOa',
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B',
                    lineadenegocio: [
                      {
                        nombre: 'Pensiones Voluntarias'
                      }
                    ]
                  }
                ]
              }
            ],
            lineadenegocio: {
              id: '0ca70c31-c1db-5aee-8013-a7b34a04516a',
              nombre: 'Pensiones Voluntarias'
            }
          }
        },
        {
          node: {
            categoriaProducto: 'Soluciones',
            titulo: 'Planes Institucionales',
            contentful_id: '4FMB0tMDCxi8pCb9IvpGj',
            contenido: [
              {
                Tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                urlSeo: 'ahorro-planesinstitucionales',
                contentful_id: '6M7Vwv19Lm4giGsetgGfhM',
                categoriaCliente: [
                  {
                    descripcion: 'Ahorro',
                    contentful_id: 'OIt5hRcdoEEWhNaiH2S1B',
                    lineadenegocio: [
                      {
                        nombre: 'Pensiones Voluntarias'
                      }
                    ]
                  }
                ]
              }
            ],
            lineadenegocio: {
              id: '0ca70c31-c1db-5aee-8013-a7b34a04516a',
              nombre: 'Pensiones Voluntarias'
            }
          }
        },
        {
          node: {
            categoriaProducto: null,
            titulo: 'Pensión Obligatoria',
            contentful_id: '3Do4hL0V01gzUMDUCXlB0D',
            contenido: [
              {
                Tema: [
                  {
                    contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                    tituloCorto: 'Generalidades'
                  }
                ],
                urlSeo: 'que-son-pensiones',
                contentful_id: '2A4xaLqC0nUCjuED0TNa9E',
                categoriaCliente: [
                  {
                    descripcion: 'Pensión por invalidez',
                    contentful_id: '7lDDi92WQvINHDoyppiGG1',
                    lineadenegocio: [
                      {
                        nombre: 'Pensiones Obligatorias'
                      }
                    ]
                  },
                  {
                    descripcion: 'Pensión por sobrevivencia',
                    contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
                    lineadenegocio: [
                      {
                        nombre: 'Pensiones Obligatorias'
                      }
                    ]
                  },
                  {
                    descripcion: 'Pensión por vejez',
                    contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
                    lineadenegocio: [
                      {
                        nombre: 'Pensiones Obligatorias'
                      }
                    ]
                  },
                  {
                    descripcion: 'Soy pensionado',
                    contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
                    lineadenegocio: [
                      {
                        nombre: 'Pensiones Obligatorias'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                    tituloCorto: 'Generalidades'
                  }
                ],
                urlSeo: 'diferencias-regimenes',
                contentful_id: '2ilVwq892IjQZLSsqthDnU',
                categoriaCliente: [
                  {
                    descripcion: 'Pensión por vejez',
                    contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
                    lineadenegocio: [
                      {
                        nombre: 'Pensiones Obligatorias'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                    tituloCorto: 'Generalidades'
                  }
                ],
                urlSeo: 'mitos-realidades-sistema-pensional',
                contentful_id: '6VuZ65EGUHchKosppLsVGX',
                categoriaCliente: [
                  {
                    descripcion: 'Pensión por vejez',
                    contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
                    lineadenegocio: [
                      {
                        nombre: 'Pensiones Obligatorias'
                      }
                    ]
                  }
                ]
              },
              {
                Tema: [
                  {
                    contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                    tituloCorto: 'Generalidades'
                  }
                ],
                urlSeo: 'mitos-realidades-sistema-pensional',
                contentful_id: '6azIetRFUQIJDJ3Dwby0CY',
                categoriaCliente: [
                  {
                    descripcion: 'Pensión por vejez',
                    contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
                    lineadenegocio: [
                      {
                        nombre: 'Pensiones Obligatorias'
                      }
                    ]
                  }
                ]
              }
            ],
            lineadenegocio: {
              id: '3dc929c5-8b73-575f-9ce6-5b1b6c1c85db',
              nombre: 'Pensiones Obligatorias'
            }
          }
        }
      ]
    },
    allContentfulBeneficio: {
      edges: [
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              urlSeo: 'empresas-transveral-lineas',
              contentful_id: 'GbttKYqTGRTVZGMnbn3kY'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              urlSeo:
                'empresas/oferta-canales-de-servicio-para-tus-colaboradores',
              contentful_id: '1sZQrmIgXQoqjbUHuTCcdU'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              urlSeo: 'empresas/acompanamiento-empleador',
              contentful_id: '1ICpTNPSI2R0F3JgjRN5JE'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              urlSeo: 'empresas/acompanamos-a-tus-colaboradores',
              contentful_id: '6g6bVUXQfWmDHsFCTJE1oh'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              urlSeo: 'empresas-beneficios-universidad',
              contentful_id: '4LVWRKXz2tO8hinOrqo70U'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              urlSeo: 'empresas-novedades-alianza',
              contentful_id: '7c7uXwjjUMPvG2EFJDU7ZD'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '6QSO0SouYnUllWRWOubCZR',
                  tituloCorto: 'Canales Retiro'
                }
              ],
              urlSeo: 'cesantias/por-que-estar-proteccion',
              contentful_id: '4SFZQxJCVrRBME6lLqdVSW'
            }
          }
        }
      ]
    },
    allContentfulNovedad: {
      edges: [
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '5FpgrPZ37ga7vie2nbq6T4',
              urlSeo: 'ahorro/personas/objetivo-personal'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '5pqMkp3LUtmxcXgzycCzpg',
              urlSeo: 'ahorro/afiliado/un-viaje-por-la-cultura-del-ahorro'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '4CCrkrPS86bAamDlNRsPBY',
              urlSeo: 'empresas-novedades-inteligencia'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '7pcPW4Q3tv1YhGCFQ97NP8',
              urlSeo: 'Ahorro-Afiliado-PreoupacionAlaAccion'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '6e5edis0NiF2c6l8wTfr3G',
              urlSeo: 'empresas-ahorro-doble-reto'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '2eoZQhAobK4Y4eAyh1n9tf',
              urlSeo: 'ahorro/empresas/transformacion-procesos-de-seleccion'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '2ZDV5OhobOW7momvTib6SR',
              urlSeo: 'Ahorro-Beneficio-Vivienda'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '7MW3MO4AFSmm8kzB7W1JmL',
              urlSeo: 'empresas/atraccion-talento-joven'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '6UDMDTPqYwsAk67KYITyz9',
              urlSeo: 'ahorro/empresas/el-mejor-talento'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '7cevJhYJOiJLWaaKM5nswj',
              urlSeo: 'mitos-realidades-sistema-pensional'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '6QSO0SouYnUllWRWOubCZR',
                  tituloCorto: 'Canales Retiro'
                },
                {
                  contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                  tituloCorto: 'Novedades y Beneficios'
                }
              ],
              contentful_id: '3idU9aEVdgtfAmNIgyFBWM',
              urlSeo: 'novedad/vecindario-proteccion'
            }
          }
        },
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                  tituloCorto: 'Novedades y Beneficios'
                }
              ],
              contentful_id: '6SOdfejKD5VT2a7pb4fiTy',
              urlSeo: 'novedad/futuro-sostenible'
            }
          }
        }
      ]
    },
    allContentfulContenidoEducativo: {
      edges: [
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '2AJslthkG3eNLesKBAsKxb',
              urlSeo: 'empresas-novedades-modelos',
              titulo: 'Modelos de compensación',
              categoriaCliente: null
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '2unJXHCdgglQd1El51r7HV',
              urlSeo: 'empresas-cesantias-planes-institucionales',
              titulo:
                '¿Buscas motivar a tus colaboradores y premiar gestiones sobresalientes?',
              categoriaCliente: null
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Obligatorias',
              contentful_id: '45FVyiIWU70wBqFgR750SE'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '5gB7I8narHCkLbRzYwfG6K',
              urlSeo: 'empresas/pension/gestiona-deudas-e-inconsistencias',
              titulo:
                'Soluciona y gestiona deudas e inconsistencias en proteccion.com',
              categoriaCliente: null
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: 'MiIKyQViyofCgn4WkWLvE',
              urlSeo: 'empresas-cesantias-retiros',
              titulo:
                '¿Cómo gestionar los retiros de Cesantías de tus colaboradores en proteccion.com?',
              categoriaCliente: null
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '61abU4E9rPAyg7OUBkNj5F',
              urlSeo: 'ahorro/empresas/es-momento-de-reinventarse',
              titulo: 'Es momento de reinventarse',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '7oloAAaenIgKL6cRAlQ4yq',
              urlSeo: 'empresas-cesantias-usuarioclave',
              titulo: 'Actualiza los usuarios de tu clave empresarial',
              categoriaCliente: null
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: 'SsqMmohl0Lh7ZyELRehth',
              urlSeo: 'ahorro/empresas/diagnostica-el-estado-de-tu-negocio',
              titulo: 'Diagnostica el estado de tu negocio',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '6NpEvFwMJiNx3D3eACWreL',
              urlSeo: 'ahorro/afiliado/momento-de-ahorrar',
              titulo: 'Elimina la palabra excusa. Es momento de ahorrar',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '2N4ZpHyuYVhjXJG9GUif4f',
              urlSeo: 'ahorro/afiliado/perfil-financiero',
              titulo:
                'Perfil financiero, rasgos que definen tu relación con el dinero',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: 'tSOcDidhDKtOsZGKkSRMg',
              urlSeo:
                'ahorro/afiliado/finanzas-personales-en-tiempos-de-crisis',
              titulo: 'Finanzas personales en tiempos de crisis',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '3Y1CnCbyvoIGBtWorEjZCw',
              urlSeo: 'empresas-cesantias-clave',
              titulo:
                'Clave Empresarial: la llave de acceso a un mundo de soluciones digitales',
              categoriaCliente: null
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '4EyBqmnsroiflIjC61F64x',
              urlSeo: 'ahorro/afiliado/identifica-tu-situacion-financiera',
              titulo: '¿Cómo identificar tu situación financiera actual?',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '17T6PgoJNtGr4dbleOo9p0',
              urlSeo: 'Ahorro/afiliado/estabilidad-financiera',
              titulo: 'Planeación: ¡Fortalece tu estabilidad financiera!',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '5E3DqDPQ2QNg5IYgXJKQHU',
              urlSeo: 'ahorro/afiliado/deudas',
              titulo: 'Superheroínas o villanas. ¿Qué son las deudas para ti?',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '5zWdjadtQHGRoGX4AtfOg4',
              urlSeo: 'ahorro/afiliado/me-alcanza-la-quincena',
              titulo: 'Libre soy, ¡me alcanza la quincena!',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '1jtLjl6Z3r8aeiEpdQC5wE',
              urlSeo: 'Ahorro/Afiliado/retofinanzas',
              titulo: '¡Toma el control de tus finanzas en 21 días!',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '2el4sL7ZP9VGxRibLSYmKu',
              urlSeo: 'Ahorro-BeneficiosTributarios',
              titulo:
                'Consejos para obtener beneficios tributarios con tu ahorro',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '7pNuC0N7n4dcWs1G2Ien02',
              urlSeo: 'Ahorro-SaludFinanciera',
              titulo: '¿Cómo está tu salud financiera?',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: 'WIK9JIjSo0AKBd1f2jHT4',
              urlSeo: 'empresas-ahorro-retiro',
              titulo: '¿Cómo realizar retiros de Pensión Voluntaria?',
              categoriaCliente: null
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '6BUCawJvfstlsh1GNFOPZl',
              urlSeo: 'Ahorro-Afiliado-Empresas-RetoFinanciero',
              titulo: '¿Cómo atender el reto financiero actual?',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: 'BT6Tya9KnH9DrVgEyGHDw',
              urlSeo: 'empresas-ahorro-liquidaypaga',
              titulo:
                'Liquida y paga Aportes en Pensión Voluntaria desde Proteccion.com',
              categoriaCliente: null
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '535cTVjJlMisArXFWxMz0l',
              urlSeo: 'Ahorro-ControlFinanzas',
              titulo: '4 apps que te ayudarán con el control de tus finanzas',
              categoriaCliente: [
                {
                  descripcion: 'Ahorro',
                  contentful_id: 'OIt5hRcdoEEWhNaiH2S1B'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '3kkyjTeW98neCFIDyjzCx5',
              urlSeo: 'empresas-ahorro-tips',
              titulo: 'Tips de finanzas para Pymes',
              categoriaCliente: null
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                  tituloCorto: 'GENERICO PARA AHORRO'
                }
              ],
              contentful_id: '5Vhjt7hBRmKXrZe1QRwFlA',
              urlSeo: 'empresas-ahorro-consejos',
              titulo: 'Consejos para la recuperación económica de tu empresa',
              categoriaCliente: null
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                  tituloCorto: 'Vivienda'
                },
                {
                  contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                  tituloCorto: 'Educación'
                }
              ],
              contentful_id: '24ZCw88Mt35VoQTtBW13pj',
              urlSeo: 'cesantias/retiro-cesantias/como-retirarlas',
              titulo: '¿Cómo retirar tus Cesantías?',
              categoriaCliente: [
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '6QSO0SouYnUllWRWOubCZR',
                  tituloCorto: 'Canales Retiro'
                }
              ],
              contentful_id: '2LTgDjm1j1nHnUz3fNTj2d',
              urlSeo: 'cesantias/retiro-cesantias/disminucion-ingresos',
              titulo: 'Retiro parcial de Cesantías por Disminución de Ingresos',
              categoriaCliente: [
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                },
                {
                  descripcion: 'Independiente',
                  contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                  tituloCorto: 'Educación'
                }
              ],
              contentful_id: '2fvYudDKy1jmtbBZS5Cywo',
              urlSeo: 'cesantias/novedad/retiro-online-educacion',
              titulo: 'Retira en línea tus Cesantías para educación',
              categoriaCliente: [
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Obligatorias',
              contentful_id: '45FVyiIWU70wBqFgR750SE'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '6QSO0SouYnUllWRWOubCZR',
                  tituloCorto: 'Canales Retiro'
                },
                {
                  contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                  tituloCorto: 'Educación'
                },
                {
                  contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
                  tituloCorto: 'Extractos y Certificados'
                },
                {
                  contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                  tituloCorto: 'Generalidades'
                }
              ],
              contentful_id: '6CcVkU6W0dt5uRQJ4M91eb',
              urlSeo: 'mitos-realidades-sistema-pensional-contendioeduc',
              titulo:
                'URL REPETIDA mitos y realidades. Ensayo contenido educativo (1)',
              categoriaCliente: [
                {
                  descripcion: 'Pensión por vejez',
                  contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Pensiones Obligatorias',
              contentful_id: '45FVyiIWU70wBqFgR750SE'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                  tituloCorto: 'Generalidades'
                }
              ],
              contentful_id: 'ixxKMebxvMfDmOvqutmqz',
              urlSeo: 'mitos-realidades-sistema-pensional-contendioeduc',
              titulo: 'mitos y realidades. Ensayo contenido educativoo',
              categoriaCliente: [
                {
                  descripcion: 'Pensión por vejez',
                  contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '1bveIhWTIleo2K6PHMvDQO',
                  tituloCorto: 'Generalidades'
                }
              ],
              contentful_id: '23wGFDP6zN4KUqUg39HTsH',
              urlSeo: 'Empresas/Gestionar-Retiro-Cesantias',
              titulo: 'Gestiona el retiro de Cesantías de tus empleados',
              categoriaCliente: [
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                },
                {
                  descripcion: 'Independiente',
                  contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                  tituloCorto: 'Educación'
                }
              ],
              contentful_id: 'KzKMI2ncK81ThfXtLx2qJ',
              urlSeo: 'cesantias/como-usarlas/educacion/que-errores-evitar',
              titulo:
                '¿Qué errores evitar a la hora de usar tus Cesantías para educación?',
              categoriaCliente: [
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                },
                {
                  descripcion: 'Independiente',
                  contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                  tituloCorto: 'Educación'
                }
              ],
              contentful_id: 'xLPj9BcW9h0dBe2PAE2st',
              urlSeo: 'cesantias/como-retirarlas/vivienda/cuanto-ahorrar',
              titulo: 'Tips para invertir tus Cesantías en educación',
              categoriaCliente: [
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                },
                {
                  descripcion: 'Independiente',
                  contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                  tituloCorto: 'Vivienda'
                }
              ],
              contentful_id: '1kio5mE1HZTJgBKSl89vM4',
              urlSeo:
                'cesantias/como-usarlas/vivienda/cesante-independiente/que-errores-evitar',
              titulo:
                '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
              categoriaCliente: [
                {
                  descripcion: 'Independiente',
                  contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                },
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                  tituloCorto: 'Vivienda'
                }
              ],
              contentful_id: '2Ft5SGyqMyQUeG4v9myhFN',
              urlSeo: 'cesantias/como-usarlas/vivienda/independiente',
              titulo: '¿Cómo usar tus Cesantías para vivienda?',
              categoriaCliente: [
                {
                  descripcion: 'Independiente',
                  contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                  tituloCorto: 'Vivienda'
                }
              ],
              contentful_id: '6skla3FWYh4i9LophEbi8G',
              urlSeo: 'cesantias/como-usarlas/vivienda/como-ahorrar',
              titulo: '¿Cómo ahorrar tus Cesantías para vivienda?',
              categoriaCliente: [
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '6QSO0SouYnUllWRWOubCZR',
                  tituloCorto: 'Canales Retiro'
                }
              ],
              contentful_id: '34Yl1Lbb9kwskG0a3VgjI3',
              urlSeo: 'cesantias/como-usarlas/como-retirarlas/empleado-cesante',
              titulo: '¿Dónde puedo retirar mis Cesantías?',
              categoriaCliente: [
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                  tituloCorto: 'Vivienda'
                },
                {
                  contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                  tituloCorto: 'Educación'
                }
              ],
              contentful_id: '58AtRI5ZqBJGlcbCIPRjaM',
              urlSeo:
                'cesantias/como-usarlas/como-retirarlas/voluntario-independiente',
              titulo: '¿Cómo retirar tus Cesantías?',
              categoriaCliente: [
                {
                  descripcion: 'Independiente',
                  contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
                  tituloCorto: 'Extractos y Certificados'
                }
              ],
              contentful_id: 'UtvpGfgcpx7MxtxehglAd',
              urlSeo: 'cesantias/extractos/como-leerlos',
              titulo: 'Extractos de Cesantías, ¿qué son y cómo leerlos?',
              categoriaCliente: [
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                },
                {
                  descripcion: 'Independiente',
                  contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                }
              ]
            }
          }
        },
        {
          node: {
            lineaDeProducto: {
              nombre: 'Cesantías',
              contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
            },
            contenido: {
              Tema: [
                {
                  contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
                  tituloCorto: 'Extractos y Certificados'
                }
              ],
              contentful_id: '7dZqpgEfBvYgEPLkmCwYRR',
              urlSeo: 'cesantias/extractos/como-obtenerlos',
              titulo: '¿Cómo obtener tus extractos de Cesantías?',
              categoriaCliente: [
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                },
                {
                  descripcion: 'Independiente',
                  contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                }
              ]
            }
          }
        }
      ]
    },
    allContentfulCampana: {
      edges: [
        {
          node: {
            contenido: {
              Tema: [
                {
                  contentful_id: '7cTYlI6D258aUgSOhXfiTp',
                  tituloCorto: 'Novedades y Beneficios'
                }
              ],
              urlSeo: 'campana/afiliacion-pension',
              contentful_id: '2KGDTXOz5HAsxrnsqW6IEa'
            }
          }
        }
      ]
    }
  }
}

const biteGroups = [
  {
    biteOne: { id: '12wxz9mZz9Ok44M64PSSXV', type: 'producto' },
    biteTwo: { id: '24C0wWGZpjU6iGAcLnFMyD', type: 'servicio' },
    biteThere: { id: '6jocC19hxizlFsNxtnEeeb', type: 'educativo' }
  }
]
const closeAlternative = [
  {
    node: {
      contentful_id: '6tRmkahPbmybyKwcqPkg4n',
      createdAt: '2020-11-25T21:33:21.836Z',
      titulo: 'Alternativas Cerradas en Comercialización',
      urlSeo: 'alternativas-cerradas-comercializacion',
      tipoDeCliente: [
        { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' }
      ],
      lineaDeProducto: [
        { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
      ]
    }
  },
  {
    node: {
      contentful_id: '4iyIbURlwNfeTUwnjgHBdI',
      createdAt: '2020-11-25T21:32:09.286Z',
      titulo: 'Alternativas Cerradas Vigentes',
      urlSeo: 'alternativas-cerradas-vigentes',
      tipoDeCliente: [
        { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' }
      ],
      lineaDeProducto: [
        { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
      ]
    }
  }
]

test('prueba para alternativas cerradas', () => {
  const queryGroups = [
    {
      id: '6tRmkahPbmybyKwcqPkg4n',
      type: 'Alternativas',
      urlSeo: 'persona/inversion/alternativas-cerradas-comercializacion',
      titulo: 'Alternativas Cerradas en Comercialización',
      category: 'Inversión',
      customerType: 1
    },
    {
      id: '4iyIbURlwNfeTUwnjgHBdI',
      type: 'Alternativas',
      urlSeo: 'persona/inversion/alternativas-cerradas-vigentes',
      titulo: 'Alternativas Cerradas Vigentes',
      category: 'Inversión',
      customerType: 1
    }
  ]

  const dataTransfrom = grupsBiteInternalInversion(
    closeAlternative,
    'Alternativas',
    'Inversion'
  )
  expect(dataTransfrom).toEqual(queryGroups)
})

test('array data null 1', () => {
  grupsBiteInternal(dataUndefined)
})

test('array data null 3', () => {
  grupsBiteInternal(dataProduct)
})

test('array data null 4', () => {
  grupsBiteInternal(dataNovedad)
})

test('array data null 5', () => {
  grupsBiteInternal(dataCampana)
})

test('array data dataBeneficio', () => {
  grupsBiteInternal(dataBeneficio)
})

test('array data null 7', () => {
  filteRDataGroups(biteGroups)
})

test('array data null 7', () => {
  grupsBiteInternal(dataCompleta)
})
