import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { transformData } from './transform-data'
import ContentUtil from './ContentUtil'
import dataTest from './__mocks__/transform-data-proper-props.json'
import dataTestNoProperProps from './__mocks__/transform-data-no-proper-props.json'
import dataTestNoContentProps from './__mocks__/transform-data-no-content-props.json'
import dataTestNoImageProps from './__mocks__/transform-data-no-image-props.json'

describe('transform data', () => {
  test('transformData with no props', () => {
    const contentUtil = new ContentUtil()
    transformData({}, contentUtil)
    transformData('', '')
  })

  test('transformData with proper props', () => {
    const contentUtil = new ContentUtil()
    transformData(dataTest, contentUtil)
  })

  test('transformData with no proper props', () => {
    const contentUtil = new ContentUtil()
    transformData(dataTestNoProperProps, contentUtil)
  })

  test('transformData with no content props', () => {
    const contentUtil = new ContentUtil()
    transformData(dataTestNoContentProps, contentUtil)
  })

  test('transformData with no image props', () => {
    const contentUtil = new ContentUtil()
    transformData(dataTestNoImageProps, contentUtil)
  })
})
