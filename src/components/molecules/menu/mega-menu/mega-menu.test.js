import React from 'react'
import renderer from 'react-test-renderer'
import MegaMenu from './mega-menu'
import personMenu from '../../../../const/dictionary/multilevel-menu-options-person.json'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import lightTheme from '../../../../themes/light'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <MegaMenu
            changesPerfilamiento={jest.fn()}
            welcome="¡Hola esteban!"
            subcategory=""
            category=""
            name={['esteban']}
            deleteDataBaseUser={() => {}}
            services={{
              host: '181137226214ESTEBAN65202113209',
              nameuser: 'esteban',
              category: 'Cesantías',
              subcategory: 'Cesante',
              type: 1,
              age: 0,
              gender: null,
              encuesta: 'false'
            }}
            isNotUser={() => {}}
            subCategoryDefaulft={'Cesante'}
            typeDefault={1}
            categoryDefaulft={'Cesantías'}
            isDarkMode={true}
            isOpenMenu={false}
            setisOpenMenu={() => {}}
            setclick={() => {}}
            setsoluciones={() => {}}
            dataMenuOptions={personMenu}
            OpenEventTour={() => {}}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <MegaMenu
            changesPerfilamiento={jest.fn()}
            welcome="¡Hola esteban!"
            subcategory=""
            category=""
            name={['esteban']}
            deleteDataBaseUser={() => {}}
            services={{
              host: '181137226214ESTEBAN65202113209',
              nameuser: 'esteban',
              category: 'Cesantías',
              subcategory: 'Cesante',
              type: 1,
              age: 0,
              gender: null,
              encuesta: 'false'
            }}
            isNotUser={() => {}}
            subCategoryDefaulft={'Cesante'}
            typeDefault={1}
            categoryDefaulft={'Inversión'}
            isDarkMode={false}
            isOpenMenu={false}
            setisOpenMenu={() => {}}
            setclick={() => {}}
            setsoluciones={() => {}}
            dataMenuOptions={personMenu}
            OpenEventTour={() => {}}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <MegaMenu
            changesPerfilamiento={jest.fn()}
            welcome="¡Hola esteban!"
            subcategory=""
            category=""
            name={['esteban']}
            deleteDataBaseUser={() => {}}
            services={{
              host: '181137226214ESTEBAN65202113209',
              nameuser: 'esteban',
              category: 'Cesantías',
              subcategory: 'Cesante',
              type: 1,
              age: 0,
              gender: null,
              encuesta: 'false'
            }}
            isNotUser={() => {}}
            subCategoryDefaulft={'Cesante'}
            typeDefault={2}
            categoryDefaulft={'Cesantías'}
            isDarkMode={false}
            isOpenMenu={false}
            setisOpenMenu={() => {}}
            setclick={() => {}}
            setsoluciones={() => {}}
            dataMenuOptions={personMenu}
            OpenEventTour={() => {}}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <MegaMenu
            changesPerfilamiento={jest.fn()}
            welcome="¡Hola esteban!"
            subcategory=""
            category=""
            deleteDataBaseUser={() => {}}
            services={{
              host: '181137226214ESTEBAN65202113209',
              nameuser: 'esteban',
              category: 'Cesantías',
              subcategory: 'Cesante',
              type: 1,
              age: 0,
              gender: null,
              encuesta: 'false'
            }}
            isNotUser={() => {}}
            subCategoryDefaulft={'Cesante'}
            typeDefault={1}
            categoryDefaulft={'Cesantías'}
            isDarkMode={false}
            isOpenMenu={false}
            setisOpenMenu={() => {}}
            setclick={() => {}}
            setsoluciones={() => {}}
            dataMenuOptions={personMenu}
            OpenEventTour={() => {}}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <MegaMenu
            changesPerfilamiento={jest.fn()}
            welcome="¡Hola esteban!"
            subcategory=""
            category=""
            deleteDataBaseUser={() => {}}
            isNotUser={() => {}}
            subCategoryDefaulft={'Cesante'}
            typeDefault={1}
            categoryDefaulft={'Cesantías'}
            isDarkMode={false}
            isOpenMenu={false}
            setisOpenMenu={() => {}}
            setclick={() => {}}
            setsoluciones={() => {}}
            dataMenuOptions={personMenu}
            OpenEventTour={() => {}}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('isNotUser keydown', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <MegaMenu
          changesPerfilamiento={jest.fn()}
          welcome="¡Hola esteban!"
          subcategory=""
          category=""
          deleteDataBaseUser={() => {}}
          isNotUser={() => {}}
          subCategoryDefaulft={'Cesante'}
          typeDefault={2}
          categoryDefaulft={'Cesantías'}
          isDarkMode={false}
          isOpenMenu={false}
          setisOpenMenu={() => {}}
          setclick={() => {}}
          setsoluciones={() => {}}
          dataMenuOptions={personMenu}
          OpenEventTour={() => {}}
        />
      </ThemeProvider>
    )
    wrapper
      .find('#isNotUser')
      .first()
      .simulate('keydown')
    wrapper
      .find('#isNotUser')
      .first()
      .simulate('click')
    wrapper
      .find('#mega-menu-container-info-user-icon-menu-categoria-value-Ahorro')
      .first()
      .simulate('click')
  })

  it('isNotUser keydown', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <MegaMenu
          changesPerfilamiento={jest.fn()}
          welcome="¡Hola esteban!"
          subcategory=""
          category=""
          deleteDataBaseUser={() => {}}
          isNotUser={() => {}}
          subCategoryDefaulft={'Cesante'}
          typeDefault={1}
          categoryDefaulft={'Cesantías'}
          isDarkMode={false}
          isOpenMenu={false}
          setisOpenMenu={() => {}}
          setclick={() => {}}
          setsoluciones={() => {}}
          dataMenuOptions={personMenu}
          OpenEventTour={() => {}}
        />
      </ThemeProvider>
    )
    wrapper
      .find('#mega-menu-container-info-user-icon-menu-categoria-value-Ahorro')
      .first()
      .simulate('click')
  })

  it('isNotUser keydown', () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <MegaMenu
          changesPerfilamiento={jest.fn()}
          welcome="¡Hola esteban!"
          subcategory=""
          category=""
          deleteDataBaseUser={() => {}}
          isNotUser={() => {}}
          subCategoryDefaulft={'Cesante'}
          typeDefault={0}
          categoryDefaulft={'Cesantías'}
          isDarkMode={false}
          isOpenMenu={false}
          setisOpenMenu={() => {}}
          setclick={() => {}}
          setsoluciones={() => {}}
          dataMenuOptions={personMenu}
          OpenEventTour={() => {}}
        />
      </ThemeProvider>
    )
    wrapper
      .find('#mega-menu-container-info-user-icon-menu-categoria-value-Ahorro')
      .first()
      .simulate('click')

    wrapper
      .find('#categoria-menu-info')
      .first()
      .simulate('click')
  })
})
