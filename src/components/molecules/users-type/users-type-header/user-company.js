import classNames from 'classnames'
import React from 'react'
import { ReactComponent as IconTypeEmpre } from '../../../../assets/images/company.svg'
import { UserLabelStyled } from './user-label'
import './user-company.scss'

const UserCompany = ({
  indexDBUserNames,
  nameUser,
  typeDefault,
  typeUserValue,
  active,
  accessibility = { darkMode: false },
  lineaActual
}) => {
  return (
    <>
      <div
        className="header-empresa"
        id="header-typeEmpre"
        style={
          (typeDefault
            ? typeDefault
            : indexDBUserNames.type
            ? indexDBUserNames.type
            : nameUser.typeUser) === 2
            ? {
                backgroundImage: indexDBUserNames ? `url(${active})` : null,
                width: 35,
                height: 35,
                cursor: 'pointer',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            : {
                width: 35,
                height: 35,
                cursor: 'pointer'
              }
        }
      >
        <div>
          <IconTypeEmpre
            className={classNames('icon-type-company', {
              'icon-type-company--selected': typeUserValue === 2,
              'icon-type-company--dark':
                typeUserValue === 2 && accessibility.darkMode
            })}
            alt="Icono de un edificio, que al darle clic lleva al perfilamiento para Empresa"
            title="Ícono de Empresa"
            id="Persona"
          />
        </div>
      </div>
      <UserLabelStyled
        isActive={typeUserValue === 2}
        style={{
          cursor: 'pointer',
          filter: 'none'
        }}
        className={`header-titleTyp-empresa`}
        id="header-titleType"
        categoryDefaulft={lineaActual}
        accessibility={accessibility}
      >
        Empresa
      </UserLabelStyled>
    </>
  )
}

export default UserCompany
