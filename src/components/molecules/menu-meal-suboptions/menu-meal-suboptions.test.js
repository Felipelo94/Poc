import { shallow } from 'enzyme'
import React from 'react'
import MenuMealSuboptions from './menu-meal-suboptions'

describe('test for MenuMealSuboptions component', () => {
  test('should render component without props', () => {
    const wrapper = shallow(
      <MenuMealSuboptions idContainer="menu-meal-suboptions-test" />
    )
    expect(wrapper.find('.container-meal-suboptions')).toHaveLength(1)
  })

  test('should render component without props', () => {
    const dataMenuSuboptions = [
      {
        option: [
          [
            {
              index: 0,
              heading: {
                nodeType: 'heading-2',
                content: [
                  {
                    nodeType: 'text',
                    value: '¿Cómo retirar tus Cesantías para vivienda?\r\n\r',
                    marks: [],
                    data: {}
                  }
                ],
                data: {}
              }
            }
          ]
        ],
        subOptions: [
          [],
          [
            {
              index: 1,
              heading: {
                nodeType: 'heading-3',
                content: [
                  {
                    nodeType: 'text',
                    value: 'Compra o remodelación de vivienda:',
                    marks: [
                      {
                        type: 'bold'
                      }
                    ],
                    data: {}
                  }
                ],
                data: {}
              }
            }
          ],
          []
        ]
      },
      {
        option: [
          [
            {
              index: 1,
              heading: {
                nodeType: 'heading-2',
                content: [
                  {
                    nodeType: 'text',
                    value: '¿Cómo retirar tus Cesantías para educación?\r\r\n',
                    marks: [],
                    data: {}
                  }
                ],
                data: {}
              }
            }
          ]
        ],
        subOptions: [
          [],
          [
            {
              index: 1,
              heading: {
                nodeType: 'heading-3',
                content: [
                  {
                    nodeType: 'text',
                    value: 'Pago de matrícula: ',
                    marks: [
                      {
                        type: 'bold'
                      }
                    ],
                    data: {}
                  }
                ],
                data: {}
              }
            }
          ],
          [],
          [
            {
              index: 3,
              heading: {
                nodeType: 'heading-3',
                content: [
                  {
                    nodeType: 'text',
                    value: 'Créditos educativos (ICETEX u otros): \r',
                    marks: [
                      {
                        type: 'bold'
                      }
                    ],
                    data: {}
                  }
                ],
                data: {}
              }
            }
          ],
          [
            {
              index: 4,
              heading: {
                nodeType: 'heading-3',
                content: [
                  {
                    nodeType: 'text',
                    value: 'Seguros educativos:',
                    marks: [
                      {
                        type: 'bold'
                      }
                    ],
                    data: {}
                  }
                ],
                data: {}
              }
            }
          ]
        ]
      },
      {
        option: [
          [
            {
              index: 2,
              heading: {
                nodeType: 'heading-2',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      '¿Cómo retirar tus Cesantías por terminación de contrato?',
                    marks: [],
                    data: {}
                  }
                ],
                data: {}
              }
            }
          ]
        ],
        subOptions: [[]]
      },
      {
        option: [
          [
            {
              index: 3,
              heading: {
                nodeType: 'heading-2',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      '¿Cómo retirar tus Cesantías por disminución de ingresos?\r\r\n',
                    marks: [],
                    data: {}
                  }
                ],
                data: {}
              }
            }
          ]
        ],
        subOptions: [
          [],
          [
            {
              index: 1,
              heading: {
                nodeType: 'heading-3',
                content: [
                  {
                    nodeType: 'text',
                    value: 'A través del empleador: \r',
                    marks: [
                      {
                        type: 'bold'
                      }
                    ],
                    data: {}
                  }
                ],
                data: {}
              }
            }
          ],
          [
            {
              index: 2,
              heading: {
                nodeType: 'heading-3',
                content: [
                  {
                    nodeType: 'text',
                    value: 'A través de nuestros canales digitales:\r',
                    marks: [
                      {
                        type: 'bold'
                      }
                    ],
                    data: {}
                  }
                ],
                data: {}
              }
            }
          ]
        ]
      },
      {
        option: [
          [
            {
              index: 4,
              heading: {
                nodeType: 'heading-2',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      '¿Cómo retirar tus Cesantías por disminución de ingresos?\r\r\n',
                    marks: [],
                    data: {}
                  }
                ],
                data: {}
              }
            }
          ]
        ],
        subOptions: [[], [], []]
      }
    ]
    const wrapper = shallow(
      <MenuMealSuboptions
        idContainer="menu-meal-suboptions-test"
        dataMenuSuboptions={dataMenuSuboptions}
      />
    )
    expect(wrapper.find('.container-meal-suboptions')).toHaveLength(1)
  })
})
