import React from 'react'
import { ReactComponent as IconTypePerson } from '../../../../assets/images/user.svg'
import { SpanIconStyled, SpanLabelStyled } from './user-type'
import './user-type.scss'

const UserPerson = ({ isActive }) => {
  return (
    <div id="header-typePerson" className="user-type">
      <SpanIconStyled className="user-type__icon" isActive={isActive}>
        <IconTypePerson
          alt="Icono de una persona, al darle clic lleva al perfilamiento de Persona"
          title="Ícono de Persona"
          id="Persona"
        />
      </SpanIconStyled>
      <SpanLabelStyled
        id="header-titleType"
        className="user-type__label"
        isActive={isActive}
      >
        Persona
      </SpanLabelStyled>
    </div>
  )
}

export default UserPerson
