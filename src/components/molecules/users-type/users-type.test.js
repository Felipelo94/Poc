import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import UsersType from './users-type'
import darkMode from '../../../themes/dark'
import { ThemeProvider } from 'styled-components'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <UsersType
            settypeUser={() => {}}
            indexDBUserNames={{
              host: '19191229128ESTEBAN172202114620',
              nameuser: 'esteban',
              category: 'Pensión',
              subcategory: '',
              type: 2,
              age: 0,
              gender: null,
              encuesta: 'false',
              id: 6
            }}
            nameUser={{ nameValue: '', typeUser: 1 }}
            setIsOpenMenu={() => {}}
            lineaActual={'Pensión'}
            active={2}
            iconPerson={[
              {
                node: {
                  file: {
                    url:
                      'https://images.ctfassets.net/y3qdch79qxiw/3Xp5nQyeB8bWxQi2aEHUqD/8c40b8ecb33bb39703b3473791d41064/icono-persona.svg'
                  },
                  contentful_id: '3Xp5nQyeB8bWxQi2aEHUqD'
                }
              }
            ]}
            typeUserValue={2}
            validateStreetCard={() => {}}
            typeDefault={1}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('HomePage renders correctly youcantsmiss', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <UsersType
          settypeUser={() => {}}
          indexDBUserNames={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Pensión',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          nameUser={{ nameValue: '', typeUser: 1 }}
          setIsOpenMenu={() => {}}
          lineaActual={'Pensión'}
          active={2}
          iconPerson={[
            {
              node: {
                file: {
                  url:
                    'https://images.ctfassets.net/y3qdch79qxiw/3Xp5nQyeB8bWxQi2aEHUqD/8c40b8ecb33bb39703b3473791d41064/icono-persona.svg'
                },
                contentful_id: '3Xp5nQyeB8bWxQi2aEHUqD'
              }
            }
          ]}
          typeUserValue={2}
          validateStreetCard={() => {}}
          typeDefault={1}
        />
      </ThemeProvider>
    )
    wrapper
      .find('#header-typeEmpre')
      .first()
      .simulate('click')

    wrapper
      .find('#header-typeEmpre')
      .first()
      .simulate('keydown', { keyCode: 13 })

    wrapper
      .find('#header-typePerson')
      .first()
      .simulate('click')

    wrapper
      .find('#header-typePerson')
      .first()
      .simulate('keydown', { keyCode: 13 })
  })

  it('HomePage renders correctly youcantsmiss', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        {' '}
        <UsersType
          settypeUser={() => {}}
          indexDBUserNames={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Pensión',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          nameUser={{ nameValue: '', typeUser: 1 }}
          setIsOpenMenu={() => {}}
          lineaActual={'Pensión'}
          active={2}
          iconPerson={[
            {
              node: {
                file: {
                  url:
                    'https://images.ctfassets.net/y3qdch79qxiw/3Xp5nQyeB8bWxQi2aEHUqD/8c40b8ecb33bb39703b3473791d41064/icono-persona.svg'
                },
                contentful_id: '3Xp5nQyeB8bWxQi2aEHUqD'
              }
            }
          ]}
          typeUserValue={2}
          validateStreetCard={() => {}}
        />
      </ThemeProvider>
    )
    wrapper
      .find('#header-typeEmpre')
      .first()
      .simulate('click')

    wrapper
      .find('#header-typeEmpre')
      .first()
      .simulate('keydown', { keyCode: 13 })

    wrapper
      .find('#header-typePerson')
      .first()
      .simulate('click')

    wrapper
      .find('#header-typePerson')
      .first()
      .simulate('keydown', { keyCode: 13 })
  })

  it('HomePage renders correctly youcantsmiss', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <UsersType
          settypeUser={() => {}}
          indexDBUserNames={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Pensión',
            subcategory: '',
            type: null,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          nameUser={{ nameValue: '', typeUser: 1 }}
          setIsOpenMenu={() => {}}
          lineaActual={'Pensión'}
          active={2}
          iconPerson={[
            {
              node: {
                file: {
                  url:
                    'https://images.ctfassets.net/y3qdch79qxiw/3Xp5nQyeB8bWxQi2aEHUqD/8c40b8ecb33bb39703b3473791d41064/icono-persona.svg'
                },
                contentful_id: '3Xp5nQyeB8bWxQi2aEHUqD'
              }
            }
          ]}
          typeUserValue={2}
          validateStreetCard={() => {}}
        />{' '}
      </ThemeProvider>
    )
    wrapper
      .find('#header-typeEmpre')
      .first()
      .simulate('click')

    wrapper
      .find('#header-typeEmpre')
      .first()
      .simulate('keydown', { keyCode: 13 })

    wrapper
      .find('#header-typePerson')
      .first()
      .simulate('click')

    wrapper
      .find('#header-typePerson')
      .first()
      .simulate('keydown', { keyCode: 13 })
  })

  it('HomePage renders correctly youcantsmiss case: validateStreetCard is null and keycode is 10', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <UsersType
          settypeUser={() => {}}
          indexDBUserNames={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Pensión',
            subcategory: '',
            type: null,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          nameUser={{ nameValue: '', typeUser: 1 }}
          setIsOpenMenu={() => {}}
          lineaActual={'Pensión'}
          active={2}
          iconPerson={[
            {
              node: {
                file: {
                  url:
                    'https://images.ctfassets.net/y3qdch79qxiw/3Xp5nQyeB8bWxQi2aEHUqD/8c40b8ecb33bb39703b3473791d41064/icono-persona.svg'
                },
                contentful_id: '3Xp5nQyeB8bWxQi2aEHUqD'
              }
            }
          ]}
          typeUserValue={2}
          validateStreetCard={null}
        />{' '}
      </ThemeProvider>
    )
    wrapper
      .find('#header-typeEmpre')
      .first()
      .simulate('click')

    wrapper
      .find('#header-typeEmpre')
      .first()
      .simulate('keydown', { keyCode: 10 })

    wrapper
      .find('#header-typePerson')
      .first()
      .simulate('click')

    wrapper
      .find('#header-typePerson')
      .first()
      .simulate('keydown', { keyCode: 10 })
  })

  it('HomePage renders correctly youcantsmiss case: validateStreetCard is null and keycode is 13', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <UsersType
          settypeUser={() => {}}
          indexDBUserNames={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Pensión',
            subcategory: '',
            type: null,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          nameUser={{ nameValue: '', typeUser: 1 }}
          setIsOpenMenu={() => {}}
          lineaActual={'Pensión'}
          active={2}
          iconPerson={[
            {
              node: {
                file: {
                  url:
                    'https://images.ctfassets.net/y3qdch79qxiw/3Xp5nQyeB8bWxQi2aEHUqD/8c40b8ecb33bb39703b3473791d41064/icono-persona.svg'
                },
                contentful_id: '3Xp5nQyeB8bWxQi2aEHUqD'
              }
            }
          ]}
          typeUserValue={2}
          validateStreetCard={null}
        />{' '}
      </ThemeProvider>
    )

    wrapper
      .find('#header-typeEmpre')
      .first()
      .simulate('keydown', { keyCode: 13 })

    wrapper
      .find('#header-typePerson')
      .first()
      .simulate('keydown', { keyCode: 13 })
  })
})
