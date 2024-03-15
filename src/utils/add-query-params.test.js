import { addQueryParamsToUrl } from './add-query-params'

test('Script Para persona Cesantias', () => {
  expect(addQueryParamsToUrl('https://localhost', { params: 'x'})).toBe('https://localhost/?params=x');
})
