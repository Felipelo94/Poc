import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { SpanIconStyled, SpanLabelStyled } from './user-type'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

const dataActive = {
  isActive: true,
  theme: {
    colors: {
      menuAccessibility: {
        bgIconUserTypeActive: 'imageIcon.svg',
        colorLabelUserTypeActive: '#0033A0'
      }
    }
  }
}

const dataInactive = {
  isActive: false,
  theme: {
    colors: {
      menuAccessibility: {
        bgIconUserTypeActive: 'imageIcon.svg',
        colorLabelUserTypeInactive: '#B6C5DF'
      }
    }
  }
}

describe('<SpanIconStyled/>', () => {
  test('should render the spanIcon with an image if isActive prop is true', () => {
    const spanIcon = renderer
      .create(<SpanIconStyled {...dataActive} />)
      .toJSON()
    expect(spanIcon).toHaveStyleRule('background-image', 'imageIcon.svg')
  })

  test('should not render the spanIcon with an image if isActive prop is false', () => {
    const spanIcon = renderer
      .create(<SpanIconStyled {...dataInactive} />)
      .toJSON()
    expect(spanIcon).not.toHaveStyleRule('background-image', 'imageIcon.svg')
  })
})

describe('<SpanLabelStyled/>', () => {
  test('should render the span with the active color if isActive prop is true', () => {
    const span = renderer.create(<SpanLabelStyled {...dataActive} />).toJSON()
    expect(span).toHaveStyleRule('color', '#0033A0')
  })

  test('should render the span with the inactive color if isActive prop is false', () => {
    const span = renderer.create(<SpanLabelStyled {...dataInactive} />).toJSON()
    expect(span).toHaveStyleRule('color', '#B6C5DF')
  })
})
