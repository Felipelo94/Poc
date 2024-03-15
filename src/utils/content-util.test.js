import ContentUtil from './ContentUtil'

test('buscar valor en array', () => {
  const content = new ContentUtil()
  const data = [
    {
      node: {
        nombreTexto: 'texto-tipo-persona',
        valorTexto: {
          internal: {
            content: '¿Quién eres?'
          }
        }
      }
    }
  ]
  expect(content.getValueContent(data, 'texto-tipo-persona')).toBe(
    '¿Quién eres?'
  )
})

test('array data null', () => {
  const content = new ContentUtil()
  const data = null
  expect(content.getValueContent(data, undefined)).toBe('')
})

test('array data undefinde', () => {
  const content = new ContentUtil()
  const data = undefined
  expect(content.getValueContent(data, null)).toBe('')
})
