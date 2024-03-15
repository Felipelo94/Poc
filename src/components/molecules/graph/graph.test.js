import React from 'react'
import renderer from 'react-test-renderer'
import GraphCopy from './graph'
import darkMode from '../../../themes/dark'
import { ThemeProvider } from 'styled-components'
import * as am4plugins_rangeSelector from '@amcharts/amcharts4/plugins/rangeSelector'
import { shallow, mount } from 'enzyme'

describe('Test for GraphCopy Component', () => {
  const data = [
    {
      node: {
        titulo: 'Informe de ejemplo inversiones',
        updatedAt: '2020-10-22T14:06:43.176Z',
        textoIntroductorioBite: 'Conoce los valores del mercado actual',
        contentful_id: '7iimejGXVlqN9Vulsn4HVp',
        linkCallToActionInformes: {
          linkCallToActionInformes:
            'https://proteccion.com/wps/wcm/connect/proteccion/75642a4f-a26e-4304-977f-4b2e0f458474/179+Mail+Informe+trimestral_corregido.pdf?MOD=AJPERES'
        },
        contenido: null,
        lineaDeProducto: [
          { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
        ]
      }
    },
    {
      node: {
        titulo: 'Ensayo informes inversiones contenido',
        updatedAt: '2020-10-22T14:06:30.034Z',
        textoIntroductorioBite: 'Ensayo informes inversiones contenido',
        contentful_id: '156x7USXSE8Zy0ZdFLUpng',
        linkCallToActionInformes: null,
        contenido: {
          Tema: [
            {
              contentful_id: '4aw5g5YIfgd5iz9JZgkpcn',
              tituloCorto: 'GENERICO INVERSIONES'
            }
          ],
          tituloCorto: 'Ensayo informes inversiones contenido',
          linkCallToAction: 'https://www.youtube.com/watch?v=Of6uOq_7ceE',
          textoCallToActionBite: 'Quiero conocer más',
          textoIntroductorio: 'Ensayo informes inversiones contenido',
          contentful_id: 'ixxKMebxvMfDmOvqutmqz',
          urlSeo:
            'mitos-realidades-sistema-pensional-contendioeduc-ixxkmebxvmfdmovqutmqz',
          relevancia: 'Relevancia Baja',
          descripcioncorta:
            'Estar bien informado te permitirá tomar las mejores decisiones. Conoce aquí algunos de los mitos más comunes que giran en torno al sistema pensional colombiano. ¡Elige lo mejor para ti!',
          updatedAt: '2020-10-22T14:00:16.360Z',
          imagenpequena: {
            file: { fileName: 'CT3C7-imagen_tarjeta_que_son.png' },
            fluid: {
              src:
                '//images.ctfassets.net/y3qdch79qxiw/1dc4II56AI42NHarhUoRAH/d587758f8f6e0f34c67007b8d4616e86/CT3C7-imagen_tarjeta_que_son.png?w=800&q=50'
            }
          },
          categoriaCliente: [
            {
              descripcion: 'Conozco de Inversiones',
              contentful_id: '3VLoCVOpLMD9hvFFbUwUzo'
            },
            {
              descripcion: 'Estoy Aprendiendo',
              contentful_id: '2DARMfEGFnJmATe8dXP3Uf'
            }
          ],
          tipoDeCliente: [
            { contentful_id: '3XCf8zuzh5bGWNcuvFBuwx', nombre: 'Afiliado' }
          ]
        },
        lineaDeProducto: [
          { nombre: 'Inversión', contentful_id: '4ZiidHPjG8Bz3Q0bdS9aRb' }
        ]
      }
    }
  ]

  class SVGPathElement extends HTMLElement {}
  window.SVGPathElement = SVGPathElement

  const wrapper = mount(
    <ThemeProvider theme={darkMode}>
      <GraphCopy
        line="Inversión"
        accessibility={{ fontSize: 3, lineSize: 2 }}
        data={data}
      />
    </ThemeProvider>,
    {
      attachTo: document.body
    }
  )

  it('renders correctly', () => {
    let selector = new am4plugins_rangeSelector.DateAxisRangeSelector()
    selector.container = document.getElementById('controls')

    expect(wrapper.element).toMatchSnapshot()
  })
})
