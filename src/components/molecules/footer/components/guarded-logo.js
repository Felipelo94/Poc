import React from 'react'
import { ReactComponent as GuardedLogoIcon } from '../../../../assets/images/icons/logo_vigilado.svg'
import Anchor from '../../../atoms/anchor/anchor'
import './guarded-logo.scss'

const GuardedLogo = () => {
  return (
    <Anchor
      id="link-guarded-logo"
      className="guarded-logo"
      target="_blank"
      alt="Icono superfinanciera"
      rel="noreferrer"
      href="https://www.superfinanciera.gov.co/jsp/"
    >
      <GuardedLogoIcon
        className="guarded-logo__logo"
        title="Ícono de Vigilado por la Superintendencia Financiera de Colombia"
        alt="Ícono de Superfinanciera, al darle clic lleva al sitio web oficial de la Superintendencia Financiera de Colombia"
      />
    </Anchor>
  )
}

export default GuardedLogo
