import React from 'react'
import renderer from 'react-test-renderer'
import { FooterComponent, Footer } from './footer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { cleanup, fireEvent, render } from '@testing-library/react'
import FooterAccordionLinks from './footer-mobile/components/footer-accordion-links'
import { mount } from 'enzyme'
import FooterContent from './footer-mobile/components/footer-content'
import FooterHeader from './footer-mobile/components/footer-header'
import { FooterLinks } from './footer-mobile/components/footer-main-links'

const mockStore = configureStore()
const initialState = {
  welcome: {
    nameValue: ''
  }
}

describe('Footer', () => {
  let store

  beforeEach(() => {
    fetch.resetMocks()
    store = mockStore(initialState)
    store.dispatch = jest.fn()
  })
  const dataUrlFooter = {
    allContentfulCanal: {
      edges: [
        {
          node: {
            urlSeo: 'app'
          }
        },
        {
          node: {
            urlSeo: 'app'
          }
        },
        {
          node: {
            urlSeo: 'app'
          }
        }
      ]
    }
  }
  const dataContent = {
    allContentfulCanal: {
      edges: [
        {
          node: {
            descripcion: {
              descripcion:
                '__Bogotá:__ 744 44 64\n__Medellín y Cali:__ 510 90 99\n__Barranquilla:__ 319 79 99\n__Cartagena:__ 642 49 99\n__Resto del país desde una línea fija al:__ 01 8000 52 8000'
            },
            nombre: 'Línea de servicio Protección'
          }
        }
      ]
    },
    allContentfulRedSocial: {
      edges: [
        {
          node: {
            nombre: 'facebook',
            url: 'https://www.facebook.com/proteccionsa',
            icono: {
              fluid: {
                tracedSVG:
                  "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='311'%3e%3cpath%20d='M257%202c-28%205-51%2026-59%2053-2%206-2%2010-2%2023v15h-4l-36-6A221%20221%200%200139%2013l-3%206c-14%2032-7%2068%2018%2094l7%208c-2%201-10-2-21-7l-13-6%202%2021a81%2081%200%200058%2056c4%201-12%203-22%203-12-1-11-1-5%2010%2011%2022%2030%2035%2057%2038l8%202-10%207c-29%2019-63%2029-93%2026h-8l5%203c12%208%2038%2019%2057%2024A217%20217%200%2000349%2092V76l7-6c9-7%2032-34%2030-34l-7%203-30%2010-4%201%205-4a104%20104%200%200028-38l-9%203c-10%206-20%209-32%2013l-8%202-7-6a72%2072%200%2000-65-18m7%2030c-10%201-23%209-29%2017-8%209-13%2026-10%2036l1%2022v17h-6A262%20262%200%200165%2078c-2%202%2011%2017%2020%2022l6%204v21l1%2021%202%203c4%205%206%206%2016%207l9%202v16c0%2015%201%2016%203%2020%205%208%2013%2012%2026%2012h7v23c0%2023%200%2024-2%2025l-10%208-13%2010-5%203h9c75%200%20139-43%20170-113a168%20168%200%200010-109l-3-3-9-7a44%2044%200%2000-38-11'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",
                sizes: null,
                src: null,
                srcSet: null,
                srcWebp: null,
                srcSetWebp: null
              }
            }
          }
        }
      ]
    }
  }
  const data = {
    allContentfulEnlace: {
      edges: [
        {
          node: {
            titulo: {
              titulo: 'App Store'
            },
            enlace:
              'https://itunes.apple.com/us/app/app-proteccion-iphone/id1015636587?ls=1&mt=8',
            categoria: 'App',
            jerarquia: 1,
            icono: null
          }
        },
        {
          node: {
            titulo: {
              titulo:
                'Para una mejor visualización al realizar transacciones y consultas, usa los siguientes navegadores: Firefox 46, 47. Google Chrome 51, 52. Internet Explorer 9, 10, 11. Recomendamos no utilizar versiones inferiores.'
            },
            enlace:
              'http://windows.microsoft.com/es-es/internet-explorer/download-ie',
            categoria: 'Navegador',
            jerarquia: 1,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/1jGjJp3cIWoSAHRU6UYs1h/af33a36b717ce313df3657fccf7df9e5/monitor.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Contáctanos'
            },
            enlace: null,
            categoria: 'Enlaces Canales de servicio',
            jerarquia: 1,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/1RvrUh64SS2f7kCUeZu47r/c8c51e775754031737653fe3f9cffe4d/contactanos.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Facebook'
            },
            enlace: 'https://www.facebook.com/proteccionsa',
            categoria: 'Redes sociales',
            jerarquia: 1,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/2GriKZJybc5SQwgpQgaZ7H/824f318ba4a9a612b558fbdd3cc825f1/Vectorfb__2_.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Google Play'
            },
            enlace:
              'https://play.google.com/store/apps/details?id=com.ProteccionApp',
            categoria: 'App',
            jerarquia: 2,
            icono: null
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Twitter'
            },
            enlace: 'https://twitter.com/proteccion',
            categoria: 'Redes sociales',
            jerarquia: 2,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/4U46MqS0XUZgdAIolJ9LfA/d8fa03ed20123448b0fd4d319c01d21f/Vectortwitter__1_.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Chatea con Pronto'
            },
            enlace: null,
            categoria: 'Enlaces Canales de servicio',
            jerarquia: 2,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/1mv3tV6g0DduUWhDZfaOFZ/580e48b14ca0b5dd0bb21cac8eeca425/pronto.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Escritorio'
            },
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/accesodirecto/app-proteccion',
            categoria: 'App',
            jerarquia: 3,
            icono: null
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Instagram'
            },
            enlace: 'https://www.instagram.com/proteccionsa/',
            categoria: 'Redes sociales',
            jerarquia: 3,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/4M7g4RAiDvvllykaCy4XN2/da9ac12f9044dc98d583fb299572f64f/instagramig__1_.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Oficinas de servicio'
            },
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/accesodirecto/oficinas-servicio',
            categoria: 'Enlaces Canales de servicio',
            jerarquia: 3,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/64EEMf1UiQ1MKlVUuNJXWO/4a0ae5bcd0cb8e5ba94e00422230b45c/oficinas.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Linkedin'
            },
            enlace: 'https://www.linkedin.com/in/protecci%C3%B3n-s-a-ba1725aa/',
            categoria: 'Redes sociales',
            jerarquia: 4,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/5NHmAEUquSt6lO8EOMFh63/897f22fbd81f67d5fddaacfb390eba00/linkedin__1_.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Descarga la App'
            },
            enlace: null,
            categoria: 'Enlaces Canales de servicio',
            jerarquia: 4,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/jZnsvcvLeW3pwz9ppAT5M/ebae7d35f0cef542f7aae2fa806c9f33/app.png'
              }
            }
          }
        }
      ]
    },
    allContentfulLineaTelefonica: {
      edges: [
        {
          node: {
            titulo: 'Bogotá',
            numeroContacto: '744 44 64'
          }
        },
        {
          node: {
            titulo: 'Medellín y Cali',
            numeroContacto: '510 90 99'
          }
        },
        {
          node: {
            titulo: 'Barranquilla',
            numeroContacto: '319 79 99'
          }
        },
        {
          node: {
            titulo: 'Cartagena',
            numeroContacto: '642 49 99'
          }
        },
        {
          node: {
            titulo: 'Resto del país desde una línea fija al',
            numeroContacto: '01 8000 52 8000'
          }
        }
      ]
    },
    allContentfulAsset: {
      edges: [
        {
          node: {
            file: {
              url:
                'https://images.ctfassets.net/y3qdch79qxiw/500rS1be9G2UvPT0dgamkF/b54733974fcd9d8dec67e1850178255b/btn-footer-subir.svg'
            },
            contentful_id: '500rS1be9G2UvPT0dgamkF'
          }
        },
        {
          node: {
            file: {
              url:
                'https://images.ctfassets.net/y3qdch79qxiw/3MbnFxY5aAmCmZNdIJbxd/9de4b88f888c74b18015ffbc23f93932/btn-footer-bajar.svg'
            },
            contentful_id: '3MbnFxY5aAmCmZNdIJbxd'
          }
        },
        {
          node: {}
        },
        {
          node: {
            file: {
              url:
                'https://images.ctfassets.net/y3qdch79qxiw/YZtfjs6gYCtucJScByKL7/a2748909024d4d9d9f4f6daf4e1cfa9b/modal_lineas_servicio.png'
            },
            contentful_id: 'YZtfjs6gYCtucJScByKL7'
          }
        }
      ]
    },
    allContentfulContenidosPaginas: {
      edges: [
        {
          node: {
            valorTexto: {
              valorTexto: 'Línea de servicio Protección'
            },
            nombreTexto: 'modal-title'
          }
        }
      ]
    },
    allContentfulEnlaceInformativo: {
      edges: [
        {
          node: {
            titulo: 'Condiciones de uso de los canales de servicio al cliente',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/general/condiciones-uso-canales-servicio'
          }
        },
        {
          node: {
            titulo: 'Trabaja con nosotros',
            enlace:
              'https://career17.sapsf.com/career?company=suraassetmP&site=VjItUGhGRTFPNUd2U2I2QnpndHVsemlEZz09'
          }
        },
        {
          node: {
            titulo: 'Seguridad financiera',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/proteccion-conecta/zona-seguridad'
          }
        },
        {
          node: {
            titulo:
              'Condiciones y términos de uso del sitio www.proteccion.com',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/general/terminos-condiciones'
          }
        },
        {
          node: {
            titulo: 'Política de inversión',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/corporativo-accionistas/gobierno-corporativo/politicas/politicas-inversion'
          }
        },
        {
          node: {
            titulo: 'Consumidor financiero',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/proteccion-conecta/consumidor-financiero'
          }
        },
        {
          node: {
            titulo: 'Protección de datos personales',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/lo-nuevo/afiliados/ley-proteccion-datos-personales'
          }
        },
        {
          node: {
            titulo: 'Información de productos y servicios',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/proteccion-conecta/consumidor-financiero/informacion-productos-servicios'
          }
        },
        {
          node: {
            titulo: 'Programa de educación financiera',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/proteccion-conecta/consumidor-financiero'
          }
        },
        {
          node: {
            titulo: 'Fichas técnicas',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/inversion#fichas-tecnicas'
          }
        }
      ]
    }
  }

  const dataUndefined = {
    allContentfulEnlace: {
      edges: [
        {
          node: {
            titulo: {
              titulo: null
            },
            enlace: null,
            categoria: null,
            jerarquia: 1,
            icono: null
          }
        },
        {
          node: {}
        },
        {
          node: {
            titulo: {
              titulo: 'Contáctanos'
            },
            enlace: null,
            categoria: 'Enlaces Canales de servicio',
            jerarquia: 1,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/1RvrUh64SS2f7kCUeZu47r/c8c51e775754031737653fe3f9cffe4d/contactanos.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Facebook'
            },
            enlace: 'https://www.facebook.com/proteccionsa',
            categoria: 'Redes sociales',
            jerarquia: 1,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/2GriKZJybc5SQwgpQgaZ7H/824f318ba4a9a612b558fbdd3cc825f1/Vectorfb__2_.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Google Play'
            },
            enlace:
              'https://play.google.com/store/apps/details?id=com.ProteccionApp',
            categoria: 'App',
            jerarquia: 2,
            icono: null
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Twitter'
            },
            enlace: 'https://twitter.com/proteccion',
            categoria: 'Redes sociales',
            jerarquia: 2,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/4U46MqS0XUZgdAIolJ9LfA/d8fa03ed20123448b0fd4d319c01d21f/Vectortwitter__1_.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Chatea con Pronto'
            },
            enlace: null,
            categoria: 'Enlaces Canales de servicio',
            jerarquia: 2,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/1mv3tV6g0DduUWhDZfaOFZ/580e48b14ca0b5dd0bb21cac8eeca425/pronto.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Escritorio'
            },
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/accesodirecto/app-proteccion',
            categoria: 'App',
            jerarquia: 3,
            icono: null
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Instagram'
            },
            enlace: 'https://www.instagram.com/proteccionsa/',
            categoria: 'Redes sociales',
            jerarquia: 3,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/4M7g4RAiDvvllykaCy4XN2/da9ac12f9044dc98d583fb299572f64f/instagramig__1_.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Oficinas de servicio'
            },
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/accesodirecto/oficinas-servicio',
            categoria: 'Enlaces Canales de servicio',
            jerarquia: 3,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/64EEMf1UiQ1MKlVUuNJXWO/4a0ae5bcd0cb8e5ba94e00422230b45c/oficinas.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Linkedin'
            },
            enlace: 'https://www.linkedin.com/in/protecci%C3%B3n-s-a-ba1725aa/',
            categoria: 'Redes sociales',
            jerarquia: 4,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/5NHmAEUquSt6lO8EOMFh63/897f22fbd81f67d5fddaacfb390eba00/linkedin__1_.png'
              }
            }
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Descarga la App'
            },
            enlace: null,
            categoria: 'Enlaces Canales de servicio',
            jerarquia: 4,
            icono: {
              file: {
                url:
                  'https://images.ctfassets.net/y3qdch79qxiw/jZnsvcvLeW3pwz9ppAT5M/ebae7d35f0cef542f7aae2fa806c9f33/app.png'
              }
            }
          }
        }
      ]
    },
    allContentfulLineaTelefonica: {
      edges: [
        {
          node: {
            titulo: 'Bogotá',
            numeroContacto: '744 44 64'
          }
        },
        {
          node: {
            titulo: 'Medellín y Cali',
            numeroContacto: '510 90 99'
          }
        },
        {
          node: {
            titulo: 'Barranquilla',
            numeroContacto: '319 79 99'
          }
        },
        {
          node: {
            titulo: 'Cartagena',
            numeroContacto: '642 49 99'
          }
        },
        {
          node: {
            titulo: 'Resto del país desde una línea fija al',
            numeroContacto: '01 8000 52 8000'
          }
        }
      ]
    },
    allContentfulAsset: {
      edges: [
        {
          node: {}
        },
        {
          node: {}
        },
        {
          node: {
            file: {},
            contentful_id: '5KXr1fNwNSoWrTb3E4AqIV'
          }
        },
        {
          node: {}
        }
      ]
    },
    allContentfulContenidosPaginas: {
      edges: [
        {
          node: {
            valorTexto: {
              valorTexto: 'Línea de servicio Protección'
            },
            nombreTexto: 'modal-title'
          }
        }
      ]
    },
    allContentfulEnlaceInformativo: {
      edges: [
        {
          node: {
            titulo: 'Condiciones de uso de los canales de servicio al cliente',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/general/condiciones-uso-canales-servicio'
          }
        },
        {
          node: {
            titulo: 'Trabaja con nosotros',
            enlace:
              'https://career17.sapsf.com/career?company=suraassetmP&site=VjItUGhGRTFPNUd2U2I2QnpndHVsemlEZz09'
          }
        },
        {
          node: {
            titulo: 'Seguridad financiera',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/proteccion-conecta/zona-seguridad'
          }
        },
        {
          node: {
            titulo:
              'Condiciones y términos de uso del sitio www.proteccion.com',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/general/terminos-condiciones'
          }
        },
        {
          node: {
            titulo: 'Política de inversión',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/corporativo-accionistas/gobierno-corporativo/politicas/politicas-inversion'
          }
        },
        {
          node: {
            titulo: 'Consumidor financiero',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/proteccion-conecta/consumidor-financiero'
          }
        },
        {
          node: {
            titulo: 'Protección de datos personales',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/lo-nuevo/afiliados/ley-proteccion-datos-personales'
          }
        },
        {
          node: {
            titulo: 'Información de productos y servicios',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/proteccion-conecta/consumidor-financiero/informacion-productos-servicios'
          }
        },
        {
          node: {
            titulo: 'Programa de educación financiera',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/home/proteccion-conecta/consumidor-financiero'
          }
        },
        {
          node: {
            titulo: 'Fichas técnicas',
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/inversion#fichas-tecnicas'
          }
        }
      ]
    }
  }

  const dataShop = {
    allContentfulEnlace: {
      edges: [
        {
          node: {
            titulo: {
              titulo: 'App Store'
            },
            enlace:
              'https://itunes.apple.com/us/app/app-proteccion-iphone/id1015636587?ls=1&mt=8',
            categoria: 'App',
            jerarquia: 1,
            icono: null
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Google Play'
            },
            enlace:
              'https://play.google.com/store/apps/details?id=com.ProteccionApp',
            categoria: 'App',
            jerarquia: 2,
            icono: null
          }
        },
        {
          node: {
            titulo: {
              titulo: 'Escritorio'
            },
            enlace:
              'https://www.proteccion.com/wps/portal/proteccion/web/accesodirecto/app-proteccion',
            categoria: 'App',
            jerarquia: 3,
            icono: null
          }
        }
      ]
    }
  }

  it('FooterComponent correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <FooterComponent data={data} dataContent={dataContent} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('FooterComponent correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <FooterComponent data={undefined} dataContent={undefined} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('captures click', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <FooterComponent data={data} dataContent={dataContent} />
      </Provider>
    )

    const tree = renderer
      .create(
        <Provider store={store}>
          <FooterComponent
            data={data}
            isIOS={true}
            isAndroid={false}
            dataContent={dataContent}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('FooterAccordionLinks', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <FooterAccordionLinks isOpenFooter={false} />
      </Provider>
    )

    const tree = renderer
      .create(
        <Provider store={store}>
          <FooterAccordionLinks isOpenFooter={false} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('click #btn-menu-item #2', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FooterAccordionLinks isOpenFooter={false} />
      </Provider>
    )
    const btnClose = wrapper.find('#collapse-item-0')
    btnClose.first().simulate('click')
  })

  it('click #btn-menu-item #2', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FooterAccordionLinks isOpenFooter={false} />
      </Provider>
    )
    const btnClose = wrapper.find('#collapse-item-1')
    btnClose.first().simulate('click')
  })

  it('click #btn-menu-item #2', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FooterAccordionLinks isOpenFooter={false} />
      </Provider>
    )
    const btnClose = wrapper.find('#collapse-item-2')
    btnClose.first().simulate('click')
  })

  it('click #btn-menu-item #2', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FooterAccordionLinks isOpenFooter={false} />
      </Provider>
    )
    const btnClose = wrapper.find('#collapse-item-3')
    btnClose.first().simulate('click')
  })

  it('FooterAccordionLinks', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <FooterHeader
            handleOpenFooter={() => {}}
            isOpenFooter={true}
            dataContentful={dataContent}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('FooterAccordionLinks', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <FooterLinks dataUrlFooter={dataUrlFooter} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('click #btn-menu-item #2', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FooterLinks dataUrlFooter={dataUrlFooter} />
      </Provider>
    )
    const btnClose = wrapper.find('#main-link-2')
    btnClose.first().simulate('click')
  })

  it('click #btn-menu-item #2', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FooterLinks dataUrlFooter={dataUrlFooter} />
      </Provider>
    )
    const btnClose = wrapper.find('#main-link-2')
    btnClose.first().simulate('keydown')
  })

  it('click #btn-menu-item #2', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FooterLinks dataUrlFooter={dataUrlFooter} />
      </Provider>
    )
    const btnClose = wrapper.find('#main-link-0')
    btnClose.first().simulate('click')
  })

  it('click #btn-menu-item #2', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FooterLinks dataUrlFooter={dataUrlFooter} />
      </Provider>
    )
    const btnClose = wrapper.find('#main-link-1')
    btnClose.first().simulate('click')
  })

  afterEach(cleanup)
})
