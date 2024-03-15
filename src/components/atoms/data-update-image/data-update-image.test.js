import React from 'react';

import { act, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DataUpdateImage from './data-update-image';

jest.mock('contentful', () => ({
  createClient: () => ({
    getAsset: async () => ({
      fields: {
        file: {
          url: 'url'
        },
        description: 'description',
      },
    }),
  }),
}));

describe('<DataUpdateImage />', () => {
  test('renders', async () => {
    await act(async () => {
      render(<DataUpdateImage />);
    });
    expect(document.getElementsByClassName('update-data-image__image')[0]).toHaveAttribute(
      'src',
      'url',
    );
  });
});
