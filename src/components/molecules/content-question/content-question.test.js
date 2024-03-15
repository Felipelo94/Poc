import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import ContentQuestion from './content-question'
import { useStaticQuery } from 'gatsby'
import darkMode from '../../../themes/dark'
import { ThemeProvider } from 'styled-components'
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

describe('Button', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      }
    })
  })
  it('renders correctly without props', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ThemeProvider theme={darkMode}>
          <ContentQuestion
            accessibility={{ fontSize: 3, lineSize: 2 }}
            lineGtm="Pensión"
            type="Persona"
            data={data}
          />
        </ThemeProvider>
      </Provider>
    )
  })

  it('renders correctly without props', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ThemeProvider theme={darkMode}>
          <ContentQuestion
            accessibility={{ fontSize: 3, lineSize: 2 }}
            lineGtm="Pensión"
            type="Persona"
            data={data}
          />
        </ThemeProvider>
      </Provider>
    )
    const itemAcordeon = wrapper.find('#item-acordion-container-1')
    itemAcordeon.simulate('click')
  })

  it('renders correctly without dataIncomplete', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ThemeProvider theme={darkMode}>
          <ContentQuestion
            accessibility={{ fontSize: 3, lineSize: 2 }}
            lineGtm="Pensión"
            type="Persona"
            data={dataIncomplete}
          />
        </ThemeProvider>
      </Provider>
    )
  })

  it('renders correctly without undefined', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ThemeProvider theme={darkMode}>
          <ContentQuestion
            accessibility={{ fontSize: 3, lineSize: 2 }}
            lineGtm="Pensión"
            type="Persona"
            data={{ ...dataIncomplete, imagenes: [] }}
          />
        </ThemeProvider>
      </Provider>
    )
  })
})

const data = {
  title: 'Preguntas frecuentes sobre Pensiones Obligatorias',
  imagenes: [
    {
      imagen:
        '//images.ctfassets.net/y3qdch79qxiw/31g6uRJlJX2sEEiaFkDLBD/7627ac3068c0d818faafb07af2b4163f/Preguntas_Frecuentes_sobre_P.O..jpg?w=800&q=50',
      nameImage:
        'Mujer de cabello castaño y largo, que lleva puesta una blusa blanca y un jean azul claro, está sentada en el sofá de su casa mientras navega en su computador',
      title: 'Preguntas Frecuentes sobre Pensión Obligatoria'
    }
  ],
  parrafos: [
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                '¿Me conviene más Colpensiones o un fondo   como Protección?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Uno de los mitos más comunes sobre las pensiones que hay que derrumbar es que Colpensiones es la mejor alternativa para todos. Eso no es cierto. Lo primero que hay que saber es que existen dos regímenes pensionales: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'el Régimen de Prima Media – RPM (Colpensiones) y el Régimen de Ahorro Individual con Solidaridad – RAIS, al que pertenecen los fondos como Protección.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Y para determinar cuál es el mejor para ti,    se tienen en cuenta aspectos particulares de tu situación familiar y laboral. Insistimos: cada historia de vida y experiencia laboral son diferentes y no se pueden mirar bajo la misma lupa.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Para tomar una decisión objetiva, existe un mecanismo llamado ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Doble Asesoría',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ', mediante el cual dos asesores (uno de Colpensiones y otro de Protección) analizan objetivamente tus condiciones de vida y te muestran cuál es el escenario posible si te pensionas en uno u otro régimen.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: ' Nuestro consejo:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' si eres joven, aprovecha los beneficios de tener tu ahorro en Protección (como los rendimientos generados con el dinero de tu cuenta individual). Cuando tu horizonte pensional esté más claro, decide cuál es el fondo en el que quieres pensionarte.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Algunas pistas:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' ¿Eres joven? ¿Tu sueldo es de dos salarios mínimos o menos? ¿Has tenido periodos de desempleo o trabajo informal? Si tu respuesta a alguna de estas preguntas es ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '"sí"',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ', a ti al igual que al 95% de los colombianos, ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'te conviene estar en un fondo del RAIS,',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' y  a que el ahorro en tu cuenta particular se invierte y genera rendimientos a lo largo de los años y, además, puedes pensionarte tres años antes.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Cómo así?',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Según la ley, para alcanzar una pensión en Colpensiones debes cotizar un total de 1.300 semanas mientras que en los fondos del RAIS está cifra se reduce a 1.150 semanas. Tres años menos.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Puedes profundizar sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' 4 verdades que nadie te dijo sobre las pensiones.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Puedo retirar el dinero de mi pensión cuando quiera?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                '\r\nEl objetivo principal del ahorro pensional que has construido durante la vida es garantizar que recibas un ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'ingreso mensual vitalicio durante tus años de retiro o, en el caso de la pensión por invalidez, si pierdes el 50% o más de tu capacidad laboral a raíz de una enfermedad o accidente.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                '\rTodo lo anterior para decirte que la pensión es un derecho irrenunciable. Eso quiere decir que ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'no puedes retirar el dinero de tu cuenta individual cuando quieras,',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' sino cuando cumplas las condiciones establecidas por la ley para pensionarte. Para alcanzar una pensión por vejez debes cumplir tres condiciones: edad, semanas y capital.   La edad de pensión en Colombia es 62 años para los hombres y 57 años para las mujeres. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'Por otro lado, en Colpensiones debes cotizar un total de 1.300 semanas, mientras que en los fondos del RAIS como Protección esta cifra es de 1.150 semanas.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: 'Así mismo, si cuentas con el capital suficiente, ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'en los fondos del RAIS puedes pensionarte anticipadamente,',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' sin necesidad de cumplir la edad y semanas requeridas.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Puedes profundizar sobre esta respuesta en: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: '¿Qué te exige la ley para pensionarte?\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                '¿Cuántas semanas debo cotizar para acceder a una pensión por invalidez?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Para tener acceso a una pensión por invalidez debes haber realizado aportes, mínimo, ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'por 50 semanas en los últimos 3 años previos a la enfermedad o accidente.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Así mismo, debes tener en cuenta que los procesos son diferentes si el accidente o enfermedad es de origen laboral o de origen común (es decir, no asociado a tu trabajo).',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Si el accidente es de origen común, la responsabilidad del pago de tu pensión por invalidez es del fondo de pensiones. Si es de origen laboral, el pago de esta prestación recae sobre tu Administradora de Riesgos Laborales – ARL. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Una reflexión: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'cuando pensamos en las pensiones, imaginamos un escenario lejano en nuestra vejez, pero nadie está exento de sufrir alguna enfermedad o accidente en cualquier momento de la vida. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'Es muy importante que realices tus aportes juiciosamente cada mes.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Puedes profundizar sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' Solicitud de pensión por invalidez',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Los fondos del RAIS se pueden quebrar?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Es un escenario muy improbable.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' Estos son los tres motivos principales:',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: ' \r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '1)',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Las Administradoras de Fondos de Pensiones – AFP del Régimen de Ahorro Individual con Solidaridad – RAIS como Protección están vigiladas estrictamente por la Superintendencia Financiera.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '2)',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Las inversiones realizadas en el esquema de multifondos con el capital de cada uno de los afiliados tienen el respaldo económico del Gobierno Nacional y cumplen con lineamientos cuyo objetivo primordial es proteger tu ahorro.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '3)',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'La más importante:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' el dinero de tu cuenta es 100% tuyo. Si, por algún motivo, Protección dejase de existir, tu capital estará completamente a salvo. La labor de la AFP es administrarlo e invertirlo de la mejor manera para que tu capital aumente con el tiempo. Piensa en los copropietarios de un edificio. Cada persona es dueña de su propio apartamento, pero es necesaria la presencia de un tercero que se haga cargo de la administración y mantenimiento de toda la copropiedad. Sin embargo, pase lo que pase, cada apartamento hace parte del patrimonio particular de cada persona.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '  \r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Profundiza sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' Tipos de Regímenes Pensionales\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                '¿Cuáles son las ventajas de estar afiliado en Protección?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Nuestro objetivo es acompañarte para que puedas cumplir tus sueños. Para tu tranquilidad, te contamos que Protección hace parte y cuenta con todo el respaldo del Grupo Sura, una compañía comprometida con el crecimiento de nuestro país y su gente, y con la sostenibilidad del planeta.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                '\rAdemás de las soluciones que ofrecemos a nuestros afiliados en materia de pensiones y cesantías, contamos con un portafolio de productos de ahorro e inversión a la medida de tus necesidades y tu momento de vida.  Así mismo, Protección cuenta con una amplia oferta de actividades y beneficios, orientados a mejorar el bienestar y calidad de vida de nuestros afiliados y pensionados. Por ejemplo, espacios gratuitos de educación financiera como ',
              nodeType: 'text'
            },
            {
              data: {
                uri: 'https://www.proteccion.com/universidad'
              },
              content: [
                {
                  data: {},
                  marks: [
                    {
                      type: 'bold'
                    }
                  ],
                  value: 'Universidad Protección',
                  nodeType: 'text'
                }
              ],
              nodeType: 'hyperlink'
            },
            {
              data: {},
              marks: [],
              value:
                ', en el que encontrarás consejos que te permitirán tomar el control de tus finanzas personales.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                '\rUn privilegio más para nuestros afiliados y pensionados es que cuentan con promociones y descuentos especiales en nuestras 400 marcas aliadas, y pueden mantenerse informados sobre temas de interés a través de nuestras publicaciones, boletines y podcast.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {
                uri:
                  'https://www.youtube.com/watch?v=bBu72UQWLcs&t=9s&ab_channel=ProteccionSA'
              },
              content: [
                {
                  data: {},
                  marks: [],
                  value: '¡Conoce todo lo que tenemos para ti en Protección!',
                  nodeType: 'text'
                }
              ],
              nodeType: 'hyperlink'
            },
            {
              data: {},
              marks: [],
              value: '\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Los jóvenes vamos a pensionarnos?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¡Por supuesto!',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Absolutamente todas las personas que coticen juiciosamente en el Sistema General de Pensiones Colombiano, sin importar la edad que tengan, están en condiciones de alcanzar una pensión por vejez. Eso sí, deben cumplir la edad y semanas que establece la ley o contar con el capital suficiente en su cuenta individual para financiar una pensión.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Recuerda:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' la edad de pensión en Colombia es 57 años para las mujeres y 62 años para los hombres. Así mismo, para poder pensionarte en Colpensiones, debes cotizar 1.300 semanas, mientras que en fondos como Protección necesitas 1.150 semanas. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¡Tres años menos!',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Ten en cuenta:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' entre más rápido comiences a cotizar, mucho mejor.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Profundiza sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' 4 verdades que nadie te dijo sobre las pensiones\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Soy joven, ¿cuál es la mejor alternativa para mí?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Mientras que en Colpensiones todos los aportes de los afiliados van a un fondo común que sirve para financiar la mesada de todos los pensionados actuales, en los fondos del RAIS como Protección los aportes que realizas mes a mes van a una cuenta individual a tu nombre. Eso quiere decir que eres el dueño de tu ahorro pensional.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Además de eso, otra razón clave por la cual los fondos como Protección son una mejor alternativa si eres joven, es que ese ahorro genera rendimientos. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Eso qué significa?',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' En Colpensiones tu ahorro pensional no genera rendimientos. En fondos como Protección tu capital crecerá con el tiempo gracias a la gestión realizada por nuestros expertos en inversiones en el ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'esquema de multifondos',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ', en el que se invierte tu dinero en tres fondos distintos ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                },
                {
                  type: 'bold'
                }
              ],
              value: '(Mayor Riesgo, Moderado y Conservador)',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ', de manera acorde a tu momento de vida.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Según cifras de la Asociación Colombiana de Fondos de Pensiones y de Cesantía – ASOFONDOS, cuando llegue el momento de pensionarte, en promedio ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'el 39% del capital que financiará esa pensión representa los aportes que has realizado durante tu vida laboral, mientras que el 61% está constituido por los rendimientos que se han generado en el tiempo.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Profundiza sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' Diferencias entre Protección y Colpensiones\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Puedo pensionarme antes de la edad?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Para alcanzar tu pensión por vejez en ambos regímenes pensionales, debes cumplir con las condiciones de edad (62 años los hombres y 57 años las mujeres) y semanas exigidas por la ley (1.300 en Colpensiones y 1.150 en los fondos del RAIS). Sin embargo, ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'en los fondos pertenecientes al Régimen de Ahorro Individual con Solidaridad – RAIS, puedes pensionarte anticipadamente sí tienes capital suficiente en tu cuenta individual.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Eso qué significa?',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' En fondos como Protección, tus aportes a pensiones obligatorias se dirigen a una cuenta individual y generan beneficios en el largo plazo. Si dentro de tu plan de vida contemplas un retiro anticipado puedes hacerlo, si con el capital de tu cuenta individual es posible garantizar, mínimo, una pensión equivalente al 110% de un salario mínimo. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Ten en cuenta: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'uno de los caminos más directos para aumentar tu ahorro pensional y alcanzar el capital necesario para una pensión anticipada son los ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'aportes voluntarios a pensiones obligatorias.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Puedes profundizar sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' Pensión anticipada \r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Qué pasa si me traslado al Régimen de Prima Media?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Para empezar, ten en cuenta que, según la ley, puedes hacer traslados entre fondos de diferentes regímenes pensionales cada 5 años. Así que piensa bien antes de que tomar una decisión, ya que debes permanecer en el mismo régimen, mínimo, durante esos cinco años.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                '\rSi decides trasladarte a Colpensiones, todas las semanas que has cotizado mientras estuviste en el fondo del RAIS serán válidas. Sin embargo, se perderán los rendimientos generados durante ese tiempo. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Por qué?',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Mientras que en los fondos como Protección el capital correspondiente a tus aportes y los rendimientos generados están en una cuenta individual a tu nombre, en Colpensiones ese capital va en su totalidad a un fondo común con el que se financian las mesadas de los pensionados actuales.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Nuestro consejo: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'espera a que se acerque tu edad de pensión y que tu panorama hacia el futuro esté mucho más claro. Si están joven te conviene quedarte en un fondo que te genere rentabilidad. Luego, podrás conocer de manera objetiva cuáles serían los posibles escenarios si te pensionas en uno u otro régimen a través del mecanismo de la ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Doble Asesoría.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Profundiza sobre esta respuesta en: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: 'Tipos de Regímenes Pensionales\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Las mesadas de Colpensiones son más altas?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Afirmar que las mesadas en Colpensiones son más altas, es una generalización que no es aplicable a la realidad de la mayoría de los colombianos. Para llegar a una respuesta clara, lo primero que debemos hacer es comprender cómo se financian las pensiones en cada uno de los regímenes pensionales.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'En el Régimen de Prima Media (Colpensiones), ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'los aportes que realizas mes a mes se dirigen a una bolsa común que financia todas las mesadas de los pensionados actuales. Una vez cotices las semanas necesarias, el monto final de tu pensión se define promediando tu salario de los últimos 10 años, y actualizando ese valor con base al IPC (Índice de Precios al Consumidor). Esta es una opción viable para aquellas personas que tienen salarios altos y estabilidad laboral, que representan aproximadamente el 5% de la fuerza laboral del país.\r',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Por otro lado, cuando llegue la pensión la mesada para aquellas personas que ganan entre 1 y 2 salarios mínimos legales vigentes (la gran mayoría) será muy similar. Sin embargo, mientras que en Colpensiones debes cotizar 1.300 semanas, en fondos como Protección podrás pensionarse tres años antes (debes cotizar 1.150 semanas). ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'En cualquier caso, los fondos del RAIS son una alternativa más conveniente para el 95% de la gente trabajadora del país.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Nuestra recomendación:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' hasta que te falten 10 años para pensionarte, aprovecha los beneficios que tiene el RAIS. El principal es que el dinero de tu cuenta individual genera rendimientos.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Profundiza sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' 4 verdades que nadie te dijo sobre las pensiones\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    }
  ],
  cta: {
    titulo:
      'ahora que conoces las preguntas más frecuentes que realiza la gente sobre Pensiones Obligatorias, puedes fortalecer tus conocimientos a través de Universidad Protección, una propuesta de formación creada para impulsar tu desarrollo personal y profesional',
    textoButton: 'Ir a Universidad Protección',
    url: 'https://www.proteccion.com/universidad'
  },
  video: null,
  podcast: null
}

const dataIncomplete = {
  title: 'Preguntas frecuentes sobre Pensiones Obligatorias',
  parrafos: [
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                '¿Me conviene más Colpensiones o un fondo   como Protección?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Uno de los mitos más comunes sobre las pensiones que hay que derrumbar es que Colpensiones es la mejor alternativa para todos. Eso no es cierto. Lo primero que hay que saber es que existen dos regímenes pensionales: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'el Régimen de Prima Media – RPM (Colpensiones) y el Régimen de Ahorro Individual con Solidaridad – RAIS, al que pertenecen los fondos como Protección.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Y para determinar cuál es el mejor para ti,    se tienen en cuenta aspectos particulares de tu situación familiar y laboral. Insistimos: cada historia de vida y experiencia laboral son diferentes y no se pueden mirar bajo la misma lupa.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Para tomar una decisión objetiva, existe un mecanismo llamado ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Doble Asesoría',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ', mediante el cual dos asesores (uno de Colpensiones y otro de Protección) analizan objetivamente tus condiciones de vida y te muestran cuál es el escenario posible si te pensionas en uno u otro régimen.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: ' Nuestro consejo:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' si eres joven, aprovecha los beneficios de tener tu ahorro en Protección (como los rendimientos generados con el dinero de tu cuenta individual). Cuando tu horizonte pensional esté más claro, decide cuál es el fondo en el que quieres pensionarte.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Algunas pistas:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' ¿Eres joven? ¿Tu sueldo es de dos salarios mínimos o menos? ¿Has tenido periodos de desempleo o trabajo informal? Si tu respuesta a alguna de estas preguntas es ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '"sí"',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ', a ti al igual que al 95% de los colombianos, ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'te conviene estar en un fondo del RAIS,',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' y  a que el ahorro en tu cuenta particular se invierte y genera rendimientos a lo largo de los años y, además, puedes pensionarte tres años antes.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Cómo así?',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Según la ley, para alcanzar una pensión en Colpensiones debes cotizar un total de 1.300 semanas mientras que en los fondos del RAIS está cifra se reduce a 1.150 semanas. Tres años menos.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Puedes profundizar sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' 4 verdades que nadie te dijo sobre las pensiones.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Puedo retirar el dinero de mi pensión cuando quiera?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                '\r\nEl objetivo principal del ahorro pensional que has construido durante la vida es garantizar que recibas un ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'ingreso mensual vitalicio durante tus años de retiro o, en el caso de la pensión por invalidez, si pierdes el 50% o más de tu capacidad laboral a raíz de una enfermedad o accidente.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                '\rTodo lo anterior para decirte que la pensión es un derecho irrenunciable. Eso quiere decir que ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'no puedes retirar el dinero de tu cuenta individual cuando quieras,',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' sino cuando cumplas las condiciones establecidas por la ley para pensionarte. Para alcanzar una pensión por vejez debes cumplir tres condiciones: edad, semanas y capital.   La edad de pensión en Colombia es 62 años para los hombres y 57 años para las mujeres. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'Por otro lado, en Colpensiones debes cotizar un total de 1.300 semanas, mientras que en los fondos del RAIS como Protección esta cifra es de 1.150 semanas.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: 'Así mismo, si cuentas con el capital suficiente, ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'en los fondos del RAIS puedes pensionarte anticipadamente,',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' sin necesidad de cumplir la edad y semanas requeridas.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Puedes profundizar sobre esta respuesta en: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: '¿Qué te exige la ley para pensionarte?\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                '¿Cuántas semanas debo cotizar para acceder a una pensión por invalidez?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Para tener acceso a una pensión por invalidez debes haber realizado aportes, mínimo, ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'por 50 semanas en los últimos 3 años previos a la enfermedad o accidente.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Así mismo, debes tener en cuenta que los procesos son diferentes si el accidente o enfermedad es de origen laboral o de origen común (es decir, no asociado a tu trabajo).',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Si el accidente es de origen común, la responsabilidad del pago de tu pensión por invalidez es del fondo de pensiones. Si es de origen laboral, el pago de esta prestación recae sobre tu Administradora de Riesgos Laborales – ARL. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Una reflexión: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'cuando pensamos en las pensiones, imaginamos un escenario lejano en nuestra vejez, pero nadie está exento de sufrir alguna enfermedad o accidente en cualquier momento de la vida. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'Es muy importante que realices tus aportes juiciosamente cada mes.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Puedes profundizar sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' Solicitud de pensión por invalidez',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Los fondos del RAIS se pueden quebrar?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Es un escenario muy improbable.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' Estos son los tres motivos principales:',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: ' \r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '1)',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Las Administradoras de Fondos de Pensiones – AFP del Régimen de Ahorro Individual con Solidaridad – RAIS como Protección están vigiladas estrictamente por la Superintendencia Financiera.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '2)',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Las inversiones realizadas en el esquema de multifondos con el capital de cada uno de los afiliados tienen el respaldo económico del Gobierno Nacional y cumplen con lineamientos cuyo objetivo primordial es proteger tu ahorro.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '3)',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'La más importante:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' el dinero de tu cuenta es 100% tuyo. Si, por algún motivo, Protección dejase de existir, tu capital estará completamente a salvo. La labor de la AFP es administrarlo e invertirlo de la mejor manera para que tu capital aumente con el tiempo. Piensa en los copropietarios de un edificio. Cada persona es dueña de su propio apartamento, pero es necesaria la presencia de un tercero que se haga cargo de la administración y mantenimiento de toda la copropiedad. Sin embargo, pase lo que pase, cada apartamento hace parte del patrimonio particular de cada persona.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '  \r\n',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Profundiza sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' Tipos de Regímenes Pensionales\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                '¿Cuáles son las ventajas de estar afiliado en Protección?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Nuestro objetivo es acompañarte para que puedas cumplir tus sueños. Para tu tranquilidad, te contamos que Protección hace parte y cuenta con todo el respaldo del Grupo Sura, una compañía comprometida con el crecimiento de nuestro país y su gente, y con la sostenibilidad del planeta.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                '\rAdemás de las soluciones que ofrecemos a nuestros afiliados en materia de pensiones y cesantías, contamos con un portafolio de productos de ahorro e inversión a la medida de tus necesidades y tu momento de vida.  Así mismo, Protección cuenta con una amplia oferta de actividades y beneficios, orientados a mejorar el bienestar y calidad de vida de nuestros afiliados y pensionados. Por ejemplo, espacios gratuitos de educación financiera como ',
              nodeType: 'text'
            },
            {
              data: {
                uri: 'https://www.proteccion.com/universidad'
              },
              content: [
                {
                  data: {},
                  marks: [
                    {
                      type: 'bold'
                    }
                  ],
                  value: 'Universidad Protección',
                  nodeType: 'text'
                }
              ],
              nodeType: 'hyperlink'
            },
            {
              data: {},
              marks: [],
              value:
                ', en el que encontrarás consejos que te permitirán tomar el control de tus finanzas personales.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                '\rUn privilegio más para nuestros afiliados y pensionados es que cuentan con promociones y descuentos especiales en nuestras 400 marcas aliadas, y pueden mantenerse informados sobre temas de interés a través de nuestras publicaciones, boletines y podcast.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {
                uri:
                  'https://www.youtube.com/watch?v=bBu72UQWLcs&t=9s&ab_channel=ProteccionSA'
              },
              content: [
                {
                  data: {},
                  marks: [],
                  value: '¡Conoce todo lo que tenemos para ti en Protección!',
                  nodeType: 'text'
                }
              ],
              nodeType: 'hyperlink'
            },
            {
              data: {},
              marks: [],
              value: '\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Los jóvenes vamos a pensionarnos?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¡Por supuesto!',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Absolutamente todas las personas que coticen juiciosamente en el Sistema General de Pensiones Colombiano, sin importar la edad que tengan, están en condiciones de alcanzar una pensión por vejez. Eso sí, deben cumplir la edad y semanas que establece la ley o contar con el capital suficiente en su cuenta individual para financiar una pensión.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Recuerda:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' la edad de pensión en Colombia es 57 años para las mujeres y 62 años para los hombres. Así mismo, para poder pensionarte en Colpensiones, debes cotizar 1.300 semanas, mientras que en fondos como Protección necesitas 1.150 semanas. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¡Tres años menos!',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Ten en cuenta:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' entre más rápido comiences a cotizar, mucho mejor.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Profundiza sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' 4 verdades que nadie te dijo sobre las pensiones\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Soy joven, ¿cuál es la mejor alternativa para mí?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Mientras que en Colpensiones todos los aportes de los afiliados van a un fondo común que sirve para financiar la mesada de todos los pensionados actuales, en los fondos del RAIS como Protección los aportes que realizas mes a mes van a una cuenta individual a tu nombre. Eso quiere decir que eres el dueño de tu ahorro pensional.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Además de eso, otra razón clave por la cual los fondos como Protección son una mejor alternativa si eres joven, es que ese ahorro genera rendimientos. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Eso qué significa?',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' En Colpensiones tu ahorro pensional no genera rendimientos. En fondos como Protección tu capital crecerá con el tiempo gracias a la gestión realizada por nuestros expertos en inversiones en el ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'esquema de multifondos',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ', en el que se invierte tu dinero en tres fondos distintos ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                },
                {
                  type: 'bold'
                }
              ],
              value: '(Mayor Riesgo, Moderado y Conservador)',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ', de manera acorde a tu momento de vida.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Según cifras de la Asociación Colombiana de Fondos de Pensiones y de Cesantía – ASOFONDOS, cuando llegue el momento de pensionarte, en promedio ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'el 39% del capital que financiará esa pensión representa los aportes que has realizado durante tu vida laboral, mientras que el 61% está constituido por los rendimientos que se han generado en el tiempo.',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Profundiza sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' Diferencias entre Protección y Colpensiones\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Puedo pensionarme antes de la edad?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Para alcanzar tu pensión por vejez en ambos regímenes pensionales, debes cumplir con las condiciones de edad (62 años los hombres y 57 años las mujeres) y semanas exigidas por la ley (1.300 en Colpensiones y 1.150 en los fondos del RAIS). Sin embargo, ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'en los fondos pertenecientes al Régimen de Ahorro Individual con Solidaridad – RAIS, puedes pensionarte anticipadamente sí tienes capital suficiente en tu cuenta individual.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Eso qué significa?',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' En fondos como Protección, tus aportes a pensiones obligatorias se dirigen a una cuenta individual y generan beneficios en el largo plazo. Si dentro de tu plan de vida contemplas un retiro anticipado puedes hacerlo, si con el capital de tu cuenta individual es posible garantizar, mínimo, una pensión equivalente al 110% de un salario mínimo. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Ten en cuenta: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'uno de los caminos más directos para aumentar tu ahorro pensional y alcanzar el capital necesario para una pensión anticipada son los ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'aportes voluntarios a pensiones obligatorias.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Puedes profundizar sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' Pensión anticipada \r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Qué pasa si me traslado al Régimen de Prima Media?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Para empezar, ten en cuenta que, según la ley, puedes hacer traslados entre fondos de diferentes regímenes pensionales cada 5 años. Así que piensa bien antes de que tomar una decisión, ya que debes permanecer en el mismo régimen, mínimo, durante esos cinco años.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                '\rSi decides trasladarte a Colpensiones, todas las semanas que has cotizado mientras estuviste en el fondo del RAIS serán válidas. Sin embargo, se perderán los rendimientos generados durante ese tiempo. ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Por qué?',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' Mientras que en los fondos como Protección el capital correspondiente a tus aportes y los rendimientos generados están en una cuenta individual a tu nombre, en Colpensiones ese capital va en su totalidad a un fondo común con el que se financian las mesadas de los pensionados actuales.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Nuestro consejo: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'espera a que se acerque tu edad de pensión y que tu panorama hacia el futuro esté mucho más claro. Si están joven te conviene quedarte en un fondo que te genere rentabilidad. Luego, podrás conocer de manera objetiva cuáles serían los posibles escenarios si te pensionas en uno u otro régimen a través del mecanismo de la ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Doble Asesoría.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Profundiza sobre esta respuesta en: ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: 'Tipos de Regímenes Pensionales\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
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
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: '¿Las mesadas de Colpensiones son más altas?',
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Afirmar que las mesadas en Colpensiones son más altas, es una generalización que no es aplicable a la realidad de la mayoría de los colombianos. Para llegar a una respuesta clara, lo primero que debemos hacer es comprender cómo se financian las pensiones en cada uno de los regímenes pensionales.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'En el Régimen de Prima Media (Colpensiones), ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                'los aportes que realizas mes a mes se dirigen a una bolsa común que financia todas las mesadas de los pensionados actuales. Una vez cotices las semanas necesarias, el monto final de tu pensión se define promediando tu salario de los últimos 10 años, y actualizando ese valor con base al IPC (Índice de Precios al Consumidor). Esta es una opción viable para aquellas personas que tienen salarios altos y estabilidad laboral, que representan aproximadamente el 5% de la fuerza laboral del país.\r',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Por otro lado, cuando llegue la pensión la mesada para aquellas personas que ganan entre 1 y 2 salarios mínimos legales vigentes (la gran mayoría) será muy similar. Sin embargo, mientras que en Colpensiones debes cotizar 1.300 semanas, en fondos como Protección podrás pensionarse tres años antes (debes cotizar 1.150 semanas). ',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value:
                'En cualquier caso, los fondos del RAIS son una alternativa más conveniente para el 95% de la gente trabajadora del país.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: 'Nuestra recomendación:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value:
                ' hasta que te falten 10 años para pensionarte, aprovecha los beneficios que tiene el RAIS. El principal es que el dinero de tu cuenta individual genera rendimientos.',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '\r',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: 'Profundiza sobre esta respuesta en:',
              nodeType: 'text'
            },
            {
              data: {},
              marks: [],
              value: ' 4 verdades que nadie te dijo sobre las pensiones\r\n',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    }
  ],
  video: null,
  podcast: null
}
