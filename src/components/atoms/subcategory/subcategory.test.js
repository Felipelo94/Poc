import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'
import darkMode from '../../../themes/dark'
import { ThemeProvider } from 'styled-components'
import SubCategory from './subcategory'

describe('Subcategory', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <SubCategory />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with isActive true', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <SubCategory isActive={true} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('captures click', done => {
    function handleClick() {
      done()
    }

    const { getByTestId } = render(
      <ThemeProvider theme={darkMode}>
        <SubCategory onClick={handleClick} />
      </ThemeProvider>
    )

    const node = getByTestId('subcategory')
    fireEvent.click(node)
    const tree = renderer
      .create(
        <ThemeProvider theme={darkMode}>
          <SubCategory />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  afterEach(cleanup)
})
