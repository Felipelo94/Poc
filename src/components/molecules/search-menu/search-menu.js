import React, { useState } from 'react'
import './search-menu.scss'

import { useEffect } from 'react'
import { sendGaPush } from '../../../utils/classGtmUtil'
import { navigate } from 'gatsby'
import { ReactComponent as IconSearch } from '../../../assets/images/search-white.svg'
import { Breakpoint } from 'react-socks'
import Button from '../../atoms/button/button'

export default function SearchMenu({ isActiveSearch, setActiveSearch }) {
  const [dataSearch, setDataSearch] = useState('')
  const [isActiveAccesibilityV, setIsActiveAccesibilityV] = useState(false)

  useEffect(() => {
    setIsActiveAccesibilityV(isActiveSearch)
  }, [isActiveSearch])

  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

  const searchPage = () => {
    if (window) {
      sendGaPush('Home', 'ClicSuperior', 'Buscar')
      sendGaPush('Home', 'ClicTerminoBuscado', dataSearch)
      if (window.location.pathname.indexOf(prefix + 'resultados/') === -1) {
        navigate(`/resultados/?q=${dataSearch}`, {
          state: {
            label: 'Protección: Pensiones, Cesantías, Ahorro e Inversión'
          }
        })
      } else {
        const url = window.location.href
        const split = url.split('?q')
        window.location.href = split[0] + '?q=' + dataSearch
      }
    }
  }

  const findData = () => {
    if (dataSearch && dataSearch.length > 0) {
      searchPage()
    }
  }

  const keyUpHandler = event => {
    if (event.keyCode === 13 && dataSearch && dataSearch.length > 0) {
      searchPage()
    }
  }

  const handleChange = event => {
    setDataSearch(event.target.value)
  }

  return (
    <div
      className={`background-container-search-menu background-container-search-menu-${
        isActiveAccesibilityV ? '' : 'in'
      }active`}
      onClick={setActiveSearch}
      onKeyDown={e => {
        if (e.keyCode === 27) {
          setActiveSearch()
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div
        id="container-search-menu"
        className={`container-search-menu container-search-menu-${
          isActiveAccesibilityV ? '' : 'in'
        }active`}
        onClick={e => {
          e.stopPropagation()
        }}
        onKeyDown={e => {
          e.stopPropagation()
        }}
        role="button"
        tabIndex={0}
      >
        <h3 className="container-search-menu-title">Busca en proteccion.com</h3>
        <div className="container-searcher">
          <input
            className="container-searcher-input"
            value={dataSearch}
            onChange={handleChange}
            onKeyUp={keyUpHandler}
            id="header-field-search"
            maxLength="250"
            type="text"
            placeholder="Escribe aquí lo que quieres encontrar"
            tabIndex="0"
          />
          <Breakpoint customQuery="(max-width: 1024px)">
            <Button
              title="Buscar"
              className={`primary container-searcher-button`}
              onClick={findData}
            />
          </Breakpoint>
          <Breakpoint customQuery="(min-width: 1025px)">
            <div
              className="container-searcher-icon"
              id="header-busqueda"
              onClick={() => findData()}
              onKeyDown={() => findData()}
              role="button"
              tabIndex={0}
            >
              <IconSearch
                alt="Icono de una lupa, al darle clic realiza la busqueda"
                title="Ícono de lupa"
                id="Buscar"
              />
            </div>
          </Breakpoint>
        </div>
      </div>
    </div>
  )
}
