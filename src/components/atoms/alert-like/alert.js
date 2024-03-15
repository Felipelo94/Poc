import React from 'react'
import { useState } from 'react'
import { ReactComponent as ErrorAlertIcon } from '../../../assets/images/icons/alert-circle-error.svg'
import { ReactComponent as SuccessAlertIcon } from '../../../assets/images/icons/alert-success.svg'
import { ReactComponent as CloseIcon } from '../../..//assets/images/icons/close.svg'
import { useSpring, animated, config } from 'react-spring'
import './alert.scss'

const Alert = props => {
  const {
    alertMessage,
    alertType,
    onAlertEnd = () => {},
    doAfterAlertEnds = () => {}
  } = props

  const [isAnimationPaused, setIsAnimationPaused] = useState(false)
  const [isAlertActive, setIsAlertActive] = useState(true)
  const [showAlert, setShowAlert] = useState(true)

  const styles = useSpring({
    from: { marginRight: '-500px' },
    to: { marginRight: '0px' },
    config: config.gentle
  })

  const alertClasses = `alert ${!isAlertActive ? 'alert--hidden' : ''}`
  const topLineClasses = `
    alert__top-line alert__top-line--${alertType}
    ${isAnimationPaused ? 'alert__top-line--paused' : ''}
  `

  const hideAndCloseAlert = () => {
    setIsAlertActive(false)
    setTimeout(() => {
      setShowAlert(false)
      doAfterAlertEnds()
      onAlertEnd()
    }, 500)
  }

  const pauseAnimation = () => {
    setIsAnimationPaused(true)
  }

  const resumeAnimation = () => {
    setIsAnimationPaused(false)
  }

  return (
    showAlert && (
      <animated.div
        className={alertClasses}
        data-testid="alert"
        style={styles}
        onMouseEnter={pauseAnimation}
        onMouseLeave={resumeAnimation}
      >
        <div
          className={topLineClasses}
          data-testid="alert-top-line"
          onAnimationEnd={hideAndCloseAlert}
        ></div>
        <div className="alert__content">
          <div
            className={`alert__icon-container alert__icon-container--${alertType}`}
          >
            {alertType === 'error' ? (
              <ErrorAlertIcon className="alert__icon" />
            ) : (
              <SuccessAlertIcon className="alert__icon" />
            )}
          </div>
          <span className={`alert__text alert__text--${alertType}`}>
            {alertMessage}
          </span>
          <button
            className="alert__close-button"
            data-testid="alert-close-button"
            onClick={onAlertEnd}
          >
            <CloseIcon className="alert__close-icon" />
          </button>
        </div>
      </animated.div>
    )
  )
}

export default Alert
