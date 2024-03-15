export const runCallbackWhenRecaptchaReady = callback => {
  window.grecaptcha.enterprise.ready(() => {
    callback()
  })
}

export const recaptchaVerification = callback => {
  runCallbackWhenRecaptchaReady(() => {
    return window.grecaptcha.enterprise
      .execute(
        process.env.REACT_APP_ENVIRONMENT_KEY_SITE_RECAPTCHA_ENTERPRISE,
        {
          action: 'DATA_ACTUALIZATION'
        }
      )
      .then(token => {
        callback(token)
      })
      .catch(err => console.error(err))
  })
}
