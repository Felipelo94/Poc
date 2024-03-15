import React from 'react'
import renderer from 'react-test-renderer'
import YouCantMissMobile from './You-cant-miss-mobile'
import { mount, shallow } from 'enzyme'
import darkMode from '../../../../../themes/dark'
import { ThemeProvider } from 'styled-components'

const dataundefined = [
  {
    urlSeo: 'cesantias/declaracion',
    textoCallToActionBite: 'Ir a allá',
    descripcioncorta:
      'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
    updatedAt: '2020-04-20T20:56:20.460Z',
    categoriaCliente: [
      { descripcion: 'Empleado' },
      { descripcion: 'Independiente' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    urlSeo: 'cesantias/declaracion',
    textoCallToActionBite: 'Ir a allá',
    descripcioncorta:
      'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
    updatedAt: '2020-04-20T20:56:20.460Z',
    categoriaCliente: [
      { descripcion: 'Empleado' },
      { descripcion: 'Independiente' }
    ],
    category: [{ nombre: 'Cesantías' }],
    tipoBite: 'gato'
  }
]

const data = [
  {
    urlSeo: 'cesantias/declaracion',
    textoCallToActionBite: 'Ir a allá',
    descripcioncorta:
      'Conoce el tratamiento tributario de tus Cesantías y cómo deberías declararlas ante la DIAN. ',
    updatedAt: '2020-04-20T20:56:20.460Z',
    categoriaCliente: [
      { descripcion: 'Empleado' },
      { descripcion: 'Independiente' }
    ],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/5QqW4jHATgW6hirYMIYLsI/59ab83060f0c0f349cf49fece7661fd6/como-usarlas-para-educaci__n-max.jpg?w=800&q=50'
      }
    },
    urlSeo:
      'cesantias/como-usarlas/educacion/cesante-independiente/oportunidad',
    textoCallToActionBite: 'Aprende más',
    tituloCorto: 'Cesantías para Educación',
    textoIntroductorio: 'Descubre como usarlas para educación aquí',
    descripcioncorta:
      'Usa tus Cesantías para educación y cumple tus sueños junto a Protección.',
    updatedAt: '2020-04-17T16:17:18.459Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' }
    ],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2GheWuXoEYrbnEFqpd37KB/852c7094d3d2b83768bd6a5536860a48/como-acceder-al-mecanismo-de-protecci__n-al-cesante-max__1_.jpg?w=800&q=50'
      }
    },
    urlSeo: null,
    textoCallToActionBite: 'Muéstrame',
    tituloCorto: 'Mecanismo protección cesante',
    textoIntroductorio: 'descubre los beneficios aquí',
    descripcioncorta:
      'Estos son los requisitos para beneficiarte de este mecanismo mientras encuentras un nuevo empleo. ',
    updatedAt: '2020-04-17T16:15:59.850Z',
    categoriaCliente: [{ descripcion: 'Empleado' }, { descripcion: 'Cesante' }],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/4XbvaMk0LQVI8yLSc6CWN8/32de3d0a95b6dc951ebc41cd14703039/como-declarar-las-cesant__as-como-independiente-max.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/independientes',
    textoCallToActionBite: 'Enséñame más',
    tituloCorto: 'Cesantías para independientes',
    textoIntroductorio: 'Declara tus cesantías como independiente',
    descripcioncorta:
      'Así podrás aprovechar los beneficios tributarios que podrás disfrutar gracias a las cesantías. ',
    updatedAt: '2020-04-17T16:15:11.215Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Empleado' },
      { descripcion: 'Independiente' }
    ],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/3LLDtskhG5bnb7whabxQrC/abf5433c5ff86324c5433def79d73a36/como_retirar_cesantias-max.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/como-usarlas/como-retirarlas/empleado',
    textoCallToActionBite: 'Descúbrelo ahora',
    tituloCorto: '¿Cómo retirar tus Cesantías?',
    textoIntroductorio:
      '¿Decidiste la meta que quieres alcanzar con tus Cesantías?',
    descripcioncorta:
      '¿Ya decidiste la meta a la que le quieres destinar tus Cesantías? Ahora entérate cómo retirarlas',
    updatedAt: '2020-04-20T16:43:37.539Z',
    categoriaCliente: [{ descripcion: 'Empleado' }],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'servicio'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/1zFYSlhuMTZIZxdD80s5Sy/efcf8a41d00cd5cda8b2fe29171bd73b/Cua__nto-debes-ahorrar-para-invertir-tus-cesanti__as-en-educacio__n-max.jpeg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/como-usarlas/vivienda/cesante-independiente/empleado',
    textoCallToActionBite: 'Quiero conocer más',
    tituloCorto: '¿Cesantías para vivienda?',
    textoIntroductorio:
      'Aprende qué errores evitar a la hora de usar tus Cesantías',
    descripcioncorta:
      'En el camino para la adquisición o mejora de vivienda puedes incurrir en algunas equivocaciones. ',
    updatedAt: '2020-04-08T00:11:53.233Z',
    categoriaCliente: [{ descripcion: 'Empleado' }],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'educativo'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/4cZ5pa8RG190spQ2veabhj/7c88e4a67a18154f0d414582eadea844/Cu__nto-debo-ahorrar-max.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/como-usarlas/vivienda/cuanto-ahorrar',
    textoCallToActionBite: 'Descubre cómo',
    tituloCorto: 'Invierte tus cesantías en educación',
    textoIntroductorio: 'Descubre cómo usar tus cesantías en educación',
    descripcioncorta: null,
    updatedAt: '2020-04-17T16:13:37.951Z',
    categoriaCliente: [
      { descripcion: 'Empleado' },
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' }
    ],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/3rRspLgGeDkFloUVHNHKIk/fc6209a75ca0ab98f07e207cd947cdb2/que-es-el-mecanismo-de-proteccion-al-cesante-max.jpg?w=800&q=50'
      }
    },
    urlSeo: null,
    textoCallToActionBite: 'Cuéntame',
    tituloCorto: 'Protección al Cesante',
    textoIntroductorio: 'Descubre el mecanismo de protección al cesante',
    descripcioncorta:
      '¿Perdiste tu empleo? El Estado cuenta con un programa con el que podrás aprovechar tus Cesantías y encaminarte a un nuevo trabajo. ',
    updatedAt: '2020-04-17T16:11:29.246Z',
    categoriaCliente: [{ descripcion: 'Cesante' }, { descripcion: 'Empleado' }],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/30ghGrUHaovWemYkb4yWQn/11c223a12621a96443662840468a72fc/Qu__-son-los-intereses-de-las-cesant__as-max.jpg?w=800&q=50'
      }
    },
    urlSeo: null,
    textoCallToActionBite: 'Aprende más',
    tituloCorto: 'Intereses de las Cesantías',
    textoIntroductorio: 'Encuentra cómo usar los intereses de las cesantías',
    descripcioncorta:
      '¿Sabías que este ahorro tiene unos intereses que puedes disfrutar? Conoce más sobre ellos.',
    updatedAt: '2020-04-17T16:10:36.367Z',
    categoriaCliente: [{ descripcion: 'Empleado' }, { descripcion: 'Cesante' }],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/40S9z3pVPsOuOssanSkDaR/42a5b1791e4e55e3f62cab8fec5de4e4/como-usar-las-cesant__as-para-vivienda-max.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/como-usarlas/vivienda/cuanto-ahorrar',
    textoCallToActionBite: 'Cuéntame cómo',
    tituloCorto: '¿Ahorrar para vivienda?',
    textoIntroductorio:
      '¡Entérate cómo puedes utilizar tus Cesantías para vivienda!',
    descripcioncorta:
      'Si tu sueño es tu vivienda, te contamos cómo hacer un plan de ahorro para alcanzarlo.',
    updatedAt: '2020-04-17T16:07:36.093Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/4BFdPZttD1aZNyw74VXXsM/13ce61c45cc60fccce6d42b18fdd49dc/Qui__n-hace-los-aportes-Cu__nto-me-deben-consignar-max__1_.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/certificados',
    textoCallToActionBite: 'Quiero conocer',
    tituloCorto: '¿Qué son los aportes a Cesantías?',
    textoIntroductorio:
      '¿Quieres conocer acerca de las Cesantías y quiénes deben aportar?',
    descripcioncorta:
      'Ahora que sabes qué son las Cesantías, debes saber quiénes deben aportar y cómo deben hacerlo. ',
    updatedAt: '2020-04-17T16:07:08.051Z',
    categoriaCliente: [{ descripcion: 'Cesante' }, { descripcion: 'Empleado' }],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/3WuaqoYaYoWxKEYsDGa0Q5/088be7824e8e9f1ea573ffe33f59fe7e/Embargo-que-es-y-para-que-max.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/pignoracion-embargo-inmovilizacion/embargo',
    textoCallToActionBite: 'Quiero saberlo',
    tituloCorto: '¿Qué es el embargo de las Cesantías?',
    textoIntroductorio:
      'Conoce los motivos por los que pueden embargarse las Cesantías',
    descripcioncorta:
      'Entérate de las circunstancias que pueden llevar al embargo de tus Cesantías. ',
    updatedAt: '2020-04-17T16:07:08.041Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Empleado' },
      { descripcion: 'Independiente' }
    ],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/3htN7iugeFK3oSeTNdhtrQ/0902ac6de2c2ef71200963c256dca7c5/como-retirar-tus-cesant__as-para-educacion-max.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/como-usarlas/educacion/empleado/retiro',
    textoCallToActionBite: 'Muéstrame cómo',
    tituloCorto: 'Retiro de Cesantías para Educación',
    textoIntroductorio:
      'Aprende cómo retirar tus Cesantías y haz realidad este propósito',
    descripcioncorta:
      'Como empleado puedes apoyar tus proyectos educativos junto a Protección.',
    updatedAt: '2020-04-17T16:07:07.941Z',
    categoriaCliente: [{ descripcion: 'Empleado' }],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/5QqW4jHATgW6hirYMIYLsI/59ab83060f0c0f349cf49fece7661fd6/como-usarlas-para-educaci__n-max.jpg?w=800&q=50'
      }
    },
    urlSeo: null,
    textoCallToActionBite: 'Muéstrame más',
    tituloCorto: 'Cesantías para Educación',
    textoIntroductorio: 'Como usar tus cesantías para educación',
    descripcioncorta:
      'Con Protección puedes hacer tus sueños realidad. Conoce aquí cómo puedes usar tus Cesantías para tu educación y la de tu familia.',
    updatedAt: '2020-04-17T16:06:50.333Z',
    categoriaCliente: [{ descripcion: 'Empleado' }],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/47E7eGkcCgHga74c0iPctT/408462a7e8a6f594385509e0558d4eeb/extractos-que-son-y-como-leerlos-max.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/extractos',
    textoCallToActionBite: 'Conócelos',
    tituloCorto: '¿Qué son los extractos de Cesantías?',
    textoIntroductorio: 'Hazle seguimiento a tu ahorro',
    descripcioncorta:
      'Conoce los extractos de Cesantías, aprende a leerlos y hazle un seguimiento a este ahorro. ',
    updatedAt: '2020-04-17T16:05:47.785Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Empleado' },
      { descripcion: 'Independiente' }
    ],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2mxYx2A33kzE4jtYrZVSv1/429f2a3061f7ddef45821704de07e925/Para-qu__-son-las-cesant__as-max.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/para-que-son/empleado-independiente',
    textoCallToActionBite: 'Quiero conocer más',
    tituloCorto: 'Cesantías ¿Para qué son?',
    textoIntroductorio:
      'Conoce aquí la manera correcta de utilizar tus Cesantías',
    descripcioncorta:
      'Conoce aquí la manera correcta de utilizar tus Cesantías',
    updatedAt: '2020-04-17T16:05:47.743Z',
    categoriaCliente: [
      { descripcion: 'Independiente' },
      { descripcion: 'Empleado' }
    ],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/5W1v97vzRKSefJSGsiRLh6/ef636a59699dc13eefc5b6460624ccd2/para_que_se_retiran_max.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/como-usarlas/para-que-retirarlas/empleado',
    textoCallToActionBite: 'Quiero conocer más',
    tituloCorto: 'Conoce cómo utilizar tus Cesantías',
    textoIntroductorio:
      'Apoya tus sueños de vivienda o educación con tus Cesantías',
    descripcioncorta:
      'Como empleado, las Cesantías pueden servirte para alcanzar tus sueños. Conoce cómo aquí.',
    updatedAt: '2020-04-17T16:05:47.711Z',
    categoriaCliente: [{ descripcion: 'Empleado' }],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/7b1WR8x6gU3qgvjn57e2Pv/9f7c416c8c33eb9d15b6100bf5f3fed5/portafolio-max.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/portafolios/que-son',
    textoCallToActionBite: '¡Quiero conocerlos!',
    tituloCorto: 'Cesantías Corto Plazo o Largo Plazo',
    textoIntroductorio: 'Existen 2 tipos de portafolios para tus Cesantías',
    descripcioncorta:
      '¿Sabías que existen dos portafolios para tus Cesantías? Conócelos y elige la mejor forma de administrarlos.',
    updatedAt: '2020-04-17T16:05:47.444Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Empleado' },
      { descripcion: 'Independiente' }
    ],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/7t6iaACnyW0eLXyqT2xeHm/1c0fe3eb805c15f96c5837f22f3dce4d/Por-qu__-y--c__mo-cambiar-de-portafolio-max__1_.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/para-que-son/cesante',
    textoCallToActionBite: 'Cuéntame',
    tituloCorto: '¿Para qué son las Cesantías?',
    textoIntroductorio:
      '¿Terminó tu contrato laboral? ¡Conoce cómo utlizar las Cesantías!',
    descripcioncorta:
      'Si se terminó tu contrato o cambiaste de empleo, te mostramos algunas opciones que te ayudarán a aprovechar tu ahorro.',
    updatedAt: '2020-04-17T16:05:47.441Z',
    categoriaCliente: [{ descripcion: 'Cesante' }],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/4BFdPZttD1aZNyw74VXXsM/13ce61c45cc60fccce6d42b18fdd49dc/Qui__n-hace-los-aportes-Cu__nto-me-deben-consignar-max__1_.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/como-usarlas/para-que-retirarlas/cesante',
    textoCallToActionBite: 'Quiero conocer más',
    tituloCorto: 'Conoce cómo utilizar tus Cesantías',
    textoIntroductorio:
      '¿Te quedaste sin empleo? Conoce cómo utilizar tus Cesantías',
    descripcioncorta:
      'Como cesante, las Cesantías pueden servirte para alcanzar tus sueños. Conoce cómo aquí',
    updatedAt: '2020-04-17T16:05:47.437Z',
    categoriaCliente: [{ descripcion: 'Cesante' }],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/6a1tFekwvZqD6WG1665OQp/864814695bb99f4fae56fcb7ec83aab6/que-son-max.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/que-son',
    textoCallToActionBite: ' ',
    tituloCorto: '¿Qué son las Cesantías?',
    textoIntroductorio: 'Conoce todo lo que debes saber sobre las Cesantías',
    descripcioncorta:
      'Conoce todo lo que debes saber sobre las Cesantías y comienza a ahorrar junto a Protección.',
    updatedAt: '2020-04-17T16:05:47.402Z',
    categoriaCliente: [
      { descripcion: 'Empleado' },
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' }
    ],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/5QqW4jHATgW6hirYMIYLsI/59ab83060f0c0f349cf49fece7661fd6/como-usarlas-para-educaci__n-max.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/como-usarlas/educacion/empleado',
    textoCallToActionBite: 'Muéstrame cómo',
    tituloCorto: 'Cesantías educación',
    textoIntroductorio: 'Cesantías educación',
    descripcioncorta:
      'Con Protección puedes hacer tus sueños realidad. Conoce aquí cómo puedes usar tus Cesantías para tu educación y la de tu familia.',
    updatedAt: '2020-04-17T16:05:47.395Z',
    categoriaCliente: [{ descripcion: 'Empleado' }],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/7i2A8qC7xYMMjIsUvizi0a/87b9ea69c8aec417b5078e9fecb90268/Qu__-es-la-inmovilizaci__n-de-las-cesant__as-y-c__mo-podr__a--servirte-max__1_.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/pignoracion-embargo-inmovilizacion/inmovilizacion',
    textoCallToActionBite: 'Quiero conoce más',
    tituloCorto: '¿Qué es la inmovilización de las Cesantías?',
    textoIntroductorio: 'Entérate aquí de qué se trata',
    descripcioncorta:
      'Si quieres usar tus Cesantías para adquirir vivienda, deberás inmovilizarlas. ',
    updatedAt: '2020-04-17T16:04:45.863Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Empleado' },
      { descripcion: 'Independiente' }
    ],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/6vtCpbtr2K53tln5x07Wa3/56dd714f6175540ccb4aabf15af4866b/pignoracion-max.jpg?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/pignoracion-embargo-inmovilizacion/pignoración',
    textoCallToActionBite: 'Quiero conocer más',
    tituloCorto: '¿Qué es la pignoración de Cesantías?',
    textoIntroductorio: 'Conoce aquí de qué se trata y cuándo puede ocurrir',
    descripcioncorta: null,
    updatedAt: '2020-04-17T16:03:34.846Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Empleado' },
      { descripcion: 'Independiente' }
    ],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  },
  {
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/NSoHg7eHzRx7IHG6qi8JA/e730263cba25d7b8c74014e387cb46dc/PRUEBA-2.png?w=800&q=50'
      }
    },
    urlSeo: 'cesantias/como-usarlas/educacion/cesante-independiente/retiro',
    textoCallToActionBite: 'Muéstrame cómo',
    tituloCorto: 'Retiro de Cesantías para educación',
    textoIntroductorio: '¡Empieza a estudiar eso que siempre has querido!',
    descripcioncorta:
      'Como independiente y cesante también puedes apoyar tus proyectos educativos junto a Protección. ',
    updatedAt: '2020-04-15T14:57:09.920Z',
    categoriaCliente: [
      { descripcion: 'Cesante' },
      { descripcion: 'Independiente' }
    ],
    category: [{ nombre: 'Cesantías' }],
    type: [{ nombre: 'Cesantías' }],
    tipoBite: 'producto'
  }
]

describe('Button', () => {
  it('renders correctly without props', () => {
    const wrapper = shallow(
      <YouCantMissMobile
        accessibility={{ fontSize: 3, lineSize: 2 }}
        data={data}
        numBite={11}
        index={10}
      />
    )
    const container = wrapper.find('#You-cant-miss-mobile-container')
    expect(container.hasClass('You-cant-miss-mobile-container')).toEqual(true)
  })

  it('renders correctly without props undefind', () => {
    const wrapper = shallow(
      <YouCantMissMobile
        accessibility={{ fontSize: 3, lineSize: 2 }}
        data={dataundefined}
        numBite={11}
        index={10}
      />
    )
    const container = wrapper.find('#You-cant-miss-mobile-container')
    expect(container.hasClass('You-cant-miss-mobile-container')).toEqual(true)
  })

  // it('click btn next dots', () => {
  // 	const wrapper = mount(<ThemeProvider theme={darkMode} ><YouCantMissMobile accessibility={{ fontSize: 3, lineSize: 2 }} idCarrusel="prueba" data={data} numBite={11} index={10} /></ThemeProvider>);
  // 	const btnNext = wrapper.find('#bite-btns-next-prueba');
  // 	btnNext.simulate('click');
  // });

  // it('click btn prev dots', () => {
  // 	const wrapper = mount(<ThemeProvider theme={darkMode} ><YouCantMissMobile accessibility={{ fontSize: 3, lineSize: 2 }} idCarrusel="prueba" data={data} numBite={11} index={10} /></ThemeProvider>);
  // 	const btnNext = wrapper.find('#bite-btns-prev-prueba');
  // 	btnNext.simulate('click');
  // });
})
