import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { ReactComponent as DownIcon } from '../../../../assets/images/icons/footer-btn-down.svg'
import { ReactComponent as UpIcon } from '../../../../assets/images/icons/footer-btn-up.svg'
import './button-toggle-footer.scss'

const ButtonToggleFooter = ({ isOpenFooter = true, handleOpenFooter }) => {
  const [isPressedBtn, setIsPressedBtn] = useState(false)

  useEffect(() => {
    const rippleEffectVisibility = setTimeout(() => setIsPressedBtn(false), 500)

    return () => {
      clearTimeout(rippleEffectVisibility)
    }
  }, [isPressedBtn])

  const animateButton = () => {
    handleOpenFooter()
    setIsPressedBtn(true)
  }
  return (
    <button
      id="btnExpandableFooter"
      className="button-toggle-footer"
      onClick={animateButton}
    >
      {isPressedBtn && (
        <span
          className={`${
            isOpenFooter
              ? 'button-toggle-footer__ripple--in'
              : 'button-toggle-footer__ripple--out'
          }`}
        />
      )}
      {isOpenFooter ? (
        <DownIcon
          className="button-toggle-footer__toggle-icon"
          id="imgExpandableFooter"
          alt="Icono guardar footer"
          title="Icono guardar footer"
        />
      ) : (
        <UpIcon
          className="button-toggle-footer__toggle-icon"
          id="imgExpandableFooter"
          alt="Icono expandir footer"
          title="Icono expandir footer"
        />
      )}
    </button>
  )
}

ButtonToggleFooter.propTypes = {
  isOpenFooter: PropTypes.bool,
  handleOpenFooter: PropTypes.func
}

export default ButtonToggleFooter
