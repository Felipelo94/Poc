import { currentDay, substractDays } from './dateUtil'

test('Script Para persona Cesantias', () => {
  currentDay()
})

describe('substractDays()', () => {
  test.each([
    ['2022-01-15', 2, '2022-01-13'],
    ['2022-01-01', 1, '2021-12-31'],
    ['2022-02-28', 28, '2022-01-31']
  ])(
    'substractDays(%s, %s) should return %s',
    (current, numberOfDays, expectedDate) => {
      const substracted = substractDays(new Date(current), numberOfDays)
      expect(substracted.getTime()).toBe(new Date(expectedDate).getTime())
    }
  )

  test('does not mutate the given date', () => {
    const rawDate = '2022-01-20'
    const current = new Date(rawDate)
    substractDays(current, 1)
    expect(current.getTime()).toBe(new Date(rawDate).getTime())
  })
})
