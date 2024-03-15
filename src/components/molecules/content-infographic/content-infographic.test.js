import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import ContentInfographic from './content-infographic'
import { useStaticQuery } from 'gatsby'
import { initialState as pageContextInitialState } from './../../../reducers/page-context/page-context'

const initialState = {
  getState: () => ({
    youcantmiss: {
      userValue: {}
    },
    pageContext: {
      ...pageContextInitialState
    }
  }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

const cta = {
  cta: {
    titulo: 'sssss',
    textoButton: 'sdadsad',
    url: 'https://url-prueba'
  }
}

const infographic = {
  fluid: {
    src:
      'https://images.ctfassets.net/y3qdch79qxiw/4xYZFeYUppMGSCOvlmsMME/0f896fc12f5fcdc161a776a519eb6d3b/infografico-extractos.png?w=800&q=50'
  },
  file: {
    fileName: 'name-pruena_s.jpg'
  },
  contentful_id: '5454545'
}

describe('infographic', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      pages: {
        nodes: [{ path: 'calculadora-cesantias' }]
      }
    })
  })
  beforeEach(() => {})

  it('infographic renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentInfographic
            data={cta}
            infographic={infographic}
            infographicMobile={null}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('infographic renders correctly without cta d', () => {
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentInfographic
            data={{}}
            infographic={infographic}
            infographicMobile={null}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('infographic click Image', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentInfographic
          data={cta}
          infographic={infographic}
          infographicMobile={null}
        />
      </Provider>
    )
    const img = wrapper.find('#container-content-infographic-img-value')
    img.simulate('click')
  })

  it('infographic click Image', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentInfographic
          data={cta}
          infographic={infographic}
          infographicMobile={null}
        />
      </Provider>
    )

    const img = wrapper.find('#container-content-infographic-img-value')
    img.simulate('click')
  })

  it('infographic keydown Image', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentInfographic
          data={cta}
          infographic={infographic}
          infographicMobile={null}
        />
      </Provider>
    )
    const img = wrapper.find('#container-content-infographic-img-value')
    img.simulate('keydown')
  })

  it('infographic close modal Image', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentInfographic
          data={cta}
          infographic={infographic}
          infographicMobile={null}
        />
      </Provider>
    )
    const img = wrapper.find('#container-content-infographic-img-value')
    img.simulate('click')

    const modal = wrapper.find('#modal-body-infographic')
  })

  it('infographic close modal Image ', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentInfographic
          data={cta}
          infographic={infographic}
          infographicMobile={null}
        />
      </Provider>
    )
    const img = wrapper.find('#container-content-infographic-img-value')
    img.simulate('click')

    const modal = wrapper.find('#modal-body-infographic')
  })

  it('infographic modeal click image', () => {
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentInfographic
          data={cta}
          infographic={infographic}
          infographicMobile={null}
        />
      </Provider>
    )
    const img = wrapper.find('#container-content-infographic-img-value')
    img.simulate('click')

    const modal = wrapper.find('#modal-img-infographic')
  })

  it('infographic renders correctly resoluition wron 99999', () => {
    global.innerWidth = 9999
    global.dispatchEvent(new Event('resize'))
    const tree = renderer
      .create(
        <Provider store={initialState}>
          <ContentInfographic
            data={cta}
            infographic={infographic}
            infographicMobile={null}
          />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('infographic renders correctly mobile infographicMobile', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentInfographic
          data={cta}
          infographic={infographic}
          infographicMobile={infographic}
        />
      </Provider>
    )
    const img = wrapper.find('#container-content-infographic-img-value')
    img.simulate('click')
  })

  it('infographic renders correctly  infographicMobile  null', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <Provider store={initialState}>
        <ContentInfographic
          data={cta}
          infographic={infographic}
          infographicMobile={null}
        />
      </Provider>
    )
    const img = wrapper.find('#container-content-infographic-img-value')
    img.simulate('click')
  })
})
