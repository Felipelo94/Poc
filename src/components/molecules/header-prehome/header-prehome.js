import React from 'react'
import QuickAccess from '../quick-access/quick-access'
import LogoAzulProteccion from '../../../assets/images/logotipo-azul.png'
import './header-prehome.scss'
import Anchor from '../../atoms/anchor/anchor'

const HeaderPrehome = () => {
  return (
    <div className="header-prehome">
      <div className="header-prehome__top-line"></div>
      <div className="header-prehome__title">
        <img src={LogoAzulProteccion} alt="Logotipo de Protección" />
        <Anchor
          className="header-prehome__button"
          target="_blank"
          rel="noreferrer"
          href="https://www.proteccion.com/portalafiliados/afiliados/login-redirect"
        >
          Zona transaccional
        </Anchor>
      </div>
      <div className="header-prehome__quick-access">
        <QuickAccess
          animation={true}
          type={1}
          category="PREHOME"
          subCategory="ALL"
        />
      </div>
    </div>
  )
}

export default HeaderPrehome
