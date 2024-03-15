import React, { useEffect, useState } from 'react'
import Category from '../../atoms/category/category'
import './categories.scss'
import ContentUtil from '../../../utils/ContentUtil'
import contenidosPrehome from '../../../utils/contenidosPrehome.json'
import { navigate } from 'gatsby'
import { getSizeScreenClass } from '../../../utils/handleResize'
import { sendGaPush } from '../../../utils/classGtmUtil'
import styled from 'styled-components'

const ContainerStyledH3 = styled.h3`
  color: ${props =>
    props.theme.colors &&
    props.theme.colors.modal.titlePerson.color} !important;
`
const ContainerStyledCategory = styled.div`
  & > .category-inactive-item {
    & > .category {
      & > div {
        & > svg {
          & > path {
            fill: ${props =>
              props.theme.colors &&
              props.theme.colors.modal.category.inactive} !important;
          }

        }
      }

      & > p {
        color: ${props =>
          props.theme.colors &&
          props.theme.colors.modal.category.colorInactive} !important;
      }

      &:hover {
        & > div > svg > path {
          fill: ${props =>
            props.theme.colors &&
            props.theme.colors.modal.category.hoverInactivo} !important;
        }

        & > p {
          color: ${props =>
            props.theme.colors &&
            props.theme.colors.modal.category.hoverInactivo} !important;
        }

      }
    }

    & > .category-active {
      & > #category {
        & > p {
          color: ${props =>
            props.theme.colors &&
            props.theme.colors.modal.category.colorActive} !important;
        }
      }
    }
`

const isBrowser = typeof window !== 'undefined'
const prefix =
  process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

function Categories(props) {

  const {
    indexCategorySelected, categorySelect
  } = props;

  const [activeCategoryId, setActiveCategoryId] = useState(props.categorySelect)
  const [categoryselectActive, setCategoryselectActive] = useState(
    props.indexCategorySelected
  )
  const [categoryNotBloqueada, setCategoryNotBloqueada] = useState(
    props.categorySelect && true
  )

  useEffect(() => {
    if (indexCategorySelected !== categoryselectActive) {
      setCategoryselectActive(indexCategorySelected);
    }
  }, [indexCategorySelected]);

  const handleCategoryClick = categoryId => {
    const { onCategoryClick } = props
    setActiveCategoryId(categoryId)
    onCategoryClick(categoryId)
  }
  const changesCategorySelectActive = (index, node) => {
    setCategoryNotBloqueada(node)
    setCategoryselectActive(index)
    const redirect =
      props.typeUser === 1
        ? index === 0
          ? '#btn-index-prehome-continuar'
          : index === 1
          ? '#btn-index-prehome-continuar'
          : index === 3 || index === 2
          ? '#Subcategories'
          : '#btn-index-prehome-continuar'
        : '#btn-index-prehome-continuar'
    if (typeof window !== 'undefined' && node === true) {
      if (isBrowser) {
        if (window.location.pathname === prefix) {
          navigate(redirect)
        } else {
          const url = `${window.location.pathname}`.substring(11, 999)
          navigate(
            `${
              process.env.PATH_PREFIX === '' ? window.location.pathname : url
            }${redirect}`
          )
        }
      }
    }
  }

  const widthScreen = getSizeScreenClass()
  const { data, typeUser, defaultValue } = props
  let categories
  let titles
  if (data !== undefined) {
    categories =
      typeUser === 1
        ? data.allContentfulCategoriasContenidos.edges
        : data.allContentfulCategoriasContenidosEmpresas.edges
    titles = data.allContentfulContenidosPaginas.edges
    if (defaultValue) {
      categories = categories.map(item => {
        item.node.IsActivo = item === props.categorySelect
        return item
      })
    } else {
      if (categories.filter(cat => cat.node.IsActivo === true).length === 1) {
        categories = categories.map(item => {
          item.node.IsActivo = true
          return item
        })
      }
    }
  } else {
    categories = null
    titles = []
  }
  const contentUtil = new ContentUtil()
  const tittleCategories = contentUtil.getValueContent(
    titles,
    'titulo-categorias'
  )

  return (
    <div id="title-category-container">
      <ContainerStyledH3 className="title-category" id="title-category">
        {tittleCategories || contenidosPrehome.tituloCategorias}
      </ContainerStyledH3>
      <div
        className="animation-categories-container"
        id="animation-categories-container"
      >
        <div
          className={`animation-categories-container-value-${categoryselectActive}`}
          id="animation-categories-container-value"
        />
        <div className="categories" id="categories">
          <div className="menudes" id="menudes">
            {categories !== null
              ? categories.map((node, index) => {
                  return (
                    <div
                      role="presentation"
                      id={`category-container-${index}`}
                      className={`menudes-a`}
                      onKeyDown={event => {
                        if (node.node.IsActivo) {
                          changesCategorySelectActive(index, node.node.IsActivo)
                        }
                      }}
                      onClick={event => {
                        if (node.node.IsActivo) {
                          sendGaPush(
                            'Cuentanos',
                            'ClicQueQuieresHacerHoy',
                            `${node.node.classGtm}-${
                              typeUser === 1 ? 'Persona' : 'Empresa'
                            }`
                          )
                          changesCategorySelectActive(index, node.node.IsActivo)
                        }
                      }}
                      key={index}
                    >
                      <ContainerStyledCategory
                        role="presentation"
                        className={`container-category-event ${index} `}
                        id={`container-category-event-${index}`}
                      >
                        <div
                          id={`category-${index}`}
                          data-testid="category-element"
                          className={`${
                            node.node.IsActivo
                              ? categoryselectActive === index
                                ? `category-active`
                                : `category-inactive-item`
                              : `category-inactive `
                          } ${
                            categorySelect === node
                              ? 'container-category-active'
                              : 'containe-category-inactive'
                          }
                                `}
                        >
                          <Category
                            onClick={handleCategoryClick}
                            isActive={activeCategoryId === node}
                            key={node.id}
                            classGtm={`gtmPerfil${node.node.category}`}
                            orden={index}
                            categoryId={node}
                            title={node.node.titulo}
                            img={node.node.imagen.fluid.src}
                          />
                        </div>
                      </ContainerStyledCategory>
                    </div>
                  )
                })
              : null}
            {widthScreen > 1024 ? (
              <div
                className={
                  categoryNotBloqueada
                    ? `marca ${
                        typeUser === 1 ? 'marcaActive' : 'marcaActiveEmp'
                      }${
                        props.categorySelect !== null
                          ? categoryselectActive
                          : ''
                      }`
                    : null
                }
                id="marcaActive"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
