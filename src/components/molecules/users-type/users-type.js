import React from 'react'
import { sendGaPush } from '../../../utils/classGtmUtil'
import './users-type.scss'

export default function UsersType({
  settypeUser,
  indexDBUserNames,
  nameUser,
  setIsOpenMenu,
  validateStreetCard,
  typeDefault,
  userPerson,
  userCompany
}) {
  return (
    <div className="header-types" id="header-types">
      <button
        className={`header-typePerson  gtmHomeSupPersona`}
        id="header-typePerson"
        onClick={() => {
          if (validateStreetCard) {
            validateStreetCard()
          }
          sendGaPush('Home', 'ClicSuperior', 'Persona')
          settypeUser(
            (typeDefault
              ? typeDefault
              : indexDBUserNames.type
              ? indexDBUserNames.type
              : nameUser.typeUser) === 1
              ? false
              : true
          )
          // setIsOpenMenu(true)
          document.documentElement.style.overflowX = 'hidden'
          document.body.style.overflowX = 'hidden'
        }}
        onKeyDown={event => {
          if (event.keyCode === 13) {
            settypeUser(
              (typeDefault
                ? typeDefault
                : indexDBUserNames.type
                ? indexDBUserNames.type
                : nameUser.typeUser) === 1
                ? false
                : true
            )
            sendGaPush('Home', 'ClicSuperior', 'Persona')
            if (validateStreetCard) {
              validateStreetCard()
            }
            document.documentElement.style.overflowX = 'hidden'
            // setIsOpenMenu(true)
            document.body.style.overflowX = 'hidden'
          }
        }}
      >
        {userPerson}
      </button>
      <button
        className={`header-typeEmpre`}
        tabIndex="0"
        id="header-typeEmpre"
        onKeyDown={event => {
          if (event.keyCode === 13) {
            sendGaPush('Home', 'ClicSuperior', 'Empresa')
            if (validateStreetCard) {
              validateStreetCard()
            }
            // setIsOpenMenu(true)
            settypeUser(
              (typeDefault
                ? typeDefault
                : indexDBUserNames.type
                ? indexDBUserNames.type
                : nameUser.typeUser) === 2
                ? false
                : true
            )
            document.body.style.overflowX = 'hidden'
            document.documentElement.style.overflowX = 'hidden'
          }
        }}
        onClick={() => {
          if (validateStreetCard) {
            validateStreetCard()
          }
          sendGaPush('Home', 'ClicSuperior', 'Empresa')
          settypeUser(
            (typeDefault
              ? typeDefault
              : indexDBUserNames.type
              ? indexDBUserNames.type
              : nameUser.typeUser) === 2
              ? false
              : true
          )
          // setIsOpenMenu(true)
          document.documentElement.style.overflowX = 'hidden'
          document.body.style.overflowX = 'hidden'
        }}
      >
        {userCompany}
      </button>
    </div>
  )
}
