import { shallow } from 'enzyme'
import React from 'react'

import { Table } from './table'

const headers = [
  { key: '1', rowSpan: '2' },
  { key: '2', colSpan: '2' },
  { key: 'new column 3' }
]
const data = [
  {
    '1': { text: '1', rowSpan: '2' },
    '2': { text: '2', colSpan: '2' },
    'new column 3': { text: '' }
  },
  { '2': { text: '2' }, 'new column 3': { text: '3' } }
]
describe('Audio true ', () => {
  it('renders correctly without props', () => {
    const node = {
      data: {
        target: {
          fields: {
            tableJson: {
              'en-US': { tableHeadings: headers, data }
            }
          }
        }
      }
    }

    const wrapper = shallow(<Table node={node} />)
  })
})
