import React from 'react'
import renderer from 'react-test-renderer'

import SEO, { SEOComponent } from './seo'

describe('Layout', () => {
  const dataSeo = {
    site: {
      siteMetadata: {
        title: 'Protección: Pensiones, Cesantías, Ahorro e Inversión ',
        description:
          '¡Protección tiene lo que necesitas! Queremos conocerte y saber qué te interesa: Invertir, ahorrar, saber sobre pensiones o cesantías. Ingresa aquí.',
        author: '@proteccion',
        image: 'image/proteccion'
      }
    }
  }

  it('renders correctly', () => {
    const tree = renderer.create(<SEO data={dataSeo}> </SEO>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SEO
          title={'seo'}
          description={'descripcion seo'}
          meta={'meta'}
          image={'image'}
          pathname={'image'}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SEOComponent
          title={'seo'}
          description={'descripcion seo'}
          meta={'meta'}
          image={'image'}
          pathname={'image'}
          data={dataSeo}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<SEOComponent data={dataSeo} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
