import { shallow } from 'enzyme'
import React from 'react'
import Inversion from './news-inversion'
import renderer from 'react-test-renderer'
import { ContainerCardStyled } from './news-inversion'

const data = {
  OrigenDeAudio: ['Contentful'],
  titulo: 'Titulo',
  descripcion: 'subtitulo',
  linkPodcast: {
    linkPodcast: 'link'
  },
  theme: {
    colors: {
      cardTitleInforme: 'white',
      cardSubtitle: 'blue'
    }
  }
}

describe('Inversion', () => {
  test('renders correctly without props data1', () => {
    const wrapper = shallow(
      <Inversion accessibility={{ fontSize: 3, lineSize: 2 }} data={data} />
    )
    expect(wrapper.hasClass('contaianer-news-inversion')).toEqual(true)
  })

  test('renders correctly props colors', () => {
    renderer.create(<ContainerCardStyled {...data} />).toJSON()
  })
})
