import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import MapaSitteComponent, { MapaDelSitio } from './mapa-sitte'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'

const data = {
  allSitePage: {
    edges: [
      {
        node: {
          path: '/persona/cesantias/que-son-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: '¿Qué son las cesantías? | Protección',
            id: '4r5NXg7eIYv1aKFEHT3Brk',
            titulocontent: '¿Qué son las Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/que-son-cesantias',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo: '¿Qué son las cesantías? | Protección',
            id: '4r5NXg7eIYv1aKFEHT3Brk',
            titulocontent: '¿Qué son las Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/como-acceder-mecanismo-proteccion-cesante',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Cómo acceder al Mecanismo de Protección al Cesante | Protección',
            id: '2kmCv1McS9VqjAtfkiE7jj',
            titulocontent: 'Accede al Mecanismo de Protección al Cesante',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/para-que-son-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: '¿Para qué son las cesantías? | Protección',
            id: '7djopz1nxdiCKov302YZMa',
            titulocontent: '¿Para qué son las Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/para-que-son-cesantias',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo: '¿Para qué son las cesantías? | Protección',
            id: '7djopz1nxdiCKov302YZMa',
            titulocontent: '¿Para qué son las Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/que-es-mecanismo-proteccion-cesante',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              '¿Qué es el Mecanismo de Protección al Cesante? | Protección',
            id: '23qtpJMSM4YNIyqXuq6rXe',
            titulocontent: '¿Qué es el Mecanismo de Protección al Cesante?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/que-son-intereses-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              '¿Qué son los intereses de las Cesantías? | Protección',
            id: '4NUxp2FHGN657j83IS6iTO',
            titulocontent: '¿Qué son los intereses de las Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/que-son-intereses-cesantias',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              '¿Qué son los intereses de las Cesantías? | Protección',
            id: '4NUxp2FHGN657j83IS6iTO',
            titulocontent: '¿Qué son los intereses de las Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/que-son-aportes-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: '¿Qué son los aportes a Cesantías? | Protección',
            id: '7s2xq7rgMj4ktUt3bHhjok',
            titulocontent: '¿Qué son los aportes a Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/que-son-aportes-cesantias',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo: '¿Qué son los aportes a Cesantías? | Protección',
            id: '7s2xq7rgMj4ktUt3bHhjok',
            titulocontent: '¿Qué son los aportes a Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/como-declaran-cesantias-trabajadores',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              '¿Cómo declaran Cesantías los trabajadores? | Protección',
            id: '3u6HxJ6dKz4VcqryPX4PQS',
            titulocontent: '¿Cómo declaran Cesantías los trabajadores?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/beneficios-tributarios-ahorrar-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Beneficios tributarios al ahorrar tus Cesantías | Protección',
            id: '5z89TWtWdNGkWGhQG8x6PR',
            titulocontent: 'Beneficios tributarios al ahorrar tus Cesantías',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/portafolios-corto-largo-plazo-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Portafolios Corto Plazo y Largo Plazo Cesantías | Protección',
            id: '635Er8TYNjTJSRJChKa5R9',
            titulocontent: 'Portafolios Corto Plazo y Largo Plazo Cesantías',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/por-que-como-cambiar-portafolio-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Por qué y cómo cambiar de Portafolio Cesantías | Protección',
            id: '27WBmPnOOJ5KodhWSeurj9',
            titulocontent:
              '¿Por qué y cómo cambiar de Portafolio en Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/que-es-pignoracion-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: '¿Qué es la pignoración de Cesantías? | Protección',
            id: '18hr0YhTRaMvseK8PEOYOS',
            titulocontent: '¿Qué es la pignoración de Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/que-es-pignoracion-cesantias',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo: '¿Qué es la pignoración de Cesantías? | Protección',
            id: '18hr0YhTRaMvseK8PEOYOS',
            titulocontent: '¿Qué es la pignoración de Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/que-es-embargo-cesantias-por-que-ocurre',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Qué es el embargo de Cesantías y por qué ocurre | Protección',
            id: '3oZGRnArFGxmoyDVrAoeLX',
            titulocontent: '¿Qué es el embargo de las Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/que-es-embargo-cesantias-por-que-ocurre',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Qué es el embargo de Cesantías y por qué ocurre | Protección',
            id: '3oZGRnArFGxmoyDVrAoeLX',
            titulocontent: '¿Qué es el embargo de las Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/en-que-consiste-inmovilizar-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              '¿En qué consiste inmovilizar las Cesantías? | Protección',
            id: '51QUG2hfA3ftt3L2koBTnE',
            titulocontent: '¿En qué consiste inmovilizar las Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/en-que-consiste-inmovilizar-cesantias',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              '¿En qué consiste inmovilizar las Cesantías? | Protección',
            id: '51QUG2hfA3ftt3L2koBTnE',
            titulocontent: '¿En qué consiste inmovilizar las Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/cuales-son-certificados-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              '¿Cuáles son los certificados de Cesantías? | Protección',
            id: '3pYpjw2sFa2PdHkmqZIJND',
            titulocontent: '¿Cuáles son los certificados de Cesantías?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/preguntas-frecuentes-clave-empresarial',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Preguntas frecuentes sobre la Clave Empresarial | Protección',
            id: '6NCf9CaxKvkpaVcs9xDv3l',
            titulocontent: 'Preguntas frecuentes sobre la Clave Empresarial',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/empresas-cesantias-certifacil',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo: null,
            id: '7HmVFsoAJ0T04LeYv6fpo',
            titulocontent: '¡Conoce Certifácil!',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/liquide-pague-cesantias-colaboradores',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Liquide y Pague Cesantías: Para tus colaboradores | Protección',
            id: '27L0hIIKhpuTxBfeC7Aefh',
            titulocontent:
              'Paga las Cesantías a través de Liquide y Pague - Con Clave',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path:
            '/empresa/cesantias/pague-cesantias-liquidar-cesantias-empleados',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Pague Cesantías: Liquidar cesantías a empleados | Protección',
            id: '4ZB5MQy4ZgpJYP8leMLPue',
            titulocontent:
              'Paga y Liquida las Cesantías con Pague Cesantías - Sin Clave',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/liquida-cesantias-colaboradores-pila',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Liquida las cesantías de colaboradores en PILA | Protección',
            id: '6VpQ8vnCOoNIeFzzZTkiL6',
            titulocontent: 'Liquida y paga las Cesantías a través de PILA',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/calculadora-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: 'Calculadora de Cesantías | Protección',
            id: 'PQcZ8hT1yHyWxd8MTkdFj',
            titulocontent: 'Calculadora de Cesantías',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/calculadora-cesantias',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo: 'Calculadora de Cesantías | Protección',
            id: 'PQcZ8hT1yHyWxd8MTkdFj',
            titulocontent: 'Calculadora de Cesantías',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/medios-liquidacion-pago-llenar-planillas',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Medios de Liquidación y Pago ¿Llenar planillas? | Protección',
            id: '6n6WBqAypQnjyYPg3r8nJZ',
            titulocontent:
              'Medios de Liquidación y Pago. ¿Llenar planillas? ¡Tu decides!',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/ley-proteccion-datos-personales',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: 'Ley de Protección de Datos Personales | Protección',
            id: '1xHxTW3DXQANbKXTXDhnfw',
            titulocontent: 'Ley de Protección de Datos Personales',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/inversion/rentabilidades',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: null,
            id: '7sAAXHZuZo1MPS2j8U6U9G',
            titulocontent: 'Rentabilidades',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/inversion/composicion-portafolio',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: 'Composición del Portafolio | Protección',
            id: '40U6iT93UwkukYi3HzZlHJ',
            titulocontent: 'Composición del Portafolio',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/inversion/filosofia-inversion',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: 'Filosofía de Inversión | Protección',
            id: '2VL6eZgIloDVQmJiBO55kd',
            titulocontent: 'Nuestra filosofía de inversión',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path:
            '/persona/inversion/nuevo-portafolio-fondo-pensiones-voluntarias',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo:
              'Nuevo Portafolio Fondo de Pensiones Voluntarias | Protección',
            id: '4EW7UKXU7OwNT3ERmib2UE',
            titulocontent:
              'Nuevo portafolio del Fondo de Pensiones Voluntarias',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/inversion/por-que-elegirnos-como-asesor-experto',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo:
              '¿Por qué elegirnos como tu asesor experto? | Protección',
            id: '61N7yC50qCD52rNjxKd2OH',
            titulocontent:
              '¿Por qué elegir a Protección como tu asesor experto?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/administracion-fondos-ahorro-colaboradores',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Administración Fondos de Ahorro Colaboradores | Protección',
            id: '6F7tDvZ8glmB8eZslrwtgD',
            titulocontent: 'Administración Fondos de Ahorro de Largo Plazo',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path:
            '/persona/ahorro/comision-administracion-planes-institucionales',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Comisión Administración Planes Institucionales | Protección',
            id: '7piMAz5Eq1wOc54fiezEdo',
            titulocontent:
              'Comisión de administración de los Planes Institucionales',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path:
            '/empresa/ahorro/comision-administracion-planes-institucionales',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Comisión Administración Planes Institucionales | Protección',
            id: '7piMAz5Eq1wOc54fiezEdo',
            titulocontent:
              'Comisión de administración de los Planes Institucionales',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/servicios-empresa-plan-institucional',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Servicios de mi empresa con un Plan Institucional | Protección',
            id: '4VCdpOEbBS9Ul394PbvAxi',
            titulocontent: 'Servicios al tener un Plan Institucional',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/soluciones-ahorro-colaboradores',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Soluciones de Ahorro para tus colaboradores | Protección',
            id: 'G0m3rvEx8imM6lwa7kPjP',
            titulocontent:
              'Acompañamos a tus colaboradores con diferentes soluciones',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/mutuocolombia-plan-institucional-bancolombia',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Mutuocolombia: Plan Institucional Bancolombia | Protección',
            id: 'CJ1JOb6BpUlLvwZE8zHob',
            titulocontent: 'Mutuocolombia - Plan Institucional Bancolombia',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/mutuocolombia-plan-institucional-bancolombia',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Mutuocolombia: Plan Institucional Bancolombia | Protección',
            id: 'CJ1JOb6BpUlLvwZE8zHob',
            titulocontent: 'Mutuocolombia - Plan Institucional Bancolombia',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/bienestar-financiero-qiip-proteccion',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Bienestar financiero con qiip y Protección | Protección',
            id: '6RecpTyU9umpCBhR7C9FGH',
            titulocontent: 'Bienestar financiero con qiip y Protección',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/bienestar-financiero-qiip-proteccion',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Bienestar financiero con qiip y Protección | Protección',
            id: '6RecpTyU9umpCBhR7C9FGH',
            titulocontent: 'Bienestar financiero con qiip y Protección',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/ahorrar-educacion-hijos-proteccion',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Ahorrar: La educación de tus hijos es Protección | Protección',
            id: '5HfaV5BNi8HiXXATdbYCnn',
            titulocontent: 'Planifica la educación de tus hijos con Protección',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/diferencias-proteccion-colpensiones',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Diferencias entre Protección y Colpensiones | Protección',
            id: '2ilVwq892IjQZLSsqthDnU',
            titulocontent:
              'Conoce las diferencias entre Protección y Colpensiones',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/diferencias-proteccion-colpensiones',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Diferencias entre Protección y Colpensiones | Protección',
            id: '2ilVwq892IjQZLSsqthDnU',
            titulocontent:
              'Conoce las diferencias entre Protección y Colpensiones',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/pension/mitos-y-realidades-sistema-pensional',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Mitos y realidades del sistema pensional Colombiano | Protección',
            id: '6VuZ65EGUHchKosppLsVGX',
            titulocontent:
              'Mitos y realidades del sistema pensional colombiano',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/pension/mitos-y-realidades-sistema-pensional',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Mitos y realidades del sistema pensional Colombiano | Protección',
            id: '6VuZ65EGUHchKosppLsVGX',
            titulocontent:
              'Mitos y realidades del sistema pensional colombiano',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/que-es-doble-asesoria',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: '¿Qué es la Doble Asesoría? | Protección',
            id: '6IUvAFlor2YajeC4NDMuu6',
            titulocontent: 'Descubre qué es la Doble Asesoría',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/pension-invalidez',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Pensión por Invalidez | Protección',
            id: 'PBqUvZk5g6tfyxnrJyUzm',
            titulocontent: '¿Qué es la Pensión por Invalidez?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/pension-invalidez',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Pensión por Invalidez | Protección',
            id: 'PBqUvZk5g6tfyxnrJyUzm',
            titulocontent: '¿Qué es la Pensión por Invalidez?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/que-son-pensiones',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: '¿Qué son las pensiones? | Protección',
            id: '6xcOQYkjUvgFE1ED6WD5h6',
            titulocontent: '¿Qué son las Pensiones Obligatorias?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/que-son-pensiones',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: '¿Qué son las pensiones? | Protección',
            id: '6xcOQYkjUvgFE1ED6WD5h6',
            titulocontent: '¿Qué son las Pensiones Obligatorias?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/retiro-programado-vs-renta-vitalicia',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Retiro Programado vs. Renta Vitalicia | Protección',
            id: '1fvmkVLMHcdzzCOYcqAlxZ',
            titulocontent:
              'Conoce las modalidades: Retiro Programado y Renta Vitalicia',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/aportes-voluntarios-pension-obligatoria',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Aportes Voluntarios a Pensión Obligatoria | Protección',
            id: 'o3giTQnjqhyAoMutUhZbQ',
            titulocontent: 'Aportes voluntarios a Pensión Obligatoria',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/recalculo-pensional',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Recálculo Pensional | Protección',
            id: '2Br3aVY1EnROPFem5o7FUp',
            titulocontent: '¿Qué es el recálculo pensional?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/convergencia-multifondos-proteger-ahorro',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Convergencia de Multifondos: Proteger tu Ahorro | Protección',
            id: '4A81XrIlz6hpac0ucMBrb3',
            titulocontent: 'Convergencia de multifondos ¿Qué es?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/como-mejorar-pension',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: '¿Cómo mejorar desde ya mi pensión? | Protección',
            id: '2iXrKcgGOOdDndob4PLmlo',
            titulocontent: '¿Cómo mejorar desde ya mi pensión?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/que-son-multifondos',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: '¿Qué son los Multifondos? | Protección',
            id: '3t5N3ImpOGyl4ztdtGMnP4',
            titulocontent: '¿Qué son los multifondos?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/pension-anticipada',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Conoce cómo puedes pensionarte anticipadamente | Protección',
            id: '1xISHrDvZ9LGdHrzKgGO0E',
            titulocontent: '¿Sabes qué es la Pensión anticipada?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/que-es-extracto-pension-obligatoria',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              '¿Qué es el Extracto de Pensión Obligatoria? | Protección',
            id: '4By2pZKTj8IiaT7W3CPAnK',
            titulocontent: '¿Qué es el extracto y cómo leerlo?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/historia-laboral-seguimiento-aportes',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Historia Laboral: Seguimiento a tus aportes | Protección',
            id: '5KmrQpaRpzDfGzGS79QRoF',
            titulocontent: '¿Qué es la Historia Laboral?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/requisitos-ley-pensionarme',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Requisitos de ley para pensionarme | Protección',
            id: '7vOMUOJ5BsEOPiKg5hkDAf',
            titulocontent: 'Lo que te exige la ley para pensionarte',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/devolucion-saldos-indemnizacion-sustitutiva',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Devolución de Saldos e Indemnización Sustitutiva | Protección',
            id: '1E8a8MDHQCM7NsH0jpX9zX',
            titulocontent: 'Devolución de Saldos e Indemnización Sustitutiva',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/garantia-pension-minima',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Garantía de Pensión Mínima | Protección',
            id: '2hfKoSwc6gWZjUvHNQe8fE',
            titulocontent: 'Garantía de Pensión Mínima',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/garantia-pension-minima',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Garantía de Pensión Mínima | Protección',
            id: '2hfKoSwc6gWZjUvHNQe8fE',
            titulocontent: 'Garantía de Pensión Mínima',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/pension-familiar',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Pensión Familiar | Protección',
            id: '2Jx1qawF6jAXb0nGo5w7k9',
            titulocontent: 'Pensión Familiar',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/pension-familiar',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Pensión Familiar | Protección',
            id: '2Jx1qawF6jAXb0nGo5w7k9',
            titulocontent: 'Pensión Familiar',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/beneficios-economicos-periodicos-beps',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Beneficios Económicos Periódicos - BEPS | Protección',
            id: '6sYa0jPvVASMPadnMnLUqF',
            titulocontent: '¿Qué son los BEPS?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/beneficios-economicos-periodicos-beps',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Beneficios Económicos Periódicos - BEPS | Protección',
            id: '6sYa0jPvVASMPadnMnLUqF',
            titulocontent: '¿Qué son los BEPS?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/pension-sobrevivencia',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Pensión por Sobrevivencia | Protección',
            id: 'Z7ylkH8kNRS8X0yI9kbNT',
            titulocontent: '¿Qué es la Pensión por Sobrevivencia?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/pension-sobrevivencia',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Pensión por Sobrevivencia | Protección',
            id: 'Z7ylkH8kNRS8X0yI9kbNT',
            titulocontent: '¿Qué es la Pensión por Sobrevivencia?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/pension-vejez',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Pensión por Vejez | Protección',
            id: 'jQigdMl6IOArXVe7qT1DH',
            titulocontent: '¿Qué es la Pensión por Vejez?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/pension-vejez',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Pensión por Vejez | Protección',
            id: 'jQigdMl6IOArXVe7qT1DH',
            titulocontent: '¿Qué es la Pensión por Vejez?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/preguntas-frecuentes-rentabilidad',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Preguntas Frecuentes sobre Rentabilidad | Protección',
            id: '37i1uMkmeDfNofsSzdOAyH',
            titulocontent: 'Preguntas Frecuentes sobre Rentabilidad',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/preguntas-frecuentes-rentabilidad',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Preguntas Frecuentes sobre Rentabilidad | Protección',
            id: '37i1uMkmeDfNofsSzdOAyH',
            titulocontent: 'Preguntas Frecuentes sobre Rentabilidad',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/afiliacion-colaboradores-digital-empresas',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Afiliación Colaboradores 100% Digital Empresas | Protección',
            id: '7q93kEj6oZcmQbqzLRxp3D',
            titulocontent: 'Afilia a tus colaboradores de forma 100% Digital',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/doble-asesoria-empresas',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Doble Asesoría para Empresas | Protección',
            id: 'CmTlV80HQGMsd2qvrILH6',
            titulocontent: 'Doble Asesoría, para que tu equipo decida mejor',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/tracking-pensional-empresas',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Tracking Pensional Empresas | Protección',
            id: '28ONVvtsnNu8pgQpSjB9jM',
            titulocontent:
              '¿Cómo hacer seguimiento a los procesos de solicitud de pensión?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/aprende-rentabilidad-importancia',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Aprende sobre Rentabilidad y su importancia | Protección',
            id: '43y9sBUeH0Qnmua75zIhbn',
            titulocontent: '¿Qué papel juega la rentabilidad en mi pensión?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/aprende-rentabilidad-importancia',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Aprende sobre Rentabilidad y su importancia | Protección',
            id: '43y9sBUeH0Qnmua75zIhbn',
            titulocontent: '¿Qué papel juega la rentabilidad en mi pensión?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/calificacion-invalidez',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Calificación de Invalidez | Protección',
            id: '2PdFK9QuxTWJJH0VSLheVI',
            titulocontent: '¿Qué es la calificación de invalidez?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/calificacion-invalidez',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Calificación de Invalidez | Protección',
            id: '2PdFK9QuxTWJJH0VSLheVI',
            titulocontent: '¿Qué es la calificación de invalidez?',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/auxilio-funerario-gastos-exequiales',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Auxilio Funerario: Cubrir Gastos Exequiales | Protección',
            id: '7DMjPKSsFQt6OJg6LZ1VWZ',
            titulocontent: 'Auxilio funerario',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/viaticos-calificacion-invalidez',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Viáticos: Calificación Invalidez | Protección',
            id: '5g8txcWhWYGin1BCh2AHoM',
            titulocontent: 'Viáticos durante la calificación de invalidez',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/pension-vejez-empresas',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Pensión por Vejez Empresas | Protección',
            id: '1XkOiBccbZxaljEOekGvlN',
            titulocontent: 'ABC de la Pensión por Vejez para tus colaboradores',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/historia-laboral-empresas',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Historia Laboral Empresas | Protección',
            id: '2bw2uHXM4SuXbuLFcgFty4',
            titulocontent:
              'Historia Laboral, una herramienta clave para tu equipo',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/solicitud-pension-vejez-empresas',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Solicitud de Pensión por Vejez Empresas | Protección',
            id: '5EZGS6IelUV3ZfZVO2eHFX',
            titulocontent: 'Solicitud de Pensión por Vejez',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path:
            '/persona/inversion/mitos-realidades-sistema-pensional-contendioeduc',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo:
              'Mitos y realidades del sistema pensional Colombiano',
            id: 'ixxKMebxvMfDmOvqutmqz',
            titulocontent: 'Ensayo informes inversiones contenido',
            type: 'producto'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/actualiza-datos-empresa',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo: 'Actualiza los datos de tu empresa | Protección',
            id: '1oyLmGCSRIKo0jnWA5ZAbX',
            titulocontent: '¡Actualiza los datos de tu empresa!',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/actualiza-datos-empresa',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Actualiza los datos de tu empresa | Protección',
            id: '1oyLmGCSRIKo0jnWA5ZAbX',
            titulocontent: '¡Actualiza los datos de tu empresa!',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/actualiza-datos-empresa',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Actualiza los datos de tu empresa | Protección',
            id: '1oyLmGCSRIKo0jnWA5ZAbX',
            titulocontent: '¡Actualiza los datos de tu empresa!',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/claves-generar-estrategia-digital',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Claves para generar una estrategia digital | Protección',
            id: '4VmUFRVFt3WlCA0fOtelni',
            titulocontent:
              'Claves para generar tu estrategia digital y multiplicar clientes',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/claves-generar-estrategia-digital',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Claves para generar una estrategia digital | Protección',
            id: '4VmUFRVFt3WlCA0fOtelni',
            titulocontent:
              'Claves para generar tu estrategia digital y multiplicar clientes',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/claves-generar-estrategia-digital',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Claves para generar una estrategia digital | Protección',
            id: '4VmUFRVFt3WlCA0fOtelni',
            titulocontent:
              'Claves para generar tu estrategia digital y multiplicar clientes',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/compra-cartera-pago-creditos',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Compra de cartera y pago de créditos | Protección',
            id: 'g0zzHuHjcrU9iOfMScY1D',
            titulocontent:
              'Compra de cartera, un nuevo comienzo para el pago de créditos',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/estrena-casa-con-tu-360-inmobiliario',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Estrena casa con TU360Inmobiliario | Protección',
            id: '1xACU1NQAu3KarwHSb5EdB',
            titulocontent:
              '¡Vive la emoción de estrenar casa con TU360Inmobiliario!',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/proyecto-de-ley-solidaridad-sostenible',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Proyecto de Ley de Solidaridad Sostenible | Protección',
            id: '6M1l1gjxU4gLraoMFhfvhV',
            titulocontent:
              'Proyecto de Ley de Solidaridad Sostenible ¿Qué cambios propone?',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/proyecto-de-ley-solidaridad-sostenible',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Proyecto de Ley de Solidaridad Sostenible | Protección',
            id: '6M1l1gjxU4gLraoMFhfvhV',
            titulocontent:
              'Proyecto de Ley de Solidaridad Sostenible ¿Qué cambios propone?',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/proyecto-de-ley-solidaridad-sostenible',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Proyecto de Ley de Solidaridad Sostenible | Protección',
            id: '6M1l1gjxU4gLraoMFhfvhV',
            titulocontent:
              'Proyecto de Ley de Solidaridad Sostenible ¿Qué cambios propone?',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/alianza-habi-cumple-meta-casa-propia',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Alianza Habi: Cumple la meta de una casa propia | Protección',
            id: '6UGV4pMpxydUqJQIRkfr4M',
            titulocontent:
              'Protección y Habi te ayudan a cumplir la meta de un hogar propio',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/conoce-oferta-tenemos-empresa',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Conoce la oferta que tenemos para tu empresa | Protección',
            id: '63dP1HNCS9VGft1DuCbbPd',
            titulocontent:
              '¡Conoce la oferta que tenemos para tu empresa en Protección!',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/conoce-oferta-tenemos-empresa',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Conoce la oferta que tenemos para tu empresa | Protección',
            id: '63dP1HNCS9VGft1DuCbbPd',
            titulocontent:
              '¡Conoce la oferta que tenemos para tu empresa en Protección!',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/conoce-oferta-tenemos-empresa',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Conoce la oferta que tenemos para tu empresa | Protección',
            id: '63dP1HNCS9VGft1DuCbbPd',
            titulocontent:
              '¡Conoce la oferta que tenemos para tu empresa en Protección!',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path:
            '/persona/cesantias/con-vecindario-tener-casa-propia-si-es-posible',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Con Vecindario, tener casa propia sí es posible | Protección',
            id: '3idU9aEVdgtfAmNIgyFBWM',
            titulocontent: 'Con Vecindario, tener casa propia sí es posible.',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path:
            '/empresa/cesantias/con-vecindario-tener-casa-propia-si-es-posible',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Con Vecindario, tener casa propia sí es posible | Protección',
            id: '3idU9aEVdgtfAmNIgyFBWM',
            titulocontent: 'Con Vecindario, tener casa propia sí es posible.',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path:
            '/persona/ahorro/con-vecindario-tener-casa-propia-si-es-posible',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Con Vecindario, tener casa propia sí es posible | Protección',
            id: '3idU9aEVdgtfAmNIgyFBWM',
            titulocontent: 'Con Vecindario, tener casa propia sí es posible.',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path:
            '/empresa/ahorro/con-vecindario-tener-casa-propia-si-es-posible',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Con Vecindario, tener casa propia sí es posible | Protección',
            id: '3idU9aEVdgtfAmNIgyFBWM',
            titulocontent: 'Con Vecindario, tener casa propia sí es posible.',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/nueva-alianza-vendemos-casas-con-descuento',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: 'Nueva alianza: Home Capital | Protección',
            id: '6RmCigcRK5cXT5V3QLjyT7',
            titulocontent:
              '¡Conoce nuestra nueva alianza! Haz realidad tu sueño de vivienda',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/nueva-alianza-vendemos-casas-con-descuento',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo: 'Nueva alianza: Home Capital | Protección',
            id: '6RmCigcRK5cXT5V3QLjyT7',
            titulocontent:
              '¡Conoce nuestra nueva alianza! Haz realidad tu sueño de vivienda',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/nueva-alianza-vendemos-casas-con-descuento',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Nueva alianza: Home Capital | Protección',
            id: '6RmCigcRK5cXT5V3QLjyT7',
            titulocontent:
              '¡Conoce nuestra nueva alianza! Haz realidad tu sueño de vivienda',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/nueva-alianza-vendemos-casas-con-descuento',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Nueva alianza: Home Capital | Protección',
            id: '6RmCigcRK5cXT5V3QLjyT7',
            titulocontent:
              '¡Conoce nuestra nueva alianza! Haz realidad tu sueño de vivienda',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/haz-realidad-tu-sueno-comprar-vivienda',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Haz realidad tu sueño de comprar vivienda | Protección',
            id: '3UrKTreATDqyTlCMpu69AP',
            titulocontent: 'Haz realidad tu sueño de tener vivienda propia',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/haz-realidad-tu-sueno-comprar-vivienda',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Haz realidad tu sueño de comprar vivienda | Protección',
            id: '3UrKTreATDqyTlCMpu69AP',
            titulocontent: 'Haz realidad tu sueño de tener vivienda propia',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/por-que-estar-proteccion',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: '¿Por qué estar en Protección? | Protección',
            id: '4SFZQxJCVrRBME6lLqdVSW',
            titulocontent: '¿Por qué estar en Protección?',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/linea-servicio-empleadores-proteccion',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Línea de Servicio para Empleadores Protección | Protección',
            id: 'GbttKYqTGRTVZGMnbn3kY',
            titulocontent: 'Línea de Servicio para Empleadores Protección',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/linea-servicio-empleadores-proteccion',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Línea de Servicio para Empleadores Protección | Protección',
            id: 'GbttKYqTGRTVZGMnbn3kY',
            titulocontent: 'Línea de Servicio para Empleadores Protección',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/linea-servicio-empleadores-proteccion',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Línea de Servicio para Empleadores Protección | Protección',
            id: 'GbttKYqTGRTVZGMnbn3kY',
            titulocontent: 'Línea de Servicio para Empleadores Protección',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/oferta-canales-atencion-colaboradores',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Oferta en canales de atención para colaboradores | Protección',
            id: '1sZQrmIgXQoqjbUHuTCcdU',
            titulocontent:
              'Oferta en canales de atención para tus colaboradores',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/oferta-canales-atencion-colaboradores',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Oferta en canales de atención para colaboradores | Protección',
            id: '1sZQrmIgXQoqjbUHuTCcdU',
            titulocontent:
              'Oferta en canales de atención para tus colaboradores',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/oferta-canales-atencion-colaboradores',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Oferta en canales de atención para colaboradores | Protección',
            id: '1sZQrmIgXQoqjbUHuTCcdU',
            titulocontent:
              'Oferta en canales de atención para tus colaboradores',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/acompanamiento-para-ti-empleador',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo: 'Acompañamiento para ti como empleador | Protección',
            id: '1ICpTNPSI2R0F3JgjRN5JE',
            titulocontent: 'Acompañamiento para ti como empleador',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/acompanamiento-para-ti-empleador',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Acompañamiento para ti como empleador | Protección',
            id: '1ICpTNPSI2R0F3JgjRN5JE',
            titulocontent: 'Acompañamiento para ti como empleador',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/acompanamiento-para-ti-empleador',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Acompañamiento para ti como empleador | Protección',
            id: '1ICpTNPSI2R0F3JgjRN5JE',
            titulocontent: 'Acompañamiento para ti como empleador',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/acompanamos-tus-colaboradores-momento-vida',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Acompañamos a tus colaboradores: Momento de vida | Protección',
            id: '6g6bVUXQfWmDHsFCTJE1oh',
            titulocontent: 'Acompañamos a tus colaboradores según sus metas',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/acompanamos-tus-colaboradores-momento-vida',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Acompañamos a tus colaboradores: Momento de vida | Protección',
            id: '6g6bVUXQfWmDHsFCTJE1oh',
            titulocontent: 'Acompañamos a tus colaboradores según sus metas',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/acompanamos-tus-colaboradores-momento-vida',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Acompañamos a tus colaboradores: Momento de vida | Protección',
            id: '6g6bVUXQfWmDHsFCTJE1oh',
            titulocontent: 'Acompañamos a tus colaboradores según sus metas',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/impulsa-tu-negocio-universidad-proteccion',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Impulsa tu negocio con Universidad Protección | Protección',
            id: '4LVWRKXz2tO8hinOrqo70U',
            titulocontent: 'Impulsa tu negocio con Universidad Protección',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/impulsa-tu-negocio-universidad-proteccion',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Impulsa tu negocio con Universidad Protección | Protección',
            id: '4LVWRKXz2tO8hinOrqo70U',
            titulocontent: 'Impulsa tu negocio con Universidad Protección',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/impulsa-tu-negocio-universidad-proteccion',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Impulsa tu negocio con Universidad Protección | Protección',
            id: '4LVWRKXz2tO8hinOrqo70U',
            titulocontent: 'Impulsa tu negocio con Universidad Protección',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/alianza-crehana-acamica-empresa',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Alianza con Crehana y Acámica para tu empresa | Protección',
            id: '7c7uXwjjUMPvG2EFJDU7ZD',
            titulocontent: 'Alianza con Crehana y Acámica para tu empresa',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/alianza-crehana-acamica-empresa',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Alianza con Crehana y Acámica para tu empresa | Protección',
            id: '7c7uXwjjUMPvG2EFJDU7ZD',
            titulocontent: 'Alianza con Crehana y Acámica para tu empresa',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/alianza-crehana-acamica-empresa',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Alianza con Crehana y Acámica para tu empresa | Protección',
            id: '7c7uXwjjUMPvG2EFJDU7ZD',
            titulocontent: 'Alianza con Crehana y Acámica para tu empresa',
            type: 'beneficio'
          }
        }
      },
      {
        node: {
          path:
            '/persona/cesantias/novedad/cierres-temporales-oficinas-servicio',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Horarios especiales en nuestras Oficinas de Servicio | Protección',
            id: '2F9xWNYSjG2qOYgw0tTEdf',
            titulocontent:
              'Conoce los horarios especiales de nuestras Oficinas de Servicio',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/empresa/cesantias/novedad/cierres-temporales-oficinas-servicio',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Horarios especiales en nuestras Oficinas de Servicio | Protección',
            id: '2F9xWNYSjG2qOYgw0tTEdf',
            titulocontent:
              'Conoce los horarios especiales de nuestras Oficinas de Servicio',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/novedad/cierres-temporales-oficinas-servicio',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Horarios especiales en nuestras Oficinas de Servicio | Protección',
            id: '2F9xWNYSjG2qOYgw0tTEdf',
            titulocontent:
              'Conoce los horarios especiales de nuestras Oficinas de Servicio',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/novedad/cierres-temporales-oficinas-servicio',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Horarios especiales en nuestras Oficinas de Servicio | Protección',
            id: '2F9xWNYSjG2qOYgw0tTEdf',
            titulocontent:
              'Conoce los horarios especiales de nuestras Oficinas de Servicio',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/novedad/cierres-temporales-oficinas-servicio',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Horarios especiales en nuestras Oficinas de Servicio | Protección',
            id: '2F9xWNYSjG2qOYgw0tTEdf',
            titulocontent:
              'Conoce los horarios especiales de nuestras Oficinas de Servicio',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/novedad/cierres-temporales-oficinas-servicio',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Horarios especiales en nuestras Oficinas de Servicio | Protección',
            id: '2F9xWNYSjG2qOYgw0tTEdf',
            titulocontent:
              'Conoce los horarios especiales de nuestras Oficinas de Servicio',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/persona/inversion/novedad/cierres-temporales-oficinas-servicio',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo:
              'Horarios especiales en nuestras Oficinas de Servicio | Protección',
            id: '2F9xWNYSjG2qOYgw0tTEdf',
            titulocontent:
              'Conoce los horarios especiales de nuestras Oficinas de Servicio',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/tips-compra-de-vivienda',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '7 tips para tener la casa de tus sueños | Protección',
            id: '3bta6Ya6DjJ30U13X1xRAS',
            titulocontent:
              '7 tips para tener en cuenta al comprar la casa de tus sueños',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/gestion-pro-administracion-inversiones',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Gestión PRO: Administración de tus inversiones | Protección',
            id: '2KzeykhWJoxxNCmJDg4KNz',
            titulocontent:
              'Delega en Gestión PRO la administración de tus inversiones',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/inversion/gestion-pro-administracion-inversiones',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo:
              'Gestión PRO: Administración de tus inversiones | Protección',
            id: '2KzeykhWJoxxNCmJDg4KNz',
            titulocontent:
              'Delega en Gestión PRO la administración de tus inversiones',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/linea-etica-codigo-conducta',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: 'Línea Ética y Código de Conducta | Protección',
            id: '3XPrB1mLlEeubXBc0Rhy9g',
            titulocontent: 'Línea Ética y Código de Conducta',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/persona/pension/nuestra-web-cada-vez-mas-accesible-incluyente',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Nuestra web cada vez más accesible e incluyente | Protección',
            id: '4n2tQ39V2OA3h5ESeb7Jjm',
            titulocontent:
              'Proteccion.com: cada vez más accesible e incluyente',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/persona/cesantias/4-maneras-comunicarte-si-vives-fuera-colombia',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Cómo comunicarte si estás fuera de Colombia | Protección',
            id: '5fUfBoBzO6mzUtVkQQzHRo',
            titulocontent:
              '4 formas de comunicarte con Protección si vives fuera del país',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/persona/pension/4-maneras-comunicarte-si-vives-fuera-colombia',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Cómo comunicarte si estás fuera de Colombia | Protección',
            id: '5fUfBoBzO6mzUtVkQQzHRo',
            titulocontent:
              '4 formas de comunicarte con Protección si vives fuera del país',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/resuelve-dudas-traslado-express',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: null,
            id: '58FcO47RNK6m9a7soHx2bH',
            titulocontent: 'Resuelve tus dudas sobre el traslado express',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/tienes-seguros-ahorro-emergencias',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '¿Tienes seguros o un ahorro para emergencias? | Protección',
            id: '4u1nfBMG8aU98u5i63vtn8',
            titulocontent: '¿Tienes seguros o un ahorro para emergencias?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/tus-datos-transforman-generacion-futuro',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Tus datos transforman la generación del futuro | Protección',
            id: '44xltNT23K25WcZAVICcZD',
            titulocontent:
              'HOY, tus datos transforman la generación del futuro',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/tus-datos-transforman-generacion-futuro',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Tus datos transforman la generación del futuro | Protección',
            id: '44xltNT23K25WcZAVICcZD',
            titulocontent:
              'HOY, tus datos transforman la generación del futuro',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/tus-datos-transforman-generacion-futuro',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Tus datos transforman la generación del futuro | Protección',
            id: '44xltNT23K25WcZAVICcZD',
            titulocontent:
              'HOY, tus datos transforman la generación del futuro',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/app-whatsapp-proteccion-estar-mas-cerca',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'App y WhatsApp Protección: Para estar más cerca | Protección',
            id: '5siFSNlVr6PDIBiTLMaILy',
            titulocontent: 'App y WhatsApp Protección, para estar más cerca',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/app-whatsapp-proteccion-estar-mas-cerca',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'App y WhatsApp Protección: Para estar más cerca | Protección',
            id: '5siFSNlVr6PDIBiTLMaILy',
            titulocontent: 'App y WhatsApp Protección, para estar más cerca',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/app-whatsapp-proteccion-estar-mas-cerca',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'App y WhatsApp Protección: Para estar más cerca | Protección',
            id: '5siFSNlVr6PDIBiTLMaILy',
            titulocontent: 'App y WhatsApp Protección, para estar más cerca',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/app-whatsapp-proteccion-estar-mas-cerca',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'App y WhatsApp Protección: Para estar más cerca | Protección',
            id: '5siFSNlVr6PDIBiTLMaILy',
            titulocontent: 'App y WhatsApp Protección, para estar más cerca',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/persona/cesantias/disponibles-certificados-declaracion-renta-2020',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Disponibles Certificados Declaración de Renta 2020 | Protección',
            id: '5JFWsQtXW9K93PzbgVFE3N',
            titulocontent:
              'Disponibles los certificados para la Declaración de Renta 2020',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/persona/ahorro/disponibles-certificados-declaracion-renta-2020',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Disponibles Certificados Declaración de Renta 2020 | Protección',
            id: '5JFWsQtXW9K93PzbgVFE3N',
            titulocontent:
              'Disponibles los certificados para la Declaración de Renta 2020',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/persona/pension/disponibles-certificados-declaracion-renta-2020',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Disponibles Certificados Declaración de Renta 2020 | Protección',
            id: '5JFWsQtXW9K93PzbgVFE3N',
            titulocontent:
              'Disponibles los certificados para la Declaración de Renta 2020',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/persona/inversion/disponibles-certificados-declaracion-renta-2020',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo:
              'Disponibles Certificados Declaración de Renta 2020 | Protección',
            id: '5JFWsQtXW9K93PzbgVFE3N',
            titulocontent:
              'Disponibles los certificados para la Declaración de Renta 2020',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/inversion-vs-ahorro-cual-conviene-mas',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Inversión vs Ahorro ¿Cuál conviene más? | Protección',
            id: 'NAnZIcqfBIyxm6TjlXYP6',
            titulocontent: 'Inversión vs Ahorro. ¿Cuál conviene más?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/automatiza-contratacion-talentos-empresa',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Automatiza la contratación de talentos en empresa | Protección',
            id: '2q4BrAJX0nzsck0QjVcGLV',
            titulocontent: 'Automatiza la contratación de nuevos talentos',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/automatiza-contratacion-talentos-empresa',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Automatiza la contratación de talentos en empresa | Protección',
            id: '2q4BrAJX0nzsck0QjVcGLV',
            titulocontent: 'Automatiza la contratación de nuevos talentos',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/automatiza-contratacion-talentos-empresa',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Automatiza la contratación de talentos en empresa | Protección',
            id: '2q4BrAJX0nzsck0QjVcGLV',
            titulocontent: 'Automatiza la contratación de nuevos talentos',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/tips-potenciar-talento-futuro',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Tips para potenciar el talento del futuro | Protección',
            id: '28jISdobHYV4w7RtqnyjEQ',
            titulocontent: 'Tips para potenciar el talento del futuro',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/tips-potenciar-talento-futuro',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Tips para potenciar el talento del futuro | Protección',
            id: '28jISdobHYV4w7RtqnyjEQ',
            titulocontent: 'Tips para potenciar el talento del futuro',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/empezar-comercio-electronico-en-7-pasos',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Empieza tu comercio electrónico en solo 7 pasos | Protección',
            id: '3srJYfXxVUp7OxPqSM7S45',
            titulocontent:
              '¿Cómo empezar un comercio electrónico en solo 7 pasos?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/empezar-comercio-electronico-en-7-pasos',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Empieza tu comercio electrónico en solo 7 pasos | Protección',
            id: '3srJYfXxVUp7OxPqSM7S45',
            titulocontent:
              '¿Cómo empezar un comercio electrónico en solo 7 pasos?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/actualizacion-datos-empresa',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Actualización Datos de tu Empresa | Protección',
            id: '2pJ8q3dJXWv7srYo576NGP',
            titulocontent: 'Aprende cómo actualizar los datos de tu empresa',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/inversion/desempeno-mercados-bursatiles',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: 'Desempeño en los Mercados Bursátiles | Protección',
            id: 'QSwV5jqzrGRh40tDAB68S',
            titulocontent: 'Desempeño en los Mercados Bursátiles',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/aprende-planear-futuro',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Aprende a planear para el futuro | Protección',
            id: '2ydWqtFKXc1FWGZMztLBEr',
            titulocontent: 'Aprende a planear para el futuro',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/lo-que-debes-saber-compras-compulsivas',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Lo que debes saber sobre las compras compulsivas | Protección',
            id: '4Wy3aJeIfkIyKe447CPW5W',
            titulocontent: 'Lo que debes saber sobre las compras compulsivas ',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/por-que-no-debemos-guardar-dinero-en-casa',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '¿Por qué no debemos guardar dinero en casa? | Protección',
            id: '3CCkNRZPZ641xWY5LaJ3l4',
            titulocontent: '¿Por qué no debemos guardar dinero en casa?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/economia-consciente-como-cuidar-planeta',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Economía consciente: Cómo cuidar el planeta | Protección',
            id: '6VQe74KbhQyzR06kqDb97e',
            titulocontent:
              'Economía consciente: cómo cuidar el planeta y tu bolsillo',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/persona/ahorro/aportes-mi-reserva-portafolio-proteccion-vista',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Aportes Mi Reserva: Portafolio Protección Vista | Protección',
            id: '2nXeh7XusdoZvgHkHyZ5DN',
            titulocontent:
              'Los aportes de Mi Reserva migran al portafolio Protección Vista',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/empresa/ahorro/aportes-mi-reserva-portafolio-proteccion-vista',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Aportes Mi Reserva: Portafolio Protección Vista | Protección',
            id: '2nXeh7XusdoZvgHkHyZ5DN',
            titulocontent:
              'Los aportes de Mi Reserva migran al portafolio Protección Vista',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/persona/inversion/aportes-mi-reserva-portafolio-proteccion-vista',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo:
              'Aportes Mi Reserva: Portafolio Protección Vista | Protección',
            id: '2nXeh7XusdoZvgHkHyZ5DN',
            titulocontent:
              'Los aportes de Mi Reserva migran al portafolio Protección Vista',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/persona/cesantias/futuro-sostenible-conservar-nuestros-recursos',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Futuro sostenible: Conservar nuestros recursos | Protección',
            id: '6SOdfejKD5VT2a7pb4fiTy',
            titulocontent: '¡Estamos comprometidos con un futuro sostenible!',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/persona/pension/futuro-sostenible-conservar-nuestros-recursos',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Futuro sostenible: Conservar nuestros recursos | Protección',
            id: '6SOdfejKD5VT2a7pb4fiTy',
            titulocontent: '¡Estamos comprometidos con un futuro sostenible!',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/persona/inversion/futuro-sostenible-conservar-nuestros-recursos',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo:
              'Futuro sostenible: Conservar nuestros recursos | Protección',
            id: '6SOdfejKD5VT2a7pb4fiTy',
            titulocontent: '¡Estamos comprometidos con un futuro sostenible!',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/ahorro-100-digital-cumple-propositos',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Ahorro 100% digital: Cumple tus propósitos | Protección',
            id: '5GWZyQhTDwnhCHiyDoHH4b',
            titulocontent:
              'Inicia tu ahorro 100% digital y cumple tus propósitos desde HOY',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/ahorra-cesantias-proteccion',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: '¡Ahorra tus Cesantías en Protección! | Protección',
            id: '1Xek9IJ6HyYsbI3pH71uan',
            titulocontent: '¡Ahorra tus Cesantías en Protección!',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/como-comprar-vivienda-descubrir-subsidios',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              '¿Cómo comprar vivienda? Descubre los subsidios | Protección',
            id: '2ZDV5OhobOW7momvTib6SR',
            titulocontent: 'Comprar vivienda y conocer todos los subsidios',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/como-comprar-vivienda-descubrir-subsidios',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '¿Cómo comprar vivienda? Descubre los subsidios | Protección',
            id: '2ZDV5OhobOW7momvTib6SR',
            titulocontent: 'Comprar vivienda y conocer todos los subsidios',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/por-que-es-importante-tu-historial-credito',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Por qué es importante tu historial de crédito | Protección',
            id: 'zMUq9h5oa0vLMpHV8UZPO',
            titulocontent:
              '¿Por qué es importante conocer tu historial de crédito?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/incertidumbre-preocupacion-accion',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Incertidumbre: De la preocupación a la acción | Protección',
            id: '7pcPW4Q3tv1YhGCFQ97NP8',
            titulocontent: 'Pasar de la preocupación a la acción',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/impacta-mis-finanzas-baja-tasas-interes',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Impacta mis finanzas una baja de tasas de interés | Protección',
            id: '7trmAT0XHkH0oFCWpnUCtw',
            titulocontent:
              '¿Impacta mis finanzas que hayan bajado las tasas de interés?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/finanzas-educacion-hijos',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Finanzas para la educación de tus hijos | Protección',
            id: '4XsWBBaoPGooMdj2z8VH1A',
            titulocontent: 'Finanzas para la educación de tus hijos',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/por-que-no-cumplo-mi-objetivo-personal',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '¿Por qué no cumplo mi objetivo personal? | Protección',
            id: '5FpgrPZ37ga7vie2nbq6T4',
            titulocontent: '¿Estoy cumpliendo mi objetivo personal?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/un-viaje-cultura-ahorro',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Un viaje por la cultura del ahorro | Protección',
            id: '5pqMkp3LUtmxcXgzycCzpg',
            titulocontent: 'Un viaje por la cultura del ahorro',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/inteligencia-artificial-medida-companias',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Inteligencia Artificial a la medida de compañías | Protección',
            id: '4CCrkrPS86bAamDlNRsPBY',
            titulocontent: 'Inteligencia Artificial para las compañías',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/inteligencia-artificial-medida-companias',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Inteligencia Artificial a la medida de compañías | Protección',
            id: '4CCrkrPS86bAamDlNRsPBY',
            titulocontent: 'Inteligencia Artificial para las compañías',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/inteligencia-artificial-medida-companias',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Inteligencia Artificial a la medida de compañías | Protección',
            id: '4CCrkrPS86bAamDlNRsPBY',
            titulocontent: 'Inteligencia Artificial para las compañías',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/doble-reto-liderar-tiempos-cambio',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'El doble reto de liderar en tiempos de cambio | Protección',
            id: '6e5edis0NiF2c6l8wTfr3G',
            titulocontent: 'El doble reto de liderar durante tiempos de cambio',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/doble-reto-liderar-tiempos-cambio',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'El doble reto de liderar en tiempos de cambio | Protección',
            id: '6e5edis0NiF2c6l8wTfr3G',
            titulocontent: 'El doble reto de liderar durante tiempos de cambio',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/doble-reto-liderar-tiempos-cambio',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'El doble reto de liderar en tiempos de cambio | Protección',
            id: '6e5edis0NiF2c6l8wTfr3G',
            titulocontent: 'El doble reto de liderar durante tiempos de cambio',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/transformacion-contratacion',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo: 'La transformación de la contratación | Protección',
            id: '2eoZQhAobK4Y4eAyh1n9tf',
            titulocontent: 'La transformación de la contratación',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/transformacion-contratacion',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'La transformación de la contratación | Protección',
            id: '2eoZQhAobK4Y4eAyh1n9tf',
            titulocontent: 'La transformación de la contratación',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/transformacion-contratacion',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'La transformación de la contratación | Protección',
            id: '2eoZQhAobK4Y4eAyh1n9tf',
            titulocontent: 'La transformación de la contratación',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/empresa/cesantias/atraccion-talento-joven-cultura-organizacional',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Atracción talento joven y cultura organizacional | Protección',
            id: '7MW3MO4AFSmm8kzB7W1JmL',
            titulocontent: 'Atracción del talento joven. ¿Cómo hacerlo?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/empresa/ahorro/atraccion-talento-joven-cultura-organizacional',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Atracción talento joven y cultura organizacional | Protección',
            id: '7MW3MO4AFSmm8kzB7W1JmL',
            titulocontent: 'Atracción del talento joven. ¿Cómo hacerlo?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path:
            '/empresa/pension/atraccion-talento-joven-cultura-organizacional',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Atracción talento joven y cultura organizacional | Protección',
            id: '7MW3MO4AFSmm8kzB7W1JmL',
            titulocontent: 'Atracción del talento joven. ¿Cómo hacerlo?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/que-talento-atraer-hoy-impactar-manana',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Qué talento atraer hoy para impactar el mañana | Protección',
            id: '6UDMDTPqYwsAk67KYITyz9',
            titulocontent: '¿Qué talento requiero atraer hoy?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/que-talento-atraer-hoy-impactar-manana',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Qué talento atraer hoy para impactar el mañana | Protección',
            id: '6UDMDTPqYwsAk67KYITyz9',
            titulocontent: '¿Qué talento requiero atraer hoy?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/que-talento-atraer-hoy-impactar-manana',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Qué talento atraer hoy para impactar el mañana | Protección',
            id: '6UDMDTPqYwsAk67KYITyz9',
            titulocontent: '¿Qué talento requiero atraer hoy?',
            type: 'novedad'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/seguro-previsional',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Seguro Previsional | Protección',
            id: '78NN1JQ8efvELXi9kPnRyV',
            titulocontent: 'Seguro previsional 2021',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/rentabilidades-pensiones-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Rentabilidades Pensiones Obligatorias y Cesantías | Protección',
            id: '5YtujiBzCfJFMIO1Nt0aTF',
            titulocontent: 'Rentabilidades Pensiones Obligatorias y Cesantías',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/ahorro-camino-para-casa-propia',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Ahorro: Camino para tener tu propia casa | Protección',
            id: '3eOEOUfMKO3TK8spMTqO8Y',
            titulocontent: '¿Dónde ahorrar para comprar casa? ',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/compra-casa-con-credito-hipotecario',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '¿Quieres comprar casa?: Crédito Hipotecario | Protección',
            id: '1sMIG4eLUjuRqwFKLISnLM',
            titulocontent: '¿Qué tanto sabes del crédito hipotecario? ',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/glosario',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Glosario | Protección',
            id: '24aOyom5BmwJVQmmHsV7jY',
            titulocontent: 'Glosario',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/ahorra-planea-cumple-tu-sueno-viajar',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Ahorra, planea y cumple tu sueño de viajar | Protección',
            id: '70FK1ekZcOS5z46NIkjPpS',
            titulocontent: 'Ahorra, planea y cumple tu sueño de viajar ',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/ebook-como-alcanzar-libertad-financiera',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Ebook ¿Cómo alcanzar la libertad financiera? | Protección',
            id: '6UDFAfn7QG9SY2fG3FfLTy',
            titulocontent: '¿Cómo alcanzar la libertad financiera? | Ebook',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/tips-ahorro-sea-habito',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Tips para que el ahorro sea un hábito | Protección',
            id: '5DdqkKDrH7xxCXvC6Qt6S0',
            titulocontent: 'Tips para que el ahorro sea un hábito',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/leasing-gran-aliado-hora-invertir',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'El Leasing: un gran aliado a la hora de invertir | Protección',
            id: '1fURpxJFNycxn3QpKSk0K1',
            titulocontent: 'El Leasing: un gran aliado a la hora de invertir',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/en-que-invierten-fondos-pensiones',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              '¿En qué invierten los fondos de pensiones?  | Protección',
            id: '4PspPHR8FZcht40EC2SWgs',
            titulocontent: '¿En qué invierten los fondos de pensiones?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/habitos-positivos-bienestar-financiero',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Hábitos positivos para tu bienestar financiero | Protección',
            id: '4JQTpKEMLoX8VTQZ17y7eW',
            titulocontent:
              'Hábitos positivos para alcanzar tu bienestar financiero',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/consejos-emprender-con-poco-presupuesto',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Consejos para emprender con poco presupuesto | Protección',
            id: '6HNxfSyYJXuu2FYwFtQNTu',
            titulocontent: 'Emprende con poco presupuesto ',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/aprende-primeros-pasos-invertir',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Aprende los primeros pasos para invertir | Protección',
            id: '5qNFcLThzcJKptPNelBiuu',
            titulocontent: 'Los primeros pasos para invertir',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/preparate-para-vivir-mas',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Prepárate para vivir 100 años | Protección',
            id: '46fSZTYgR4MlkfoDpFIlXy',
            titulocontent: 'Prepárate para vivir cien años',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/preparate-para-vivir-mas',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Prepárate para vivir 100 años | Protección',
            id: '46fSZTYgR4MlkfoDpFIlXy',
            titulocontent: 'Prepárate para vivir cien años',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path:
            '/persona/ahorro/como-tener-bienestar-financiero-cuando-seas-mayor',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Cómo tener bienestar financiero cuando seas mayor | Protección',
            id: '4aZXUtJHLaArRb5sStk7CQ',
            titulocontent:
              'Tener bienestar financiero cuando seas mayor sí es posible',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/inversion/soluciones-financiacion',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: 'Soluciones de Financiación | Protección',
            id: 'NJmXVYpCl3BgdNPtxMDjJ',
            titulocontent:
              'Soluciones de Financiación, seguros y administración de riesgos',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/inversion/soluciones-renta-periodica',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: 'Soluciones con Renta Periódica | Protección',
            id: '4s5yd7k08DKqZweaJNks5s',
            titulocontent: 'Soluciones de Inversión con Renta Periódica',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/inversion/soluciones-inversion',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: 'Soluciones de Inversión | Protección',
            id: '4g0A5ej8RDp1xNJhEBio6O',
            titulocontent:
              'Protección te ofrece más de 30 portafolios de inversión',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/inversion/te-brindamos-acompanamiento-tributario',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo:
              'Te brindamos acompañamiento tributario | Protección',
            id: '4wOaRX99msh7Jxn1VFNAT3',
            titulocontent: 'En Protección brindamos acompañamiento tributario',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/como-viajar-poco-presupuesto',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: '¿Cómo viajar con poco presupuesto? | Protección',
            id: '6yy1VJYlldRI13KR8KSqpv',
            titulocontent: '¿Cómo viajar con poco presupuesto?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/se-acerca-momento-declarar-renta-preparate',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Se acerca el momento de declarar renta: Prepárate | Protección',
            id: '4GfC4wrPCWr2O5vP2aprEi',
            titulocontent:
              'Se acerca el momento de declarar renta. ¡Prepárate!',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/tus-metas-son-alcanzables-cuando-ahorras',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Tus metas son alcanzables cuando ahorras | Protección',
            id: '7AkdstcVtTUrFqp8R9BuvQ',
            titulocontent: 'Tus metas son alcanzables cuando ahorras',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/como-remodelar-mi-casa-poco-presupuesto',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '¿Cómo remodelar mi casa con poco presupuesto? | Protección',
            id: '6ooUlbrdg7oht0Cn3z79KS',
            titulocontent: '¿Cómo remodelar mi casa con poco presupuesto? ',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/toma-control-tus-finanzas',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Toma el Control de Tus Finanzas | Protección',
            id: '7DddhCSzcFvE86gQQJC7Wd',
            titulocontent: 'Toma El Control de tus finanzas con Protección',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/toma-control-tus-finanzas',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Toma el Control de Tus Finanzas | Protección',
            id: '7DddhCSzcFvE86gQQJC7Wd',
            titulocontent: 'Toma El Control de tus finanzas con Protección',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/vence-monstruos-financieros',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Vence los monstruos financieros | Protección',
            id: '1R5R7VuLwhdjdBO5WnJWVQ',
            titulocontent: 'Vence los monstruos financieros',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path:
            '/persona/pension/pension/seguimiento-a-mi-solicitud-de-pension',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Seguimiento a mi Solicitud de Pensión | Protección',
            id: '32bDYNpikiSAit0RUjj9HF',
            titulocontent: 'Seguimiento a mi Solicitud de Pensión',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path:
            '/empresa/pension/pension/seguimiento-a-mi-solicitud-de-pension',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Seguimiento a mi Solicitud de Pensión | Protección',
            id: '32bDYNpikiSAit0RUjj9HF',
            titulocontent: 'Seguimiento a mi Solicitud de Pensión',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/pension/pasos-solicitud-pension',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Conoce los pasos para tu solicitud de Pensión',
            id: '6ezWcTjJB8gin1UV3J4kPS',
            titulocontent: 'Conoce los pasos para tu Solicitud de Pensión',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/pension/pasos-solicitud-pension',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Conoce los pasos para tu solicitud de Pensión',
            id: '6ezWcTjJB8gin1UV3J4kPS',
            titulocontent: 'Conoce los pasos para tu Solicitud de Pensión',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/devolucion-saldos-empresas',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Devolución de Saldos Empresas | Protección',
            id: '274TqYNBn4PgutkUg968n8',
            titulocontent: 'Devolución de saldos Empresas',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/pago-incapacidades-empresas',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Pago de Incapacidades Empresas | Protección',
            id: '6whrtZ8WI8PUT5lWRzI8uV',
            titulocontent: 'Pago de incapacidades Empresas',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/beneficios-clave-empresarial',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Conoce los Beneficios de la Clave Empresarial | Protección',
            id: '3qOoOrPpgw8IFMb7t3mjwk',
            titulocontent: 'Beneficios de la Clave Empresarial',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/pago-incapacidades-etapas-proceso',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Pago de Incapacidades: Etapas del Proceso | Protección',
            id: '7hU2LbmpDoQVz74rbtUL6n',
            titulocontent: 'Pago de incapacidades',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/serie-web-la-nueva-oficina',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Serie Web: La Nueva Oficina | Protección',
            id: 'g0Wl3E0BP0UOdF1I6pMtc',
            titulocontent: 'La Nueva Oficina – Serie web',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/serie-web-la-nueva-oficina',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Serie Web: La Nueva Oficina | Protección',
            id: 'g0Wl3E0BP0UOdF1I6pMtc',
            titulocontent: 'La Nueva Oficina – Serie web',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/sistema-peticion-quejas-reclamos-servicios',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Sistema de Petición, Quejas, Reclamos y Servicios | Protección',
            id: '6cKhQxHrBdco3wciIztIz9',
            titulocontent: '¿Qué son las PQRS?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/entrega-de-documentos-tips',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Entrega de Documentos: Tips | Protección',
            id: '27jKfw5p1nzx95mD12DcSy',
            titulocontent: 'Tips para la entrega de documentos',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/conoce-soluciones-online',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Soluciones Online: Transacciones en la Web | Protección',
            id: '56OlD7Jh98TPeogwQ1i0ye',
            titulocontent: 'Conoce todas las soluciones online',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/mejora-tus-conocimientos-financieros',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Mejora tus conocimientos financieros | Protección',
            id: 'azD0rrkshn8kCSUo309X8',
            titulocontent:
              'Mejora tus conocimientos financieros en tu tiempo libre',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/consejos-cumplir-metas-financieras',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Consejos para cumplir tus metas financieras | Protección',
            id: '4cwYuP8B9WXAgmsPq8lSfk',
            titulocontent: 'Consejos para cumplir tus metas financieras',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/como-retirar-mis-cesantias-online',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: '¿Cómo retirar mis cesantías online? | Protección',
            id: '1eX5yKcOdoEmhu7B26aOd1',
            titulocontent:
              '¿Cómo retirar mis Cesantías online en Proteccion.com?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/solicitud-pension-invalidez',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Solicitud de Pensión por Invalidez | Protección',
            id: '67GnWrgVYCTynueuoRclBr',
            titulocontent:
              'Cómo realizar la solicitud de pensión por invalidez',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/4-verdades-sobre-pensiones',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: '4 verdades sobre las pensiones | Protección',
            id: '3wOlXCp4IrZ3EjsokcUWqq',
            titulocontent: '4 verdades que nadie te dijo sobre las pensiones',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/4-verdades-sobre-pensiones',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: '4 verdades sobre las pensiones | Protección',
            id: '3wOlXCp4IrZ3EjsokcUWqq',
            titulocontent: '4 verdades que nadie te dijo sobre las pensiones',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/seguimiento-solicitud-pension',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Seguimiento a tu Solicitud de Pensión | Protección',
            id: '51W6FiRoWEoOVFliCBRnH3',
            titulocontent:
              '5 tips para el seguimiento a tu solicitud de pensión ',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/que-exige-ley-pension-colaboradores',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Qué Exige la Ley para la Pensión de tus Colaboradores | Protección',
            id: '5fUWhycwYIkC8XXsojs9fH',
            titulocontent:
              'Qué exige la ley a tus colaboradores para pensionarse',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/pagar-aportes-pension-colaboradores',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Pagar Aportes de Pensión de mis Colaboradores | Protección',
            id: '3LoihPxg5k4uR4y6wnv0Aa',
            titulocontent:
              '¿Cómo pagar los aportes a pensiones de mis colaboradores?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/actualizacion-datos-contacto',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Actualización de Datos de Contacto | Protección',
            id: '1DOaEMoNwAiypu1DvV5nDR',
            titulocontent: '¿Cómo puedo actualizar mis datos?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/certifacil-pensiones-obligatorias',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Certifácil: Pensiones Obligatorias | Protección',
            id: '1BDNClbYI7zHcSgqlEcp0c',
            titulocontent:
              '¿Sabes qué es Certifácil? ¡Descarga online tus certificados!',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/certifacil-pensiones-obligatorias',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Certifácil: Pensiones Obligatorias | Protección',
            id: '1BDNClbYI7zHcSgqlEcp0c',
            titulocontent:
              '¿Sabes qué es Certifácil? ¡Descarga online tus certificados!',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/estas-cayendo-gastos-hormiga',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: '¿Estás cayendo en gastos hormiga? | Protección',
            id: '4hjOGxfrIIxaDN5DW4yuaL',
            titulocontent:
              '¿Desaparece tu dinero? Tal vez estás cayendo en gastos hormiga',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/aprende-educacion-financiera',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Aprende educación financiera | Protección',
            id: '1PDSHKn8rzfbxBNq8j5zii',
            titulocontent: 'Aprende educación financiera',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/usa-intereses-tu-favor-cuida-bolsillo',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Usa los intereses a tu favor: Cuida tu bolsillo | Protección',
            id: 'EbGYiuWtXOHXWNaPBFCVi',
            titulocontent:
              'Aprende a cuidar tu bolsillo usando los intereses a tu favor',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/ahorrar-largo-plazo-retiro-tranquilo',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Ahorrar a largo plazo: Clave para retiro tranquilo | Protección',
            id: 'vG09gpsysYwxpiQ6CId95',
            titulocontent:
              'Ahorrar a largo plazo: la clave para un retiro tranquilo',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/proteccion-activo-grandes-expertos-vivir',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Protección Activo: una oferta diseñada para ti | Protección',
            id: '35SNsKIJmcsnYObQ3Y9ZJ4',
            titulocontent:
              '¡Conoce Protección Activo! Una oferta diseñada para ti',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/proteccion-activo-grandes-expertos-vivir',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Protección Activo: una oferta diseñada para ti | Protección',
            id: '35SNsKIJmcsnYObQ3Y9ZJ4',
            titulocontent:
              '¡Conoce Protección Activo! Una oferta diseñada para ti',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/solicitud-pension-sobrevivencia',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Solicitud de Pensión por Sobrevivencia | Protección',
            id: '5OsqzXfCEUjNyu23oTpLCM',
            titulocontent:
              'Cómo realizar la solicitud de pensión por sobrevivencia',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/solicitud-pension-vejez',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Solicitud de Pensión por Vejez | Protección',
            id: 'Z7Qsj1VZ8qQ2ecSLVUKHK',
            titulocontent: 'Cómo realizar la solicitud de pensión por vejez',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/solicitud-pension-vejez',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Solicitud de Pensión por Vejez | Protección',
            id: 'Z7Qsj1VZ8qQ2ecSLVUKHK',
            titulocontent: 'Cómo realizar la solicitud de pensión por vejez',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/que-es-reconstruccion-historia-laboral',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              '¿Qué es la Reconstrucción de Historia Laboral? | Protección',
            id: '1yunlOOsCwB8nW87cu6jwu',
            titulocontent: '¿Qué es la Reconstrucción de Historia Laboral?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/que-es-reconstruccion-historia-laboral',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              '¿Qué es la Reconstrucción de Historia Laboral? | Protección',
            id: '1yunlOOsCwB8nW87cu6jwu',
            titulocontent: '¿Qué es la Reconstrucción de Historia Laboral?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/convenios-internacionales',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Convenios Internacionales | Protección',
            id: '6D21Renx19mvVfljqol1Vn',
            titulocontent:
              'Conoce nuestros Convenios Internacionales - Pensión Obligatoria',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/libranzas-alternativa-pagar-mesada',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Libranzas: Alternativa para Pagar con tu Mesada | Protección',
            id: '2cCWxATIzP6p0g8G4bVdxk',
            titulocontent:
              '¿Sabes qué son las libranzas? ¡Te explicamos qué son!',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/simulador-con-cuanto-voy-pensionarme',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Simulador: ¿Con cuánto voy a pensionarme? | Protección',
            id: '5j3NEwt9NqMIraITQKCoFz',
            titulocontent: 'Simulador: ¿Con cuánto me voy a pensionar?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/como-consultar-historia-laboral',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Consultar mi Historia Laboral | Protección',
            id: '10Qc5OlqgVPvQJA2E67Lpa',
            titulocontent: '¿Cómo consultar mi Historia Laboral?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/colilla-pago-detalles-mesada-pensional',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Conoce tu Colilla de Pago: Detalles de tu mesada | Protección',
            id: '6QLvr6MvgWNsBNT1D9JKQG',
            titulocontent: 'Conoce la colilla de pago de tu mesada pensional',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/gestiona-pension-programa-ingresos',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Gestiona tu pensión: Programa tus ingresos | Protección',
            id: 'TxYCPqsypUUjJkEpoCCpN',
            titulocontent: '¿Cómo gestionar mi pensión?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/regimenes-pensionales',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Tipos de Regímenes Pensionales | Protección',
            id: '7c1KRi2rGy3793YnuHPep1',
            titulocontent:
              'Tipos de Regímenes Pensionales - ¿Cuál es la diferencia?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/regimenes-pensionales',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: 'Tipos de Regímenes Pensionales | Protección',
            id: '7c1KRi2rGy3793YnuHPep1',
            titulocontent:
              'Tipos de Regímenes Pensionales - ¿Cuál es la diferencia?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/pensiones-trabajadores-independientes',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Pensiones para Trabajadores Independientes | Protección',
            id: '7Mj3hibgVhazVz7OAzzznj',
            titulocontent:
              '¿Eres trabajador independiente? ¡Conoce todo sobre pensiones!',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/afiliacion-digital-pension-obligatoria',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Afiliación 100% Digital | Protección',
            id: '2KGDTXOz5HAsxrnsqW6IEa',
            titulocontent: 'Afiliación a Pensión Obligatoria 100% Digital',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/pension/preguntas-frecuentes-pensiones-obligatorias',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo:
              'Preguntas Frecuentes de Pensiones Obligatorias | Protección',
            id: '3PqQEOqYg3sLB1BileZjy1',
            titulocontent: 'Preguntas frecuentes sobre Pensiones Obligatorias',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/pension/preguntas-frecuentes-pensiones-obligatorias',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo:
              'Preguntas Frecuentes de Pensiones Obligatorias | Protección',
            id: '3PqQEOqYg3sLB1BileZjy1',
            titulocontent: 'Preguntas frecuentes sobre Pensiones Obligatorias',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/inversiones-mi-bienestar-mi-familia',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Inversiones para mi bienestar y el de mi familia | Protección',
            id: '6ifCofR3KZHQlWnmP3Z6Z7',
            titulocontent: 'Inversiones para mi bienestar y el de mi familia',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/como-funcionan-seguros-de-vida',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: '¿Cómo funcionan los seguros de vida?  | Protección',
            id: '21zwhQEcmPPAI1TKs1O7LM',
            titulocontent: '¿Cómo funcionan los seguros de vida? ',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/por-que-planear-nuestras-finanzas-futuro',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '¿Por qué planear nuestras finanzas a futuro? | Protección',
            id: '2Et9Jbj08mXoygpuFBOAEV',
            titulocontent:
              '¿Por qué nos cuesta planear nuestras finanzas de cara al futuro?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/paga-tiempo-creditos-para-no-afectar-bolsillo',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Paga a tiempo tus créditos para no afectar tu bolsillo | Protección',
            id: '7dkwuEnkKgrSGTrP3PbMba',
            titulocontent:
              'Paga a tiempo tus créditos para no afectar tu bolsillo',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/aprende-crear-presupuesto-personal',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Aprende a crear un presupuesto personal | Protección',
            id: '2GnjFj0VYh6Hw5hhTflj7e',
            titulocontent: '¿Cómo lograr pagar todo cada mes?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/si-perdiste-empleo-organiza-finanzas',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Si perdiste tu empleo, organiza tus finanzas | Protección',
            id: '6Pz4DhQQw4gAUhKte2VLJy',
            titulocontent:
              'Si perdiste el empleo, comienza por organizar tus finanzas',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/como-construir-presupuesto-dia-a-dia',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Cómo construir un presupuesto del día a día | Protección',
            id: '2ibn07Y9MsDaB2bX0aotiq',
            titulocontent: 'Construye un presupuesto del día a día',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/antes-retirar-cesantias-planea-inversion',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Antes de retirar cesantías, planea tu inversión | Protección',
            id: '4MwEsntwDNytAsQvuusAom',
            titulocontent:
              'Antes de retirar tus cesantías, planea bien su inversión',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/consumo-responsable-ayuda-planeta',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Consumo responsable: Ayuda al planeta | Protección',
            id: '64LkzyitB9JszYLetz38Hs',
            titulocontent: 'Reduce tus gastos y ayuda al planeta',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/3-claves-tener-tranquilidad-financiera',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '3 claves para tener tranquilidad financiera | Protección',
            id: '48Cjhxkisth8OQaSKjZxZV',
            titulocontent: 'Tres claves para tener tranquilidad financiera',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/aportes-voluntarios-construir-pension',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Aportes voluntarios: Construye tu pensión | Protección',
            id: 'EQWbsm3oIZTQiXOR85xFv',
            titulocontent:
              'Aportes voluntarios, una manera de construir tu pensión',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/cashback-oportunidad-ahorrar',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Cashback, una oportunidad de ahorrar | Protección',
            id: '7jVgAuMQJT5FatNJh2GvIM',
            titulocontent: 'Cashback, una oportunidad de ahorrar',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/has-pensado-invertir-tipos-inversion',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '¿Has pensado en invertir?: Tipos de inversión | Protección',
            id: '6v5Wl1mTZSWSi77JSowrEM',
            titulocontent:
              '¿Has pensado en invertir? Conoce algunos tipos de inversión',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/ahorrar-mientras-gastas-es-posible',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '¿Ahorrar mientras gastas? ¡Sí es posible! | Protección',
            id: '73L0Ek9cF5nLXBbZeRXFYv',
            titulocontent: '¿Ahorrar mientras gastas? ¡Sí es posible!',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/consulta-saldo-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: 'Consulta el saldo de tus cesantías | Protección',
            id: '6Eiy6lvHkzwgN0NSmqmZ3B',
            titulocontent: '¿Cómo consulto el saldo de mis Cesantías?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/canales-retirar-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: 'Canales para retirar tus cesantías | Protección',
            id: '1rcXxNLuQRh8ypUN0imb30',
            titulocontent:
              '¿Cuáles son los canales por los que puedo retirar mis Cesantías?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/consejos-obtener-beneficios-tributarios',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Consejos para obtener beneficios tributarios | Protección',
            id: '2el4sL7ZP9VGxRibLSYmKu',
            titulocontent: 'Consejos para obtener beneficios tributarios',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/durante-pandemia-cuida-tus-ahorros',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Durante la pandemia cuida tus ahorros | Protección',
            id: '4218R6wZczlnVOkAAtqmIS',
            titulocontent: 'Durante la pandemia cuida tus ahorros',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/realiza-curso-gratuito-finanzas-personales',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Realiza el curso gratuito: Finanzas Personales | Protección',
            id: '3AD1AvKVKtBHuXqXTIK4K4',
            titulocontent: '¡Realiza el curso gratuito: Finanzas Personales!',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/modelos-compensacion',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Modelos de Compensación | Protección',
            id: '2AJslthkG3eNLesKBAsKxb',
            titulocontent: 'Modelos de compensación',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/motiva-tus-colaboradores-premia-gestion',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Motiva a tus colaboradores y premia su gestión | Protección',
            id: '2unJXHCdgglQd1El51r7HV',
            titulocontent: 'Motiva a tus colaboradores, premia sus gestiones',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path:
            '/empresa/pension/empresas/pension/gestiona-deudas-e-inconsistencias',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: null,
            id: '5gB7I8narHCkLbRzYwfG6K',
            titulocontent: 'Soluciona y gestiona deudas e inconsistencias',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/gestiona-retiro-cesantias-colaboradores',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Gestiona retiro de cesantías de colaboradores | Protección',
            id: 'MiIKyQViyofCgn4WkWLvE',
            titulocontent: 'Gestiona los retiros de tus empleados',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/es-momento-reinventarse',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Es momento de reinventarse | Protección',
            id: '61abU4E9rPAyg7OUBkNj5F',
            titulocontent: 'Es momento de reinventarse',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/actualiza-usuarios-clave-empresarial',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Actualiza los usuarios de tu clave empresarial | Protección',
            id: '7oloAAaenIgKL6cRAlQ4yq',
            titulocontent: 'Actualiza los usuarios de tu clave empresarial',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/diagnostica-estado-negocio',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Diagnostica el estado de tu negocio | Protección',
            id: 'SsqMmohl0Lh7ZyELRehth',
            titulocontent: 'Diagnostica el estado de tu negocio',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/elimina-palabra-excusa-momento-ahorrar',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Elimina la palabra excusa: Es momento de ahorrar | Protección',
            id: '6NpEvFwMJiNx3D3eACWreL',
            titulocontent: 'Elimina la palabra excusa. ¡Es momento de ahorrar!',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/perfil-financiero-relacion-dinero',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Perfil financiero: Tu relación con el dinero | Protección',
            id: '2N4ZpHyuYVhjXJG9GUif4f',
            titulocontent: 'Rasgos que definen tu relación con el dinero',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/finanzas-personales-tiempos-crisis',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Finanzas personales en tiempos de crisis | Protección',
            id: 'tSOcDidhDKtOsZGKkSRMg',
            titulocontent: 'Finanzas personales en tiempos de crisis',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path:
            '/empresa/cesantias/clave-empresarial-llave-soluciones-digitales',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Clave Empresarial: Llave en soluciones digitales | Protección',
            id: '3Y1CnCbyvoIGBtWorEjZCw',
            titulocontent: 'Clave Empresarial: la llave de acceso digital',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/como-identificar-situacion-financiera-actual',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Cómo identificar tu situación financiera actual | Protección',
            id: '4EyBqmnsroiflIjC61F64x',
            titulocontent: 'Cómo identificar tu situación financiera actual',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/planeacion-fortalece-estabilidad-financiera',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Planeación: Fortalece tu estabilidad financiera | Protección',
            id: '17T6PgoJNtGr4dbleOo9p0',
            titulocontent: '¡Fortalece tu estabilidad financiera!',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/que-son-deudas-heroinas-villanas',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Qué son las deudas para ti: Heroínas o villanas | Protección',
            id: '5E3DqDPQ2QNg5IYgXJKQHU',
            titulocontent: 'Superheroínas o villanas. ¿Qué son las deudas?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/libre-soy-me-alcanza-quincena',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Libre soy: Me alcanza la quincena | Protección',
            id: '5zWdjadtQHGRoGX4AtfOg4',
            titulocontent: 'Libre soy, ¡me alcanza la quincena!',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/toma-control-finanzas-21-dias',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '¡Toma el control de tus finanzas en 21 días! | Protección',
            id: '1jtLjl6Z3r8aeiEpdQC5wE',
            titulocontent: '¡Toma el control de tus finanzas en 21 días!',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/como-esta-tu-salud-financiera',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: '¿Cómo está tu salud financiera? | Protección',
            id: '7pNuC0N7n4dcWs1G2Ien02',
            titulocontent: '¿Cómo está tu salud financiera?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/retiros-pension-voluntaria-colaboradores',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Retiros de Pensión Voluntaria: Colaboradores  | Protección',
            id: 'WIK9JIjSo0AKBd1f2jHT4',
            titulocontent: '¿Cómo realizar retiros de Pensión Voluntaria?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/como-atender-reto-financiero-actual',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '¿Cómo atender el reto financiero actual? | Protección',
            id: '6BUCawJvfstlsh1GNFOPZl',
            titulocontent: '¿Cómo atender el reto financiero actual?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/como-atender-reto-financiero-actual',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              '¿Cómo atender el reto financiero actual? | Protección',
            id: '6BUCawJvfstlsh1GNFOPZl',
            titulocontent: '¿Cómo atender el reto financiero actual?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/liquida-aportes-pension-voluntaria-empleados',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Liquida aportes en Pensión Voluntaria Empleados | Protección',
            id: 'BT6Tya9KnH9DrVgEyGHDw',
            titulocontent: 'Liquida y Paga Aportes en Pensión Voluntaria',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/4-apps-tener-control-finanzas',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              '4 apps para tener el control de tus finanzas | Protección',
            id: '535cTVjJlMisArXFWxMz0l',
            titulocontent: '4 Apps que ayudan con el control de tus finanzas',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/tips-finanzas-pymes',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Tips de finanzas para Pymes | Protección',
            id: '3kkyjTeW98neCFIDyjzCx5',
            titulocontent: 'Tips de finanzas para Pymes',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/consejos-recuperacion-economica-empresa',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Consejos: Recuperación económica de tu empresa | Protección',
            id: '5Vhjt7hBRmKXrZe1QRwFlA',
            titulocontent: 'Consejos para la recuperación de tu empresa',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/como-retirar-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: '¿Cómo retirar tus Cesantías? | Protección',
            id: '24ZCw88Mt35VoQTtBW13pj',
            titulocontent: '¿Cómo retirar tus Cesantías?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/como-retirar-cesantias',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo: '¿Cómo retirar tus Cesantías? | Protección',
            id: '24ZCw88Mt35VoQTtBW13pj',
            titulocontent: '¿Cómo retirar tus Cesantías?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/retiro-parcial-disminucion-ingresos',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Retiro parcial por disminución de ingresos | Protección',
            id: '2LTgDjm1j1nHnUz3fNTj2d',
            titulocontent:
              'Retiro parcial de Cesantías por Disminución de Ingresos',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/retiro-en-linea-cesantias-educacion',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Retira en línea tus cesantías para educación | Protección',
            id: '2fvYudDKy1jmtbBZS5Cywo',
            titulocontent: 'Retira en línea tus Cesantías para educación',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/empresa/cesantias/gestiona-retiro-cesantias-empleados',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Gestiona el retiro de Cesantías de tus empleados | Protección',
            id: '23wGFDP6zN4KUqUg39HTsH',
            titulocontent: 'Gestiona el retiro de Cesantías de tus empleados',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/evita-errores-cesantias-educacion',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              '¡Evita estos errores! Cesantías para educación | Protección',
            id: 'KzKMI2ncK81ThfXtLx2qJ',
            titulocontent: '¡Evita estos errores! Cesantías para educación',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/tips-invertir-cesantias-educacion',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Tips para invertir tus Cesantías en educación | Protección',
            id: 'xLPj9BcW9h0dBe2PAE2st',
            titulocontent: 'Tips para invertir tus Cesantías en educación',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/errores-evitar-cesantias-vivienda',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Errores a evitar con tus Cesantías para vivienda | Protección',
            id: '1kio5mE1HZTJgBKSl89vM4',
            titulocontent: 'Evita estos errores: Cesantías para vivienda',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/como-usar-cesantias-vivienda',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              '¿Cómo usar tus cesantías para vivienda? | Protección',
            id: '2Ft5SGyqMyQUeG4v9myhFN',
            titulocontent: '¿Cómo usar tus Cesantías para vivienda?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/como-ahorrar-cesantias-vivienda',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              '¿Cómo ahorrar tus Cesantías para vivienda? | Protección',
            id: '6skla3FWYh4i9LophEbi8G',
            titulocontent: '¿Cómo ahorrar tus Cesantías para vivienda?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/donde-puedo-retirar-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: '¿Dónde puedo retirar mis Cesantías? | Protección',
            id: '34Yl1Lbb9kwskG0a3VgjI3',
            titulocontent: '¿Dónde puedo retirar mis Cesantías?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/como-retirar-cesantias-independientes',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              '¿Cómo retirar tus Cesantías?: Independientes | Protección',
            id: '58AtRI5ZqBJGlcbCIPRjaM',
            titulocontent:
              '¿Cómo retirar tus Cesantías?: Afiliado Independiente',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/extractos-cesantias-que-son-como-leerlos',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Extractos de Cesantías ¿Qué son y cómo leerlos? | Protección',
            id: 'UtvpGfgcpx7MxtxehglAd',
            titulocontent: 'Extractos de Cesantías, ¿qué son y cómo leerlos?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path: '/persona/cesantias/como-obtener-extractos-cesantias',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              '¿Cómo obtener tus extractos de Cesantías? | Protección',
            id: '7dZqpgEfBvYgEPLkmCwYRR',
            titulocontent: '¿Cómo obtener tus extractos de Cesantías?',
            type: 'educativo'
          }
        }
      },
      {
        node: {
          path:
            '/persona/cesantias/cesantias/pago-de-cesantias-a-empleados-del-hogar',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo:
              'Paga las de Cesantías de los empleados del hogar aquí',
            id: 'qoAqkbabLqNr3eOcstzKk',
            titulocontent:
              'Paga las Cesantías de los empleados del hogar, aquí',
            type: 'campaña'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/mi-reserva/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Mi Reserva | Protección',
            id: '12YCBJYldaKys0PKYZ1prN',
            titulocontent: 'Mi Reserva',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/proteccion-hijos/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Protección Hijos | Protección',
            id: '4lvr3LTRUqP7Oq8jYzPhOa',
            titulocontent: 'Protección Hijos',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/proteccion-hijos-empresas/',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Protección Hijos para Empresas | Protección',
            id: '3HWkFhfynrhBSlziE1lw3I',
            titulocontent: 'Protección Hijos',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/mas-proteccion/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: '+Protección | Protección',
            id: '2Bn0l3tKFkLtewkIZwWh1B',
            titulocontent: '+Protección',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/mas-proteccion-colaboradores/',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: '+ Protección para tus colaboradores | Protección',
            id: '25pH6XZt1eviTBQMIh122w',
            titulocontent: '+Protección para tus colaboradores',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/siempre-activo/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Siempre Activo | Protección',
            id: '2O1HpSHyL6B9iICv4muS9A',
            titulocontent: 'Siempre Activo',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/siempre-activo/',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Siempre Activo | Protección',
            id: '2O1HpSHyL6B9iICv4muS9A',
            titulocontent: 'Siempre Activo',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/ahorro-100-digital/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Ahorro 100% Digital | Protección',
            id: '6qfrokQ9v5ZcznecbB6zJG',
            titulocontent: 'Ahorro 100% Digital',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/planes-institucionales-empresas/',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Planes Institucionales para Empresas | Protección',
            id: '4fSKTCZx4rgyejIcFWZjVv',
            titulocontent: 'Planes Institucionales para Empresas',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/tu-futuro-desde-hoy/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Tu Futuro desde HOY | Protección',
            id: 'diAO4gGvAPHX6YiphzAH8',
            titulocontent: 'Tu Futuro desde HOY',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/proteccion-comfama-construccion-futuro/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Protección y Comfama: Construcción de tu futuro | Protección',
            id: '2qWf2sZElCYJacvEUQ4Wko',
            titulocontent: 'Alianza Comfama',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/conoce-plan-vive-sura-asegurate-hoy/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Conoce el Plan Vive Sura y asegúrate Hoy | Protección',
            id: '7pbqYWDXBJ1v4Zsxfr49UL',
            titulocontent: '¡Conoce el Plan Vive Sura y asegúrate HOY!',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/conoce-plan-vive-sura-asegurate-hoy/',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Conoce el Plan Vive Sura y asegúrate Hoy | Protección',
            id: '7pbqYWDXBJ1v4Zsxfr49UL',
            titulocontent: '¡Conoce el Plan Vive Sura y asegúrate HOY!',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path:
            '/persona/ahorro/ahorro/productos-complementarios-credito-vivienda/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Crédito para Vivienda Bancolombia | Protección',
            id: '4dSE5dBqXkj1OguNJk7tcp',
            titulocontent: 'Crédito para vivienda Bancolombia',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path:
            '/empresa/ahorro/ahorro/productos-complementarios-credito-vivienda/',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Crédito para Vivienda Bancolombia | Protección',
            id: '4dSE5dBqXkj1OguNJk7tcp',
            titulocontent: 'Crédito para vivienda Bancolombia',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/leasing-habitacional-bancolombia/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Leasing Habitacional Bancolombia | Protección',
            id: '1rn3OY1LM2bylydo88XeKj',
            titulocontent: 'Leasing habitacional Bancolombia',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/leasing-habitacional-bancolombia/',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Leasing Habitacional Bancolombia | Protección',
            id: '1rn3OY1LM2bylydo88XeKj',
            titulocontent: 'Leasing habitacional Bancolombia',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/credito-consumo-pignoracion/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: 'Crédito de Consumo con Pignoración | Protección',
            id: 'LOKbtCdPsOkXRPXCGbjHE',
            titulocontent:
              'Crédito de Consumo con Pignoración de Pensiones Voluntarias',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/credito-consumo-pignoracion/',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: 'Crédito de Consumo con Pignoración | Protección',
            id: 'LOKbtCdPsOkXRPXCGbjHE',
            titulocontent:
              'Crédito de Consumo con Pignoración de Pensiones Voluntarias',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/empresa/ahorro/plan-mas-protegido-seguro-100-digital/',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              'Plan Más Protegido: Seguro 100% Digital | Protección',
            id: 'GmjWvTrfsSr09iMq91BoC',
            titulocontent: 'Plan Más Protegido',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/persona/ahorro/plan-mas-protegido-seguro-100-digital/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo:
              'Plan Más Protegido: Seguro 100% Digital | Protección',
            id: 'GmjWvTrfsSr09iMq91BoC',
            titulocontent: 'Plan Más Protegido',
            type: 'soluciones'
          }
        }
      },
      {
        node: {
          path: '/persona/inversion/actualidad-inversiones/',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: null,
            id: '6kLqtSng0Jz7Wt8LegB9mB',
            titulocontent: 'Actualidad de Inversiones',
            type: 'actualidad'
          }
        }
      },
      {
        node: {
          path: '/persona/inversion/que-dice-experto/',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: null,
            id: '2iSc262lfCDuc5XCafkl7K',
            titulocontent: 'Qué dice el experto',
            type: 'actualidad'
          }
        }
      },
      {
        node: {
          path: '/alternativas-cerradas-vigentes/',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: null,
            id: '4iyIbURlwNfeTUwnjgHBdI',
            titulocontent: 'Alternativas Cerradas Vigentes',
            type: 'alternativas'
          }
        }
      },
      {
        node: {
          path: '/inversiones/alternativas-cerradas-comercializacion/',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: null,
            id: '6tRmkahPbmybyKwcqPkg4n',
            titulocontent: 'Alternativas Cerradas en Comercialización',
            type: 'alternativas'
          }
        }
      },
      {
        node: {
          path: '/navidad/',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo:
              '¡Creemos juntos futuro en esta navidad! | Protección',
            id: '4Rva7zZLd609vN1ia34Ajo',
            titulocontent: '¡Creemos juntos futuro en esta navidad!',
            type: 'talento'
          }
        }
      },
      {
        node: {
          path: '/activo/',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: 'Protección Activo | Protección',
            id: '48go6VGfTWtzSWBd7l4zb3',
            titulocontent: 'Protección Activo',
            type: 'talento'
          }
        }
      },
      {
        node: {
          path: '/empresas-on/',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo:
              'Conoce ON, nuestra oferta de valor para las Empresas | Protección',
            id: 'HeuEkFOvoflvK9qp0mNFJ',
            titulocontent:
              'Conoce ON, nuestra oferta de valor para las Empresas',
            type: 'talento'
          }
        }
      },
      {
        node: {
          path: '/talento-si-hay/',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: 'Talento Sí Hay de Protección te da la bienvenida',
            id: '3AZW4bWcQv1Q8k9GkUYHP0',
            titulocontent: 'Talento Sí Hay Protección',
            type: 'talento'
          }
        }
      },
      {
        node: {
          path: '/portafolios-de-inversion/',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: 'Portafolios de Inversión | Protección',
            id: '1nImAoTFAynvYKo8LByE2s',
            titulocontent: 'Portafolios de Inversión',
            type: 'leyesydecretos'
          }
        }
      },
      {
        node: {
          path: '/fondos-voluntarios-de-pension/',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: 'Fondos Voluntarios de Pensión | Protección',
            id: '3fqb2Pmw7rwooTesAenxDR',
            titulocontent: 'Fondos Voluntarios de Pensión',
            type: 'leyesydecretos'
          }
        }
      },
      {
        node: {
          path: '/ley-de-transparencia/',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: 'Ley de Transparencia | Protección',
            id: '2pyixFAOm2epRSoMezu2Jh',
            titulocontent: 'Ley de Transparencia',
            type: 'leyesydecretos'
          }
        }
      },
      {
        node: {
          path: '/home/personas/ahorro/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Home de Personas Ahorro',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/home/empresas/ahorro/',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Home de Empresas Ahorro',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/home/personas/cesantias/',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Home de Personas Cesantias',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/home/empresas/cesantias/',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Home de Empresas Cesantias',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/home/personas/inversion/',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Home de Personas Inversión',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/home/personas/pension/',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Home de Personas Pension',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/home/empresas/pension/',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Home de Empresas Pension',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/mapa-del-sitio/',
          context: {
            cliente: null,
            category: null,
            metatittleSeo: null,
            id: null,
            titulocontent: 'Mapa del Sitio',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/personas/ahorro/',
          context: {
            cliente: 1,
            category: 'Ahorro',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Contenido de Personas Ahorro',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/empresas/ahorro/',
          context: {
            cliente: 2,
            category: 'Ahorro',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Contenido de Empresas Ahorro',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/personas/cesantias/',
          context: {
            cliente: 1,
            category: 'Cesantías',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Contenido de Personas Cesantías',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/empresas/cesantias/',
          context: {
            cliente: 2,
            category: 'Cesantías',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Contenido de Empresas Cesantías',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/personas/inversion/',
          context: {
            cliente: 1,
            category: 'Inversión',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Contenido de Personas Inversión',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/personas/pension/',
          context: {
            cliente: 1,
            category: 'Pensión',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Contenido de Personas Pensión',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/empresas/pension/',
          context: {
            cliente: 2,
            category: 'Pensión',
            metatittleSeo: null,
            id: null,
            titulocontent: 'Contenido de Empresas Pensión',
            type: 'home'
          }
        }
      },
      {
        node: {
          path: '/dev-404-page/',
          context: {
            cliente: null,
            category: null,
            metatittleSeo: null,
            id: null,
            titulocontent: null,
            type: null
          }
        }
      },
      {
        node: {
          path: '/404/',
          context: {
            cliente: null,
            category: null,
            metatittleSeo: null,
            id: null,
            titulocontent: null,
            type: null
          }
        }
      },
      {
        node: {
          path: '/canales/',
          context: {
            cliente: null,
            category: null,
            metatittleSeo: null,
            id: null,
            titulocontent: null,
            type: null
          }
        }
      },
      {
        node: {
          path: '/chat-bot-asesor/',
          context: {
            cliente: null,
            category: null,
            metatittleSeo: null,
            id: null,
            titulocontent: null,
            type: null
          }
        }
      },
      {
        node: {
          path: '/error-explorer/',
          context: {
            cliente: null,
            category: null,
            metatittleSeo: null,
            id: null,
            titulocontent: null,
            type: null
          }
        }
      },
      {
        node: {
          path: '/',
          context: {
            cliente: null,
            category: null,
            metatittleSeo: null,
            id: null,
            titulocontent: null,
            type: null
          }
        }
      },
      {
        node: {
          path: '/resultados/',
          context: {
            cliente: null,
            category: null,
            metatittleSeo: null,
            id: null,
            titulocontent: null,
            type: null
          }
        }
      },
      {
        node: {
          path: '/404.html',
          context: {
            cliente: null,
            category: null,
            metatittleSeo: null,
            id: null,
            titulocontent: null,
            type: null
          }
        }
      }
    ]
  },
  allContentfulContenidoSimple: {
    edges: [
      {
        node: {
          titulo: 'Mapa del Sitio',
          urlSeo: 'mapa-del-sitio',
          contentful_id: '50fhK6QvlrPBT5JK8VKM6D',
          CuerpoContenido: {
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
                        'Encuentra aquí todo el contenido de nuestro sitio web que tenemos disponible para ti. Navega y accede a información de utilidad. ',
                      nodeType: 'text'
                    }
                  ],
                  nodeType: 'paragraph'
                }
              ],
              nodeType: 'document'
            }
          },
          metatittleSeo: { metatittleSeo: 'Mapa del Sitio | Protección' },
          metadescripcionSeo: {
            metadescripcionSeo:
              'Encuentra aquí todo el contenido de nuestro sitio web que tenemos disponible para ti. Navega y accede a información de utilidad. Clic aquí.'
          }
        }
      }
    ]
  }
}

const mockStore = configureStore()
const initialState = {
  youcantmiss: {
    userValue: []
  },
  home: { categoria: 'Cesantías', subCategoria: 'Cesante' },
  welcome: { typeUser: 1 },
  menu: { status: true },
  tourguide: { status: true }
}

const location = {
  pathname: '/talento-si-hay/',
  search: '',
  hash: '',
  href: 'http://localhost:8000/talento-si-hay/',
  origin: 'http://localhost:8000',
  protocol: 'http:',
  host: 'localhost:8000',
  hostname: 'localhost',
  port: '8000',
  state: null,
  key: 'initial'
}

let store
beforeEach(() => {
  fetch.resetMocks()
  store = mockStore(initialState)
  store.dispatch = jest.fn()
})

describe('Button', () => {
  it('ModalButton close modal mobile', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MapaDelSitio
          location={location}
          dispatch={() => {}}
          mapSiteQuery={data}
        />
      </Provider>
    )
  })

  it('ModalButton close modal mobile', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MapaSitteComponent location={location} dispatch={() => {}} />
      </Provider>
    )
  })

  it('ModalButton close modal mobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <MapaDelSitio
          location={location}
          dispatch={() => {}}
          mapSiteQuery={data}
        />
      </Provider>
    )
  })

  it('ModalButton close modal mobile', () => {
    global.innerWidth = 2000
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={store}>
        <MapaDelSitio
          location={location}
          dispatch={() => {}}
          mapSiteQuery={data}
        />
      </Provider>
    )
  })
})
