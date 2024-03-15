import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { WelcomeComponent, Welcome } from './welcome'

describe('Welcome', () => {
  const data = {
    allContentfulContenidosPaginas: {
      edges: [
        {
          node: {
            nombreTexto: 'texto-nombre',
            valorTexto: {
              internal: {
                content: '¿Cómo te llamas?'
              }
            }
          }
        },
        {
          node: {
            nombreTexto: 'titulo-secundario',
            valorTexto: {
              internal: {
                content: '¡Comencemos!'
              }
            }
          }
        },
        {
          node: {
            nombreTexto: 'texto-tipo-persona',
            valorTexto: {
              internal: {
                content: '¿Quién eres?'
              }
            }
          }
        },
        {
          node: {
            nombreTexto: 'titulo-principal',
            valorTexto: {
              internal: {
                content: '¡Bienvenido a tu sitio Protección!'
              }
            }
          }
        },
        {
          node: {
            nombreTexto: 'descripcion',
            valorTexto: {
              internal: {
                content:
                  'Disfruta de una experiencia personalizada para ti, de acuerdo a eso que te interesa y necesitas.'
              }
            }
          }
        },
        {
          node: {
            nombreTexto: 'titulo-categorias',
            valorTexto: {
              internal: {
                content: '¿Qué quieres hacer hoy?'
              }
            }
          }
        }
      ]
    }
  }

  const dispatch = jest.fn()
  global.window = Object.create(window)

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <WelcomeComponent
          dispatch={dispatch}
          onGetInfoWelcome={e => {}}
          setType={e => {}}
          data={data}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders responsive', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const tree = renderer
      .create(
        <WelcomeComponent
          typeDefault={1}
          defaultValue={false}
          dispatch={dispatch}
          setType={e => {}}
          onGetInfoWelcome={e => {}}
          data={data}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('click type-person', () => {
    const wrapper = mount(
      <WelcomeComponent
        typeDefault={1}
        defaultValue={false}
        dispatch={dispatch}
        setType={e => {}}
        onGetInfoWelcome={e => {}}
      />
    )
    const incrementPage = wrapper.find('#person-type')
    incrementPage.simulate('click')
  })

  it('onKeyDown type-person', () => {
    const wrapper = mount(
      <WelcomeComponent
        typeDefault={1}
        defaultValue={false}
        dispatch={dispatch}
        setType={e => {}}
        onGetInfoWelcome={e => {}}
      />
    )
    const incrementPage = wrapper.find('#person-type')
    incrementPage.simulate('keydown')
  })

  it('onChanged inputName Wrong text', () => {
    const wrapper = mount(
      <WelcomeComponent
        typeDefault={2}
        defaultValue={true}
        dispatch={dispatch}
        setType={e => {}}
        onGetInfoWelcome={e => {}}
      />
    )
    const eventObj = { target: { value: 'test123' } }
    wrapper.find('input').simulate('change', eventObj)
  })

  it('onChanged inputName Right text', () => {
    const wrapper = mount(
      <WelcomeComponent
        typeDefault={1}
        defaultValue={true}
        dispatch={dispatch}
        setType={e => {}}
        onGetInfoWelcome={e => {}}
      />
    )

    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
  })

  it('onChanged inputName text 0', () => {
    const wrapper = mount(
      <WelcomeComponent
        typeDefault={1}
        defaultValue={false}
        dispatch={dispatch}
        setType={e => {}}
        onGetInfoWelcome={e => {}}
      />
    )

    const eventObj = { target: { value: '' } }
    wrapper.find('input').simulate('change', eventObj)
  })

  it('onBluer inputName Right text', () => {
    const wrapper = mount(
      <WelcomeComponent
        typeDefault={1}
        defaultValue={false}
        dispatch={dispatch}
        setType={e => {}}
        onGetInfoWelcome={e => {}}
      />
    )

    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('blur', eventObj)
  })

  it('onBluer inputName Right text', () => {
    const wrapper = mount(
      <WelcomeComponent
        typeDefault={1}
        defaultValue={false}
        dispatch={dispatch}
        setType={e => {}}
        onGetInfoWelcome={e => {}}
      />
    )

    wrapper.find('input').simulate('focus')
  })

  it('onKeyUp inputName Right ', () => {
    const wrapper = mount(
      <WelcomeComponent
        typeDefault={1}
        defaultValue={false}
        dispatch={dispatch}
        setType={e => {}}
        onGetInfoWelcome={e => {}}
      />
    )

    const incrementPage = wrapper.find('#person-type')
    incrementPage.simulate('click')
    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper.find('input').simulate('keyup', { keyCode: 13 })
  })

  it('onKeyUp inputName Wrong ', () => {
    const wrapper = mount(
      <WelcomeComponent
        typeDefault={1}
        defaultValue={false}
        dispatch={dispatch}
        setType={e => {}}
        onGetInfoWelcome={e => {}}
      />
    )

    const eventObj = { target: { value: 'tes' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper.find('input').simulate('keyup', { keyCode: 13 })
  })

  it('onKeyUp inputName Wrong  and name empty ', () => {
    const wrapper = mount(
      <WelcomeComponent
        typeDefault={1}
        defaultValue={false}
        dispatch={dispatch}
        setType={e => {}}
        onGetInfoWelcome={e => {}}
      />
    )
    const eventObj = { target: { value: '' } }
    wrapper.find('input').simulate('change', eventObj)
    wrapper.find('input').simulate('keyup', { keyCode: 14 })
  })

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Welcome
          typeDefault={1}
          defaultValue={false}
          dispatch={dispatch}
          setType={e => {}}
          onGetInfoWelcome={e => {}}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
