import React from 'react'
import { render, screen } from '@testing-library/react'
import NavigationBar from './navigation-bar'
import data from '../../molecules/best-menu/best-menu.json'

describe('<NavigationBar />', () => {
  test('Should render correctly', () => {
    render(
      <NavigationBar
        options={data}
        setitemActive={() => {}}
        active={'31JYCa3KmNmAmNH2Pj5Zxm'}
        setindexActivo={() => {}}
      />
    )
    expect(screen).toMatchSnapshot()
  })
})
