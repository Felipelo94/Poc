import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import * as useCurrentWidth from '../../../hooks/useCurrentWidth/useCurrentWidth'
import BannerSolutions from './banner-solutions'

describe('<Map />', () => {
  test('renders', () => {
    jest.spyOn(useCurrentWidth, 'default').mockImplementation(() => 800);
    render(
      <BannerSolutions
        title="title"
        description="description"
        imageUrl="imageUrl"
        mobileImageUrl="mobileImageUrl"
      />
    )
    screen.getByText('title');
    expect(document.getElementsByClassName('banner__image')[0]).toHaveAttribute(
      'src',
      'mobileImageUrl',
    );
  })

  test('renders with id', () => {
    render(
      <BannerSolutions
        id="6dfZBVzT68ZZPMcbVuBTTy"
        title="title"
        description="description"
        imageUrl="imageUrl"
        mobileImageUrl="mobileImageUrl"
      />
    )
    expect(document.getElementsByClassName('banner__title--investment')).toHaveLength(1);
  })

  test('renders with screenWidth >= 801', () => {
    jest.spyOn(useCurrentWidth, 'default').mockImplementation(() => 801);
    render(
      <BannerSolutions
        id="6dfZBVzT68ZZPMcbVuBTTy"
        title="title"
        description="description"
        imageUrl="imageUrl"
        mobileImageUrl="mobileImageUrl"
      />
    )
    expect(document.getElementsByClassName('banner__image')[0]).toHaveAttribute(
      'src',
      'imageUrl',
    );
  })
})
