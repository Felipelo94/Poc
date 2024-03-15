import React from 'react'
import renderer from 'react-test-renderer'
import DtaAcessos from '../const/dictionary/accesos-data.json'
import { useStaticQuery } from 'gatsby'

import LayoutInternalContentPage from './internal-content-page'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'

const dataUserCompleto = {
  allContentfulContenido: {
    edges: [
      {
        node: {
          titulo:
            '¡Vecindario! Un nuevo beneficio por tener tus Cesantías en Protección',
          tituloCorto: '¡Conoce Vecindario!',
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            '¡Tener tus Cesantías en Protección son el primer paso para acercarte a tu sueño de vivienda!',
          linkCallToAction: 'https://www.vecindario.com',
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: 'Ir a Vecinadrio.com',
          keywordsSeo: {
            keywordsSeo:
              'portafolio, que es un portafolio, portafolio de inversion, que es un portafolio de inversion, inversiones portafolio'
          },
          metadescripcionSeo: {
            metadescripcionSeo:
              'El portafolio ideal para ti depende de lo que quieres hacer con tu ahorro de cesantías. Uno te da más rentabilidad pero tiene mayor riesgo. Conócelos aquí.'
          },
          descripcioncalltoaction:
            '¡Comienza a hacer realidad tu sueño de tener vivienda propia!',
          tiempoDeLectura: '4',
          contentful_id: '6e6MdfwAti6gl9cEsGh6BS',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/7JsVuvMNY1pTwQRxnd2qjj/973866b8cf3328f5bbde8037214a664d/unnamed__4_.jpg?w=800&q=50'
              }
            }
          ],
          descripcionlarga: {
            descripcionlarga:
              'En Protección te acompañamos a dar un paso más hacia tu meta de tener casa propia, y para hacerlo hoy realidad, tenemos para ti un beneficio especial:'
          },
          cuerpocontenido: null
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías para educación?',
          tituloCorto: '¿Cómo retirar Cesantías?',
          textoCierre: {
            textoCierre:
              'Ten en cuenta que el pago siempre se realiza directamente a la institución educativa.'
          },
          subtitulo: null,
          descripcioncorta:
            'Como empleado puedes apoyar tus proyectos educativos junto a Protección.',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: 'Ir a la zona transaccional',
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          keywordsSeo: {
            keywordsSeo:
              'portafolio, que es un portafolio, portafolio de inversion, que es un portafolio de inversion, inversiones portafolio'
          },
          metadescripcionSeo: {
            metadescripcionSeo:
              'El portafolio ideal para ti depende de lo que quieres hacer con tu ahorro de cesantías. Uno te da más rentabilidad pero tiene mayor riesgo. Conócelos aquí.'
          },
          descripcioncalltoaction: '¿Estás listo para retirar tus Cesantías?',
          tiempoDeLectura: '5',
          contentful_id: '3PM6cWviUO1D5QWrQhg8rA',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Como afiliado a Cesantías como cesante o independiente, puedes hacer el retiro de tus Cesantías directamente en www.proteccion.com.'
          },
          cuerpocontenido: {
            json: {
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
                              value:
                                'Póliza de seguro suscrito con la entidad.',
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
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '\n\n',
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
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Por qué estar afiliado a Protección?',
          tituloCorto: 'Elige estar en Protección',
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'En Protección, queremos ser tu aliado en la construcción tus sueños. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: null,
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          keywordsSeo: {
            keywordsSeo:
              'portafolio, que es un portafolio, portafolio de inversion, que es un portafolio de inversion, inversiones portafolio'
          },
          metadescripcionSeo: {
            metadescripcionSeo:
              'El portafolio ideal para ti depende de lo que quieres hacer con tu ahorro de cesantías. Uno te da más rentabilidad pero tiene mayor riesgo. Conócelos aquí.'
          },
          descripcioncalltoaction: '¡Súmate y haz parte de Protección!',
          tiempoDeLectura: '3',
          contentful_id: '39AL84qrh4XtyavpVHuyCQ',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Conoce algunas de las razones por las que debes estar aquí.'
          },
          cuerpocontenido: {
            json: {
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Tenemos para ti soluciones a la medida que, junto a nuestros productos, te ayudarán a hacer realidad tus sueños.',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'En cada uno de los ',
                              nodeType: 'text'
                            },
                            {
                              data: {
                                uri: 'https://proteccion.com/canales'
                              },
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value: 'canales de servicio',
                                  nodeType: 'text'
                                }
                              ],
                              nodeType: 'hyperlink'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                ' te brindamos soluciones prácticas para tus trámites y consultas en todos nuestros productos.',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Cuentas con ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Pronto',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                ', nuestro asesor virtual que está disponible 24 horas al día, 7 días a la semana, para ayudarte a resolver todas tus dudas relacionadas con los productos de Protección.',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Te ofrecemos espacios de educación financiera gratuitos y virtuales, a través de la ',
                              nodeType: 'text'
                            },
                            {
                              data: {
                                uri: 'https://www.proteccion.com/universidad'
                              },
                              content: [
                                {
                                  data: {},
                                  marks: [],
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
                                '. Un lugar donde podrás impulsar tu desarrollo personal y profesional a través de contenidos y cursos prácticos en temas pensionales, tributarios y de desarrollo de competencias.',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: '¡Contamos con ',
                              nodeType: 'text'
                            },
                            {
                              data: {
                                uri: 'https://www.proteccion.com/privilegios'
                              },
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value: 'Privilegios Protección',
                                  nodeType: 'text'
                                }
                              ],
                              nodeType: 'hyperlink'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                '! Una amplia red de aliados que ofrece grandes beneficios para tu bienestar y disfrute.',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Beneficios exclusivos con Vecindario para la compra de vivienda; y con Seguros Éxito y Sura en la compra del SOAT para carro o moto. ',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Creemos en el Talento de los jóvenes y por eso decimos ',
                              nodeType: 'text'
                            },
                            {
                              data: {
                                uri: 'https://proteccion.com/talentosihay'
                              },
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value: '¡Talento Sí Hay!',
                                  nodeType: 'text'
                                }
                              ],
                              nodeType: 'hyperlink'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                ' Esta es una plataforma que contiene historias inspiradoras, de personas talentosas, que han alcanzado logros extraordinarios. Allí, podrás encontrar contenidos y herramientas que te permitirán construir tu futuro. ',
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
                      marks: [],
                      value: '',
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
                      value: '\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Qué errores evitar a la hora de usar tus Cesantías para educación?',
          tituloCorto: '¡Mira estos consejos!',
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
          linkCallToAction: 'https://proteccion.com/cesantias#como-retirarlas',
          textoCallToActionBite: 'Muéstrame cuáles',
          textoCallToAction: '¡Comienza ahora!',
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          keywordsSeo: {
            keywordsSeo:
              'portafolio, que es un portafolio, portafolio de inversion, que es un portafolio de inversion, inversiones portafolio'
          },
          metadescripcionSeo: {
            metadescripcionSeo:
              'El portafolio ideal para ti depende de lo que quieres hacer con tu ahorro de cesantías. Uno te da más rentabilidad pero tiene mayor riesgo. Conócelos aquí.'
          },
          descripcioncalltoaction:
            'Conoce ahora los requisitos para retirar tus Cesantías por Educación',
          tiempoDeLectura: '6',
          contentful_id: '3EjHrdRGlgi5YxTlRgLL5w',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              '¿Quieres estudiar? Evita estos errores comunes a la hora de usar las Cesantías para educación. Así estarás más cerca de tus sueños al ahorrar tiempo y dinero. '
          },
          cuerpocontenido: {
            json: {
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
                      value: '¿Cuentas con un ahorro para imprevistos?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Debes tener presente que el pago de la matrícula no es el único gasto que tendrás. Te recomendamos considerar hasta el transporte para hacer las diligencias y los pagos que debas hacer para tramitar tus documentos, entre otros.',
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
                      value: '',
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
                      value: '¡No olvides ningún requisito!',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Es fundamental que tengas claro cada uno de los requisitos que debes cumplir para invertir tu ahorro en este fin. Recuerda tener presente estudiar un programa en una universidad avalada por el Ministerio de Educación o su similar en el país adonde te traslades. ',
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
                        'Además, evita dejar todo para el último momento, pues hay trámites que tienden a demorarse un poco más. Por ejemplo, si piensas irte a estudiar al exterior, debes contar con la duración de los trámites legales y de la expedición de documentos como la visa.',
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
                      value: '',
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
                      value:
                        '¿Tienes claro qué quieres estudiar y dónde hacerlo?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Antes de comenzar con este proceso, te recomendamos tener definidas tus opciones, así podrás agilizar el camino. Descubre qué te gusta, cuáles son tus pasiones y lo que quieres lograr en tu vida. ¿Con qué soñaste siempre que eras niño? ¡Es momento de hacer eso realidad!',
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
                      value: '',
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
                      value: 'No contemplar los gastos de manutención.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Recuerda que si quieres estudiar debes tener presente que el único gasto no es el de la matrícula, que podrás cubrir con tus Cesantías, sino que debes pensar también en el transporte, la alimentación y los implementos de estudio.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Para qué son las Cesantías?',
          tituloCorto: 'Cesantías ¿Para qué son?',
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Si se terminó tu contrato o cambiaste de empleo, te mostramos algunas opciones que te ayudarán a aprovechar tu ahorro.',
          linkCallToAction: null,
          textoCallToActionBite: 'Cuéntame',
          textoCallToAction: '¿Por qué elegir Protección?',
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          keywordsSeo: {
            keywordsSeo:
              'portafolio, que es un portafolio, portafolio de inversion, que es un portafolio de inversion, inversiones portafolio'
          },
          metadescripcionSeo: {
            metadescripcionSeo:
              'El portafolio ideal para ti depende de lo que quieres hacer con tu ahorro de cesantías. Uno te da más rentabilidad pero tiene mayor riesgo. Conócelos aquí.'
          },
          descripcioncalltoaction: null,
          tiempoDeLectura: '3',
          contentful_id: '12wxz9mZz9Ok44M64PSSXV',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Es importante que tengas en cuenta que las cesantías son un ahorro que será de mucha ayuda cuando cambies de empleo y tengas algún imprevisto o se termine tu contrato laboral y éstas cumplan su función como seguro frente al desempleo.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Realiza una proyección a tu futuro cercano y responde estas preguntas: ¿por cuánto tiempo tienes planeado usar tu ahorro?, ¿cuánto dinero tienes disponible?, ¿cuál es tu objetivo? Esto te ayudará a determinar un panorama de tu situación.',
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
                                'Si definitivamente tomas la decisión de retirar tus cesantías, asegúrate de usarlas de forma planeada y evita los gastos innecesarios. Recuerda que este ahorro es fundamental para tu futuro.',
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
                                'Cuando tengas el dinero, haz una lista de gastos y determina cuánto necesitas para cada uno de ellos. Así serás más ordenado con tu presupuesto. Además, ten presente que lo que puedas ahorrar será siempre una ganancia.',
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
                                'Recuerda volver a ahorrar tus cesantías inmediatamente tengas de nuevo un contrato laboral.',
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
                      marks: [],
                      value:
                        'Si no tienes la necesidad de gastarte este dinero y deseas conservarlo, piensa en otras posibilidades que te brinda Protección: ahorrarlas o invertirlas.',
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
                        'Ya que sabes para qué te sirven las Cesantías, elige a Protección.\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Para qué son las Cesantías?',
          tituloCorto: 'Cesantías ¿Para qué son?',
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Conoce aquí la manera correcta de utilizar tus Cesantías',
          linkCallToAction: null,
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: '¿Por qué elegir Protección?',
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          keywordsSeo: {
            keywordsSeo:
              'portafolio, que es un portafolio, portafolio de inversion, que es un portafolio de inversion, inversiones portafolio'
          },
          metadescripcionSeo: {
            metadescripcionSeo:
              'El portafolio ideal para ti depende de lo que quieres hacer con tu ahorro de cesantías. Uno te da más rentabilidad pero tiene mayor riesgo. Conócelos aquí.'
          },
          descripcioncalltoaction:
            '¡Con tus Cesantías en Protección das el primer paso para cumplir tus sueños!',
          tiempoDeLectura: '4',
          contentful_id: '3yDxxmBbyiT6GPOnG2Dj5O',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Las Cesantías son un ahorro que te ayudará en momentos y situaciones específicas de tu vida. Por ejemplo, pueden serte útiles para sostenerte mientras encuentras un nuevo trabajo, construir tu hogar o para capacitarte en lo que te gusta.\nConoce en esta infografía más información sobre los casos en los que puedes invertir tus Cesantías.\n'
          },
          cuerpocontenido: {
            json: {
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
                      value: 'Desempleo',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Este ahorro te servirá como seguro en caso de quedarte sin trabajo. Con él podrás cubrir tus gastos fijos y evitarás tener apuros a fin de mes.',
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
                      value: 'Vivienda',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
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
                              value: 'Compra de vivienda o lote',
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
                              value: 'Remodelación',
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
                              value: 'Construcción de vivienda',
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
                                'Liberación de gravámenes sobre el inmueble',
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
                              value: 'Pago de impuestos',
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
                              value: 'Pago de cánones de Leasing',
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
                              value: 'Compra de títulos de vivienda',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Educación',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
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
                      value: 'Educación Superior:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Educación en territorio nacional',
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
                              value: 'Educación en España',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value:
                        'Educación para el trabajo y el desarrollo humano:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Programas de educación Media con convenios en instituciones de educación superior.',
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
                                'Educación no formal con títulos acreditados por el Sistema Nacional de Formación para el Trabajo.',
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
                                'Instituciones de educación media, técnica académica con certificación internacional.',
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
                                'Educación para el trabajo y desarrollo humano ',
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
                              value: 'Programa de idiomas.',
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
                                'Pago de créditos del Icetex o créditos educativos ',
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
                                'Retiro parcial de ahorro programado o seguro educativo.',
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
                      marks: [],
                      value: '\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué son las Cesantías?',
          tituloCorto: '¿Qué son las Cesantías?',
          textoCierre: null,
          subtitulo: 'Tipos de Cesantías',
          descripcioncorta:
            'Conoce todo lo que debes saber sobre las Cesantías y comienza a ahorrar junto a Protección.',
          linkCallToAction: null,
          textoCallToActionBite: ' ',
          textoCallToAction: '¿Para qué sirven?',
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          keywordsSeo: {
            keywordsSeo:
              'portafolio, que es un portafolio, portafolio de inversion, que es un portafolio de inversion, inversiones portafolio'
          },
          metadescripcionSeo: {
            metadescripcionSeo:
              'El portafolio ideal para ti depende de lo que quieres hacer con tu ahorro de cesantías. Uno te da más rentabilidad pero tiene mayor riesgo. Conócelos aquí.'
          },
          descripcioncalltoaction: 'Conoce en qué puedes utilizar tu ahorro.',
          tiempoDeLectura: '2',
          contentful_id: '2OJRVMtRN6wT6xJnlJc4sg',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              }
            },
            {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/3BgSS5Ud85ZaY2t4o2Excw/b586f3155f2be5c54a867f8a94061b69/imgtipos2.png?w=800&q=50'
              }
            }
          ],
          descripcionlarga: {
            descripcionlarga:
              '__Las Cesantías son una prestación social__ a la que tienes derecho al ser un trabajador vinculado por contrato fijo o término indefinido, tanto en empresas públicas como privadas. Este es un ahorro que es consignado al fondo de Cesantías seleccionado libremente por ti y corresponde a un mes de salario por cada año laborado o proporcional a la fracción de tiempo que hayas trabajado.\n'
          },
          cuerpocontenido: {
            json: {
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
                      value: 'Ordinarias',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Las Cesantías ordinarias nacieron gracias a la Ley 50. Esta ley aplica de',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: ' forma obligatoria ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        'para los trabajadores que establecieron un contrato a partir del 1 de enero de 1991 y de ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'forma voluntaria',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' para los empleados con contrato anterior al 1 de enero de 1991.',
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
                        'En este tipo de Cesantías se consigna de forma anual a un fondo de pensiones y Cesantías, el cual es encargado de administrar este dinero.',
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
                      value: 'Retroactivas',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'En este caso las Cesantías del trabajador permanecen en manos de la empresa durante todo el contrato laboral.',
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
                        'La prestación social se calcula con base en el último salario del empleado por el tiempo del servicio.',
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
                      value: '',
                      nodeType: 'text'
                    },
                    {
                      data: {
                        uri:
                          'https://www.proteccion.com/wps/portal/proteccion/web/cesantias/personas'
                      },
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Descúbrelo ya',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'hyperlink'
                    },
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías?',
          tituloCorto: '¿Cómo retirar Cesantías?',
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            '¿Ya decidiste la meta a la que le quieres destinar tus Cesantías? Ahora entérate cómo retirarlas',
          linkCallToAction: 'https://n9.cl/bdc3l ',
          textoCallToActionBite: 'Descúbrelo ahora',
          textoCallToAction: null,
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          keywordsSeo: {
            keywordsSeo:
              'portafolio, que es un portafolio, portafolio de inversion, que es un portafolio de inversion, inversiones portafolio'
          },
          metadescripcionSeo: {
            metadescripcionSeo:
              'El portafolio ideal para ti depende de lo que quieres hacer con tu ahorro de cesantías. Uno te da más rentabilidad pero tiene mayor riesgo. Conócelos aquí.'
          },
          descripcioncalltoaction:
            '¿Estás listo para retirarlas? Ingresa ahora a la Zona Transaccional',
          tiempoDeLectura: '5',
          contentful_id: '24C0wWGZpjU6iGAcLnFMyD',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Por la App y el sitio web o las oficinas de Protección. Según las metas que te hayas fijado y para las que quieras usar tus Cesantías, podrás retirarlas '
          },
          cuerpocontenido: {
            json: {
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
                      value: 'Vivienda: ',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
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
                                'En el portal transaccional puedes solicitar el retiro por cualquier monto. El pago se hará en la vía que elijas.',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Retiro sin clave: puedes retirar un monto hasta por 3 SMLMV (salarios mínimos legales mensuales vigentes). Este pago se hará en la vía que escojas. ',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'En los corresponsales ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'PagaFácil, Reval y Multipagas',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                ' podrás retirar un monto hasta por 10 SMLMV (salarios mínimos legales mensuales vigentes) en efectivo. ',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'También puedes optar por las Oficinas Protección. Si estás trabajando y cuentas con la autorización del empleador, podrás solicitar el retiro por cualquier monto y se pagará en cheque, transferencia o por ventanilla en las sucursales de los bancos Davivienda y Bancolombia.  ',
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
                      marks: [],
                      value: '',
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
                      value: 'Educación: ',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
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
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
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
                      value: 'Terminación del contrato:',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' ',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'En el portal transaccional puedes solicitar el retiro por cualquier monto. El pago se hará en la vía que elijas.',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Retiro sin clave: puedes retirar un monto hasta por 3 SMLMV (salarios mínimos legales mensuales vigentes). Este pago se hará en la vía que escojas.',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'En los corresponsales PagaFácil, Reval y Multipagas podrás retirar un monto hasta por 10 SMLMV (salarios mínimos legales mensuales vigentes) en efectivo.',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'También puedes optar por las Oficinas Protección. Allí podrás solicitar el retiro por cualquier monto y se pagará en cheque, transferencia o por ventanilla en las sucursales de los bancos Davivienda y Bancolombia.',
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
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
          tituloCorto: 'Cesantías para Vivienda',
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'En el camino para la adquisición o mejora de vivienda puedes incurrir en algunas equivocaciones. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Enséñame cuáles',
          textoCallToAction: '¿Cuánto debo ahorrar?',
          metatittleSeo:
            'Evita estos errores cuando uses tus cesantías para vivienda',
          descripcioncalltoaction:
            'Con estos consejos en mente, ¿ya decidiste hacer tu sueño realidad? ',
          tiempoDeLectura: '4',
          contentful_id: '69iYiFT7j8ythJRHXi1FVh',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Sabemos que tu vivienda es una de las inversiones más importantes de la vida. Por esto, debes estar atento a cualquier error que pueda comprometer tu meta. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Cuando estás en el proceso de compra de vivienda, algunas veces se comenten errores. Estos son algunos de los más comunes que debes evitar.',
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
                      value:
                        '¿Qué errores evitar durante el proceso de compra de vivienda?',
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
                              value: 'No ahorrar: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'La compra de vivienda requiere planeación y disciplina financiera, por ello es importante contar con un ahorro. Tus Cesantías, así como otros depósitos o ahorros individuales ante bancos, cooperativas o fondos de empleados podrían serte útiles para el pago de tu cuota inicial, hacer las adecuaciones antes de que te traslades o abonar al crédito. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value:
                                'No tener un presupuesto para los gastos notariales e imprevistos: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'El valor publicado por las constructoras para sus inmuebles no incluye los gastos notariales para el registro del inmueble ya que estos corren por cuenta del comprador. Además, si deseas hacer algún tipo de mejora en la vivienda, esto podría implicar imprevistos por los que terminarás pagando. Por esto, debes contar con una parte del presupuesto destinada a esos gastos que podrían aparecer de repente. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Ignorar la ley del 30 %: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'En el proceso de compra te encontrarás con esta cifra. La primera será cuando recurras a un crédito, en la mayoría de los casos éste solo podrá ascender hasta el 70 % del valor de la vivienda, así que tú tendrás que pagar por adelantado ese 30 % restante. De otra parte, por disposiciones de ley, el valor de la cuota de tu crédito de vivienda no podrá ser superior al 30 % de los ingresos del grupo familiar. Así, si entre tu y tu pareja acumulan ingresos por 3.200.000 pesos, el valor de la cuota que deberás pagar no podrá ser superior a los 960.000 pesos.',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'No asegurar el inmueble: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Tu patrimonio es importante y si bien los bancos te exigirán que adquieras un seguro de vida y otro más para el inmueble, lo mejor es ampliar las coberturas. Revisa muy bien qué cubre tu seguro y si es posible amplía la cobertura para que tu casa esté cubierta ante cualquier eventualidad. ',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
          tituloCorto: 'Cesantías para Vivienda',
          textoCierre: null,
          subtitulo:
            '¿Qué errores evitar durante el proceso de compra de vivienda?',
          descripcioncorta:
            'El camino a tu vivienda propia puede estar lleno de riesgos. Así podrás evitarlos. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cuáles',
          textoCallToAction: '¿Cómo puedes retirarlas?',
          metatittleSeo:
            'Errores al momento de usar tus cesantías para vivienda',
          descripcioncalltoaction:
            'Si ya estás listo para usar tus Cesantías...',
          tiempoDeLectura: '4',
          contentful_id: '2f0ALTKds1WffwMmFuEQn3',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Protección te acompaña en la consecución de tu vivienda propia. Por eso te recomienda evitar una serie de errores en los que podrías incurrir en el proceso de compra. \n'
          },
          cuerpocontenido: {
            json: {
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
                          content: [
                            {
                              data: {},
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Retirar la totalidad de las Cesantías: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Así no estés trabajando o lo hagas como un independiente, debes procurar conservar una parte de tus Cesantías. Este monto, que no tiene que ser muy alto, te servirá cuando definas qué proyecto de vivienda quieres comprar. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'No ahorrar: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'La compra de vivienda requiere planeación y disciplina financiera, por ello es importante contar con un ahorro. Tus Cesantías, así como otros depósitos o ahorros individuales ante bancos, cooperativas o fondos de empleados podrían serte útiles para el pago de tu cuota inicial, hacer las adecuaciones antes de que te traslades o abonar al crédito. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value:
                                'No tener un presupuesto para los gastos notariales e imprevistos: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'El valor publicado por las constructoras para sus inmuebles no incluye los gastos notariales para el registro del inmueble ya que estos corren por cuenta del comprador. Además, si deseas hacer algún tipo de mejora en la vivienda, esto podría implicar imprevistos por los que terminarás pagando. Por esto, debes contar con una parte del presupuesto destinada a esos gastos que podrían aparecer de repente. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Ignorar la “ley del 30 %”: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'En el proceso de compra te encontrarás con esta cifra. La primera será cuando recurras a un crédito, este solo podrá ascender hasta el 70 % del valor de la vivienda, así que tú tendrás que pagar de antemano ese 30 % restante. De otra parte, por disposiciones de ley, el valor de la cuota de tu crédito de vivienda no podrá ser superior al 30 % de los ingresos del grupo familiar. Así, si entre tu y tu pareja acumulan ingresos por 3.200.000 pesos, el valor de la cuota que deberás pagar no podrá ser superior a los 960.000 pesos.',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'No asegurar el inmueble: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Tu patrimonio es importante y si bien los bancos te exigirán que adquieras un seguro de vida y otro más para el inmueble, lo mejor es ampliar las coberturas. Revisa muy bien qué cubre y qué no tu seguro y trata que tu casa esté segura ante cualquier eventualidad. ',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo aprovechar tus Cesantías?',
          tituloCorto: 'Aprovecha tus Cesantías',
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'No basta con saber quién paga tus cesantías; también debes conocer cómo sacarles provecho.',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame',
          textoCallToAction: 'Inviértelas o ahórralas',
          metatittleSeo: 'Cómo aprovechar los aportes a cesantías',
          descripcioncalltoaction: 'Elige el mejor destino para tus Cesantías',
          tiempoDeLectura: '2',
          contentful_id: '2XUKLJvv483VG4ZJtQpKBP',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Las Cesantías son un ahorro que te ayudará en momentos y situaciones específicas de tu vida. Por ejemplo, pueden serte útiles para sostenerte mientras encuentras un nuevo trabajo, construir tu hogar o para capacitarte en lo que te gusta.\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Desempleo',
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
                      marks: [],
                      value:
                        'Este ahorro te servirá como seguro en caso de quedarte sin trabajo. Con él podrás cubrir tus gastos fijos y evitarás tener a puros a fin de mes.',
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
                      value: 'Vivienda',
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
                              value: 'Compra de vivienda o lote',
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
                              value: 'Remodelación',
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
                              value: 'Construcción de vivienda',
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
                                'Liberación de gravámenes sobre el inmueble',
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
                              value: 'Pago de impuestos',
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
                              value: 'Pago de cánones de Leasing',
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
                              value: 'Compra de títulos de vivienda',
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
                      marks: [],
                      value: 'Educación',
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
                      marks: [],
                      value: 'Educación Superior:',
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
                              value: 'Educación en territorio nacional',
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
                              value: 'Educación en España',
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
                      marks: [],
                      value:
                        'Educación para el trabajo y el desarrollo humano:',
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
                                'Programas de educación Media con convenios en instituciones de educación superior.',
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
                                'Educación no formal con títulos acreditados por el Sistema Nacional de Formación para el Trabajo.',
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
                                'Instituciones de educación media, técnica académica con certificación internacional.',
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
                                'Educación para el trabajo y desarrollo humano ',
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
                              value: 'Programa de idiomas.',
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
                              value: 'Pago de créditos ICETEX.',
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
                              value: 'Pago de crédito educativo ',
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
                                'Retiro parcial de ahorro programado o seguro educativo ',
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
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          tituloCorto: 'Beneficio SOAT Protección',
          textoCierre: null,
          subtitulo: '¿Cómo redimir este beneficio?',
          descripcioncorta:
            '¡Tener tus Cesantías en Protección son el primer paso para cumplir tus sueños!',
          linkCallToAction: 'https://www.segurosexito.com/',
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: 'Compra tu SOAT y disfruta tu beneficio',
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          descripcioncalltoaction: '¡Ingresa ahora!',
          tiempoDeLectura: '2',
          contentful_id: '22QeJSfyfLIj09dk3Vfflm',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              }
            }
          ],
          descripcionlarga: {
            descripcionlarga:
              '### Beneficio SOAT\nSi ahorras tus Cesantías en Protección y realizas la compra del SOAT para carro o moto en puntos de venta de Seguros Éxito* o en [www.segurosexito.com](https://www.segurosexito.com), recibirás un descuento en tu próxima compra de $20.000 pesos que podrás usar en los almacenes Éxito, Carulla, Surtimax, Super Inter y Surtimayorista.\n\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Proteccion\r\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-1'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Este descuento lo puedes redimir 4 días hábiles posteriores a la compra del SOAT, con tan solo ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'indicar el convenio 490',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' y presentar tu documento de identidad, al momento de pagar tus compras en la caja registradora de estos almacenes.\r\n\r\n',
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
                        'Este beneficio es un reconocimiento a tu decisión de ahorrar en Protección',
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
                      value: 'Proteccion\r\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-1'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        '*“Oferta válida del 14 de febrero del 2020 al 13 de febrero del 2021. No aplica para Costa Norte, Tolima y Valle del Cauca ni vehículos matriculados en estas zonas. Esta oferta aplica en www.segurosexito.com, www.exito.com, www.carulla.com y almacenes Éxito, Carulla, Surtimax, Surtimayorista, Super Inter (Manizales) y Estaciones de Servicio Éxito con venta de SOAT. Por la compra de tu SOAT auto particular acumulas 200 Puntos Colombia y 100 Puntos Colombia por tu SOAT moto. Descuento no acumulable con otras ofertas, se otorga el descuento de mayor valor equivalente en pesos. Éxito® marca registrada de Almacenes Éxito S.A. Seguros Generales Suramericana S.A.”*',
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
                      value: 'Proteccion',
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
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT (ENSAYO)',
          tituloCorto: 'Beneficio exclusivo SOAT',
          textoCierre: null,
          subtitulo: null,
          descripcioncorta: null,
          linkCallToAction: 'https://www.segurosexito.com/',
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: 'Compra tu SOAT y disfruta tu beneficio',
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          descripcioncalltoaction: '¡Ingresa ahora!',
          tiempoDeLectura: '2',
          contentful_id: '5AMw5lXeiFSXNUYFk7Qo8x',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              }
            }
          ],
          descripcionlarga: {
            descripcionlarga:
              'Si ahorras tus Cesantías en Protección y realizas la compra del SOAT para carro o moto en puntos de venta de Seguros Éxito* o en [www.segurosexito.com](https://www.segurosexito.com), recibirás un descuento en tu próxima compra de $20.000 pesos que podrás usar en los almacenes Éxito, Carulla, Surtimax, Super Inter y Surtimayorista.\n\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Este descuento lo puedes redimir 4 días hábiles posteriores a la compra del SOAT, con tan solo ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'indicar el convenio 490',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' y presentar tu documento de identidad, al momento de pagar tus compras en la caja registradora de estos almacenes.\r\n\r\n',
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
                        'Este beneficio es un reconocimiento a tu decisión de ahorrar en Protección',
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
                        '\r\n*“Oferta válida del 14 de febrero del 2020 al 13 de febrero del 2021. No aplica para Costa Norte, Tolima y Valle del Cauca ni vehículos matriculados en estas zonas. Esta oferta aplica en www.segurosexito.com, www.exito.com, www.carulla.com y almacenes Éxito, Carulla, Surtimax, Surtimayorista, Super Inter (Manizales) y Estaciones de Servicio Éxito con venta de SOAT. Por la compra de tu SOAT auto particular acumulas 200 Puntos Colombia y 100 Puntos Colombia por tu SOAT moto. Descuento no acumulable con otras ofertas, se otorga el descuento de mayor valor equivalente en pesos. Éxito® marca registrada de Almacenes Éxito S.A. Seguros Generales Suramericana S.A.”*',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            'Protección invita al autocuidado y al uso de canales digitales',
          tituloCorto: 'Uso de Canales digitales',
          textoCierre: null,
          subtitulo: 'Conoce la oferta de servicios que tenemos disponible',
          descripcioncorta:
            'Es tiempo de estar en casa, cuidarnos y mantener la calma. Es tiempo de utilizar los canales digitales',
          linkCallToAction: 'https://www.proteccion.com/wps/portal/proteccion',
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: 'Ir a proteccion.com',
          metatittleSeo:
            'Protección invita al autocuidado y al uso de canales digitales',
          descripcioncalltoaction:
            'Nuestros canales comerciales cuentan con todos los medios de conectividad online para seguirte ofreciendo la más completa asesoría.',
          tiempoDeLectura: '5',
          contentful_id: '1lxGp5aG791KVIRqzqJKtI',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/4rC5XZdS5xnEBiZz3UtFtD/21be6b348785397ad5c0cb73128c33ce/Co__mo-acceder-al-mecanismo-de-proteccio__n-al-cesante-max.jpeg?w=800&q=50'
              }
            }
          ],
          descripcionlarga: null,
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Con la evolución que ha tenido el COVID-19 en nuestro país y en el mundo en general, nuestra prioridad hoy debe ser cuidar la salud pública y la vida. En Protección creemos que es momento de tener confianza, capacidad adaptativa y de apalancarnos de todo el desarrollo de nuestras plataformas tecnológicas y nuestro talento humano, para que, sin exponer a nuestros colaboradores ni a nuestros clientes, sigamos garantizando la adecuada prestación de los servicios y el acompañamiento experto que nos caracteriza.\r\n\r\nSi bien nuestras oficinas de servicio están en funcionamiento, y hemos adoptado los protocolos de seguridad y recomendaciones del Ministerio de Salud; como compromiso con la situación del país, ',
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
                        'te invitamos a realizar en ellas transacciones que no estén disponibles en canales digitales y nuestras líneas de servicio. ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        'De esta manera, nuestra operación continúa 100% activa, mientras cuidamos a nuestros clientes, colaboradores y a sus familias.',
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
                      value:
                        'En nuestro canal digital\r proteccion.com\r y en la App Protección puedes:\r',
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
                        '• Retirar cesantías\r\n• Retirar pensión voluntaria\r\n• Solicitar certificaciones, actualizar tu Historia Laboral, consultar saldos y movimientos\r\n• Adjuntar la documentación para los tramites de pensión\r\n• Adjuntar las incapacidades aprobadas por la EPS para el posterior pago, una vez ya esté aprobado derecho.\r\n• Generar tu clave personal y actualizar tus datos\r\nTambién puedes recibir asesoría e información general con Pronto, nuestro asesor virtual, disponible en proteccion.com',
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
                      value: '',
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
                      value: 'A través de las líneas telefónicas puedes:\r',
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
                        '• Radicar trámites de pensión y revisar tu Historia Laboral\r\n• Recibir asesoría general y realizar consultas sobre tu ahorro\r\n\r\nBogotá: 744 44 64 - Medellín y Cali: 510 90 99 - Barranquilla: 319 79 99\r\nCartagena 642 49 99 - Nacional (desde fijo): 01 8000 52 8000',
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
                      value: '',
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
                      value:
                        'En nuestras oficinas de servicio, únicamente podrás realizar:\r\n',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        '\r\n1. Corrección de beneficio tributario para grabación de pago.\r\n2. Recepción de solicitud de cancelación de la cuenta financiera y envío de formato diligenciado al proceso.\r\n3. Marcar una cuenta de Cesantías cómo voluntaria o TTV.\r\n4. Auxilio económico que se reconoce a un familiar que demuestre haber pagado los gastos funerarios de un afiliado pensionado fallecido de Protección.\r\n5. Gestionar pago por excedentes de libre disponibilidad.\r\n6. Pago de pensionados en cheque en oficina.\r\n7. Pago por devolución de saldos en trámite de pensión.\r\n8. Radicar tramite solicitud de reconocimiento y pago de Auxilios funerarios.\r\n9. Radicar tramite solicitud de cesantías por muerte del afiliado.\r\n10. Recibir y registrar complementos clínicos y administrativos.\r\n11. Recibir y registrar apelaciones.\r\n12. Recibir y validar que las historias clínicas se encuentren completas.\r\n13. Recibir documentos y entregar a recepción documental.\r\n14. Recibir y procesar novedades de nómina de pensionados.\r\n15. Generar certificado de pignoración.\r\n16. Actualización de datos y generación de clave personal.',
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
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Sabías que puedes continuar afiliado a la Caja de Compensación Familiar?',
          tituloCorto: 'Cajas de Compensación',
          textoCierre: null,
          subtitulo: '¿De qué se trata?',
          descripcioncorta:
            '¡Queremos promover una mejor calidad de vida para ti y tu familia!',
          linkCallToAction: null,
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: null,
          metatittleSeo:
            '¿Sabías que puedes continuar afiliado a la Caja de Compensación Familiar?',
          descripcioncalltoaction: null,
          tiempoDeLectura: '2',
          contentful_id: '3idU9aEVdgtfAmNIgyFBWM',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              }
            }
          ],
          descripcionlarga: {
            descripcionlarga:
              'Conoce todos los aliados que tenemos en Cajas de Compensación Familiar y comienza a disfrutar de sus beneficios'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Contamos a nivel nacional con aliados como las ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'underline'
                        }
                      ],
                      value: 'Cajas de Compensación Familiar',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ', las cuales te ofrecen beneficios para tu bienestar:',
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
                        ' educación, recreación, cultura, turismo, deporte, vivienda, entre otros.\r\n',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        '\r\nPor esto, queremos que disfrutes de estos beneficios con tan solo afiliarte a la Caja de Compensación de tu preferencia. Sigue estos pasos:\r',
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
                      value: '1.',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' Dirígete a la entidad de tu elección con la carta de aprobación de pensión, la certificación de pensión o el desprendible de nómina.\r\n\r\n \r',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: '2. ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: 'Afíliate a la Caja de Compensación Familiar.',
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
                      value: '',
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
                        'Si tienes alguna inquietud, llámanos a nuestra Línea de Servicio',
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
                        'Bogotá: 744 44 64  | Medellín y Cali: 510 90 99  |  Barranquilla: 319 79 99  |  Cartagena: 642 49 99  |  Nacional (desde fijo): 01 8000 52 8000',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué son los aportes a Cesantías?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Ahora que sabes qué son las Cesantías, debes saber quiénes deben aportar y cómo deben hacerlo. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Explícamelo',
          textoCallToAction: '¿Cómo aprovecharlas?',
          metatittleSeo:
            '¿Qué son los Aportes a cesantías y quién los debe pagar?',
          descripcioncalltoaction:
            'Ahora que sabes quién y a cuánto deben ascender tus Cesantías...',
          tiempoDeLectura: '5',
          contentful_id: '2Lh4lX3RHAEe46jOVqw1nf',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Las Cesantías son una prestación social a cargo del empleador para sus empleados y constituyen un ahorro para el desempleo. Conoce más de los pagos, tiempos y fondos con estas 6 preguntas.\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '¿Qué son los aportes o pagos de Cesantías?',
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
                      marks: [],
                      value:
                        'Es el pago que debe hacer todo empleador por cada uno de sus trabajadores por concepto de Cesantías a un fondo, como Protección. ',
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
                      value: '¿A cuánto equivalen?',
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
                      marks: [],
                      value:
                        'Las Cesantías equivalen a un mes de salario por cada año de servicio. Si un trabajador lleva menos de un año en la empresa, se liquidará proporcionalmente al periodo laborado. ',
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
                      value: '¿Cómo se liquidan?',
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
                      marks: [],
                      value:
                        'Las Cesantías se calculan partiendo del último salario mensual del trabajador, a menos que haya tenido algún tipo de cambio durante los últimos tres meses. En caso de que el trabajador hubiera terminado su relación laboral menos de un año, se hará un promedio con el salario devengado.',
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
                      value: '¿Adónde consignan los pagos?',
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
                      marks: [],
                      value:
                        'Como empleado, puedes elegir el fondo en el que quieres que te consignen las Cesantías. Si no lo haces, la empresa donde trabajas puede escoger libremente el fondo de Cesantías al que las depositará.',
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
                      value: '¿Cuántas cuentas por Cesantías tener?',
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
                      marks: [],
                      value:
                        'Tantas como trabajos hayas tenido. Ya que el empleador y el empleado pueden elegir libremente a qué fondo consignar las Cesantías, una persona que haya trabajado en 5 empresas puede tener hasta 5 cuentas en distintos fondos de Cesantías.',
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
                      value: '¿Cuándo se debe consignar las Cesantías?',
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
                      marks: [],
                      value:
                        'Las Cesantías se liquidan el 31 de diciembre de cada año. Según lo previsto por la ley, el empleador tiene hasta el 14 de febrero del año siguiente para consignar las Cesantías en la cuenta individual que el trabajador elija. ',
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
                        '¿Qué pasa si el empleador se retrasa en el pago de las Cesantías?',
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
                      marks: [],
                      value:
                        'Si un empleador no consigna las Cesantías antes del 15 de febrero del año siguiente, deberá pagar un día de salario por cada día de retraso. A este se le conoce como sanción moratoria y depende netamente del empleador. Los fondos de Cesantías no son entes reguladores para el cálculo de esta sanción.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué son los intereses de las Cesantías?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            '¿Sabías que este ahorro tiene unos intereses que puedes disfrutar? Conoce más sobre ellos.',
          linkCallToAction: null,
          textoCallToActionBite: 'Aprende más',
          textoCallToAction: '¿Cuáles son mis alternativas?',
          metatittleSeo: '¿Qué son los intereses de las cesantías?',
          descripcioncalltoaction: null,
          tiempoDeLectura: '2',
          contentful_id: '67bLxw6kifiYyfUp0vz3df',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Todo empleador debe pagar a sus colaboradores unos intereses sobre las Cesantías. Conoce qué son y el plazo que tiene tu empresa para consignártelas.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Como tus Cesantías son un ahorro tienes derecho a unos intereses anuales: desde el 1 de enero hasta el 31 de diciembre del año correspondiente. Este monto debe ser pagado máximo el 31 de enero del año siguiente.',
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
                        'Así, los intereses de las Cesantías corresponden al 12 % anual o al porcentaje proporcional a la fracción de año en la que se realizó tal ahorro.',
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
                      value: 'Calcula aquí cuánto puedes recibir de intereses:',
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
                      value: '[SIMULADOR]',
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
                        'Recuerda que no debes hacer de estos intereses plata de bolsillo. ',
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
                        'Descubre qué han hecho otras personas con este dinero.\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Para qué puedes retirar tus Cesantías?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Como cesante, las Cesantías pueden servirte para alcanzar tus sueños. Conoce cómo aquí',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame',
          textoCallToAction: ' Conoce cómo retirarlas',
          metatittleSeo: 'Como Cesante ¿Para qué puedo retirar las cesantías?',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '45hvk5smrzNIClX4qNW6O2',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Las Cesantías son un ahorro para el momento en el que pierdas tu empleo. Como empleado, también las puedes usar para alcanzar tus metas ya que las puedes retirar para:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Comprar una vivienda, terreno o un lote. ',
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
                              value: 'Mejorar o remodelar tu casa.',
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
                                'Construir tu casa en un terreno que ya tengas.',
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
                              value: 'Pagar los impuestos de tu vivienda.',
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
                                'Comprar títulos de vivienda adquiridos por tus empleadores con entidades públicas o privadas.',
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
                                'Pagar los cánones del leasing de tu vivienda. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Con las Cesantías también puedes:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Pagar la matrícula de escuelas, colegios o universidades públicas.',
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
                                'Costear la matrícula de cualquier institución privada de educación superior.',
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
                              value: 'Abonar a la deuda del Icetex.',
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
                                'Pagar la matrícula de las instituciones de educación media o técnica académica con certificación internacional. ',
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
                                'Pagar los programas de Instituciones de Educación para el Trabajo y el Desarrollo Humano, antes denominada, educación no formal. ',
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
                              value: 'Estudiar idiomas.',
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
                      marks: [],
                      value:
                        'Ten en cuenta que tus Cesantías también pueden pagar para la educación de tu pareja o tus hijos.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cuáles son los certificados de Cesantías?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Conoce los certificados de las Cesantías y para qué puedes usarlos.',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstramelos',
          textoCallToAction: 'Aprende a descargarlos',
          metatittleSeo: '¿Cuáles son los certificado de cesantías?',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '7oxMvA7f5USzX5b4YPSFVm',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Los certificados son ese soporte que necesitarás en caso de tener que demostrar el ahorro que tienes en Protección con tus Cesantías.\n'
          },
          cuerpocontenido: {
            json: {
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
                          content: [
                            {
                              data: {},
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Constancia de Afiliación Cesantías:',
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
                      marks: [],
                      value:
                        'Documento expedido por Protección que certifica que tienes tus Cesantías en Protección.',
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
                              value: 'Constancia de saldo Cesantías:',
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
                      marks: [],
                      value:
                        'Documento expedido por Protección que da constancia del dinero total que tienes ahorrado.',
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
                                'Certificado de Declaración de Renta de Cesantías:',
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
                      marks: [],
                      value:
                        'Documento expedido por Protección que certifica los movimientos en Cesantías de afiliado para el año 2018. Este tiene información sobre los movimientos, los rendimientos y retenciones.',
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
                              value: 'Certificado de ',
                              nodeType: 'text'
                            },
                            {
                              data: {
                                uri: 'google.com'
                              },
                              content: [
                                {
                                  data: {},
                                  marks: [
                                    {
                                      type: 'bold'
                                    }
                                  ],
                                  value: 'inmovilización ',
                                  nodeType: 'text'
                                }
                              ],
                              nodeType: 'hyperlink'
                            },
                            {
                              data: {},
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'de Cesantías:',
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
                      marks: [],
                      value:
                        'Documento expedido por Protección y que está dirigido a las cajas de compensación con el propósito de dar constancia de que las Cesantías del afiliado se encuentran inmovilizadas.',
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
                      value: '¿Necesitas alguno de estos documentos?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo usar tus Cesantías para vivienda?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: 'Cómo hacerlo',
          descripcioncorta:
            'Las Cesantías te acercan a tu nueva vivienda. Conoce cómo puedes aprovecharlas. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Dime cómo',
          textoCallToAction: '¿Cuánto debo ahorrar?',
          metatittleSeo:
            'Usar las cesantías para vivienda: Cesante o Independiente',
          descripcioncalltoaction: 'Prepárate para cumplir tus sueños.',
          tiempoDeLectura: null,
          contentful_id: 'V9eZUKK3z8qU6j4pYnhLX',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Si estás pensando en comprar vivienda, puedes contar con tus Cesantías. Recuerda que ellas pueden servirte para alcanzar tus metas. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'La compra de vivienda es una de las inversiones más significativas de tu vida. Para lograr esta meta, necesitas planeación y disciplina financiera basadas en el ahorro.',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Debes fijarte una meta: ¿cuándo quieres comprar tu casa?, ¿cuánto estás dispuesto a pagar por ella?',
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
                                'Luego de esto, debes pensar en un plan de ahorro que te acerque financieramente al proyecto de hacerte a una casa. Define un monto a ahorrar cada mes. Puedes optar por las Cesantías voluntarias o bien dejar en Protección las que ya te pagaron tus exempleadores. ',
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
                                'Después, mira tus ingresos y gastos. Piensa cómo podrías incrementar tus entradas de dinero y cómo podrías reducir algunos gastos. ',
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
                                'Revisa en tu presupuesto los gastos innecesarios u hormiga; es decir, aquellos que no cuidas como salidas, taxis, comidas por fuera del hogar y similares en los que podrías estar incurriendo.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Una vez definas tu meta, empieces a ahorrar y reduzcas gastos, estarás listo para comprar la casa de tus sueños.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta: 'Mira los pasos y documentos necesarios.',
          linkCallToAction: null,
          textoCallToActionBite: null,
          textoCallToAction: 'Conoce los canales',
          metatittleSeo: '¿Cómo retirar las cesantías si soy Cesante?',
          descripcioncalltoaction: '¿Estás listo para retirarlas?',
          tiempoDeLectura: null,
          contentful_id: '1n3MuDvUUVVF4d3LfPlrGk',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Mira los documentos y requisitos que debes cumplir para retirar tus Cesantías. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Para hacer efectivo el retiro de tus Cesantías, debes contar con lo siguiente:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Documento de identidad original',
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
                                'Carta del empleador dirigida a Protección en la que autoriza el retiro de las Cesantías con nombre del afiliado, número de identificación y fecha de terminación del contrato. Esta no puede tener tachones o enmendaduras. ',
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
                      marks: [],
                      value:
                        'Con estos documentos, puedes gestionar el retiro por cualquiera de los siguientes canales de atención.',
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
                                'En el portal transaccional puedes solicitar el retiro por cualquier monto. El pago se hará en la vía que elijas.',
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
                                'Por medio del portal no transaccional, puedes retirar un monto hasta por 3 SMLMV (salarios mínimos legales mensuales vigentes). Este pago se hará en la vía que escojas. ',
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
                                'En los PagaFácil podrás retirar un monto hasta por 10 SMLMV (salarios mínimos legales mensuales vigentes) en efectivo.',
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
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo ahorrar para mi vivienda?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Si tu sueño es tu vivienda, te contamos cómo hacer un plan de ahorro para alcanzarlo.',
          linkCallToAction: null,
          textoCallToActionBite: 'Cuéntame cómo',
          textoCallToAction: 'Calcula tu ahorro',
          metatittleSeo: '¿Cuánto debo ahorrar para comprar mi nueva casa?',
          descripcioncalltoaction:
            'Conocer por qué ahorrar es importante, ahora solo debes empezar. ',
          tiempoDeLectura: null,
          contentful_id: '5SRgmAyGybjlE53CoyO9xE',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Tienes una meta, ahora debes ponerte en marcha para lograrla con ahorro y dedicación.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Comprar vivienda es una de las inversiones más grandes a las que te tengas que enfrentar durante la vida y con las cesantías en Protección podrás lograrlo. Sigue estas recomendaciones: ',
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
                              value: 'Fíjate una meta y plazo:',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                ' Busca una vivienda que se acomode a tu presupuesto y piensa cuándo quieres comprarla. Algunos proyectos son de entrega inmediata mientras que para otros deberás esperar hasta la entrega de tu nuevo hogar.',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Organiza tus finanzas:',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                ' Establece un presupuesto mensual en el que incluyas todos tus ingresos como tu salario y comisiones, y gastos, como la compra del mercado y el pago de servicios públicos.',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Empieza un ahorro:',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                ' En el presupuesto que vas a elaborar, no olvides separar una parte de los ingresos para el ahorro. Un monto recomendado es del 10 % de tus ingresos, de manera que si te ganas 1.200.000 pesos, deberás ahorrar mensualmente 120.000 pesos. ',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
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
                            '¿Pero por qué es importante el ahorro para la compra de vivienda? Básicamente porque demuestra ante el banco tu responsabilidad en el manejo del dinero. Además, porque te ayudará a hacer el cierre financiero de la compra de vivienda, ya que la mayoría de los bancos sólo prestan hasta el 70 % del valor del inmueble. Así que para una vivienda de 130 millones de pesos deberás tener ahorrados entre 39 millones para el pago de la cuota inicial.',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        '\nConocer por qué ahorrar es importante, ahora solo debes empezar. \n\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo usar las Cesantías para vivienda?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Con tus Cesantías en Protección puedes abrir las puertas de tu nueva vivienda o mejorar la que ya tienes.',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: 'Comienza a ahorrar',
          metatittleSeo:
            'Usar las cesantías para vivienda: Cesante o Independiente',
          descripcioncalltoaction:
            ' ¿Ya decidiste qué hacer con tus Cesantías? ',
          tiempoDeLectura: null,
          contentful_id: '4lBxRbeqrfrBHA3VlxKMmC',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Como un ahorro, las Cesantías pueden ayudarte a alcanzar tus metas en vivienda. Compra, mejora o paga los impuestos de tu casa con ellas.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Además de ser un ahorro que puede protegerte en caso de que pierdas tu empleo, las Cesantías también pueden servirte para alcanzar tus metas de vivienda.',
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
                      value:
                        '¿Qué puedes hacer con tus Cesantías en vivienda? ',
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
                        'Si eres un trabajador, puedes usar tus Cesantías para: ',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Comprar vivienda o un lote para esta.',
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
                                'Pagar la remodelación y mejoras locativas de tu vivienda.',
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
                                'Construir vivienda en un lote de tu propiedad o de tu cónyuge.',
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
                                'Liberación de embargos sobre tu vivienda o la de tu cónyuge. ',
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
                                'Pago de impuestos de vivienda que corresponden a predial y la contribución de valorización.',
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
                              value: 'Pago de cánones de leasing. ',
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
                                'Compra de títulos de vivienda adquiridos por empleadores con entidades públicas o privadas. ',
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
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo declarar las cesantías como independiente?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Así podrás aprovechar los beneficios tributarios que podrás disfrutar gracias a las cesantías. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Enséñame más',
          textoCallToAction: 'Trasládalas a Protección',
          metatittleSeo:
            '¿Cómo hacer una optimización tributaria para independientes?',
          descripcioncalltoaction:
            'Ya que viste los beneficios de ahorrar tus Cesantías...',
          tiempoDeLectura: null,
          contentful_id: '1omXAGrNSZevRYD09pIh3d',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Si eres independiente, también puedes contar con las cesantías para tener un ahorro en momentos de iliquidez o falta de trabajo.\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'La ley contempla beneficios que ahorran en los fondos de Cesantías como Protección. ',
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
                      value: 'Cesantías como ahorro para independientes',
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
                      marks: [],
                      value:
                        'Los independientes pueden hacer aportes a Cesantías que serán tenidos en cuenta como una deducción de su impuesto de renta hasta la doceava parte de sus ingresos anuales, sin exceder 2500 UVT (es decir, $ 89.017.000 para el 2020).',
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
                        'Todas las personas que tengan ingresos por rentas laborales deberán registrarlos dentro de la cédula laboral. Esta tiene como limitante para deducción y rentas exentas el 40 % de los ingresos netos y hasta 5040 UVT (para el 2020, $ 179.459.000).',
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
                        'De esta manera, los independientes pueden restarse la doceava parte de sus ingresos si los aporta en Cesantías como una deducción en su optimización tributaria sin requisitos adicionales al momento del retiro de estos recursos. ',
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
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'Recuerda que cualquier retiro de Cesantías está exento del cobro del 4 por 1000.',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo acceder al mecanismo de protección al cesante?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Estos son los requisitos para beneficiarte de este mecanismo mientras encuentras un nuevo empleo. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame',
          textoCallToAction: 'Dirígete a la red de servicios de empleo',
          metatittleSeo: '¿Cómo acceder al mecanismo de protección al cesante?',
          descripcioncalltoaction: 'Ahora que conoces los requisitos... ',
          tiempoDeLectura: null,
          contentful_id: 'JMgvbNPIdLpAkuktUZ1yp',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Los requisitos para disfrutar del beneficio de protección al cesante dependen de tu vinculación laboral y tus aportes a cajas de compensación familiar. '
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Para poder disfrutar del mecanismo de protección al cesante, debes cumplir con los siguientes requisitos:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Si eras dependiente, tienes que haber hecho aportes a tu caja de compensación familiar durante un año (continuo o no) durante los últimos 3 años. ',
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
                                'Si eras independiente, debes haber hecho aportes a cajas de compensación familiar por un periodo equivalente a 2 años durante los últimos 3 años corridos. ',
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
                                'Que no cuentes con ninguna otra fuente de ingresos.',
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
                                'Inscribirte en cualquiera de los servicios de la Red de Servicios de Empleo e iniciar la ruta hacia la búsqueda de empleo.',
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
                                'Inscribirte en programas de capacitación y reentrenamiento según la reglamentación expedida por el Gobierno Nacional.',
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
                                'En caso de querer acceder al incentivo monetario por el ahorro de Cesantías y tu sueldo era inferior a 2 salarios mínimos mensuales legales vigentes, deberás haber ahorrado el 10 % de tu salario mensual del último año. Si tu sueldo era superior a esos 2 salarios mínimos, el ahorro deberá ser del 25 %.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: 'Cesantías en la declaración de renta',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Ir a allá',
          textoCallToAction: 'Cuéntame más',
          metatittleSeo: '¿Cómo declaran las cesantías los trabajadores?',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '687bqpw2AHfdQhkadti9qp',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'El tratamiento tributario de las Cesantías depende de si hay una relación laboral o de si se trata de un ahorro para independientes. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Cesantías como prestación social',
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
                      marks: [],
                      value:
                        'Los dependientes o trabajadores que cuentan con una relación laboral reciben las Cesantías. Estas deben entenderse como un ingreso desde el momento en el que sean pagadas por el empleador. ',
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
                        'También son ingresos desde el instante en el que son consignadas por la empresa o empleador ante el fondo de Cesantías, como Protección. ',
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
                        'Por tratarse de un ingreso, deberán reflejarse en la declaración de renta del año en el que fueron consignadas al fondo de Cesantías o pagadas al empleado.  ',
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
                        'Pese a ello, la ley también contempla unos beneficios gracias a que considera las Cesantías rentas exentas para aquellos trabajadores cuyo ingreso mensual promedio durante los últimos 6 meses no exceda de 350 UVT ( $ 12.462.000 para el 2020).',
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
                        'Quienes superen este monto podrán tener unos porcentajes con beneficio, según el numeral 4 del artículo 206 del Estatuto Tributario. ',
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
                          type: 'code'
                        }
                      ],
                      value:
                        '<style type="text/css">\n\n\n.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}\n\n\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}\n\n\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}\n\n\n.tg .tg-dvid{font-weight:bold;background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n\n\n.tg .tg-fymr{font-weight:bold;border-color:inherit;text-align:left;vertical-align:top}\n\n\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n\n\n</style>\n\n\n<table class="tg">\n\n\n  <tr>\n\n\n    <th class="tg-dvid">Salario mensual promedio         </th>\n\n\n    <th class="tg-fymr">Parte no gravada</th>\n\n\n  </tr>\n\n\n  <tr>\n\n\n    <td class="tg-0pky">De 350 UVT a 410 UVT</td>\n\n\n    <td class="tg-0pky">90%</td>\n\n\n  </tr>\n\n\n  <tr>\n\n\n    <td class="tg-0pky">De 410 UVT a 470 UVT</td>\n\n\n    <td class="tg-0pky">80%</td>\n\n\n  </tr>\n\n\n  <tr>\n\n\n    <td class="tg-0pky">De 470 UVT a 530 UVT</td>\n\n\n    <td class="tg-0pky">60%</td>\n\n\n  </tr>\n\n\n  <tr>\n\n\n    <td class="tg-0pky">De 530 UVT a 590 UVT</td>\n\n\n    <td class="tg-0pky">40%</td>\n\n\n  </tr>\n\n\n  <tr>\n\n\n    <td class="tg-0pky">De 590 UVT a 650 UVT</td>\n\n\n    <td class="tg-0pky">20%</td>\n\n\n  </tr>\n\n\n  <tr>\n\n\n    <td class="tg-0pky">De 650 UVT en adelante</td>\n\n\n    <td class="tg-0pky">0%</td>\n\n\n  </tr>\n\n\n</table>',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: '\n\n',
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
                      value: '',
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
                      value: '',
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
                        '\nTodas las personas que tengan ingresos por rentas laborales deben registrarlos dentro de la cédula general. Recuerda que esta tiene como limitante para deducciones y rentas exentas el 40 % de los ingresos netos y hasta 5040 UVT (para el 2020, $ 179.459.000).',
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
                        '¿Quieres ver un ejemplo de cómo es el tratamiento tributario de tus Cesantías?',
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
                      value: '<LINK A SIMULADOR>',
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
                        'Pero no solo los empleados tienen beneficios al momento de declarar sus Cesantías. Los independientes también tienen un tratamiento especial.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Si ahorraste en Cesantías como independiente, puedes retirarlas fácilmente. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: 'Conoce los canales',
          metatittleSeo: '¿Cómo retirar las cesantías como Independiente?',
          descripcioncalltoaction: '¿Quieres retirar tus cesantías?',
          tiempoDeLectura: null,
          contentful_id: '56JeYGPwsJxOwK7RE66VAc',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Sigue estos pasos para retirar las cesantías que ahorraste en Protección.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Remítete a la sección Retiro de Cesantías online en nuestro sitio web para recibir el dinero en tu cuenta bancaria o en un cheque en cualquiera de las Oficinas de Servicio.',
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
                      value: ' ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Desde el sitio web de Protección:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Ingresa a la zona transaccional con tu clave personal (¿No tienes clave? Genérala aquí <link>).',
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
                                'En el menú izquierdo busca Transacciones Cesantías y, luego Retiros Cesantías.',
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
                                'En caso de tener varias cuentas, elige aquella de la que quieras hacer el retiro.',
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
                              value: 'Ingresa el valor a retirar.',
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
                                'Elige el modo de pago. Puedes escoger entre transferencia electrónica a una cuenta que hayas registrado con anterioridad o retiro en cheque.',
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
                                'Confirma los datos y dale clic a “Confirmar el retiro”.',
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
                                'Revisa tu celular y tu correo electrónico, allí te enviaremos la confirmación del retiro.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo aprovechar tus Cesantías para educación?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Usa tus Cesantías para educación y cumple tus sueños junto a Protección.',
          linkCallToAction: null,
          textoCallToActionBite: 'Aprende más',
          textoCallToAction: 'Calcular mi ahorro',
          metatittleSeo: 'Invierte tus cesantías en educación',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '5kL0MGvKqd3MyjGBMHhauI',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              '¿Tienes el dinero de tus Cesantías y estás buscando qué hacer con este ahorro? Una opción es invertirlo en educación. '
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '¿Y cuáles son los beneficios?',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'La educación mejora el nivel de vida de las personas.',
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
                                'La educación no es un gasto, es una inversión a largo plazo.',
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
                                'Puede aumentar las posibilidades de mejorar tu calidad de vida.',
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
                                'Te brinda bienestar a ti y a toda tu familia.',
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
                                'La educación brinda la posibilidad de tener un mejor futuro.',
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
                                'Estudiar solo trae aspectos positivos a la vida de las personas.',
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
                                'Te da la oportunidad de crecer profesionalmente.',
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
                      marks: [],
                      value:
                        'Para comenzar, trázate un objetivo y toma una decisión. A partir de ella podrás llevar a cabo el plan para hacerla una realidad. Tu ahorro en Cesantías será el primer paso para lograrlo.',
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
                        '¿Quieres saber cuánto debes ahorrar? ¡Descúbrelo aquí!',
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
                      value: '\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo usar tus Cesantías para educación?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Con Protección puedes hacer tus sueños realidad. Conoce aquí cómo puedes usar tus Cesantías para tu educación y la de tu familia.',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame más',
          textoCallToAction: '¿Cuánto ahorrar?',
          metatittleSeo:
            '¿Cómo usar tus cesantías para educación? Si eres Empleado',
          descripcioncalltoaction:
            '¿Quieres saber cuánto debes ahorrar? ¡Descúbrelo aquí!',
          tiempoDeLectura: null,
          contentful_id: '5SQhhmPt2TGAODy3FzhS9W',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Tu educación y la de tu familia es un factor fundamental para el bienestar de tu hogar. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Estos son los casos específicos en los que puedes usar tus Cesantías para este objetivo:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Para pagar el valor de tu matrícula en educación superior, la de tus hijos o cónyuge.',
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
                                'Puedes invertir tu ahorro en programas de educación superior, posgrados, educación continua y programas de gestión para el desarrollo humano. ',
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
                              value: 'Programas de idiomas. ',
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
                                'Para pagar las deudas para créditos educativos.',
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
                                'Para pago o compra de seguros educativos.',
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
                                'Para el ahorro programado destinado a la educación.',
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
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué es el mecanismo de protección al cesante?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            '¿Perdiste tu empleo? El Estado cuenta con un programa con el que podrás aprovechar tus Cesantías y encaminarte a un nuevo trabajo. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Cuéntame',
          textoCallToAction: 'Muéstrame cómo',
          metatittleSeo: '¿Qué es el mecanismo de protección al cesante?',
          descripcioncalltoaction: '¿Necesitas acceder al mecanismo?',
          tiempoDeLectura: null,
          contentful_id: '2h10hWWctjjIj8J4n55xQB',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Perder un empleo no implica perder la afiliación a salud y demás beneficios sociales gracias al mecanismo de protección al cesante.\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'El mecanismo de protección al cesante es una estrategia que busca beneficiar a trabajadores desempleados, con el que se garantiza por un periodo máximo de 6 meses del acceso a servicios de salud, ahorro a pensiones y subsidio familiar.',
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
                        'Además, permite acceder a servicios de intermediación y capacitación para el retorno a la vida laboral.',
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
                      value: '¿Quiénes pueden acceder? ',
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
                      marks: [],
                      value:
                        'Todos los trabajadores del sector público y privado que hayan realizado aportes a las cajas de compensación familiar durante al menos un año, continuo o discontinuo, en el transcurso de los últimos tres años, en este caso la afiliación es obligatoria.',
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
                        'Pero no solo los trabajadores dependientes pueden acceder al mecanismo. Los independientes que hayan hecho aportes por un periodo de dos años en los últimos tres años también podrán disfrutar de este beneficio. ',
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
                      value: '¿Qué beneficios contempla?',
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
                                'Pago de cotización de salud a la EPS en la que te encuentras afiliado. ',
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
                                'Pago de la cotización al fondo de pensiones al que te encuentras vinculado. ',
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
                                'Cuota monetaria de subsidio familiar, en caso de que tuvieras derecho a ella. ',
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
                                'Acceso a la red de servicios de empleo, orientación ocupacional y capacitación.',
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
                                'En caso de haber destinado ahorros voluntarios de Cesantías, un incentivo monetario proporcional a lo ahorrado.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Para qué puedes retirar tus Cesantías?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Como empleado, las Cesantías pueden servirte para alcanzar tus sueños. Conoce cómo aquí.',
          linkCallToAction: null,
          textoCallToActionBite: 'Aprende más',
          textoCallToAction: 'Muéstrame cómo',
          metatittleSeo: '¿Para qué retirar las cesantías si eres Empleado?',
          descripcioncalltoaction: '¿Quieres retirar tus cesantías?',
          tiempoDeLectura: null,
          contentful_id: '5cjVo81fAXzvsnlo19Xmqi',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Las Cesantías son un ahorro para el momento en el que pierdas tu empleo. Como empleado, también las puedes usar para alcanzar tus metas ya que las puedes retirar para:\n'
          },
          cuerpocontenido: {
            json: {
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Comprar una vivienda, terreno o un lote. ',
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
                              value: 'Mejorar o remodelar tu casa.',
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
                                'Construir tu casa en un terreno que ya tengas.',
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
                              value: 'Pagar los impuestos de tu vivienda.',
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
                                'Comprar títulos de vivienda adquiridos por tus empleadores con entidades públicas o privadas.',
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
                                'Pagar los cánones del leasing de tu vivienda. ',
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
                      marks: [],
                      value: '\nCon las Cesantías también puedes:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Pagar la matrícula de escuelas, colegios o universidades públicas.',
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
                                'Costear la matrícula de cualquier institución privada de educación superior.',
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
                              value: 'Abonar a la deuda del Icetex.',
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
                                'Pagar la matrícula de las instituciones de educación media o técnica académica con certificación internacional. ',
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
                                'Pagar los programas de Instituciones de Educación para el Trabajo y el Desarrollo Humano, antes denominada, educación no formal. ',
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
                              value: 'Estudiar idiomas.',
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
                      marks: [],
                      value:
                        'Ten en cuenta que tus Cesantías también pueden pagar para la educación de tu pareja o tus hijos.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo usar las Cesantías para vivienda?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: '¿Cómo hacerlo?',
          descripcioncorta:
            'Las Cesantías te acercan a tu nueva vivienda. Conoce cómo puedes aprovecharlas. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: '¿Cuánto debo ahorrar?',
          metatittleSeo:
            'Usar las cesantías para vivienda: Cesante o Independiente',
          descripcioncalltoaction: 'Da el siguiente paso',
          tiempoDeLectura: null,
          contentful_id: '7ykETBxGAW4NT9xKPeNoNt',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Si estás pensando en comprar vivienda, puedes contar con tus Cesantías. Recuerda que ellas pueden servirte para alcanzar tus metas.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'La compra de vivienda es una de las inversiones más significativas de tu vida. Para lograr esta meta, necesitas planeación y disciplina financiera basadas en el ahorro.d',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Debes fijarte una meta: ¿cuándo quieres comprar tu casa?, ¿cuánto estás dispuesto a pagar por ella?',
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
                                'Luego de esto, debes pensar en un plan de ahorro que te acerque financieramente al proyecto de hacerte a una casa. Define un monto a ahorrar cada mes. Puedes optar por las Cesantías voluntarias o bien dejar en Protección las que ya te pagaron tus exempleadores. ',
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
                                'Después, mira tus ingresos y gastos. Piensa cómo podrías incrementar tus entradas de dinero y cómo podrías reducir algunos gastos. ',
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
                                'Revisa en tu presupuesto los gastos innecesarios u hormiga; es decir, aquellos que no cuidas como salidas, taxis, comidas por fuera del hogar y similares en los que podrías estar incurriendo.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías para vivienda?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Estos son los pasos y requisitos que debes llenar para aprovechar tus Cesantías en vivienda. ',
          linkCallToAction: 'google.com',
          textoCallToActionBite: 'Muéstrame',
          textoCallToAction: 'Inmoviliza tus Cesantías',
          metatittleSeo: '¿Sabes cómo retirar tus cesantías para vivienda?',
          descripcioncalltoaction:
            '¿Estás listo para retirar tus Cesantías para vivienda? Da el siguiente paso… ',
          tiempoDeLectura: null,
          contentful_id: '7Kbn84oif8fKDBwG2ZwujP',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Si tomaste la decisión de usar tus Cesantías en vivienda, mira los pasos para retirarlas. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Ya que decidiste invertir tus Cesantías en vivienda, debes conocer los pasos que debes seguir para retirarlas de acuerdo al tipo de retiro y los canales:',
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
                      value: 'Por tipo de retiro',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Para compra o remodelación de vivienda',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida al fondo de Cesantías autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Del mismo modo, debe incluir los datos del empleador (razón social, tipo de identificación y número).',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: ' ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada.',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Para pago de leasing habitacional ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. ',
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
                                'La carta debe informar que el retiro autorizado por el empleador será destinado al pago de obligaciones adquiridas por leasing.',
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
                            'Para solicitudes en Oficinas de servicio, la carta podrá ser una copia. Para solicitudes en internet, se pueden adjuntar cartas digitalizadas.',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
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
                      value: 'Para retiros por subsidio familiar de vivienda',
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
                                'El retiro de Cesantías por el otorgamiento del subsidio de vivienda está sujeta a las condiciones establecidas por las entidades depositarias del ahorro. Por lo que debes validar ante ellas los requisitos exigidos para este trámite.',
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
                                'Del mismo modo, el pago dependerá de la destinación que el afiliado quiera darle al subsidio familiar de vivienda. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Para compra de vivienda',
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
                      marks: [],
                      value:
                        'El pago de las Cesantías se hará directamente a la entidad vendedora de la vivienda, con la presentación previa de la copia de la promesa de compraventa, la carta de asignación del subsidio y carta de autorización del afiliado para girar los dineros.',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Constancia de la inmovilización de las Cesantías por concepto de vivienda. ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Construcción de vivienda en sitio propio',
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
                      marks: [],
                      value:
                        'Se hará el pago directamente al contratista, persona o entidad a favor de quien se inmovilizaron las Cesantías, previa presentación de la copia del contrato de construcción, carta de asignación del subsidio y carta de autorización del afiliado para girar los dineros. ',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Constancia de la inmovilización de las Cesantías por concepto de vivienda. ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. Para solicitudes en Oficinas de Servicio, la carta podrá ser una copia. Para solicitudes en internet, se pueden adjuntar cartas digitalizadas. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Mejoramiento de vivienda',
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
                      marks: [],
                      value:
                        'Se hará el pago al contratista, persona o entidad en favor de quien se inmovilizaron las Cesantías, previa presentación de la copia del contrato de mejoramiento, carta de asignación del subsidio y carta de autorización del afiliado para girar los dineros. Para ello se debe presentar:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Constancia de la inmovilización de las Cesantías por concepto de vivienda. Cuando las Cesantías están inmovilizadas, el pago solo puede hacerse por las Oficinas de Servicio de Protección. ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. Para solicitudes en Oficinas de servicio, la carta podrá ser una copia. Para solicitudes en internet, se pueden adjuntar cartas digitalizadas. ',
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
                      marks: [],
                      value:
                        '<Destacado>Cuando las Cesantías están inmovilizadas, el pago solo puede hacerse por las Oficinas de Servicio de Protección. ',
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
                      value: 'Canales para retiros:',
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
                                'En el portal transaccional puedes solicitar el retiro por cualquier monto. El pago se hará en la vía que elijas.',
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
                                'Por medio del portal no transaccional, puedes retirar un monto hasta por 3 SMLMV (salarios mínimos legales mensuales vigentes). Este pago se hará en la vía que escojas.',
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
                                'En los PagaFácil podrás retirar un monto hasta por 10 SMLMV (salarios mínimos legales mensuales vigentes) en efectivo.',
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
                                'También puedes optar por las Oficinas Protección. Si estás trabajando y cuentas con la autorización del empleador, podrás solicitar el retiro por cualquier monto y se pagará en cheque, transferencia o por ventanilla en las sucursales de los bancos Davivienda y Bancolombia. ',
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
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo usar tus Cesantías para educación?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Con Protección puedes hacer tus sueños realidad. Conoce aquí cómo puedes usar tus Cesantías para tu educación y la de tu familia.',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: '¡Descúbrelo aquí!',
          metatittleSeo:
            '¿Cómo usar tus cesantías para educación? Si eres Empleado',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '6VayIRbLZHiIADvP2T1X74',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Tu educación y la de tu familia es un factor fundamental para el bienestar de tu hogar. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Tu educación y la de tu familia es un factor fundamental para el bienestar de tu hogar. ',
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
                        'Estos son los casos específicos en los que puedes usar tus Cesantías para este objetivo:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Para pagar el valor de tu matrícula en educación superior, la de tus hijos o cónyuge.',
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
                                'Puedes invertir tu ahorro en programas de educación superior, posgrados, educación continua y programas de gestión para el desarrollo humano. ',
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
                              value: 'Programas de idiomas. ',
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
                                'Para pagar las deudas para créditos educativos.',
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
                                'Para pago o compra de seguros educativos.',
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
                                'Para el ahorro programado destinado a la educación. ',
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
                      marks: [],
                      value: '¿Quieres saber cuánto debes ahorrar?',
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
                      value: '\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías para educación?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Como independiente y cesante también puedes apoyar tus proyectos educativos junto a Protección. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: 'Ir a la zona transaccional',
          metatittleSeo: 'Retirar tus cesantías para educación',
          descripcioncalltoaction: '¿Estás listo para retirar tus Cesantías?',
          tiempoDeLectura: null,
          contentful_id: '726uLfLeZM7B1ZspgLFYOU',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Como afiliado a Cesantías como cesante o independiente, puedes hacer el retiro de tus Cesantías directamente en www.proteccion.com.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'En el sitio web de Protección podrás elegir entre recibir el dinero en tu cuenta bancaria o solicitar el retiro en un cheque y reclamarlo en una Oficina de Servicio. Para hacerlo, debes seguir los siguientes pasos: ',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Ingresa a la zona transaccional de afiliados con tu clave personal ',
                              nodeType: 'text'
                            },
                            {
                              data: {
                                uri:
                                  'https://protecciond1.b2clogin.com/ProteccionD1.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_signin&client_id=a73df676-c8c9-48b7-ab28-0c23c676ae4f&redirect_uri=https%3A%2F%2Fwww.proteccion.com%2Fwps%2Fportal%2Fproteccion%2Fweb%2Fhome%2Fingreso-afiliados-pensionados%2F&scope=openid&response_type=id_token&response_mode=form_post&prompt=login'
                              },
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value: 'haciendo clic aquí.',
                                  nodeType: 'text'
                                }
                              ],
                              nodeType: 'hyperlink'
                            },
                            {
                              data: {},
                              marks: [],
                              value: '',
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
                                'Busca en el menú izquierdo Transacciones Cesantías / Retiros de Cesantías.',
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
                                'Si tienes varias cuentas, selecciona aquella de la que vas a hacer el retiro.',
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
                              value: 'Escribe el valor por retirar. ',
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
                                'Elige el medio de pago. Recuerda que puedes escoger entre transferencia electrónica a una cuenta bancaria registrada o retiro en cheque. ',
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
                              content: [
                                {
                                  data: {},
                                  content: [
                                    {
                                      data: {},
                                      marks: [],
                                      value:
                                        'Si escogiste la transferencia electrónica como medio de pago, debes elegir la cuenta bancaria que hayas matriculado previamente a la cual quieres que se le desembolse el dinero.',
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
                                        'Si seleccionas retiro en cheque, debes elegir la oficina en la que deseas reclamar el cheque. No olvides que debes reclamarlo a más tardar 30 días después de la solicitud. ',
                                      nodeType: 'text'
                                    }
                                  ],
                                  nodeType: 'paragraph'
                                }
                              ],
                              nodeType: 'list-item'
                            }
                          ],
                          nodeType: 'ordered-list'
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
                                'Verifica todos los datos sean correctos y haz clic en “Confirmar el retiro”.',
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
                                'Te enviaremos la confirmación a tu celular y a tu correo electrónico.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué es un portafolio?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            '¿Sabías que existen dos portafolios para tus Cesantías? Conócelos y elige la mejor forma de administrarlos.',
          linkCallToAction: null,
          textoCallToActionBite: null,
          textoCallToAction: '¿Cómo cambiar de portafolio?',
          metatittleSeo: '¿Qué es un portafolio de inversión?',
          descripcioncalltoaction:
            'Ya que sabes qué son los portafolios, aprende cómo cambiarlos.',
          tiempoDeLectura: null,
          contentful_id: '7Aj4bDcmiRrjbSAJ4xTdYS',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Los portafolios de Cesantías son la herramienta con la que puedes incrementar o conservar la rentabilidad de tu ahorro en Cesantías de acuerdo con tus metas.\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Por ejemplo, si quieres conservarlas como un respaldo en caso de quedarte sin empleo o piensas en comprar vivienda dentro de unos años, puedes elegir el ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'portafolio a largo plazo. ',
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
                        'Con él tendrás una rentabilidad superior a la que obtendrías en el portafolio de corto plazo.',
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
                        'En cambio, si piensas retirar en menos de un año las Cesantías para tu educación o la compra de vivienda, puedes elegir el ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'portafolio a corto plazo. ',
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
                        'Con este se evitan los riesgos de pérdida de rentabilidad en los retiros, pues las inversiones tienen menor riesgo y una rentabilidad un poco menor que la de un portafolio de largo plazo.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Por qué y cómo cambiar de portafolio?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Optimiza los rendimientos de tus cesantías eligiendo un portafolio acorde con tus metas. ',
          linkCallToAction: null,
          textoCallToActionBite: null,
          textoCallToAction: 'Cambiar mi portafolio',
          metatittleSeo: '¿Por qué y cómo cambiar de portafolio?',
          descripcioncalltoaction:
            'Ahora que sabes qué son, ¿quieres hacer una recomposición de portafolios?',
          tiempoDeLectura: null,
          contentful_id: '6jocC19hxizlFsNxtnEeeb',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Para elegir el portafolio que más te convenga tienes que tener claro lo que quieres hacer con este ahorro, pues de ello dependerá gran parte de tu decisión. \n\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        '¿Corto o largo plazo? Está claro que uno te da más rentabilidad pero tiene un mayor riesgo. \r\nEntonces, si tienes un proyecto que puede esperar lo recomendado es que elijas el largo plazo. Pero, si por el contrario necesitas tus Cesantías en poco tiempo, el corto plazo será tu mejor elección.\r',
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
                      value: 'Conoce aquí cómo cambiar tu portafolio:',
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
                      value: '',
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
                      value: '[INFOGRAFÍA]',
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
                      value: 'Elige el portafolio que más te convenga.',
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
                      value: 'Puedes optar entre:',
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
                      value: 'Largo plazo: ',
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
                        'Si quieres ahorrar tus Cesantías para estar preparado ante una pérdida de empleo. ',
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
                        'Si piensas comprar vivienda dentro de un par de años. ',
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
                        'Estás preparándote para pagar la educación tuya o de tus hijos.',
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
                        'Aumentarás la rentabilidad de tu ahorro a largo plazo.',
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
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Corto plazo:',
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
                        'Piensas en retirar tus Cesantías en menos de un año. ',
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
                      value: 'Estás pagando la educación de tus hijos. ',
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
                        'Te alistas para pagar mejoras en tu vivienda o estás en la recta final de la compra de una nueva.',
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
                      value: 'Evitarás la pérdida de valor en el corto plazo. ',
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
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Recomposición:',
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
                        'Recuerda que también puedes fraccionar el ahorro de tus Cesantías, eligiendo cómo quieres que se distribuyan. Cada 6 meses podrás modificar tu portafolio a largo plazo y solo una vez al año podrás cambiar tu portafolio a largo plazo.',
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
                        'En caso de que no le informes a Protección cómo distribuir tus Cesantías antes del 16 de agosto de cada año, el fondo trasladará todo tu ahorro al portafolio a largo plazo.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Qué es la inmovilización de las Cesantías y cómo podría servirte?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Si quieres usar tus Cesantías para adquirir vivienda, deberás inmovilizarlas. ',
          linkCallToAction:
            'https://asistencia.webv2.allus.com.co/WebAPI802/ClicktoCallProteccion/ClicktoCall/customer.jsp',
          textoCallToActionBite: 'Cuéntamelo todo',
          textoCallToAction: ' Comunícate con nuestros asesores',
          metatittleSeo:
            'La Inmovilización de cesantías y cómo podría servirte',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '3twLfLO3fsuqjPv9woLUUf',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'La inmovilización de las Cesantías es un paso del proceso de postulación al subsidio de vivienda que entrega el Gobierno Nacional por medio de las cajas de compensación familiar y la caja de vivienda popular.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '¿Quién puede hacerlo?',
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
                      marks: [],
                      value:
                        'Como los trabajadores cuyas familias tengan un ingreso menor a los 4 salarios mínimos mensuales son quienes se pueden postular para obtener un subsidio de vivienda, solo ellos pueden solicitar la inmovilización de sus Cesantías.',
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
                      value: '¿Cómo inmovilizarlas?',
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
                      marks: [],
                      value:
                        'El proceso es simple: basta con que el afiliado se acerque a cualquiera de las Oficinas de Servicio de Protección y allí indique el monto de las Cesantías que quiere inmovilizar. Allí le expedirán un certificado que debe presentar ante la entidad en la que esté solicitando el subsidio de vivienda. ',
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
                        '¿Cómo levantar la inmovilización de las Cesantías?',
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
                      marks: [],
                      value:
                        'Hay tres escenarios en los que se podría necesitar el levantamiento de las Cesantías:',
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
                              value: 'Por asignación del subsidio: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Una vez se entrega el subsidio para el mejoramiento, ampliación o compra de vivienda, las Cesantías inmovilizadas se usarán para el pago de la transacción siempre y cuando el titular presente copia de la promesa de compraventa, contrato de construcción o mejoramiento, copia de la carta de asignación del subsidio y la autorización del trabajador. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Por no asignación del subsidio: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'El afiliado deberá contar con la autorización de la autoridad otorgante, como la caja de compensación o la caja de vivienda popular. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value:
                                'Por renuncia a la postulación del subsidio: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'El afiliado tendrá que remitirse a la entidad ante la que estaba tramitando su postulación (como la caja de compensación familiar) y solicitar una autorización escrita para que levantar la inmovilización con la que estaba aspirando al subsidio.',
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
                      marks: [],
                      value: '¿Tienes dudas?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué es el embargo de las Cesantías y por qué ocurre?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Entérate de las circunstancias que pueden llevar al embargo de tus Cesantías. ',
          linkCallToAction:
            'https://asistencia.webv2.allus.com.co/WebAPI802/ClicktoCallProteccion/ClicktoCall/customer.jsp',
          textoCallToActionBite: 'Quiero saberlo',
          textoCallToAction: 'Llama a un asesor',
          metatittleSeo: 'El Embargo de cesantías y por qué ocurre',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '2iWtieOqgqVgyRzkesMTVo',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'El embargo es una orden expedida por un juez mediante la cual se retienen las Cesantías a favor de una empresa o cooperativa. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Hay tres tipos de embargos:',
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
                              value: 'Por alimentos: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Cobija hijos menores de edad o hasta los 25 años que sean estudiantes. La medida, que requiere un oficio u orden judicial, no puede embargar más del 50 % de las Cesantías y se cancela mediante la expedición de un oficio del juzgado que impuso la retención.',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Por liquidación conyugal: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Beneficia a los cónyuges en proceso de disolución de la unión marital. Puede ser expedida por un juez o un comisario de familia mediante un oficio en el que informa si el embargo es del 50 % o el 100 % de las cuentas y si la medida se dio en una conciliación o si es de pago inmediato. El despacho que ordenó el embargo debe emitir un oficio ordenando el levantamiento de la medida para cancelar esta restricción.',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Por deudas con cooperativas: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'En caso de que el trabajador incumpla sus compromisos con una deuda adquirida, un juez puede emitir una orden de embargo que en ningún caso podrá ser mayor al 50 % del valor disponible. Para levantarlo, basta con un oficio del juzgado que impuso la medida y el paz y salvo de la cooperativa. ',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '¿Tienes dudas?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo obtener tus extractos de Cesantías?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Sigue estos sencillos pasos para descargar los extractos de tus Cesantías de Protección. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: '¡Actualiza tus datos!',
          metatittleSeo: '¿Cómo obtener tus extractos de cesantías?',
          descripcioncalltoaction:
            '¿Quieres recibir los extractos de tus Cesantías en la comodidad de tu computador o celular?',
          tiempoDeLectura: null,
          contentful_id: '68k4AOYQ2wNvoRhw4RmlNt',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Los extractos de Cesantías son los documentos que te permitirán tener un control de la evolución de tu ahorro.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Si quieres obtenerlos, solo basta con que actualices tus datos en el portal transaccional. Allí podrás elegir si quieres recibirlos por un medio físico o darle una mano al planeta y recibirlos en tu correo electrónico.',
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
                        'Recuerda que durante el año Protección emite dos extractos en abril y octubre. En el de abril podrás ver tus movimientos entre ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'el 1 de octubre y el 30 de marzo. ',
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
                        'En el de octubre podrás ver los movimientos ocurridos entre el ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: '1 de abril y el 30 de septiembre ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: 'en tus cuentas de Cesantías.',
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
                        'También puedes consultar los extractos de otros años en el portal transaccional. Solo tienes que ingresar con tu usuario y contraseña. ',
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
                        'Luego, haz clic en el botón “Certificados y extractos”, ubicado en el menú de la izquierda de la pantalla. Luego, haz clic en el botón “Cesantías” y luego baja hasta el botón “consultar” ubicado frente a extractos.',
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
                        'Finalmente, haz elige el año y periodo que quieras ver. Una vez los hayas elegido, oprime “Consultar”. Se abrirá una ventana emergente en el navegador en la que podrás ver el PDF con la información de tus Cesantías.  ',
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
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'Puedes recibir tus extractos en tu correo electrónico o por medio físico. Solo necesitas actualizar tus datos. ',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué son los extractos de Cesantías y cómo leerlos?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            'Conoce los extractos de Cesantías, aprende a leerlos y hazle un seguimiento a este ahorro. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Conócelos',
          textoCallToAction: 'Cómo obtenerlos',
          metatittleSeo: '¿Cómo obtener tus extractos de cesantías?',
          descripcioncalltoaction: '¿Quieres descargarlos?',
          tiempoDeLectura: null,
          contentful_id: '5WmDi3DUOLWYIUuN9OwmO8',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Los extractos de Cesantías son los documentos que te permitirán tener un control de la evolución de tu ahorro.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Los extractos de Cesantías son la herramienta en la que puedes hacerle un seguimiento a este ahorro que tienes en Protección. ',
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
                      value: 'Conócelos un poco más y aprende a leerlos. ',
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
                      value: '<Infográfico>',
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
                        'Los extractos son los documentos que emite cada seis meses Protección para contarle a sus afiliados en Cesantías los movimientos en sus cuentas.  ',
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
                        'Estos pueden llegarles a sus afiliados por Cesantías en abril y octubre. El de abril registrará los movimientos de las cuentas entre ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'el 1 de octubre y el 30 de marzo. ',
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
                        'Para el extracto de octubre, se registrarán los movimientos ocurridos entre el ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: '1 de abril y el 30 de septiembre. ',
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
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'Si tienes más de una cuenta de Cesantías, recibirás un extracto por cada cuenta. ',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'En caso tal de que hayas roto tu vínculo laboral con tu empleador y no hayas retirado la totalidad de tus Cesantías, recibirás un extracto de Cesantías voluntarias. ',
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
                      value: '¿Cómo leerlo?',
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
                      value: 'Aquí encontrarás tus datos.',
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
                        'En esta parte verás un resumen que tiene un saldo inicial, aportes, retiros, rendimientos y un aporte final.',
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
                        'Esta torta representa la distribución de tus Cesantías entre el portafolio de largo y el de corto plazo.',
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
                        'En la página siguiente verás un saldo inicial para el periodo, los aportes y retiros que hayas realizados. Aquí verás el rendimiento, es decir, cuánto han variado tus Cesantías. ',
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
                        'En este sector verás descritos los movimientos en la subcuenta de corto plazo y la de largo plazo.',
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
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Cuánto debes ahorrar para invertir tus Cesantías en educación?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta: null,
          linkCallToAction: null,
          textoCallToActionBite: null,
          textoCallToAction: 'Muéstramelos ya',
          metatittleSeo: null,
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '7v09njktD3kdVHtuSo0S2X',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Alcanzar tus metas educativas es una de las inversiones más importantes de la vida, además estas contribuyen al desarrollo y bienestar de toda la familia.\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Para lograrlo ten en cuenta que:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Fijar una meta y un plazo es fundamental para cumplir tus objetivos.',
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
                                'Conocer todos los requisitos y cumplirlos te ayudará a agilizar los procesos y tener un resultado exitoso.',
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
                                'Es fundamental tener claro lo que se quiere lograr: el programa a cursar, el lugar donde estudiar y la duración.',
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
                            'Nunca es tarde para empezar. De hecho, lo importante es comenzar a ahorrar y construir un patrimonio que te ayude a hacer realidad todos tus sueños. ¡En Protección podemos ayudarte! Descubre aquí cómo.',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Calcula cuánto es el monto total que debes ahorrar para hacer realidad este sueño:',
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
                      value: '<link a simulador>',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        '\n\nConoce los errores que debes evitar a la hora de usar tus Cesantías para educación.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías para vivienda?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: 'Por tipo de retiro',
          descripcioncorta:
            'Estos son los pasos y requisitos que debes llenar para aprovechar tus Cesantías en vivienda. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Quiero ver los pasos',
          textoCallToAction: ' Inmoviliza tus Cesantías',
          metatittleSeo: null,
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '66N5lTW8JVzekerXR26ssq',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Ya que decidiste invertir tus Cesantías en vivienda, debes conocer los pasos que debes seguir para retirarlas de acuerdo al tipo de retiro y los canales:'
          },
          cuerpocontenido: {
            json: {
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
                      value: 'Para compra o remodelación de vivienda:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida al fondo de Cesantías autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Del mismo modo, debe incluir los datos del empleador (razón social, tipo de identificación y número).',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: ' ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada.',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Para pago de leasing habitacional:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. ',
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
                                'La carta debe informar que el retiro autorizado por el empleador será destinado al pago de obligaciones adquiridas por leasing.',
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
                            'Para solicitudes en Oficinas de servicio, la carta podrá ser una copia. Para solicitudes en internet, se pueden adjuntar cartas digitalizadas.',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
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
                      value: 'Para retiros por subsidio familiar de vivienda:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'El retiro de Cesantías por el otorgamiento del subsidio de vivienda está sujeta a las condiciones establecidas por las entidades depositarias del ahorro. Por lo que debes validar ante ellas los requisitos exigidos para este trámite.',
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
                                'Del mismo modo, el pago dependerá de la destinación que el afiliado quiera darle al subsidio familiar de vivienda. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Para compra de vivienda:',
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
                        'El pago de las Cesantías se hará directamente a la entidad vendedora de la vivienda, con la presentación previa de la copia de la promesa de compraventa, la carta de asignación del subsidio y carta de autorización del afiliado para girar los dineros.',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Constancia de la inmovilización de las Cesantías por concepto de vivienda. ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Construcción de vivienda en sitio propio:',
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
                        'Se hará el pago directamente al contratista, persona o entidad a favor de quien se inmovilizaron las Cesantías, previa presentación de la copia del contrato de construcción, carta de asignación del subsidio y carta de autorización del afiliado para girar los dineros. ',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Constancia de la inmovilización de las Cesantías por concepto de vivienda. ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. Para solicitudes en Oficinas de Servicio, la carta podrá ser una copia. Para solicitudes en internet, se pueden adjuntar cartas digitalizadas. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Mejoramiento de vivienda: ',
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
                        'Se hará el pago al contratista, persona o entidad en favor de quien se inmovilizaron las Cesantías, previa presentación de la copia del contrato de mejoramiento, carta de asignación del subsidio y carta de autorización del afiliado para girar los dineros. Para ello se debe presentar:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Constancia de la inmovilización de las Cesantías por concepto de vivienda. Cuando las Cesantías están inmovilizadas, el pago solo puede hacerse por las Oficinas de Servicio de Protección. ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. Para solicitudes en Oficinas de servicio, la carta podrá ser una copia. Para solicitudes en internet, se pueden adjuntar cartas digitalizadas. ',
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
                            'Cuando las Cesantías están inmovilizadas, el pago solo puede hacerse por las Oficinas de Servicio de Protección. ',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
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
                      value: 'Canales para retiros:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'En el portal transaccional puedes solicitar el retiro por cualquier monto. El pago se hará en la vía que elijas.',
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
                                'Por medio del portal no transaccional, puedes retirar un monto hasta por 3 SMLMV (salarios mínimos legales mensuales vigentes). Este pago se hará en la vía que escojas.',
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
                                'En los PagaFácil podrás retirar un monto hasta por 10 SMLMV (salarios mínimos legales mensuales vigentes) en efectivo.',
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
                                'También puedes optar por las Oficinas Protección. Si estás trabajando y cuentas con la autorización del empleador, podrás solicitar el retiro por cualquier monto y se pagará en cheque, transferencia o por ventanilla en las sucursales de los bancos Davivienda y Bancolombia.  ',
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
                      marks: [],
                      value:
                        'Ya que conoces cómo retirar tus Cesantías para vivienda, da el siguiente paso…',
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
                      value: '\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué es la pignoración de Cesantías?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta: null,
          linkCallToAction:
            'https://asistencia.webv2.allus.com.co/WebAPI802/ClicktoCallProteccion/ClicktoCall/customer.jsp',
          textoCallToActionBite: 'Explícame',
          textoCallToAction: 'Llama a un asesor',
          metatittleSeo: null,
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '2Hg2jZISXRoTNOev3jaVaw',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'La pignoración es un proceso mediante el cual se ponen las Cesantías como garantía para un préstamo entregado por el empleador, cajas de compensación familiar, fundaciones, cooperativas u otras instituciones. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'En el caso de los empleadores, la pignoración solo es procedente para préstamos de vivienda dirigidos a: ',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'La compra de vivienda.',
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
                                'La compra de un lote con el propósito de construir vivienda.',
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
                                'El pago de gravámenes hipotecarios o impuestos que afecten la casa o terreno del afiliado o su cónyuge. ',
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
                                'Adquisición de títulos de vivienda sobre planos contratadas con entidades públicas o privadas. ',
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
                                'Ampliación, remodelación o mejora de la vivienda del trabajador o su cónyuge.',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: '¿Cómo se pignoran las Cesantías?',
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
                      marks: [],
                      value:
                        'Para pignorar las Cesantías, se debe enviar los siguientes documentos a Protección:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Solicitud escrita del empleador, indicando nombres y apellidos del afiliado, documento de identidad y valor a pignorar. ',
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
                                'Documento que contenga acuerdo de pignoración celebrado entre empleador y trabajador.',
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
                      marks: [],
                      value:
                        'En el caso de los afiliados asociados a una cooperativa, la notificación a Protección debe hacerla el representante legal de la cooperativa.',
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
                      value:
                        '¿Cómo se levanta una pignoración de las Cesantías?',
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
                      marks: [],
                      value:
                        'Cuando culmina el contrato, se debe proceder a verificar el saldo de la deuda con el empleador. En caso de que dicha obligación haya sido cancelada, el empleador deberá enviar un paz y salvo a Protección para pedir el levantamiento de la pignoración. ',
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
                        'En caso de que se trate de un trabajador que sea afiliado a una cooperativa, el representante legal debe comunicar a Protección la cancelación de la pignoración de las Cesantías del beneficiario. ',
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
                      value: '¿Tienes dudas?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo expedir los certificados de Cesantías?',
          tituloCorto: null,
          textoCierre: null,
          subtitulo: null,
          descripcioncorta:
            '¿Necesitas un certificado? Aquí te contamos cómo podrás descargarlo. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Aprende aquí',
          textoCallToAction: '¡Descárgalo ya!',
          metatittleSeo: null,
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '6tY87D1HzbHQn4BXjJ0TOS',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Tener contigo los certificados de Cesantías que necesitas es más fácil de lo que imaginas.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: ' Conoce aquí los paso que debes seguir:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Entra a nuestro sitio web ',
                              nodeType: 'text'
                            },
                            {
                              data: {
                                uri: 'http://www.proteccion.com'
                              },
                              content: [
                                {
                                  data: {},
                                  marks: [
                                    {
                                      type: 'underline'
                                    }
                                  ],
                                  value: 'www.proteccion.com',
                                  nodeType: 'text'
                                }
                              ],
                              nodeType: 'hyperlink'
                            },
                            {
                              data: {},
                              marks: [],
                              value: '',
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
                              value: 'Busca la sección "Soluciones a un clic".',
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
                              value: 'Selecciona la opción "Certifácil".',
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
                              value: 'Elige el producto Cesantías',
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
                              value: 'Verifica el certificado que necesites.',
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
                                'Selecciona la opción que más te conviene: descargarlo en tu computador o enviarlo a tu correo electrónico.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '¿Necesitas algún certificado?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      }
    ]
  },
  allContentfulProducto: {
    edges: [
      {
        node: {
          titulo: 'Cesantías',
          contenido: [
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                }
              ],
              urlSeo: 'cesantias/tus-cesantias-proteccion/para-que-son/cesante',
              contentful_id: '12wxz9mZz9Ok44M64PSSXV',
              descripcioncorta:
                'Si se terminó tu contrato o cambiaste de empleo, te mostramos algunas opciones que te ayudarán a aprovechar tu ahorro.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/4ZxqAfFiWXWYYIGpyiB4M9/e4a3ea4633712e21dfa88cdeffb20f25/Para-que__-son-las-cesanti__as.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-20T19:41:49.180Z',
              titulo: '¿Para qué son las Cesantías?',
              textoIntroductorio: null,
              textoCallToActionBite: null,
              tituloCorto: null
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Independiente'
                },
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo:
                'cesantias/tus-cesantias-proteccion/para-que-son/empleado-independiente',
              contentful_id: '3yDxxmBbyiT6GPOnG2Dj5O',
              descripcioncorta:
                'Conoce aquí la manera correcta de utilizar tus Cesantías',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/4ZxqAfFiWXWYYIGpyiB4M9/e4a3ea4633712e21dfa88cdeffb20f25/Para-que__-son-las-cesanti__as.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-20T19:41:16.741Z',
              titulo: '¿Para qué son las Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              contentful_id: '5WmDi3DUOLWYIUuN9OwmO8',
              descripcioncorta:
                'Conoce los extractos de Cesantías, aprende a leerlos y hazle un seguimiento a este ahorro. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/1FEyXdQi1LFHytoOgH3lHM/aa4f3839cbef921502fdf971a38f6425/PRUEBA-3.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T14:59:48.956Z',
              titulo: '¿Qué son los extractos de Cesantías y cómo leerlos?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: 'cesantias/tus-cesantias-proteccion/que-son',
              contentful_id: '2OJRVMtRN6wT6xJnlJc4sg',
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              descripcioncorta:
                'Conoce todo lo que debes saber sobre las Cesantías y comienza a ahorrar junto a Protección.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/4GeNMRpbqcvjWIIHZEMeBK/70c178a5986fc320b73846a3b328c214/que_son-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-20T19:22:41.188Z',
              titulo: '¿Qué son las Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              textoIntroductorio: null,
              textoCallToActionBite: null,
              tituloCorto: null,
              contentful_id: '7Aj4bDcmiRrjbSAJ4xTdYS',
              descripcioncorta:
                '¿Sabías que existen dos portafolios para tus Cesantías? Conócelos y elige la mejor forma de administrarlos.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/1WZcOJ5EYotpoEdKogYLjH/fa40c22d9dc06fc46f9b6759ea91ffcf/portafolio-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T15:52:41.326Z',
              titulo: '¿Qué es un portafolio?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              contentful_id: '3twLfLO3fsuqjPv9woLUUf',
              descripcioncorta:
                'Si quieres usar tus Cesantías para adquirir vivienda, deberás inmovilizarlas. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/40teFxlZuEofqt9N1kqyvS/24488ae3798ff6f6e2f8cc571ab79d53/certificados_solicitud-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T15:43:02.600Z',
              titulo:
                '¿Qué es la inmovilización de las Cesantías y cómo podría servirte?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: null,
              contentful_id: '5cjVo81fAXzvsnlo19Xmqi',
              textoIntroductorio: null,
              textoCallToActionBite: null,
              tituloCorto: null,
              descripcioncorta:
                'Como empleado, las Cesantías pueden servirte para alcanzar tus sueños. Conoce cómo aquí.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/mEyo2dN3yOgL8XDzlffZV/5c4c06b360efcd89478c2780d6ec3bfb/para_que_se_retiran.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T16:14:47.148Z',
              titulo: '¿Para qué puedes retirar tus Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                }
              ],
              urlSeo: 'para-que-retirar-cesantias',
              contentful_id: '45hvk5smrzNIClX4qNW6O2',
              textoIntroductorio: null,
              textoCallToActionBite: null,
              tituloCorto: null,
              descripcioncorta:
                'Como cesante, las Cesantías pueden servirte para alcanzar tus sueños. Conoce cómo aquí',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/6f2dc87fccaf36bf94c1cfc7c6eacc00/para_que_son-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-11T20:33:38.042Z',
              titulo: '¿Para qué puedes retirar tus Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: null,
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              contentful_id: '5SQhhmPt2TGAODy3FzhS9W',
              descripcioncorta:
                'Con Protección puedes hacer tus sueños realidad. Conoce aquí cómo puedes usar tus Cesantías para tu educación y la de tu familia.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/5fq2A2WyEWx86tkHSkSquF/b5dc27e9bb4023c24a546c9e23d0ee26/como-usarlas-para-educacio__n-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T16:27:30.017Z',
              titulo: '¿Cómo usar tus Cesantías para educación?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: null,
              contentful_id: '6VayIRbLZHiIADvP2T1X74',
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              descripcioncorta:
                'Con Protección puedes hacer tus sueños realidad. Conoce aquí cómo puedes usar tus Cesantías para tu educación y la de tu familia.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/5fq2A2WyEWx86tkHSkSquF/b5dc27e9bb4023c24a546c9e23d0ee26/como-usarlas-para-educacio__n-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T15:58:13.020Z',
              titulo: '¿Cómo usar tus Cesantías para educación?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              contentful_id: '5kL0MGvKqd3MyjGBMHhauI',
              descripcioncorta:
                'Usa tus Cesantías para educación y cumple tus sueños junto a Protección.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/5fq2A2WyEWx86tkHSkSquF/b5dc27e9bb4023c24a546c9e23d0ee26/como-usarlas-para-educacio__n-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T16:30:26.222Z',
              titulo: '¿Cómo aprovechar tus Cesantías para educación?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: null,
              textoIntroductorio: null,
              tituloCorto: null,
              contentful_id: '2XUKLJvv483VG4ZJtQpKBP',
              descripcioncorta:
                'No basta con saber quién paga tus cesantías; también debes conocer cómo sacarles provecho.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/72jxOvoPP9xotRznE4w0EC/32fc70652557f541c305999a8c42e837/como_aprovecharlas_max.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-20T15:54:21.690Z',
              titulo: '¿Cómo aprovechar tus Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              contentful_id: '687bqpw2AHfdQhkadti9qp',
              descripcioncorta:
                'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/2MhhxlrR7szESfljlk4pBb/8e5f620d9c3b9129eecd47390a441d61/Cesanti__as-en-la-declaracio__n-de-renta.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-10T22:37:15.222Z',
              titulo: 'Cesantías en la declaración de renta'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              contentful_id: '5SRgmAyGybjlE53CoyO9xE',
              descripcioncorta:
                'Si tu sueño es tu vivienda, te contamos cómo hacer un plan de ahorro para alcanzarlo.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/3JNmbR9Kwsjol4VXNcheQ6/864c92b178bae9d46eeca40a811698c2/Co__mo-ahorrar-para-mi-vivienda.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-11T14:26:21.124Z',
              titulo: '¿Cómo ahorrar para mi vivienda?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Cesante'
                }
              ],
              urlSeo: null,
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              contentful_id: 'JMgvbNPIdLpAkuktUZ1yp',
              descripcioncorta:
                'Estos son los requisitos para beneficiarte de este mecanismo mientras encuentras un nuevo empleo. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/5WEvPenNhKaDx6Wv4dmmGy/971554684d3d9dc66c3cde08f7f80205/Co__mo-acceder-al-mecanismo-de-proteccio__n-al-cesante.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-10T22:41:56.244Z',
              titulo: '¿Cómo acceder al mecanismo de protección al cesante?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              contentful_id: '1omXAGrNSZevRYD09pIh3d',
              descripcioncorta:
                'Así podrás aprovechar los beneficios tributarios que podrás disfrutar gracias a las cesantías. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/7HgBhf3WEsqR2HRCLwd05/32c743683e092739e2b4721c632bceee/C__mo-declarar-las-cesant__as-como-independiente.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-11T14:07:47.502Z',
              titulo: '¿Cómo declarar las cesantías como independiente?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              textoIntroductorio: null,
              tituloCorto: null,
              contentful_id: '7v09njktD3kdVHtuSo0S2X',
              descripcioncorta: null,
              textoCallToActionBite: null,
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/3LLpSNtugvFnOxs37JNtZd/6aee390b712b970d0d99f438dc2d827f/Cua__nto-debo-ahorrar-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-05T16:40:12.796Z',
              titulo:
                '¿Cuánto debes ahorrar para invertir tus Cesantías en educación?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              contentful_id: '2iWtieOqgqVgyRzkesMTVo',
              descripcioncorta:
                'Entérate de las circunstancias que pueden llevar al embargo de tus Cesantías. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/6NW2grKe9KakDqwWzEnE2A/4f3fd3be5de213b4db30a991fe29de7f/Embargo-que-es-y-para-que-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T15:24:07.736Z',
              titulo: '¿Qué es el embargo de las Cesantías y por qué ocurre?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: null,
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              contentful_id: '2h10hWWctjjIj8J4n55xQB',
              descripcioncorta:
                '¿Perdiste tu empleo? El Estado cuenta con un programa con el que podrás aprovechar tus Cesantías y encaminarte a un nuevo trabajo. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/40teFxlZuEofqt9N1kqyvS/24488ae3798ff6f6e2f8cc571ab79d53/certificados_solicitud-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T16:19:07.188Z',
              titulo: '¿Qué es el mecanismo de protección al cesante?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              contentful_id: '2Hg2jZISXRoTNOev3jaVaw',
              descripcioncorta: null,
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-02-28T14:56:05.042Z',
              titulo: '¿Qué es la pignoración de Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: null,
              contentful_id: '2Lh4lX3RHAEe46jOVqw1nf',
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              descripcioncorta:
                'Ahora que sabes qué son las Cesantías, debes saber quiénes deben aportar y cómo deben hacerlo. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/72ecUsgJmJT4qsznkcSKBS/e3e76640f5dc935a8e756d9e1cc93464/Quie__n-hace-los-aportes-Cua__nto-me-deben-consignar-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-16T14:15:19.732Z',
              titulo: '¿Qué son los aportes a Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Cesante'
                }
              ],
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              contentful_id: '67bLxw6kifiYyfUp0vz3df',
              descripcioncorta:
                '¿Sabías que este ahorro tiene unos intereses que puedes disfrutar? Conoce más sobre ellos.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/1tCiRIzszDECdJHAgsauDN/f0b9e081b2a754fca49711d1f5b3094f/Que__-son-los-intereses-de-las-cesanti__as.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-16T14:14:38.973Z',
              titulo: '¿Qué son los intereses de las Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: 'Cesantas/Educacion',
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              contentful_id: '3PM6cWviUO1D5QWrQhg8rA',
              descripcioncorta:
                'Como empleado puedes apoyar tus proyectos educativos junto a Protección.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/55F4l6GwoH1Vkz4qz6gJhk/dfd89facb57c125bc000c05133c733ed/como-retirar-tus-cesanti__as-para-educacion-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-26T18:58:24.144Z',
              titulo: '¿Cómo retirar tus Cesantías para educación?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              textoIntroductorio: null,
              tituloCorto: null,
              textoCallToActionBite: null,
              contentful_id: '726uLfLeZM7B1ZspgLFYOU',
              descripcioncorta:
                'Como independiente y cesante también puedes apoyar tus proyectos educativos junto a Protección. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/55F4l6GwoH1Vkz4qz6gJhk/dfd89facb57c125bc000c05133c733ed/como-retirar-tus-cesanti__as-para-educacion-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T15:57:02.458Z',
              titulo: '¿Cómo retirar tus Cesantías para educación?'
            }
          ]
        }
      }
    ]
  },
  allContentfulContenidoEducativo: {
    edges: [
      {
        node: {
          titulo:
            '¿Qué errores evitar a la hora de usar tus Cesantías para educación?',
          contentful_id: '79Ao1qDGRqLs0V3YG3pSSU',
          contenido: {
            updatedAt: '2020-03-26T14:44:23.544Z',
            titulo:
              '¿Qué errores evitar a la hora de usar tus Cesantías para educación?',
            textoIntroductorio: null,
            tituloCorto: null,
            textoCallToActionBite: null,
            descripcioncorta:
              'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
            urlSeo:
              'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
            categoriaCliente: [
              {
                descripcion: 'Cesante'
              },
              {
                descripcion: 'Independiente'
              },
              {
                descripcion: 'Empleado'
              }
            ],
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
              }
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo aprovechar tus Cesantías?',
          contentful_id: '6FgFuWUdPTdUUdOfPSrYs5',
          contenido: {
            updatedAt: '2020-03-20T15:54:21.690Z',
            titulo: '¿Cómo aprovechar tus Cesantías?',
            descripcioncorta:
              'No basta con saber quién paga tus cesantías; también debes conocer cómo sacarles provecho.',
            urlSeo: null,
            textoIntroductorio: null,
            tituloCorto: null,
            textoCallToActionBite: null,
            categoriaCliente: [
              {
                descripcion: 'Cesante'
              },
              {
                descripcion: 'Empleado'
              }
            ],
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/72jxOvoPP9xotRznE4w0EC/32fc70652557f541c305999a8c42e837/como_aprovecharlas_max.png?w=800&q=50'
              }
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
          contentful_id: '2mMEvmzPnVDcKGe9TVvDDN',
          contenido: {
            updatedAt: '2020-03-20T15:57:02.652Z',
            titulo:
              '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
            descripcioncorta:
              'El camino a tu vivienda propia puede estar lleno de riesgos. Así podrás evitarlos. ',
            urlSeo: null,
            textoIntroductorio: null,
            tituloCorto: null,
            textoCallToActionBite: null,
            categoriaCliente: [
              {
                descripcion: 'Independiente'
              },
              {
                descripcion: 'Cesante'
              }
            ],
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/4tNxOYzenSZDhuvC8AAYSR/0297b33c23c88c090ff0d8d07bfb7a73/Recomendaciones-y-errores-comunes-min.png?w=800&q=50'
              }
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
          contentful_id: '7ktNv1ceAEb2k2hQ04pqsk',
          contenido: {
            updatedAt: '2020-03-20T15:57:05.704Z',
            titulo:
              '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
            descripcioncorta:
              'En el camino para la adquisición o mejora de vivienda puedes incurrir en algunas equivocaciones. ',
            urlSeo: null,
            textoIntroductorio: null,
            tituloCorto: null,
            categoriaCliente: [
              {
                descripcion: 'Empleado'
              }
            ],
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/4tNxOYzenSZDhuvC8AAYSR/0297b33c23c88c090ff0d8d07bfb7a73/Recomendaciones-y-errores-comunes-min.png?w=800&q=50'
              }
            }
          }
        }
      }
    ]
  },
  allContentfulTransaccion: {
    edges: [
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: [
            {
              descripcioncorta:
                '¿Ya decidiste la meta a la que le quieres destinar tus Cesantías? Ahora entérate cómo retirarlas',
              titulo: '¿Cómo retirar tus Cesantías?',
              updatedAt: '2020-03-20T16:00:05.976Z',
              textoIntroductorio: null,
              textoCallToActionBite: null,
              tituloCorto: null,
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/1bIBhCRpmY0JBKbG6aXdzn/dfa3f62aff0d77dad7d98eb79a7b4ad8/como_retirar_cesantias-min.png?w=800&q=50'
                }
              },
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                }
              ]
            }
          ]
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      }
    ]
  }
}

const dataUser = [
  {
    id: 616,
    name: 'esteban',
    type: 1,
    category: 'Cesantías',
    subcategory: 'Cesante',
    date: '3/3/2020',
    state: 1,
    hostUser: { host: '18157213246ESTEBAN332020114058', state: 1 }
  }
]

const dataUserNOArray = {
  id: 616,
  name: 'esteban',
  type: 1,
  category: 'Cesantías',
  subcategory: 'Cesante',
  date: '3/3/2020',
  state: 1,
  hostUser: { host: '18157213246ESTEBAN332020114058', state: 1 }
}

const dataCompleta = {
  allContentfulContenido: {
    edges: [
      {
        node: {
          titulo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          tituloCorto: '¿Cómo retirar Cesantías?',
          subtitulo: '¿Cómo redimir este beneficio?',
          descripcioncorta:
            '¡Tener tus Cesantías en Protección son el primer paso para cumplir tus sueños!',
          linkCallToAction: 'https://www.segurosexito.com/',
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: 'Compra tu SOAT y disfruta tu beneficio',
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          descripcioncalltoaction: '¡Ingresa ahora!',
          tiempoDeLectura: '2',
          contentful_id: '22QeJSfyfLIj09dk3Vfflm',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              }
            }
          ],
          descripcionlarga: {
            descripcionlarga:
              '### Beneficio SOAT\nSi ahorras tus Cesantías en Protección y realizas la compra del SOAT para carro o moto en puntos de venta de Seguros Éxito* o en [www.segurosexito.com](https://www.segurosexito.com), recibirás un descuento en tu próxima compra de $20.000 pesos que podrás usar en los almacenes Éxito, Carulla, Surtimax, Super Inter y Surtimayorista.\n\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Proteccion\r\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-1'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Este descuento lo puedes redimir 4 días hábiles posteriores a la compra del SOAT, con tan solo ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'indicar el convenio 490',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' y presentar tu documento de identidad, al momento de pagar tus compras en la caja registradora de estos almacenes.\r\n\r\n',
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
                        'Este beneficio es un reconocimiento a tu decisión de ahorrar en Protección',
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
                      value: 'Proteccion\r\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-1'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        '*“Oferta válida del 14 de febrero del 2020 al 13 de febrero del 2021. No aplica para Costa Norte, Tolima y Valle del Cauca ni vehículos matriculados en estas zonas. Esta oferta aplica en www.segurosexito.com, www.exito.com, www.carulla.com y almacenes Éxito, Carulla, Surtimax, Surtimayorista, Super Inter (Manizales) y Estaciones de Servicio Éxito con venta de SOAT. Por la compra de tu SOAT auto particular acumulas 200 Puntos Colombia y 100 Puntos Colombia por tu SOAT moto. Descuento no acumulable con otras ofertas, se otorga el descuento de mayor valor equivalente en pesos. Éxito® marca registrada de Almacenes Éxito S.A. Seguros Generales Suramericana S.A.”*',
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
                      value: 'Proteccion',
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
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            'Protección invita al autocuidado y al uso de canales digitales',
          tituloCorto: null,
          subtitulo: 'Conoce la oferta de servicios que tenemos disponible',
          descripcioncorta:
            'Es tiempo de estar en casa, cuidarnos y mantener la calma. Es tiempo de utilizar los canales digitales',
          linkCallToAction: 'https://www.proteccion.com/wps/portal/proteccion',
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: 'Ir a proteccion.com',
          metatittleSeo:
            'Protección invita al autocuidado y al uso de canales digitales',
          descripcioncalltoaction:
            'Nuestros canales comerciales cuentan con todos los medios de conectividad online para seguirte ofreciendo la más completa asesoría.',
          tiempoDeLectura: '5',
          contentful_id: '1lxGp5aG791KVIRqzqJKtI',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/4rC5XZdS5xnEBiZz3UtFtD/21be6b348785397ad5c0cb73128c33ce/Co__mo-acceder-al-mecanismo-de-proteccio__n-al-cesante-max.jpeg?w=800&q=50'
              }
            }
          ],
          descripcionlarga: null,
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Con la evolución que ha tenido el COVID-19 en nuestro país y en el mundo en general, nuestra prioridad hoy debe ser cuidar la salud pública y la vida. En Protección creemos que es momento de tener confianza, capacidad adaptativa y de apalancarnos de todo el desarrollo de nuestras plataformas tecnológicas y nuestro talento humano, para que, sin exponer a nuestros colaboradores ni a nuestros clientes, sigamos garantizando la adecuada prestación de los servicios y el acompañamiento experto que nos caracteriza.\r\n\r\nSi bien nuestras oficinas de servicio están en funcionamiento, y hemos adoptado los protocolos de seguridad y recomendaciones del Ministerio de Salud; como compromiso con la situación del país, ',
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
                        'te invitamos a realizar en ellas transacciones que no estén disponibles en canales digitales y nuestras líneas de servicio. ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        'De esta manera, nuestra operación continúa 100% activa, mientras cuidamos a nuestros clientes, colaboradores y a sus familias.',
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
                      value:
                        'En nuestro canal digital\r proteccion.com\r y en la App Protección puedes:\r',
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
                        '• Retirar cesantías\r\n• Retirar pensión voluntaria\r\n• Solicitar certificaciones, actualizar tu Historia Laboral, consultar saldos y movimientos\r\n• Adjuntar la documentación para los tramites de pensión\r\n• Adjuntar las incapacidades aprobadas por la EPS para el posterior pago, una vez ya esté aprobado derecho.\r\n• Generar tu clave personal y actualizar tus datos\r\nTambién puedes recibir asesoría e información general con Pronto, nuestro asesor virtual, disponible en proteccion.com',
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
                      value: '',
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
                      value: 'A través de las líneas telefónicas puedes:\r',
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
                        '• Radicar trámites de pensión y revisar tu Historia Laboral\r\n• Recibir asesoría general y realizar consultas sobre tu ahorro\r\n\r\nBogotá: 744 44 64 - Medellín y Cali: 510 90 99 - Barranquilla: 319 79 99\r\nCartagena 642 49 99 - Nacional (desde fijo): 01 8000 52 8000',
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
                      value: '',
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
                      value:
                        'En nuestras oficinas de servicio, únicamente podrás realizar:\r\n',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        '\r\n1. Corrección de beneficio tributario para grabación de pago.\r\n2. Recepción de solicitud de cancelación de la cuenta financiera y envío de formato diligenciado al proceso.\r\n3. Marcar una cuenta de Cesantías cómo voluntaria o TTV.\r\n4. Auxilio económico que se reconoce a un familiar que demuestre haber pagado los gastos funerarios de un afiliado pensionado fallecido de Protección.\r\n5. Gestionar pago por excedentes de libre disponibilidad.\r\n6. Pago de pensionados en cheque en oficina.\r\n7. Pago por devolución de saldos en trámite de pensión.\r\n8. Radicar tramite solicitud de reconocimiento y pago de Auxilios funerarios.\r\n9. Radicar tramite solicitud de cesantías por muerte del afiliado.\r\n10. Recibir y registrar complementos clínicos y administrativos.\r\n11. Recibir y registrar apelaciones.\r\n12. Recibir y validar que las historias clínicas se encuentren completas.\r\n13. Recibir documentos y entregar a recepción documental.\r\n14. Recibir y procesar novedades de nómina de pensionados.\r\n15. Generar certificado de pignoración.\r\n16. Actualización de datos y generación de clave personal.',
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
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Sabías que puedes continuar afiliado a la Caja de Compensación Familiar?',
          tituloCorto: null,
          subtitulo: '¿De qué se trata?',
          descripcioncorta:
            '¡Queremos promover una mejor calidad de vida para ti y tu familia!',
          linkCallToAction: null,
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: null,
          metatittleSeo:
            '¿Sabías que puedes continuar afiliado a la Caja de Compensación Familiar?',
          descripcioncalltoaction: null,
          tiempoDeLectura: '2',
          contentful_id: '3idU9aEVdgtfAmNIgyFBWM',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              }
            }
          ],
          descripcionlarga: {
            descripcionlarga:
              'Conoce todos los aliados que tenemos en Cajas de Compensación Familiar y comienza a disfrutar de sus beneficios'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Contamos a nivel nacional con aliados como las ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'underline'
                        }
                      ],
                      value: 'Cajas de Compensación Familiar',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ', las cuales te ofrecen beneficios para tu bienestar:',
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
                        ' educación, recreación, cultura, turismo, deporte, vivienda, entre otros.\r\n',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        '\r\nPor esto, queremos que disfrutes de estos beneficios con tan solo afiliarte a la Caja de Compensación de tu preferencia. Sigue estos pasos:\r',
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
                      value: '1.',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' Dirígete a la entidad de tu elección con la carta de aprobación de pensión, la certificación de pensión o el desprendible de nómina.\r\n\r\n \r',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: '2. ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: 'Afíliate a la Caja de Compensación Familiar.',
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
                      value: '',
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
                        'Si tienes alguna inquietud, llámanos a nuestra Línea de Servicio',
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
                        'Bogotá: 744 44 64  | Medellín y Cali: 510 90 99  |  Barranquilla: 319 79 99  |  Cartagena: 642 49 99  |  Nacional (desde fijo): 01 8000 52 8000',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Qué errores evitar a la hora de usar tus Cesantías para educación?',
          tituloCorto: null,
          subtitulo: null,
          descripcioncorta:
            'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
          linkCallToAction: 'https://proteccion.com/cesantias#como-retirarlas',
          textoCallToActionBite: 'Muéstrame cuáles',
          textoCallToAction: '¡Comienza ahora!',
          metatittleSeo:
            'Errores a evitar cuando uses tus cesantías para educación',
          descripcioncalltoaction:
            'Conoce ahora los requisitos para retirar tus Cesantías por Educación',
          tiempoDeLectura: '6',
          contentful_id: '3EjHrdRGlgi5YxTlRgLL5w',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              '¿Quieres estudiar? Evita estos errores comunes a la hora de usar las Cesantías para educación. Así estarás más cerca de tus sueños al ahorrar tiempo y dinero. '
          },
          cuerpocontenido: {
            json: {
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
                      value: '¿Cuentas con un ahorro para imprevistos?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Debes tener presente que el pago de la matrícula no es el único gasto que tendrás. Te recomendamos considerar hasta el transporte para hacer las diligencias y los pagos que debas hacer para tramitar tus documentos, entre otros.',
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
                      value: '',
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
                      value: '¡No olvides ningún requisito!',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Es fundamental que tengas claro cada uno de los requisitos que debes cumplir para invertir tu ahorro en este fin. Recuerda tener presente estudiar un programa en una universidad avalada por el Ministerio de Educación o su similar en el país adonde te traslades. ',
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
                        'Además, evita dejar todo para el último momento, pues hay trámites que tienden a demorarse un poco más. Por ejemplo, si piensas irte a estudiar al exterior, debes contar con la duración de los trámites legales y de la expedición de documentos como la visa.',
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
                      value: '',
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
                      value:
                        '¿Tienes claro qué quieres estudiar y dónde hacerlo?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Antes de comenzar con este proceso, te recomendamos tener definidas tus opciones, así podrás agilizar el camino. Descubre qué te gusta, cuáles son tus pasiones y lo que quieres lograr en tu vida. ¿Con qué soñaste siempre que eras niño? ¡Es momento de hacer eso realidad!',
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
                      value: '',
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
                      value: 'No contemplar los gastos de manutención.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Recuerda que si quieres estudiar debes tener presente que el único gasto no es el de la matrícula, que podrás cubrir con tus Cesantías, sino que debes pensar también en el transporte, la alimentación y los implementos de estudio.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías?',
          tituloCorto: null,
          subtitulo: null,
          descripcioncorta:
            '¿Ya decidiste la meta a la que le quieres destinar tus Cesantías? Ahora entérate cómo retirarlas',
          linkCallToAction: 'https://n9.cl/bdc3l ',
          textoCallToActionBite: 'Descúbrelo ahora',
          textoCallToAction: null,
          metatittleSeo: '¿Cómo retirar las cesantías si eres Empleado?',
          descripcioncalltoaction:
            '¿Estás listo para retirarlas? Ingresa ahora a la Zona Transaccional',
          tiempoDeLectura: '5',
          contentful_id: '24C0wWGZpjU6iGAcLnFMyD',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Por la App y el sitio web o las oficinas de Protección. Según las metas que te hayas fijado y para las que quieras usar tus Cesantías, podrás retirarlas '
          },
          cuerpocontenido: {
            json: {
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
                      value: 'Vivienda: ',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
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
                                'En el portal transaccional puedes solicitar el retiro por cualquier monto. El pago se hará en la vía que elijas.',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Retiro sin clave: puedes retirar un monto hasta por 3 SMLMV (salarios mínimos legales mensuales vigentes). Este pago se hará en la vía que escojas. ',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'En los corresponsales ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'PagaFácil, Reval y Multipagas',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                ' podrás retirar un monto hasta por 10 SMLMV (salarios mínimos legales mensuales vigentes) en efectivo. ',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'También puedes optar por las Oficinas Protección. Si estás trabajando y cuentas con la autorización del empleador, podrás solicitar el retiro por cualquier monto y se pagará en cheque, transferencia o por ventanilla en las sucursales de los bancos Davivienda y Bancolombia.  ',
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
                      marks: [],
                      value: '',
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
                      value: 'Educación: ',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
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
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
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
                      value: 'Terminación del contrato:',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' ',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'En el portal transaccional puedes solicitar el retiro por cualquier monto. El pago se hará en la vía que elijas.',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Retiro sin clave: puedes retirar un monto hasta por 3 SMLMV (salarios mínimos legales mensuales vigentes). Este pago se hará en la vía que escojas.',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'En los corresponsales PagaFácil, Reval y Multipagas podrás retirar un monto hasta por 10 SMLMV (salarios mínimos legales mensuales vigentes) en efectivo.',
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'También puedes optar por las Oficinas Protección. Allí podrás solicitar el retiro por cualquier monto y se pagará en cheque, transferencia o por ventanilla en las sucursales de los bancos Davivienda y Bancolombia.',
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
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¡Vecindario! Un nuevo beneficio por tener tus Cesantías en Protección',
          tituloCorto: null,
          subtitulo: null,
          descripcioncorta:
            '¡Tener tus Cesantías en Protección son el primer paso para acercarte a tu sueño de vivienda!',
          linkCallToAction: 'www.vecindario.com',
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: 'Ir a Vecinadrio.com',
          metatittleSeo:
            'Las Cesantías son el primer paso para cumplir tu sueño de tener casa propia',
          descripcioncalltoaction:
            '¡Comienza a hacer realidad tu sueño de tener vivienda propia!',
          tiempoDeLectura: '4',
          contentful_id: '6e6MdfwAti6gl9cEsGh6BS',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/7JsVuvMNY1pTwQRxnd2qjj/973866b8cf3328f5bbde8037214a664d/unnamed__4_.jpg?w=800&q=50'
              }
            }
          ],
          descripcionlarga: {
            descripcionlarga:
              'En Protección te acompañamos a dar un paso más hacia tu meta de tener casa propia, y para hacerlo hoy realidad, tenemos para ti un beneficio especial:'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Para aprovechar el descuento que Protección y Vecindario tienen para ti tan solo debes:\r\n\r\n- Ingresar a www.vecindario.com\r\n- Crear una cuenta y autorizar los términos condiciones\r\n- Diligenciar tu información personal\r\n- Realizar el diagnóstico\r\n- Conocer los proyectos inmobiliarios\r\n- Realizar la simulación y descárgarla\r\n- Visitar el proyecto inmobiliario que se acomode a tus necesidades y presentar la simulación (impresa o digital)\r\n\r\nAdemás este beneficio especial te permitirá disfrutar de:\r\n\r\n- Asesoría en la compra de vivienda\r\n- Búsqueda en cualquier lugar en donde estés.\r\n- Al hacer uso de la plataforma, podrás contar con acceso a información multimedial, cursos virtuales, podcast, y demás contenido enfocado en la promoción de la cultura del ahorro, el uso adecuado de las cesantías, finanzas personales, acceso a la asesoría experta en el proceso adquisición de vivienda, acceso a créditos, subsidios con las cajas de compensación, entre otros.\r\n\r\nAplica para: Antioquia, Bogotá, Eje Cafetero, Barranquilla, Santa Marta, Cartagena y Cali\r\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías para educación?',
          tituloCorto: null,
          subtitulo: null,
          descripcioncorta:
            'Como empleado puedes apoyar tus proyectos educativos junto a Protección. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: 'Ir a la zona transaccional',
          metatittleSeo: 'Retirar tus cesantías para educación',
          descripcioncalltoaction: '¿Estás listo para retirar tus Cesantías?',
          tiempoDeLectura: '5',
          contentful_id: '3PM6cWviUO1D5QWrQhg8rA',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Como afiliado a Cesantías como cesante o independiente, puedes hacer el retiro de tus Cesantías directamente en www.proteccion.com.'
          },
          cuerpocontenido: {
            json: {
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
                      value: 'Por tipo de retiro',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
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
                              value:
                                'Póliza de seguro suscrito con la entidad.',
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
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '\n\n',
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
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT (ENSAYO)',
          tituloCorto: null,
          subtitulo: null,
          descripcioncorta: null,
          linkCallToAction: 'https://www.segurosexito.com/',
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: 'Compra tu SOAT y disfruta tu beneficio',
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          descripcioncalltoaction: '¡Ingresa ahora!',
          tiempoDeLectura: '2',
          contentful_id: '5AMw5lXeiFSXNUYFk7Qo8x',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              }
            }
          ],
          descripcionlarga: {
            descripcionlarga:
              'Si ahorras tus Cesantías en Protección y realizas la compra del SOAT para carro o moto en puntos de venta de Seguros Éxito* o en [www.segurosexito.com](https://www.segurosexito.com), recibirás un descuento en tu próxima compra de $20.000 pesos que podrás usar en los almacenes Éxito, Carulla, Surtimax, Super Inter y Surtimayorista.\n\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Este descuento lo puedes redimir 4 días hábiles posteriores a la compra del SOAT, con tan solo ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'indicar el convenio 490',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' y presentar tu documento de identidad, al momento de pagar tus compras en la caja registradora de estos almacenes.\r\n\r\n',
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
                        'Este beneficio es un reconocimiento a tu decisión de ahorrar en Protección',
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
                        '\r\n*“Oferta válida del 14 de febrero del 2020 al 13 de febrero del 2021. No aplica para Costa Norte, Tolima y Valle del Cauca ni vehículos matriculados en estas zonas. Esta oferta aplica en www.segurosexito.com, www.exito.com, www.carulla.com y almacenes Éxito, Carulla, Surtimax, Surtimayorista, Super Inter (Manizales) y Estaciones de Servicio Éxito con venta de SOAT. Por la compra de tu SOAT auto particular acumulas 200 Puntos Colombia y 100 Puntos Colombia por tu SOAT moto. Descuento no acumulable con otras ofertas, se otorga el descuento de mayor valor equivalente en pesos. Éxito® marca registrada de Almacenes Éxito S.A. Seguros Generales Suramericana S.A.”*',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué son las Cesantías?',
          subtitulo: 'Tipos de Cesantías',
          descripcioncorta:
            'Conoce todo lo que debes saber sobre las Cesantías y comienza a ahorrar junto a Protección.',
          linkCallToAction: null,
          textoCallToActionBite: ' ',
          textoCallToAction: '¿Para qué sirven?',
          metatittleSeo: '¿Qué son las cesantías?',
          descripcioncalltoaction: 'Conoce en qué puedes utilizar tu ahorro.',
          tiempoDeLectura: '2',
          contentful_id: '2OJRVMtRN6wT6xJnlJc4sg',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              }
            },
            {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/3BgSS5Ud85ZaY2t4o2Excw/b586f3155f2be5c54a867f8a94061b69/imgtipos2.png?w=800&q=50'
              }
            }
          ],
          descripcionlarga: {
            descripcionlarga:
              '__Las Cesantías son una prestación social__ a la que tienes derecho al ser un trabajador vinculado por contrato fijo o término indefinido, tanto en empresas públicas como privadas. Este es un ahorro que es consignado al fondo de Cesantías seleccionado libremente por ti y corresponde a un mes de salario por cada año laborado o proporcional a la fracción de tiempo que hayas trabajado.\n'
          },
          cuerpocontenido: {
            json: {
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
                      value: 'Ordinarias',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Las Cesantías ordinarias nacieron gracias a la Ley 50. Esta ley aplica de',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: ' forma obligatoria ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        'para los trabajadores que establecieron un contrato a partir del 1 de enero de 1991 y de ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'forma voluntaria',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' para los empleados con contrato anterior al 1 de enero de 1991.',
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
                        'En este tipo de Cesantías se consigna de forma anual a un fondo de pensiones y Cesantías, el cual es encargado de administrar este dinero.',
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
                      value: 'Retroactivas',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'En este caso las Cesantías del trabajador permanecen en manos de la empresa durante todo el contrato laboral.',
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
                        'La prestación social se calcula con base en el último salario del empleado por el tiempo del servicio.',
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
                      value: '',
                      nodeType: 'text'
                    },
                    {
                      data: {
                        uri:
                          'https://www.proteccion.com/wps/portal/proteccion/web/cesantias/personas'
                      },
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Descúbrelo ya',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'hyperlink'
                    },
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué son los aportes a Cesantías?',
          subtitulo: null,
          descripcioncorta:
            'Ahora que sabes qué son las Cesantías, debes saber quiénes deben aportar y cómo deben hacerlo. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Explícamelo',
          textoCallToAction: '¿Cómo aprovecharlas?',
          metatittleSeo:
            '¿Qué son los Aportes a cesantías y quién los debe pagar?',
          descripcioncalltoaction:
            'Ahora que sabes quién y a cuánto deben ascender tus Cesantías...',
          tiempoDeLectura: '5',
          contentful_id: '2Lh4lX3RHAEe46jOVqw1nf',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Las Cesantías son una prestación social a cargo del empleador para sus empleados y constituyen un ahorro para el desempleo. Conoce más de los pagos, tiempos y fondos con estas 6 preguntas.\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '¿Qué son los aportes o pagos de Cesantías?',
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
                      marks: [],
                      value:
                        'Es el pago que debe hacer todo empleador por cada uno de sus trabajadores por concepto de Cesantías a un fondo, como Protección. ',
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
                      value: '¿A cuánto equivalen?',
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
                      marks: [],
                      value:
                        'Las Cesantías equivalen a un mes de salario por cada año de servicio. Si un trabajador lleva menos de un año en la empresa, se liquidará proporcionalmente al periodo laborado. ',
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
                      value: '¿Cómo se liquidan?',
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
                      marks: [],
                      value:
                        'Las Cesantías se calculan partiendo del último salario mensual del trabajador, a menos que haya tenido algún tipo de cambio durante los últimos tres meses. En caso de que el trabajador hubiera terminado su relación laboral menos de un año, se hará un promedio con el salario devengado.',
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
                      value: '¿Adónde consignan los pagos?',
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
                      marks: [],
                      value:
                        'Como empleado, puedes elegir el fondo en el que quieres que te consignen las Cesantías. Si no lo haces, la empresa donde trabajas puede escoger libremente el fondo de Cesantías al que las depositará.',
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
                      value: '¿Cuántas cuentas por Cesantías tener?',
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
                      marks: [],
                      value:
                        'Tantas como trabajos hayas tenido. Ya que el empleador y el empleado pueden elegir libremente a qué fondo consignar las Cesantías, una persona que haya trabajado en 5 empresas puede tener hasta 5 cuentas en distintos fondos de Cesantías.',
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
                      value: '¿Cuándo se debe consignar las Cesantías?',
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
                      marks: [],
                      value:
                        'Las Cesantías se liquidan el 31 de diciembre de cada año. Según lo previsto por la ley, el empleador tiene hasta el 14 de febrero del año siguiente para consignar las Cesantías en la cuenta individual que el trabajador elija. ',
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
                        '¿Qué pasa si el empleador se retrasa en el pago de las Cesantías?',
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
                      marks: [],
                      value:
                        'Si un empleador no consigna las Cesantías antes del 15 de febrero del año siguiente, deberá pagar un día de salario por cada día de retraso. A este se le conoce como sanción moratoria y depende netamente del empleador. Los fondos de Cesantías no son entes reguladores para el cálculo de esta sanción.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué son los intereses de las Cesantías?',
          subtitulo: null,
          descripcioncorta:
            '¿Sabías que este ahorro tiene unos intereses que puedes disfrutar? Conoce más sobre ellos.',
          linkCallToAction: null,
          textoCallToActionBite: 'Aprende más',
          textoCallToAction: '¿Cuáles son mis alternativas?',
          metatittleSeo: '¿Qué son los intereses de las cesantías?',
          descripcioncalltoaction: null,
          tiempoDeLectura: '2',
          contentful_id: '67bLxw6kifiYyfUp0vz3df',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Todo empleador debe pagar a sus colaboradores unos intereses sobre las Cesantías. Conoce qué son y el plazo que tiene tu empresa para consignártelas.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Como tus Cesantías son un ahorro tienes derecho a unos intereses anuales: desde el 1 de enero hasta el 31 de diciembre del año correspondiente. Este monto debe ser pagado máximo el 31 de enero del año siguiente.',
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
                        'Así, los intereses de las Cesantías corresponden al 12 % anual o al porcentaje proporcional a la fracción de año en la que se realizó tal ahorro.',
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
                      value: 'Calcula aquí cuánto puedes recibir de intereses:',
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
                      value: '[SIMULADOR]',
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
                        'Recuerda que no debes hacer de estos intereses plata de bolsillo. ',
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
                        'Descubre qué han hecho otras personas con este dinero.\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Para qué son las Cesantías?',
          subtitulo: null,
          descripcioncorta:
            'Si se terminó tu contrato o cambiaste de empleo, te mostramos algunas opciones que te ayudarán a aprovechar tu ahorro.',
          linkCallToAction: null,
          textoCallToActionBite: 'Cuéntame',
          textoCallToAction: '¿Por qué elegir Protección?',
          metatittleSeo:
            '¿Para qué son las cesantías? Si eres Empleado Independiente',
          descripcioncalltoaction: null,
          tiempoDeLectura: '2',
          contentful_id: '12wxz9mZz9Ok44M64PSSXV',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Es importante que tengas en cuenta que las cesantías son un ahorro que será de mucha ayuda cuando cambies de empleo y tengas algún imprevisto o se termine tu contrato laboral y éstas cumplan su función como seguro frente al desempleo.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Con estos tips podrás aprovechar al máximo este ahorro en alguno de los casos anteriores:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Realiza una proyección a tu futuro cercano y responde estas preguntas: ¿por cuánto tiempo tienes planeado usar tu ahorro?, ¿cuánto dinero tienes disponible?, ¿cuál es tu objetivo? Esto te ayudará a determinar un panorama de tu situación.',
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
                                'Si definitivamente tomas la decisión de retirar tus cesantías, asegúrate de usarlas de forma planeada y evita los gastos innecesarios. Recuerda que este ahorro es fundamental para tu futuro.',
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
                                'Cuando tengas el dinero, haz una lista de gastos y determina cuánto necesitas para cada uno de ellos. Así serás más ordenado con tu presupuesto. Además, ten presente que lo que puedas ahorrar será siempre una ganancia.',
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
                                'Recuerda volver a ahorrar tus cesantías inmediatamente tengas de nuevo un contrato laboral.',
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
                      marks: [],
                      value:
                        'Si no tienes la necesidad de gastarte este dinero y deseas conservarlo, piensa en otras posibilidades que te brinda Protección: ahorrarlas o invertirlas.',
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
                        'Ya que sabes para qué te sirven las Cesantías, elige a Protección.\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Para qué puedes retirar tus Cesantías?',
          subtitulo: null,
          descripcioncorta:
            'Como cesante, las Cesantías pueden servirte para alcanzar tus sueños. Conoce cómo aquí',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame',
          textoCallToAction: ' Conoce cómo retirarlas',
          metatittleSeo: 'Como Cesante ¿Para qué puedo retirar las cesantías?',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '45hvk5smrzNIClX4qNW6O2',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Si eres dependiente, puedes retirar tus Cesantías para la compra o mejoramiento de vivienda. También puedes utilizarlas para pagar tu educación superior o la de tus hijos.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Las Cesantías son un ahorro para el momento en el que pierdas tu empleo. Como empleado, también las puedes usar para alcanzar tus metas ya que las puedes retirar para:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Comprar una vivienda, terreno o un lote. ',
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
                              value: 'Mejorar o remodelar tu casa.',
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
                                'Construir tu casa en un terreno que ya tengas.',
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
                              value: 'Pagar los impuestos de tu vivienda.',
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
                                'Comprar títulos de vivienda adquiridos por tus empleadores con entidades públicas o privadas.',
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
                                'Pagar los cánones del leasing de tu vivienda. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Con las Cesantías también puedes:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Pagar la matrícula de escuelas, colegios o universidades públicas.',
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
                                'Costear la matrícula de cualquier institución privada de educación superior.',
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
                              value: 'Abonar a la deuda del Icetex.',
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
                                'Pagar la matrícula de las instituciones de educación media o técnica académica con certificación internacional. ',
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
                                'Pagar los programas de Instituciones de Educación para el Trabajo y el Desarrollo Humano, antes denominada, educación no formal. ',
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
                              value: 'Estudiar idiomas.',
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
                      marks: [],
                      value:
                        'Ten en cuenta que tus Cesantías también pueden pagar para la educación de tu pareja o tus hijos.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Para qué son las Cesantías?',
          subtitulo: null,
          descripcioncorta:
            'Existen algunos casos específicos en los que podrás invertir tus Cesantías. Conoce aquí las alternativas.',
          linkCallToAction: null,
          textoCallToActionBite: null,
          textoCallToAction: '¿Por qué elegir Protección?',
          metatittleSeo:
            '¿Para qué son las cesantías? Si eres Empleado Independiente',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '3yDxxmBbyiT6GPOnG2Dj5O',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Las Cesantías son un ahorro que te ayudará en momentos y situaciones específicas de tu vida. Por ejemplo, pueden serte útiles para sostenerte mientras encuentras un nuevo trabajo, construir tu hogar o para capacitarte en lo que te gusta.\nConoce en esta infografía más información sobre los casos en los que puedes invertir tus Cesantías.\n'
          },
          cuerpocontenido: {
            json: {
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
                      value: 'Desempleo',
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
                        'Este ahorro te servirá como seguro en caso de quedarte sin trabajo. Con él podrás cubrir tus gastos fijos y evitarás tener apuros a fin de mes.',
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
                      value: 'Vivienda',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Compra de vivienda o lote',
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
                              value: 'Remodelación',
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
                              value: 'Construcción de vivienda',
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
                                'Liberación de gravámenes sobre el inmueble',
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
                              value: 'Pago de impuestos',
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
                              value: 'Pago de cánones de Leasing',
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
                              value: 'Compra de títulos de vivienda',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Educación',
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
                      value: 'Educación Superior:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Educación en territorio nacional',
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
                              value: 'Educación en España',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value:
                        'Educación para el trabajo y el desarrollo humano:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Programas de educación Media con convenios en instituciones de educación superior.',
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
                                'Educación no formal con títulos acreditados por el Sistema Nacional de Formación para el Trabajo.',
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
                                'Instituciones de educación media, técnica académica con certificación internacional.',
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
                                'Educación para el trabajo y desarrollo humano ',
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
                              value: 'Programa de idiomas.',
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
                                'Pago de créditos del Icetex o créditos educativos ',
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
                                'Retiro parcial de ahorro programado o seguro educativo.',
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
                      marks: [],
                      value:
                        'Ya que sabes para qué te sirven las Cesantías, elige a Protección.\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cuáles son los certificados de Cesantías?',
          subtitulo: null,
          descripcioncorta:
            'Conoce los certificados de las Cesantías y para qué puedes usarlos.',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstramelos',
          textoCallToAction: 'Aprende a descargarlos',
          metatittleSeo: '¿Cuáles son los certificado de cesantías?',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '7oxMvA7f5USzX5b4YPSFVm',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Los certificados son ese soporte que necesitarás en caso de tener que demostrar el ahorro que tienes en Protección con tus Cesantías.\n'
          },
          cuerpocontenido: {
            json: {
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
                          content: [
                            {
                              data: {},
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Constancia de Afiliación Cesantías:',
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
                      marks: [],
                      value:
                        'Documento expedido por Protección que certifica que tienes tus Cesantías en Protección.',
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
                              value: 'Constancia de saldo Cesantías:',
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
                      marks: [],
                      value:
                        'Documento expedido por Protección que da constancia del dinero total que tienes ahorrado.',
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
                                'Certificado de Declaración de Renta de Cesantías:',
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
                      marks: [],
                      value:
                        'Documento expedido por Protección que certifica los movimientos en Cesantías de afiliado para el año 2018. Este tiene información sobre los movimientos, los rendimientos y retenciones.',
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
                              value: 'Certificado de ',
                              nodeType: 'text'
                            },
                            {
                              data: {
                                uri: 'google.com'
                              },
                              content: [
                                {
                                  data: {},
                                  marks: [
                                    {
                                      type: 'bold'
                                    }
                                  ],
                                  value: 'inmovilización ',
                                  nodeType: 'text'
                                }
                              ],
                              nodeType: 'hyperlink'
                            },
                            {
                              data: {},
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'de Cesantías:',
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
                      marks: [],
                      value:
                        'Documento expedido por Protección y que está dirigido a las cajas de compensación con el propósito de dar constancia de que las Cesantías del afiliado se encuentran inmovilizadas.',
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
                      value: '¿Necesitas alguno de estos documentos?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo usar tus Cesantías para vivienda?',
          subtitulo: 'Cómo hacerlo',
          descripcioncorta:
            'Las Cesantías te acercan a tu nueva vivienda. Conoce cómo puedes aprovecharlas. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Dime cómo',
          textoCallToAction: '¿Cuánto debo ahorrar?',
          metatittleSeo:
            'Usar las cesantías para vivienda: Cesante o Independiente',
          descripcioncalltoaction: 'Prepárate para cumplir tus sueños.',
          tiempoDeLectura: null,
          contentful_id: 'V9eZUKK3z8qU6j4pYnhLX',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Si estás pensando en comprar vivienda, puedes contar con tus Cesantías. Recuerda que ellas pueden servirte para alcanzar tus metas. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'La compra de vivienda es una de las inversiones más significativas de tu vida. Para lograr esta meta, necesitas planeación y disciplina financiera basadas en el ahorro.',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Debes fijarte una meta: ¿cuándo quieres comprar tu casa?, ¿cuánto estás dispuesto a pagar por ella?',
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
                                'Luego de esto, debes pensar en un plan de ahorro que te acerque financieramente al proyecto de hacerte a una casa. Define un monto a ahorrar cada mes. Puedes optar por las Cesantías voluntarias o bien dejar en Protección las que ya te pagaron tus exempleadores. ',
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
                                'Después, mira tus ingresos y gastos. Piensa cómo podrías incrementar tus entradas de dinero y cómo podrías reducir algunos gastos. ',
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
                                'Revisa en tu presupuesto los gastos innecesarios u hormiga; es decir, aquellos que no cuidas como salidas, taxis, comidas por fuera del hogar y similares en los que podrías estar incurriendo.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Una vez definas tu meta, empieces a ahorrar y reduzcas gastos, estarás listo para comprar la casa de tus sueños.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías?',
          subtitulo: null,
          descripcioncorta: 'Mira los pasos y documentos necesarios.',
          linkCallToAction: null,
          textoCallToActionBite: null,
          textoCallToAction: 'Conoce los canales',
          metatittleSeo: '¿Cómo retirar las cesantías si soy Cesante?',
          descripcioncalltoaction: '¿Estás listo para retirarlas?',
          tiempoDeLectura: null,
          contentful_id: '1n3MuDvUUVVF4d3LfPlrGk',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Mira los documentos y requisitos que debes cumplir para retirar tus Cesantías. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Para hacer efectivo el retiro de tus Cesantías, debes contar con lo siguiente:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Documento de identidad original',
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
                                'Carta del empleador dirigida a Protección en la que autoriza el retiro de las Cesantías con nombre del afiliado, número de identificación y fecha de terminación del contrato. Esta no puede tener tachones o enmendaduras. ',
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
                      marks: [],
                      value:
                        'Con estos documentos, puedes gestionar el retiro por cualquiera de los siguientes canales de atención.',
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
                                'En el portal transaccional puedes solicitar el retiro por cualquier monto. El pago se hará en la vía que elijas.',
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
                                'Por medio del portal no transaccional, puedes retirar un monto hasta por 3 SMLMV (salarios mínimos legales mensuales vigentes). Este pago se hará en la vía que escojas. ',
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
                                'En los PagaFácil podrás retirar un monto hasta por 10 SMLMV (salarios mínimos legales mensuales vigentes) en efectivo.',
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
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo ahorrar para mi vivienda?',
          subtitulo: null,
          descripcioncorta:
            'Si tu sueño es tu vivienda, te contamos cómo hacer un plan de ahorro para alcanzarlo.',
          linkCallToAction: null,
          textoCallToActionBite: 'Cuéntame cómo',
          textoCallToAction: 'Calcula tu ahorro',
          metatittleSeo: '¿Cuánto debo ahorrar para comprar mi nueva casa?',
          descripcioncalltoaction:
            'Conocer por qué ahorrar es importante, ahora solo debes empezar. ',
          tiempoDeLectura: null,
          contentful_id: '5SRgmAyGybjlE53CoyO9xE',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Tienes una meta, ahora debes ponerte en marcha para lograrla con ahorro y dedicación.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Comprar vivienda es una de las inversiones más grandes a las que te tengas que enfrentar durante la vida y con las cesantías en Protección podrás lograrlo. Sigue estas recomendaciones: ',
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
                              value: 'Fíjate una meta y plazo:',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                ' Busca una vivienda que se acomode a tu presupuesto y piensa cuándo quieres comprarla. Algunos proyectos son de entrega inmediata mientras que para otros deberás esperar hasta la entrega de tu nuevo hogar.',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Organiza tus finanzas:',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                ' Establece un presupuesto mensual en el que incluyas todos tus ingresos como tu salario y comisiones, y gastos, como la compra del mercado y el pago de servicios públicos.',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Empieza un ahorro:',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                ' En el presupuesto que vas a elaborar, no olvides separar una parte de los ingresos para el ahorro. Un monto recomendado es del 10 % de tus ingresos, de manera que si te ganas 1.200.000 pesos, deberás ahorrar mensualmente 120.000 pesos. ',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
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
                            '¿Pero por qué es importante el ahorro para la compra de vivienda? Básicamente porque demuestra ante el banco tu responsabilidad en el manejo del dinero. Además, porque te ayudará a hacer el cierre financiero de la compra de vivienda, ya que la mayoría de los bancos sólo prestan hasta el 70 % del valor del inmueble. Así que para una vivienda de 130 millones de pesos deberás tener ahorrados entre 39 millones para el pago de la cuota inicial.',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        '\nConocer por qué ahorrar es importante, ahora solo debes empezar. \n\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo usar las Cesantías para vivienda?',
          subtitulo: null,
          descripcioncorta:
            'Con tus Cesantías en Protección puedes abrir las puertas de tu nueva vivienda o mejorar la que ya tienes.',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: 'Comienza a ahorrar',
          metatittleSeo:
            'Usar las cesantías para vivienda: Cesante o Independiente',
          descripcioncalltoaction:
            ' ¿Ya decidiste qué hacer con tus Cesantías? ',
          tiempoDeLectura: null,
          contentful_id: '4lBxRbeqrfrBHA3VlxKMmC',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Como un ahorro, las Cesantías pueden ayudarte a alcanzar tus metas en vivienda. Compra, mejora o paga los impuestos de tu casa con ellas.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Además de ser un ahorro que puede protegerte en caso de que pierdas tu empleo, las Cesantías también pueden servirte para alcanzar tus metas de vivienda.',
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
                      value:
                        '¿Qué puedes hacer con tus Cesantías en vivienda? ',
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
                        'Si eres un trabajador, puedes usar tus Cesantías para: ',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Comprar vivienda o un lote para esta.',
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
                                'Pagar la remodelación y mejoras locativas de tu vivienda.',
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
                                'Construir vivienda en un lote de tu propiedad o de tu cónyuge.',
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
                                'Liberación de embargos sobre tu vivienda o la de tu cónyuge. ',
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
                                'Pago de impuestos de vivienda que corresponden a predial y la contribución de valorización.',
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
                              value: 'Pago de cánones de leasing. ',
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
                                'Compra de títulos de vivienda adquiridos por empleadores con entidades públicas o privadas. ',
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
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo declarar las cesantías como independiente?',
          subtitulo: null,
          descripcioncorta:
            'Así podrás aprovechar los beneficios tributarios que podrás disfrutar gracias a las cesantías. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Enséñame más',
          textoCallToAction: 'Trasládalas a Protección',
          metatittleSeo:
            '¿Cómo hacer una optimización tributaria para independientes?',
          descripcioncalltoaction:
            'Ya que viste los beneficios de ahorrar tus Cesantías...',
          tiempoDeLectura: null,
          contentful_id: '1omXAGrNSZevRYD09pIh3d',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Si eres independiente, también puedes contar con las cesantías para tener un ahorro en momentos de iliquidez o falta de trabajo.\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'La ley contempla beneficios que ahorran en los fondos de Cesantías como Protección. ',
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
                      value: 'Cesantías como ahorro para independientes',
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
                      marks: [],
                      value:
                        'Los independientes pueden hacer aportes a Cesantías que serán tenidos en cuenta como una deducción de su impuesto de renta hasta la doceava parte de sus ingresos anuales, sin exceder 2500 UVT (es decir, $ 89.017.000 para el 2020).',
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
                        'Todas las personas que tengan ingresos por rentas laborales deberán registrarlos dentro de la cédula laboral. Esta tiene como limitante para deducción y rentas exentas el 40 % de los ingresos netos y hasta 5040 UVT (para el 2020, $ 179.459.000).',
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
                        'De esta manera, los independientes pueden restarse la doceava parte de sus ingresos si los aporta en Cesantías como una deducción en su optimización tributaria sin requisitos adicionales al momento del retiro de estos recursos. ',
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
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'Recuerda que cualquier retiro de Cesantías está exento del cobro del 4 por 1000.',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Por qué estar en Protección?',
          subtitulo: null,
          descripcioncorta:
            'En Protección somos tu aliado para que hagas realidad tus sueños. ',
          linkCallToAction: null,
          textoCallToActionBite: null,
          textoCallToAction:
            'Conoce por qué otras personas están en Protección',
          metatittleSeo:
            '¿Por qué elegir a Protección? Fondo de Pensiones y Cesantías',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '39AL84qrh4XtyavpVHuyCQ',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Conoce algunas de las razones por las que debes estar aquí.'
          },
          cuerpocontenido: {
            json: {
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Tenemos para ti soluciones a la medida que, junto a nuestros productos, te ayudarán a hacer realidad tus sueños más pronto de lo que creías.',
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
                                'Trabajamos junto a más de 400 aliados para tu bienestar y disfrute.',
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
                                'En cada uno de los canales de servicio te brindamos soluciones prácticas para tus trámites y consultas en todos nuestros productos.',
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
                                'Te ofrecemos espacios de educación financiera gratuitos y virtuales.',
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
                                'Aprende con nuestra Universidad Protección, el lugar donde podrás impulsar tu desarrollo personal y profesional a través de contenidos y cursos prácticos temas financieros, pensionales, tributarios y de desarrollo de competencias.',
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
                      marks: [],
                      value: '\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo acceder al mecanismo de protección al cesante?',
          subtitulo: null,
          descripcioncorta:
            'Estos son los requisitos para beneficiarte de este mecanismo mientras encuentras un nuevo empleo. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame',
          textoCallToAction: 'Dirígete a la red de servicios de empleo',
          metatittleSeo: '¿Cómo acceder al mecanismo de protección al cesante?',
          descripcioncalltoaction: 'Ahora que conoces los requisitos... ',
          tiempoDeLectura: null,
          contentful_id: 'JMgvbNPIdLpAkuktUZ1yp',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Los requisitos para disfrutar del beneficio de protección al cesante dependen de tu vinculación laboral y tus aportes a cajas de compensación familiar. '
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Para poder disfrutar del mecanismo de protección al cesante, debes cumplir con los siguientes requisitos:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Si eras dependiente, tienes que haber hecho aportes a tu caja de compensación familiar durante un año (continuo o no) durante los últimos 3 años. ',
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
                                'Si eras independiente, debes haber hecho aportes a cajas de compensación familiar por un periodo equivalente a 2 años durante los últimos 3 años corridos. ',
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
                                'Que no cuentes con ninguna otra fuente de ingresos.',
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
                                'Inscribirte en cualquiera de los servicios de la Red de Servicios de Empleo e iniciar la ruta hacia la búsqueda de empleo.',
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
                                'Inscribirte en programas de capacitación y reentrenamiento según la reglamentación expedida por el Gobierno Nacional.',
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
                                'En caso de querer acceder al incentivo monetario por el ahorro de Cesantías y tu sueldo era inferior a 2 salarios mínimos mensuales legales vigentes, deberás haber ahorrado el 10 % de tu salario mensual del último año. Si tu sueldo era superior a esos 2 salarios mínimos, el ahorro deberá ser del 25 %.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: 'Cesantías en la declaración de renta',
          subtitulo: null,
          descripcioncorta:
            'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Ir a allá',
          textoCallToAction: 'Cuéntame más',
          metatittleSeo: '¿Cómo declaran las cesantías los trabajadores?',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '687bqpw2AHfdQhkadti9qp',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'El tratamiento tributario de las Cesantías depende de si hay una relación laboral o de si se trata de un ahorro para independientes. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Cesantías como prestación social',
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
                      marks: [],
                      value:
                        'Los dependientes o trabajadores que cuentan con una relación laboral reciben las Cesantías. Estas deben entenderse como un ingreso desde el momento en el que sean pagadas por el empleador. ',
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
                        'También son ingresos desde el instante en el que son consignadas por la empresa o empleador ante el fondo de Cesantías, como Protección. ',
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
                        'Por tratarse de un ingreso, deberán reflejarse en la declaración de renta del año en el que fueron consignadas al fondo de Cesantías o pagadas al empleado.  ',
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
                        'Pese a ello, la ley también contempla unos beneficios gracias a que considera las Cesantías rentas exentas para aquellos trabajadores cuyo ingreso mensual promedio durante los últimos 6 meses no exceda de 350 UVT ( $ 12.462.000 para el 2020).',
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
                        'Quienes superen este monto podrán tener unos porcentajes con beneficio, según el numeral 4 del artículo 206 del Estatuto Tributario. ',
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
                          type: 'code'
                        }
                      ],
                      value:
                        '<style type="text/css">\n\n\n.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}\n\n\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}\n\n\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}\n\n\n.tg .tg-dvid{font-weight:bold;background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n\n\n.tg .tg-fymr{font-weight:bold;border-color:inherit;text-align:left;vertical-align:top}\n\n\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n\n\n</style>\n\n\n<table class="tg">\n\n\n  <tr>\n\n\n    <th class="tg-dvid">Salario mensual promedio         </th>\n\n\n    <th class="tg-fymr">Parte no gravada</th>\n\n\n  </tr>\n\n\n  <tr>\n\n\n    <td class="tg-0pky">De 350 UVT a 410 UVT</td>\n\n\n    <td class="tg-0pky">90%</td>\n\n\n  </tr>\n\n\n  <tr>\n\n\n    <td class="tg-0pky">De 410 UVT a 470 UVT</td>\n\n\n    <td class="tg-0pky">80%</td>\n\n\n  </tr>\n\n\n  <tr>\n\n\n    <td class="tg-0pky">De 470 UVT a 530 UVT</td>\n\n\n    <td class="tg-0pky">60%</td>\n\n\n  </tr>\n\n\n  <tr>\n\n\n    <td class="tg-0pky">De 530 UVT a 590 UVT</td>\n\n\n    <td class="tg-0pky">40%</td>\n\n\n  </tr>\n\n\n  <tr>\n\n\n    <td class="tg-0pky">De 590 UVT a 650 UVT</td>\n\n\n    <td class="tg-0pky">20%</td>\n\n\n  </tr>\n\n\n  <tr>\n\n\n    <td class="tg-0pky">De 650 UVT en adelante</td>\n\n\n    <td class="tg-0pky">0%</td>\n\n\n  </tr>\n\n\n</table>',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: '\n\n',
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
                      value: '',
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
                      value: '',
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
                        '\nTodas las personas que tengan ingresos por rentas laborales deben registrarlos dentro de la cédula general. Recuerda que esta tiene como limitante para deducciones y rentas exentas el 40 % de los ingresos netos y hasta 5040 UVT (para el 2020, $ 179.459.000).',
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
                        '¿Quieres ver un ejemplo de cómo es el tratamiento tributario de tus Cesantías?',
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
                      value: '<LINK A SIMULADOR>',
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
                        'Pero no solo los empleados tienen beneficios al momento de declarar sus Cesantías. Los independientes también tienen un tratamiento especial.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías?',
          subtitulo: null,
          descripcioncorta:
            'Si ahorraste en Cesantías como independiente, puedes retirarlas fácilmente. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: 'Conoce los canales',
          metatittleSeo: '¿Cómo retirar las cesantías como Independiente?',
          descripcioncalltoaction: '¿Quieres retirar tus cesantías?',
          tiempoDeLectura: null,
          contentful_id: '56JeYGPwsJxOwK7RE66VAc',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Sigue estos pasos para retirar las cesantías que ahorraste en Protección.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Remítete a la sección Retiro de Cesantías online en nuestro sitio web para recibir el dinero en tu cuenta bancaria o en un cheque en cualquiera de las Oficinas de Servicio.',
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
                      value: ' ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Desde el sitio web de Protección:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Ingresa a la zona transaccional con tu clave personal (¿No tienes clave? Genérala aquí <link>).',
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
                                'En el menú izquierdo busca Transacciones Cesantías y, luego Retiros Cesantías.',
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
                                'En caso de tener varias cuentas, elige aquella de la que quieras hacer el retiro.',
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
                              value: 'Ingresa el valor a retirar.',
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
                                'Elige el modo de pago. Puedes escoger entre transferencia electrónica a una cuenta que hayas registrado con anterioridad o retiro en cheque.',
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
                                'Confirma los datos y dale clic a “Confirmar el retiro”.',
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
                                'Revisa tu celular y tu correo electrónico, allí te enviaremos la confirmación del retiro.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
          subtitulo: null,
          descripcioncorta:
            'En el camino para la adquisición o mejora de vivienda puedes incurrir en algunas equivocaciones. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Enséñame cuáles',
          textoCallToAction: '¿Cuánto debo ahorrar?',
          metatittleSeo:
            'Evita estos errores cuando uses tus cesantías para vivienda',
          descripcioncalltoaction:
            'Con estos consejos en mente, ¿ya decidiste hacer tu sueño realidad? ',
          tiempoDeLectura: null,
          contentful_id: '69iYiFT7j8ythJRHXi1FVh',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Sabemos que tu vivienda es una de las inversiones más importantes de la vida. Por esto, debes estar atento a cualquier error que pueda comprometer tu meta. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Cuando estás en el proceso de compra de vivienda, algunas veces se comenten errores. Estos son algunos de los más comunes que debes evitar.',
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
                      value:
                        '¿Qué errores evitar durante el proceso de compra de vivienda?',
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
                              value: 'No ahorrar: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'La compra de vivienda requiere planeación y disciplina financiera, por ello es importante contar con un ahorro. Tus Cesantías, así como otros depósitos o ahorros individuales ante bancos, cooperativas o fondos de empleados podrían serte útiles para el pago de tu cuota inicial, hacer las adecuaciones antes de que te traslades o abonar al crédito. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value:
                                'No tener un presupuesto para los gastos notariales e imprevistos: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'El valor publicado por las constructoras para sus inmuebles no incluye los gastos notariales para el registro del inmueble ya que estos corren por cuenta del comprador. Además, si deseas hacer algún tipo de mejora en la vivienda, esto podría implicar imprevistos por los que terminarás pagando. Por esto, debes contar con una parte del presupuesto destinada a esos gastos que podrían aparecer de repente. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Ignorar la ley del 30 %: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'En el proceso de compra te encontrarás con esta cifra. La primera será cuando recurras a un crédito, en la mayoría de los casos éste solo podrá ascender hasta el 70 % del valor de la vivienda, así que tú tendrás que pagar por adelantado ese 30 % restante. De otra parte, por disposiciones de ley, el valor de la cuota de tu crédito de vivienda no podrá ser superior al 30 % de los ingresos del grupo familiar. Así, si entre tu y tu pareja acumulan ingresos por 3.200.000 pesos, el valor de la cuota que deberás pagar no podrá ser superior a los 960.000 pesos.',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'No asegurar el inmueble: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Tu patrimonio es importante y si bien los bancos te exigirán que adquieras un seguro de vida y otro más para el inmueble, lo mejor es ampliar las coberturas. Revisa muy bien qué cubre tu seguro y si es posible amplía la cobertura para que tu casa esté cubierta ante cualquier eventualidad. ',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo aprovechar tus Cesantías para educación?',
          subtitulo: null,
          descripcioncorta:
            'Usa tus Cesantías para educación y cumple tus sueños junto a Protección.',
          linkCallToAction: null,
          textoCallToActionBite: 'Aprende más',
          textoCallToAction: 'Calcular mi ahorro',
          metatittleSeo: 'Invierte tus cesantías en educación',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '5kL0MGvKqd3MyjGBMHhauI',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              '¿Tienes el dinero de tus Cesantías y estás buscando qué hacer con este ahorro? Una opción es invertirlo en educación. '
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '¿Y cuáles son los beneficios?',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'La educación mejora el nivel de vida de las personas.',
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
                                'La educación no es un gasto, es una inversión a largo plazo.',
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
                                'Puede aumentar las posibilidades de mejorar tu calidad de vida.',
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
                                'Te brinda bienestar a ti y a toda tu familia.',
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
                                'La educación brinda la posibilidad de tener un mejor futuro.',
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
                                'Estudiar solo trae aspectos positivos a la vida de las personas.',
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
                                'Te da la oportunidad de crecer profesionalmente.',
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
                      marks: [],
                      value:
                        'Para comenzar, trázate un objetivo y toma una decisión. A partir de ella podrás llevar a cabo el plan para hacerla una realidad. Tu ahorro en Cesantías será el primer paso para lograrlo.',
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
                        '¿Quieres saber cuánto debes ahorrar? ¡Descúbrelo aquí!',
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
                      value: '\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo usar tus Cesantías para educación?',
          subtitulo: null,
          descripcioncorta:
            'Con Protección puedes hacer tus sueños realidad. Conoce aquí cómo puedes usar tus Cesantías para tu educación y la de tu familia.',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame más',
          textoCallToAction: '¿Cuánto ahorrar?',
          metatittleSeo:
            '¿Cómo usar tus cesantías para educación? Si eres Empleado',
          descripcioncalltoaction:
            '¿Quieres saber cuánto debes ahorrar? ¡Descúbrelo aquí!',
          tiempoDeLectura: null,
          contentful_id: '5SQhhmPt2TGAODy3FzhS9W',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Tu educación y la de tu familia es un factor fundamental para el bienestar de tu hogar. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Estos son los casos específicos en los que puedes usar tus Cesantías para este objetivo:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Para pagar el valor de tu matrícula en educación superior, la de tus hijos o cónyuge.',
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
                                'Puedes invertir tu ahorro en programas de educación superior, posgrados, educación continua y programas de gestión para el desarrollo humano. ',
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
                              value: 'Programas de idiomas. ',
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
                                'Para pagar las deudas para créditos educativos.',
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
                                'Para pago o compra de seguros educativos.',
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
                                'Para el ahorro programado destinado a la educación.',
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
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
          subtitulo:
            '¿Qué errores evitar durante el proceso de compra de vivienda?',
          descripcioncorta:
            'El camino a tu vivienda propia puede estar lleno de riesgos. Así podrás evitarlos. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cuáles',
          textoCallToAction: '¿Cómo puedes retirarlas?',
          metatittleSeo:
            'Errores al momento de usar tus cesantías para vivienda',
          descripcioncalltoaction:
            'Si ya estás listo para usar tus Cesantías...',
          tiempoDeLectura: null,
          contentful_id: '2f0ALTKds1WffwMmFuEQn3',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Protección te acompaña en la consecución de tu vivienda propia. Por eso te recomienda evitar una serie de errores en los que podrías incurrir en el proceso de compra. \n'
          },
          cuerpocontenido: {
            json: {
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
                          content: [
                            {
                              data: {},
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Retirar la totalidad de las Cesantías: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Así no estés trabajando o lo hagas como un independiente, debes procurar conservar una parte de tus Cesantías. Este monto, que no tiene que ser muy alto, te servirá cuando definas qué proyecto de vivienda quieres comprar. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'No ahorrar: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'La compra de vivienda requiere planeación y disciplina financiera, por ello es importante contar con un ahorro. Tus Cesantías, así como otros depósitos o ahorros individuales ante bancos, cooperativas o fondos de empleados podrían serte útiles para el pago de tu cuota inicial, hacer las adecuaciones antes de que te traslades o abonar al crédito. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value:
                                'No tener un presupuesto para los gastos notariales e imprevistos: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'El valor publicado por las constructoras para sus inmuebles no incluye los gastos notariales para el registro del inmueble ya que estos corren por cuenta del comprador. Además, si deseas hacer algún tipo de mejora en la vivienda, esto podría implicar imprevistos por los que terminarás pagando. Por esto, debes contar con una parte del presupuesto destinada a esos gastos que podrían aparecer de repente. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Ignorar la “ley del 30 %”: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'En el proceso de compra te encontrarás con esta cifra. La primera será cuando recurras a un crédito, este solo podrá ascender hasta el 70 % del valor de la vivienda, así que tú tendrás que pagar de antemano ese 30 % restante. De otra parte, por disposiciones de ley, el valor de la cuota de tu crédito de vivienda no podrá ser superior al 30 % de los ingresos del grupo familiar. Así, si entre tu y tu pareja acumulan ingresos por 3.200.000 pesos, el valor de la cuota que deberás pagar no podrá ser superior a los 960.000 pesos.',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'No asegurar el inmueble: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Tu patrimonio es importante y si bien los bancos te exigirán que adquieras un seguro de vida y otro más para el inmueble, lo mejor es ampliar las coberturas. Revisa muy bien qué cubre y qué no tu seguro y trata que tu casa esté segura ante cualquier eventualidad. ',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué es el mecanismo de protección al cesante?',
          subtitulo: null,
          descripcioncorta:
            '¿Perdiste tu empleo? El Estado cuenta con un programa con el que podrás aprovechar tus Cesantías y encaminarte a un nuevo trabajo. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Cuéntame',
          textoCallToAction: 'Muéstrame cómo',
          metatittleSeo: '¿Qué es el mecanismo de protección al cesante?',
          descripcioncalltoaction: '¿Necesitas acceder al mecanismo?',
          tiempoDeLectura: null,
          contentful_id: '2h10hWWctjjIj8J4n55xQB',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Perder un empleo no implica perder la afiliación a salud y demás beneficios sociales gracias al mecanismo de protección al cesante.\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'El mecanismo de protección al cesante es una estrategia que busca beneficiar a trabajadores desempleados, con el que se garantiza por un periodo máximo de 6 meses del acceso a servicios de salud, ahorro a pensiones y subsidio familiar.',
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
                        'Además, permite acceder a servicios de intermediación y capacitación para el retorno a la vida laboral.',
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
                      value: '¿Quiénes pueden acceder? ',
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
                      marks: [],
                      value:
                        'Todos los trabajadores del sector público y privado que hayan realizado aportes a las cajas de compensación familiar durante al menos un año, continuo o discontinuo, en el transcurso de los últimos tres años, en este caso la afiliación es obligatoria.',
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
                        'Pero no solo los trabajadores dependientes pueden acceder al mecanismo. Los independientes que hayan hecho aportes por un periodo de dos años en los últimos tres años también podrán disfrutar de este beneficio. ',
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
                      value: '¿Qué beneficios contempla?',
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
                                'Pago de cotización de salud a la EPS en la que te encuentras afiliado. ',
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
                                'Pago de la cotización al fondo de pensiones al que te encuentras vinculado. ',
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
                                'Cuota monetaria de subsidio familiar, en caso de que tuvieras derecho a ella. ',
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
                                'Acceso a la red de servicios de empleo, orientación ocupacional y capacitación.',
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
                                'En caso de haber destinado ahorros voluntarios de Cesantías, un incentivo monetario proporcional a lo ahorrado.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Para qué puedes retirar tus Cesantías?',
          subtitulo: null,
          descripcioncorta:
            'Como empleado, las Cesantías pueden servirte para alcanzar tus sueños. Conoce cómo aquí.',
          linkCallToAction: null,
          textoCallToActionBite: 'Aprende más',
          textoCallToAction: 'Muéstrame cómo',
          metatittleSeo: '¿Para qué retirar las cesantías si eres Empleado?',
          descripcioncalltoaction: '¿Quieres retirar tus cesantías?',
          tiempoDeLectura: null,
          contentful_id: '5cjVo81fAXzvsnlo19Xmqi',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Las Cesantías son un ahorro para el momento en el que pierdas tu empleo. Como empleado, también las puedes usar para alcanzar tus metas ya que las puedes retirar para:\n'
          },
          cuerpocontenido: {
            json: {
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
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Comprar una vivienda, terreno o un lote. ',
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
                              value: 'Mejorar o remodelar tu casa.',
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
                                'Construir tu casa en un terreno que ya tengas.',
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
                              value: 'Pagar los impuestos de tu vivienda.',
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
                                'Comprar títulos de vivienda adquiridos por tus empleadores con entidades públicas o privadas.',
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
                                'Pagar los cánones del leasing de tu vivienda. ',
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
                      marks: [],
                      value: '\nCon las Cesantías también puedes:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Pagar la matrícula de escuelas, colegios o universidades públicas.',
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
                                'Costear la matrícula de cualquier institución privada de educación superior.',
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
                              value: 'Abonar a la deuda del Icetex.',
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
                                'Pagar la matrícula de las instituciones de educación media o técnica académica con certificación internacional. ',
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
                                'Pagar los programas de Instituciones de Educación para el Trabajo y el Desarrollo Humano, antes denominada, educación no formal. ',
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
                              value: 'Estudiar idiomas.',
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
                      marks: [],
                      value:
                        'Ten en cuenta que tus Cesantías también pueden pagar para la educación de tu pareja o tus hijos.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo usar las Cesantías para vivienda?',
          subtitulo: '¿Cómo hacerlo?',
          descripcioncorta:
            'Las Cesantías te acercan a tu nueva vivienda. Conoce cómo puedes aprovecharlas. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: '¿Cuánto debo ahorrar?',
          metatittleSeo:
            'Usar las cesantías para vivienda: Cesante o Independiente',
          descripcioncalltoaction: 'Da el siguiente paso',
          tiempoDeLectura: null,
          contentful_id: '7ykETBxGAW4NT9xKPeNoNt',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Si estás pensando en comprar vivienda, puedes contar con tus Cesantías. Recuerda que ellas pueden servirte para alcanzar tus metas.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'La compra de vivienda es una de las inversiones más significativas de tu vida. Para lograr esta meta, necesitas planeación y disciplina financiera basadas en el ahorro.d',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Debes fijarte una meta: ¿cuándo quieres comprar tu casa?, ¿cuánto estás dispuesto a pagar por ella?',
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
                                'Luego de esto, debes pensar en un plan de ahorro que te acerque financieramente al proyecto de hacerte a una casa. Define un monto a ahorrar cada mes. Puedes optar por las Cesantías voluntarias o bien dejar en Protección las que ya te pagaron tus exempleadores. ',
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
                                'Después, mira tus ingresos y gastos. Piensa cómo podrías incrementar tus entradas de dinero y cómo podrías reducir algunos gastos. ',
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
                                'Revisa en tu presupuesto los gastos innecesarios u hormiga; es decir, aquellos que no cuidas como salidas, taxis, comidas por fuera del hogar y similares en los que podrías estar incurriendo.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías para vivienda?',
          subtitulo: null,
          descripcioncorta:
            'Estos son los pasos y requisitos que debes llenar para aprovechar tus Cesantías en vivienda. ',
          linkCallToAction: 'google.com',
          textoCallToActionBite: 'Muéstrame',
          textoCallToAction: 'Inmoviliza tus Cesantías',
          metatittleSeo: '¿Sabes cómo retirar tus cesantías para vivienda?',
          descripcioncalltoaction:
            '¿Estás listo para retirar tus Cesantías para vivienda? Da el siguiente paso… ',
          tiempoDeLectura: null,
          contentful_id: '7Kbn84oif8fKDBwG2ZwujP',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Si tomaste la decisión de usar tus Cesantías en vivienda, mira los pasos para retirarlas. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Ya que decidiste invertir tus Cesantías en vivienda, debes conocer los pasos que debes seguir para retirarlas de acuerdo al tipo de retiro y los canales:',
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
                      value: 'Por tipo de retiro',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Para compra o remodelación de vivienda',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida al fondo de Cesantías autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Del mismo modo, debe incluir los datos del empleador (razón social, tipo de identificación y número).',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: ' ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada.',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Para pago de leasing habitacional ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. ',
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
                                'La carta debe informar que el retiro autorizado por el empleador será destinado al pago de obligaciones adquiridas por leasing.',
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
                            'Para solicitudes en Oficinas de servicio, la carta podrá ser una copia. Para solicitudes en internet, se pueden adjuntar cartas digitalizadas.',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
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
                      value: 'Para retiros por subsidio familiar de vivienda',
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
                                'El retiro de Cesantías por el otorgamiento del subsidio de vivienda está sujeta a las condiciones establecidas por las entidades depositarias del ahorro. Por lo que debes validar ante ellas los requisitos exigidos para este trámite.',
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
                                'Del mismo modo, el pago dependerá de la destinación que el afiliado quiera darle al subsidio familiar de vivienda. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Para compra de vivienda',
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
                      marks: [],
                      value:
                        'El pago de las Cesantías se hará directamente a la entidad vendedora de la vivienda, con la presentación previa de la copia de la promesa de compraventa, la carta de asignación del subsidio y carta de autorización del afiliado para girar los dineros.',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Constancia de la inmovilización de las Cesantías por concepto de vivienda. ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Construcción de vivienda en sitio propio',
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
                      marks: [],
                      value:
                        'Se hará el pago directamente al contratista, persona o entidad a favor de quien se inmovilizaron las Cesantías, previa presentación de la copia del contrato de construcción, carta de asignación del subsidio y carta de autorización del afiliado para girar los dineros. ',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Constancia de la inmovilización de las Cesantías por concepto de vivienda. ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. Para solicitudes en Oficinas de Servicio, la carta podrá ser una copia. Para solicitudes en internet, se pueden adjuntar cartas digitalizadas. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Mejoramiento de vivienda',
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
                      marks: [],
                      value:
                        'Se hará el pago al contratista, persona o entidad en favor de quien se inmovilizaron las Cesantías, previa presentación de la copia del contrato de mejoramiento, carta de asignación del subsidio y carta de autorización del afiliado para girar los dineros. Para ello se debe presentar:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Constancia de la inmovilización de las Cesantías por concepto de vivienda. Cuando las Cesantías están inmovilizadas, el pago solo puede hacerse por las Oficinas de Servicio de Protección. ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. Para solicitudes en Oficinas de servicio, la carta podrá ser una copia. Para solicitudes en internet, se pueden adjuntar cartas digitalizadas. ',
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
                      marks: [],
                      value:
                        '<Destacado>Cuando las Cesantías están inmovilizadas, el pago solo puede hacerse por las Oficinas de Servicio de Protección. ',
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
                      value: 'Canales para retiros:',
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
                                'En el portal transaccional puedes solicitar el retiro por cualquier monto. El pago se hará en la vía que elijas.',
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
                                'Por medio del portal no transaccional, puedes retirar un monto hasta por 3 SMLMV (salarios mínimos legales mensuales vigentes). Este pago se hará en la vía que escojas.',
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
                                'En los PagaFácil podrás retirar un monto hasta por 10 SMLMV (salarios mínimos legales mensuales vigentes) en efectivo.',
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
                                'También puedes optar por las Oficinas Protección. Si estás trabajando y cuentas con la autorización del empleador, podrás solicitar el retiro por cualquier monto y se pagará en cheque, transferencia o por ventanilla en las sucursales de los bancos Davivienda y Bancolombia. ',
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
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo usar tus Cesantías para educación?',
          subtitulo: null,
          descripcioncorta:
            'Con Protección puedes hacer tus sueños realidad. Conoce aquí cómo puedes usar tus Cesantías para tu educación y la de tu familia.',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: '¡Descúbrelo aquí!',
          metatittleSeo:
            '¿Cómo usar tus cesantías para educación? Si eres Empleado',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '6VayIRbLZHiIADvP2T1X74',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Tu educación y la de tu familia es un factor fundamental para el bienestar de tu hogar. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Tu educación y la de tu familia es un factor fundamental para el bienestar de tu hogar. ',
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
                        'Estos son los casos específicos en los que puedes usar tus Cesantías para este objetivo:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Para pagar el valor de tu matrícula en educación superior, la de tus hijos o cónyuge.',
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
                                'Puedes invertir tu ahorro en programas de educación superior, posgrados, educación continua y programas de gestión para el desarrollo humano. ',
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
                              value: 'Programas de idiomas. ',
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
                                'Para pagar las deudas para créditos educativos.',
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
                                'Para pago o compra de seguros educativos.',
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
                                'Para el ahorro programado destinado a la educación. ',
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
                      marks: [],
                      value: '¿Quieres saber cuánto debes ahorrar?',
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
                      value: '\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías para educación?',
          subtitulo: null,
          descripcioncorta:
            'Como independiente y cesante también puedes apoyar tus proyectos educativos junto a Protección. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: 'Ir a la zona transaccional',
          metatittleSeo: 'Retirar tus cesantías para educación',
          descripcioncalltoaction: '¿Estás listo para retirar tus Cesantías?',
          tiempoDeLectura: null,
          contentful_id: '726uLfLeZM7B1ZspgLFYOU',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Como afiliado a Cesantías como cesante o independiente, puedes hacer el retiro de tus Cesantías directamente en www.proteccion.com.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'En el sitio web de Protección podrás elegir entre recibir el dinero en tu cuenta bancaria o solicitar el retiro en un cheque y reclamarlo en una Oficina de Servicio. Para hacerlo, debes seguir los siguientes pasos: ',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Ingresa a la zona transaccional de afiliados con tu clave personal ',
                              nodeType: 'text'
                            },
                            {
                              data: {
                                uri:
                                  'https://protecciond1.b2clogin.com/ProteccionD1.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_signin&client_id=a73df676-c8c9-48b7-ab28-0c23c676ae4f&redirect_uri=https%3A%2F%2Fwww.proteccion.com%2Fwps%2Fportal%2Fproteccion%2Fweb%2Fhome%2Fingreso-afiliados-pensionados%2F&scope=openid&response_type=id_token&response_mode=form_post&prompt=login'
                              },
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value: 'haciendo clic aquí.',
                                  nodeType: 'text'
                                }
                              ],
                              nodeType: 'hyperlink'
                            },
                            {
                              data: {},
                              marks: [],
                              value: '',
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
                                'Busca en el menú izquierdo Transacciones Cesantías / Retiros de Cesantías.',
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
                                'Si tienes varias cuentas, selecciona aquella de la que vas a hacer el retiro.',
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
                              value: 'Escribe el valor por retirar. ',
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
                                'Elige el medio de pago. Recuerda que puedes escoger entre transferencia electrónica a una cuenta bancaria registrada o retiro en cheque. ',
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
                              content: [
                                {
                                  data: {},
                                  content: [
                                    {
                                      data: {},
                                      marks: [],
                                      value:
                                        'Si escogiste la transferencia electrónica como medio de pago, debes elegir la cuenta bancaria que hayas matriculado previamente a la cual quieres que se le desembolse el dinero.',
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
                                        'Si seleccionas retiro en cheque, debes elegir la oficina en la que deseas reclamar el cheque. No olvides que debes reclamarlo a más tardar 30 días después de la solicitud. ',
                                      nodeType: 'text'
                                    }
                                  ],
                                  nodeType: 'paragraph'
                                }
                              ],
                              nodeType: 'list-item'
                            }
                          ],
                          nodeType: 'ordered-list'
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
                                'Verifica todos los datos sean correctos y haz clic en “Confirmar el retiro”.',
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
                                'Te enviaremos la confirmación a tu celular y a tu correo electrónico.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué es un portafolio?',
          subtitulo: null,
          descripcioncorta:
            '¿Sabías que existen dos portafolios para tus Cesantías? Conócelos y elige la mejor forma de administrarlos.',
          linkCallToAction: null,
          textoCallToActionBite: null,
          textoCallToAction: '¿Cómo cambiar de portafolio?',
          metatittleSeo: '¿Qué es un portafolio de inversión?',
          descripcioncalltoaction:
            'Ya que sabes qué son los portafolios, aprende cómo cambiarlos.',
          tiempoDeLectura: null,
          contentful_id: '7Aj4bDcmiRrjbSAJ4xTdYS',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Los portafolios de Cesantías son la herramienta con la que puedes incrementar o conservar la rentabilidad de tu ahorro en Cesantías de acuerdo con tus metas.\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Por ejemplo, si quieres conservarlas como un respaldo en caso de quedarte sin empleo o piensas en comprar vivienda dentro de unos años, puedes elegir el ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'portafolio a largo plazo. ',
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
                        'Con él tendrás una rentabilidad superior a la que obtendrías en el portafolio de corto plazo.',
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
                        'En cambio, si piensas retirar en menos de un año las Cesantías para tu educación o la compra de vivienda, puedes elegir el ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'portafolio a corto plazo. ',
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
                        'Con este se evitan los riesgos de pérdida de rentabilidad en los retiros, pues las inversiones tienen menor riesgo y una rentabilidad un poco menor que la de un portafolio de largo plazo.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Por qué y cómo cambiar de portafolio?',
          subtitulo: null,
          descripcioncorta:
            'Optimiza los rendimientos de tus cesantías eligiendo un portafolio acorde con tus metas. ',
          linkCallToAction: null,
          textoCallToActionBite: null,
          textoCallToAction: 'Cambiar mi portafolio',
          metatittleSeo: '¿Por qué y cómo cambiar de portafolio?',
          descripcioncalltoaction:
            'Ahora que sabes qué son, ¿quieres hacer una recomposición de portafolios?',
          tiempoDeLectura: null,
          contentful_id: '6jocC19hxizlFsNxtnEeeb',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Para elegir el portafolio que más te convenga tienes que tener claro lo que quieres hacer con este ahorro, pues de ello dependerá gran parte de tu decisión. \n\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        '¿Corto o largo plazo? Está claro que uno te da más rentabilidad pero tiene un mayor riesgo. \r\nEntonces, si tienes un proyecto que puede esperar lo recomendado es que elijas el largo plazo. Pero, si por el contrario necesitas tus Cesantías en poco tiempo, el corto plazo será tu mejor elección.\r',
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
                      value: 'Conoce aquí cómo cambiar tu portafolio:',
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
                      value: '',
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
                      value: '[INFOGRAFÍA]',
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
                      value: 'Elige el portafolio que más te convenga.',
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
                      value: 'Puedes optar entre:',
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
                      value: 'Largo plazo: ',
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
                        'Si quieres ahorrar tus Cesantías para estar preparado ante una pérdida de empleo. ',
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
                        'Si piensas comprar vivienda dentro de un par de años. ',
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
                        'Estás preparándote para pagar la educación tuya o de tus hijos.',
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
                        'Aumentarás la rentabilidad de tu ahorro a largo plazo.',
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
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Corto plazo:',
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
                        'Piensas en retirar tus Cesantías en menos de un año. ',
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
                      value: 'Estás pagando la educación de tus hijos. ',
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
                        'Te alistas para pagar mejoras en tu vivienda o estás en la recta final de la compra de una nueva.',
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
                      value: 'Evitarás la pérdida de valor en el corto plazo. ',
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
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Recomposición:',
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
                        'Recuerda que también puedes fraccionar el ahorro de tus Cesantías, eligiendo cómo quieres que se distribuyan. Cada 6 meses podrás modificar tu portafolio a largo plazo y solo una vez al año podrás cambiar tu portafolio a largo plazo.',
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
                        'En caso de que no le informes a Protección cómo distribuir tus Cesantías antes del 16 de agosto de cada año, el fondo trasladará todo tu ahorro al portafolio a largo plazo.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Qué es la inmovilización de las Cesantías y cómo podría servirte?',
          subtitulo: null,
          descripcioncorta:
            'Si quieres usar tus Cesantías para adquirir vivienda, deberás inmovilizarlas. ',
          linkCallToAction:
            'https://asistencia.webv2.allus.com.co/WebAPI802/ClicktoCallProteccion/ClicktoCall/customer.jsp',
          textoCallToActionBite: 'Cuéntamelo todo',
          textoCallToAction: ' Comunícate con nuestros asesores',
          metatittleSeo:
            'La Inmovilización de cesantías y cómo podría servirte',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '3twLfLO3fsuqjPv9woLUUf',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'La inmovilización de las Cesantías es un paso del proceso de postulación al subsidio de vivienda que entrega el Gobierno Nacional por medio de las cajas de compensación familiar y la caja de vivienda popular.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '¿Quién puede hacerlo?',
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
                      marks: [],
                      value:
                        'Como los trabajadores cuyas familias tengan un ingreso menor a los 4 salarios mínimos mensuales son quienes se pueden postular para obtener un subsidio de vivienda, solo ellos pueden solicitar la inmovilización de sus Cesantías.',
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
                      value: '¿Cómo inmovilizarlas?',
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
                      marks: [],
                      value:
                        'El proceso es simple: basta con que el afiliado se acerque a cualquiera de las Oficinas de Servicio de Protección y allí indique el monto de las Cesantías que quiere inmovilizar. Allí le expedirán un certificado que debe presentar ante la entidad en la que esté solicitando el subsidio de vivienda. ',
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
                        '¿Cómo levantar la inmovilización de las Cesantías?',
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
                      marks: [],
                      value:
                        'Hay tres escenarios en los que se podría necesitar el levantamiento de las Cesantías:',
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
                              value: 'Por asignación del subsidio: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Una vez se entrega el subsidio para el mejoramiento, ampliación o compra de vivienda, las Cesantías inmovilizadas se usarán para el pago de la transacción siempre y cuando el titular presente copia de la promesa de compraventa, contrato de construcción o mejoramiento, copia de la carta de asignación del subsidio y la autorización del trabajador. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Por no asignación del subsidio: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'El afiliado deberá contar con la autorización de la autoridad otorgante, como la caja de compensación o la caja de vivienda popular. ',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value:
                                'Por renuncia a la postulación del subsidio: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'El afiliado tendrá que remitirse a la entidad ante la que estaba tramitando su postulación (como la caja de compensación familiar) y solicitar una autorización escrita para que levantar la inmovilización con la que estaba aspirando al subsidio.',
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
                      marks: [],
                      value: '¿Tienes dudas?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué es el embargo de las Cesantías y por qué ocurre?',
          subtitulo: null,
          descripcioncorta:
            'Entérate de las circunstancias que pueden llevar al embargo de tus Cesantías. ',
          linkCallToAction:
            'https://asistencia.webv2.allus.com.co/WebAPI802/ClicktoCallProteccion/ClicktoCall/customer.jsp',
          textoCallToActionBite: 'Quiero saberlo',
          textoCallToAction: 'Llama a un asesor',
          metatittleSeo: 'El Embargo de cesantías y por qué ocurre',
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '2iWtieOqgqVgyRzkesMTVo',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'El embargo es una orden expedida por un juez mediante la cual se retienen las Cesantías a favor de una empresa o cooperativa. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Hay tres tipos de embargos:',
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
                              value: 'Por alimentos: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Cobija hijos menores de edad o hasta los 25 años que sean estudiantes. La medida, que requiere un oficio u orden judicial, no puede embargar más del 50 % de las Cesantías y se cancela mediante la expedición de un oficio del juzgado que impuso la retención.',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Por liquidación conyugal: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Beneficia a los cónyuges en proceso de disolución de la unión marital. Puede ser expedida por un juez o un comisario de familia mediante un oficio en el que informa si el embargo es del 50 % o el 100 % de las cuentas y si la medida se dio en una conciliación o si es de pago inmediato. El despacho que ordenó el embargo debe emitir un oficio ordenando el levantamiento de la medida para cancelar esta restricción.',
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
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: 'Por deudas con cooperativas: ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'En caso de que el trabajador incumpla sus compromisos con una deuda adquirida, un juez puede emitir una orden de embargo que en ningún caso podrá ser mayor al 50 % del valor disponible. Para levantarlo, basta con un oficio del juzgado que impuso la medida y el paz y salvo de la cooperativa. ',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '¿Tienes dudas?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo obtener tus extractos de Cesantías?',
          subtitulo: null,
          descripcioncorta:
            'Sigue estos sencillos pasos para descargar los extractos de tus Cesantías de Protección. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame cómo',
          textoCallToAction: '¡Actualiza tus datos!',
          metatittleSeo: '¿Cómo obtener tus extractos de cesantías?',
          descripcioncalltoaction:
            '¿Quieres recibir los extractos de tus Cesantías en la comodidad de tu computador o celular?',
          tiempoDeLectura: null,
          contentful_id: '68k4AOYQ2wNvoRhw4RmlNt',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Los extractos de Cesantías son los documentos que te permitirán tener un control de la evolución de tu ahorro.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Si quieres obtenerlos, solo basta con que actualices tus datos en el portal transaccional. Allí podrás elegir si quieres recibirlos por un medio físico o darle una mano al planeta y recibirlos en tu correo electrónico.',
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
                        'Recuerda que durante el año Protección emite dos extractos en abril y octubre. En el de abril podrás ver tus movimientos entre ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'el 1 de octubre y el 30 de marzo. ',
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
                        'En el de octubre podrás ver los movimientos ocurridos entre el ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: '1 de abril y el 30 de septiembre ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: 'en tus cuentas de Cesantías.',
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
                        'También puedes consultar los extractos de otros años en el portal transaccional. Solo tienes que ingresar con tu usuario y contraseña. ',
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
                        'Luego, haz clic en el botón “Certificados y extractos”, ubicado en el menú de la izquierda de la pantalla. Luego, haz clic en el botón “Cesantías” y luego baja hasta el botón “consultar” ubicado frente a extractos.',
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
                        'Finalmente, haz elige el año y periodo que quieras ver. Una vez los hayas elegido, oprime “Consultar”. Se abrirá una ventana emergente en el navegador en la que podrás ver el PDF con la información de tus Cesantías.  ',
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
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'Puedes recibir tus extractos en tu correo electrónico o por medio físico. Solo necesitas actualizar tus datos. ',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo aprovechar tus Cesantías?',
          subtitulo: null,
          descripcioncorta:
            'No basta con saber quién paga tus cesantías; también debes conocer cómo sacarles provecho.',
          linkCallToAction: null,
          textoCallToActionBite: 'Muéstrame',
          textoCallToAction: 'Inviértelas o ahórralas',
          metatittleSeo: 'Cómo aprovechar los aportes a cesantías',
          descripcioncalltoaction: 'Elige el mejor destino para tus Cesantías',
          tiempoDeLectura: null,
          contentful_id: '2XUKLJvv483VG4ZJtQpKBP',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Las Cesantías son un ahorro que te ayudará en momentos y situaciones específicas de tu vida. Por ejemplo, pueden serte útiles para sostenerte mientras encuentras un nuevo trabajo, construir tu hogar o para capacitarte en lo que te gusta.\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Desempleo',
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
                      marks: [],
                      value:
                        'Este ahorro te servirá como seguro en caso de quedarte sin trabajo. Con él podrás cubrir tus gastos fijos y evitarás tener a puros a fin de mes.',
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
                      value: 'Vivienda',
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
                              value: 'Compra de vivienda o lote',
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
                              value: 'Remodelación',
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
                              value: 'Construcción de vivienda',
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
                                'Liberación de gravámenes sobre el inmueble',
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
                              value: 'Pago de impuestos',
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
                              value: 'Pago de cánones de Leasing',
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
                              value: 'Compra de títulos de vivienda',
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
                      marks: [],
                      value: 'Educación',
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
                      marks: [],
                      value: 'Educación Superior:',
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
                              value: 'Educación en territorio nacional',
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
                              value: 'Educación en España',
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
                      marks: [],
                      value:
                        'Educación para el trabajo y el desarrollo humano:',
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
                                'Programas de educación Media con convenios en instituciones de educación superior.',
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
                                'Educación no formal con títulos acreditados por el Sistema Nacional de Formación para el Trabajo.',
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
                                'Instituciones de educación media, técnica académica con certificación internacional.',
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
                                'Educación para el trabajo y desarrollo humano ',
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
                              value: 'Programa de idiomas.',
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
                              value: 'Pago de créditos ICETEX.',
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
                              value: 'Pago de crédito educativo ',
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
                                'Retiro parcial de ahorro programado o seguro educativo ',
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
                      marks: [],
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué son los extractos de Cesantías y cómo leerlos?',
          subtitulo: null,
          descripcioncorta:
            'Conoce los extractos de Cesantías, aprende a leerlos y hazle un seguimiento a este ahorro. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Conócelos',
          textoCallToAction: 'Cómo obtenerlos',
          metatittleSeo: '¿Cómo obtener tus extractos de cesantías?',
          descripcioncalltoaction: '¿Quieres descargarlos?',
          tiempoDeLectura: null,
          contentful_id: '5WmDi3DUOLWYIUuN9OwmO8',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Los extractos de Cesantías son los documentos que te permitirán tener un control de la evolución de tu ahorro.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Los extractos de Cesantías son la herramienta en la que puedes hacerle un seguimiento a este ahorro que tienes en Protección. ',
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
                      value: 'Conócelos un poco más y aprende a leerlos. ',
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
                      value: '<Infográfico>',
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
                        'Los extractos son los documentos que emite cada seis meses Protección para contarle a sus afiliados en Cesantías los movimientos en sus cuentas.  ',
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
                        'Estos pueden llegarles a sus afiliados por Cesantías en abril y octubre. El de abril registrará los movimientos de las cuentas entre ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'el 1 de octubre y el 30 de marzo. ',
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
                        'Para el extracto de octubre, se registrarán los movimientos ocurridos entre el ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: '1 de abril y el 30 de septiembre. ',
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
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'Si tienes más de una cuenta de Cesantías, recibirás un extracto por cada cuenta. ',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'En caso tal de que hayas roto tu vínculo laboral con tu empleador y no hayas retirado la totalidad de tus Cesantías, recibirás un extracto de Cesantías voluntarias. ',
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
                      value: '¿Cómo leerlo?',
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
                      value: 'Aquí encontrarás tus datos.',
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
                        'En esta parte verás un resumen que tiene un saldo inicial, aportes, retiros, rendimientos y un aporte final.',
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
                        'Esta torta representa la distribución de tus Cesantías entre el portafolio de largo y el de corto plazo.',
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
                        'En la página siguiente verás un saldo inicial para el periodo, los aportes y retiros que hayas realizados. Aquí verás el rendimiento, es decir, cuánto han variado tus Cesantías. ',
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
                        'En este sector verás descritos los movimientos en la subcuenta de corto plazo y la de largo plazo.',
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
                      value: '',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Cuánto debes ahorrar para invertir tus Cesantías en educación?',
          subtitulo: null,
          descripcioncorta: null,
          linkCallToAction: null,
          textoCallToActionBite: null,
          textoCallToAction: 'Muéstramelos ya',
          metatittleSeo: null,
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '7v09njktD3kdVHtuSo0S2X',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Alcanzar tus metas educativas es una de las inversiones más importantes de la vida, además estas contribuyen al desarrollo y bienestar de toda la familia.\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Para lograrlo ten en cuenta que:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Fijar una meta y un plazo es fundamental para cumplir tus objetivos.',
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
                                'Conocer todos los requisitos y cumplirlos te ayudará a agilizar los procesos y tener un resultado exitoso.',
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
                                'Es fundamental tener claro lo que se quiere lograr: el programa a cursar, el lugar donde estudiar y la duración.',
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
                            'Nunca es tarde para empezar. De hecho, lo importante es comenzar a ahorrar y construir un patrimonio que te ayude a hacer realidad todos tus sueños. ¡En Protección podemos ayudarte! Descubre aquí cómo.',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Calcula cuánto es el monto total que debes ahorrar para hacer realidad este sueño:',
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
                      value: '<link a simulador>',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        '\n\nConoce los errores que debes evitar a la hora de usar tus Cesantías para educación.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo retirar tus Cesantías para vivienda?',
          subtitulo: 'Por tipo de retiro',
          descripcioncorta:
            'Estos son los pasos y requisitos que debes llenar para aprovechar tus Cesantías en vivienda. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Quiero ver los pasos',
          textoCallToAction: ' Inmoviliza tus Cesantías',
          metatittleSeo: null,
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '66N5lTW8JVzekerXR26ssq',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Ya que decidiste invertir tus Cesantías en vivienda, debes conocer los pasos que debes seguir para retirarlas de acuerdo al tipo de retiro y los canales:'
          },
          cuerpocontenido: {
            json: {
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
                      value: 'Para compra o remodelación de vivienda:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida al fondo de Cesantías autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Del mismo modo, debe incluir los datos del empleador (razón social, tipo de identificación y número).',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [
                                {
                                  type: 'bold'
                                }
                              ],
                              value: ' ',
                              nodeType: 'text'
                            },
                            {
                              data: {},
                              marks: [],
                              value:
                                'Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada.',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Para pago de leasing habitacional:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. ',
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
                                'La carta debe informar que el retiro autorizado por el empleador será destinado al pago de obligaciones adquiridas por leasing.',
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
                            'Para solicitudes en Oficinas de servicio, la carta podrá ser una copia. Para solicitudes en internet, se pueden adjuntar cartas digitalizadas.',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
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
                      value: 'Para retiros por subsidio familiar de vivienda:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'El retiro de Cesantías por el otorgamiento del subsidio de vivienda está sujeta a las condiciones establecidas por las entidades depositarias del ahorro. Por lo que debes validar ante ellas los requisitos exigidos para este trámite.',
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
                                'Del mismo modo, el pago dependerá de la destinación que el afiliado quiera darle al subsidio familiar de vivienda. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Para compra de vivienda:',
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
                        'El pago de las Cesantías se hará directamente a la entidad vendedora de la vivienda, con la presentación previa de la copia de la promesa de compraventa, la carta de asignación del subsidio y carta de autorización del afiliado para girar los dineros.',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Constancia de la inmovilización de las Cesantías por concepto de vivienda. ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Construcción de vivienda en sitio propio:',
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
                        'Se hará el pago directamente al contratista, persona o entidad a favor de quien se inmovilizaron las Cesantías, previa presentación de la copia del contrato de construcción, carta de asignación del subsidio y carta de autorización del afiliado para girar los dineros. ',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Constancia de la inmovilización de las Cesantías por concepto de vivienda. ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. Para solicitudes en Oficinas de Servicio, la carta podrá ser una copia. Para solicitudes en internet, se pueden adjuntar cartas digitalizadas. ',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'Mejoramiento de vivienda: ',
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
                        'Se hará el pago al contratista, persona o entidad en favor de quien se inmovilizaron las Cesantías, previa presentación de la copia del contrato de mejoramiento, carta de asignación del subsidio y carta de autorización del afiliado para girar los dineros. Para ello se debe presentar:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Constancia de la inmovilización de las Cesantías por concepto de vivienda. Cuando las Cesantías están inmovilizadas, el pago solo puede hacerse por las Oficinas de Servicio de Protección. ',
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
                                'Solicitud de retiro firmada por el afiliado con tipo y número de documento de identidad. ',
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
                                'Carta del empleador dirigida a Protección autorizando el retiro de las Cesantías. En ella se debe incluir el nombre del trabajador, tipo y número de documento de identidad y monto a retirar. Esta carta no puede presentar tachones, enmendaduras o estar mal diligenciada. Para solicitudes en Oficinas de servicio, la carta podrá ser una copia. Para solicitudes en internet, se pueden adjuntar cartas digitalizadas. ',
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
                            'Cuando las Cesantías están inmovilizadas, el pago solo puede hacerse por las Oficinas de Servicio de Protección. ',
                          nodeType: 'text'
                        }
                      ],
                      nodeType: 'paragraph'
                    }
                  ],
                  nodeType: 'blockquote'
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
                      value: 'Canales para retiros:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'En el portal transaccional puedes solicitar el retiro por cualquier monto. El pago se hará en la vía que elijas.',
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
                                'Por medio del portal no transaccional, puedes retirar un monto hasta por 3 SMLMV (salarios mínimos legales mensuales vigentes). Este pago se hará en la vía que escojas.',
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
                                'En los PagaFácil podrás retirar un monto hasta por 10 SMLMV (salarios mínimos legales mensuales vigentes) en efectivo.',
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
                                'También puedes optar por las Oficinas Protección. Si estás trabajando y cuentas con la autorización del empleador, podrás solicitar el retiro por cualquier monto y se pagará en cheque, transferencia o por ventanilla en las sucursales de los bancos Davivienda y Bancolombia.  ',
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
                      marks: [],
                      value:
                        'Ya que conoces cómo retirar tus Cesantías para vivienda, da el siguiente paso…',
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
                      value: '\n\n',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Qué es la pignoración de Cesantías?',
          subtitulo: null,
          descripcioncorta: null,
          linkCallToAction:
            'https://asistencia.webv2.allus.com.co/WebAPI802/ClicktoCallProteccion/ClicktoCall/customer.jsp',
          textoCallToActionBite: 'Explícame',
          textoCallToAction: 'Llama a un asesor',
          metatittleSeo: null,
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '2Hg2jZISXRoTNOev3jaVaw',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'La pignoración es un proceso mediante el cual se ponen las Cesantías como garantía para un préstamo entregado por el empleador, cajas de compensación familiar, fundaciones, cooperativas u otras instituciones. \n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'En el caso de los empleadores, la pignoración solo es procedente para préstamos de vivienda dirigidos a: ',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'La compra de vivienda.',
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
                                'La compra de un lote con el propósito de construir vivienda.',
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
                                'El pago de gravámenes hipotecarios o impuestos que afecten la casa o terreno del afiliado o su cónyuge. ',
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
                                'Adquisición de títulos de vivienda sobre planos contratadas con entidades públicas o privadas. ',
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
                                'Ampliación, remodelación o mejora de la vivienda del trabajador o su cónyuge.',
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
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: '¿Cómo se pignoran las Cesantías?',
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
                      marks: [],
                      value:
                        'Para pignorar las Cesantías, se debe enviar los siguientes documentos a Protección:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Solicitud escrita del empleador, indicando nombres y apellidos del afiliado, documento de identidad y valor a pignorar. ',
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
                                'Documento que contenga acuerdo de pignoración celebrado entre empleador y trabajador.',
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
                      marks: [],
                      value:
                        'En el caso de los afiliados asociados a una cooperativa, la notificación a Protección debe hacerla el representante legal de la cooperativa.',
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
                      value:
                        '¿Cómo se levanta una pignoración de las Cesantías?',
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
                      marks: [],
                      value:
                        'Cuando culmina el contrato, se debe proceder a verificar el saldo de la deuda con el empleador. En caso de que dicha obligación haya sido cancelada, el empleador deberá enviar un paz y salvo a Protección para pedir el levantamiento de la pignoración. ',
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
                        'En caso de que se trate de un trabajador que sea afiliado a una cooperativa, el representante legal debe comunicar a Protección la cancelación de la pignoración de las Cesantías del beneficiario. ',
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
                      value: '¿Tienes dudas?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo expedir los certificados de Cesantías?',
          subtitulo: null,
          descripcioncorta:
            '¿Necesitas un certificado? Aquí te contamos cómo podrás descargarlo. ',
          linkCallToAction: null,
          textoCallToActionBite: 'Aprende aquí',
          textoCallToAction: '¡Descárgalo ya!',
          metatittleSeo: null,
          descripcioncalltoaction: null,
          tiempoDeLectura: null,
          contentful_id: '6tY87D1HzbHQn4BXjJ0TOS',
          imagenes: null,
          descripcionlarga: {
            descripcionlarga:
              'Tener contigo los certificados de Cesantías que necesitas es más fácil de lo que imaginas.'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: ' Conoce aquí los paso que debes seguir:',
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
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Entra a nuestro sitio web ',
                              nodeType: 'text'
                            },
                            {
                              data: {
                                uri: 'http://www.proteccion.com'
                              },
                              content: [
                                {
                                  data: {},
                                  marks: [
                                    {
                                      type: 'underline'
                                    }
                                  ],
                                  value: 'www.proteccion.com',
                                  nodeType: 'text'
                                }
                              ],
                              nodeType: 'hyperlink'
                            },
                            {
                              data: {},
                              marks: [],
                              value: '',
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
                              value: 'Busca la sección "Soluciones a un clic".',
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
                              value: 'Selecciona la opción "Certifácil".',
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
                              value: 'Elige el producto Cesantías',
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
                              value: 'Verifica el certificado que necesites.',
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
                                'Selecciona la opción que más te conviene: descargarlo en tu computador o enviarlo a tu correo electrónico.',
                              nodeType: 'text'
                            }
                          ],
                          nodeType: 'paragraph'
                        }
                      ],
                      nodeType: 'list-item'
                    }
                  ],
                  nodeType: 'ordered-list'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: '¿Necesitas algún certificado?',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      }
    ]
  },
  allContentfulProducto: {
    edges: [
      {
        node: {
          titulo: 'Cesantías',
          contenido: [
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                }
              ],
              urlSeo: null,
              contentful_id: '12wxz9mZz9Ok44M64PSSXV',
              descripcioncorta:
                'Si se terminó tu contrato o cambiaste de empleo, te mostramos algunas opciones que te ayudarán a aprovechar tu ahorro.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/4ZxqAfFiWXWYYIGpyiB4M9/e4a3ea4633712e21dfa88cdeffb20f25/Para-que__-son-las-cesanti__as.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-13T17:53:20.923Z',
              titulo: '¿Para qué son las Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Independiente'
                },
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: null,
              contentful_id: '3yDxxmBbyiT6GPOnG2Dj5O',
              descripcioncorta:
                'Existen algunos casos específicos en los que podrás invertir tus Cesantías. Conoce aquí las alternativas.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/4ZxqAfFiWXWYYIGpyiB4M9/e4a3ea4633712e21dfa88cdeffb20f25/Para-que__-son-las-cesanti__as.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-11T14:49:11.616Z',
              titulo: '¿Para qué son las Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              contentful_id: '5WmDi3DUOLWYIUuN9OwmO8',
              descripcioncorta:
                'Conoce los extractos de Cesantías, aprende a leerlos y hazle un seguimiento a este ahorro. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/1FEyXdQi1LFHytoOgH3lHM/aa4f3839cbef921502fdf971a38f6425/PRUEBA-3.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T14:59:48.956Z',
              titulo: '¿Qué son los extractos de Cesantías y cómo leerlos?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: 'cesantias/tus-cesantias-proteccion/que-son/empleado',
              contentful_id: '2OJRVMtRN6wT6xJnlJc4sg',
              descripcioncorta:
                'Conoce todo lo que debes saber sobre las Cesantías y comienza a ahorrar junto a Protección.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/4GeNMRpbqcvjWIIHZEMeBK/70c178a5986fc320b73846a3b328c214/que_son-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-17T17:04:28.714Z',
              titulo: '¿Qué son las Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              contentful_id: '7Aj4bDcmiRrjbSAJ4xTdYS',
              descripcioncorta:
                '¿Sabías que existen dos portafolios para tus Cesantías? Conócelos y elige la mejor forma de administrarlos.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/1WZcOJ5EYotpoEdKogYLjH/fa40c22d9dc06fc46f9b6759ea91ffcf/portafolio-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T15:52:41.326Z',
              titulo: '¿Qué es un portafolio?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              contentful_id: '3twLfLO3fsuqjPv9woLUUf',
              descripcioncorta:
                'Si quieres usar tus Cesantías para adquirir vivienda, deberás inmovilizarlas. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/40teFxlZuEofqt9N1kqyvS/24488ae3798ff6f6e2f8cc571ab79d53/certificados_solicitud-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T15:43:02.600Z',
              titulo:
                '¿Qué es la inmovilización de las Cesantías y cómo podría servirte?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: null,
              contentful_id: '5cjVo81fAXzvsnlo19Xmqi',
              descripcioncorta:
                'Como empleado, las Cesantías pueden servirte para alcanzar tus sueños. Conoce cómo aquí.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/mEyo2dN3yOgL8XDzlffZV/5c4c06b360efcd89478c2780d6ec3bfb/para_que_se_retiran.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T16:14:47.148Z',
              titulo: '¿Para qué puedes retirar tus Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                }
              ],
              urlSeo: 'para-que-retirar-cesantias',
              contentful_id: '45hvk5smrzNIClX4qNW6O2',
              descripcioncorta:
                'Como cesante, las Cesantías pueden servirte para alcanzar tus sueños. Conoce cómo aquí',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/40GCbtmfQgOjEHPHVxiPnA/6f2dc87fccaf36bf94c1cfc7c6eacc00/para_que_son-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-11T20:33:38.042Z',
              titulo: '¿Para qué puedes retirar tus Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: null,
              contentful_id: '5SQhhmPt2TGAODy3FzhS9W',
              descripcioncorta:
                'Con Protección puedes hacer tus sueños realidad. Conoce aquí cómo puedes usar tus Cesantías para tu educación y la de tu familia.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/5fq2A2WyEWx86tkHSkSquF/b5dc27e9bb4023c24a546c9e23d0ee26/como-usarlas-para-educacio__n-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T16:27:30.017Z',
              titulo: '¿Cómo usar tus Cesantías para educación?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: null,
              contentful_id: '6VayIRbLZHiIADvP2T1X74',
              descripcioncorta:
                'Con Protección puedes hacer tus sueños realidad. Conoce aquí cómo puedes usar tus Cesantías para tu educación y la de tu familia.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/5fq2A2WyEWx86tkHSkSquF/b5dc27e9bb4023c24a546c9e23d0ee26/como-usarlas-para-educacio__n-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T15:58:13.020Z',
              titulo: '¿Cómo usar tus Cesantías para educación?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              contentful_id: '5kL0MGvKqd3MyjGBMHhauI',
              descripcioncorta:
                'Usa tus Cesantías para educación y cumple tus sueños junto a Protección.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/5fq2A2WyEWx86tkHSkSquF/b5dc27e9bb4023c24a546c9e23d0ee26/como-usarlas-para-educacio__n-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T16:30:26.222Z',
              titulo: '¿Cómo aprovechar tus Cesantías para educación?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: null,
              contentful_id: '2XUKLJvv483VG4ZJtQpKBP',
              descripcioncorta:
                'No basta con saber quién paga tus cesantías; también debes conocer cómo sacarles provecho.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/72jxOvoPP9xotRznE4w0EC/32fc70652557f541c305999a8c42e837/como_aprovecharlas_max.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T15:18:13.615Z',
              titulo: '¿Cómo aprovechar tus Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              contentful_id: '687bqpw2AHfdQhkadti9qp',
              descripcioncorta:
                'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/2MhhxlrR7szESfljlk4pBb/8e5f620d9c3b9129eecd47390a441d61/Cesanti__as-en-la-declaracio__n-de-renta.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-10T22:37:15.222Z',
              titulo: 'Cesantías en la declaración de renta'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              contentful_id: '5SRgmAyGybjlE53CoyO9xE',
              descripcioncorta:
                'Si tu sueño es tu vivienda, te contamos cómo hacer un plan de ahorro para alcanzarlo.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/3JNmbR9Kwsjol4VXNcheQ6/864c92b178bae9d46eeca40a811698c2/Co__mo-ahorrar-para-mi-vivienda.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-11T14:26:21.124Z',
              titulo: '¿Cómo ahorrar para mi vivienda?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Cesante'
                }
              ],
              urlSeo: null,
              contentful_id: 'JMgvbNPIdLpAkuktUZ1yp',
              descripcioncorta:
                'Estos son los requisitos para beneficiarte de este mecanismo mientras encuentras un nuevo empleo. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/5WEvPenNhKaDx6Wv4dmmGy/971554684d3d9dc66c3cde08f7f80205/Co__mo-acceder-al-mecanismo-de-proteccio__n-al-cesante.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-10T22:41:56.244Z',
              titulo: '¿Cómo acceder al mecanismo de protección al cesante?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              contentful_id: '1omXAGrNSZevRYD09pIh3d',
              descripcioncorta:
                'Así podrás aprovechar los beneficios tributarios que podrás disfrutar gracias a las cesantías. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/7HgBhf3WEsqR2HRCLwd05/32c743683e092739e2b4721c632bceee/C__mo-declarar-las-cesant__as-como-independiente.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-11T14:07:47.502Z',
              titulo: '¿Cómo declarar las cesantías como independiente?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              contentful_id: '7v09njktD3kdVHtuSo0S2X',
              descripcioncorta: null,
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/3LLpSNtugvFnOxs37JNtZd/6aee390b712b970d0d99f438dc2d827f/Cua__nto-debo-ahorrar-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-05T16:40:12.796Z',
              titulo:
                '¿Cuánto debes ahorrar para invertir tus Cesantías en educación?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              contentful_id: '2iWtieOqgqVgyRzkesMTVo',
              descripcioncorta:
                'Entérate de las circunstancias que pueden llevar al embargo de tus Cesantías. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/6NW2grKe9KakDqwWzEnE2A/4f3fd3be5de213b4db30a991fe29de7f/Embargo-que-es-y-para-que-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T15:24:07.736Z',
              titulo: '¿Qué es el embargo de las Cesantías y por qué ocurre?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: null,
              contentful_id: '2h10hWWctjjIj8J4n55xQB',
              descripcioncorta:
                '¿Perdiste tu empleo? El Estado cuenta con un programa con el que podrás aprovechar tus Cesantías y encaminarte a un nuevo trabajo. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/40teFxlZuEofqt9N1kqyvS/24488ae3798ff6f6e2f8cc571ab79d53/certificados_solicitud-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-06T16:19:07.188Z',
              titulo: '¿Qué es el mecanismo de protección al cesante?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Independiente'
                }
              ],
              urlSeo: null,
              contentful_id: '2Hg2jZISXRoTNOev3jaVaw',
              descripcioncorta: null,
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/43qqqfUTmU6hCyHlc3R1qf/1d80df9e98b44d3e8b0266d1f797847a/pignoracion-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-02-28T14:56:05.042Z',
              titulo: '¿Qué es la pignoración de Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                },
                {
                  descripcion: 'Empleado'
                }
              ],
              urlSeo: null,
              contentful_id: '2Lh4lX3RHAEe46jOVqw1nf',
              descripcioncorta:
                'Ahora que sabes qué son las Cesantías, debes saber quiénes deben aportar y cómo deben hacerlo. ',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/72ecUsgJmJT4qsznkcSKBS/e3e76640f5dc935a8e756d9e1cc93464/Quie__n-hace-los-aportes-Cua__nto-me-deben-consignar-min.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-16T14:15:19.732Z',
              titulo: '¿Qué son los aportes a Cesantías?'
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                },
                {
                  descripcion: 'Cesante'
                }
              ],
              urlSeo: null,
              contentful_id: '67bLxw6kifiYyfUp0vz3df',
              descripcioncorta:
                '¿Sabías que este ahorro tiene unos intereses que puedes disfrutar? Conoce más sobre ellos.',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/1tCiRIzszDECdJHAgsauDN/f0b9e081b2a754fca49711d1f5b3094f/Que__-son-los-intereses-de-las-cesanti__as.png?w=800&q=50'
                }
              },
              updatedAt: '2020-03-16T14:14:38.973Z',
              titulo: '¿Qué son los intereses de las Cesantías?'
            }
          ]
        }
      }
    ]
  },
  allContentfulContenidoEducativo: {
    edges: [
      {
        node: {
          titulo:
            '¿Qué errores evitar a la hora de usar tus Cesantías para educación?',
          contentful_id: '79Ao1qDGRqLs0V3YG3pSSU',
          contenido: {
            updatedAt: '2020-03-18T19:42:12.589Z',
            titulo:
              '¿Qué errores evitar a la hora de usar tus Cesantías para educación?',
            descripcioncorta:
              'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
            urlSeo:
              'https://www.proteccion.com/cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
            categoriaCliente: [
              {
                descripcion: 'Cesante'
              },
              {
                descripcion: 'Independiente'
              },
              {
                descripcion: 'Empleado'
              }
            ],
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
              }
            }
          }
        }
      },
      {
        node: {
          titulo: '¿Cómo aprovechar tus Cesantías?',
          contentful_id: '6FgFuWUdPTdUUdOfPSrYs5',
          contenido: {
            updatedAt: '2020-03-06T15:18:13.615Z',
            titulo: '¿Cómo aprovechar tus Cesantías?',
            descripcioncorta:
              'No basta con saber quién paga tus cesantías; también debes conocer cómo sacarles provecho.',
            urlSeo: null,
            categoriaCliente: [
              {
                descripcion: 'Cesante'
              },
              {
                descripcion: 'Empleado'
              }
            ],
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/72jxOvoPP9xotRznE4w0EC/32fc70652557f541c305999a8c42e837/como_aprovecharlas_max.png?w=800&q=50'
              }
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
          contentful_id: '2mMEvmzPnVDcKGe9TVvDDN',
          contenido: {
            updatedAt: '2020-03-06T16:25:35.656Z',
            titulo:
              '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
            descripcioncorta:
              'El camino a tu vivienda propia puede estar lleno de riesgos. Así podrás evitarlos. ',
            urlSeo: null,
            categoriaCliente: [
              {
                descripcion: 'Independiente'
              },
              {
                descripcion: 'Cesante'
              }
            ],
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/4tNxOYzenSZDhuvC8AAYSR/0297b33c23c88c090ff0d8d07bfb7a73/Recomendaciones-y-errores-comunes-min.png?w=800&q=50'
              }
            }
          }
        }
      },
      {
        node: {
          titulo:
            '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
          contentful_id: '7ktNv1ceAEb2k2hQ04pqsk',
          contenido: {
            updatedAt: '2020-03-06T19:45:09.333Z',
            titulo:
              '¿Qué errores evitar a la hora de usar tus Cesantías para vivienda?',
            descripcioncorta:
              'En el camino para la adquisición o mejora de vivienda puedes incurrir en algunas equivocaciones. ',
            urlSeo: null,
            categoriaCliente: [
              {
                descripcion: 'Empleado'
              }
            ],
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/4tNxOYzenSZDhuvC8AAYSR/0297b33c23c88c090ff0d8d07bfb7a73/Recomendaciones-y-errores-comunes-min.png?w=800&q=50'
              }
            }
          }
        }
      }
    ]
  },
  allContentfulTransaccion: {
    edges: [
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: [
            {
              descripcioncorta:
                '¿Ya decidiste la meta a la que le quieres destinar tus Cesantías? Ahora entérate cómo retirarlas',
              titulo: '¿Cómo retirar tus Cesantías?',
              updatedAt: '2020-03-18T16:56:00.098Z',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/1bIBhCRpmY0JBKbG6aXdzn/dfa3f62aff0d77dad7d98eb79a7b4ad8/como_retirar_cesantias-min.png?w=800&q=50'
                }
              },
              categoriaCliente: [
                {
                  descripcion: 'Empleado'
                }
              ]
            }
          ]
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      },
      {
        node: {
          contenido: null
        }
      }
    ]
  }
}

const data = {
  allContentfulProducto: {
    edges: [
      {
        node: {
          titulo: 'Cesantías',
          contenido: [
            {
              descripcioncorta:
                'Si se terminó tu contrato o cambiaste de empleo, te mostramos algunas opciones que te ayudarán a aprovechar tu ahorro.',
              titulo: '¿Para qué son las Cesantías?',
              contentful_id: '12wxz9mZz9Ok44M64PSSXV',
              updatedAt: '2020-03-13T17:53:20.923Z',
              tituloCorto: 'vencidario',
              textoIntroductorio: 'vencidario',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/4ZxqAfFiWXWYYIGpyiB4M9/e4a3ea4633712e21dfa88cdeffb20f25/Para-que__-son-las-cesanti__as.png?w=800&q=50'
                }
              },
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                }
              ]
            }
          ]
        }
      }
    ]
  },
  allContentfulTransaccion: {
    edges: [
      {
        node: {
          titulo: 'Cesantías',
          contenido: [
            {
              descripcioncorta:
                'Si se terminó tu contrato o cambiaste de empleo, te mostramos algunas opciones que te ayudarán a aprovechar tu ahorro.',
              titulo: '¿Para qué son las Cesantías?',
              contentful_id: '12wxz9mZz9Ok44M64PSSXV',
              updatedAt: '2020-03-13T17:53:20.923Z',
              textoIntroductorio: 'vencidario',
              tituloCorto: '¿Para qué son las Cesantías?',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/4ZxqAfFiWXWYYIGpyiB4M9/e4a3ea4633712e21dfa88cdeffb20f25/Para-que__-son-las-cesanti__as.png?w=800&q=50'
                }
              },
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                }
              ]
            }
          ]
        }
      }
    ]
  },
  allContentfulContenidoEducativo: {
    edges: [
      {
        node: {
          titulo: '¿Cómo aprovechar tus Cesantías?',
          contentful_id: '6FgFuWUdPTdUUdOfPSrYs5',
          contenido: {
            descripcioncorta:
              'No basta con saber quién paga tus cesantías; también debes conocer cómo sacarles provecho.',
            titulo: '¿Cómo aprovechar tus Cesantías?',
            updatedAt: '2020-03-06T15:18:13.615Z',
            textoIntroductorio: 'vencidario',
            tituloCorto: '¿Para qué son las Cesantías?',
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/72jxOvoPP9xotRznE4w0EC/32fc70652557f541c305999a8c42e837/como_aprovecharlas_max.png?w=800&q=50'
              }
            },
            categoriaCliente: [
              {
                descripcion: 'Cesante'
              },
              {
                descripcion: 'Empleado'
              }
            ]
          }
        }
      }
    ]
  },
  allContentfulContenido: {
    edges: [
      {
        node: {
          titulo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          tituloCorto: 'vencindario',
          subtitulo: 'Subtitulo',
          descripcioncorta: 'Corta',
          textoIntroductorio: 'vencidario',
          linkCallToAction: 'https://www.segurosexito.com/',
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: 'Compra tu SOAT y disfruta tu beneficio',
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          keywordsSeo: {
            keywordsSeo:
              'portafolio, que es un portafolio, portafolio de inversion, que es un portafolio de inversion, inversiones portafolio'
          },
          metadescripcionSeo: {
            metadescripcionSeo:
              'El portafolio ideal para ti depende de lo que quieres hacer con tu ahorro de cesantías. Uno te da más rentabilidad pero tiene mayor riesgo. Conócelos aquí.'
          },
          descripcioncalltoaction: '¡Ingresa ahora!',
          tiempoDeLectura: '2',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              }
            }
          ],
          descripcionlarga: {
            descripcionlarga: '\n\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Si ahorras tus Cesantías en Protección y realizas la compra del SOAT para carro o moto en puntos de venta de Seguros Éxito* o en [www.segurosexito.com](https://www.segurosexito.com), recibirás un descuento en tu próxima compra de $20.000 pesos que podrás usar en los almacenes Éxito, Carulla, Surtimax, Super Inter y Surtimayorista.\r\n\r\nEste descuento lo puedes redimir 4 días hábiles posteriores a la compra del SOAT, con tan solo ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'indicar el convenio 490',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' y presentar tu documento de identidad, al momento de pagar tus compras en la caja registradora de estos almacenes.\r\n\r\n',
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
                        'Este beneficio es un reconocimiento a tu decisión de ahorrar en Protección',
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
                        '\r\n*“Oferta válida del 14 de febrero del 2020 al 13 de febrero del 2021. No aplica para Costa Norte, Tolima y Valle del Cauca ni vehículos matriculados en estas zonas. Esta oferta aplica en www.segurosexito.com, www.exito.com, www.carulla.com y almacenes Éxito, Carulla, Surtimax, Surtimayorista, Super Inter (Manizales) y Estaciones de Servicio Éxito con venta de SOAT. Por la compra de tu SOAT auto particular acumulas 200 Puntos Colombia y 100 Puntos Colombia por tu SOAT moto. Descuento no acumulable con otras ofertas, se otorga el descuento de mayor valor equivalente en pesos. Éxito® marca registrada de Almacenes Éxito S.A. Seguros Generales Suramericana S.A.”*',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      }
    ]
  }
}

const dataLarge = {
  allContentfulProducto: {
    edges: [
      {
        node: {
          titulo: 'Cesantías',
          contenido: [
            {
              descripcioncorta:
                'Si se terminó tu contrato o cambiaste de empleo, te mostramos algunas opciones que te ayudarán a aprovechar tu ahorro.',
              titulo: '¿Para qué son las Cesantías?',
              contentful_id: '12wxz9mZz9Ok44M64PSSXV',
              updatedAt: '2020-03-13T17:53:20.923Z',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/4ZxqAfFiWXWYYIGpyiB4M9/e4a3ea4633712e21dfa88cdeffb20f25/Para-que__-son-las-cesanti__as.png?w=800&q=50'
                }
              },
              categoriaCliente: [
                {
                  descripcion: 'Cesante'
                }
              ]
            }
          ]
        }
      }
    ]
  },
  allContentfulContenidoEducativo: {
    edges: [
      {
        node: {
          titulo: '¿Cómo aprovechar tus Cesantías?',
          contentful_id: '6FgFuWUdPTdUUdOfPSrYs5',
          contenido: {
            descripcioncorta:
              'No basta con saber quién paga tus cesantías; también debes conocer cómo sacarles provecho.',
            titulo: '¿Cómo aprovechar tus Cesantías?',
            updatedAt: '2020-03-06T15:18:13.615Z',
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/72jxOvoPP9xotRznE4w0EC/32fc70652557f541c305999a8c42e837/como_aprovecharlas_max.png?w=800&q=50'
              }
            },
            categoriaCliente: [
              {
                descripcion: 'Cesante'
              },
              {
                descripcion: 'Empleado'
              }
            ]
          }
        }
      }
    ]
  },
  allContentfulContenido: {
    edges: [
      {
        node: {
          titulo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          tituloCorto: null,
          subtitulo: 'Subtitulo',
          descripcioncorta: 'Corta',
          linkCallToAction: 'https://www.segurosexito.com/',
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: 'Compra tu SOAT y disfruta tu beneficio',
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          descripcioncalltoaction: '¡Ingresa ahora!',
          tiempoDeLectura: '2',
          imagenes: [
            {
              description: '',
              title: '',
              file: {
                fileName: 'sdasds.png',
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/3DmcG4MbSqAg3By3bwYwPo/4a8f2fe01b4b34fa1970d8d30e1b88d6/imgtipos.png?w=800&q=50'
              }
            }
          ],
          descripcionlarga: {
            descripcionlarga: '\n\n'
          },
          cuerpocontenido: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Si ahorras tus Cesantías en Protección y realizas la compra del SOAT para carro o moto en puntos de venta de Seguros Éxito* o en [www.segurosexito.com](https://www.segurosexito.com), recibirás un descuento en tu próxima compra de $20.000 pesos que podrás usar en los almacenes Éxito, Carulla, Surtimax, Super Inter y Surtimayorista.\r\n\r\nEste descuento lo puedes redimir 4 días hábiles posteriores a la compra del SOAT, con tan solo ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'indicar el convenio 490',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' y presentar tu documento de identidad, al momento de pagar tus compras en la caja registradora de estos almacenes.\r\n\r\n',
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
                        'Este beneficio es un reconocimiento a tu decisión de ahorrar en Protección',
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
                        'Si ahorras tus Cesantías en Protección y realizas la compra del SOAT para carro o moto en puntos de venta de Seguros Éxito* o en [www.segurosexito.com](https://www.segurosexito.com), recibirás un descuento en tu próxima compra de $20.000 pesos que podrás usar en los almacenes Éxito, Carulla, Surtimax, Super Inter y Surtimayorista.\r\n\r\nEste descuento lo puedes redimir 4 días hábiles posteriores a la compra del SOAT, con tan solo ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'indicar el convenio 490',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' y presentar tu documento de identidad, al momento de pagar tus compras en la caja registradora de estos almacenes.\r\n\r\n',
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
                        'Este beneficio es un reconocimiento a tu decisión de ahorrar en Protección',
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
                        'Si ahorras tus Cesantías en Protección y realizas la compra del SOAT para carro o moto en puntos de venta de Seguros Éxito* o en [www.segurosexito.com](https://www.segurosexito.com), recibirás un descuento en tu próxima compra de $20.000 pesos que podrás usar en los almacenes Éxito, Carulla, Surtimax, Super Inter y Surtimayorista.\r\n\r\nEste descuento lo puedes redimir 4 días hábiles posteriores a la compra del SOAT, con tan solo ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'indicar el convenio 490',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' y presentar tu documento de identidad, al momento de pagar tus compras en la caja registradora de estos almacenes.\r\n\r\n',
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
                        'Este beneficio es un reconocimiento a tu decisión de ahorrar en Protección',
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
                        '\r\n*“Oferta válida del 14 de febrero del 2020 al 13 de febrero del 2021. No aplica para Costa Norte, Tolima y Valle del Cauca ni vehículos matriculados en estas zonas. Esta oferta aplica en www.segurosexito.com, www.exito.com, www.carulla.com y almacenes Éxito, Carulla, Surtimax, Surtimayorista, Super Inter (Manizales) y Estaciones de Servicio Éxito con venta de SOAT. Por la compra de tu SOAT auto particular acumulas 200 Puntos Colombia y 100 Puntos Colombia por tu SOAT moto. Descuento no acumulable con otras ofertas, se otorga el descuento de mayor valor equivalente en pesos. Éxito® marca registrada de Almacenes Éxito S.A. Seguros Generales Suramericana S.A.”*',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      }
    ]
  }
}

const dataIncomplete = {
  allContentfulProducto: {
    edges: [
      {
        node: {
          titulo: 'Cesantías',
          contenido: []
        }
      }
    ]
  },
  allContentfulContenidoEducativo: {
    edges: []
  },
  allContentfulTransaccion: {
    edges: []
  },
  allContentfulContenido: {
    edges: [
      {
        node: {
          titulo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          tituloCorto: null,
          subtitulo: null,
          descripcioncorta: null,
          linkCallToAction: 'https://www.segurosexito.com/',
          textoCallToActionBite: 'Quiero conocer más',
          textoCallToAction: 'Compra tu SOAT y disfruta tu beneficio',
          metatittleSeo:
            'Si tus Cesantías están en Protección, ya tienes un beneficio exclusivo en el SOAT',
          keywordsSeo: {
            keywordsSeo:
              'portafolio, que es un portafolio, portafolio de inversion, que es un portafolio de inversion, inversiones portafolio'
          },
          metadescripcionSeo: {
            metadescripcionSeo:
              'El portafolio ideal para ti depende de lo que quieres hacer con tu ahorro de cesantías. Uno te da más rentabilidad pero tiene mayor riesgo. Conócelos aquí.'
          },
          descripcioncalltoaction: '¡Ingresa ahora!',
          tiempoDeLectura: '2',
          imagenes: null,
          descripcionlarga: null,
          cuerpocontenido: {
            json: {
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
                      value: 'Ordinarias',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Las Cesantías ordinarias nacieron gracias a la Ley 50. Esta ley aplica de',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: ' forma obligatoria ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        'para los trabajadores que establecieron un contrato a partir del 1 de enero de 1991 y de ',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold'
                        }
                      ],
                      value: 'forma voluntaria',
                      nodeType: 'text'
                    },
                    {
                      data: {},
                      marks: [],
                      value: null,
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
                        'En este tipo de Cesantías se consigna de forma anual a un fondo de pensiones y Cesantías, el cual es encargado de administrar este dinero.',
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
                      value: 'Retroactivas',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'heading-6'
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'En este caso las Cesantías del trabajador permanecen en manos de la empresa durante todo el contrato laboral.',
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
                        'La prestación social se calcula con base en el último salario del empleado por el tiempo del servicio.',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          }
        }
      }
    ]
  }
}

global.window = Object.create(window)
const url = {
  url: 'http://localhost:8000/home/contenido',
  pathname: '/contenido/',
  state: { key: '1588081418971' }
}
Object.defineProperty(window, 'location', {
  value: {
    href: url,
    pathname: '/contenido/',
    state: { key: '1588081418971' }
  }
})

const mockStore = configureStore()
const initialState = {
  youcantmiss: {
    userValue: dataUser
  },
  home: {
    categoria: 'Cesantias',
    subCategoria: 'Cesante'
  },
  welcome: {
    typeUser: 1
  }
}

describe('Layout mobile', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      allContentfulCampana: {
        edges: []
      },
      allContentfulBeneficio: {
        edges: []
      },
      allContentfulContenidoEducativo: {
        edges: []
      },
      allContentfulNovedad: {
        edges: []
      },
      allContentfulProducto: {
        edges: []
      },
      allContentfulInformes: {
        edges: []
      },
      allContentfulActualidadDeInversiones: {
        edges: []
      },
      allContentfulAlternativaCerrada: {
        edges: []
      },
      allContentfulOfertaDiferencial: {
        edges: []
      },
      allContentfulLeyesYDecretos: {
        edges: []
      },
      allContentfulCorporativoYAccionistas: {
        edges: []
      },
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      },
      site: {
        siteMetadata: {
          title: 'Protección: Pensiones, Cesantías, Ahorro e Inversión ',
          description:
            '¡Protección tiene lo que necesitas! Queremos conocerte y saber qué te interesa: Invertir, ahorrar, saber sobre pensiones o cesantías. Ingresa aquí.',
          author: '@proteccion',
          siteUrl: 'https://https://vaxtpmde69.proteccion.com.co'
        }
      }
    })
  })
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
  })

  it('renders click ver más mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wraperMobile = mount(
      <Provider store={store}>
        <LayoutInternalContentPage
          pageContext={{
            isCreatedByStatefulCreatePages: false,
            slug:
              'cesantias/como-usarlas/vivienda/cesante-independiente/que-errores-evitar/',
            id: '1kio5mE1HZTJgBKSl89vM4',
            type: 'educativo',
            line: 'Cesantías',
            bites: {
              line: 'Cesantías',
              biteOne: {
                id: '1kio5mE1HZTJgBKSl89vM4',
                cliente: [{ nombre: 'not name', contentful_id: 'not id' }],
                tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                type: 'educativo',
                category: [
                  {
                    nombre: 'Cesantías',
                    contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                  }
                ],
                urlSeo:
                  'cesantias/como-usarlas/vivienda/cesante-independiente/que-errores-evitar',
                subcategoria: [
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
              },
              biteTwo: {
                id: '51QUG2hfA3ftt3L2koBTnE',
                cliente: [{ nombre: 'not name', contentful_id: 'not id' }],
                tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                type: 'producto',
                category: [
                  {
                    nombre: 'Cesantías',
                    contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
                  }
                ],
                urlSeo:
                  'cesantias/pignoracion-embargo-inmovilizacion/en-que-consiste-inmovilizar',
                subcategoria: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [{ nombre: 'Cesantías' }]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [{ nombre: 'Cesantías' }]
                  },
                  {
                    descripcion: 'Independiente',
                    contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                    lineadenegocio: [{ nombre: 'Cesantías' }]
                  }
                ]
              },
              biteOther: [
                {
                  id: '4SFZQxJCVrRBME6lLqdVSW',
                  type: 'beneficio',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  ],
                  urlSeo: 'cesantias/por-que-estar-proteccion',
                  cliente: [
                    {
                      nombre: 'Afiliado',
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                    }
                  ],
                  tema: [
                    {
                      contentful_id: '6QSO0SouYnUllWRWOubCZR',
                      tituloCorto: 'Canales Retiro'
                    }
                  ],
                  subcategoria: [
                    {
                      contentful_id: '5fP153BoelxfRsusePVnBU',
                      descripcion: 'Cesante',
                      lineadenegocio: [{ nombre: 'Cesantías' }]
                    },
                    {
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                      descripcion: 'Empleado',
                      lineadenegocio: [{ nombre: 'Cesantías' }]
                    },
                    {
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                      descripcion: 'Independiente',
                      lineadenegocio: [{ nombre: 'Cesantías' }]
                    },
                    {
                      contentful_id: '7lDDi92WQvINHDoyppiGG1',
                      descripcion: 'Pensión por invalidez',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }]
                    },
                    {
                      contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
                      descripcion: 'Pensión por sobrevivencia',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }]
                    },
                    {
                      contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
                      descripcion: 'Pensión por vejez',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }]
                    },
                    {
                      contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
                      descripcion: 'Soy pensionado',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }]
                    }
                  ]
                },
                {
                  id: 'MiIKyQViyofCgn4WkWLvE',
                  type: 'educativo',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  ],
                  urlSeo: 'empresas-cesantias-retiros',
                  cliente: [
                    {
                      nombre: 'Empleador',
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                    }
                  ],
                  tema: [
                    {
                      contentful_id: '6QSO0SouYnUllWRWOubCZR',
                      tituloCorto: 'Canales Retiro'
                    }
                  ],
                  subcategoria: [
                    {
                      lineadenegocio: [{ nombre: 'Cesantías' }],
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      lineadenegocio: [{ nombre: 'Cesantías' }],
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      lineadenegocio: [{ nombre: 'Cesantías' }],
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                      descripcion: 'Independiente'
                    },
                    {
                      contentful_id: '7lDDi92WQvINHDoyppiGG1',
                      descripcion: 'Pensión por invalidez',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }]
                    },
                    {
                      contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
                      descripcion: 'Pensión por sobrevivencia',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }]
                    },
                    {
                      descripcion: 'Pensión por vejez',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
                      contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                    },
                    {
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
                      descripcion: 'Soy pensionado',
                      contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
                    },
                    {
                      contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
                      descripcion: 'Conozco de Inversiones',
                      lineadenegocio: [{ nombre: 'Inversión' }]
                    },
                    {
                      descripcion: 'Estoy Aprendiendo',
                      lineadenegocio: [{ nombre: 'Inversión' }],
                      contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                    }
                  ]
                },
                {
                  id: '24ZCw88Mt35VoQTtBW13pj',
                  type: 'educativo',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  ],
                  urlSeo: 'cesantias/retiro-cesantias/como-retirarlas',
                  cliente: [
                    {
                      nombre: 'Afiliado',
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                    },
                    {
                      nombre: 'Empleador',
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                    }
                  ],
                  tema: [
                    {
                      contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                      tituloCorto: 'Vivienda'
                    },
                    {
                      contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                      tituloCorto: 'Educación'
                    },
                    {
                      contentful_id: '6QSO0SouYnUllWRWOubCZR',
                      tituloCorto: 'Canales Retiro'
                    }
                  ],
                  subcategoria: [
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    }
                  ]
                },
                {
                  id: '2LTgDjm1j1nHnUz3fNTj2d',
                  type: 'educativo',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  ],
                  urlSeo: 'cesantias/retiro-cesantias/disminucion-ingresos',
                  cliente: [
                    {
                      nombre: 'Afiliado',
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                    }
                  ],
                  tema: [
                    {
                      contentful_id: '6QSO0SouYnUllWRWOubCZR',
                      tituloCorto: 'Canales Retiro'
                    }
                  ],
                  subcategoria: [
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
                },
                {
                  id: '23wGFDP6zN4KUqUg39HTsH',
                  type: 'educativo',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  ],
                  urlSeo: 'empresas/gestionar-retiro-cesantias',
                  cliente: [
                    {
                      nombre: 'Empleador',
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                    }
                  ],
                  tema: [
                    {
                      contentful_id: '6QSO0SouYnUllWRWOubCZR',
                      tituloCorto: 'Canales Retiro'
                    }
                  ],
                  subcategoria: [
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
                },
                {
                  id: '34Yl1Lbb9kwskG0a3VgjI3',
                  type: 'educativo',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  ],
                  urlSeo:
                    'cesantias/como-usarlas/como-retirarlas/empleado-cesante',
                  cliente: [
                    {
                      nombre: 'Afiliado',
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                    }
                  ],
                  tema: [
                    {
                      contentful_id: '6QSO0SouYnUllWRWOubCZR',
                      tituloCorto: 'Canales Retiro'
                    }
                  ],
                  subcategoria: [
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
              ],
              biteThere: {
                id: '7s2xq7rgMj4ktUt3bHhjok',
                cliente: [{ nombre: 'not name', contentful_id: 'not id' }],
                tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                type: 'producto',
                category: [
                  {
                    nombre: 'Cesantías',
                    contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
                  }
                ],
                urlSeo: 'cesantias/aportes/que-son',
                subcategoria: [
                  {
                    descripcion: 'Cesante',
                    contentful_id: '5fP153BoelxfRsusePVnBU',
                    lineadenegocio: [{ nombre: 'Cesantías' }]
                  },
                  {
                    descripcion: 'Empleado',
                    contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                    lineadenegocio: [{ nombre: 'Cesantías' }]
                  }
                ]
              }
            },
            bite2: '51QUG2hfA3ftt3L2koBTnE',
            bite3: '7s2xq7rgMj4ktUt3bHhjok',
            ids: [
              '1kio5mE1HZTJgBKSl89vM4',
              '51QUG2hfA3ftt3L2koBTnE',
              '7s2xq7rgMj4ktUt3bHhjok'
            ]
          }}
          location={url}
          data={DtaAcessos}
        >
          {' '}
          <div>Hello!</div>{' '}
        </LayoutInternalContentPage>
      </Provider>
    )
    const btn = wraperMobile.find('#btn-show-more-mobile')
  })

  it('renders click ver más mobile data inlcomplete', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wraperMobile = mount(
      <Provider store={store}>
        <LayoutInternalContentPage
          pageContext={{
            isCreatedByStatefulCreatePages: false,
            slug: 'cesantias/que-son',
            id: '2OJRVMtRN6wT6xJnlJc4sg',
            type: 'producto',
            bites: {
              biteOne: {
                id: '2OJRVMtRN6wT6xJnlJc4sg',
                cliente: [{ nombre: 'not name', contentful_id: 'not id' }],
                tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                type: 'producto',
                category: [{ nombre: 'Cesantías' }],
                subcategoria: [
                  {
                    descripcion: 'Pensión de Invalidez o Sobrevivencia',
                    contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                  },
                  {
                    descripcion: 'Pensión Obligatoria',
                    contentful_id: '6FaTOsdYE9K5BqX58y0c5F'
                  }
                ]
              },
              biteTwo: {
                id: '24C0wWGZpjU6iGAcLnFMyD',
                cliente: [{ nombre: 'not name', contentful_id: 'not id' }],
                tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                type: 'servicio',
                category: [{ nombre: 'Cesantías' }],
                subcategoria: [
                  {
                    descripcion: 'Pensión de Invalidez o Sobrevivencia',
                    contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                  },
                  {
                    descripcion: 'Pensión Obligatoria',
                    contentful_id: '6FaTOsdYE9K5BqX58y0c5F'
                  }
                ]
              },
              biteOther: [
                {
                  id: '4SFZQxJCVrRBME6lLqdVSW',
                  type: 'beneficio',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  ],
                  urlSeo: 'cesantias/por-que-estar-proteccion',
                  cliente: [
                    {
                      nombre: 'Afiliado',
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                    }
                  ],
                  tema: [
                    {
                      contentful_id: '6QSO0SouYnUllWRWOubCZR',
                      tituloCorto: 'Canales Retiro'
                    }
                  ],
                  subcategoria: [
                    {
                      contentful_id: '5fP153BoelxfRsusePVnBU',
                      descripcion: 'Cesante',
                      lineadenegocio: [{ nombre: 'Cesantías' }]
                    },
                    {
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA',
                      descripcion: 'Empleado',
                      lineadenegocio: [{ nombre: 'Cesantías' }]
                    },
                    {
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                      descripcion: 'Independiente',
                      lineadenegocio: [{ nombre: 'Cesantías' }]
                    },
                    {
                      contentful_id: '7lDDi92WQvINHDoyppiGG1',
                      descripcion: 'Pensión por invalidez',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }]
                    },
                    {
                      contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
                      descripcion: 'Pensión por sobrevivencia',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }]
                    },
                    {
                      contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
                      descripcion: 'Pensión por vejez',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }]
                    },
                    {
                      contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
                      descripcion: 'Soy pensionado',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }]
                    }
                  ]
                },
                {
                  id: 'MiIKyQViyofCgn4WkWLvE',
                  type: 'educativo',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  ],
                  urlSeo: 'empresas-cesantias-retiros',
                  cliente: [
                    {
                      nombre: 'Empleador',
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                    }
                  ],
                  tema: [
                    {
                      contentful_id: '6QSO0SouYnUllWRWOubCZR',
                      tituloCorto: 'Canales Retiro'
                    }
                  ],
                  subcategoria: [
                    {
                      lineadenegocio: [{ nombre: 'Cesantías' }],
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      lineadenegocio: [{ nombre: 'Cesantías' }],
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    },
                    {
                      lineadenegocio: [{ nombre: 'Cesantías' }],
                      contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
                      descripcion: 'Independiente'
                    },
                    {
                      contentful_id: '7lDDi92WQvINHDoyppiGG1',
                      descripcion: 'Pensión por invalidez',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }]
                    },
                    {
                      contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
                      descripcion: 'Pensión por sobrevivencia',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }]
                    },
                    {
                      descripcion: 'Pensión por vejez',
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
                      contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                    },
                    {
                      lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
                      descripcion: 'Soy pensionado',
                      contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
                    },
                    {
                      contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
                      descripcion: 'Conozco de Inversiones',
                      lineadenegocio: [{ nombre: 'Inversión' }]
                    },
                    {
                      descripcion: 'Estoy Aprendiendo',
                      lineadenegocio: [{ nombre: 'Inversión' }],
                      contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
                    }
                  ]
                },
                {
                  id: '24ZCw88Mt35VoQTtBW13pj',
                  type: 'educativo',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  ],
                  urlSeo: 'cesantias/retiro-cesantias/como-retirarlas',
                  cliente: [
                    {
                      nombre: 'Afiliado',
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                    },
                    {
                      nombre: 'Empleador',
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                    }
                  ],
                  tema: [
                    {
                      contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
                      tituloCorto: 'Vivienda'
                    },
                    {
                      contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
                      tituloCorto: 'Educación'
                    },
                    {
                      contentful_id: '6QSO0SouYnUllWRWOubCZR',
                      tituloCorto: 'Canales Retiro'
                    }
                  ],
                  subcategoria: [
                    {
                      descripcion: 'Cesante',
                      contentful_id: '5fP153BoelxfRsusePVnBU'
                    },
                    {
                      descripcion: 'Empleado',
                      contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                    }
                  ]
                },
                {
                  id: '2LTgDjm1j1nHnUz3fNTj2d',
                  type: 'educativo',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  ],
                  urlSeo: 'cesantias/retiro-cesantias/disminucion-ingresos',
                  cliente: [
                    {
                      nombre: 'Afiliado',
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                    }
                  ],
                  tema: [
                    {
                      contentful_id: '6QSO0SouYnUllWRWOubCZR',
                      tituloCorto: 'Canales Retiro'
                    }
                  ],
                  subcategoria: [
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
                },
                {
                  id: '23wGFDP6zN4KUqUg39HTsH',
                  type: 'educativo',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  ],
                  urlSeo: 'empresas/gestionar-retiro-cesantias',
                  cliente: [
                    {
                      nombre: 'Empleador',
                      contentful_id: '7IF4VrReibXT0Vb13iX3rd'
                    }
                  ],
                  tema: [
                    {
                      contentful_id: '6QSO0SouYnUllWRWOubCZR',
                      tituloCorto: 'Canales Retiro'
                    }
                  ],
                  subcategoria: [
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
                },
                {
                  id: '34Yl1Lbb9kwskG0a3VgjI3',
                  type: 'educativo',
                  category: [
                    {
                      nombre: 'Cesantías',
                      contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
                    }
                  ],
                  urlSeo:
                    'cesantias/como-usarlas/como-retirarlas/empleado-cesante',
                  cliente: [
                    {
                      nombre: 'Afiliado',
                      contentful_id: '3XCf8zuzh5bGWNcuvFBuwx'
                    }
                  ],
                  tema: [
                    {
                      contentful_id: '6QSO0SouYnUllWRWOubCZR',
                      tituloCorto: 'Canales Retiro'
                    }
                  ],
                  subcategoria: [
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
              ],
              biteThere: {
                id: '69iYiFT7j8ythJRHXi1FVh',
                cliente: [{ nombre: 'not name', contentful_id: 'not id' }],
                tema: [
                  {
                    contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
                    tituloCorto: 'GENERICO PARA AHORRO'
                  }
                ],
                type: 'educativo',
                category: [{ nombre: 'Cesantías' }],
                subcategoria: [
                  {
                    descripcion: 'Pensión de Invalidez o Sobrevivencia',
                    contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                  },
                  {
                    descripcion: 'Pensión Obligatoria',
                    contentful_id: '6FaTOsdYE9K5BqX58y0c5F'
                  }
                ]
              }
            },
            bite2: '24C0wWGZpjU6iGAcLnFMyD',
            bite3: '69iYiFT7j8ythJRHXi1FVh'
          }}
          location={url}
          data={dataUserCompleto}
        >
          {' '}
          <div>Hello!</div>{' '}
        </LayoutInternalContentPage>
      </Provider>
    )
    const btn = wraperMobile.find('#btn-show-more-mobile')
    const dots = wraperMobile.find('.slick-active')
  })
})
