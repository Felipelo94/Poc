import React from 'react'
import renderer from 'react-test-renderer'
import FeaturedSliderDesktop from './featured-slider-desktop'
import { mount } from 'enzyme'

const data = [
  {
    tituloCorto: 'Cajas de Compensación Familiar',
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/39XjEukdY3V6jfMva5q7y5/8d6c9433799d3c9a91a313427c55064a/WhatsApp_Image_2020-04-08_at_12.12.56.jpeg?w=800&q=50'
      }
    },
    tipoBite: 'destacado',
    link: 'Beneficio/Cajadecompensacion',
    textoBoton: 'Quiero conocer más'
  }
]

const dataMobile = [
  {
    tituloCorto: 'Cajas de Compensación Familiar',
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/39XjEukdY3V6jfMva5q7y5/8d6c9433799d3c9a91a313427c55064a/WhatsApp_Image_2020-04-08_at_12.12.56.jpeg?w=800&q=50'
      }
    },
    tipoBite: 'destacado',
    link: 'Beneficio/Cajadecompensacion',
    textoBoton: 'Quiero conocer más'
  },
  {
    tituloCorto: 'Afiliación Digital',
    imagenpequena: {
      fluid: {
        src:
          'https://images.ctfassets.net/y3qdch79qxiw/2CUSX7aRUxEYEAoLYn4IuK/eceb371f082d42521f513a4b7ec17bad/AfiliaciondigitalHOME.png?w=800&q=50'
      }
    },
    tipoBite: 'campañas',
    link: 'afiliaciondigital/pension',
    textoIntroductorio:
      'Afiliate a Pensión Obligatoria de manera digital en segundos',
    textoBoton: 'Conocer más'
  },
  {
    tituloCorto: 'Utiliza nuestros canales digitales',
    imagenpequena: {
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
    tituloCorto: '¡Conoce este nuevo beneficio!',
    imagenpequena: {
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
    tituloCorto: 'Con Vecindario haz realidad tu sueño de vivienda',
    imagenpequena: {
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
    tituloCorto: 'Beneficio SOAT Protección',
    imagenpequena: {
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
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <FeaturedSliderDesktop
          accessibility={{ fontSize: 3, lineSize: 2 }}
          line={{ cetgory: 'Cesantías' }}
          groups={data}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with click events', () => {
    const wrapper = mount(
      <FeaturedSliderDesktop
        accessibility={{ fontSize: 3, lineSize: 2 }}
        line={{ cetgory: 'Cesantías' }}
        groups={dataMobile}
      />
    )
    wrapper.find('#btn-next-featured').simulate('click')
    wrapper.find('#prev-featured').simulate('click')
  })

  it('renders correctly without props 3', () => {
    const wrapper = mount(
      <FeaturedSliderDesktop
        accessibility={{ fontSize: 3, lineSize: 2 }}
        line={{ cetgory: 'Ahorro' }}
        groups={dataMobile}
      />
    )
    wrapper.find('#btn-next-featured').simulate('click')
    wrapper.find('#prev-featured').simulate('click')
  })

  it('renders onMouseEnter bosillo next', () => {
    const wrapper = mount(
      <FeaturedSliderDesktop
        accessibility={{ fontSize: 3, lineSize: 2 }}
        line={{ cetgory: 'Ahorro' }}
        groups={dataMobile}
      />
    )
    wrapper.find('#btn-next-featured').simulate('mouseenter')
    wrapper.find('#btn-next-featured').simulate('mouseout')
    wrapper.find('#btn-next-featured').simulate('mouseenter')
    wrapper.find('#btn-next-featured').simulate('mouseout')
  })

  it('renders onMouseEnter bosillo prev', () => {
    const wrapper = mount(
      <FeaturedSliderDesktop
        accessibility={{ fontSize: 3, lineSize: 2 }}
        line={{ cetgory: 'Ahorro' }}
        groups={dataMobile}
      />
    )
    wrapper.find('#btn-next-featured').simulate('click')
    wrapper.find('#prev-featured').simulate('mouseenter')
    wrapper.find('#prev-featured').simulate('mouseout')
    wrapper.find('#prev-btn').simulate('mouseenter')
    wrapper.find('#prev-btn').simulate('mouseout')
  })
})
