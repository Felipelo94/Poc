import {
  dataGeneratePages,
  generatePagesTemplate,
  getIdDiv,
  getUniqueArray
} from './generate-pages-utils'
import data from './__mocks__/generate-pages-utils-data.json'

describe('generate-pages-utils', () => {
  test('getUniqueArray function', () => {
    expect(getUniqueArray(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  })

  test('getIdDiv function', () => {
    expect(getIdDiv('título')).toBe('titulo');
    expect(getIdDiv(null)).toBe('');
  })

  test('dataGeneratePages function', () => {
    expect(dataGeneratePages(data, null).length).toBe(24)
  })

  test('generatePagesTemplate function (type: leyesydecretos)', () => {
    expect(
      generatePagesTemplate(
        null,
        'leyesydecretos',
        [],
        null,
        { contentful_id: 'id' },
        [{ contentful_id: 'id' }]
      )[0]
    ).toEqual({
      internal: { contentful_id: 'id' },
      actions: null,
      type: 'leyesydecretos',
      resultFilter: undefined,
      dataGroups: [],
      categoriaProducto: null
    })
  })

  test('generatePagesTemplate function (type: alternativas)', () => {
    expect(
      generatePagesTemplate(
        null,
        'alternativas',
        [],
        null,
        { contentful_id: 'id' },
        [{ contentful_id: 'id' }]
      )
    ).toEqual({
      internal: { contentful_id: 'id' },
      actions: null,
      type: 'alternativas',
      resultFilter: undefined,
      dataGroups: [],
      categoriaProducto: null
    })
  })

  test('generatePagesTemplate function (type: canales)', () => {
    expect(
      generatePagesTemplate(
        null,
        'canales',
        [],
        null,
        { contentful_id: 'id' },
        [{ contentful_id: 'id' }]
      )
    ).toEqual({
      internal: { contentful_id: 'id' },
      actions: null,
      type: 'canales',
      resultFilter: [],
      dataGroups: [],
      categoriaProducto: null
    })
  })

  test('generatePagesTemplate function (type: soluciones)', () => {
    expect(
      generatePagesTemplate(
        null,
        'soluciones',
        [[{ id: 'id' }], []],
        null,
        { contentful_id: 'id' },
        [{ contentful_id: 'id' }]
      )[0]
    ).toEqual({
      internal: { contentful_id: 'id' },
      actions: null,
      type: 'soluciones',
      resultFilter: [[{ id: 'id' }]],
      dataGroups: [{ id: 'id' }],
      categoriaProducto: null
    })
  })

  test('generatePagesTemplate function (type: soluciones with diff id)', () => {
    expect(
      generatePagesTemplate(
        null,
        'soluciones',
        [[{ id: 'diff-id' }], []],
        null,
        { contentful_id: 'id' },
        [{ contentful_id: 'id' }]
      )[0]
    ).toEqual({
      internal: { contentful_id: 'id' },
      actions: null,
      type: 'soluciones',
      resultFilter: [],
      dataGroups: [],
      categoriaProducto: null
    })
  })

  test('generatePagesTemplate function (type: x)', () => {
    expect(
      generatePagesTemplate(null, 'x', [], null, { contentful_id: 'id' }, [
        { contentful_id: 'id' }
      ])
    ).toEqual([])
  })

  test('generatePagesTemplate function (type: x with dataGroups, dataContenido)', () => {
    expect(
      generatePagesTemplate(
        null,
        'x',
        [{ biteOne: { id: 'id' } }],
        null,
        { contentful_id: 'id' },
        { contentful_id: 'id' }
      )[0]
    ).toEqual({
      internal: { contentful_id: 'id' },
      actions: null,
      type: 'x',
      resultFilter: { biteOne: { id: 'id' } },
      dataGroups: [{ biteOne: { id: 'id' } }],
      categoriaProducto: null
    })
  })

  test('generatePagesTemplate function (type: x with dataGroups, dataContenido array)', () => {
    expect(
      generatePagesTemplate(
        null,
        'x',
        [{ biteOne: { id: 'id' } }],
        null,
        { contentful_id: 'id' },
        [{ contentful_id: 'id' }]
      )[0]
    ).toEqual({
      internal: { contentful_id: 'id' },
      actions: null,
      type: 'x',
      resultFilter: { biteOne: { id: 'id' } },
      dataGroups: [{ biteOne: { id: 'id' } }],
      categoriaProducto: null
    })
  })

  test('generatePagesTemplate function (type: x with dataContenido null)', () => {
    expect(
      generatePagesTemplate(
        null,
        'x',
        [[{ id: 'id' }], []],
        null,
        { contentful_id: 'id' },
        null
      )
    ).toEqual({})
  })
})
