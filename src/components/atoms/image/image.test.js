import React from 'react'
import renderer from 'react-test-renderer'
import Image from './image'

describe('Button', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Image
          imagen="https://nestordominguez.com/wp-content/uploads/2017/10/dinosaurios-grande.jpg"
          alt="iamgen dinosaurio"
          width="500px"
          height="100px"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props line Inversion', () => {
    const tree = renderer
      .create(
        <Image
          line={'Inversion'}
          imagen="https://nestordominguez.com/wp-content/uploads/2017/10/dinosaurios-grande.jpg"
          alt="iamgen dinosaurio"
          width="500px"
          height="100px"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
