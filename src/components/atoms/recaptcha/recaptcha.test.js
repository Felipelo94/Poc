import React from 'react'
import ReCAPTCHA from './recaptcha'
import { render, screen } from '@testing-library/react'

describe('<ReCAPTCHA/>', () => {
  test('should renders correctly', () => {
    const mockFn = jest.fn()

    render(<ReCAPTCHA setRecaptchaValue={mockFn} />)
    expect(screen).toMatchSnapshot()
  })
})
