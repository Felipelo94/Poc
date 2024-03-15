import data from './url-repeat.json'
import data2 from './url-repeat2.json'
const { fuctionUrlRepeat } = require('./url-repeat')

const pageContext1 = {
  type: 1,
  category: 'TEST'
}

test('array data null 1', () => {
  fuctionUrlRepeat(data)
  fuctionUrlRepeat(data, true)
  fuctionUrlRepeat(data2)
  fuctionUrlRepeat(data, pageContext1)
})
