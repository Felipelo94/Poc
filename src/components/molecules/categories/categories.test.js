import React from 'react'
import renderer from 'react-test-renderer'
import Categories from './categories'
import dataIndex from '../../../utils/contenidosPrehomeValue.json'
import { cleanup, render, screen } from '@testing-library/react'
import darkMode from '../../../themes/dark'
import { ThemeProvider } from 'styled-components'
import { mount } from 'enzyme'

describe('Categories', () => {
  const data = dataIndex

  it('Categories renders correctly persona', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <Categories data={data} typeUser={1} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Categories renders correctly Empresa', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <Categories
            defaultValue={true}
            indexCategorySelected={2}
            data={data}
            typeUser={2}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Categories renders undefined', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <Categories data={undefined} typeUser={2} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Categories renders correctly persona categorySelect not null', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <Categories data={data} typeUser={1} categorySelect={{}} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Categories renders correctly persona click category active', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Categories data={data} typeUser={1} />
      </ThemeProvider>
    )
    const category = wrapper.find('#category-container-2')
    category.simulate('click')
  })

  it('Categories renders correctly persona click category inactive', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Categories data={data} typeUser={1} />
      </ThemeProvider>
    )
    const category = wrapper.find('#category-container-0')
    category.simulate('click')
  })

  it('Categories renders correctly persona keydown category active', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Categories data={data} typeUser={1} />
      </ThemeProvider>
    )
    const category = wrapper.find('#category-container-2')
    category.simulate('keydown')
  })

  it('Categories renders correctly persona keydown category inactive', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Categories data={data} typeUser={1} categorySelect={null} />
      </ThemeProvider>
    )
    const category = wrapper.find('#category-container-0')
    category.simulate('keydown')
  })

  it('Categories renders correctly empresa click category active', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Categories data={data} typeUser={2} />
      </ThemeProvider>
    )
    const category = wrapper.find('#category-container-2')
    category.simulate('click')
  })

  it('Categories renders correctly empresa click item category active', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Categories data={data} typeUser={2} onCategoryClick={e => { }} />
      </ThemeProvider>
    )
    const category = wrapper.find('#category-container-2')
    category.simulate('click')
    const categoryItem = category.find('#category')
    categoryItem.simulate('click')
  })

  it('Categories renders correctly empresa click item category inactive', () => {
    const wrapper = mount(
      <ThemeProvider theme={darkMode}>
        <Categories data={data} typeUser={1} onCategoryClick={e => { }} />
      </ThemeProvider>
    )
    const category = wrapper.find('#category-container-0')
    const categoryItem = category.find('#category')
    categoryItem.simulate('click')
  })

  it('Categories renders categories and then change the indexCategorySelected  ', async () => {
    const categorySelect = {
      "node": {
        "orden": 4,
        "titulo": "Saber sobre Cesantías",
        "category": "Cesantías",
        "classGtm": "SaberSobreCesantias",
        "IsActivo": true,
        "IsIcon": false,
        "id": "e1825aaa-b1c4-50cd-ab37-6b44225c7b3b",
        "imagen": {
          "fluid": {
            "src": "prehome-cesantias"
          }
        },
        "subCategorias": [
          {
            "titulo": "Empleado",
            "classGtm": "gtmCuentCualEsTuEstLabSoyEmpleado",
            "etiqueta": "Empleado",
            "image": null,
            "toltip": null,
            "age": null
          },
          {
            "titulo": "Cesante",
            "classGtm": "gtmCuentCualEsTuEstLabEstoyDesemp",
            "etiqueta": "Cesante",
            "image": null,
            "toltip": null,
            "age": null
          },
          {
            "titulo": "Independiente",
            "classGtm": "gtmCuentCualEsTuEstLabSoyIndepend",
            "etiqueta": "Independiente",
            "image": null,
            "toltip": null,
            "age": null
          }
        ],
        "frase": "¿Cuál es tu estado laboral?"
      }
    };

    const { rerender } = render(
      <ThemeProvider theme={darkMode}>
        <Categories data={data} typeUser={1} indexCategorySelected={2} categorySelect={categorySelect} />
      </ThemeProvider>
    )
    const categoriesFirst = await screen.queryAllByTestId('category-element');
    expect(categoriesFirst[3].className).toContain('category-inactive');
    expect(categoriesFirst[2].className).toContain('category-active');
    
    rerender(
      <ThemeProvider theme={darkMode}>
        <Categories data={data} typeUser={1} indexCategorySelected={3} categorySelect={categorySelect} />
      </ThemeProvider>
    )

    const categoriesChanged = await screen.queryAllByTestId('category-element');
    expect(categoriesChanged[3].className).toContain('category-active');
    expect(categoriesChanged[2].className).toContain('category-inactive');
  })

  afterEach(cleanup)
})
