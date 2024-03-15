import React from 'react'
import renderer from 'react-test-renderer'
import AllyList from './allyList'
import imageTalentoSiHay from '../../../assets/images/talentosihay.png'

const testJsonData = [
  {
    titulo: 'xxxxxx',
    descripcion: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    textoCallToAction: 'xxxxxxxxxxxxxxxxxx',
    linkCallToAction: 'xxxxxxxxxxxx',
    imageUrl: imageTalentoSiHay,
    imageName: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    imageTittle: 'xxxxxx',
    updatedAt: '2021-03-17T22:04:15.480Z'
  },

  {
    titulo: 'xxxxxx2',
    descripcion: 'xxxxxxxxxxxxxxxxxxxxxxxx2',
    textoCallToAction: 'xxxxxxxxxxxxxxxxxx2',
    linkCallToAction: 'xxxxxxxxxxxx2',
    imageUrl: imageTalentoSiHay,
    imageName: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2',
    imageTittle: 'xxxxxx2',
    updatedAt: '2021-03-17T22:04:15.480Z'
  }
]

const testLine = 'talento'

describe('content test ', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AllyList />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly', () => {
    const tree = renderer
      .create(<AllyList allyListData={testJsonData} line={testLine} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly just with allyListData', () => {
    const tree = renderer
      .create(<AllyList allyListData={testJsonData} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly just with line', () => {
    const tree = renderer.create(<AllyList line={testLine} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
