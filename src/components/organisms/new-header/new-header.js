import React, { useState } from 'react'
import Anchor from '../../atoms/anchor/anchor'
import logotipo from '../../../assets/images/logotipo-azul.png'
import { ReactComponent as IconTypePerson } from '../../../assets/images/user.svg'
import { ReactComponent as IconTypeEmpre } from '../../../assets/images/company.svg'
import { ReactComponent as IconSearch } from '../../../assets/images/search-gradient.svg'
import { ReactComponent as IconSearchMobile } from '../../../assets/images/search-mobile.svg'
import { ReactComponent as IconAccesibility } from '../../../assets/images/icons/aa-plus-blue.svg'
import { ReactComponent as IconClose } from '../../../assets/images/close-modal.svg'
import { ReactComponent as IsClosedIcon } from '../../../assets/images/more-vertical.svg'
import classNames from 'classnames'
import bgYellowUserType from '../../../assets/images/bg-icono-tipo-publico.svg'
import bgBlue from '../../../assets/images/background-search-active.svg'
import bgGray from '../../../assets/images/background-search.svg'

import './new-header.scss'
import { UserLabelStyled } from '../../molecules/users-type/users-type-header/user-label'
import TransactionalZoneButton from '../../atoms/transactional-zone-button/transactional-zone-button'
import AccessibilityMenu from '../../molecules/accessibility-menu/accessibility-menu'
import SearchMenu from '../../molecules/search-menu/search-menu'
import { useLineServiceMenu } from '../../../const/graphql/use-line-service-menu'

const optionsMenu = [
  {
    nombre: 'Pensión'
  },
  {
    nombre: 'Cesantías'
  },
  {
    nombre: 'Ahorro'
  },
  {
    nombre: 'Inversión'
  },
  {
    nombre: 'Canales'
  }
]

let NewHeaderComponent = ({ typeUser, dispatch, prefix }) => {
  const [accessibility, setAccessibility] = useState(false)
  const [search, setSearch] = useState(false)

  return (
    <>
      <header
        id="lineInital-header"
        style={{ position: 'sticky', height: accessibility ? '115px' : '65px' }}
      >
        <div id="lineInital" className="lineInital" />
        <div className="new-header" id="new-header">
          <div id="logo" className="new-header-logo">
            <Anchor
              id="logo-a"
              href={typeUser === 1 ? `${prefix}personas` : `${prefix}empresas`}
              target="_self"
              tabIndex="0"
            >
              <div id="logo-container">
                <img
                  async
                  src={logotipo}
                  alt="Logotipo de Protección, lleva al home principal"
                  title="Logotipo de Protección"
                  id="Logo-image"
                />
              </div>
            </Anchor>
            <div className="new-header-logo-users">
              <div className="new-header-logo-users-user">
                <Anchor
                  href={typeUser !== 1 && `${prefix}personas`}
                  target="_self"
                  className={`new-header-logo-users-user-icon`}
                  id="header-personas"
                  style={{
                    backgroundImage:
                      typeUser === 1 ? `url(${bgYellowUserType})` : null
                  }}
                >
                  <IconTypePerson
                    className={classNames('icon-type-company', {
                      'icon-type-company--selected': typeUser === 1
                    })}
                    alt="Icono de una persona, al darle clic lleva al home de Persona"
                    title="Ícono de Persona"
                    id="Persona"
                  />
                </Anchor>
                <UserLabelStyled
                  isActive={typeUser === 1}
                  className={`new-header-logo-users-user-label`}
                  id="header-personas-label"
                >
                  Persona
                </UserLabelStyled>
              </div>
              <div className="new-header-logo-users-user">
                <Anchor
                  href={typeUser !== 2 && `${prefix}empresas`}
                  target="_self"
                  className={`new-header-logo-users-user-icon`}
                  id="header-empresas"
                  style={{
                    backgroundImage:
                      typeUser === 2 ? `url(${bgYellowUserType})` : null
                  }}
                >
                  <IconTypeEmpre
                    className={classNames('icon-type-company', {
                      'icon-type-company--selected': typeUser === 2
                    })}
                    alt="Icono de un edificio, que al darle clic lleva al home de Empresa"
                    title="Ícono de Empresa"
                    id="Empresa"
                  />
                </Anchor>
                <UserLabelStyled
                  isActive={typeUser === 2}
                  className={`new-header-logo-users-user-label`}
                  id="header-empresas-label"
                >
                  Empresa
                </UserLabelStyled>
              </div>
            </div>
          </div>
          <div className="new-header-mobile">
            {search ? (
              <div
                className="new-header-transactional-icon"
                id="header-busqueda"
                style={{
                  backgroundImage: `url(${bgBlue})`,
                  width: 35,
                  height: 35,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => setSearch(prevState => !prevState)}
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    setSearch(prevState => !prevState)
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <IconClose
                  alt="Icono de una equis, al darle clic cierra el menu del buscador"
                  title="Ícono de equis"
                  id="Cerrar"
                />
              </div>
            ) : (
              <div
                className="new-header-transactional-icon"
                id="header-busqueda-mobile"
                onClick={() => setSearch(prevState => !prevState)}
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    setSearch(prevState => !prevState)
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <IconSearchMobile />
              </div>
            )}
            <div className="new-header-mobile-menu">
              <span className="new-header-mobile-menu-label">Menú</span>
              <IsClosedIcon />
            </div>
          </div>
          <div className="new-header-options">
            {optionsMenu.map(element => (
              <div className="new-header-options-option">
                <span>{element.nombre}</span>
              </div>
            ))}
          </div>
          <div className="new-header-transactional">
            <div
              className="new-header-transactional-icon"
              id="header-busqueda"
              style={{
                backgroundImage: search ? `url(${bgBlue})` : `url(${bgGray})`,
                width: 35,
                height: 35,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => setSearch(prevState => !prevState)}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  setSearch(prevState => !prevState)
                }
              }}
              role="button"
              tabIndex={0}
            >
              {search ? (
                <IconClose
                  alt="Icono de una equis, al darle clic cierra el menu de accesibilidad"
                  title="Ícono de equis"
                  id="Cerrar"
                />
              ) : (
                <IconSearch
                  alt="Icono de una lupa, al darle clic abre el menu de busqueda"
                  title="Ícono de lupa"
                  id="Buscar"
                />
              )}
            </div>
            <div
              className="new-header-transactional-icon"
              id="header-accesibilidad"
              style={{
                backgroundImage: accessibility
                  ? `url(${bgBlue})`
                  : `url(${bgGray})`
              }}
              onClick={() => setAccessibility(prevState => !prevState)}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  setAccessibility(prevState => !prevState)
                }
              }}
              role="button"
              tabIndex={0}
            >
              {accessibility ? (
                <IconClose
                  alt="Icono de una equis, al darle clic cierra el menu de accesibilidad"
                  title="Ícono de equis"
                  id="Cerrar"
                />
              ) : (
                <IconAccesibility
                  alt="Icono de una doble a, al darle clic abre el menu de accesibilidad"
                  title="Ícono de accesibilidad"
                  id="Accesibilidad"
                />
              )}
            </div>
            <TransactionalZoneButton />
            <div />
          </div>
        </div>
        <AccessibilityMenu
          isDarkMode={accessibility ? accessibility.darkMode : false}
          isActiveAccesibility={accessibility}
          dispatch={dispatch}
          setActiveAccesibilty={() => {
            localStorage.setItem('accessibility-menu-open', false)
            setAccessibility(false)
          }}
        />
        <SearchMenu
          isActiveSearch={search}
          setActiveSearch={() => {
            setSearch(false)
          }}
        />
      </header>
    </>
  )
}

export const NewHeader = props => {
  const data = useLineServiceMenu()

  return (
    <div className="container-new-header">
      <NewHeaderComponent {...props} data={data} />
    </div>
  )
}

export default NewHeader
