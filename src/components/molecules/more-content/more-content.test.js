import React from 'react'
import renderer from 'react-test-renderer'
import MoreContent from './more-content'
import TitleSection from '../../atoms/title-sesion/title-sesion'

describe('MoreContent', () => {
  const options = ['Cesantías', 'Ahorro']

  it('renders correctly', () => {
    const tree = renderer.create(<MoreContent options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with children', () => {
    const tree = renderer
      .create(
        <MoreContent options={options}>
          <TitleSection title="Title" className="Destacados" />
          <TitleSection title="Title second section" className="Destacados" />
        </MoreContent>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly one child', () => {
    const tree = renderer
      .create(
        <MoreContent options={options}>
          <TitleSection title="Title" className="Destacados" />
        </MoreContent>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
