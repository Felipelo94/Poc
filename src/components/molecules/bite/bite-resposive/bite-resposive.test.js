import React from 'react'
import renderer from 'react-test-renderer'
import image from '../../../../assets/images/gatsby-astronaut.png'
import BiteResposive from './bite-resposive'
import { mount } from 'enzyme'

describe('Hardcontent', () => {
  it('renders correctly with props', () => {
    const tree = renderer
      .create(
        <BiteResposive
          accessibility={{ fontSize: 3, lineSize: 2 }}
          title="soy el titulo"
          content="yo soy el contenido"
          btn="yo soy el boton"
          slug={null}
          img={image}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly with props', () => {
    const tree = renderer
      .create(
        <BiteResposive
          accessibility={{ fontSize: 3, lineSize: 2 }}
          title="soy el titulo"
          content="yo soy el contenido"
          btn="yo soy el boton"
          slug={null}
          img={image}
          small={true}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('click bite', () => {
    const tree = mount(
      <BiteResposive
        accessibility={{ fontSize: 3, lineSize: 2 }}
        title="soy el titulo"
        content="yo soy el contenido"
        btn="yo soy el boton"
        img={image}
        small={true}
      />
    )
    tree
      .find('.bite-resposive-container-small-block')
      .first()
      .simulate('click')
  })

  it('keydown bite', () => {
    const tree = mount(
      <BiteResposive
        accessibility={{ fontSize: 3, lineSize: 2 }}
        title="soy el titulo"
        content="yo soy el contenido"
        btn="yo soy el boton"
        img={image}
        small={true}
      />
    )
    tree
      .find('.bite-resposive-container-small-block')
      .first()
      .simulate('keydown')
  })
})
