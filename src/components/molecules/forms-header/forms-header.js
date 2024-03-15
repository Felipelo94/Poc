import React from 'react'
import lightThemeLogo from '../../../assets/images/logotipo-azul.png'
import './forms-header.scss'

const FormsHeader = () => {
  return (
    <header className="forms-header">
      <a href={`/${process.env.PATH_PREFIX}`} className="forms-header__logo">
        <img
          src={lightThemeLogo}
          alt="Logotipo de Protección, lleva al home principal o el home del producto donde estés logueado"
          title="Logotipo de Protección"
          className="forms-header__image"
        />
      </a>
    </header>
  )
}

export default FormsHeader
