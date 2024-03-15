import classNames from 'classnames'
import React from 'react'
import { ReactComponent as IconTypePerson } from '../../../../assets/images/user.svg'
import { UserLabelStyled } from './user-label'
import './user-person.scss'

const UserPerson = ({
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
        className={`header-bgIcon `}
        id="header-typePerson"
        style={
          (typeDefault
            ? typeDefault
            : indexDBUserNames.type
            ? indexDBUserNames.type
            : nameUser.typeUser) === 1
            ? {
                backgroundImage: indexDBUserNames ? `url(${active})` : null,
                width: 34,
                height: 34,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }
            : { width: 35, height: 35 }
        }
      >
        <IconTypePerson
          className={classNames('icon-type-person', {
            'icon-type-person--selected': typeUserValue === 1,
            'icon-type-person--dark':
              typeUserValue === 1 && accessibility.darkMode,
            'icon-type-person-inversion':
              lineaActual === 'Inversión' && typeUserValue === 1,
            'icon-type-person-inversion--dark':
              lineaActual === 'Inversión' &&
              typeUserValue === 1 &&
              accessibility.darkMode
          })}
          alt="Icono de una persona, al darle clic lleva al perfilamiento de Persona"
          title="Ícono de Persona"
          id="Persona"
        />
      </div>
      <UserLabelStyled
        isActive={typeUserValue === 1}
        className={`header-titleType`}
        id="header-titleType"
        categoryDefaulft={lineaActual}
        accessibility={accessibility}
      >
        Persona
      </UserLabelStyled>
    </>
  )
}

export default UserPerson
