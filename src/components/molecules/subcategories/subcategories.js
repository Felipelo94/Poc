import React, { Component, useState } from 'react'
import './subcategories.scss'
import SubCategory from '../../atoms/subcategory/subcategory'
import { Link } from 'gatsby'
import { getSizeScreenClass } from '../../../utils/handleResize'
import styled from 'styled-components'

const ContainerStyledH3 = styled.h3`
  color: ${props =>
    props.theme.colors && props.theme.colors.modal.titlePerson.color}!important;
`

const isBrowser = typeof window !== 'undefined'
const widthScreen = getSizeScreenClass()
const prefix =
  process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

export function SubCategories(props) {
  const [selectSubCategory, setSelectSubCategory] = useState(null)

  const handleSubCategoryClick = subcategoryId => {
    const { onSubCategoryClick } = props
    onSubCategoryClick(subcategoryId)
  }

  const { data, subCategorySelected, defaultValue } = props
  let subcategories
  let title
  if (data !== undefined) {
    subcategories = data.subCategorias
    title = data.frase
  } else {
    subcategories = null
    title = []
  }

  return (
    <div>
      <ContainerStyledH3 className="title">{title}</ContainerStyledH3>
      <div className="subCategories">
        <div className="menudes" id="menudes">
          {subcategories !== null
            ? subcategories.map((x, index) => {
                return (
                  <Link
                    id={`Sub-category-${index}`}
                    style={
                      data
                        ? data.IsIcon
                          ? {
                              width: widthScreen >= 1024 ? '25%' : '50%',
                              display: 'inline-block',
                              boxSizing: 'border-box',
                              padding:
                                widthScreen >= 1024 ? '10px 25px' : '0px',
                              color: 'black',
                              textDecoration: 'none',
                              zIndex: 10,
                              maxWidth: widthScreen >= 1024 && '153px'
                            }
                          : {}
                        : null
                    }
                    to={
                      isBrowser
                        ? window.location.pathname === prefix
                          ? `/${
                              defaultValue
                                ? `?tipoCliente=${props.typeUser}&linea=${props.categorySelectedURL}`
                                : ''
                            }${
                              x['etiqueta'] === 'pension-vejez'
                                ? '#container-range-input'
                                : '#btn-index-prehome-continuar'
                            }`
                          : `${
                              process.env.PATH_PREFIX === ''
                                ? window.location.pathname
                                : window.location.pathname.substring(11, 999)
                            }${
                              defaultValue
                                ? `/?tipoCliente=${props.typeUser}&linea=${props.categorySelectedURL}`
                                : ''
                            }${
                              x['etiqueta'] === 'pension-vejez'
                                ? '#container-range-input'
                                : '#btn-index-prehome-continuar'
                            }`
                        : '/#'
                    }
                    className={`${
                      data
                        ? data.IsIcon
                          ? selectSubCategory === index
                            ? 'Sub-category-active'
                            : 'Sub-category-inactive'
                          : null
                        : null
                    } noneTextDecoration subcatecoriesContainer ${
                      x.classGtm ? x.classGtm : ''
                    }`}
                    key={index}
                  >
                    <div
                      key={index}
                      style={
                        data && data.IsIcon && widthScreen >= 1024
                          ? {
                              marginLeft: '20px',
                              width: '100%'
                            }
                          : {}
                      }
                      className={`d-flex ${x.classGtm ? x.classGtm : ''}`}
                      role="presentation"
                      onKeyDown={() => {
                        setSelectSubCategory(index)
                      }}
                      onClick={() => {
                        setSelectSubCategory(index)
                      }}
                      id="sub-category-container"
                    >
                      <SubCategory
                        onClick={handleSubCategoryClick}
                        key={x.etiqueta}
                        isActive={
                          subCategorySelected === x &&
                          subCategorySelected !== null
                        }
                        subcategoryId={x}
                        classGtm={x.classGtm ? x.classGtm : ''}
                        titlle={x.titulo}
                        image={x.image}
                        IsIcon={data.IsIcon}
                        toltip={x.toltip}
                      />
                    </div>
                  </Link>
                )
              })
            : null}
          {widthScreen > 1024 && data && data.IsIcon && (
            <div
              className={`marca marcaActive${selectSubCategory}`}
              id="marcaActive"
              style={{ bottom: '85px' }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default SubCategories
