import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Video from './video'

const data = [
  'https://www.youtube.com/embed/8420jbTNoMw',
  'https://www.youtube.com/embed/8420jbTNoM2'
]
const data1 = ['https://www.youtube.com/embed/8420jbTNoMw']
let getSuccess
let useEffect
const mockUseEffect = () => {
  useEffect.mockImplementationOnce(f => f())
}
describe('Video', () => {
  beforeEach(() => {
    fetch.resetMocks()
    getSuccess = jest.fn(() =>
      Promise.resolve({
        items: [
          {
            id: '8420jbTNoMw',
            snippet: {
              title: 'titlle',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/jIoEaTN7GGo/sddefault.jpg'
                }
              }
            }
          },
          {
            id: '8420jbTNoM2',
            snippet: {
              title: 'titlle',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/jIoEaTN7GGo/sddefault.jpg'
                }
              }
            }
          }
        ]
      })
    )

    useEffect = jest.spyOn(React, 'useEffect')
  })
  it('renders correctly without props data1', () => {
    const tree = renderer
      .create(<Video videoData={data1} get={getSuccess} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without props', () => {
    const tree = renderer
      .create(<Video videoData={data} get={getSuccess} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
