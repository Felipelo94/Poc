import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { addInfoPerfil, addStatusTourGuide } from '../../../actions/home/home'
import Layout from '../../../templates/layout'
import Welcome from '../../../components/molecules/welcome/welcome'
import Categories from '../../../components/molecules/categories/categories'
import SubCategories from '../../../components/molecules/subcategories/subcategories'
import { postApiPreHome } from '../../../services/service-pre-home/service-pre-home'
import Button from '../../../components/atoms/button/button'
import ContainerSlider from '../../../components/atoms/container-slider/container-slider'
import { URL_SERVICES } from '../../../utils/paramApplication'
import {
  db,
  addHostUser,
  getAndDisplayNotes,
  updateHostUser
} from '../../../services/service-indexDB/service-indexDB'
import InputRange from '../../atoms/input-range/input-range'
import { Link } from 'gatsby'
import { currentDay } from '../../../utils/dateUtil'
import { sendGaPush } from '../../../utils/classGtmUtil'
import styled from 'styled-components'
import { redirectHome } from '../../../utils/home-configuration'
import { addInfoUser } from '../../../actions/You-cant-miss/You-cant-miss'
import './index.scss'
import Seo from '../../internal-pages/common/seo/seo'

const prefix =
  process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'
const isBrowser = typeof window !== 'undefined'

const ContainerStyledDiv = styled.div`
  color: ${props =>
    props.theme.colors && props.theme.colors.modal.colorSubTitle} !important;
`

const ContainerStyledDiv2 = styled.div`
  color: ${props =>
    props.theme.colors &&
    props.theme.colors.modal.titlePerson.color} !important;
`

const ContainerStyledButton = styled.div`
  & > .button-container {
    & > .button-container__button--secondary-border {
      color: ${props =>
        props.theme.colors && props.theme.colors.modal.genero.color} !important;
      border: ${props =>
        props.theme.colors &&
        props.theme.colors.modal.genero.border} !important;
      background: ${props =>
        props.theme.colors &&
        props.theme.colors.modal.genero.backgroundColor} !important;

      &:hover {
        color: ${props =>
          props.theme.colors &&
          props.theme.colors.modal.genero.colorhover} !important;
        background: ${props =>
          props.theme.colors &&
          props.theme.colors.modal.genero.backgroundHoverColor} !important;
      }
    }
  }
`

export default function IndexComponent(props) {
  const [showCategories, setShowCategories] = useState(false)
  const [ipHost, setIpHost] = useState('')
  const [haveDefaultValue, setHaveDefaultValue] = useState(false)
  const [typeSelected, setTypeSelected] = useState(
    props.typeUser ? (props.typeUser === 1 ? 2 : 1) : 1
  )
  const [categorySelected, setCategorySelected] = useState(null)
  const [categorySelectedURL, setCategorySelectedURL] = useState(null)
  const [indexCategorySelected, setIndexCategorySelected] = useState(null)
  const [subcategorySelected, setSubcategorySelected] = useState(null)
  const [animationPrehome, setAnimationPrehome] = useState(null)
  const [age, setAge] = useState(0)
  const [sexo, setSexo] = useState(null)
  const [sexoActivoButton, setSexoActivoButton] = useState(null)
  const [ranngeRequerid, setRanngeRequerid] = useState(false)
  const [dataIndexBd, setDataIndexBd] = useState(null)

  const urlService = `${URL_SERVICES}commands`

  useEffect(() => {
    const search = window.location.search
    let paramsSearch = queryString.parse(search)
    let splitUrl = window.location.pathname.split('/')

    if (props.hasOwnProperty('getInfoDB')) {
      if (!props.resetData) {
        props.getInfoDB().then(responde => {
          if (responde.length > 0) {
            const dataCategories =
              Number(responde[0].type) === 1
                ? props.data.allContentfulCategoriasContenidos
                : props.data.allContentfulCategoriasContenidosEmpresas
            const categorieDefualtIDB = dataCategories.edges.find(
              element => element.node.category === responde[0].category
            )
            const idenxCategorieDefaultIDB = dataCategories.edges.findIndex(
              element => element.node.category === responde[0].category
            )
            setDataIndexBd(responde[0])
            setCategorySelected(categorieDefualtIDB)
            setIndexCategorySelected(idenxCategorieDefaultIDB)
          }
        })
      } else if (paramsSearch['changeModal']) {
        props.getInfoDB().then(responde => {
          if (responde.length > 0) {
            setDataIndexBd(responde[0])
          }
        })
      }

      props.getInfoDB(db).then(responde => {
        if (isBrowser) {
          if (window.location.pathname === prefix && props.layaout) {
            getAndDisplayNotes(responde)
          }
        }
      })
    }

    if (props.hasOwnProperty('getF')) {
      props
        .getF(
          [{ name: 'format', value: 'json' }],
          'https://api.ipify.org/',
          false
        )
        .then(resul => {
          setIpHost(resul.ip.split('.').join(''))
        })
        .catch(error => {})
    }

    const query = window.location.search
    if (query || splitUrl.indexOf('home') >= 0) {
      changesModal(query)
    }
  }, [])

  const loadModal = params => {
    const dataCategories =
      Number(params.tipoCliente) === 1
        ? props.data.allContentfulCategoriasContenidos
        : props.data.allContentfulCategoriasContenidosEmpresas
    const categorieDefualt = dataCategories.edges.find(
      element => element.node.category === params.linea
    )

    const idenxCategorieDefault = dataCategories.edges.findIndex(
      element => element.node.category === params.linea
    )

    if (params['tipoCliente'] && params['linea'] && params['changeModal']) {
      setHaveDefaultValue(false)
      setTypeSelected(Number(params.tipoCliente))
      setCategorySelected(categorieDefualt)
      setCategorySelectedURL(params.linea)
      setIndexCategorySelected(idenxCategorieDefault)

      props.dispatch(addInfoPerfil(categorieDefualt.node.category, ''))
    } else if (params['tipoCliente'] && params['changeModal']) {
      setHaveDefaultValue(false)
      setTypeSelected(Number(params.tipoCliente))
      props.dispatch(addInfoPerfil('', ''))
    } else if (idenxCategorieDefault >= 0) {
      setHaveDefaultValue(true)
      setTypeSelected(Number(params.tipoCliente))
      setCategorySelected(categorieDefualt)
      setCategorySelectedURL(params.linea)
      setIndexCategorySelected(idenxCategorieDefault)
      props.dispatch(addInfoPerfil(categorieDefualt.node.category, ''))
    }
  }

  const loadModalHome = pageContext => {
    if (pageContext) {
      let splitUrl = window.location.pathname.split('/')

      const dataCategoriesHome =
        Number(pageContext.cliente) === 1
          ? props.data.allContentfulCategoriasContenidos
          : props.data.allContentfulCategoriasContenidosEmpresas

      const categorieDefualtHome = dataCategoriesHome.edges.find(
        element => element.node.category === pageContext.line
      )

      const idenxCategorieDefaultHome = dataCategoriesHome.edges.findIndex(
        element => element.node.category === pageContext.line
      )

      if (splitUrl.indexOf('home') >= 0) {
        setHaveDefaultValue(false)
        setTypeSelected(Number(pageContext.cliente))
        setCategorySelected(categorieDefualtHome)
        setCategorySelectedURL(pageContext.line)
        setIndexCategorySelected(idenxCategorieDefaultHome)
        props.dispatch(addInfoPerfil(categorieDefualtHome?.node.category, ''))
      }
    }
  }

  const changesModal = query => {
    let splitUrl = window.location.pathname.split('/')
    if (query) {
      let params = queryString.parse(window.location.search)
      if (
        (params['tipoCliente'] && params['linea'] && params['changeModal']) ||
        (params['tipoCliente'] && params['changeModal']) ||
        (params['tipoCliente'] && params['linea'])
      ) {
        loadModal(params)
      }
    } else if (splitUrl.indexOf('home') >= 0) {
      loadModalHome(props.pageContext)
    }
  }

  const getInfoWelcome = validation => {
    let params = queryString.parse(window.location.search)
    let splitUrl = window.location.pathname.split('/')

    setShowCategories(validation === 1)

    if (
      !showCategories &&
      !haveDefaultValue &&
      dataIndexBd === null &&
      !params['changeModal'] &&
      splitUrl.indexOf('home') < 0
    ) {
      setCategorySelected(null)
    }
  }

  const setCategorysSelected = Category => {
    setCategorySelected(Category)
    setSubcategorySelected(null)
    props.dispatch(addInfoPerfil(Category.node.category, ''))
  }

  const setSubCategorySelected = SubCategory => {
    props.dispatch(
      addInfoPerfil(categorySelected.node.category, SubCategory.etiqueta)
    )
    setSubcategorySelected(SubCategory)
  }

  const setTypeUser = type => {
    setTypeSelected(type)
    setCategorySelected(null)
    setCategorySelectedURL(null)
    setIndexCategorySelected(null)
    setShowCategories(null)
  }

  const deleteUser = () => {
    if (props.deleteDataBaseUser) {
      props.deleteDataBaseUser()
    }
    const categorySend = categorySelected.node.category
    let params = queryString.parse(window.location.search)
    let validateQuery =
      params['tipoCliente'] || params['linea'] || params['changeModal']
        ? true
        : false
    if (
      categorySend === 'Inversión' &&
      !validateQuery &&
      process.env.RESTRIGIR_REDIRECT === 'true'
    ) {
      sendDataPreHome()
      props.next()
      const prefixOne =
        process.env.PATH_PREFIX === ''
          ? 'https://proteccion.com/wps/portal/proteccion/web/inversion/home/#/'
          : `${window.location.origin}/wps/portal/proteccion/web/inversion/home/#/`
      window.location.href = prefixOne
    } else {
      sendDataPreHome()
      props.next()
    }
  }

  const activeTourGuide = value => {
    props.dispatch(addStatusTourGuide(value))
  }

  const sendDataPreHome = () => {
    const today = new Date()
    const hour = today.getHours()
    const min = today.getMinutes()
    const seg = today.getSeconds()
    let dd = today.getDate()
    let mm = today.getMonth() + 1 //January is 0!
    const yyyy = today.getFullYear()
    const finalday = currentDay()
    const nameUser = props.name
      .split(' ')
      .join('')
      .toUpperCase()
    const dateTime = `${dd}${mm}${yyyy}${hour}${min}${seg}`
    const valueHost = `${ipHost}${nameUser}${dateTime}`
    const ages = age
    const gender = sexo
    let isAlertLocal = null
    const categorySend = categorySelected.node.category
    const subcategorySend = subcategorySelected
      ? subcategorySelected.etiqueta
      : ''
    const dataSend = {
      comando: {
        nombre: 'user.saved',
        payload: {
          name:
            props.name === ''
              ? dataIndexBd
                ? dataIndexBd.nameuser
                : ''
              : props.name,
          type: typeSelected,
          hostUser: {
            host: dataIndexBd ? dataIndexBd.host : valueHost,
            state: 1
          },
          category: categorySend,
          subcategory: subcategorySend,
          date: finalday,
          state: 1,
          age: ages,
          gender: gender
        }
      }
    }

    if (props.dispatch) {
      props.dispatch(
        addInfoUser({
          category: categorySend,
          subcategory: subcategorySend,
          type: typeSelected,
          host: dataSend.comando.payload.hostUser.host,
          nameuser: dataSend.comando.payload.name,
          age: dataSend.comando.payload.age,
          gender: dataSend.comando.payload.gender
        })
      )
    }

    postApiPreHome(
      JSON.stringify(dataSend),
      urlService,
      dataIndexBd
        ? updateHostUser(dataSend.comando.payload)
        : addHostUser(
            dataSend.comando.payload,
            isAlertLocal,
            isBrowser ? window.location.pathname === prefix : null
          )
    )

    const validate =
      localStorage.getItem('enabled-tour') === 'true'
        ? false
        : localStorage.getItem('enabled-tour') === 'false'
        ? false
        : true

    if (!dataIndexBd && validate) {
      if (!props.statusMenu) {
        localStorage.setItem('enabled-tour', true)
        activeTourGuide(true)
      }
    } else {
      localStorage.setItem('enabled-tour', false)
      activeTourGuide(false)
    }

    let params = queryString.parse(window.location.search)
    let validateQuery =
      params['tipoCliente'] || params['linea'] || params['changeModal']
        ? true
        : false
    if (
      categorySend === 'Inversión' &&
      !validateQuery &&
      process.env.RESTRIGIR_REDIRECT === 'true'
    ) {
      const prefixFour =
        process.env.PATH_PREFIX === ''
          ? 'https://proteccion.com/wps/portal/proteccion/web/inversion/home/#/'
          : `${window.location.origin}/wps/portal/proteccion/web/inversion/home/#/`
      window.location.href = prefixFour
    }
    const lines = {
      category: categorySend,
      type: typeSelected
    }
    if (lines) {
      redirectHome(lines)
    }
  }

  let categories
  let subCategories
  let buttonConitnue
  const { data } = props
  if (showCategories) {
    categories = (
      <div
        role="presentation"
        id="categories"
        onClick={() => {
          setAnimationPrehome('class-animation')
        }}
        onFocus={() => {
          setAnimationPrehome('')
        }}
        className={`fadeInindex-${showCategories}`}
      >
        <Categories
          data={data}
          categorySelect={categorySelected}
          defaultValue={haveDefaultValue}
          typeUser={typeSelected}
          onCategoryClick={setCategorysSelected}
          indexCategorySelected={indexCategorySelected}
          defaultIndexdb={dataIndexBd}
        />
      </div>
    )
  } else {
    categories = null
  }

  if (showCategories && categorySelected !== null && typeSelected === 1) {
    subCategories = (
      <div className="container-animation-prehome-subcategory">
        <div id="Subcategories" className={animationPrehome}>
          {' '}
          <SubCategories
            data={categorySelected.node}
            subCategorySelected={subcategorySelected}
            onSubCategoryClick={setSubCategorySelected}
            typeUser={typeSelected}
            categorySelectedURL={categorySelectedURL}
            defaultValue={haveDefaultValue}
          />
        </div>
        {subcategorySelected && subcategorySelected.toltip && (
          <ContainerStyledDiv
            className="toltip-subcategory"
            id="toltip-subcategory"
          >
            <span>{subcategorySelected.toltip}</span>
          </ContainerStyledDiv>
        )}
        {subcategorySelected && subcategorySelected.age && (
          <div className="container-range-input" id="container-range-input">
            <div>
              <ContainerStyledDiv2
                style={{
                  marginTop: '32px',
                  marginBottom: '24px'
                }}
              >
                <span>Mi edad actual es:</span>
              </ContainerStyledDiv2>
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#292730'
                }}
                to={
                  subcategorySelected && subcategorySelected.age
                    ? '#container-genero'
                    : ''
                }
              >
                <InputRange
                  min={16}
                  max={100}
                  input={true}
                  step={1}
                  ranngeRequerid={ranngeRequerid}
                  onChange={e => {
                    let value = parseInt(e)
                    setAge(value)
                    setRanngeRequerid(true)
                    sendGaPush(
                      'Cuentanos',
                      'ClicMiEdadActualEs',
                      `Persona-${value}`
                    )
                  }}
                />
              </Link>
            </div>
            {ranngeRequerid && (
              <div>
                <ContainerStyledDiv2
                  style={{
                    marginTop: '32px',
                    marginBottom: '24px'
                  }}
                >
                  <span>En mi documento de identidad, registro como:</span>
                </ContainerStyledDiv2>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: '#292730'
                  }}
                  to={ranngeRequerid ? '#btn-index-prehome-continuar' : ''}
                >
                  <div className="container-genero" id="container-genero">
                    <ContainerStyledButton
                      className="container-genero-value gtmCuentRegComoFemenino"
                      id="container-genero-value-m"
                      onClick={() => {
                        setSexo('M')
                        setSexoActivoButton(2)
                      }}
                      style={{
                        marginTop: 0,
                        marginBottom: 24,
                        marginLeft: 0
                      }}
                    >
                      <Button
                        title="Femenino"
                        classGtm="gtmCuentRegComoFemenino"
                        className={
                          sexoActivoButton === 2
                            ? 'secondary-border-active'
                            : 'secondary-border'
                        }
                      />
                    </ContainerStyledButton>
                    <ContainerStyledButton
                      className="container-genero-value gtmCuentRegComoMasculino"
                      id="container-genero-value-h"
                      onClick={() => {
                        setSexo('H')
                        setSexoActivoButton(1)
                      }}
                      style={{ margin: 0 }}
                    >
                      <Button
                        title="Masculino"
                        classGtm="gtmCuentRegComoMasculino"
                        className={
                          sexoActivoButton === 1
                            ? 'secondary-border-active'
                            : 'secondary-border'
                        }
                      />
                    </ContainerStyledButton>
                  </div>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    )
  } else {
    subCategories = null
  }

  const categoryDta = categorySelected ? categorySelected.node.category : null
  if (
    showCategories &&
    ((subcategorySelected
      ? subcategorySelected.etiqueta === 'pension-vejez'
        ? ranngeRequerid && typeSelected === 1 && sexo !== null
        : subcategorySelected !== null && typeSelected === 1
      : null) ||
      (subcategorySelected === null &&
        (categoryDta === 'Ahorro' ||
          categoryDta === 'Inversión' ||
          (categoryDta === 'Inversión' &&
            process.env.RESTRIGIR_REDIRECT === 'true')) &&
        typeSelected === 1) ||
      (categorySelected !== null && typeSelected === 2)) &&
    props.name !== ''
  ) {
    buttonConitnue = (
      <div
        id="btn-index-prehome-continuar"
        style={{ marginBottom: '48px', marginTop: '32px' }}
        className={`gtmCuentPasoDosContinuar${
          typeSelected === 1 ? 'Pers' : 'Emp'
        }`}
        role="presentation"
        onKeyDown={event => {
          if (props.next) {
            deleteUser()
          } else {
            sendDataPreHome()
          }
        }}
        onClick={event => {
          if (props.next) {
            deleteUser()
          } else {
            sendDataPreHome()
          }
        }}
      >
        <Button
          classGtm={`gtmCuentPasoDosContinuar${
            typeSelected === 1 ? 'Pers' : 'Emp'
          }`}
          classCustom={`btn-size gtmCuentPasoDosContinuar${
            typeSelected === 1 ? 'Pers' : 'Emp'
          }`}
          title="Continuar"
          className="primary"
        />
      </div>
    )
  } else {
    buttonConitnue = null
  }

  const modulePrehome = (
    <div>
      <Seo
        pageContext={{
          title: 'Protección: Pensiones, Cesantías, Ahorro e Inversión'
        }}
      />
      <Welcome
        setType={setTypeUser}
        onGetInfoWelcome={getInfoWelcome}
        typeDefault={typeSelected}
        categorySelectedURL={categorySelectedURL}
        defaultValue={haveDefaultValue}
        showProgressBar={categories === null}
        defaultIndexdb={dataIndexBd}
      />
      <ContainerSlider
        valuefinal={typeSelected === 1 ? 3 : 2}
        showProgress={subCategories === null && categories !== null}
        value={2}
      >
        {categories}
      </ContainerSlider>
      {process.env.RESTRIGIR_REDIRECT === 'true' ? (
        typeSelected === 1 &&
        categoryDta !== 'Ahorro' &&
        categoryDta !== 'Inversión' ? (
          <ContainerSlider
            valuefinal={3}
            color="#FAFBFC"
            showProgress={subCategories !== null}
            value={3}
          >
            {subCategories}
          </ContainerSlider>
        ) : null
      ) : typeSelected === 1 &&
        categoryDta !== 'Ahorro' &&
        categoryDta !== 'Inversión' ? (
        <ContainerSlider
          valuefinal={3}
          color="#FAFBFC"
          showProgress={subCategories !== null}
          value={3}
        >
          {subCategories}
        </ContainerSlider>
      ) : null}

      <ContainerSlider
        style={{
          paddingTop: typeSelected === 1 ? 0 : 20
        }}
      >
        {buttonConitnue}
      </ContainerSlider>
    </div>
  )

  return (
    <div className="container-home">
      <Seo
        pageContext={{
          title: 'Protección: Pensiones, Cesantías, Ahorro e Inversión'
        }}
      />
      {props.layaout ? (
        <Layout
          showQuickAccess={false}
          showType={false}
          className="container-home-internal"
        >
          {modulePrehome}
        </Layout>
      ) : (
        modulePrehome
      )}
    </div>
  )
}

function mapStateToProps(state) {
  return { name: state.welcome.nameValue, statusMenu: state.menu.status }
}

IndexComponent = connect(mapStateToProps)(IndexComponent)
