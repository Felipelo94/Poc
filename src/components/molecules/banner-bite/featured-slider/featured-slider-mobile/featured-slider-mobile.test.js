import React from 'react'
import renderer from 'react-test-renderer'
import FeaturedSliderMobile from './featured-slider-mobile'
import { shallow, mount } from 'enzyme'
import darkMode from '../../../../../themes/dark'
import { ThemeProvider } from 'styled-components'

const data = [
  {
    titulo: 'Cajas de Compensación Familiar',
    imagen: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/39XjEukdY3V6jfMva5q7y5/8d6c9433799d3c9a91a313427c55064a/WhatsApp_Image_2020-04-08_at_12.12.56.jpeg?w=800&q=50'
      }
    },

    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/39XjEukdY3V6jfMva5q7y5/8d6c9433799d3c9a91a313427c55064a/WhatsApp_Image_2020-04-08_at_12.12.56.jpeg?w=800&q=50'
      }
    },
    tipoBite: 'destacado',
    tituloCorto: 'Cajas de Compensación Familiar',
    link: 'Beneficio/Cajadecompensacion',
    textoIntroductorio: 'sddsdsd',
    textoBoton: 'Quiero conocer más'
  },
  {
    titulo: 'Afiliación Digital',
    imagen: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2CUSX7aRUxEYEAoLYn4IuK/eceb371f082d42521f513a4b7ec17bad/AfiliaciondigitalHOME.png?w=800&q=50'
      }
    },
    tipoBite: 'campañas',
    link: 'afiliaciondigital/pension',
    descripcion: 'Afiliate a Pensión Obligatoria de manera digital en segundos',
    textoBoton: 'Conocer más'
  },
  {
    titulo: 'Utiliza nuestros canales digitales',
    imagen: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/1wwx1C2zdeGpiT3eVvFvkA/e4e33d7bed953e8b679d33f80a83a311/como-acceder-al-mecanismo-de-protecci__n-al-cesante-max.jpg?w=800&q=50'
      }
    },
    tipoBite: 'destacado',
    link: 'novedad/canales-digitales',
    textoBoton: 'Quiero conocer más'
  },
  {
    titulo: '¡Conoce este nuevo beneficio!',
    imagen: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/4k5jHj0molysRnGyVTyCdO/939ec911ac21a1e9769182a7b086c489/Por-qu__-estar-en-Protecci__n-max.jpg?w=800&q=50'
      }
    },
    tipoBite: 'destacado',
    link: 'cesantias/soat',
    textoBoton: 'Conocer más'
  },
  {
    titulo: 'Con Vecindario haz realidad tu sueño de vivienda',
    imagen: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2coWOKoFJrelW0GzeviGV2/822fdf14e6b8a07a168adf144b731e76/cesantias-en-la-declaracion-de-renta-max.jpg?w=800&q=50'
      }
    },
    tipoBite: 'destacado',
    link: 'cesantias/novedad/vecindario',
    textoBoton: 'Quiero conocer más'
  },
  {
    titulo: 'Beneficio SOAT Protección',
    imagen: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/6bgVKaPXgm98a18VNeFlUP/cb02f3874628da63b7914838e94ec4d1/Por-que__-estar-en-Proteccio__n-max.jpeg?w=800&q=50'
      }
    },
    tipoBite: 'destacado',
    link: 'cesantias/soat',
    textoBoton: 'Quiero conocer más'
  }
]

const data2 = [
  {
    titulo: null,
    imagen: null,
    tipoBite: 'destacado',
    link: 'Beneficio/Cajadecompensacion',
    textoBoton: 'Quiero conocer más'
  },
  {
    titulo: 'Afiliación Digital',
    imagen: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2CUSX7aRUxEYEAoLYn4IuK/eceb371f082d42521f513a4b7ec17bad/AfiliaciondigitalHOME.png?w=800&q=50'
      }
    },
    tipoBite: 'campañas',
    link: 'afiliaciondigital/pension',
    descripcion: 'Afiliate a Pensión Obligatoria de manera digital en segundos',
    textoBoton: 'Conocer más'
  },
  {
    titulo: 'Utiliza nuestros canales digitales',
    imagen: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/1wwx1C2zdeGpiT3eVvFvkA/e4e33d7bed953e8b679d33f80a83a311/como-acceder-al-mecanismo-de-protecci__n-al-cesante-max.jpg?w=800&q=50'
      }
    },
    tipoBite: 'destacado',
    link: 'novedad/canales-digitales',
    textoBoton: 'Quiero conocer más'
  },
  {
    titulo: '¡Conoce este nuevo beneficio!',
    imagen: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/4k5jHj0molysRnGyVTyCdO/939ec911ac21a1e9769182a7b086c489/Por-qu__-estar-en-Protecci__n-max.jpg?w=800&q=50'
      }
    },
    tipoBite: 'destacado',
    link: 'cesantias/soat',
    textoBoton: 'Conocer más'
  },
  {
    titulo: 'Con Vecindario haz realidad tu sueño de vivienda',
    imagen: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2coWOKoFJrelW0GzeviGV2/822fdf14e6b8a07a168adf144b731e76/cesantias-en-la-declaracion-de-renta-max.jpg?w=800&q=50'
      }
    },
    tipoBite: 'destacado',
    link: 'cesantias/novedad/vecindario',
    textoBoton: 'Quiero conocer más'
  },
  {
    titulo: 'Beneficio SOAT Protección',
    imagen: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/6bgVKaPXgm98a18VNeFlUP/cb02f3874628da63b7914838e94ec4d1/Por-que__-estar-en-Proteccio__n-max.jpeg?w=800&q=50'
      }
    },
    tipoBite: 'destacado',
    link: 'cesantias/soat',
    textoBoton: 'Quiero conocer más'
  }
]

describe.skip('Button', () => {
  it('renders correctly without props data ', () => {
    const wrapper = shallow(
      <FeaturedSliderMobile
        accessibility={{ fontSize: 3, lineSize: 2 }}
        data={data}
      />
    )
    expect(wrapper.hasClass('fatured-mobile-container')).toEqual(true)
  })

  it('renders correctly without props  data2', () => {
    const wrapper = shallow(
      <FeaturedSliderMobile
        accessibility={{ fontSize: 3, lineSize: 2 }}
        data={data2}
      />
    )
    expect(wrapper.hasClass('fatured-mobile-container')).toEqual(true)
  })

  it('click to btns prev and next renders correctly', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <FeaturedSliderMobile
          accessibility={{ fontSize: 3, lineSize: 2 }}
          data={data}
        />
      </ThemeProvider>
    )
    const firstCard = wrapper.find('#contenido-destacado-0')
    firstCard.simulate('click')
  })
})
