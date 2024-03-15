import React from 'react'
import renderer from 'react-test-renderer'
import ContenidoComponente, { Contenido } from './contenido'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import ScrollAnimate from '../components/molecules/scroll-animation/scroll-animation'
import scrollData from '../components/molecules/scroll-animation/dataScroll.json'
import { mount } from 'enzyme'
import dataCompleteUser from './contenido.json'

const datacntenido = {
  allContentfulCampana: {
    edges: [
      {
        node: {
          contenido: {
            tituloCorto: 'Afiliación Digital',
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/2CUSX7aRUxEYEAoLYn4IuK/eceb371f082d42521f513a4b7ec17bad/AfiliaciondigitalHOME.png?w=800&q=50'
              },
              file: { fileName: 'AfiliaciondigitalHOME.png' },
              description: '',
              title: ''
            },
            textoIntroductorio:
              'Afiliate a Pensión Obligatoria de manera digital en segundos',
            urlSeo: 'afiliaciondigital/pension',
            textoCallToActionBite: 'Conocer más',
            tipoBite: 'campañas'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: 'Afiliación Digital',
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/2CUSX7aRUxEYEAoLYn4IuK/eceb371f082d42521f513a4b7ec17bad/AfiliaciondigitalHOME.png?w=800&q=50'
              },
              file: { fileName: 'AfiliaciondigitalHOME.png' },
              description: '',
              title: ''
            },
            textoIntroductorio:
              'Afiliate a Pensión Obligatoria de manera digital en segundos',
            urlSeo: 'afiliaciondigital/pension',
            textoCallToActionBite: 'Conocer más',
            tipoBite: 'campañas'
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
            tituloCorto: 'Retiro de Cesantías por Disminución de Ingresos',
            urlSeo: 'Cesantias-DisminucionIngresos',
            textoCallToActionBite: '¡Conoce más aquí!',
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/4cZ5pa8RG190spQ2veabhj/7c88e4a67a18154f0d414582eadea844/Cu__nto-debo-ahorrar-max.jpg?w=800&q=50'
              },
              file: { fileName: 'Cuánto-debo-ahorrar-max.jpg' },
              description: '',
              title: ''
            },
            tipoBite: 'destacado'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: 'Utiliza nuestros canales digitales',
            urlSeo: 'novedad/canales-digitales',
            textoCallToActionBite: 'Quiero conocer más',
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/1wwx1C2zdeGpiT3eVvFvkA/e4e33d7bed953e8b679d33f80a83a311/como-acceder-al-mecanismo-de-protecci__n-al-cesante-max.jpg?w=800&q=50'
              },
              file: {
                fileName:
                  'como-acceder-al-mecanismo-de-protección-al-cesante-max.jpg'
              },
              description: '',
              title: ''
            },
            tipoBite: 'destacado'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: 'Con Vecindario haz realidad tu sueño de vivienda',
            urlSeo: 'cesantias/novedad/vecindario',
            textoCallToActionBite: 'Quiero conocer más',
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/2coWOKoFJrelW0GzeviGV2/822fdf14e6b8a07a168adf144b731e76/cesantias-en-la-declaracion-de-renta-max.jpg?w=800&q=50'
              },
              file: {
                fileName: 'cesantias-en-la-declaracion-de-renta-max.jpg'
              },
              description: '',
              title: ''
            },
            tipoBite: 'destacado'
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
            urlSeo: 'cesantias/soat',
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/6bgVKaPXgm98a18VNeFlUP/cb02f3874628da63b7914838e94ec4d1/Por-que__-estar-en-Proteccio__n-max.jpeg?w=800&q=50'
              },
              file: { fileName: 'Por-qué-estar-en-Protección-max.jpeg' },
              description: '',
              title: ''
            },
            tituloCorto: 'Beneficio SOAT Protección',
            textoCallToActionBite: 'Quiero conocer más',
            tipoBite: 'destacado'
          }
        }
      },
      {
        node: {
          contenido: {
            urlSeo: 'Beneficio/Cajadecompensacion',
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/39XjEukdY3V6jfMva5q7y5/8d6c9433799d3c9a91a313427c55064a/WhatsApp_Image_2020-04-08_at_12.12.56.jpeg?w=800&q=50'
              },
              description: '',
              title: '',
              file: { fileName: 'WhatsApp Image 2020-04-08 at 12.12.56.jpeg' }
            },
            tituloCorto: 'Cajas de Compensación Familiar',
            textoCallToActionBite: 'Quiero conocer más',
            tipoBite: 'destacado'
          }
        }
      },
      {
        node: {
          contenido: {
            urlSeo: 'cesantias/soat',
            imagenpequena: {
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/30ghGrUHaovWemYkb4yWQn/11c223a12621a96443662840468a72fc/Qu__-son-los-intereses-de-las-cesant__as-max.jpg?w=800&q=50'
              },
              file: {
                fileName: 'Qué-son-los-intereses-de-las-cesantías-max.jpg'
              },
              description: '',
              title: ''
            },
            tituloCorto: '¡Conoce este nuevo beneficio!',
            textoCallToActionBite: 'Conocer más',
            tipoBite: 'destacado'
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
      { node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null } },
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
              textoIntroductorio:
                '¿Decidiste la meta que quieres alcanzar con tus Cesantías?',
              textoCallToActionBite: 'Descúbrelo ahora',
              tituloCorto: '¿Cómo retirar tus Cesantías?',
              urlSeo: 'cesantias/como-usarlas/como-retirarlas/empleado',
              imagenpequena: {
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/3LLDtskhG5bnb7whabxQrC/abf5433c5ff86324c5433def79d73a36/como_retirar_cesantias-max.jpg?w=800&q=50'
                },
                file: { fileName: 'como_retirar_cesantias-max.jpg' },
                description: '',
                title: ''
              },
              descripcioncorta:
                '¿Ya decidiste la meta a la que le quieres destinar tus Cesantías? Ahora entérate cómo retirarlas',
              categoriaCliente: [{ descripcion: 'Empleado' }],
              updatedAt: '2020-04-24T16:53:06.198Z'
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
      { node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null } },
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
      { node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null } },
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
      { node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null } },
      { node: { lineaDeNegocio: null, contenido: null } },
      { node: { lineaDeNegocio: [{ nombre: 'Cesantías' }], contenido: null } },
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
  allContentfulProducto: {
    edges: [
      {
        node: {
          titulo: 'Cesantías',
          contenido: [
            {
              categoriaCliente: [{ descripcion: 'Cesante' }],
              textoIntroductorio:
                '¿Terminó tu contrato laboral? ¡Conoce cómo utlizar las Cesantías!',
              descripcioncorta:
                'Si se terminó tu contrato o cambiaste de empleo, te mostramos algunas opciones que te ayudarán a aprovechar tu ahorro.',
              tituloCorto: '¿Para qué son las Cesantías?',
              textoCallToActionBite: 'Cuéntame',
              updatedAt: '2020-04-17T16:05:47.441Z',
              urlSeo: 'cesantias/para-que-son/cesante',
              imagenpequena: {
                file: {
                  fileName: 'Por-qué-y--cómo-cambiar-de-portafolio-max (1).jpg'
                },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/7t6iaACnyW0eLXyqT2xeHm/1c0fe3eb805c15f96c5837f22f3dce4d/Por-qu__-y--c__mo-cambiar-de-portafolio-max__1_.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Independiente' },
                { descripcion: 'Empleado' }
              ],
              textoIntroductorio:
                'Conoce aquí la manera correcta de utilizar tus Cesantías',
              descripcioncorta:
                'Conoce aquí la manera correcta de utilizar tus Cesantías',
              tituloCorto: 'Cesantías ¿Para qué son?',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-04-17T16:05:47.743Z',
              urlSeo: 'cesantias/para-que-son/empleado-independiente',
              imagenpequena: {
                file: { fileName: 'Para-qué-son-las-cesantías-max.jpg' },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/2mxYx2A33kzE4jtYrZVSv1/429f2a3061f7ddef45821704de07e925/Para-qu__-son-las-cesant__as-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Cesante' },
                { descripcion: 'Empleado' },
                { descripcion: 'Independiente' }
              ],
              textoIntroductorio: 'Hazle seguimiento a tu ahorro',
              descripcioncorta:
                'Conoce los extractos de Cesantías, aprende a leerlos y hazle un seguimiento a este ahorro. ',
              tituloCorto: '¿Qué son los extractos de Cesantías?',
              textoCallToActionBite: 'Conócelos',
              updatedAt: '2020-04-24T16:50:51.859Z',
              urlSeo: 'cesantias/extractos',
              imagenpequena: {
                file: { fileName: 'extractos-que-son-y-como-leerlos-max.jpg' },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/47E7eGkcCgHga74c0iPctT/408462a7e8a6f594385509e0558d4eeb/extractos-que-son-y-como-leerlos-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Empleado' },
                { descripcion: 'Cesante' },
                { descripcion: 'Independiente' }
              ],
              textoIntroductorio:
                'Conoce todo lo que debes saber sobre las Cesantías',
              descripcioncorta:
                'Conoce todo lo que debes saber sobre las Cesantías y comienza a ahorrar junto a Protección.',
              tituloCorto: '¿Qué son las Cesantías?',
              textoCallToActionBite: ' Quiero conocer más',
              updatedAt: '2020-04-29T01:06:49.744Z',
              urlSeo: 'cesantias/que-son',
              imagenpequena: {
                file: { fileName: 'que-son-max.jpg' },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/6a1tFekwvZqD6WG1665OQp/864814695bb99f4fae56fcb7ec83aab6/que-son-max.jpg?w=800&q=50'
                },

                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Cesante' },
                { descripcion: 'Empleado' },
                { descripcion: 'Independiente' }
              ],
              textoIntroductorio:
                'Existen 2 tipos de portafolios para tus Cesantías',
              descripcioncorta:
                '¿Sabías que existen dos portafolios para tus Cesantías? Conócelos y elige la mejor forma de administrarlos.',
              tituloCorto: 'Cesantías Corto Plazo o Largo Plazo',
              textoCallToActionBite: '¡Quiero conocerlos!',
              updatedAt: '2020-04-17T16:05:47.444Z',
              urlSeo: 'cesantias/portafolios/que-son',
              imagenpequena: {
                file: { fileName: 'portafolio-max.jpg' },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/7b1WR8x6gU3qgvjn57e2Pv/9f7c416c8c33eb9d15b6100bf5f3fed5/portafolio-max.jpg?w=800&q=50'
                },

                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Cesante' },
                { descripcion: 'Empleado' },
                { descripcion: 'Independiente' }
              ],
              textoIntroductorio: 'Entérate aquí de qué se trata',
              descripcioncorta:
                'Si quieres usar tus Cesantías para adquirir vivienda, deberás inmovilizarlas. ',
              tituloCorto: '¿Qué es la inmovilización de las Cesantías?',
              textoCallToActionBite: 'Quiero conoce más',
              updatedAt: '2020-04-17T16:04:45.863Z',
              urlSeo:
                'cesantias/pignoracion-embargo-inmovilizacion/inmovilizacion',
              imagenpequena: {
                file: {
                  fileName:
                    'Qué-es-la-inmovilización-de-las-cesantías-y-cómo-podría--servirte-max (1).jpg'
                },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/7i2A8qC7xYMMjIsUvizi0a/87b9ea69c8aec417b5078e9fecb90268/Qu__-es-la-inmovilizaci__n-de-las-cesant__as-y-c__mo-podr__a--servirte-max__1_.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [{ descripcion: 'Empleado' }],
              textoIntroductorio:
                'Apoya tus sueños de vivienda o educación con tus Cesantías',
              descripcioncorta:
                'Como empleado, las Cesantías pueden servirte para alcanzar tus sueños. Conoce cómo aquí.',
              tituloCorto: 'Conoce cómo utilizar tus Cesantías',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-04-17T16:05:47.711Z',
              urlSeo: 'cesantias/como-usarlas/para-que-retirarlas/empleado',
              imagenpequena: {
                file: { fileName: 'para_que_se_retiran_max.jpg' },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/5W1v97vzRKSefJSGsiRLh6/ef636a59699dc13eefc5b6460624ccd2/para_que_se_retiran_max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [{ descripcion: 'Cesante' }],
              textoIntroductorio:
                '¿Te quedaste sin empleo? Conoce cómo utilizar tus Cesantías',
              descripcioncorta:
                'Como cesante, las Cesantías pueden servirte para alcanzar tus sueños. Conoce cómo aquí',
              tituloCorto: 'Conoce cómo utilizar tus Cesantías',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-04-17T16:05:47.437Z',
              urlSeo: 'cesantias/como-usarlas/para-que-retirarlas/cesante',
              imagenpequena: {
                file: {
                  fileName:
                    'Quién-hace-los-aportes-Cuánto-me-deben-consignar-max (1).jpg'
                },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/4BFdPZttD1aZNyw74VXXsM/13ce61c45cc60fccce6d42b18fdd49dc/Qui__n-hace-los-aportes-Cu__nto-me-deben-consignar-max__1_.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [{ descripcion: 'Empleado' }],
              textoIntroductorio: 'Como usar tus cesantías para educación',
              descripcioncorta:
                'Con Protección puedes hacer tus sueños realidad. Conoce aquí cómo puedes usar tus Cesantías para tu educación y la de tu familia.',
              tituloCorto: 'Cesantías para Educación',
              textoCallToActionBite: 'Muéstrame más',
              updatedAt: '2020-04-17T16:06:50.333Z',
              urlSeo: null,
              imagenpequena: {
                description: '',
                title: '',
                file: { fileName: 'como-usarlas-para-educación-max.jpg' },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/5QqW4jHATgW6hirYMIYLsI/59ab83060f0c0f349cf49fece7661fd6/como-usarlas-para-educaci__n-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [{ descripcion: 'Empleado' }],
              textoIntroductorio: 'Cesantías educación',
              descripcioncorta:
                'Con Protección puedes hacer tus sueños realidad. Conoce aquí cómo puedes usar tus Cesantías para tu educación y la de tu familia.',
              tituloCorto: 'Cesantías educación',
              textoCallToActionBite: 'Muéstrame cómo',
              updatedAt: '2020-04-17T16:05:47.395Z',
              urlSeo: 'cesantias/como-usarlas/educacion/empleado',
              imagenpequena: {
                file: { fileName: 'como-usarlas-para-educación-max.jpg' },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/5QqW4jHATgW6hirYMIYLsI/59ab83060f0c0f349cf49fece7661fd6/como-usarlas-para-educaci__n-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Cesante' },
                { descripcion: 'Independiente' }
              ],
              textoIntroductorio: 'Descubre como usarlas para educación aquí',
              descripcioncorta:
                'Usa tus Cesantías para educación y cumple tus sueños junto a Protección.',
              tituloCorto: 'Cesantías para Educación',
              textoCallToActionBite: 'Aprende más',
              updatedAt: '2020-04-17T16:17:18.459Z',
              urlSeo:
                'cesantias/como-usarlas/educacion/cesante-independiente/oportunidad',
              imagenpequena: {
                file: { fileName: 'como-usarlas-para-educación-max.jpg' },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/5QqW4jHATgW6hirYMIYLsI/59ab83060f0c0f349cf49fece7661fd6/como-usarlas-para-educaci__n-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Empleado' },
                { descripcion: 'Independiente' }
              ],
              textoIntroductorio:
                'Descubre cómo usar tus cesantías para la declaración de renta',
              descripcioncorta:
                'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
              tituloCorto: 'Declaración de renta',
              textoCallToActionBite: 'Ir a allá',
              updatedAt: '2020-04-20T20:56:20.460Z',
              urlSeo: 'cesantias/declaracion',
              imagenpequena: {
                file: {
                  fileName: 'Cesantías-en-la-declaración-de-renta-max.jpg'
                },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/1Au5drnmd063szHlTndSZF/ad282083a00dd6384f3d0e6e6be51cdf/Cesant__as-en-la-declaraci__n-de-renta-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Cesante' },
                { descripcion: 'Independiente' },
                { descripcion: 'Empleado' }
              ],
              textoIntroductorio:
                '¡Entérate cómo puedes utilizar tus Cesantías para vivienda!',
              descripcioncorta:
                'Si tu sueño es tu vivienda, te contamos cómo hacer un plan de ahorro para alcanzarlo.',
              tituloCorto: '¿Ahorrar para vivienda?',
              textoCallToActionBite: 'Cuéntame cómo',
              updatedAt: '2020-04-17T16:07:36.093Z',
              urlSeo: 'cesantias/como-usarlas/vivienda/cuanto-ahorrar',
              imagenpequena: {
                file: {
                  fileName: 'como-usar-las-cesantías-para-vivienda-max.jpg'
                },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/40S9z3pVPsOuOssanSkDaR/42a5b1791e4e55e3f62cab8fec5de4e4/como-usar-las-cesant__as-para-vivienda-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Empleado' },
                { descripcion: 'Cesante' }
              ],
              textoIntroductorio: 'descubre los beneficios aquí',
              descripcioncorta:
                'Estos son los requisitos para beneficiarte de este mecanismo mientras encuentras un nuevo empleo. ',
              tituloCorto: 'Mecanismo protección cesante',
              textoCallToActionBite: 'Muéstrame',
              updatedAt: '2020-04-17T16:15:59.850Z',
              urlSeo: null,
              imagenpequena: {
                file: {
                  fileName:
                    'como-acceder-al-mecanismo-de-protección-al-cesante-max (1).jpg'
                },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/2GheWuXoEYrbnEFqpd37KB/852c7094d3d2b83768bd6a5536860a48/como-acceder-al-mecanismo-de-protecci__n-al-cesante-max__1_.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Cesante' },
                { descripcion: 'Empleado' },
                { descripcion: 'Independiente' }
              ],
              textoIntroductorio: 'Declara tus cesantías como independiente',
              descripcioncorta:
                'Así podrás aprovechar los beneficios tributarios que podrás disfrutar gracias a las cesantías. ',
              tituloCorto: 'Cesantías para independientes',
              textoCallToActionBite: 'Enséñame más',
              updatedAt: '2020-04-17T16:15:11.215Z',
              urlSeo: 'cesantias/independientes',
              imagenpequena: {
                file: {
                  fileName:
                    'como-declarar-las-cesantías-como-independiente-max.jpg'
                },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/4XbvaMk0LQVI8yLSc6CWN8/32de3d0a95b6dc951ebc41cd14703039/como-declarar-las-cesant__as-como-independiente-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Empleado' },
                { descripcion: 'Cesante' },
                { descripcion: 'Independiente' }
              ],
              textoIntroductorio:
                'Descubre cómo usar tus cesantías en educación',
              descripcioncorta: null,
              tituloCorto: 'Invierte tus cesantías en educación',
              textoCallToActionBite: 'Descubre cómo',
              updatedAt: '2020-04-17T16:13:37.951Z',
              urlSeo: 'cesantias/como-usarlas/vivienda/cuanto-ahorrar',
              imagenpequena: {
                file: { fileName: 'Cuánto-debo-ahorrar-max.jpg' },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/4cZ5pa8RG190spQ2veabhj/7c88e4a67a18154f0d414582eadea844/Cu__nto-debo-ahorrar-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Cesante' },
                { descripcion: 'Empleado' },
                { descripcion: 'Independiente' }
              ],
              textoIntroductorio:
                'Conoce los motivos por los que pueden embargarse las Cesantías',
              descripcioncorta:
                'Entérate de las circunstancias que pueden llevar al embargo de tus Cesantías. ',
              tituloCorto: '¿Qué es el embargo de las Cesantías?',
              textoCallToActionBite: 'Quiero saberlo',
              updatedAt: '2020-04-17T16:07:08.041Z',
              urlSeo: 'cesantias/pignoracion-embargo-inmovilizacion/embargo',
              imagenpequena: {
                file: { fileName: 'Embargo-que-es-y-para-que-max.jpg' },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/3WuaqoYaYoWxKEYsDGa0Q5/088be7824e8e9f1ea573ffe33f59fe7e/Embargo-que-es-y-para-que-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Cesante' },
                { descripcion: 'Empleado' }
              ],
              textoIntroductorio:
                'Descubre el mecanismo de protección al cesante',
              descripcioncorta:
                '¿Perdiste tu empleo? El Estado cuenta con un programa con el que podrás aprovechar tus Cesantías y encaminarte a un nuevo trabajo. ',
              tituloCorto: 'Protección al Cesante',
              textoCallToActionBite: 'Cuéntame',
              updatedAt: '2020-04-17T16:11:29.246Z',
              urlSeo: null,
              imagenpequena: {
                file: {
                  fileName:
                    'que-es-el-mecanismo-de-proteccion-al-cesante-max.jpg'
                },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/3rRspLgGeDkFloUVHNHKIk/fc6209a75ca0ab98f07e207cd947cdb2/que-es-el-mecanismo-de-proteccion-al-cesante-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Cesante' },
                { descripcion: 'Empleado' },
                { descripcion: 'Independiente' }
              ],
              textoIntroductorio:
                'Conoce aquí de qué se trata y cuándo puede ocurrir',
              descripcioncorta: null,
              tituloCorto: '¿Qué es la pignoración de Cesantías?',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-04-17T16:03:34.846Z',
              urlSeo:
                'cesantias/pignoracion-embargo-inmovilizacion/pignoración',
              imagenpequena: {
                file: { fileName: 'pignoracion-max.jpg' },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/6vtCpbtr2K53tln5x07Wa3/56dd714f6175540ccb4aabf15af4866b/pignoracion-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Cesante' },
                { descripcion: 'Empleado' }
              ],
              textoIntroductorio:
                '¿Quieres conocer acerca de las Cesantías y quiénes deben aportar?',
              descripcioncorta:
                'Ahora que sabes qué son las Cesantías, debes saber quiénes deben aportar y cómo deben hacerlo. ',
              tituloCorto: '¿Qué son los aportes a Cesantías?',
              textoCallToActionBite: 'Quiero conocer',
              updatedAt: '2020-04-17T16:07:08.051Z',
              urlSeo: 'cesantias/certificados',
              imagenpequena: {
                file: {
                  fileName:
                    'Quién-hace-los-aportes-Cuánto-me-deben-consignar-max (1).jpg'
                },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/4BFdPZttD1aZNyw74VXXsM/13ce61c45cc60fccce6d42b18fdd49dc/Qui__n-hace-los-aportes-Cu__nto-me-deben-consignar-max__1_.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Empleado' },
                { descripcion: 'Cesante' }
              ],
              textoIntroductorio:
                'Encuentra cómo usar los intereses de las cesantías',
              descripcioncorta:
                '¿Sabías que este ahorro tiene unos intereses que puedes disfrutar? Conoce más sobre ellos.',
              tituloCorto: 'Intereses de las Cesantías',
              textoCallToActionBite: 'Aprende más',
              updatedAt: '2020-04-17T16:10:36.367Z',
              urlSeo: null,
              imagenpequena: {
                file: {
                  fileName: 'Qué-son-los-intereses-de-las-cesantías-max.jpg'
                },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/30ghGrUHaovWemYkb4yWQn/11c223a12621a96443662840468a72fc/Qu__-son-los-intereses-de-las-cesant__as-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [{ descripcion: 'Empleado' }],
              textoIntroductorio:
                'Aprende cómo retirar tus Cesantías y haz realidad este propósito',
              descripcioncorta:
                'Como empleado puedes apoyar tus proyectos educativos junto a Protección.',
              tituloCorto: 'Retiro de Cesantías para Educación',
              textoCallToActionBite: 'Muéstrame cómo',
              updatedAt: '2020-04-17T16:07:07.941Z',
              urlSeo: 'cesantias/como-usarlas/educacion/empleado/retiro',
              imagenpequena: {
                file: {
                  fileName: 'como-retirar-tus-cesantías-para-educacion-max.jpg'
                },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/3htN7iugeFK3oSeTNdhtrQ/0902ac6de2c2ef71200963c256dca7c5/como-retirar-tus-cesant__as-para-educacion-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                { descripcion: 'Cesante' },
                { descripcion: 'Independiente' }
              ],
              textoIntroductorio:
                '¡Empieza a estudiar eso que siempre has querido!',
              descripcioncorta:
                'Como independiente y cesante también puedes apoyar tus proyectos educativos junto a Protección. ',
              tituloCorto: 'Retiro de Cesantías para educación',
              textoCallToActionBite: 'Muéstrame cómo',
              updatedAt: '2020-04-15T14:57:09.920Z',
              urlSeo:
                'cesantias/como-usarlas/educacion/cesante-independiente/retiro',
              imagenpequena: {
                file: { fileName: 'PRUEBA-2.png' },
                fluid: {
                  src:
                    'https://images.ctfassets.net/y3qdch79qxiw/NSoHg7eHzRx7IHG6qi8JA/e730263cba25d7b8c74014e387cb46dc/PRUEBA-2.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
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
          contenido: {
            tituloCorto: 'Portafolios Cesantías ¿cuáles son?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Elige Corto Plazo o Largo Plazo Cesantías, de acuerdo a tus metas',
            urlSeo: 'cesantias/portafolios/como-cambiar',
            updatedAt: '2020-04-07T23:31:13.894Z',
            descripcioncorta:
              'Optimiza los rendimientos de tus cesantías eligiendo un portafolio acorde con tus metas. ',
            imagenpequena: {
              file: { fileName: 'Para-qué-son-las-cesantías-max.jpeg' },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/6SmyN6vduDldajtmfg2clR/9892a7528844b4e0146e6ec7b8a48511/Para-que__-son-las-cesanti__as-max.jpeg?w=800&q=50'
              },
              description: '',
              title: ''
            },
            categoriaCliente: [
              { descripcion: 'Cesante' },
              { descripcion: 'Empleado' },
              { descripcion: 'Independiente' }
            ]
          },
          lineaDeProducto: { nombre: 'Cesantías' }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Cesantías para vivienda?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Aprende qué errores evitar a la hora de usar tus Cesantías',
            urlSeo:
              'cesantias/como-usarlas/vivienda/cesante-independiente/empleado',
            updatedAt: '2020-04-20T23:58:41.056Z',
            descripcioncorta:
              'En el camino para la adquisición o mejora de vivienda puedes incurrir en algunas equivocaciones. ',
            imagenpequena: {
              file: {
                fileName:
                  'Cuánto-debes-ahorrar-para-invertir-tus-cesantías-en-educación-max.jpeg'
              },
              fluid: {
                src:
                  'https://images.ctfassets.net/y3qdch79qxiw/1zFYSlhuMTZIZxdD80s5Sy/efcf8a41d00cd5cda8b2fe29171bd73b/Cua__nto-debes-ahorrar-para-invertir-tus-cesanti__as-en-educacio__n-max.jpeg?w=800&q=50'
              },
              description: '',
              title: ''
            },
            categoriaCliente: [{ descripcion: 'Empleado' }]
          },
          lineaDeProducto: { nombre: 'Cesantías' }
        }
      }
    ]
  }
}
const data = [
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      }
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      }
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },

      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },

      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },

      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },

      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },

      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2gQH3EM6JgkaLdWfDluihV/5d51a62e5c69db94adfe51371b5aa241/Que__-errores-evitar-a-la-hora-de-usar-tus-cesanti__as-para-educacio__n-max.jpeg?w=800&q=50'
      },

      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: '¡Mira estos consejos!',
    textoIntroductorio: 'Utiliza correctamente tus Cesantías para educación',
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  }
]

const data2 = [
  {
    imagenpequena: {
      fluid: {
        src: null
      },
      description: '',
      title: ''
    },
    urlSeo:
      'cesantias/tus-cesantias-proteccion/como-usarlas/educacion/errores-comunes',
    textoCallToActionBite: 'Muéstrame cuáles',
    tituloCorto: null,
    textoIntroductorio: null,
    descripcioncorta:
      'Aprende de las experiencias de las personas que ya han hecho realidad sus sueños. ',
    updatedAt: '2020-03-30T13:46:55.843Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: null
  }
]
const userData = {
  userValue: {
    id: 1673,
    name: 'estebna',
    type: 1,
    category: 'Cesantías',
    subcategory: 'Empleado',
    date: '8/4/2020',
    state: 1,
    hostUser: { host: '1902507883ESTEBNA8420201608', state: 1 }
  }
}

const dataComplete = {
  allContentfulCampana: {
    edges: [
      {
        node: {
          contenido: {
            tituloCorto: 'Afiliación 100% Digital',
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/2CUSX7aRUxEYEAoLYn4IuK/eceb371f082d42521f513a4b7ec17bad/AfiliaciondigitalHOME.png?w=800&q=50'
              },
              file: { fileName: 'AfiliaciondigitalHOME.png' },
              description: '',
              title: ''
            },
            textoIntroductorio: '¡Afíliate a Pensión Obligatoria en segundos!',
            urlSeo: 'campana/afiliacion-pension',
            textoCallToActionBite: 'Ver más'
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
            tituloCorto: '¡Disfruta de nuestra alianza con Vecindario!',
            urlSeo: 'novedad/vecindario-proteccion',
            textoCallToActionBite: 'Quiero conocer más',
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1ldmLN37VVuBR93FGMxjMh/401fa22bcc120b0cf883f9a47de95e8a/foto2.png?w=800&q=50'
              },
              file: { fileName: 'foto2.png' },
              description: '',
              title: ''
            }
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
            urlSeo: 'novedad/futuro-sostenible',
            textoCallToActionBite: 'Quiero conocer más',
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
              },
              file: {
                fileName:
                  'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
              },
              description: '',
              title: ''
            }
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: 'Retira en línea tus Cesantías para educación',
            urlSeo: 'cesantias/novedad/retiro-online-educacion',
            textoCallToActionBite: 'Quiero conocer más',
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1jTXd0Bt7y6YDOVmq4Cj22/c24f16f2591bc900ff69e3697921ffc9/Que__-son-los-intereses-de-las-cesanti__as-max.jpeg?w=800&q=50'
              },
              file: {
                fileName: 'Qué-son-los-intereses-de-las-cesantías-max.jpeg'
              },
              description: '',
              title: ''
            }
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: 'Retiro por Disminución de Ingresos',
            urlSeo: 'cesantias/retiro-cesantias/disminucion-ingresos',
            textoCallToActionBite: '¡Conoce más aquí!',
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1zFYSlhuMTZIZxdD80s5Sy/efcf8a41d00cd5cda8b2fe29171bd73b/Cua__nto-debes-ahorrar-para-invertir-tus-cesanti__as-en-educacio__n-max.jpeg?w=800&q=50'
              },
              file: {
                fileName:
                  'Cuánto-debes-ahorrar-para-invertir-tus-cesantías-en-educación-max.jpeg'
              },
              description: '',
              title: ''
            }
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
            urlSeo: 'cesantias/por-que-estar-proteccion',
            imagenpequena: {
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/2uwLOKJVxyW69MVIqzFRGg/1a79420954e2ca33b0a6d942d3e708c2/CT1C4-Todos-los-pu__blicos_Cesanti__as_Por-que__-Proteccio__n-AJUSTADO.png?w=800&q=50'
              },
              file: {
                fileName:
                  'CT1C4-Todos-los-públicos_Cesantías_Por-qué-Protección-AJUSTADO.png'
              },
              description: '',
              title: ''
            },
            tituloCorto: '¿Por qué estar en Protección?',
            textoCallToActionBite: 'Quiero conocer más'
          }
        }
      }
    ]
  },
  allContentfulProducto: {
    edges: [
      {
        node: {
          titulo: 'Pensión Obligatoria',
          contentful_id: '3Do4hL0V01gzUMDUCXlB0D',
          contenido: [
            {
              categoriaCliente: [
                {
                  descripcion: 'Pensión de Invalidez o Sobrevivencia',
                  contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                },
                {
                  descripcion: 'Pensión Obligatoria',
                  contentful_id: '6FaTOsdYE9K5BqX58y0c5F'
                }
              ],
              textoIntroductorio:
                'Seguramente has oído hablar de pensiones, pero… ¿sabes qué son?',
              descripcioncorta:
                'Seguramente has oído hablar de pensiones, pero… ¿sabes qué son? Aquí te contamos',
              tituloCorto: '¿Qué son las Pensiones Obligatorias?',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-07-09T22:28:15.991Z',
              urlSeo: 'que-son-pensiones',
              imagenpequena: {
                file: {
                  fileName:
                    'Cuáles-son-los-certificados-de-tus-cesantías-max.jpeg'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/50xHt5WM4RUTYhuGb7rSPz/453f4a6e7f241b18406d3827a32b064a/Cua__les-son-los-certificados-de-tus-cesanti__as-max.jpeg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Pensión de Invalidez o Sobrevivencia',
                  contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                },
                {
                  descripcion: 'Pensión Obligatoria',
                  contentful_id: '6FaTOsdYE9K5BqX58y0c5F'
                }
              ],
              textoIntroductorio:
                'Conoce aquí algunas de las diferencias que existen',
              descripcioncorta:
                'Alcanzar a pensionarte de manera anticipada, cotizar 150 semanas menos, y tener la posibilidad de generar rendimientos, son solo algunas de las ventajas que ofrecen los Fondos Privados (AFP)',
              tituloCorto: 'Diferencias entre Fondos Privados y Colpensiones',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-07-09T23:29:52.877Z',
              urlSeo: 'diferencias-regimenes',
              imagenpequena: {
                file: { fileName: 'para_que_se_retiran_max.jpg' },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/5W1v97vzRKSefJSGsiRLh6/ef636a59699dc13eefc5b6460624ccd2/para_que_se_retiran_max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Pensión de Invalidez o Sobrevivencia',
                  contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
                },
                {
                  descripcion: 'Pensión Obligatoria',
                  contentful_id: '6FaTOsdYE9K5BqX58y0c5F'
                }
              ],
              textoIntroductorio:
                'Estar bien informado te permitirá tomar las mejores decisiones',
              descripcioncorta:
                'Estar bien informado te permitirá tomar las mejores decisiones. Conoce aquí algunos de los mitos más comunes que giran en torno al sistema pensional colombiano. ¡Elige lo mejor para ti!',
              tituloCorto: 'Mitos y realidades. Sistema pensional colombiano',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-07-09T23:43:30.104Z',
              urlSeo: 'mitos-realidades-sistema-pensional',
              imagenpequena: {
                file: { fileName: 'CT3C7-imagen_tarjeta_que_son.png' },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/d587758f8f6e0f34c67007b8d4616e86/CT3C7-imagen_tarjeta_que_son.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
            }
          ]
        }
      },
      {
        node: {
          titulo: 'Cesantías',
          contentful_id: 'W2zNnmbYol9hf1OXMVGgR',
          contenido: [
            {
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
              ],
              textoIntroductorio:
                'Conoce todo lo que debes saber acerca de las Cesantías',
              descripcioncorta:
                'Conoce todo lo que debes saber acerca de las Cesantías y comienza a ahorrar en Protección',
              tituloCorto: '¿Qué son las Cesantías?',
              textoCallToActionBite: 'Quiero saber más',
              updatedAt: '2020-07-03T20:24:35.418Z',
              urlSeo: 'cesantias/que-son',
              imagenpequena: {
                file: { fileName: 'Cesantías_Qué-son-AJUSTADO.png' },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/11cUclDEKWST8cE0l6uWmN/37a67446431e104f77629e6ba6298650/Cesanti__as_Que__-son-AJUSTADO.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
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
              ],
              textoIntroductorio:
                'Conoce todos los requisitos para beneficiarte de este mecanismo',
              descripcioncorta:
                'Conoce todos los requisitos para beneficiarte de este mecanismo mientras encuentras un nuevo empleo',
              tituloCorto: 'Acceder al Mecanismo de Protección al Cesante',
              textoCallToActionBite: 'Saber más',
              updatedAt: '2020-07-06T13:51:55.864Z',
              urlSeo: 'cesantias/mecanismo-proteccion-cesante/como-acceder',
              imagenpequena: {
                file: {
                  fileName:
                    'CT13C2--Todos_Cesantías_Mecanismo-de-protección-al-cesante_Requisitos-AJUSTADO.png'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/7itIkQ9vagteLDfTkeIYng/85b2d91a6539fa57a9c0594ba230543a/CT13C2--Todos_Cesanti__as_Mecanismo-de-proteccio__n-al-cesante_Requisitos-AJUSTADO.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                },
                {
                  descripcion: 'Independiente',
                  contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                },
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                }
              ],
              textoIntroductorio:
                'Conoce algunos objetivos en los que puedes destinar tus Cesantías',
              descripcioncorta:
                'Existen algunos casos específicos en los que podrás utilizar tus Cesantías. Entérate aquí de qué se trata',
              tituloCorto: '¿Para qué son las Cesantías?',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-07-07T19:58:54.938Z',
              urlSeo: 'cesantias/para-que-son-ces',
              imagenpequena: {
                file: {
                  fileName:
                    'CT1C2-Empleado_Independiente_Cesantías_Para-qué-son-AJUSTADO.png'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/2aGTDh6GG89lRvCPEEPZj5/89efd8a623ef1249d667cef4f16222b3/CT1C2-Empleado_Independiente_Cesanti__as_Para-que__-son-AJUSTADO.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
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
              ],
              textoIntroductorio: 'Ingresa y conoce aquí de qué se trata',
              descripcioncorta:
                '¿Perdiste tu empleo? El Gobierno cuenta con un programa con el que podrás aprovechar tus Cesantías, y encaminarte a un nuevo trabajo ',
              tituloCorto: '¿Qué es el Mecanismo de Protección al Cesante?',
              textoCallToActionBite: 'Conocer más',
              updatedAt: '2020-07-07T20:02:23.856Z',
              urlSeo: 'cesantias/mecanismo-proteccion-cesante',
              imagenpequena: {
                file: {
                  fileName:
                    'CT13C1--Todos_Cesantías_Mecanismo-de-protección-al-cesante-AJUSTADO.png'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/7L2JUn4EJPju64Xx9dZbMI/53d965bb22dacb4a19ab81ea11b47916/CT13C1--Todos_Cesanti__as_Mecanismo-de-proteccio__n-al-cesante-AJUSTADO.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
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
              ],
              textoIntroductorio: 'Este ahorro tiene unos intereses',
              descripcioncorta:
                '¿Sabías que este ahorro tiene unos intereses que puedes disfrutar? Conoce más sobre ellos.',
              tituloCorto: '¿Qué son los intereses de las Cesantías?',
              textoCallToActionBite: 'Quiero saber más',
              updatedAt: '2020-07-07T20:03:35.216Z',
              urlSeo: 'cesantias/intereses/que-son',
              imagenpequena: {
                file: {
                  fileName:
                    'CT12C1-Empleado-_-Cesante_Cesantías_Intereses-AJUSTADO.png'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/1oBRikD3x6XdIkOfx7yj6s/8d8c5a3a69a88e705f14a8d772e3119a/CT12C1-Empleado-_-Cesante_Cesanti__as_Intereses-AJUSTADO.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                }
              ],
              textoIntroductorio: 'Aportes a Cesantías y quiénes deben hacerlo',
              descripcioncorta:
                'Conoce aquí qué son los aportes a Cesantías, quiénes deben hacerlo y cuál es el procedimiento para realizarlo.',
              tituloCorto: '¿Qué son los aportes a Cesantías?',
              textoCallToActionBite: 'Quiero saber más',
              updatedAt: '2020-07-07T20:03:03.855Z',
              urlSeo: 'cesantias/aportes/que-son',
              imagenpequena: {
                file: {
                  fileName: 'CT9C1-Empleado-y-cesante_Quién-AJUSTADO.png'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/5jbtMZygbqarwJ1FJolSF5/1b43d724f452a79291aa87e2a9ab836c/CT9C1-Empleado-y-cesante_Quie__n-AJUSTADO.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                }
              ],
              textoIntroductorio:
                'Conoce el tratamiento tributario de las Cesantías',
              descripcioncorta:
                'Conoce el tratamiento tributario de las Cesantías',
              tituloCorto: '¿Cómo declaran Cesantías los trabajadores?',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-07-07T19:52:24.454Z',
              urlSeo:
                'cesantias/beneficios-tributarios/como-declaran-trabajadores',
              imagenpequena: {
                file: {
                  fileName:
                    'CT5C1-Todos-los-públicos_Cesantías_Declaración-AJUSTADO.png'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/27fu6jPdHmWmF60jhSplnb/de19eec337054c9245fbda95101ff6cc/CT5C1-Todos-los-pu__blicos_Cesanti__as_Declaracio__n-AJUSTADO.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
              categoriaCliente: [
                {
                  descripcion: 'Independiente',
                  contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
                },
                {
                  descripcion: 'Empleado',
                  contentful_id: '2L498woyc1TQ1A3SpyUpxA'
                },
                {
                  descripcion: 'Cesante',
                  contentful_id: '5fP153BoelxfRsusePVnBU'
                }
              ],
              textoIntroductorio:
                'Conoce los beneficios tributarios que puedes obtener',
              descripcioncorta:
                'Conoce los beneficios tributarios que obtienes al realizar un ahorro voluntario como trabajador independiente',
              tituloCorto: 'Beneficios tributarios al ahorrar tus Cesantías',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-07-03T19:44:00.826Z',
              urlSeo: 'cesantias/beneficios-tributarios/ahorrar-cesantias',
              imagenpequena: {
                file: {
                  fileName:
                    'CT5C2-Todos-los-públicos_Cesantías_Independientes-AJUSTADO.png'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/M0VQ1Sx4cVqefzA6RTdV5/1cfe9870d9b3ca5a8c8c144f20028a5e/CT5C2-Todos-los-pu__blicos_Cesanti__as_Independientes-AJUSTADO.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
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
              ],
              textoIntroductorio:
                '¿Qué son estos Portafolios? Conoce aquí de qué se trata',
              descripcioncorta:
                '¿Sabías que existen dos Portafolios para tus Cesantías? Conoce aquí de qué se tratan los portafolios Corto Plazo y Largo Plazo, y elige la mejor forma de administrarlos.',
              tituloCorto: 'Portafolios Corto Plazo y Largo Plazo Cesantías',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-07-07T20:03:48.006Z',
              urlSeo: 'cesantias/portafolios/corto-largo-plazo',
              imagenpequena: {
                file: {
                  fileName:
                    'CT6C1-Todos-los-públicos_Cesantías_Portafolios_Qué-son-AJUSTADO.png'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/4qluYPx8h2Wlw1AtjZZDE7/41fb9cb37411a5fb1e99694057ff7347/CT6C1-Todos-los-pu__blicos_Cesanti__as_Portafolios_Que__-son-AJUSTADO.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
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
              ],
              textoIntroductorio:
                'Elige para tus Cesantías, un Portafolio acorde con tus metas.',
              descripcioncorta:
                'Al ahorrar tus Cesantías tienes la posibilidad de elegir el portafolio de inversión que más te convenga: Largo Plazo o Corto Plazo. Esta es una decisión de gran importancia, y para elegir debes tener claro los objetivos que quieres alcanzar con este ahorro',
              tituloCorto: '¿Por qué y cómo cambiar de portafolio?',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-07-07T19:59:43.828Z',
              urlSeo: 'cesantias/portafolios/porque-como-cambiar',
              imagenpequena: {
                file: { fileName: 'portafolio-max.jpg' },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/7b1WR8x6gU3qgvjn57e2Pv/9f7c416c8c33eb9d15b6100bf5f3fed5/portafolio-max.jpg?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
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
              ],
              textoIntroductorio: 'Ingresa y conoce de qué se trata ',
              descripcioncorta:
                '¿Sabías que puedes pignorar tus Cesantías para respaldar los préstamos realizados por los empleadores? ',
              tituloCorto: '¿Qué es la pignoración de Cesantías?',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-07-07T20:02:39.466Z',
              urlSeo:
                'cesantias/pignoracion-embargo-inmovilizacion/que-signfica-pignorar',
              imagenpequena: {
                file: {
                  fileName: 'CT7C1-Todos-los-usuarios_Pignoración-AJUSTADO.png'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/2txmAXSTQ4IMql24NRDeqK/a5b2da43622190de01db18903f387355/CT7C1-Todos-los-usuarios_Pignoracio__n-AJUSTADO.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
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
              ],
              textoIntroductorio:
                'Conoce algunos motivos que pueden llevar al embargo de Cesantías',
              descripcioncorta:
                'Entérate aquí cuales son las circunstancias que pueden llevar al embargo de tus Cesantías.',
              tituloCorto: '¿Qué es el embargo de las Cesantías?',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-07-07T20:02:02.155Z',
              urlSeo:
                'cesantias/pignoracion-embargo-inmovilizacion/que-es-embargo',
              imagenpequena: {
                file: {
                  fileName: 'CT7C2-Todos-los-usuarios_Embargo-AJUSTADO.png'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/4Poiqo1pXjXBXH8ngNvsh4/2b7e4f0ddd54de95824b37459ab7f4b4/CT7C2-Todos-los-usuarios_Embargo-AJUSTADO.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
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
              ],
              textoIntroductorio: 'Ingresa y conoce aquí de qué se trata',
              descripcioncorta:
                'Si quieres utilizar tus Cesantías para postularte al subsidio de vivienda que otorga el Gobierno nacional, puedes inmovilizar tus Cesantías.',
              tituloCorto: '¿En qué consiste inmovilizar las Cesantías?',
              textoCallToActionBite: 'Quiero conocer más',
              updatedAt: '2020-07-07T19:57:56.437Z',
              urlSeo:
                'cesantias/pignoracion-embargo-inmovilizacion/en-que-consiste-inmovilizar',
              imagenpequena: {
                file: {
                  fileName:
                    'CT7C3-Todos-los-usuarios_Inmovilización-AJUSTADO.png'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/2F84HVJ0G0WfyJIoqHso0v/7b7233bd3d2a8aefb2bf9c3d036afb04/CT7C3-Todos-los-usuarios_Inmovilizacio__n-AJUSTADO.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
            },
            {
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
              ],
              textoIntroductorio:
                'Conoce si estás afiliado, tu fecha de vinculación y tu ahorro',
              descripcioncorta:
                'Los certificados de Cesantías son ese soporte que necesitarás en caso de querer demostrar que estás afiliado a Protección, la fecha de tu vinculación y el ahorro que tienes.',
              tituloCorto: '¿Cuáles son los certificados de Cesantías?',
              textoCallToActionBite: 'Quiero saber más',
              updatedAt: '2020-07-07T19:56:52.073Z',
              urlSeo: 'cesantias/certificados',
              imagenpequena: {
                file: {
                  fileName:
                    'CT8C1-Todos-los-públicos_Cesantías_Certificados-AJUSTADO.png'
                },
                fluid: {
                  src:
                    '//images.ctfassets.net/y3qdch79qxiw/3IC1KSzhmXhVkyMFv7mw4y/ffda6345d6fc833928c36e13a66472cf/CT8C1-Todos-los-pu__blicos_Cesanti__as_Certificados-AJUSTADO.png?w=800&q=50'
                },
                description: '',
                title: ''
              }
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
          contenido: {
            tituloCorto: 'mitos y realidades. Ensayo contenido educativo',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Estar bien informado te permitirá tomar las mejores decisiones',
            urlSeo: 'mitos-realidades-sistema-pensional-contendioeduc',
            updatedAt: '2020-07-13T21:35:52.962Z',
            descripcioncorta:
              'Estar bien informado te permitirá tomar las mejores decisiones. Conoce aquí algunos de los mitos más comunes que giran en torno al sistema pensional colombiano. ¡Elige lo mejor para ti!',
            imagenpequena: {
              file: { fileName: 'CT3C7-imagen_tarjeta_que_son.png' },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/d587758f8f6e0f34c67007b8d4616e86/CT3C7-imagen_tarjeta_que_son.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
            categoriaCliente: [
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
          lineaDeProducto: {
            nombre: 'Pensiones Obligatorias',
            contentful_id: '45FVyiIWU70wBqFgR750SE'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Cómo retirar tus Cesantías para educación?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Es momento de estudiar eso que siempre has querido',
            urlSeo: 'cesantias/como-usarlas/educacion/como-retirar',
            updatedAt: '2020-07-07T19:55:07.900Z',
            descripcioncorta:
              'Es momento de estudiar eso que siempre has querido, pon en marcha tus proyectos educativos. Conoce aquí cómo retirar tus cesantías para educación.',
            imagenpequena: {
              file: {
                fileName: 'CT4C7-Todos_Cesantías_Retiro-educación-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/4b2oYhTP6WEW8nc3MGeu38/5062c11f717142a6d0238d6f4cec16d3/CT4C7-Todos_Cesanti__as_Retiro-educacio__n-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¡Evita estos errores! Cesantías para educación',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio: 'Consejos para el uso de tus Cesantías',
            urlSeo: 'cesantias/como-usarlas/educacion/que-errores-evitar',
            updatedAt: '2020-07-07T20:00:27.540Z',
            descripcioncorta:
              'Te presentamos algunos consejos que puedes aplicar para el correcto uso de tus Cesantías para educación.',
            imagenpequena: {
              file: {
                fileName:
                  'CT4C3-Todos-los-usuarios_Cesantías_Errores-comunes-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/Wye5GV9jANEuiOzbqz6TZ/99d006ef6a309f2804af2ad72694eb1f/CT4C3-Todos-los-usuarios_Cesanti__as_Errores-comunes-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: 'Tips para invertir tus Cesantías en educación',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Queremos acompañarte para que cumplas tus sueños de educación',
            urlSeo: 'cesantias/como-retirarlas/vivienda/cuanto-ahorrar',
            updatedAt: '2020-07-07T20:04:48.569Z',
            descripcioncorta:
              'En Protección queremos acompañarte para que cumplas todos tus sueños. Conoce aquí algunos tips para aprovechar tus Cesantías.',
            imagenpequena: {
              file: {
                fileName:
                  'CT4C1-Empleado---Cesante---Independiente_Cesantías_Cómo-usarlas-para-educación-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1ye3DqDt9muqpYeOW1evgA/9b47c2add60d757444c4e6fc2dfd0b08/CT4C1-Empleado---Cesante---Independiente_Cesanti__as_Co__mo-usarlas-para-educacio__n-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: 'Evita estos errores: Cesantías para vivienda',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Conoce algunos errores comunes que debes evitar',
            urlSeo:
              'cesantias/como-usarlas/vivienda/cesante-independiente/que-errores-evitar',
            updatedAt: '2020-07-07T20:01:43.202Z',
            descripcioncorta:
              'En el camino para la adquisición o mejora de vivienda puedes incurrir en algunas equivocaciones. Aprende cómo evitarlas.',
            imagenpequena: {
              file: {
                fileName:
                  'CT3C6-Cesantes-e-independientes_Vivienda_Errores-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/37oEStvij5MDA8cNSeZFCn/21834b63d375089e55e250bdaf4c9ae6/CT3C6-Cesantes-e-independientes_Vivienda_Errores-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
            categoriaCliente: [
              {
                descripcion: 'Independiente',
                contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
              }
            ]
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Cómo usar tus Cesantías para vivienda?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio: 'Te presentamos algunas recomendaciones',
            urlSeo: 'cesantias/como-usarlas/vivienda/independiente',
            updatedAt: '2020-07-07T19:55:47.901Z',
            descripcioncorta:
              'Tus Cesantías en Protección son el primer paso para alcanzar tus sueños de vivienda nueva o remodelar la que ya tienes.',
            imagenpequena: {
              file: {
                fileName:
                  'CT3C5-Cesante-e-independiente_Vivienda_Cómo-usarlas-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/211iVEe6WywsH3bkp6diz0/24d776819a8a3df46474c298830d5551/CT3C5-Cesante-e-independiente_Vivienda_Co__mo-usarlas-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
            categoriaCliente: [
              {
                descripcion: 'Independiente',
                contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
              }
            ]
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Cómo retirar tus cesantías para vivienda?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Conoce aquí los requisitos para el retiro de tus Cesantías',
            urlSeo: 'cesantias/como-usarlas/vivienda/empleado/como-retirar',
            updatedAt: '2020-07-07T19:55:27.620Z',
            descripcioncorta:
              'Tus Cesantías en Protección son el primer paso para alcanzar tus sueños de vivienda nueva o remodelar la que ya tienes.',
            imagenpequena: {
              file: { fileName: 'CT3C4-Empleado_Vivienda_Retiro-AJUSTADO.png' },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/53FZItBbJT3d2qUailJ9ri/34157f56697be5c70831e3de0559b874/CT3C4-Empleado_Vivienda_Retiro-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¡Evita estos errores! Cesantías para vivienda',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio: 'Aprende cómo evitar algunos errores comunes',
            urlSeo:
              'cesantias/como-usarlas/vivienda/empleado/errores-evitar-momento-usar',
            updatedAt: '2020-07-07T20:00:43.194Z',
            descripcioncorta:
              'Cuando estás en el proceso de compra de vivienda, algunas veces se comenten errores. Estos son algunos de los más comunes que debes evitar:',
            imagenpequena: {
              file: {
                fileName: 'CT3C3-Empleados_Vivienda_Errores-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/2DwYbbqVLBrOT00IGcYPGH/2e0acaa91fe4cef1c84a6708feacb5ba/CT3C3-Empleados_Vivienda_Errores-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
            categoriaCliente: [
              {
                descripcion: 'Empleado',
                contentful_id: '2L498woyc1TQ1A3SpyUpxA'
              },
              {
                descripcion: 'Cesante',
                contentful_id: '5fP153BoelxfRsusePVnBU'
              }
            ]
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Cómo ahorrar tus Cesantías para vivienda?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Haz un plan de ahorro y alcanza el sueño de vivienda',
            urlSeo: 'cesantias/como-usarlas/vivienda/como-ahorrar',
            updatedAt: '2020-07-07T19:52:02.918Z',
            descripcioncorta:
              'Si tu sueño es conseguir vivienda o mejorar la que ya tienes, te contamos cómo hacer un plan de ahorro para alcanzarlo.',
            imagenpequena: {
              file: {
                fileName: 'CT3C1-Empleados_Vivienda_Cómo-usarlas-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/5tjU31I6BsJXDlVRu7bTZV/77c44ff4349ffcf03abdbc3524b76951/CT3C1-Empleados_Vivienda_Co__mo-usarlas-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Dónde puedo retirar mis Cesantías?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              '¿Ya decidiste la meta que quieres cumplir con tus Cesantías?',
            urlSeo: 'cesantias/como-usarlas/como-retirarlas/empleado-cesante',
            updatedAt: '2020-07-07T19:57:26.543Z',
            descripcioncorta:
              '¿Ya decidiste la meta que quieres cumplir con tus Cesantías? ¡Conoce aquí cómo puedes retirarlas!',
            imagenpequena: {
              file: {
                fileName:
                  'CT2C3-Empleados_Cesantías_Cómo-retirar-las-cesantías_Cómo-retirar-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/3mRuHO8xEQBR9anMQcDkfc/bbc1f801edf4a7415353a81086cfd91b/CT2C3-Empleados_Cesanti__as_Co__mo-retirar-las-cesanti__as_Co__mo-retirar-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Cómo retirar tus Cesantías?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              '¿Eres afiliado independiente? Conoce cómo retirar tus Cesantías',
            urlSeo:
              'cesantias/como-usarlas/como-retirarlas/voluntario-independiente',
            updatedAt: '2020-06-24T13:48:38.894Z',
            descripcioncorta:
              'Si eres afiliado voluntario o independiente, puedes hacer el retiro de tus Cesantías en www.proteccion.com, con tu usuario y clave, sin necesidad de autorización de empleadores o validaciones de requisitos adicionales.',
            imagenpequena: {
              file: {
                fileName:
                  'CT2C5-Independientes_Cesantías_Cómo-retirar-las-cesantías_Cómo-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/4IPN6XoNn3oRd3BmxAjmnT/7edda30093d83f47cd1307853074df35/CT2C5-Independientes_Cesanti__as_Co__mo-retirar-las-cesanti__as_Co__mo-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
            categoriaCliente: [
              {
                descripcion: 'Independiente',
                contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
              }
            ]
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: 'Extractos de Cesantías, ¿qué son y cómo leerlos?',
            textoCallToActionBite: 'Quiero saber más',
            textoIntroductorio: 'Hazle seguimiento a tu ahorro de Cesantías',
            urlSeo: 'cesantias/extractos/como-leerlos',
            updatedAt: '2020-07-07T19:58:12.463Z',
            descripcioncorta:
              'Los extractos de Cesantías son comunicaciones periódicas que contienen información acerca de los movimientos de tu cuenta individual durante un periodo determinado de tiempo. Entenderlo, te permitirá hacer seguimiento a tu ahorro.',
            imagenpequena: {
              file: { fileName: 'CT3C7-imagen_tarjeta_que_son.png' },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/d587758f8f6e0f34c67007b8d4616e86/CT3C7-imagen_tarjeta_que_son.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Cómo obtener tus extractos de Cesantías?',
            textoCallToActionBite: 'Conocer más',
            textoIntroductorio:
              'Estos te permiten estar informado acerca de tu ahorro',
            urlSeo: 'cesantias/extractos/como-obtenerlos',
            updatedAt: '2020-06-23T14:14:11.891Z',
            descripcioncorta:
              'Los extractos de Cesantías son comunicaciones periódicas que contienen información acerca de los movimientos de tu cuenta individual durante un periodo determinado de tiempo. Conoce aquí cómo puedes descargarlos',
            imagenpequena: {
              file: {
                fileName:
                  'CT10C2-Todos-los-públicos_Cesantías_Extractos_Cómo-descargarlos-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1zghPXN0VjQHiXu2F57hvE/bb17e88b2ef7e2954b0192de9d0c12a5/CT10C2-Todos-los-pu__blicos_Cesanti__as_Extractos_Co__mo-descargarlos-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      }
    ]
  },
  allContentfulLineaDeNegocio: {
    edges: [
      {
        node: {
          nombre: 'Inversión',
          textoIntroductorioBite:
            '¡Haz realidad tus proyectos! Conoce Protección Inversiones'
        }
      },
      {
        node: {
          nombre: 'Pensiones Voluntarias',
          textoIntroductorioBite:
            'Conoce cómo podrás manejar tus ahorros para alcanzar tus metas.'
        }
      },
      {
        node: {
          nombre: 'Pensiones Obligatorias',
          textoIntroductorioBite:
            'Conoce cómo podrás tener tranquilidad en tu etapa de jubilación'
        }
      },
      {
        node: {
          nombre: 'Cesantías',
          textoIntroductorioBite:
            'Conoce cómo podrás manejar tus ahorros para alcanzar tus metas'
        }
      }
    ]
  }
}

const dataComplete2 = {
  allContentfulContenidoEducativo: {
    edges: [
      {
        node: {
          contenido: {
            tituloCorto: 'mitos y realidades. Ensayo contenido educativo',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Estar bien informado te permitirá tomar las mejores decisiones',
            urlSeo: 'mitos-realidades-sistema-pensional-contendioeduc',
            updatedAt: '2020-07-13T21:35:52.962Z',
            descripcioncorta:
              'Estar bien informado te permitirá tomar las mejores decisiones. Conoce aquí algunos de los mitos más comunes que giran en torno al sistema pensional colombiano. ¡Elige lo mejor para ti!',
            imagenpequena: {
              file: { fileName: 'CT3C7-imagen_tarjeta_que_son.png' },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/d587758f8f6e0f34c67007b8d4616e86/CT3C7-imagen_tarjeta_que_son.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
            categoriaCliente: [
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
          lineaDeProducto: {
            nombre: 'Pensiones Obligatorias',
            contentful_id: '45FVyiIWU70wBqFgR750SE'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Cómo retirar tus Cesantías para educación?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Es momento de estudiar eso que siempre has querido',
            urlSeo: 'cesantias/como-usarlas/educacion/como-retirar',
            updatedAt: '2020-07-07T19:55:07.900Z',
            descripcioncorta:
              'Es momento de estudiar eso que siempre has querido, pon en marcha tus proyectos educativos. Conoce aquí cómo retirar tus cesantías para educación.',
            imagenpequena: {
              file: {
                fileName: 'CT4C7-Todos_Cesantías_Retiro-educación-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/4b2oYhTP6WEW8nc3MGeu38/5062c11f717142a6d0238d6f4cec16d3/CT4C7-Todos_Cesanti__as_Retiro-educacio__n-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¡Evita estos errores! Cesantías para educación',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio: 'Consejos para el uso de tus Cesantías',
            urlSeo: 'cesantias/como-usarlas/educacion/que-errores-evitar',
            updatedAt: '2020-07-07T20:00:27.540Z',
            descripcioncorta:
              'Te presentamos algunos consejos que puedes aplicar para el correcto uso de tus Cesantías para educación.',
            imagenpequena: {
              file: {
                fileName:
                  'CT4C3-Todos-los-usuarios_Cesantías_Errores-comunes-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/Wye5GV9jANEuiOzbqz6TZ/99d006ef6a309f2804af2ad72694eb1f/CT4C3-Todos-los-usuarios_Cesanti__as_Errores-comunes-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: 'Tips para invertir tus Cesantías en educación',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Queremos acompañarte para que cumplas tus sueños de educación',
            urlSeo: 'cesantias/como-retirarlas/vivienda/cuanto-ahorrar',
            updatedAt: '2020-07-07T20:04:48.569Z',
            descripcioncorta:
              'En Protección queremos acompañarte para que cumplas todos tus sueños. Conoce aquí algunos tips para aprovechar tus Cesantías.',
            imagenpequena: {
              file: {
                fileName:
                  'CT4C1-Empleado---Cesante---Independiente_Cesantías_Cómo-usarlas-para-educación-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1ye3DqDt9muqpYeOW1evgA/9b47c2add60d757444c4e6fc2dfd0b08/CT4C1-Empleado---Cesante---Independiente_Cesanti__as_Co__mo-usarlas-para-educacio__n-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: 'Evita estos errores: Cesantías para vivienda',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Conoce algunos errores comunes que debes evitar',
            urlSeo:
              'cesantias/como-usarlas/vivienda/cesante-independiente/que-errores-evitar',
            updatedAt: '2020-07-07T20:01:43.202Z',
            descripcioncorta:
              'En el camino para la adquisición o mejora de vivienda puedes incurrir en algunas equivocaciones. Aprende cómo evitarlas.',
            imagenpequena: {
              file: {
                fileName:
                  'CT3C6-Cesantes-e-independientes_Vivienda_Errores-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/37oEStvij5MDA8cNSeZFCn/21834b63d375089e55e250bdaf4c9ae6/CT3C6-Cesantes-e-independientes_Vivienda_Errores-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
            categoriaCliente: [
              {
                descripcion: 'Independiente',
                contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
              }
            ]
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Cómo usar tus Cesantías para vivienda?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio: 'Te presentamos algunas recomendaciones',
            urlSeo: 'cesantias/como-usarlas/vivienda/independiente',
            updatedAt: '2020-07-07T19:55:47.901Z',
            descripcioncorta:
              'Tus Cesantías en Protección son el primer paso para alcanzar tus sueños de vivienda nueva o remodelar la que ya tienes.',
            imagenpequena: {
              file: {
                fileName:
                  'CT3C5-Cesante-e-independiente_Vivienda_Cómo-usarlas-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/211iVEe6WywsH3bkp6diz0/24d776819a8a3df46474c298830d5551/CT3C5-Cesante-e-independiente_Vivienda_Co__mo-usarlas-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
            categoriaCliente: [
              {
                descripcion: 'Independiente',
                contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
              }
            ]
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Cómo retirar tus cesantías para vivienda?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Conoce aquí los requisitos para el retiro de tus Cesantías',
            urlSeo: 'cesantias/como-usarlas/vivienda/empleado/como-retirar',
            updatedAt: '2020-07-07T19:55:27.620Z',
            descripcioncorta:
              'Tus Cesantías en Protección son el primer paso para alcanzar tus sueños de vivienda nueva o remodelar la que ya tienes.',
            imagenpequena: {
              file: { fileName: 'CT3C4-Empleado_Vivienda_Retiro-AJUSTADO.png' },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/53FZItBbJT3d2qUailJ9ri/34157f56697be5c70831e3de0559b874/CT3C4-Empleado_Vivienda_Retiro-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¡Evita estos errores! Cesantías para vivienda',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio: 'Aprende cómo evitar algunos errores comunes',
            urlSeo:
              'cesantias/como-usarlas/vivienda/empleado/errores-evitar-momento-usar',
            updatedAt: '2020-07-07T20:00:43.194Z',
            descripcioncorta:
              'Cuando estás en el proceso de compra de vivienda, algunas veces se comenten errores. Estos son algunos de los más comunes que debes evitar:',
            imagenpequena: {
              file: {
                fileName: 'CT3C3-Empleados_Vivienda_Errores-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/2DwYbbqVLBrOT00IGcYPGH/2e0acaa91fe4cef1c84a6708feacb5ba/CT3C3-Empleados_Vivienda_Errores-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
            categoriaCliente: [
              {
                descripcion: 'Empleado',
                contentful_id: '2L498woyc1TQ1A3SpyUpxA'
              },
              {
                descripcion: 'Cesante',
                contentful_id: '5fP153BoelxfRsusePVnBU'
              }
            ]
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Cómo ahorrar tus Cesantías para vivienda?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              'Haz un plan de ahorro y alcanza el sueño de vivienda',
            urlSeo: 'cesantias/como-usarlas/vivienda/como-ahorrar',
            updatedAt: '2020-07-07T19:52:02.918Z',
            descripcioncorta:
              'Si tu sueño es conseguir vivienda o mejorar la que ya tienes, te contamos cómo hacer un plan de ahorro para alcanzarlo.',
            imagenpequena: {
              file: {
                fileName: 'CT3C1-Empleados_Vivienda_Cómo-usarlas-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/5tjU31I6BsJXDlVRu7bTZV/77c44ff4349ffcf03abdbc3524b76951/CT3C1-Empleados_Vivienda_Co__mo-usarlas-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Dónde puedo retirar mis Cesantías?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              '¿Ya decidiste la meta que quieres cumplir con tus Cesantías?',
            urlSeo: 'cesantias/como-usarlas/como-retirarlas/empleado-cesante',
            updatedAt: '2020-07-07T19:57:26.543Z',
            descripcioncorta:
              '¿Ya decidiste la meta que quieres cumplir con tus Cesantías? ¡Conoce aquí cómo puedes retirarlas!',
            imagenpequena: {
              file: {
                fileName:
                  'CT2C3-Empleados_Cesantías_Cómo-retirar-las-cesantías_Cómo-retirar-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/3mRuHO8xEQBR9anMQcDkfc/bbc1f801edf4a7415353a81086cfd91b/CT2C3-Empleados_Cesanti__as_Co__mo-retirar-las-cesanti__as_Co__mo-retirar-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Cómo retirar tus Cesantías?',
            textoCallToActionBite: 'Quiero conocer más',
            textoIntroductorio:
              '¿Eres afiliado independiente? Conoce cómo retirar tus Cesantías',
            urlSeo:
              'cesantias/como-usarlas/como-retirarlas/voluntario-independiente',
            updatedAt: '2020-06-24T13:48:38.894Z',
            descripcioncorta:
              'Si eres afiliado voluntario o independiente, puedes hacer el retiro de tus Cesantías en www.proteccion.com, con tu usuario y clave, sin necesidad de autorización de empleadores o validaciones de requisitos adicionales.',
            imagenpequena: {
              file: {
                fileName:
                  'CT2C5-Independientes_Cesantías_Cómo-retirar-las-cesantías_Cómo-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/4IPN6XoNn3oRd3BmxAjmnT/7edda30093d83f47cd1307853074df35/CT2C5-Independientes_Cesanti__as_Co__mo-retirar-las-cesanti__as_Co__mo-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
            categoriaCliente: [
              {
                descripcion: 'Independiente',
                contentful_id: 'vt2OB7OniS8zFEgAS1qNz'
              }
            ]
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: 'Extractos de Cesantías, ¿qué son y cómo leerlos?',
            textoCallToActionBite: 'Quiero saber más',
            textoIntroductorio: 'Hazle seguimiento a tu ahorro de Cesantías',
            urlSeo: 'cesantias/extractos/como-leerlos',
            updatedAt: '2020-07-07T19:58:12.463Z',
            descripcioncorta:
              'Los extractos de Cesantías son comunicaciones periódicas que contienen información acerca de los movimientos de tu cuenta individual durante un periodo determinado de tiempo. Entenderlo, te permitirá hacer seguimiento a tu ahorro.',
            imagenpequena: {
              file: { fileName: 'CT3C7-imagen_tarjeta_que_son.png' },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/d587758f8f6e0f34c67007b8d4616e86/CT3C7-imagen_tarjeta_que_son.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      },
      {
        node: {
          contenido: {
            tituloCorto: '¿Cómo obtener tus extractos de Cesantías?',
            textoCallToActionBite: 'Conocer más',
            textoIntroductorio:
              'Estos te permiten estar informado acerca de tu ahorro',
            urlSeo: 'cesantias/extractos/como-obtenerlos',
            updatedAt: '2020-06-23T14:14:11.891Z',
            descripcioncorta:
              'Los extractos de Cesantías son comunicaciones periódicas que contienen información acerca de los movimientos de tu cuenta individual durante un periodo determinado de tiempo. Conoce aquí cómo puedes descargarlos',
            imagenpequena: {
              file: {
                fileName:
                  'CT10C2-Todos-los-públicos_Cesantías_Extractos_Cómo-descargarlos-AJUSTADO.png'
              },
              fluid: {
                src:
                  '//images.ctfassets.net/y3qdch79qxiw/1zghPXN0VjQHiXu2F57hvE/bb17e88b2ef7e2954b0192de9d0c12a5/CT10C2-Todos-los-pu__blicos_Cesanti__as_Extractos_Co__mo-descargarlos-AJUSTADO.png?w=800&q=50'
              },
              description: '',
              title: ''
            },
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
          },
          lineaDeProducto: {
            nombre: 'Cesantías',
            contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
          }
        }
      }
    ]
  },
  allContentfulLineaDeNegocio: {
    edges: [
      {
        node: {
          nombre: 'Inversión',
          textoIntroductorioBite:
            '¡Haz realidad tus proyectos! Conoce Protección Inversiones'
        }
      },
      {
        node: {
          nombre: 'Pensiones Voluntarias',
          textoIntroductorioBite:
            'Conoce cómo podrás manejar tus ahorros para alcanzar tus metas.'
        }
      },
      {
        node: {
          nombre: 'Pensiones Obligatorias',
          textoIntroductorioBite:
            'Conoce cómo podrás tener tranquilidad en tu etapa de jubilación'
        }
      },
      {
        node: {
          nombre: 'Cesantías',
          textoIntroductorioBite:
            'Conoce cómo podrás manejar tus ahorros para alcanzar tus metas'
        }
      }
    ]
  }
}

const mockStore = configureStore()
const initialState = {
  internalCategoria: {
    dataInternal: dataComplete
  },
  youcantmiss: {
    userValue: userData
  },
  home: {
    categoria: 'Cesantías',
    subCategoria: 'Cesante'
  },
  welcome: {
    typeUser: 1
  }
}

const initialState2 = {
  internalCategoria: {
    dataInternal: dataComplete
  },
  youcantmiss: {
    userValue: userData
  },
  home: {
    categoria: 'Cesantías',
    subCategoria: 'Cesante'
  },
  welcome: {
    typeUser: 1
  }
}

const initialState3 = {
  internalCategoria: {
    dataInternal: dataComplete
  },
  youcantmiss: {
    userValue: userData
  },
  home: {
    categoria: 'Cesantías',
    subCategoria: 'Cesante'
  },
  welcome: {
    typeUser: 1
  }
}
let getSuccess
let getError
let getData
let getDataError
describe('contwnido', () => {
  let store
  let useEffect
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f())
  }

  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
    getSuccess = jest.fn(() =>
      Promise.resolve({
        name: '',
        hostUser: { host: '' },
        category: 'Cesantías'
      })
    )
    getError = jest.fn(() => Promise.reject({}))
    getData = jest.fn(() =>
      Promise.resolve([
        { name: '', hostUser: { host: '' }, category: 'Cesantías' }
      ])
    )
    getDataError = jest.fn(() => Promise.resolve([]))
    useEffect = jest.spyOn(React, 'useEffect')
  })
  let store2
  let store3
  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
    store2 = mockStore(initialState2)
    store2.dispatch = jest.fn()
    store3 = mockStore(initialState3)
    store3.dispatch = jest.fn()
  })
  global.window = Object.create(window)
  const url = {
    url: 'http://localhost:8000/home/contenido',
    pathname: '/contenido/'
  }
  Object.defineProperty(window, 'location', {
    value: {
      href: url,
      pathname: '/contenido/'
    }
  })

  const dataUser = {
    host: '19191229128DFGFD151020201002',
    nameuser: 'dfgfd',
    category: 'Cesantías',
    subcategory: 'Empleado',
    type: 1,
    age: 0,
    gender: null,
    encuesta: false
  }

  it('renders correctly without props', () => {
    const tree = mount(
      <Provider store={store}>
        <ContenidoComponente
          location={url}
          test={false}
          userData={data.userValue}
          dataContenido={dataComplete}
          dataBite={data.dataInternal}
          getInfoDb={getData}
          indexDBUserName={dataUser}
          getF={getSuccess}
        />
      </Provider>
    )
  })

  it('renders correctly without propsss', () => {
    const tree = mount(
      <Provider store={store}>
        <ContenidoComponente
          location={url}
          test={false}
          userData={data.userValue}
          dataContenido={dataComplete2}
          dataBite={data.dataInternal}
          getInfoDb={getData}
          indexDBUserName={dataUser}
          getF={getSuccess}
        />
      </Provider>
    )
  })

  it('renders correctly without props -1', () => {
    const tree = mount(
      <Provider store={store2}>
        <ContenidoComponente
          location={url}
          test={false}
          userData={data.userValue}
          dataContenido={datacntenido}
          indexDBUserName={dataUser}
        />
      </Provider>
    )
  })

  it('renders correctly without props', () => {
    const tree = mount(
      <Provider store={store3}>
        <ContenidoComponente
          location={url}
          test={false}
          userData={data.userValue}
          dataContenido={datacntenido}
          indexDBUserName={dataUser}
        />
      </Provider>
    )
  })

  it('renders correctly without props', () => {
    const tree = mount(
      <Provider store={store3}>
        <ContenidoComponente
          location={url}
          test={false}
          userData={data.userValue}
          dataContenido={datacntenido}
          indexDBUserName={{
            host: '19191229128DFGFD151020201002',
            nameuser: 'dfgfd',
            category: 'Cesantías',
            subcategory: 'Empleado',
            type: 1,
            age: 0,
            gender: null,
            encuesta: false
          }}
        />
      </Provider>
    )
  })

  it('renders correctly without props', () => {
    const tree = mount(
      <Provider store={store}>
        <Contenido
          location={url}
          getInfoDb={getData}
          getF={getSuccess}
          dispatch={() => {}}
          userData={data.userValue}
          dataContenido={dataCompleteUser}
          dataBite={data.dataInternal}
          setindexDBUserName={() => {}}
          indexDBUserName={{
            host: '19191229128DFGFD151020201002',
            nameuser: 'dfgfd',
            category: 'Cesantías',
            subcategory: 'Empleado',
            type: 1,
            age: 0,
            gender: null,
            encuesta: false
          }}
        />
      </Provider>
    )
  })

  it('renders correctly without props', () => {
    const tree = mount(
      <Provider store={store}>
        <Contenido
          location={url}
          getInfoDb={getData}
          getF={getSuccess}
          dispatch={() => {}}
          userData={data.userValue}
          dataContenido={dataCompleteUser}
          dataBite={data.dataInternal}
          setindexDBUserName={() => {}}
          indexDBUserName={{
            host: '19191229128DFGFD151020201002',
            nameuser: 'dfgfd',
            category: 'Cesantías',
            type: 1,
            age: 0,
            gender: null,
            encuesta: false
          }}
        />
      </Provider>
    )
  })

  it('renders correctly without props', () => {
    const tree = renderer.create(<ScrollAnimate data={scrollData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('HomePage renders correctly youcantsmiss', () => {
    const wrapper = mount(<ScrollAnimate data={scrollData} />)
    wrapper.find('.infinite-scroll-component__outerdiv').simulate('scroll')
    wrapper.find('.infinite-scroll-component').simulate('scroll')
    wrapper.find('.infinite-scroll-component__outerdiv').simulate('scroll')
    wrapper.find('.infinite-scroll-component__outerdiv').simulate('scroll')
    wrapper.find('.infinite-scroll-component__outerdiv').simulate('scroll')
    wrapper.find('.infinite-scroll-component__outerdiv').simulate('scroll')
    wrapper.find('.infinite-scroll-component__outerdiv').simulate('scroll')
    wrapper.find('.infinite-scroll-component__outerdiv').simulate('scroll')
  })
})
