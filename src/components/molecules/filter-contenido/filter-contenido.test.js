import React from 'react'
import renderer from 'react-test-renderer'
import Filtercontenido, { CleanData } from './filter-contenido'
import data from '../../../components/molecules/scroll-animation/dataScroll.json'
import { mount } from 'enzyme'

const dataComplete = [
  {
    urlSeo: 'cesantias/mecanismo-proteccion-cesante/como-acceder',
    textoIntroductorio:
      'Conoce todos los requisitos para beneficiarte de este mecanismo',
    descripcioncorta:
      'Conoce todos los requisitos para beneficiarte de este mecanismo mientras encuentras un nuevo empleo',
    updatedAt: '2020-10-19T20:23:57.934Z',
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
    tituloCorto: 'Acceder al Mecanismo de Protección al Cesante',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Saber más',
    imagenpequena: {
      file: {
        fileName:
          'CT13C2--Todos_Cesantías_Mecanismo-de-protección-al-cesante_Requisitos-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/7itIkQ9vagteLDfTkeIYng/85b2d91a6539fa57a9c0594ba230543a/CT13C2--Todos_Cesanti__as_Mecanismo-de-proteccio__n-al-cesante_Requisitos-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '3Ymr08WpUQinc0MciY6Pwa',
        tituloCorto: 'Mecanismo de Protección al Cesante'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    nombreImagen:
      'CT13C2  TodosCesantíasMecanismo de protección al cesanteRequisitos AJUSTADO',
    tipoBite: 'producto'
  },
  {
    urlSeo:
      'cesantias/pignoracion-embargo-inmovilizacion/en-que-consiste-inmovilizar',
    textoIntroductorio: 'Ingresa y conoce aquí de qué se trata',
    descripcioncorta:
      'La inmovilización de Cesantías es un paso del proceso de postulación al subsidio de vivienda que entrega el Gobierno Nacional por medio de las Cajas de Compensación Familiar y la Caja de Vivienda Popular.',
    updatedAt: '2020-10-08T20:53:46.607Z',
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
    tituloCorto: '¿En qué consiste inmovilizar las Cesantías?',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: {
        fileName: 'CT7C3-Todos-los-usuarios_Inmovilización-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/2F84HVJ0G0WfyJIoqHso0v/7b7233bd3d2a8aefb2bf9c3d036afb04/CT7C3-Todos-los-usuarios_Inmovilizacio__n-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '1XRfmYrwLV3ApgMefhyvJu',
        tituloCorto: 'Inmovilización, Embargo y Pignoración'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      },
      {
        contentful_id: '7IF4VrReibXT0Vb13iX3rd',
        nombre: 'Empleador'
      }
    ],
    nombreImagen: 'CT7C3 Todos los usuariosInmovilización AJUSTADO',
    tipoBite: 'producto'
  },
  {
    urlSeo: 'cesantias/certificados',
    textoIntroductorio:
      'Conoce si estás afiliado, tu fecha de vinculación y tu ahorro',
    descripcioncorta:
      'Los certificados de Cesantías son ese soporte que necesitarás en caso de querer demostrar que estás afiliado a Protección, la fecha de tu vinculación y el ahorro que tienes. Conoce los diferentes tipos de Certificados de Cesantías que puedes obtener.',
    updatedAt: '2020-10-08T20:52:15.928Z',
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
    tituloCorto: '¿Cuáles son los certificados de Cesantías?',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Quiero saber más',
    imagenpequena: {
      file: {
        fileName: 'CT8C1-Todos-los-públicos_Cesantías_Certificados-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/3IC1KSzhmXhVkyMFv7mw4y/ffda6345d6fc833928c36e13a66472cf/CT8C1-Todos-los-pu__blicos_Cesanti__as_Certificados-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
        tituloCorto: 'Extractos y Certificados'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    nombreImagen: 'CT8C1 Todos los públicosCesantíasCertificados AJUSTADO',
    tipoBite: 'producto'
  },
  {
    urlSeo: 'cesantias/pignoracion-embargo-inmovilizacion/que-es-embargo',
    textoIntroductorio:
      'Conoce algunos motivos que pueden llevar al embargo de Cesantías',
    descripcioncorta:
      'Entérate aquí cuales son las circunstancias que pueden llevar al embargo de tus Cesantías. El embargo es una orden expedida por un juez mediante la cual se retienen las Cesantías a favor de una persona, empresa o cooperativa.',
    updatedAt: '2020-10-08T20:50:49.532Z',
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
    tituloCorto: '¿Qué es el embargo de las Cesantías?',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: {
        fileName: 'CT7C2-Todos-los-usuarios_Embargo-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/4Poiqo1pXjXBXH8ngNvsh4/2b7e4f0ddd54de95824b37459ab7f4b4/CT7C2-Todos-los-usuarios_Embargo-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '1XRfmYrwLV3ApgMefhyvJu',
        tituloCorto: 'Inmovilización, Embargo y Pignoración'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      },
      {
        contentful_id: '7IF4VrReibXT0Vb13iX3rd',
        nombre: 'Empleador'
      }
    ],
    nombreImagen: 'CT7C2 Todos los usuariosEmbargo AJUSTADO',
    tipoBite: 'producto'
  },
  {
    urlSeo:
      'cesantias/pignoracion-embargo-inmovilizacion/que-signfica-pignorar',
    textoIntroductorio: 'Ingresa y conoce de qué se trata ',
    descripcioncorta:
      '¿Sabías que puedes pignorar tus Cesantías para respaldar los préstamos realizados por los empleadores? ',
    updatedAt: '2020-10-08T20:50:02.870Z',
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
    tituloCorto: '¿Qué es la pignoración de Cesantías?',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: {
        fileName: 'CT7C1-Todos-los-usuarios_Pignoración-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/2txmAXSTQ4IMql24NRDeqK/a5b2da43622190de01db18903f387355/CT7C1-Todos-los-usuarios_Pignoracio__n-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '1XRfmYrwLV3ApgMefhyvJu',
        tituloCorto: 'Inmovilización, Embargo y Pignoración'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      },
      {
        contentful_id: '7IF4VrReibXT0Vb13iX3rd',
        nombre: 'Empleador'
      }
    ],
    nombreImagen: 'CT7C1 Todos los usuariosPignoración AJUSTADO',
    tipoBite: 'producto'
  },
  {
    urlSeo: 'cesantias/portafolios/corto-largo-plazo',
    textoIntroductorio:
      '¿Qué son estos Portafolios? Conoce aquí de qué se trata',
    descripcioncorta:
      'Hay grandes ventajas al ahorrar tus Cesantías y una de ellas es la posibilidad de elegir, según tus metas, en qué tipo de portafolio prefieres que sea administrado tu dinero: Portafolio Largo Plazo o Portafolio Corto Plazo.',
    updatedAt: '2020-10-08T20:47:31.027Z',
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
    tituloCorto: 'Portafolios Corto Plazo y Largo Plazo Cesantías',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: {
        fileName:
          'CT6C1-Todos-los-públicos_Cesantías_Portafolios_Qué-son-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/4qluYPx8h2Wlw1AtjZZDE7/41fb9cb37411a5fb1e99694057ff7347/CT6C1-Todos-los-pu__blicos_Cesanti__as_Portafolios_Que__-son-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: 'NtTH8hEGhYSbTgRU51YND',
        tituloCorto: 'Portafolios y Tributarios'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    nombreImagen:
      'CT6C1 Todos los públicosCesantíasPortafoliosQué son AJUSTADO',
    tipoBite: 'producto'
  },
  {
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
      },
      {
        nombre: 'Inversión',
        contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb'
      },
      {
        nombre: 'Pensiones Obligatorias',
        contentful_id: '45FVyiIWU70wBqFgR750SE'
      },
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
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
      'El futuro sostenible lo hacemos conservando nuestros recursos',
    tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
    updatedAt: '2020-10-08T20:46:43.025Z',
    urlSeo: 'novedad/futuro-sostenible',
    tipoBite: 'novedad',
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/1Onv1Lj8Mn74P5WFGuJIaE/5d1878cfcb429675795b49d3da28901b/CT3C2-Todos-los-usuarios_Vivienda_Cua__nto-ahorrar-AJUSTADO.jpg?w=800&q=50'
      },
      file: {
        fileName:
          'CT3C2-Todos-los-usuarios_Vivienda_Cuánto-ahorrar-AJUSTADO.jpg'
      }
    },
    tema: [
      {
        contentful_id: '7cTYlI6D258aUgSOhXfiTp',
        tituloCorto: 'Novedades y Beneficios'
      }
    ],
    nombreImagen: 'CT3C2 Todos los usuariosViviendaCuánto ahorrar AJUSTADO'
  },
  {
    urlSeo: 'cesantias/beneficios-tributarios/como-declaran-trabajadores',
    textoIntroductorio: 'Conoce el tratamiento tributario de las Cesantías',
    descripcioncorta:
      'En el tratamiento tributario de las cesantías se debe tener en cuenta si existe una relación laboral o si se trata de un ahorro como persona independiente. A continuación, te contamos cómo declarar esta prestación y quiénes deben hacerlo.',
    updatedAt: '2020-10-08T20:44:37.730Z',
    categoriaCliente: [
      {
        descripcion: 'Empleado',
        contentful_id: '2L498woyc1TQ1A3SpyUpxA'
      }
    ],
    tituloCorto: '¿Cómo declaran Cesantías los trabajadores?',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: {
        fileName: 'CT5C1-Todos-los-públicos_Cesantías_Declaración-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/27fu6jPdHmWmF60jhSplnb/de19eec337054c9245fbda95101ff6cc/CT5C1-Todos-los-pu__blicos_Cesanti__as_Declaracio__n-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: 'NtTH8hEGhYSbTgRU51YND',
        tituloCorto: 'Portafolios y Tributarios'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    nombreImagen: 'CT5C1 Todos los públicosCesantíasDeclaración AJUSTADO',
    tipoBite: 'producto'
  },
  {
    urlSeo: 'cesantias/aportes/que-son',
    textoIntroductorio: 'Aportes a Cesantías y quiénes deben hacerlo',
    descripcioncorta:
      'Las cesantías son una prestación social que corresponde a un mes de salario por un año trabajado, y son consignadas por el empleador a favor de cada empleado, en un Fondo de Cesantías como Protección. Te presentamos algunos datos de las Cesantías',
    updatedAt: '2020-10-08T20:43:54.885Z',
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
    tituloCorto: '¿Qué son los aportes a Cesantías?',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Quiero saber más',
    imagenpequena: {
      file: {
        fileName: 'CT9C1-Empleado-y-cesante_Quién-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/5jbtMZygbqarwJ1FJolSF5/1b43d724f452a79291aa87e2a9ab836c/CT9C1-Empleado-y-cesante_Quie__n-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '1bveIhWTIleo2K6PHMvDQO',
        tituloCorto: 'Generalidades'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      },
      {
        contentful_id: '7IF4VrReibXT0Vb13iX3rd',
        nombre: 'Empleador'
      }
    ],
    nombreImagen: 'CT9C1 Empleado y cesanteQuién AJUSTADO',
    tipoBite: 'producto'
  },
  {
    textoCallToActionBite: 'Conocer más',
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
    descripcioncorta:
      'Los extractos de Cesantías son comunicaciones periódicas que contienen información acerca de los movimientos de tu cuenta individual durante un periodo determinado de tiempo. Conoce aquí cómo puedes descargarlos',
    textoIntroductorio: 'Estos te permiten estar informado acerca de tu ahorro',
    tituloCorto: '¿Cómo obtener tus extractos de Cesantías?',
    updatedAt: '2020-10-08T20:43:23.428Z',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
      }
    ],
    urlSeo: 'cesantias/extractos/como-obtenerlos',
    tipoBite: 'educativo',
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    imagenpequena: {
      file: {
        fileName:
          'CT10C2-Todos-los-públicos_Cesantías_Extractos_Cómo-descargarlos-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/1zghPXN0VjQHiXu2F57hvE/bb17e88b2ef7e2954b0192de9d0c12a5/CT10C2-Todos-los-pu__blicos_Cesanti__as_Extractos_Co__mo-descargarlos-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
        tituloCorto: 'Extractos y Certificados'
      }
    ],
    nombreImagen:
      'CT10C2 Todos los públicosCesantíasExtractosCómo descargarlos AJUSTADO'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
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
    descripcioncorta:
      'Contamos con diferentes canales para que hagas el retiro de tus Cesantías. Puedes hacerlo a través de tu empleador; en nuestro sitio web, en nuestra AppProtección, o en los más de 400 corresponsales bancarios que están disponibles en el territorio nacional',
    textoIntroductorio:
      '¿Ya decidiste la meta que quieres cumplir con tus Cesantías?',
    tituloCorto: '¿Dónde puedo retirar mis Cesantías?',
    updatedAt: '2020-10-08T20:39:12.032Z',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
      }
    ],
    urlSeo: 'cesantias/como-usarlas/como-retirarlas/empleado-cesante',
    tipoBite: 'educativo',
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    imagenpequena: {
      file: {
        fileName:
          'CT2C3-Empleados_Cesantías_Cómo-retirar-las-cesantías_Cómo-retirar-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/3mRuHO8xEQBR9anMQcDkfc/bbc1f801edf4a7415353a81086cfd91b/CT2C3-Empleados_Cesanti__as_Co__mo-retirar-las-cesanti__as_Co__mo-retirar-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '6QSO0SouYnUllWRWOubCZR',
        tituloCorto: 'Canales Retiro'
      }
    ],
    nombreImagen:
      'CT2C3 EmpleadosCesantíasCómo retirar las cesantíasCómo retirar AJUSTADO'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
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
    descripcioncorta:
      'Comprar vivienda nueva o remodelar la actual, son algunas metas que requieren de un ahorro constante y disciplinado. Con tus Cesantías en Protección das el primer paso para hacer este sueño realidad. Sigue estas recomendaciones:',
    textoIntroductorio: 'Haz un plan de ahorro y alcanza el sueño de vivienda',
    tituloCorto: '¿Cómo ahorrar tus Cesantías para vivienda?',
    updatedAt: '2020-10-08T20:37:29.325Z',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
      }
    ],
    urlSeo: 'cesantias/como-usarlas/vivienda/como-ahorrar',
    tipoBite: 'educativo',
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    imagenpequena: {
      file: {
        fileName: 'CT3C1-Empleados_Vivienda_Cómo-usarlas-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/5tjU31I6BsJXDlVRu7bTZV/77c44ff4349ffcf03abdbc3524b76951/CT3C1-Empleados_Vivienda_Co__mo-usarlas-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
        tituloCorto: 'Vivienda'
      }
    ],
    nombreImagen: 'CT3C1 EmpleadosViviendaCómo usarlas AJUSTADO'
  },
  {
    urlSeo: 'cesantias/intereses/que-son',
    textoIntroductorio: 'Este ahorro tiene unos intereses',
    descripcioncorta:
      '¿Sabías que este ahorro tiene unos intereses que puedes disfrutar? Como tus Cesantías son un ahorro, tienes derecho a unos intereses anuales que van desde el 1 de enero hasta el 31 de diciembre del año correspondiente. Conoce más sobre ellos.',
    updatedAt: '2020-10-08T20:37:05.297Z',
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
    tituloCorto: '¿Qué son los intereses de las Cesantías?',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Quiero saber más',
    imagenpequena: {
      file: {
        fileName: 'CT12C1-Empleado-_-Cesante_Cesantías_Intereses-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/1oBRikD3x6XdIkOfx7yj6s/8d8c5a3a69a88e705f14a8d772e3119a/CT12C1-Empleado-_-Cesante_Cesanti__as_Intereses-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '1bveIhWTIleo2K6PHMvDQO',
        tituloCorto: 'Generalidades'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    nombreImagen: 'CT12C1 Empleado  CesanteCesantíasIntereses AJUSTADO',
    tipoBite: 'producto'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
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
    ],
    descripcioncorta:
      'Cuando estás en el proceso de compra de vivienda, algunas veces se comenten errores. Estos son algunos de los más comunes que debes evitar: ',
    textoIntroductorio: 'Conoce algunos errores comunes que debes evitar',
    tituloCorto: 'Evita estos errores: Cesantías para vivienda',
    updatedAt: '2020-10-08T20:36:09.329Z',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
      }
    ],
    urlSeo:
      'cesantias/como-usarlas/vivienda/cesante-independiente/que-errores-evitar',
    tipoBite: 'educativo',
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    imagenpequena: {
      file: {
        fileName:
          'CT3C6-Cesantes-e-independientes_Vivienda_Errores-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/37oEStvij5MDA8cNSeZFCn/21834b63d375089e55e250bdaf4c9ae6/CT3C6-Cesantes-e-independientes_Vivienda_Errores-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
        tituloCorto: 'Vivienda'
      }
    ],
    nombreImagen: 'CT3C6 Cesantes e independientesViviendaErrores AJUSTADO'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
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
    descripcioncorta:
      'En Protección queremos acompañarte para que cumplas todos tus sueños. Alcanzar tus metas educativas es una de las inversiones más importantes de tu vida, además estas contribuyen al desarrollo y bienestar de toda tu familia. Conoce aquí algunos tips:',
    textoIntroductorio:
      'Queremos acompañarte para que cumplas tus sueños de educación',
    tituloCorto: 'Tips para invertir tus Cesantías en educación',
    updatedAt: '2020-10-08T20:35:33.892Z',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
      }
    ],
    urlSeo: 'cesantias/como-retirarlas/vivienda/cuanto-ahorrar',
    tipoBite: 'educativo',
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    imagenpequena: {
      file: {
        fileName:
          'CT4C1-Empleado---Cesante---Independiente_Cesantías_Cómo-usarlas-para-educación-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/1ye3DqDt9muqpYeOW1evgA/9b47c2add60d757444c4e6fc2dfd0b08/CT4C1-Empleado---Cesante---Independiente_Cesanti__as_Co__mo-usarlas-para-educacio__n-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
        tituloCorto: 'Educación'
      }
    ],
    nombreImagen:
      'CT4C1 Empleado   Cesante   IndependienteCesantíasCómo usarlas para educación AJUSTADO'
  },
  {
    urlSeo: 'cesantias/mecanismo-proteccion-cesante',
    textoIntroductorio: 'Ingresa y conoce aquí de qué se trata',
    descripcioncorta:
      '¿Perdiste tu empleo? El Gobierno cuenta con un programa con el que podrás aprovechar tus Cesantías, y encaminarte a un nuevo trabajo. Quedar cesante no implica perder el acceso al servicio de salud y otros beneficios sociales.',
    updatedAt: '2020-10-08T20:34:45.490Z',
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
    tituloCorto: '¿Qué es el Mecanismo de Protección al Cesante?',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Conocer más',
    imagenpequena: {
      file: {
        fileName:
          'CT13C1--Todos_Cesantías_Mecanismo-de-protección-al-cesante-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/7L2JUn4EJPju64Xx9dZbMI/53d965bb22dacb4a19ab81ea11b47916/CT13C1--Todos_Cesanti__as_Mecanismo-de-proteccio__n-al-cesante-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '3Ymr08WpUQinc0MciY6Pwa',
        tituloCorto: 'Mecanismo de Protección al Cesante'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    nombreImagen:
      'CT13C1  TodosCesantíasMecanismo de protección al cesante AJUSTADO',
    tipoBite: 'producto'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
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
    descripcioncorta:
      '¿Tú, o algún miembro de tu familia, está pensando en estudiar? A continuación, compartimos algunos de los errores más comunes que debes evitar si quieres alcanzar este propósito:',
    textoIntroductorio: 'Consejos para el uso de tus Cesantías',
    tituloCorto: '¡Evita estos errores! Cesantías para educación',
    updatedAt: '2020-10-08T20:34:33.033Z',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
      }
    ],
    urlSeo: 'cesantias/como-usarlas/educacion/que-errores-evitar',
    tipoBite: 'educativo',
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    imagenpequena: {
      file: {
        fileName:
          'CT4C3-Todos-los-usuarios_Cesantías_Errores-comunes-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/Wye5GV9jANEuiOzbqz6TZ/99d006ef6a309f2804af2ad72694eb1f/CT4C3-Todos-los-usuarios_Cesanti__as_Errores-comunes-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
        tituloCorto: 'Educación'
      }
    ],
    nombreImagen: 'CT4C3 Todos los usuariosCesantíasErrores comunes AJUSTADO'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
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
    descripcioncorta:
      '¡Es momento de estudiar eso que siempre has querido! Hemos habilitado nuestro canal digital para que puedas solicitar el retiro de tus Cesantías a través de este medio, sin necesidad de ir a una Oficina de Servicio de Protección.',
    textoIntroductorio: '¡Es muy fácil! Aquí te contamos cómo puedes hacerlo',
    tituloCorto: 'Retira en línea tus Cesantías para educación',
    updatedAt: '2020-10-08T20:33:14.283Z',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
      }
    ],
    urlSeo: 'cesantias/novedad/retiro-online-educacion',
    tipoBite: 'educativo',
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    imagenpequena: {
      file: {
        fileName: 'Qué-son-los-intereses-de-las-cesantías-max.jpeg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/1jTXd0Bt7y6YDOVmq4Cj22/c24f16f2591bc900ff69e3697921ffc9/Que__-son-los-intereses-de-las-cesanti__as-max.jpeg?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
        tituloCorto: 'Educación'
      }
    ],
    nombreImagen: 'Qué son los intereses de las cesantías max'
  },
  {
    urlSeo: 'cesantias/para-que-son-ces',
    textoIntroductorio:
      'Conoce algunos objetivos en los que puedes destinar tus Cesantías',
    descripcioncorta:
      'Existen algunos casos específicos en los que podrás utilizar tus Cesantías. Entérate aquí de qué se trata',
    updatedAt: '2020-10-08T20:32:44.453Z',
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
    tituloCorto: '¿Para qué son las Cesantías?',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: {
        fileName:
          'CT1C2-Empleado_Independiente_Cesantías_Para-qué-son-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/2aGTDh6GG89lRvCPEEPZj5/89efd8a623ef1249d667cef4f16222b3/CT1C2-Empleado_Independiente_Cesanti__as_Para-que__-son-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '1bveIhWTIleo2K6PHMvDQO',
        tituloCorto: 'Generalidades'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      },
      {
        contentful_id: '7IF4VrReibXT0Vb13iX3rd',
        nombre: 'Empleador'
      }
    ],
    nombreImagen: 'CT1C2 EmpleadoIndependienteCesantíasPara qué son AJUSTADO',
    tipoBite: 'producto'
  },
  {
    textoCallToActionBite: '¡Conoce más aquí!',
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
    descripcioncorta:
      'Los empleados que estén teniendo una disminución temporal en su ingreso, a causa de la emergencia económica, social y ecológica que se presenta con el COVID-19, podrán hacer retiros parciales de sus Cesantías a través de nuestros canales digitales.',
    textoIntroductorio: 'Conoce de qué se trata y consulta los requisitos',
    tituloCorto: 'Retiro por Disminución de Ingresos',
    updatedAt: '2020-10-08T20:27:10.054Z',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
      }
    ],
    urlSeo: 'cesantias/retiro-cesantias/disminucion-ingresos',
    tipoBite: 'educativo',
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    imagenpequena: {
      file: {
        fileName:
          'Cua__nto-debes-ahorrar-para-invertir-tus-cesanti__as-en-educacio__n-max.jpeg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/1zFYSlhuMTZIZxdD80s5Sy/dcd3622b5d2126d4bf82760c2d4398f8/Cua__nto-debes-ahorrar-para-invertir-tus-cesanti__as-en-educacio__n-max.jpeg?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '6QSO0SouYnUllWRWOubCZR',
        tituloCorto: 'Canales Retiro'
      }
    ],
    nombreImagen:
      'Cuanto debes ahorrar para invertir tus cesantias en educacion max'
  },
  {
    urlSeo: 'cesantias/que-son',
    textoIntroductorio:
      'Conoce todo lo que debes saber acerca de las Cesantías',
    descripcioncorta:
      'Las Cesantías son una prestación social a la que tienes derecho al ser un trabajador vinculado por contrato fijo o término indefinido, tanto en empresas públicas como privadas. Este ahorro es consignado en un Fondo de Cesantías, elegido libremente por ti. ',
    updatedAt: '2020-10-08T20:22:36.058Z',
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
    tituloCorto: '¿Qué son las Cesantías?',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Quiero saber más',
    imagenpequena: {
      file: {
        fileName: 'Cesantías_Qué-son-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/11cUclDEKWST8cE0l6uWmN/37a67446431e104f77629e6ba6298650/Cesanti__as_Que__-son-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '1bveIhWTIleo2K6PHMvDQO',
        tituloCorto: 'Generalidades'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      },
      {
        contentful_id: '7IF4VrReibXT0Vb13iX3rd',
        nombre: 'Empleador'
      }
    ],
    nombreImagen: 'CesantíasQué son AJUSTADO',
    tipoBite: 'producto'
  },
  {
    urlSeo: 'cesantias-calculadora',
    textoIntroductorio: 'Con esta herramienta simula el valor de las Cesantías',
    descripcioncorta:
      'Este simulador te ayudará a calcular el valor de las cesantías',
    updatedAt: '2020-10-01T22:28:42.418Z',
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
    tituloCorto: 'Calculadora de Cesantías',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Quiero calcularlas',
    imagenpequena: {
      file: {
        fileName: 'GettyImages-1151007843.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/AK1FMBIUDdhZWPF3Y32xS/24d53d993f9b21fca9e38514c2e11a35/GettyImages-1151007843.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '1bveIhWTIleo2K6PHMvDQO',
        tituloCorto: 'Generalidades'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      },
      {
        contentful_id: '7IF4VrReibXT0Vb13iX3rd',
        nombre: 'Empleador'
      }
    ],
    nombreImagen: 'GettyImages 1151007843',
    tipoBite: 'producto'
  },
  {
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    descripcioncorta:
      'En Protección, queremos acompañarte y queremos ser tu aliado para que hagas realidad tus sueños.',
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
      },
      {
        descripcion: 'Pensión por invalidez',
        contentful_id: '7lDDi92WQvINHDoyppiGG1'
      },
      {
        descripcion: 'Pensión por sobrevivencia',
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g'
      },
      {
        descripcion: 'Pensión por vejez',
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
      },
      {
        descripcion: 'Soy pensionado',
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
      }
    ],
    textoIntroductorio:
      'Acompañamos a millones de clientes en el logro de sus sueños',
    tituloCorto: '¿Por qué estar en Protección?',
    updatedAt: '2020-09-24T15:59:09.250Z',
    urlSeo: 'cesantias/por-que-estar-proteccion',
    tipoBite: 'beneficio',
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/2uwLOKJVxyW69MVIqzFRGg/1a79420954e2ca33b0a6d942d3e708c2/CT1C4-Todos-los-pu__blicos_Cesanti__as_Por-que__-Proteccio__n-AJUSTADO.png?w=800&q=50'
      },
      file: {
        fileName:
          'CT1C4-Todos-los-públicos_Cesantías_Por-qué-Protección-AJUSTADO.png'
      }
    },
    tema: [
      {
        contentful_id: '6QSO0SouYnUllWRWOubCZR',
        tituloCorto: 'Canales Retiro'
      }
    ],
    nombreImagen: 'CT1C4 Todos los públicosCesantíasPor qué Protección AJUSTADO'
  },
  {
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
      },
      {
        nombre: 'Pensiones Obligatorias',
        contentful_id: '45FVyiIWU70wBqFgR750SE'
      },
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
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
    textoIntroductorio: 'Empieza HOY a proyectar tus sueños',
    tituloCorto: '¡Disfruta de nuestra alianza con Vecindario!',
    updatedAt: '2020-09-22T15:47:16.272Z',
    urlSeo: 'novedad/vecindario-proteccion',
    tipoBite: 'novedad',
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/1ldmLN37VVuBR93FGMxjMh/401fa22bcc120b0cf883f9a47de95e8a/foto2.png?w=800&q=50'
      },
      file: {
        fileName: 'foto2.png'
      }
    },
    tema: [
      {
        contentful_id: '6QSO0SouYnUllWRWOubCZR',
        tituloCorto: 'Canales Retiro'
      },
      {
        contentful_id: '7cTYlI6D258aUgSOhXfiTp',
        tituloCorto: 'Novedades y Beneficios'
      }
    ],
    nombreImagen: 'foto2'
  },
  {
    textoCallToActionBite: 'Quiero saber más',
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
    descripcioncorta:
      'Los extractos de Cesantías son comunicaciones periódicas que contienen información acerca de los movimientos de tu cuenta individual durante un periodo determinado de tiempo. Entenderlo, te permitirá hacer seguimiento a tu ahorro.',
    textoIntroductorio: 'Hazle seguimiento a tu ahorro de Cesantías',
    tituloCorto: 'Extractos de Cesantías, ¿qué son y cómo leerlos?',
    updatedAt: '2020-09-18T19:43:00.358Z',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
      }
    ],
    urlSeo: 'cesantias/extractos/como-leerlos',
    tipoBite: 'educativo',
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    imagenpequena: {
      file: {
        fileName: 'CT3C7-imagen_tarjeta_que_son.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/d587758f8f6e0f34c67007b8d4616e86/CT3C7-imagen_tarjeta_que_son.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
        tituloCorto: 'Extractos y Certificados'
      }
    ],
    nombreImagen: 'CT3C7 imagentarjetaqueson'
  },
  {
    urlSeo: 'cesantias/portafolios/porque-como-cambiar',
    textoIntroductorio:
      'Elige para tus Cesantías, un Portafolio acorde con tus metas.',
    descripcioncorta:
      'Al ahorrar tus Cesantías tienes la posibilidad de elegir el portafolio de inversión que más te convenga: Largo Plazo o Corto Plazo. Esta es una decisión de gran importancia, y para elegir debes tener claro los objetivos que quieres alcanzar con este ahorro',
    updatedAt: '2020-09-18T19:29:35.541Z',
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
    tituloCorto: '¿Por qué y cómo cambiar de portafolio?',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: 'W2zNnmbYol9hf1OXMVGgR'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: {
        fileName: 'portafolio-max.jpg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/7b1WR8x6gU3qgvjn57e2Pv/9f7c416c8c33eb9d15b6100bf5f3fed5/portafolio-max.jpg?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: 'NtTH8hEGhYSbTgRU51YND',
        tituloCorto: 'Portafolios y Tributarios'
      }
    ],
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      }
    ],
    nombreImagen: 'portafolio max',
    tipoBite: 'producto'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
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
    descripcioncorta:
      'Con este servicio podrás iniciar tu retiro de cesantías (el valor no debe exceder $17.556.040) Anexa la documentación requerida y elige el medio de pago: transferencia a cuenta bancaria registrada en Protección o pago por ventanilla en una entidad bancaria',
    textoIntroductorio:
      'Conoce aquí cómo puedes retirar tus Cesantías. ¡Es muy fácil!',
    tituloCorto: '¿Cómo retirar tus Cesantías?',
    updatedAt: '2020-09-18T18:56:35.590Z',
    category: [
      {
        nombre: 'Cesantías',
        contentful_id: '7pUsqgXajww2lAjS8Z8Ult'
      }
    ],
    urlSeo: 'cesantias/retiro-cesantias/como-retirarlas',
    tipoBite: 'educativo',
    type: [
      {
        contentful_id: '3XCf8zuzh5bGWNcuvFBuwx',
        nombre: 'Afiliado'
      },
      {
        contentful_id: '7IF4VrReibXT0Vb13iX3rd',
        nombre: 'Empleador'
      }
    ],
    imagenpequena: {
      file: {
        fileName:
          'CT2C4-Cesantes_Cesantías_Cómo-retirar-las-cesantías_Cómo-AJUSTADO.png'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/1qUG77uXNrvnRzb1fgGN9W/d57c97b76e800633595818dd26f22288/CT2C4-Cesantes_Cesanti__as_Co__mo-retirar-las-cesanti__as_Co__mo-AJUSTADO.png?w=800&q=50'
      }
    },
    tema: [
      {
        contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
        tituloCorto: 'Vivienda'
      },
      {
        contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
        tituloCorto: 'Educación'
      }
    ],
    nombreImagen:
      'CT2C4 CesantesCesantíasCómo retirar las cesantíasCómo AJUSTADO'
  }
]

const datatemas = {
  edges: [
    {
      node: {
        tituloCorto: 'Educación',
        contentful_id: '1hWhNXMN08MTtHKNBaC0JS',
        lineaDeProducto: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Inmovilización, Embargo y Pignoración',
        contentful_id: '1XRfmYrwLV3ApgMefhyvJu',
        lineaDeProducto: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Portafolios y Tributarios',
        contentful_id: 'NtTH8hEGhYSbTgRU51YND',
        lineaDeProducto: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Canales Retiro',
        contentful_id: '6QSO0SouYnUllWRWOubCZR',
        lineaDeProducto: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Extractos y Certificados',
        contentful_id: 'XZQNOJo5WyeCpVu9LzFM4',
        lineaDeProducto: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Mecanismo de Protección al Cesante',
        contentful_id: '3Ymr08WpUQinc0MciY6Pwa',
        lineaDeProducto: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Beneficios',
        contentful_id: '4yWCb44RYhXWgDL4wVzoCI',
        lineaDeProducto: [
          {
            nombre: 'Pensiones Voluntarias',
            contentful_id: '4sjSQocJHJA3wehCeeaQel'
          }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Novedades y Beneficios',
        contentful_id: '7cTYlI6D258aUgSOhXfiTp',
        lineaDeProducto: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'GENERICO INVERSIONES',
        contentful_id: '4aw5g5YIfgd5iz9JZgkpcn',
        lineaDeProducto: [
          { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Finanzas',
        contentful_id: '4PbRzb1RHkGFM6z4YcuNbv',
        lineaDeProducto: [
          {
            nombre: 'Pensiones Voluntarias',
            contentful_id: '4sjSQocJHJA3wehCeeaQel'
          }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Generalidades',
        contentful_id: '1bveIhWTIleo2K6PHMvDQO',
        lineaDeProducto: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Tips de ahorro',
        contentful_id: '73qm7KPvufncQSOIIfRTUP',
        lineaDeProducto: [
          {
            nombre: 'Pensiones Voluntarias',
            contentful_id: '4sjSQocJHJA3wehCeeaQel'
          }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Planes Institucionales',
        contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
        lineaDeProducto: [
          {
            nombre: 'Pensiones Voluntarias',
            contentful_id: '4sjSQocJHJA3wehCeeaQel'
          }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Soluciones de ahorro',
        contentful_id: '3SXDBr091IkZ03dGOBOS6x',
        lineaDeProducto: [
          {
            nombre: 'Pensiones Voluntarias',
            contentful_id: '4sjSQocJHJA3wehCeeaQel'
          }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Créditos y seguros',
        contentful_id: '3gLW7AefhL3r7XZA74f1lr',
        lineaDeProducto: [
          {
            nombre: 'Pensiones Voluntarias',
            contentful_id: '4sjSQocJHJA3wehCeeaQel'
          }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Novedades',
        contentful_id: '2tdNwtoxba1KzfELIhHS86',
        lineaDeProducto: [
          {
            nombre: 'Pensiones Voluntarias',
            contentful_id: '4sjSQocJHJA3wehCeeaQel'
          }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Acompañamiento',
        contentful_id: '42VJcWnWBYUr1V9z6JpPJr',
        lineaDeProducto: [
          {
            nombre: 'Pensiones Voluntarias',
            contentful_id: '4sjSQocJHJA3wehCeeaQel'
          }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Vivienda',
        contentful_id: '5ZGul9Foet8eSHjNSIRaU4',
        lineaDeProducto: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'GENERICO INVERSIONES',
        contentful_id: '4JYXjOW5V5v8hrNyNI9x43',
        lineaDeProducto: [
          { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Acompañamiento',
        contentful_id: '3KRNawXdMRnF8FOmykSZWW',
        lineaDeProducto: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Vivienda',
        contentful_id: '7ERwcoqC6EVcZUUjjmSiHC',
        lineaDeProducto: [
          {
            nombre: 'Pensiones Voluntarias',
            contentful_id: '4sjSQocJHJA3wehCeeaQel'
          }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Liquidación y Pago',
        contentful_id: '20FxhDhvGnuBb8cKpDnR3y',
        lineaDeProducto: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
        ],
        tipoDeCliente: [
          { nombre: 'Afiliado', contentful_id: '3XCf8zuzh5bGWNcuvFBuwx' },
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'Clave Empresarial',
        contentful_id: 'EsntOEjUwP8F2z8nAtXeJ',
        lineaDeProducto: [
          { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
        ],
        tipoDeCliente: [
          { nombre: 'Empleador', contentful_id: '7IF4VrReibXT0Vb13iX3rd' }
        ]
      }
    },
    {
      node: {
        tituloCorto: 'GENERICO PARA AHORRO',
        contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ',
        lineaDeProducto: [
          {
            nombre: 'Pensiones Voluntarias',
            contentful_id: '4sjSQocJHJA3wehCeeaQel'
          }
        ],
        tipoDeCliente: null
      }
    }
  ]
}

const dataContenidos = [
  {
    category: [
      { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
      { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' },
      {
        nombre: 'Pensiones Obligatorias',
        contentful_id: '45FVyiIWU70wBqFgR750SE'
      },
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    descripcioncorta:
      'Protección marca un hito trascendental en la transformación del proceso de inversiones con características de sostenibilidad. Durante más de 28 años hemos trabajado para proteger el futuro de millones de personas con la convicción de un futuro sostenible.',
    categoriaCliente: [
      { descripcion: 'Cesante', contentful_id: '5fP153BoelxfRsusePVnBU' },
      { descripcion: 'Empleado', contentful_id: '2L498woyc1TQ1A3SpyUpxA' },
      { descripcion: 'Independiente', contentful_id: 'vt2OB7OniS8zFEgAS1qNz' }
    ],
    textoIntroductorio:
      'El futuro sostenible lo hacemos conservando nuestros recursos',
    tituloCorto: '¡Estamos comprometidos con un futuro sostenible!',
    updatedAt: '2021-02-08T16:32:31.340Z',
    urlSeo: 'novedad/futuro-sostenible',
    tipoBite: 'novedad',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
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
      title: 'futuros sostenibles'
    },
    tema: [
      {
        contentful_id: '7cTYlI6D258aUgSOhXfiTp',
        tituloCorto: 'Novedades y Beneficios'
      }
    ],
    nombreImagen: 'CT3C2 Todos los usuariosViviendaCuánto ahorrar AJUSTADO',
    contentful_id: '6SOdfejKD5VT2a7pb4fiTy'
  },
  {
    category: [
      { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
      { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' },
      {
        nombre: 'Pensiones Obligatorias',
        contentful_id: '45FVyiIWU70wBqFgR750SE'
      },
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    descripcioncorta:
      'Sabemos que para ti es importante acompañar a las personas que te ayudan en las labores del hogar, para que construyan su futuro y vivan un mejor mañana.',
    categoriaCliente: [
      { descripcion: 'Empleado', contentful_id: '2L498woyc1TQ1A3SpyUpxA' },
      { descripcion: 'Cesante', contentful_id: '5fP153BoelxfRsusePVnBU' },
      { descripcion: 'Independiente', contentful_id: 'vt2OB7OniS8zFEgAS1qNz' },
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    textoIntroductorio:
      'Acompaña a las personas que te ayudan en las labores del hogar. ¡Consigna sus Cesantías!',
    tituloCorto: 'Paga las de Cesantías de los empleados del hogar, aquí',
    updatedAt: '2021-02-04T17:14:44.956Z',
    urlSeo: 'cesantias/pago-de-cesantias-a-empleados-del-hogar',
    tipoBite: 'campaña',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/5ymmJfcHuFF0JgLsOIX42Q/09a361490542119d0d517d6da84334c9/Cesant__as_para_Empleados_del_hogar_GettyImages-1214479802.jpeg?w=800&q=50'
      },
      file: {
        fileName:
          'Cesantías para Empleados del hogar GettyImages-1214479802.jpeg'
      },
      description:
        'Mujer sentada en la sala de su casa, hace cuentas de cuánto debe pagarle de Cesantías a los empleados de su hogar',
      title:
        '¿No sabes cuánto debes pagar por las Cesantías de tus empleados del hogar?'
    },
    tema: [
      { contentful_id: '1bveIhWTIleo2K6PHMvDQO', tituloCorto: 'Generalidades' }
    ],
    nombreImagen: 'Cesantías para Empleados del hogar GettyImages 1214479802',
    contentful_id: 'qoAqkbabLqNr3eOcstzKk'
  },
  {
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    descripcioncorta:
      '¡Una meta es eso que quieres lograr! Para que sea fácil alcanzarlas, debes seleccionar propósitos claros, medibles y alcanzables. Cuando inicies el año es importante que tus metas estén divididas en categorías, así será más sencillo hacerles seguimiento.',
    categoriaCliente: [
      {
        contentful_id: '5fP153BoelxfRsusePVnBU',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Cesante'
      },
      {
        contentful_id: '2L498woyc1TQ1A3SpyUpxA',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Empleado'
      },
      {
        contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Independiente'
      },
      {
        contentful_id: '7lDDi92WQvINHDoyppiGG1',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por invalidez'
      },
      {
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por sobrevivencia'
      },
      {
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por vejez'
      },
      {
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Soy pensionado'
      },
      {
        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Conozco de Inversiones'
      },
      {
        contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Estoy Aprendiendo'
      }
    ],
    textoIntroductorio:
      'Selecciona propósitos claros, medibles y alcanzables. Conoce aquí cómo puedes hacerlo',
    tituloCorto:
      'Inicia tu ahorro 100% digital y cumple tus propósitos desde HOY',
    updatedAt: '2021-01-28T21:03:52.744Z',
    urlSeo: 'ahorro/cumplir-propositos',
    tipoBite: 'novedad',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/Z9W1vLLyqLZ5RmcJjo5Co/cc1ec57e8e8ffa57efa6e1c32ea6c788/2021_nueva_oportunidad_para_cumplir_propositos_GettyImages-1170547028.jpeg?w=800&q=50'
      },
      file: {
        fileName:
          '2021 nueva oportunidad para cumplir propositos GettyImages-1170547028.jpeg'
      },
      description:
        'Dos hombres jóvenes abrazados, sentados frente a un computador, buscan información sobre cómo ahorrar en Protección para alcanzar sus metas',
      title: '2021 nueva oportunidad para cumplir propósitos'
    },
    tema: [
      {
        contentful_id: '73qm7KPvufncQSOIIfRTUP',
        tituloCorto: 'Tips de ahorro'
      }
    ],
    nombreImagen:
      '2021 nueva oportunidad para cumplir propositos GettyImages 1170547028',
    contentful_id: '5GWZyQhTDwnhCHiyDoHH4b'
  },
  {
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      },
      { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    descripcioncorta:
      '¡Alcanzar tu sueño de tener casa propia sí es posible! Ahorrar en Protección es el primer paso para lograr este objetivo.',
    categoriaCliente: [
      {
        contentful_id: '5fP153BoelxfRsusePVnBU',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Cesante'
      },
      {
        contentful_id: '2L498woyc1TQ1A3SpyUpxA',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Empleado'
      },
      {
        contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Independiente'
      },
      {
        contentful_id: '7lDDi92WQvINHDoyppiGG1',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por invalidez'
      },
      {
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por sobrevivencia'
      },
      {
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por vejez'
      },
      {
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Soy pensionado'
      },
      {
        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Conozco de Inversiones'
      },
      {
        contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Estoy Aprendiendo'
      }
    ],
    textoIntroductorio:
      '¡Alcanzar tu sueño de tener casa propia sí es posible!',
    tituloCorto: 'Comprar vivienda y conocer todos los subsidios',
    updatedAt: '2021-01-27T13:53:56.978Z',
    urlSeo: 'ahorro-beneficio-vivienda',
    tipoBite: 'novedad',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/5C0jinLoHQkM2Te5LlpyoD/6c539ab12adf6804a440ed137e52b32a/Comprar_vivienda_y_conocer_todos_los_subsidios.jpeg?w=800&q=50'
      },
      file: { fileName: 'Comprar vivienda y conocer todos los subsidios.jpeg' },
      description:
        'Pareja, con su bebé en brazos, reciben asesoría acerca de todas las opciones que hay a la hora de comprar vivienda',
      title: '¿Cómo comprar vivienda y descubrir todos los subsidios?'
    },
    tema: [
      { contentful_id: '4yWCb44RYhXWgDL4wVzoCI', tituloCorto: 'Beneficios' },
      { contentful_id: '5ZGul9Foet8eSHjNSIRaU4', tituloCorto: 'Vivienda' }
    ],
    nombreImagen: 'Comprar vivienda y conocer todos los subsidios',
    contentful_id: '2ZDV5OhobOW7momvTib6SR'
  },
  {
    category: [
      { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    descripcioncorta:
      '¡Tener tu ahorro en Protección ahora te permite disfrutar de nuestra alianza con Vecindario para hacer realidad ese sueño de tener casa propia!',
    categoriaCliente: [
      { descripcion: 'Cesante', contentful_id: '5fP153BoelxfRsusePVnBU' },
      { descripcion: 'Empleado', contentful_id: '2L498woyc1TQ1A3SpyUpxA' },
      { descripcion: 'Independiente', contentful_id: 'vt2OB7OniS8zFEgAS1qNz' },
      { descripcion: 'Cesante', contentful_id: '5fP153BoelxfRsusePVnBU' },
      { descripcion: 'Empleado', contentful_id: '2L498woyc1TQ1A3SpyUpxA' },
      { descripcion: 'Independiente', contentful_id: 'vt2OB7OniS8zFEgAS1qNz' },
      {
        descripcion: 'Pensión por vejez',
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
      },
      {
        descripcion: 'Soy pensionado',
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
      }
    ],
    textoIntroductorio: 'Empieza HOY a proyectar tus sueños de vivienda',
    tituloCorto: 'Con Vecindario, tener casa propia sí es posible.',
    updatedAt: '2021-01-25T21:51:48.339Z',
    urlSeo: 'novedad/vecindario-proteccion',
    tipoBite: 'beneficio',
    type: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    cliente: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/3EtXtUgNPIkwgPNL2zlAjA/fa54b71fd98c1203beda235881a5623b/vecindario.jpg?w=800&q=50'
      },
      file: { fileName: 'vecindario.jpg' },
      description: 'Haz realidad tu sueño de tener casa propia',
      title: 'Alianza Vecindario - Protección '
    },
    tema: [
      { contentful_id: '7ERwcoqC6EVcZUUjjmSiHC', tituloCorto: 'Vivienda' }
    ],
    nombreImagen: 'vecindario',
    contentful_id: '3idU9aEVdgtfAmNIgyFBWM'
  },
  {
    urlSeo: 'ahorro/qiip-proteccion',
    textoIntroductorio:
      '¡Queremos acompañarte para que cumplas todos tus sueños!',
    descripcioncorta:
      'En Protección estamos comprometidos con asesorar y acompañar a nuestros clientes para que desde hoy tomen decisiones que les permitan estar cada vez más cerca del futuro que sueñan.',
    updatedAt: '2021-01-18T15:40:39.420Z',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    tituloCorto: 'Bienestar financiero con qiip y Protección',
    category: [{ nombre: 'Ahorro', contentful_id: '47oqc4NTZlwGOrMEThd6kE' }],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: {
        fileName: 'Bienestar financiero para todos con qiip y Protección.jpg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/5Bn8TMBEwLFJlrFHUDfg6H/f6818a8d4ca7cec167742f7d72d0af6e/Bienestar_financiero_para_todos_con_qiip_y_Protecci__n.jpg?w=800&q=50'
      },
      description: '',
      title: 'Bienestar financiero para todos con qiip y Protección'
    },
    tema: [
      { contentful_id: '4PbRzb1RHkGFM6z4YcuNbv', tituloCorto: 'Finanzas' }
    ],
    type: [
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' },
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
    ],
    cliente: [
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' },
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
    ],
    nombreImagen: 'Bienestar financiero para todos con qiip y Protección',
    tipoBite: 'producto',
    contentful_id: '6RecpTyU9umpCBhR7C9FGH'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    descripcioncorta:
      'Es momento de pensar y ejecutar. Te damos 5 tips para que afrontes retos financieros.',
    textoIntroductorio:
      'Es momento de pensar y ejecutar. Conoce aquí algunos tips',
    tituloCorto: '¿Cómo atender el reto financiero actual?',
    updatedAt: '2021-01-06T22:19:11.269Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro-afiliado-empresas-retofinanciero',
    tipoBite: 'educativo',
    type: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    cliente: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    imagenpequena: {
      file: {
        fileName:
          'como atender el reto financiero actual gettyimages-494326845-2048x2048.jpeg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/1Je5XqKe7zTUK8rYbGMq8o/5596bca0a4b2326814b55e12b947faf3/como_atender_el_reto_financiero_actual_gettyimages-494326845-2048x2048.jpeg?w=800&q=50'
      },
      description:
        'Padre e hija sonríen en su negocio familiar, reinventaron su empresa para atender el reto financiero',
      title: 'Negocio familiar afronta un reto financiero con 5 tips'
    },
    tema: [
      { contentful_id: '4PbRzb1RHkGFM6z4YcuNbv', tituloCorto: 'Finanzas' }
    ],
    nombreImagen:
      'como atender el reto financiero actual gettyimages 494326845 2048x2048',
    contentful_id: '6BUCawJvfstlsh1GNFOPZl'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    descripcioncorta:
      'Hoy en día llevar el control de tus finanzas es muy fácil. Conoce algunas aplicaciones que te permitirán administrar tu dinero, hacer seguimiento de tus gastos y tener una buena salud financiera',
    textoIntroductorio:
      'Llevar el control de tus finanzas es muy fácil. Conoce cómo aquí',
    tituloCorto: '4 Apps que ayudan con el control de tus finanzas',
    updatedAt: '2021-01-06T22:11:14.005Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro-controlfinanzas',
    tipoBite: 'educativo',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      file: {
        fileName:
          '4 apps que te ayudaran con el control de tus finanzas 5133918948-.jpeg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/4uHDhb6P4SrflSlJUA6f6K/d775a2f2567e024811622801698d300b/4_apps_que_te_ayudaran_con_el_control_de_tus_finanzas_5133918948-.jpeg?w=800&q=50'
      },
      description:
        'Hombre sonríe en su bicicleta, en su celular, descargó 4 apps para el control de sus finanzas',
      title:
        '4 aplicaciones para administrar tu dinero: Mobills, Splitwise, Tiendeo, Icoach'
    },
    tema: [
      { contentful_id: '4PbRzb1RHkGFM6z4YcuNbv', tituloCorto: 'Finanzas' }
    ],
    nombreImagen:
      '4 apps que te ayudaran con el control de tus finanzas 5133918948 ',
    contentful_id: '535cTVjJlMisArXFWxMz0l'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    descripcioncorta:
      'Únete ya a los retos que desde Protección hemos creado para ti y aprende cómo puedes mejorar tus finanzas. ¡Únete y genera hábitos financieros saludables en 21 días!',
    textoIntroductorio:
      '¡Únete a estos retos que desde Protección hemos creado para ti!',
    tituloCorto: '¡Toma el control de tus finanzas en 21 días!',
    updatedAt: '2021-01-06T22:10:13.671Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro/afiliado/retofinanzas',
    tipoBite: 'educativo',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      file: {
        fileName: 'toma el control de tus finanzas reto 21 dias 576473587.jpeg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/3WB3erbWaUJ0yDjBlV3hCD/73def6c5649fee112dee4f3b0df5fa15/toma_el_control_de_tus_finanzas_reto_21_dias_576473587.jpeg?w=800&q=50'
      },
      description:
        'Emprendedor acepta el reto financiero de Protección, busca mejorar sus finanzas',
      title:
        'Cuidar la salud financiera, depende de implementar pequeños hábitos'
    },
    tema: [
      { contentful_id: '4PbRzb1RHkGFM6z4YcuNbv', tituloCorto: 'Finanzas' }
    ],
    nombreImagen: 'toma el control de tus finanzas reto 21 dias 576473587',
    contentful_id: '1jtLjl6Z3r8aeiEpdQC5wE'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    descripcioncorta:
      '¿Cómo está tu relación con el dinero? Es momento de revisar y analizar tus hábitos, recuerda que el dinero debe cuidarse y valorarse.',
    textoIntroductorio:
      'Ingresa ahora y conoce técnicas básicas de finanzas personales.',
    tituloCorto: 'Libre soy, ¡me alcanza la quincena!',
    updatedAt: '2021-01-06T22:05:37.298Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro/afiliado/me-alcanza-la-quincena',
    tipoBite: 'educativo',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      file: { fileName: 'Libre-soy,-­me-alcanza-la-quincena 99967015.jpeg' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/59BwqTM51rLFE2zJ0KuJBL/a52d707790d491ac0d210e2c9b594dcc/Libre-soy_-__me-alcanza-la-quincena_99967015.jpeg?w=800&q=50'
      },
      description:
        'Emprendedora sonríe en su nuevo negocio, reflexiona sobre su relación con el dinero',
      title:
        'Libre soy, ¡me alcanza la quincena! Conoce técnicas básicas de finanzas personales'
    },
    tema: [
      {
        contentful_id: '73qm7KPvufncQSOIIfRTUP',
        tituloCorto: 'Tips de ahorro'
      }
    ],
    nombreImagen: 'Libre soy, ­me alcanza la quincena 99967015',
    contentful_id: '5zWdjadtQHGRoGX4AtfOg4'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    descripcioncorta:
      'Hay quienes ven las deudas como superheroínas que han llegado para sacarlos de una dificultad, mientras que para otros serán unas villanas despiadadas que pretenden quedarse con el patrimonio; todo dependerá del tipo de relación que establezcas con ellas.',
    textoIntroductorio:
      '¿Tú, qué tipo de relación tienes con las deudas? Ingresa ahora',
    tituloCorto: 'Superheroínas o villanas. ¿Qué son las deudas?',
    updatedAt: '2021-01-06T22:04:56.752Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro/afiliado/deudas',
    tipoBite: 'educativo',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      file: {
        fileName:
          'superheroinas o villandas .-Qu‚-son-las-deudas-para-ti 1126824182.jpeg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/2bTce9puO243u4jRUcHYd4/e59924916791de22e7e7a7d2c295a453/superheroinas_o_villandas_.-Qu___-son-las-deudas-para-ti_1126824182.jpeg?w=800&q=50'
      },
      description:
        'Mujer en el escritorio de su cocina, hace un listado de sus deudas y crea un plan de ahorro',
      title: 'Superheroínas o villanas. ¿Qué son las deudas para ti?'
    },
    tema: [
      {
        contentful_id: '73qm7KPvufncQSOIIfRTUP',
        tituloCorto: 'Tips de ahorro'
      }
    ],
    nombreImagen:
      'superheroinas o villandas . Qu‚ son las deudas para ti 1126824182',
    contentful_id: '5E3DqDPQ2QNg5IYgXJKQHU'
  },
  {
    urlSeo: 'empresas-ahorro-comision',
    textoIntroductorio:
      'Los Planes Instituciones tienen una comisión, conócela',
    descripcioncorta:
      'La comisión que cobra Protección S.A. por la administración del Plan Institucional es diferencial de acuerdo con el valor total del Plan',
    updatedAt: '2021-01-06T22:02:26.502Z',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    tituloCorto: 'Comisión de administración de los Planes',
    category: [{ nombre: 'Ahorro', contentful_id: '47oqc4NTZlwGOrMEThd6kE' }],
    textoCallToActionBite: 'Quiero saber más',
    imagenpequena: {
      file: {
        fileName:
          'comisión de administración de los Planes Institucionales GettyImages-1186093106.jpeg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/3KVulGAhMbP2WBDGpAbX8v/4cb2f907c334c04f7d84546629203fbc/comisi__n_de_administraci__n_de_los_Planes_Institucionales_GettyImages-1186093106.jpeg?w=800&q=50'
      },
      description:
        'Mujer en un concesionario recibe asesoría sobre la compra de un carro nuevo',
      title:
        '¿Cuál es la comisión de administración de los Planes Institucionales?'
    },
    tema: [
      {
        contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
        tituloCorto: 'Planes Institucionales'
      }
    ],
    type: [
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' },
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
    ],
    cliente: [
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' },
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
    ],
    nombreImagen:
      'comisión de administración de los Planes Institucionales GettyImages 1186093106',
    tipoBite: 'producto',
    contentful_id: '7piMAz5Eq1wOc54fiezEdo'
  },
  {
    urlSeo: 'ahorro/afiliado/mas-proteccion',
    textoIntroductorio:
      'Construye desde el presente un mejor ingreso para tu futuro.',
    descripcioncorta:
      '+Protección, es un ahorro para construir desde el presente un mejor ingreso para tu futuro, así podrás mantener tu calidad de vida al momento de la pensión. Con aportes desde 20 mil pesos mensuales podrás tener un mayor ingreso en el futuro.',
    updatedAt: '2021-01-06T21:59:39.580Z',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    tituloCorto: '+Protección',
    category: [
      { nombre: '+Protección', contentful_id: '4dkf3aLiU6E11Wp5tbXqT3' }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: { fileName: 'IMG-Des_+prote.png' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/6paOGTjZIjdx5RI2o0znF5/4f21d5c2f84b5b0e81a38bc3c7074a7b/IMG-Des__prote.png?w=800&q=50'
      },
      description: '',
      title: '+Protección'
    },
    tema: [
      {
        contentful_id: '3SXDBr091IkZ03dGOBOS6x',
        tituloCorto: 'Soluciones de ahorro'
      }
    ],
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    nombreImagen: 'IMG Des+prote',
    tipoBite: 'producto',
    contentful_id: '2Bn0l3tKFkLtewkIZwWh1B'
  },
  {
    urlSeo: 'ahorro-mi-reserva',
    textoIntroductorio: 'Conoce de qué se trata y ¡comienza tu ahorro!',
    descripcioncorta:
      'Es un producto de nuestro Fondo de Pensión  Voluntaria, con el que mes a mes te acercarás a eso que tanto quieres',
    updatedAt: '2021-01-06T21:58:09.085Z',
    categoriaCliente: [
      {
        contentful_id: '5fP153BoelxfRsusePVnBU',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Cesante'
      },
      {
        contentful_id: '2L498woyc1TQ1A3SpyUpxA',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Empleado'
      },
      {
        contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Independiente'
      },
      {
        contentful_id: '7lDDi92WQvINHDoyppiGG1',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por invalidez'
      },
      {
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por sobrevivencia'
      },
      {
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por vejez'
      },
      {
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Soy pensionado'
      },
      {
        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Conozco de Inversiones'
      },
      {
        contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Estoy Aprendiendo'
      }
    ],
    tituloCorto: '¡Mi Reserva Protección!',
    category: [
      { nombre: 'Mi Reserva', contentful_id: '18bfSEqhamhiOHQeS35Wpw' }
    ],
    textoCallToActionBite: 'Quiero saber más',
    imagenpequena: {
      file: { fileName: 'IMG-Des_MiReserva.png' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/3kqVyzi0TTgbCubJg6dvht/f10a6850d88fce2eee5639c800f5d53e/IMG-Des_MiReserva.png?w=800&q=50'
      },
      description: '',
      title: 'Mi Reserva'
    },
    tema: [
      {
        contentful_id: '3SXDBr091IkZ03dGOBOS6x',
        tituloCorto: 'Soluciones de ahorro'
      }
    ],
    type: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    cliente: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    nombreImagen: 'IMG DesMiReserva',
    tipoBite: 'producto',
    contentful_id: '12YCBJYldaKys0PKYZ1prN'
  },
  {
    urlSeo: 'ahorro/hijos',
    textoIntroductorio:
      'Conoce de qué se trata. ¡Empieza tu ahorro y asegura su futuro!',
    descripcioncorta:
      'Protección Hijos es el plan de ahorro flexible y asegurable que les abre a tus hijos las puertas a un mundo de posibilidades. Con un sencillo esfuerzo que hagas desde hoy, empiezas a asegurar la educación de tus hijos y haces realidad sus proyectos.',
    updatedAt: '2021-01-06T21:44:02.825Z',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    tituloCorto: 'Protección Hijos',
    category: [
      { nombre: 'Protección Hijos', contentful_id: '017vFbXOC94MeBLY4R44tx' }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: { fileName: 'IMG-Des_Hijos.png' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/2OA1vKMRbE5eOa2qgFLfVH/19bbe904678bd8d830bb8a021b2d21d7/IMG-Des_Hijos.png?w=800&q=50'
      },
      description: '',
      title: 'Protección Hijos'
    },
    tema: [
      {
        contentful_id: '3SXDBr091IkZ03dGOBOS6x',
        tituloCorto: 'Soluciones de ahorro'
      }
    ],
    type: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    cliente: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    nombreImagen: 'IMG DesHijos',
    tipoBite: 'producto',
    contentful_id: '4lvr3LTRUqP7Oq8jYzPhOa'
  },
  {
    urlSeo: 'ahorro-planesinstitucionales',
    textoIntroductorio: 'Conoce de qué se trata. ¡Empieza tu ahorro!',
    descripcioncorta:
      'Son planes de ahorro contributivo, mediante los cuales las empresas otorgan beneficios previamente definidos a favor de sus colaboradores. Así mismo, permiten que los partícipes también realicen aportes para alcanzar las metas que se contemplan en el plan.',
    updatedAt: '2021-01-06T21:42:08.617Z',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    tituloCorto: 'Planes Institucionales Protección',
    category: [
      {
        nombre: 'Planes Institucionales',
        contentful_id: '4FMB0tMDCxi8pCb9IvpGj'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: { fileName: 'IMG-Des_Planes.png' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/2aXkT6eY0rE1n6xTbN8kqH/1421b6295ea03811c7c805c8547fbbd7/IMG-Des_Planes.png?w=800&q=50'
      },
      description: '',
      title: 'Planes Institucionales'
    },
    tema: [
      {
        contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
        tituloCorto: 'Planes Institucionales'
      },
      {
        contentful_id: '3SXDBr091IkZ03dGOBOS6x',
        tituloCorto: 'Soluciones de ahorro'
      }
    ],
    type: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    cliente: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    nombreImagen: 'IMG DesPlanes',
    tipoBite: 'producto',
    contentful_id: '6M7Vwv19Lm4giGsetgGfhM'
  },
  {
    urlSeo: 'ahorro/productos-complementarios-leasing-habitacional',
    textoIntroductorio:
      'Financia la adquisición, construcción o reforma de tu vivienda',
    descripcioncorta:
      'Con esta solución podrás financiar la adquisición, construcción o reforma de vivienda nueva o usada; la cual queda a nombre del comprador y con hipoteca en primer grado al banco.',
    updatedAt: '2021-01-06T21:36:39.122Z',
    categoriaCliente: [
      {
        contentful_id: '5fP153BoelxfRsusePVnBU',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Cesante'
      },
      {
        contentful_id: '2L498woyc1TQ1A3SpyUpxA',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Empleado'
      },
      {
        contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Independiente'
      },
      {
        contentful_id: '7lDDi92WQvINHDoyppiGG1',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por invalidez'
      },
      {
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por sobrevivencia'
      },
      {
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por vejez'
      },
      {
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Soy pensionado'
      },
      {
        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Conozco de Inversiones'
      },
      {
        contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Estoy Aprendiendo'
      }
    ],
    tituloCorto: 'Leasing habitacional Bancolombia ¡Conócelo!',
    category: [
      {
        nombre: 'Leasing habitacional Bancolombia',
        contentful_id: '4e3djROf1Dr7Jfogj7iSOi'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: { fileName: 'CT3C1-Empleados_Vivienda_Cómo-usarlas-AJUSTADO.jpeg' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/5tjU31I6BsJXDlVRu7bTZV/799f26e382b47bd99b7c28ba217edb43/CT3C1-Empleados_Vivienda_Co__mo-usarlas-AJUSTADO.jpeg?w=800&q=50'
      },
      description:
        'Esposos sentados en el piso de una habitación recién pintada, leen sobre cesantías para vivienda',
      title: 'Cómo puedo usar las cesantías para vivienda si soy empleado'
    },
    tema: [
      {
        contentful_id: '3gLW7AefhL3r7XZA74f1lr',
        tituloCorto: 'Créditos y seguros'
      }
    ],
    type: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    cliente: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    nombreImagen: 'CT3C1 EmpleadosViviendaCómo usarlas AJUSTADO',
    tipoBite: 'producto',
    contentful_id: '1rn3OY1LM2bylydo88XeKj'
  },
  {
    urlSeo: 'ahorro/productos-complementarios-credito-vivienda',
    textoIntroductorio:
      'Haz que tu proyecto de vivienda propia se convierta en realidad.',
    descripcioncorta:
      'Haz que tu proyecto de vivienda propia se convierta en realidad. Con esta solución podrás financiar la adquisición, construcción o reforma de vivienda nueva o usada; la cual queda a nombre del comprador y con hipoteca en primer grado al banco.',
    updatedAt: '2021-01-06T21:36:09.264Z',
    categoriaCliente: [
      {
        contentful_id: '5fP153BoelxfRsusePVnBU',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Cesante'
      },
      {
        contentful_id: '2L498woyc1TQ1A3SpyUpxA',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Empleado'
      },
      {
        contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Independiente'
      },
      {
        contentful_id: '7lDDi92WQvINHDoyppiGG1',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por invalidez'
      },
      {
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por sobrevivencia'
      },
      {
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por vejez'
      },
      {
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Soy pensionado'
      },
      {
        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Conozco de Inversiones'
      },
      {
        contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Estoy Aprendiendo'
      }
    ],
    tituloCorto: 'Crédito para vivienda Bancolombia. ¡Conócelo!',
    category: [
      {
        nombre: 'Crédito para vivienda Bancolombia',
        contentful_id: 'JqUxWGT2p4bwRNZli6FV3'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: { fileName: 'CT3C4-Empleado_Vivienda_Retiro-AJUSTADO.png' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/53FZItBbJT3d2qUailJ9ri/34157f56697be5c70831e3de0559b874/CT3C4-Empleado_Vivienda_Retiro-AJUSTADO.png?w=800&q=50'
      },
      description: '',
      title: 'como retirar tus cesantias para vivienda'
    },
    tema: [
      {
        contentful_id: '3gLW7AefhL3r7XZA74f1lr',
        tituloCorto: 'Créditos y seguros'
      }
    ],
    type: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    cliente: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    nombreImagen: 'CT3C4 EmpleadoViviendaRetiro AJUSTADO',
    tipoBite: 'producto',
    contentful_id: '4dSE5dBqXkj1OguNJk7tcp'
  },
  {
    urlSeo: 'ahorro/productos-complementarios-credito-con-pignoracion',
    textoIntroductorio: 'Accede a créditos de libre destino con Bancolombia',
    descripcioncorta:
      'La pignoración de aportes voluntarios le permite a los afiliados de Protección acceder a créditos de libre destino con Bancolombia, otorgando como garantía de dicho crédito los aportes que tenga el afiliado en el Fondo de Pensiones Voluntarias',
    updatedAt: '2021-01-06T21:35:33.377Z',
    categoriaCliente: [
      {
        contentful_id: '5fP153BoelxfRsusePVnBU',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Cesante'
      },
      {
        contentful_id: '2L498woyc1TQ1A3SpyUpxA',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Empleado'
      },
      {
        contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Independiente'
      },
      {
        contentful_id: '7lDDi92WQvINHDoyppiGG1',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por invalidez'
      },
      {
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por sobrevivencia'
      },
      {
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por vejez'
      },
      {
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Soy pensionado'
      },
      {
        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Conozco de Inversiones'
      },
      {
        contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Estoy Aprendiendo'
      }
    ],
    tituloCorto: 'Crédito con Pignoración de Pensiones Voluntarias',
    category: [
      {
        nombre: 'Crédito de consumo con pignoración',
        contentful_id: 'IBMCOurBRnD4pht9Od8Wo'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: { fileName: 'IMG-CredtPig.png' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/1i1t8DEbdr597Ye23UAowL/bc59e437b9a1e73e7c94903ee00c58f3/IMG-CredtPig.png?w=800&q=50'
      },
      description: '',
      title: 'Crédito de consumo con Pignoración de Pensiones Voluntarias'
    },
    tema: [
      {
        contentful_id: '3gLW7AefhL3r7XZA74f1lr',
        tituloCorto: 'Créditos y seguros'
      }
    ],
    type: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    cliente: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    nombreImagen: 'IMG CredtPig',
    tipoBite: 'producto',
    contentful_id: 'LOKbtCdPsOkXRPXCGbjHE'
  },
  {
    urlSeo: 'ahorro/productos-complementarios-vive-sura',
    textoIntroductorio:
      '¡Decide HOY asegurarle a tu familia un capital de respaldo!',
    descripcioncorta:
      '¡Decide HOY asegurarle a tu familia un capital de respaldo en caso de fallecimiento, invalidez o enfermedad grave! Las decisiones que tomas cada día las haces pensando en tu bienestar y en el de los que más quieres.',
    updatedAt: '2021-01-06T21:09:29.453Z',
    categoriaCliente: [
      {
        contentful_id: '5fP153BoelxfRsusePVnBU',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Cesante'
      },
      {
        contentful_id: '2L498woyc1TQ1A3SpyUpxA',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Empleado'
      },
      {
        contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Independiente'
      },
      {
        contentful_id: '7lDDi92WQvINHDoyppiGG1',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por invalidez'
      },
      {
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por sobrevivencia'
      },
      {
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por vejez'
      },
      {
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Soy pensionado'
      },
      {
        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Conozco de Inversiones'
      },
      {
        contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Estoy Aprendiendo'
      }
    ],
    tituloCorto: '¡Conoce el Plan Vive Sura y asegúrate HOY!',
    category: [
      { nombre: 'Plan Vive Sura', contentful_id: '5CWwfkVR8AkxeilNW4iU48' }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: { fileName: 'IMG-Des_PlanViveSura.png' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/1PU9ZfNcV4TJjBcGOITAdw/9d4f160b92ef052dcf627b0f2cc6fcb0/IMG-Des_PlanViveSura.png?w=800&q=50'
      },
      description:
        'Madre e hija sonriendo porque están aseguradas con el plan Vive Sura',
      title: 'Plan Vive Sura'
    },
    tema: [
      {
        contentful_id: '3gLW7AefhL3r7XZA74f1lr',
        tituloCorto: 'Créditos y seguros'
      }
    ],
    type: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    cliente: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    nombreImagen: 'IMG DesPlanViveSura',
    tipoBite: 'producto',
    contentful_id: '7pbqYWDXBJ1v4Zsxfr49UL'
  },
  {
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    descripcioncorta:
      'El ahorro es un hábito que brinda seguridad cuando hay incertidumbre. Las motivaciones o estrategias para crear hábitos de ahorro varían de acuerdo con las culturas y lo que se enseña en cada una de estas. A continuación, te contamos un poco más:',
    categoriaCliente: [
      {
        contentful_id: '5fP153BoelxfRsusePVnBU',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Cesante'
      },
      {
        contentful_id: '2L498woyc1TQ1A3SpyUpxA',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Empleado'
      },
      {
        contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Independiente'
      },
      {
        contentful_id: '7lDDi92WQvINHDoyppiGG1',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por invalidez'
      },
      {
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por sobrevivencia'
      },
      {
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por vejez'
      },
      {
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Soy pensionado'
      },
      {
        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Conozco de Inversiones'
      },
      {
        contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Estoy Aprendiendo'
      }
    ],
    textoIntroductorio:
      'Ahorrar es un hábito que brinda seguridad. Es momento de iniciar:',
    tituloCorto: 'Un viaje por la cultura del ahorro',
    updatedAt: '2021-01-06T20:58:10.844Z',
    urlSeo: 'ahorro/afiliado/un-viaje-por-la-cultura-del-ahorro',
    tipoBite: 'novedad',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/2Hoe7ZglVXvooYxurm4ad/f9c81896199153f393456cef85ff2fd3/1_Un_viaje_por_la_cultura_del_ahorro.png?w=800&q=50'
      },
      file: { fileName: '1 Un viaje por la cultura del ahorro.png' },
      description: '',
      title: 'Un viaje por la cultura del ahorro'
    },
    tema: [
      { contentful_id: '2tdNwtoxba1KzfELIhHS86', tituloCorto: 'Novedades' }
    ],
    nombreImagen: '1 Un viaje por la cultura del ahorro',
    contentful_id: '5pqMkp3LUtmxcXgzycCzpg'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    descripcioncorta:
      'Si conoces el estado actual de tus finanzas, estás en camino a implementar buenos hábitos financieros y tienes un plan para esto, es importante que te traces metas y objetivos para así tener el control.',
    textoIntroductorio:
      'Ten claro tu objetivo actual, sin perder de vista el largo plazo.',
    tituloCorto: '¡Fortalece tu estabilidad financiera!',
    updatedAt: '2021-01-06T20:52:37.847Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro/afiliado/estabilidad-financiera',
    tipoBite: 'educativo',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      file: { fileName: 'Fortalece tu estabilidad financiera 538568444.jpeg' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/62UYcZ9u4ShXDdFKS1sAg1/0ddb4b4e4529a0940c2cb7ae7d2695cd/Fortalece_tu_estabilidad_financiera_538568444.jpeg?w=800&q=50'
      },
      description:
        'Ama de casa, estudia los hábitos financieros de la familia, para tener mejor control de las finanzas',
      title:
        'Mantener a flote nuestras finanzas depende de tomar decisiones estratégicas'
    },
    tema: [
      { contentful_id: '4PbRzb1RHkGFM6z4YcuNbv', tituloCorto: 'Finanzas' }
    ],
    nombreImagen: 'Fortalece tu estabilidad financiera 538568444',
    contentful_id: '17T6PgoJNtGr4dbleOo9p0'
  },
  {
    urlSeo: 'ahorro/digital',
    textoIntroductorio:
      'Ahorra desde $20.000 pesos de manera 100% Digital en Protección',
    descripcioncorta:
      'Queremos entregarte un plan de ahorro que se ajusta a tus necesidades; con el que podrías tener una ganancia sobre tu dinero ahorrado. Ahorra desde $20.000 pesos, de manera 100% Digital en Protección y comienza a cumplir todas tus metas, ¡es muy fácil!',
    updatedAt: '2021-01-05T14:27:36.665Z',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    tituloCorto: 'Ahorro 100% Digital',
    category: [
      {
        nombre: 'Ahorro 100% Digital',
        contentful_id: '13fk4wY88IB1fA9aeOB0qM'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: { fileName: 'IMG-Des_ahorro.png' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/7z64r9Oc6tLnwo8zIHOKPO/33bfb5339a04a5b4e2a785d1c53450ab/IMG-Des_ahorro.png?w=800&q=50'
      },
      description: '',
      title: 'Ahorro 100% Digital'
    },
    tema: [
      {
        contentful_id: '3SXDBr091IkZ03dGOBOS6x',
        tituloCorto: 'Soluciones de ahorro'
      }
    ],
    type: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    cliente: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    nombreImagen: 'IMG Desahorro',
    tipoBite: 'producto',
    contentful_id: '6qfrokQ9v5ZcznecbB6zJG'
  },
  {
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    descripcioncorta:
      'Tener casa propia es uno de los grandes sueños de muchas personas. ¡Y una poderosa motivación para tomar el control de tus finanzas!',
    categoriaCliente: [
      {
        contentful_id: '5fP153BoelxfRsusePVnBU',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Cesante'
      },
      {
        contentful_id: '2L498woyc1TQ1A3SpyUpxA',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Empleado'
      },
      {
        contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Independiente'
      },
      {
        contentful_id: '7lDDi92WQvINHDoyppiGG1',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por invalidez'
      },
      {
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por sobrevivencia'
      },
      {
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por vejez'
      },
      {
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Soy pensionado'
      },
      {
        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Conozco de Inversiones'
      },
      {
        contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Estoy Aprendiendo'
      }
    ],
    textoIntroductorio:
      'Con nuestros aliados y productos, conoce cómo puedes lograrlo',
    tituloCorto: 'Haz realidad tu sueño de tener vivienda propia',
    updatedAt: '2020-12-30T17:29:48.273Z',
    urlSeo: 'ahorro/haz-realidad-tu-sueno-de-tener-vivienda-propia',
    tipoBite: 'beneficio',
    type: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    cliente: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/12sFWbODzAkd5peNLUKkr7/3caf1ed89b59974844878967c37b1d99/Haz_realidad_tu_sue__o_de_tener_vivienda_propia_GettyImages-638711690.jpeg?w=800&q=50'
      },
      file: {
        fileName:
          'Haz realidad tu sueño de tener vivienda propia GettyImages-638711690.jpeg'
      },
      description:
        'Pareja sonríe en su nueva casa, posible gracias a que establecieron un plan de ahorro',
      title: 'Haz realidad tu sueño de tener casa propia'
    },
    tema: [
      { contentful_id: '7ERwcoqC6EVcZUUjjmSiHC', tituloCorto: 'Vivienda' }
    ],
    nombreImagen:
      'Haz realidad tu sueño de tener vivienda propia GettyImages 638711690',
    contentful_id: '3UrKTreATDqyTlCMpu69AP'
  },
  {
    category: [
      { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    descripcioncorta:
      '“Vendemos Casas con Descuento” es el primer Outlet de vivienda en Colombia. En Protección queremos acompañarte para que tomes el control de tus finanzas y cumplas tus metas, por eso creamos una alianza especial.',
    categoriaCliente: [
      { descripcion: 'Cesante', contentful_id: '5fP153BoelxfRsusePVnBU' },
      { descripcion: 'Empleado', contentful_id: '2L498woyc1TQ1A3SpyUpxA' },
      { descripcion: 'Independiente', contentful_id: 'vt2OB7OniS8zFEgAS1qNz' },
      {
        descripcion: 'Pensión por vejez',
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO'
      },
      {
        descripcion: 'Soy pensionado',
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF'
      }
    ],
    textoIntroductorio:
      'Conoce "Vendemos Casas con Descuento", el primer Outlet de vivienda en Colombia.',
    tituloCorto:
      '¡Conoce nuestra nueva alianza! Haz realidad tu sueño de vivienda',
    updatedAt: '2020-12-30T16:19:58.194Z',
    urlSeo: 'ahorro/beneficio-alianza-casas-con-descuentos',
    tipoBite: 'beneficio',
    type: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    cliente: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/28gxMJQ5RwaE0Iat2VPH4z/df1b36a6ffa132f1b8cc027433fb7f77/Conoce_nuestra_nueva_alianza_1093907274.jpeg?w=800&q=50'
      },
      file: { fileName: 'Conoce nuestra nueva alianza 1093907274.jpeg' },
      description:
        'Familia reunida en la sala de su nueva casa. Recibieron descuentos por estar afiliados a Protección',
      title: 'Nueva Alianza: "Vendemos Casas con Descuento" y Protección'
    },
    tema: [
      { contentful_id: '7ERwcoqC6EVcZUUjjmSiHC', tituloCorto: 'Vivienda' }
    ],
    nombreImagen: 'Conoce nuestra nueva alianza 1093907274',
    contentful_id: '6RmCigcRK5cXT5V3QLjyT7'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    descripcioncorta:
      'Siempre te dicen que ahorrar es bueno, que vale la pena, que hay que pensar en el futuro; pero, tal vez, no conozcas un beneficio adicional: en Colombia se premia el ahorro. Así es, ¡si ahorras puedes llegar a contar con beneficios tributarios!',
    textoIntroductorio:
      '¡Conoce los beneficios tributarios que puedes obtener!',
    tituloCorto: 'Consejos para obtener beneficios tributarios',
    updatedAt: '2020-12-16T16:05:39.324Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro-beneficiostributarios',
    tipoBite: 'educativo',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      file: {
        fileName:
          'Consejos-para-obtener-beneficios-tributarios-con-tu-ahorro 1221903461.jpeg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/714jMILXFRwzqDT8LjHtMz/fa7f1e597d35e21d38e0b2a8e3ed2fb7/Consejos-para-obtener-beneficios-tributarios-con-tu-ahorro_1221903461.jpeg?w=800&q=50'
      },
      description:
        'Empresaria conoce cómo obtener beneficios tributarios con su ahorro en Protección',
      title:
        'Consejos para obtener beneficios tributarios con tu ahorro. En Colombia, se premia el ahorro con Protección'
    },
    tema: [
      { contentful_id: '4yWCb44RYhXWgDL4wVzoCI', tituloCorto: 'Beneficios' }
    ],
    nombreImagen:
      'Consejos para obtener beneficios tributarios con tu ahorro 1221903461',
    contentful_id: '2el4sL7ZP9VGxRibLSYmKu'
  },
  {
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    descripcioncorta:
      'Es el momento de despertar tu ingenio financiero, encontrar el camino ideal para reinventarte y seguir creciendo junto a tus sueños.',
    categoriaCliente: [
      {
        contentful_id: '5fP153BoelxfRsusePVnBU',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Cesante'
      },
      {
        contentful_id: '2L498woyc1TQ1A3SpyUpxA',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Empleado'
      },
      {
        contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Independiente'
      },
      {
        contentful_id: '7lDDi92WQvINHDoyppiGG1',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por invalidez'
      },
      {
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por sobrevivencia'
      },
      {
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por vejez'
      },
      {
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Soy pensionado'
      },
      {
        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Conozco de Inversiones'
      },
      {
        contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Estoy Aprendiendo'
      }
    ],
    textoIntroductorio:
      'Es el momento de despertar tu ingenio financiero. Ingresa ahora',
    tituloCorto: 'Pasar de la preocupación a la acción',
    updatedAt: '2020-12-09T21:00:08.103Z',
    urlSeo: 'ahorro-afiliado-preoupacionalaaccion',
    tipoBite: 'novedad',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/4kCOqqVcUNU6XpHPB2Awyr/8b22973798238acd90b7a42b43dc77dc/pasar-de-la-preocupaci___n-a-la-accion_468695446.jpeg?w=800&q=50'
      },
      file: { fileName: 'pasar-de-la-preocupaciขn-a-la-accion 468695446.jpeg' },
      description:
        'Dos diseñadores, en su empresa, buscan opciones y soluciones para despertar su ingenio financiero',
      title:
        'En tiempos de incertidumbre, hay que pasar de la preocupación a la acción'
    },
    tema: [
      { contentful_id: '2tdNwtoxba1KzfELIhHS86', tituloCorto: 'Novedades' }
    ],
    nombreImagen: 'pasar de la preocupaciขn a la accion 468695446',
    contentful_id: '7pcPW4Q3tv1YhGCFQ97NP8'
  },
  {
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    descripcioncorta:
      'En el siguiente infográfico podrás conocer qué son las tasas de interés, los tipos de tasas que hay, algunos consejos prácticos y mucho más. Antes de iniciar, recuerda: tu estabilidad económica depende de las decisiones que tomes.',
    categoriaCliente: [
      {
        contentful_id: '5fP153BoelxfRsusePVnBU',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Cesante'
      },
      {
        contentful_id: '2L498woyc1TQ1A3SpyUpxA',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Empleado'
      },
      {
        contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Independiente'
      },
      {
        contentful_id: '7lDDi92WQvINHDoyppiGG1',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por invalidez'
      },
      {
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por sobrevivencia'
      },
      {
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por vejez'
      },
      {
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Soy pensionado'
      },
      {
        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Conozco de Inversiones'
      },
      {
        contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Estoy Aprendiendo'
      }
    ],
    textoIntroductorio:
      'Conoce qué son las tasas de interés, los tipos de tasas que hay y mucho más.',
    tituloCorto: '¿Impacta mis finanzas que hayan bajado las tasas de interés?',
    updatedAt: '2020-11-10T15:23:41.712Z',
    urlSeo: 'ahorro/tasas-de-interes',
    tipoBite: 'novedad',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/6VB2XqqXmDdUOlp7F4csgY/5849af46aef4a16c848ae3f1b720cded/Impacta_mis_finanzas_que_hayan_bajado_las_tasas_de_inter__s_GettyImages-677905574.jpeg?w=800&q=50'
      },
      file: {
        fileName:
          'Impacta mis finanzas que hayan bajado las tasas de interés GettyImages-677905574.jpeg'
      },
      description:
        'Dos amigas conversan en la sala de la casa sobre la importancia de la planeación financiera',
      title: '¿Impacta mis finanzas que hayan bajado las tasas de interés?'
    },
    tema: [
      { contentful_id: '4PbRzb1RHkGFM6z4YcuNbv', tituloCorto: 'Finanzas' }
    ],
    nombreImagen:
      'Impacta mis finanzas que hayan bajado las tasas de interés GettyImages 677905574',
    contentful_id: '7trmAT0XHkH0oFCWpnUCtw'
  },
  {
    textoCallToActionBite: 'Quiero saber más',
    categoriaCliente: [
      {
        contentful_id: '5fP153BoelxfRsusePVnBU',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Cesante'
      },
      {
        contentful_id: '2L498woyc1TQ1A3SpyUpxA',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Empleado'
      },
      {
        contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Independiente'
      },
      {
        contentful_id: '7lDDi92WQvINHDoyppiGG1',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por invalidez'
      },
      {
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por sobrevivencia'
      },
      {
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por vejez'
      },
      {
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Soy pensionado'
      },
      {
        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Conozco de Inversiones'
      },
      {
        contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Estoy Aprendiendo'
      }
    ],
    descripcioncorta:
      'En Protección nos preocupamos por tu salud financiera y el bienestar de tu familia, por eso te presentamos una serie de recomendaciones para cuidar tus ahorros ',
    textoIntroductorio:
      'Conoce cómo cuidar los ahorros en tiempos de coronavirus',
    tituloCorto: 'Durante la pandemia cuida tus ahorros',
    updatedAt: '2020-11-05T23:06:24.870Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro/durante-la-pandemia-cuida-tus-ahorros',
    tipoBite: 'educativo',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      file: { fileName: 'Durante la pandemia cuida tus ahorros.png' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/OpCVG0hIvbORrkUZXUUPF/6c762a0724c185ae1d2ea71013d0264d/Durante_la_pandemia_cuida_tus_ahorros.png?w=800&q=50'
      },
      description: '',
      title: 'Durante la pandemia cuida tus ahorros '
    },
    tema: [
      {
        contentful_id: '73qm7KPvufncQSOIIfRTUP',
        tituloCorto: 'Tips de ahorro'
      }
    ],
    nombreImagen: 'Durante la pandemia cuida tus ahorros',
    contentful_id: '4218R6wZczlnVOkAAtqmIS'
  },
  {
    urlSeo: 'ahorro-siempreactivo',
    textoIntroductorio: 'Conoce de qué se trata. ¡Empieza tu ahorro!',
    descripcioncorta:
      'Siempre Activo es una solución de ahorro voluntario para personas mayores de 55 años, enfocada en los pilares claves del envejecimiento activo: bienestar financiero, participación social y disfrute productivo del tiempo libre.',
    updatedAt: '2020-10-28T20:24:08.137Z',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    tituloCorto: 'Siempre Activo',
    category: [
      { nombre: 'Siempre Activo', contentful_id: '6CyAjQdjyj6ktH9uokULY8' }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: { fileName: 'IMG-Des_Activo.png' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/emdPDpOsIx3n0lN1OhGM2/23fa17b41ff8e27be55e4ff1cc88ff0a/IMG-Des_Activo.png?w=800&q=50'
      },
      description: '',
      title: 'Siempre Activo'
    },
    tema: [
      {
        contentful_id: '3SXDBr091IkZ03dGOBOS6x',
        tituloCorto: 'Soluciones de ahorro'
      }
    ],
    type: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    cliente: [
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' },
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' }
    ],
    nombreImagen: 'IMG DesActivo',
    tipoBite: 'producto',
    contentful_id: '2O1HpSHyL6B9iICv4muS9A'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    descripcioncorta:
      'Sabemos que tener el control de tus finanzas es clave para alcanzar tus sueños; por eso diseñamos, en la Universidad Protección, un curso de Finanzas Personales que te permitirá aprender cómo optimizar gastos y mucho más. ¡Anímate a hacerlo!',
    textoIntroductorio:
      '¡En Universidad Protección tenemos cursos diseñados para ti!',
    tituloCorto: '¡Realiza el curso gratuito: Finanzas Personales!',
    updatedAt: '2020-10-28T20:01:05.002Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro/curso-finanzas-personales',
    tipoBite: 'educativo',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      file: { fileName: 'curso finanzas personales.png' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/6unQMEyrLmI9GSoIJUsI8u/e2a0bce94ed1c0ce8129ba0455951b26/curso_finanzas_personales.png?w=800&q=50'
      },
      description: '',
      title: 'Curso finanzas personales'
    },
    tema: [
      {
        contentful_id: '73qm7KPvufncQSOIIfRTUP',
        tituloCorto: 'Tips de ahorro'
      },
      { contentful_id: '2tdNwtoxba1KzfELIhHS86', tituloCorto: 'Novedades' }
    ],
    nombreImagen: 'curso finanzas personales',
    contentful_id: '3AD1AvKVKtBHuXqXTIK4K4'
  },
  {
    urlSeo: 'ahorro/plan-institucional-mutuocolombia',
    textoIntroductorio:
      '¿Eres empleado de Bancolombia? Conoce ahora mismo este beneficio',
    descripcioncorta:
      '¿Eres empleado de Bancolombia? Conoce ahora mismo este beneficio, afíliate y obtén el 50% de tus ahorros a través del Plan Institucional Mutuocolombia. ¡Haz realidad tus sueños!',
    updatedAt: '2020-10-28T19:47:41.438Z',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    tituloCorto: 'Mutuocolombia - Plan Institucional Bancolombia',
    category: [{ nombre: 'Ahorro', contentful_id: '47oqc4NTZlwGOrMEThd6kE' }],
    textoCallToActionBite: 'Quiero conocer más',
    imagenpequena: {
      file: { fileName: 'PROTECCION HIJOS.png' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/2pchCZS7Q8sRDIq1igIVcG/57dec7d0fa2b2e882eafcdf35f375d2d/PROTECCION_HIJOS.png?w=800&q=50'
      },
      description: '',
      title: 'Protección Hijos'
    },
    tema: [
      {
        contentful_id: '4l2xMP7NqADA6Cs0c5x4Wq',
        tituloCorto: 'Planes Institucionales'
      }
    ],
    type: [
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' },
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
    ],
    cliente: [
      { contentful_id: '7IF4VrReibXT0Vb13iX3rd', nombre: 'Empleador' },
      { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
    ],
    nombreImagen: 'PROTECCION HIJOS',
    tipoBite: 'producto',
    contentful_id: 'CJ1JOb6BpUlLvwZE8zHob'
  },
  {
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    descripcioncorta:
      'Cuando hablamos de objetivos financieros que involucran hábitos como el ahorro, es muy fácil perder el rumbo; pues las decisiones de consumo inmediato pueden estropear el cumplimiento de los propósitos futuros. ',
    categoriaCliente: [
      {
        contentful_id: '5fP153BoelxfRsusePVnBU',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Cesante'
      },
      {
        contentful_id: '2L498woyc1TQ1A3SpyUpxA',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Empleado'
      },
      {
        contentful_id: 'vt2OB7OniS8zFEgAS1qNz',
        lineadenegocio: [{ nombre: 'Cesantías' }],
        descripcion: 'Independiente'
      },
      {
        contentful_id: '7lDDi92WQvINHDoyppiGG1',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por invalidez'
      },
      {
        contentful_id: 'eP6WF0PzwcNtIU09rfa2g',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por sobrevivencia'
      },
      {
        contentful_id: 'nCqE4RiPTxgo0ayMwnilO',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Pensión por vejez'
      },
      {
        contentful_id: '1BCikKVbP8AH0vdkZJMzNF',
        lineadenegocio: [{ nombre: 'Pensiones Obligatorias' }],
        descripcion: 'Soy pensionado'
      },
      {
        contentful_id: '3VLoCVOpLMD9hvFFbUwUzo',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Conozco de Inversiones'
      },
      {
        contentful_id: '2DARMfEGFnJmATe8dXP3Uf',
        lineadenegocio: [{ nombre: 'Inversión' }],
        descripcion: 'Estoy Aprendiendo'
      }
    ],
    textoIntroductorio:
      'Es fácil perder el rumbo cuando no existe disciplina en el ahorro',
    tituloCorto: '¿Estoy cumpliendo mi objetivo personal?',
    updatedAt: '2020-10-28T19:42:47.859Z',
    urlSeo: 'ahorro/personas/objetivo-personal',
    tipoBite: 'novedad',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/4VdJJdUOrEMGbtQMFebdKI/393aa8d1df65a29f6892f9d57ee5ba8d/3_Por_qu___no_estoy_cumpliendo_mi_objetivo_personal.png?w=800&q=50'
      },
      file: {
        fileName: '3 Por qué no estoy cumpliendo mi objetivo personal.png'
      },
      description: '',
      title: '¿Por qué no estoy cumpliendo mi objetivo personal?'
    },
    tema: [
      {
        contentful_id: '73qm7KPvufncQSOIIfRTUP',
        tituloCorto: 'Tips de ahorro'
      }
    ],
    nombreImagen: '3 Por qué no estoy cumpliendo mi objetivo personal',
    contentful_id: '5FpgrPZ37ga7vie2nbq6T4'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    descripcioncorta:
      'Iniciar un hábito saludable puede ser difícil si le abres espacio a las excusas, pues se requiere disciplina y compromiso. Para que sea mucho más sencillo incorporar el ahorro a tu cotidianidad, puedes elegir un método que te motive e impulse.',
    textoIntroductorio: '¡Inicia hoy un hábito financiero saludable!',
    tituloCorto: 'Elimina la palabra excusa. Es momento de ahorrar',
    updatedAt: '2020-10-28T19:41:45.546Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro/afiliado/momento-de-ahorrar',
    tipoBite: 'educativo',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      file: {
        fileName:
          'Elimina la palabra excusa es momento de ahorrar GettyImages-602981307.jpeg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/3rFPTiE2c1Jw0yPXIwWswK/0777e55bb7312472d76242c239118835/Elimina_la_palabra_excusa_es_momento_de_ahorrar_GettyImages-602981307.jpeg?w=800&q=50'
      },
      description:
        'Pareja lee en el computador cómo escoger una estrategia de ahorro',
      title: 'Ahorra según tu personalidad, inicia este hábito saludable'
    },
    tema: [
      {
        contentful_id: '73qm7KPvufncQSOIIfRTUP',
        tituloCorto: 'Tips de ahorro'
      }
    ],
    nombreImagen:
      'Elimina la palabra excusa es momento de ahorrar GettyImages 602981307',
    contentful_id: '6NpEvFwMJiNx3D3eACWreL'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    descripcioncorta:
      'Conocer tu personalidad financiera es el punto de partida para comenzar a tomar mejores decisiones. ¿Te has preguntado cómo administras tus finanzas? Es momento de hacerlo y así entender cómo es tu relación con el dinero.',
    textoIntroductorio:
      'Conocer tu personalidad financiera es el punto de partida',
    tituloCorto: 'Rasgos que definen tu relación con el dinero',
    updatedAt: '2020-10-28T19:41:21.277Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro/afiliado/perfil-financiero',
    tipoBite: 'educativo',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      file: {
        fileName:
          'Rasgos que definen tu relacion con el dinero GettyImages-599767404.jpeg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/5WzdUswyFGTi2lw3PdryQx/cc3375d420046cf0674138cd0343c73c/Rasgos_que_definen_tu_relacion_con_el_dinero_GettyImages-599767404.jpeg?w=800&q=50'
      },
      description:
        'Mujer sonríe mientras deposita dinero en la alcancía, aceptó el reto financiero Protección',
      title: 'Rasgos que definen tu relación con el dinero'
    },
    tema: [
      {
        contentful_id: '73qm7KPvufncQSOIIfRTUP',
        tituloCorto: 'Tips de ahorro'
      }
    ],
    nombreImagen:
      'Rasgos que definen tu relacion con el dinero GettyImages 599767404',
    contentful_id: '2N4ZpHyuYVhjXJG9GUif4f'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    descripcioncorta:
      'Revive el Webinar transmitido en directo para nuestros clientes con Natalia Gallego, experta en asesoría pensional, financiera y tributaria. ',
    textoIntroductorio:
      'Aprende a optimizar al máximo tus recursos en tiempos difíciles',
    tituloCorto: 'Finanzas personales en tiempos de crisis',
    updatedAt: '2020-10-28T19:36:12.591Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro/afiliado/finanzas-personales-en-tiempos-de-crisis',
    tipoBite: 'educativo',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      file: {
        fileName: 'Finanzas-personales-en-tiempos-de-crisis 1263125313.jpeg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/72HD0lR1W60NqAXFGGOPxn/fbc51126bc9d3ec72df6310fdd11863f/Finanzas-personales-en-tiempos-de-crisis_1263125313.jpeg?w=800&q=50'
      },
      description:
        'Empresaria recibe asesoría financiera para optimizar su bienestar y finanzas personales',
      title:
        'Finanzas personales en tiempos de crisis. Conoce cómo optimizar tus finanzas en momentos de coyuntura'
    },
    tema: [
      { contentful_id: '4PbRzb1RHkGFM6z4YcuNbv', tituloCorto: 'Finanzas' }
    ],
    nombreImagen: 'Finanzas personales en tiempos de crisis 1263125313',
    contentful_id: 'tSOcDidhDKtOsZGKkSRMg'
  },
  {
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    textoCallToActionBite: 'Quiero conocer más',
    descripcioncorta:
      'La familia es la mayor inspiración para soñar en grande y el mejor equipo para conseguir con éxito lo que deseamos. Cuando te sientes tranquilo con el bienestar de tu familia, te recargas de energía para luchar por los objetivos comunes.',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    textoIntroductorio: '¡Conoce aquí 3 formas de organizar tus finanzas! ',
    tituloCorto: 'Finanzas para la educación de tus hijos',
    updatedAt: '2020-10-28T19:35:46.702Z',
    urlSeo: 'ahorro/finanzas-para-la-educacion-de-tus-hijos',
    tipoBite: 'novedad',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/3ZXiObqQTdkhyABbBwkoiM/8b91173c3e47e45c3d4db1d5fd80e326/Finanzas_para_la_educaci__n_de_tus_hijos.png?w=800&q=50'
      },
      file: { fileName: 'Finanzas para la educación de tus hijos.png' },
      description: '',
      title: 'Finanzas para la educación de tus hijos'
    },
    tema: [
      { contentful_id: '4PbRzb1RHkGFM6z4YcuNbv', tituloCorto: 'Finanzas' }
    ],
    nombreImagen: 'Finanzas para la educación de tus hijos',
    contentful_id: '4XsWBBaoPGooMdj2z8VH1A'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    descripcioncorta:
      '¿Sabes cómo está tu salud financiera? ¿Sabes en qué gastas el dinero? Te invitamos a que des el primer paso. Si bien hay cosas que no puedes evitar, sí puedes contribuir a mejorar tu situación con una buena planeación financiera.',
    textoIntroductorio:
      'Sigue estos pasos para conocerla y descubre cómo mejorarla',
    tituloCorto: 'Cómo identificar tu situación financiera actual',
    updatedAt: '2020-10-28T19:33:35.875Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro/afiliado/identifica-tu-situacion-financiera',
    tipoBite: 'educativo',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      file: {
        fileName:
          'como identificar tu situacion financiera actual 1193229502.jpeg'
      },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/4kOAMDzjFruE3m95ry08zB/a781e8ac033a54cbe02b8cb7c00e688a/como_identificar_tu_situacion_financiera_actual_1193229502.jpeg?w=800&q=50'
      },
      description:
        'Dos colegas evalúan cómo reinventar su negocio para continuar creciendo',
      title: 'Conoce las técnicas básicas de finanzas personales'
    },
    tema: [
      { contentful_id: '4PbRzb1RHkGFM6z4YcuNbv', tituloCorto: 'Finanzas' }
    ],
    nombreImagen: 'como identificar tu situacion financiera actual 1193229502',
    contentful_id: '4EyBqmnsroiflIjC61F64x'
  },
  {
    textoCallToActionBite: 'Quiero conocer más',
    categoriaCliente: [
      { descripcion: 'Ahorro', contentful_id: 'OIt5hRcdoEEWhNaiH2S1B' }
    ],
    descripcioncorta:
      'Este diagnóstico se trata, básicamente, de sumar y restar. No toma mucho tiempo y allí podrás encontrar cosas inesperadas que te permitirán saber cómo está tu situación financiera y qué medidas tomar para tener el control y mejorarla.',
    textoIntroductorio:
      'Sigue estos pasos para conocerla y descubre cómo mejorarla',
    tituloCorto: '¿Cómo está tu salud financiera?',
    updatedAt: '2020-10-28T19:28:54.715Z',
    category: [
      {
        nombre: 'Pensiones Voluntarias',
        contentful_id: '4sjSQocJHJA3wehCeeaQel'
      }
    ],
    urlSeo: 'ahorro-saludfinanciera',
    tipoBite: 'educativo',
    type: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    cliente: [{ contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }],
    imagenpequena: {
      file: { fileName: 'como esta tu situacion finanaciera 1129609347.jpeg' },
      fluid: {
        src:
          '//images.ctfassets.net/y3qdch79qxiw/6hcvNN09lYr74ArWkziaA0/52570aa2185c56c7955c503c3761039f/como_esta_tu_situacion_finanaciera_1129609347.jpeg?w=800&q=50'
      },
      description:
        'Mujer en su escritorio, escribe su situación financiera actual',
      title: 'Descubre cómo mejorar tu situación financiera actual'
    },
    tema: [
      { contentful_id: '4PbRzb1RHkGFM6z4YcuNbv', tituloCorto: 'Finanzas' }
    ],
    nombreImagen: 'como esta tu situacion finanaciera 1129609347',
    contentful_id: '7pNuC0N7n4dcWs1G2Ien02'
  }
]

describe('Button', () => {
  const dataTema = {
    edges: [
      {
        node: {
          tituloCorto: 'GENERICO PARA AHORRO',
          lineaDeProducto: [
            {
              nombre: 'Pensiones Voluntarias',
              contentful_id: '4sjSQocJHJA3wehCeeaQel'
            },
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' },
            {
              nombre: 'Pensiones Obligatorias',
              contentful_id: '45FVyiIWU70wBqFgR750SE'
            }
          ],
          contentful_id: '7MjcbT2zD5Vuljs7TwfVVQ'
        }
      },
      {
        node: {
          tituloCorto: 'Novedades y Beneficios',
          lineaDeProducto: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
          ],
          contentful_id: '7cTYlI6D258aUgSOhXfiTp'
        }
      },
      {
        node: {
          tituloCorto: 'Mecanismo de Protección al Cesante',
          lineaDeProducto: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
          ],
          contentful_id: '3Ymr08WpUQinc0MciY6Pwa'
        }
      },
      {
        node: {
          tituloCorto: 'Extractos y Certificados',
          lineaDeProducto: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
          ],
          contentful_id: 'XZQNOJo5WyeCpVu9LzFM4'
        }
      },
      {
        node: {
          tituloCorto: 'Canales Retiro',
          lineaDeProducto: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
          ],
          contentful_id: '6QSO0SouYnUllWRWOubCZR'
        }
      },
      {
        node: {
          tituloCorto: 'Generalidades',
          lineaDeProducto: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
          ],
          contentful_id: '1bveIhWTIleo2K6PHMvDQO'
        }
      },
      {
        node: {
          tituloCorto: 'Portafolios y Tributarios',
          lineaDeProducto: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
          ],
          contentful_id: 'NtTH8hEGhYSbTgRU51YND'
        }
      },
      {
        node: {
          tituloCorto: 'Inmovilización, Embargo y Pignoración',
          lineaDeProducto: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
          ],
          contentful_id: '1XRfmYrwLV3ApgMefhyvJu'
        }
      },
      {
        node: {
          tituloCorto: 'Educación',
          lineaDeProducto: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
          ],
          contentful_id: '1hWhNXMN08MTtHKNBaC0JS'
        }
      },
      {
        node: {
          tituloCorto: 'Vivienda',
          lineaDeProducto: [
            { nombre: 'Cesantías', contentful_id: '7pUsqgXajww2lAjS8Z8Ult' }
          ],
          contentful_id: '5ZGul9Foet8eSHjNSIRaU4'
        }
      }
    ]
  }
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
  const dataUser2 = {
    host: '19191229128DFGFD151020201002',
    nameuser: 'dfgfd',
    category: null,
    subcategory: 'Empleado',
    type: 1,
    age: 0,
    gender: null,
    encuesta: false
  }
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Filtercontenido
          setfilterData={() => {}}
          data={dataTema}
          indexDBUserName={dataUser}
          dataReset={data}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <CleanData
          category={'xxxx'}
          type={'xxxx'}
          isDark={false}
          setfilterData={() => {}}
          dataReset={[]}
          setTemaActive={() => {}}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <CleanData
          category={'xxxx'}
          type={'xxxx'}
          isDark={true}
          setfilterData={() => {}}
          dataReset={[]}
          setTemaActive={() => {}}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const wrapper = mount(
      <CleanData
        category={'xxxx'}
        type={1}
        isDark={true}
        setfilterData={() => {}}
        dataReset={[]}
        setTemaActive={() => {}}
      />
    )
    wrapper.find('#container-filter-contenido-reset')
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Filtercontenido
          setfilterData={() => {}}
          data={dataTema}
          indexDBUserName={dataUser2}
          dataReset={data}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Filtercontenido
          setfilterData={() => {}}
          data={dataTema}
          indexDBUserName={dataUser2}
          dataReset={data}
          isDark={true}
          type={1}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const wrapper = mount(
      <Filtercontenido
        setfilterData={() => {}}
        data={dataTema}
        indexDBUserName={dataUser}
        dataReset={dataComplete}
      />
    )
    wrapper.find('#container-filter-contenido-7cTYlI6D258aUgSOhXfiTp')
  })

  it('renders correctly without props', () => {
    global.innerWidth = 400
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Filtercontenido
        setfilterData={() => {}}
        data={dataTema}
        indexDBUserName={dataUser}
        dataReset={dataComplete}
      />
    )
  })

  it('renders correctly without props', () => {
    global.innerWidth = 1400
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Filtercontenido
        setfilterData={() => {}}
        data={dataTema}
        indexDBUserName={dataUser}
        dataReset={dataComplete}
      />
    )
    wrapper
      .find('#container-filter-contenido-reset')
      .first()
      .simulate('click')
  })

  it('renders correctly without props', () => {
    global.innerWidth = 1400
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Filtercontenido
        setfilterData={() => {}}
        data={datatemas}
        indexDBUserName={dataUser}
        dataReset={dataContenidos}
      />
    )
    wrapper
      .find('#container-filter-contenido-reset')
      .first()
      .simulate('click')
    wrapper
      .find('.container-filter-contenido-inactive')
      .first()
      .simulate('click')
  })
})
