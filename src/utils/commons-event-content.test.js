import { clickWithScrollCenter } from './commons-event-content'
import React from 'react'

test('array data ', () => {
  clickWithScrollCenter(
    <p id="demo">Click the button to change the text in this paragraph.</p>
  )
})

test('array  null', () => {
  clickWithScrollCenter(null)
})

test('array data ', () => {
  const wrapper = (
    <p id="demo">Click the button to change the text in this paragraph.</p>
  )
  setTimeout(() => {
    expect(
      wrapper
        .find('p')
        .at(0)
        .text()
        .trim()
    ).toEqual(jsonDataRooms.data[0].name)
    clickWithScrollCenter(wrapper)
    wrapper.unmount()
    done()
  }, 1000)
})
