import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import MenuInfoUsuario from './menu-info-usuario'
import lightTheme from '../../../themes/light'
import { ThemeProvider } from 'styled-components'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <MenuInfoUsuario
            welcome={'¡Hola esteban!'}
            name={['esteban']}
            isService={false}
            setisOpenMenu={() => {}}
            isOpenMenu={true}
            subcategory={''}
            category={''}
            deleteDataBaseUser={() => {}}
            services={{
              host: '19191229128ESTEBAN172202114620',
              nameuser: 'esteban',
              category: 'Ahorro',
              subcategory: '',
              type: 2,
              age: 0,
              gender: null,
              encuesta: 'false',
              id: 6
            }}
            typeUser={1}
            settypeUser={() => {}}
            indexDBUserNames={{
              host: '19191229128ESTEBAN172202114620',
              nameuser: 'esteban',
              category: 'Ahorro',
              subcategory: '',
              type: 2,
              age: 0,
              gender: null,
              encuesta: 'false',
              id: 6
            }}
            nameUsers={{ nameValue: '', typeUser: 1 }}
            setIsOpenMenu={() => {}}
            lineaActual={'Ahorro'}
            active={
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zNS45OTIyIDE4LjAxNTlDMzYuMjcwMiAyOC4yODkyIDI5LjA3NyAzNS4yMzA3IDE4LjAyNjQgMzUuOTU5NUM2Ljk3NTkyIDM2LjY1MzcgMC44NTk5MTUgMjguMzI0IDAuMDYwNjY0MSAxOC4wMTU5Qy0wLjgwODA4NyA2LjYzMTk1IDcuNzc1MTggMC45Mzk5NjEgMTguMDI2NCAwLjA3MjI4MDZDMjguOTM4IC0wLjgzMDEwNyAzNS42Nzk1IDYuODA1NDggMzUuOTkyMiAxOC4wMTU5WiIgZmlsbD0iI0UzRTgyOSIvPg0KPC9zdmc+DQo='
            }
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
            IconTypeEmpre={[
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
            validateStreetCard={() => {}}
            subCategoryDefaulft={''}
            categoryDefaulft={'Ahorro'}
            typeDefault={1}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Keydown SubCategories', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <MenuInfoUsuario
          theme={lightTheme}
          welcome={'¡Hola esteban!'}
          name={['esteban']}
          isService={false}
          setisOpenMenu={() => {}}
          isOpenMenu={true}
          subcategory={''}
          category={''}
          deleteDataBaseUser={() => {}}
          services={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          typeUser={1}
          settypeUser={() => {}}
          indexDBUserNames={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          nameUsers={{ nameValue: '', typeUser: 1 }}
          setIsOpenMenu={() => {}}
          lineaActual={'Ahorro'}
          active={
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zNS45OTIyIDE4LjAxNTlDMzYuMjcwMiAyOC4yODkyIDI5LjA3NyAzNS4yMzA3IDE4LjAyNjQgMzUuOTU5NUM2Ljk3NTkyIDM2LjY1MzcgMC44NTk5MTUgMjguMzI0IDAuMDYwNjY0MSAxOC4wMTU5Qy0wLjgwODA4NyA2LjYzMTk1IDcuNzc1MTggMC45Mzk5NjEgMTguMDI2NCAwLjA3MjI4MDZDMjguOTM4IC0wLjgzMDEwNyAzNS42Nzk1IDYuODA1NDggMzUuOTkyMiAxOC4wMTU5WiIgZmlsbD0iI0UzRTgyOSIvPg0KPC9zdmc+DQo='
          }
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
          IconTypeEmpre={[
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
          validateStreetCard={() => {}}
          subCategoryDefaulft={''}
          categoryDefaulft={'Ahorro'}
          typeDefault={1}
        />
      </ThemeProvider>
    )
  })

  it('Keydown SubCategories', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <MenuInfoUsuario
          theme={lightTheme}
          welcome={'¡Hola esteban!'}
          name={['esteban']}
          isService={false}
          setisOpenMenu={() => {}}
          isOpenMenu={true}
          subcategory={''}
          category={''}
          deleteDataBaseUser={() => {}}
          services={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          typeUser={1}
          settypeUser={() => {}}
          indexDBUserNames={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          nameUsers={{ nameValue: '', typeUser: 1 }}
          setIsOpenMenu={() => {}}
          lineaActual={'Ahorro'}
          active={
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zNS45OTIyIDE4LjAxNTlDMzYuMjcwMiAyOC4yODkyIDI5LjA3NyAzNS4yMzA3IDE4LjAyNjQgMzUuOTU5NUM2Ljk3NTkyIDM2LjY1MzcgMC44NTk5MTUgMjguMzI0IDAuMDYwNjY0MSAxOC4wMTU5Qy0wLjgwODA4NyA2LjYzMTk1IDcuNzc1MTggMC45Mzk5NjEgMTguMDI2NCAwLjA3MjI4MDZDMjguOTM4IC0wLjgzMDEwNyAzNS42Nzk1IDYuODA1NDggMzUuOTkyMiAxOC4wMTU5WiIgZmlsbD0iI0UzRTgyOSIvPg0KPC9zdmc+DQo='
          }
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
          IconTypeEmpre={[
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
          validateStreetCard={() => {}}
          subCategoryDefaulft={'xxxxxxxxxx'}
          categoryDefaulft={''}
          typeDefault={1}
        />
      </ThemeProvider>
    )
  })

  it('Keydown SubCategories', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <MenuInfoUsuario
          theme={lightTheme}
          welcome={'¡Hola esteban!'}
          name={['esteban']}
          isService={false}
          setisOpenMenu={() => {}}
          isOpenMenu={true}
          subcategory={''}
          category={''}
          deleteDataBaseUser={() => {}}
          services={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          typeUser={1}
          settypeUser={() => {}}
          indexDBUserNames={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          nameUsers={{ nameValue: '', typeUser: 1 }}
          setIsOpenMenu={() => {}}
          lineaActual={'Ahorro'}
          active={
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zNS45OTIyIDE4LjAxNTlDMzYuMjcwMiAyOC4yODkyIDI5LjA3NyAzNS4yMzA3IDE4LjAyNjQgMzUuOTU5NUM2Ljk3NTkyIDM2LjY1MzcgMC44NTk5MTUgMjguMzI0IDAuMDYwNjY0MSAxOC4wMTU5Qy0wLjgwODA4NyA2LjYzMTk1IDcuNzc1MTggMC45Mzk5NjEgMTguMDI2NCAwLjA3MjI4MDZDMjguOTM4IC0wLjgzMDEwNyAzNS42Nzk1IDYuODA1NDggMzUuOTkyMiAxOC4wMTU5WiIgZmlsbD0iI0UzRTgyOSIvPg0KPC9zdmc+DQo='
          }
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
          IconTypeEmpre={[
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
          validateStreetCard={() => {}}
          subCategoryDefaulft={''}
          categoryDefaulft={''}
          typeDefault={1}
        />
      </ThemeProvider>
    )
  })

  it('Keydown SubCategories', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <MenuInfoUsuario
          welcome={'¡Hola esteban!'}
          name={['esteban']}
          isService={false}
          setisOpenMenu={() => {}}
          isOpenMenu={true}
          subcategory={''}
          category={''}
          deleteDataBaseUser={() => {}}
          services={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 1,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          typeUser={1}
          settypeUser={() => {}}
          indexDBUserNames={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          nameUsers={{ nameValue: '', typeUser: 1 }}
          setIsOpenMenu={() => {}}
          lineaActual={'Ahorro'}
          active={
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zNS45OTIyIDE4LjAxNTlDMzYuMjcwMiAyOC4yODkyIDI5LjA3NyAzNS4yMzA3IDE4LjAyNjQgMzUuOTU5NUM2Ljk3NTkyIDM2LjY1MzcgMC44NTk5MTUgMjguMzI0IDAuMDYwNjY0MSAxOC4wMTU5Qy0wLjgwODA4NyA2LjYzMTk1IDcuNzc1MTggMC45Mzk5NjEgMTguMDI2NCAwLjA3MjI4MDZDMjguOTM4IC0wLjgzMDEwNyAzNS42Nzk1IDYuODA1NDggMzUuOTkyMiAxOC4wMTU5WiIgZmlsbD0iI0UzRTgyOSIvPg0KPC9zdmc+DQo='
          }
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
          IconTypeEmpre={[
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
          validateStreetCard={() => {}}
          subCategoryDefaulft={''}
          categoryDefaulft={''}
          typeDefault={1}
        />
      </ThemeProvider>
    )
  })

  it('Keydown SubCategories', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <MenuInfoUsuario
          welcome={'¡Hola esteban!'}
          name={['estebanxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx']}
          isService={false}
          setisOpenMenu={() => {}}
          isOpenMenu={true}
          subcategory={''}
          category={''}
          deleteDataBaseUser={() => {}}
          services={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 1,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          typeUser={1}
          settypeUser={() => {}}
          indexDBUserNames={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          nameUsers={{ nameValue: '', typeUser: 1 }}
          setIsOpenMenu={() => {}}
          lineaActual={'Ahorro'}
          active={
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zNS45OTIyIDE4LjAxNTlDMzYuMjcwMiAyOC4yODkyIDI5LjA3NyAzNS4yMzA3IDE4LjAyNjQgMzUuOTU5NUM2Ljk3NTkyIDM2LjY1MzcgMC44NTk5MTUgMjguMzI0IDAuMDYwNjY0MSAxOC4wMTU5Qy0wLjgwODA4NyA2LjYzMTk1IDcuNzc1MTggMC45Mzk5NjEgMTguMDI2NCAwLjA3MjI4MDZDMjguOTM4IC0wLjgzMDEwNyAzNS42Nzk1IDYuODA1NDggMzUuOTkyMiAxOC4wMTU5WiIgZmlsbD0iI0UzRTgyOSIvPg0KPC9zdmc+DQo='
          }
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
          IconTypeEmpre={[
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
          validateStreetCard={() => {}}
          subCategoryDefaulft={''}
          categoryDefaulft={'xxxxxxxxxxx'}
          typeDefault={1}
          isNotUser={() => {}}
        />
      </ThemeProvider>
    )
    wrapper
      .find('#isNotUser')
      .first()
      .simulate('click')
    wrapper
      .find('#isNotUser')
      .first()
      .simulate('keydown')
  })

  it('Keydown SubCategories', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <MenuInfoUsuario
          welcome={'¡Hola esteban!'}
          name={'estebanxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
          isService={false}
          setisOpenMenu={() => {}}
          isOpenMenu={true}
          subcategory={''}
          category={''}
          deleteDataBaseUser={() => {}}
          services={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 1,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          typeUser={1}
          settypeUser={() => {}}
          indexDBUserNames={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          nameUsers={{ nameValue: '', typeUser: 1 }}
          setIsOpenMenu={() => {}}
          lineaActual={'Ahorro'}
          active={
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zNS45OTIyIDE4LjAxNTlDMzYuMjcwMiAyOC4yODkyIDI5LjA3NyAzNS4yMzA3IDE4LjAyNjQgMzUuOTU5NUM2Ljk3NTkyIDM2LjY1MzcgMC44NTk5MTUgMjguMzI0IDAuMDYwNjY0MSAxOC4wMTU5Qy0wLjgwODA4NyA2LjYzMTk1IDcuNzc1MTggMC45Mzk5NjEgMTguMDI2NCAwLjA3MjI4MDZDMjguOTM4IC0wLjgzMDEwNyAzNS42Nzk1IDYuODA1NDggMzUuOTkyMiAxOC4wMTU5WiIgZmlsbD0iI0UzRTgyOSIvPg0KPC9zdmc+DQo='
          }
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
          IconTypeEmpre={[
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
          validateStreetCard={() => {}}
          subCategoryDefaulft={''}
          categoryDefaulft={'xxxxxxxxxxx'}
          typeDefault={1}
          isNotUser={() => {}}
          setclosedMenuPizza={() => {}}
        />
      </ThemeProvider>
    )
    wrapper.find('#btn-cerrar').simulate('click')
    wrapper.find('#btn-cerrar').simulate('keydown')
  })

  it('Keydown SubCategories', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <MenuInfoUsuario
          welcome={'¡Hola esteban!'}
          name={'estebanxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
          isService={false}
          setisOpenMenu={() => {}}
          isOpenMenu={true}
          subcategory={''}
          category={''}
          deleteDataBaseUser={() => {}}
          services={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 1,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          typeUser={1}
          settypeUser={() => {}}
          indexDBUserNames={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          nameUsers={{ nameValue: '', typeUser: 1 }}
          setIsOpenMenu={() => {}}
          lineaActual={'Ahorro'}
          active={
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zNS45OTIyIDE4LjAxNTlDMzYuMjcwMiAyOC4yODkyIDI5LjA3NyAzNS4yMzA3IDE4LjAyNjQgMzUuOTU5NUM2Ljk3NTkyIDM2LjY1MzcgMC44NTk5MTUgMjguMzI0IDAuMDYwNjY0MSAxOC4wMTU5Qy0wLjgwODA4NyA2LjYzMTk1IDcuNzc1MTggMC45Mzk5NjEgMTguMDI2NCAwLjA3MjI4MDZDMjguOTM4IC0wLjgzMDEwNyAzNS42Nzk1IDYuODA1NDggMzUuOTkyMiAxOC4wMTU5WiIgZmlsbD0iI0UzRTgyOSIvPg0KPC9zdmc+DQo='
          }
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
          IconTypeEmpre={[
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
          validateStreetCard={() => {}}
          subCategoryDefaulft={''}
          categoryDefaulft={'xxxxxxxxxxx'}
          typeDefault={1}
          isNotUser={() => {}}
          setclosedMenuPizza={() => {}}
        />
      </ThemeProvider>
    )
    wrapper.find('#btn-cerrar').simulate('click')
    wrapper.find('#btn-cerrar').simulate('keydown')
  })

  it('Keydown SubCategories', () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <MenuInfoUsuario
          welcome={'¡Hola esteban!'}
          name={'estebanxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
          isService={false}
          setisOpenMenu={() => {}}
          isOpenMenu={true}
          subcategory={''}
          category={''}
          deleteDataBaseUser={() => {}}
          services={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 1,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          typeUser={1}
          settypeUser={() => {}}
          indexDBUserNames={{
            host: '19191229128ESTEBAN172202114620',
            nameuser: 'esteban',
            category: 'Ahorro',
            subcategory: '',
            type: 2,
            age: 0,
            gender: null,
            encuesta: 'false',
            id: 6
          }}
          nameUsers={{ nameValue: '', typeUser: 1 }}
          setIsOpenMenu={() => {}}
          lineaActual={'Ahorro'}
          active={
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zNS45OTIyIDE4LjAxNTlDMzYuMjcwMiAyOC4yODkyIDI5LjA3NyAzNS4yMzA3IDE4LjAyNjQgMzUuOTU5NUM2Ljk3NTkyIDM2LjY1MzcgMC44NTk5MTUgMjguMzI0IDAuMDYwNjY0MSAxOC4wMTU5Qy0wLjgwODA4NyA2LjYzMTk1IDcuNzc1MTggMC45Mzk5NjEgMTguMDI2NCAwLjA3MjI4MDZDMjguOTM4IC0wLjgzMDEwNyAzNS42Nzk1IDYuODA1NDggMzUuOTkyMiAxOC4wMTU5WiIgZmlsbD0iI0UzRTgyOSIvPg0KPC9zdmc+DQo='
          }
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
          IconTypeEmpre={[
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
          validateStreetCard={() => {}}
          subCategoryDefaulft={''}
          categoryDefaulft={'xxxxxxxxxxx'}
          typeDefault={1}
          isNotUser={() => {}}
          setclosedMenuPizza={() => {}}
        />
      </ThemeProvider>
    )
    wrapper.find('#btn-cerrar').simulate('click')
    wrapper.find('#btn-cerrar').simulate('keydown')
  })
})
