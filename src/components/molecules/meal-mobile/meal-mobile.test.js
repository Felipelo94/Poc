import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import MealMobile from './meal-mobile'
import { useStaticQuery } from 'gatsby'
import { initialState as pageContextInitialState } from './../../../reducers/page-context/page-context'

const initialState = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    },
    pageContext: {
      ...pageContextInitialState
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

const data = {
  imagenes: [],
  parrafos: [
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Pago de matrícula',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-4'
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Certificado vigente de la liquidación de la matrícula de la institución en original o copia sin cancelar.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Certificado de la liquidación debe tener como mínimo la siguiente información:  nombre de quien se matricula (afiliado o beneficiario), valor de la matrícula, forma de pago, nombre y NIT de la entidad de educación superior.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Copia de la licencia de funcionamiento de la institución o acto de reconocimiento y del programa a estudiar.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Si el retiro es para alguno de tus beneficiarios será necesario que presentes los documentos que demuestren su relación tales como registro civil, partidas eclesiásticas o declaraciones extrajuicio. Para los hijos del cónyuge que no sean hijos reconocidos legalmente por el afiliado no se podrá hacer retiros para educación superior. ',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            }
          ],
          nodeType: 'unordered-list'
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    'Ten en cuenta que el pago siempre se realiza directamente a la institución educativa.',
                  nodeType: 'text'
                }
              ],
              nodeType: 'paragraph'
            }
          ],
          nodeType: 'blockquote'
        }
      ],
      nodeType: 'document'
    },
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Créditos educativos',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-4'
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Certificado vigente de la liquidación de la matrícula de la institución en original o copia,  sin cancelar.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Certificado de la liquidación debe tener como mínimo la siguiente información:  nombre de quien se matricula (afiliado o beneficiario), valor de la matrícula, forma de pago, nombre y NIT de la entidad de educación superior.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Copia de la licencia de funcionamiento de la institución o acto de reconocimiento.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Si el retiro es para alguno de tus beneficiarios será necesario que presentes los documentos que demuestren su relación. ',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Certificado del crédito otorgado y estado de cuenta. Debe contener el nombre e identificación del deudor, saldo de la deuda o valor a pagar). Recuerda que se deberán consignar los recursos directamente a la entidad prestadora del crédito.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            }
          ],
          nodeType: 'unordered-list'
        }
      ],
      nodeType: 'document'
    },
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Seguros educativos',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-4'
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Certificado de existencia y representación de la entidad con la que tienes tu ahorro programado. ',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Póliza de seguro suscrito con la entidad.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Copia de la factura o cuenta de cobro con destino a la entidad con la que tienes el ahorro.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Documentos que demuestren la relación con los beneficiarios (hijo, cónyuge y compañero permanente).',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            }
          ],
          nodeType: 'unordered-list'
        }
      ],
      nodeType: 'document'
    },
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value:
                'Pago de matrículas de programas ofrecidos por la UNIR en Colombia',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-4'
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Nombre y NIT de la institución.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Copia de la resolución de funcionamiento de la universidad o institución emitido por el Consejo de Universidades previa evaluación de la Agencia Nacional de Evaluación de la Calidad y Acreditación (ANECA) o de las agencias evaluadoras dependientes de las Comunidades Autónomas habilitadas por la normativa española.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Certificación de admisión a la institución, el área específica de estudio, el tiempo de duración, el valor de la matrícula y la forma de pago.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Registros civiles o partidas eclesiásticas que demuestren la relación que tienes con tus beneficiarios.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Valor de la matrícula.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            }
          ],
          nodeType: 'unordered-list'
        }
      ],
      nodeType: 'document'
    },
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Préstamos educativos',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-4'
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Factura original y copia del Icetex o institución prestamista en el que conste el valor a pagar.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Documento que acredite la calidad de afiliado o beneficiario (hijo, cónyuge o compañero permanente).',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Girar el cheque a nombre del Icetex, con los sellos restrictivos.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            }
          ],
          nodeType: 'unordered-list'
        }
      ],
      nodeType: 'document'
    },
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Según los canales ',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-3'
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'A través del empleador, puedes solicitar el retiro sin importar el monto. El pago será entregado según las indicaciones entregadas por el empleador.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'También puedes optar por las Oficinas Protección. Allí podrás solicitar el retiro por cualquier monto y se pagará en cheque, transferencia o por ventanilla en las sucursales de los bancos Davivienda y Bancolombia.  ',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'list-item'
            }
          ],
          nodeType: 'unordered-list'
        },
        {
          data: {},
          content: [{ data: {}, marks: [], value: '\n\n', nodeType: 'text' }],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [{ data: {}, marks: [], value: '', nodeType: 'text' }],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    }
  ],
  cta: {
    titulo: '¿Estás listo para retirar tus Cesantías?',
    textoButton: 'Ir a la zona transaccional',
    url: null
  }
}

const alertText = {
  textoCierre:
    'Ten en cuenta que el pago siempre se realiza directamente a la institución educativa.'
}

describe('Button', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      }
    })
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <MealMobile
            accessibility={{ fontSize: 3, lineSize: 2 }}
            data={data}
            alertText={alertText}
            changeTab={1}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Button', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      }
    })
  })
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <MealMobile
            accessibility={{ fontSize: 3, lineSize: 2 }}
            data={data}
            alertText={''}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  // it("Keydown SubCategories", () => {
  //   const wrapper = mount(
  //     <Provider store={initialState}>
  //       <MealMobile
  //         accessibility={{ fontSize: 3, lineSize: 2 }}
  //         data={data}
  //         alertText={""}
  //       />
  //     </Provider>
  //   )
  //   wrapper
  //     .find("#container-meal-title-value-1")
  //     .first()
  //     .simulate("click")
  //   wrapper
  //     .find("#container-meal-title-value-1")
  //     .first()
  //     .simulate("keydown")
  // })
})
