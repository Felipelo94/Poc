import { restrictPrehome } from './restrictPrehome'
import data from './contenidosPrehomeValue.json'

test('array data null', () => {
  restrictPrehome(data)
})
