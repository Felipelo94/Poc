import React from 'react'
import { ReactComponent as IconTypeEmpre } from '../../../../assets/images/company.svg'
import { SpanIconStyled, SpanLabelStyled } from './user-type'
import './user-type.scss'

const UserCompany = ({ isActive }) => {
  return (
    <div id="header-typeEmpre" className="user-type">
      <SpanIconStyled className="user-type__icon" isActive={isActive}>
        <IconTypeEmpre
          alt="Icono de un edificio, que al darle clic lleva al perfilamiento para Empresa"
          title="Ícono de Empresa"
          id="Empresa"
        />
      </SpanIconStyled>
      <SpanLabelStyled
        id="header-titleType"
        className="user-type__label"
        isActive={isActive}
      >
        Empresa
      </SpanLabelStyled>
    </div>
  )
}

export default UserCompany
