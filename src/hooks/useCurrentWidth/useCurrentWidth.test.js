import { renderHook, act } from '@testing-library/react-hooks'
import { fireEvent } from '@testing-library/react'
import useCurrentWidth from './useCurrentWidth'

describe('useCurrentWidth', () => {
  test('should change screenWidth when user resizes the screen', () => {
    window.innerWidth = 1024
    const { result } = renderHook(() => useCurrentWidth())
    expect(result.current).toBe(1024)
    act(() => {
      window.innerWidth = 500
      fireEvent(window, new Event('resize'))
    })
    expect(result.current).toBe(500)
  })
})
