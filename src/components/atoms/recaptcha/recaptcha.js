import React, { useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const Recaptcha = ({ setRecaptchaValue }) => {
  const isBrowser = typeof window !== 'undefined'
  const showRecaptcha =
    String(process.env.REACT_APP_ENVIRONMENT_HIDDEN_RECAPTCHA) === 'false'

  useEffect(() => {
    if (showRecaptcha) return
    setRecaptchaValue('Token not needed')
  }, [])

  return (
    isBrowser &&
    showRecaptcha && (
      <ReCAPTCHA
        size="normal"
        sitekey={process.env.KEY_SITE_CAPTCHA}
        onChange={setRecaptchaValue}
        hl="es"
      />
    )
  )
}

export default Recaptcha
