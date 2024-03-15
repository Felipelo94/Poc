import React, { useState, useRef, useEffect } from 'react'
import './search.scss'
import { ReactComponent as IconSearch } from '../../../assets/images/search-icon.svg'
import { ReactComponent as IconSearchMobile } from '../../../assets/images/search-mobile.svg'
import close from '../../../assets/images/vector-close.svg'
import { navigate } from 'gatsby'
import { sendGaPush } from '../../../utils/classGtmUtil'
import queryString from 'query-string'
import Accessibility from '../../atoms/accebility/accessibility'
import { useCurrentWidth } from 'react-socks'
import styled from 'styled-components'

const InputStyle = styled.input`
  background: ${props =>
    props.theme.colors ? props.theme.colors.background : null} !important;
  border: ${props =>
    props.theme.colors && props.theme.colors.input.border} !important;
  color: ${props =>
    props.theme.colors && props.theme.colors.input.color} !important;
  transition: ${props => props.theme.animation};

  ::placeholder {
    color: ${props =>
      props.theme.colors && props.theme.colors.input.color} !important;
  }
`
const DivStyle = styled.div`
  background: ${props =>
    props.theme.colors ? props.theme.colors.background : null} !important;
`

const SvgStyle = styled.div`
  filter: ${props =>
    props.theme.colors && props.theme.colors.filterImgInactive};
`

const Search = ({
  isDark,
  isActiveAccesibility,
  setActiveAccesibilty,
  lineaActual
}) => {
  const currentWidth = useCurrentWidth()
  const inputMobile = useRef(null)
  const [dataSearch, setDataSearch] = useState('')
  const [enabledInput, setEnabledInput] = useState(false)
  const [isFirstClic, setIsFirstClic] = useState(false)

  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

  useEffect(() => {
    if (window) {
      const query = window.location.search
      if (query) {
        let params = queryString.parse(window.location.search)
        if (params.q) {
          setDataSearch(decodeURI(params.q))
        }
      }
    }
  }, [])

  const handleChange = event => {
    setDataSearch(event.target.value)
  }
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
  const keyUpHandler = event => {
    if (event.keyCode === 13 && dataSearch && dataSearch.length > 0) {
      searchPage()
    }
  }
  const findData = () => {
    if (dataSearch && dataSearch.length > 0) {
      searchPage()
    }
  }

  return (
    <>
      <DivStyle
        className={`container-mobile-search-active ${
          isFirstClic
            ? enabledInput
              ? 'container-search-animation'
              : 'container-search-animation-reverse'
            : ''
        }`}
      >
        <div className="container-mobile-search">
          <InputStyle
            ref={inputMobile}
            value={dataSearch}
            onChange={handleChange}
            onKeyUp={keyUpHandler}
            name="buscar"
            id="header-field-search-mobile"
            maxLength="250"
            type="search"
            placeholder="Busca aquí lo que necesites"
          />
          <DivStyle
            className="container-mobile-search-img"
            id="conatiner-img-search-close"
            role="presentation"
            onClick={() => {
              setEnabledInput(false)
            }}
          >
            <img
              id="field-img-close"
              src={close}
              alt={`"Busca aquí lo que necesites", buscador de palabra o tema clave que necesites y por el que se quiera filtrar la información`}
              title="Buscador"
            />
          </DivStyle>
        </div>
      </DivStyle>
      <div className={`container-search`}>
        {currentWidth > 1024 && currentWidth < 9999 ? (
          <div id="header-search-container" className="header-search-container">
            <InputStyle
              value={dataSearch}
              onChange={handleChange}
              onKeyUp={keyUpHandler}
              id="header-field-search"
              maxLength="250"
              type="text"
              placeholder="Busca aquí lo que necesites"
              tabIndex="0"
            />
            <SvgStyle
              id="conatiner-img-search"
              className="header-search-container-img  gtmHomeSupBuscar"
              role="presentation"
              onClick={findData}
            >
              <IconSearch
                id="field-img"
                style={{ marginTop: 12 }}
                className="gtmHomeSupBuscar"
                alt={`"Busca aquí lo que necesites", buscador de palabra o tema clave que necesites y por el que se quiera filtrar la información`}
                title="Buscador"
              />
            </SvgStyle>
            {currentWidth > 1024 ? (
              <Accessibility
                lineaActual={lineaActual}
                isActiveAccesibility={isActiveAccesibility}
                setActiveAccesibilty={setActiveAccesibilty}
              />
            ) : null}
          </div>
        ) : null}

        {currentWidth <= 1024 ? (
          <div style={{ width: '100%' }}>
            {!enabledInput && (
              <SvgStyle
                id="conatiner-img-search"
                className="header-search-container-img gtmHomeSupBuscar"
                role="presentation"
                onClick={() => {
                  if (!isFirstClic) {
                    setIsFirstClic(true)
                  }
                  setEnabledInput(true)
                  if (inputMobile) inputMobile.current.focus()
                }}
              >
                <IconSearchMobile
                  id="field-img-mobile"
                  className={
                    (isDark ? 'dark-mode-img ' : '') + 'gtmHomeSupBuscar'
                  }
                  alt={`"Busca aquí lo que necesites", buscador de palabra o tema clave que necesites y por el que se quiera filtrar la información`}
                  title="Buscador"
                />
              </SvgStyle>
            )}
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Search
