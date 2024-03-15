import React, { useState, useEffect } from 'react'
import YoucantmissComponent from '../banner-bite/You-cant-miss/You-cant-miss'
import TitleSesion from '../../atoms/title-sesion/title-sesion'
import { connect } from 'react-redux'
import { addInfointernal } from '../../../actions/internal-categoria/internal-categoria'
import { validateCurrentLine } from '../../../utils/bite-caracter'
import Button from '../../atoms/button/button'
import { useCurrentWidth } from 'react-socks'
import { getCurrentHost } from '../../../utils/redirectUtil'
import { scaleLine, scaleText, SCALE_SIZE_30PX } from '../../../utils/scaleText'
import styled from 'styled-components'
import { getClassGTMSeeMoreContentHOME } from '../../../utils/classGtmUtil'
import Anchor from '../../atoms/anchor/anchor'

const ContainerTitleStyled = styled.div`
  .NoTePuedesPerder {
    color: ${props =>
      props.theme.colors && props.theme.colors.textSubtitleColor};
    transition: ${props => props.theme.animation};
  }

  .NoTePuedesPerder-dark {
    color: ${props =>
      props.theme.colors && props.theme.colors.textSubtitleColorInversion};
    transition: ${props => props.theme.animation};
  }
`

export let SessionYouCantMiss = ({
  data,
  getF,
  title,
  userData,
  dispatch,
  indexDBUser,
  indexArrays,
  dataBeneficio,
  dataNovedad,
  dataFeatured,
  type,
  line,
  isStepCard2TourGuideActive,
  isStepShowTourGuideActive,
  accessibility
}) => {
  const filterData = data
  const [indexBitestate, setindexBitestate] = useState(filterData.length)
  const [indexBitestateSecond, setindexBitestateSecond] = useState(0)
  const [arrayResult, setarrayResult] = useState([])
  const [arrayResultSecond, setarrayResultSecond] = useState([])
  const stateFinal = arrayResult
  const num1 = 5

  const getIdDiv = titleChanged => {
    return titleChanged
      ? titleChanged
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
      : ''
  }

  const getDataUserRedux = () => {
    let result = userData
    if (result) {
      if (result.userValue) {
        if (!Array.isArray(result.userValue)) {
          if (
            result.userValue.hasOwnProperty('category') &&
            result.userValue.hasOwnProperty('subcategory')
          ) {
            dispatch(addInfointernal(filterData))
            let indexBite = filterData.length
            setindexBitestate(indexBite)
          }
        } else {
          if (indexDBUser) {
            dispatch(addInfointernal(filterData))
            let indexBite = filterData.length
            setindexBitestate(indexBite)
          }
        }
      }
    }
  }

  useEffect(() => {
    orderSessionYouCantMiss(filterData)
    orderSessionYouCantMissSecond(filterData, dataBeneficio, dataNovedad)
  }, [filterData])

  const orderSessionYouCantMissSecond = (product, beneficio, novedad) => {
    const productsFilter = product.filter(
      itemR => itemR.relevancia === 'Relevancia Baja'
    )
    const productsArray = productsFilter.filter(
      item => item.tipoBite === 'producto'
    )
    const educationsArray = productsFilter.filter(
      item => item.tipoBite !== 'producto'
    )
    const arrayJoinAux = beneficio.concat(novedad)

    const arrayJoin = []
    arrayJoinAux.map(item => {
      if (dataFeatured) {
        if (
          !dataFeatured.slice(0, 6).find(bite => bite.titulo === item.titulo)
        ) {
          arrayJoin.push(item)
        }
      }
    })
    let dataFinalNew = []
    let validateOtherContent = true
    if (productsArray.length > 1 && educationsArray.length > 1) {
      dataFinalNew.push(productsArray[0])
      dataFinalNew.push(productsArray[1])
      dataFinalNew.push(educationsArray[0])
      dataFinalNew.push(educationsArray[1])
    } else if (educationsArray.length === 0 && productsArray.length > 0) {
      const limit = productsArray.length >= 4 ? 3 : productsArray.length
      for (let i = 0; i < limit; i++) {
        dataFinalNew.push(productsArray[i])
      }
    } else if (productsArray.length === 0 && educationsArray.length > 0) {
      const limit = educationsArray.length >= 4 ? 3 : educationsArray.length
      for (let i = 0; i < limit; i++) {
        dataFinalNew.push(educationsArray[i])
      }
    } else {
      for (let i = 0; i < 5 || i < arrayJoin.length; i++) {
        dataFinalNew.push(arrayJoin[i])
      }
      validateOtherContent = false
    }

    if (
      arrayJoin.length > 0 &&
      dataFinalNew.length < 6 &&
      validateOtherContent
    ) {
      const arrayBene = arrayJoin.filter(
        itemB => itemB.tipoContent === 'beneficio'
      )
      const arrayNove = arrayJoin.filter(
        itemN => itemN.tipoContent === 'novedad'
      )
      if (arrayBene.length > 0) {
        dataFinalNew.push(arrayBene[0])
      }
      if (arrayNove.length > 0) {
        dataFinalNew.push(arrayNove[0])
      }
    }
    dataFinalNew.sort(function(a, b) {
      return new Date(b.updatedAt) - new Date(a.updatedAt)
    })
    dataFinalNew = dataFinalNew.filter(itemFinal => itemFinal)
    setindexBitestateSecond(dataFinalNew.length)
    setarrayResultSecond(dataFinalNew)
  }
  const orderSessionYouCantMiss = orderSessionYouCantMissData => {
    orderSessionYouCantMissData = orderSessionYouCantMissData.filter(
      itemD => itemD.relevancia === 'Relevancia Media'
    )

    if (orderSessionYouCantMissData.length > 0) {
      let setnumProduct = 0
      let setnumProduct2 = 0
      let setnumEducativo = 0
      let setnumEducativo2 = 0
      let setnumother1 = 0
      let setnumother2 = 0

      let countProduct1 = 0
      let countProduct2 = 0
      let arrayProduct1 = []
      let arrayProduct2 = []
      let arrayProductSurplus = []
      let dataProduct = []

      let countEducativo1 = 0
      let countEducativo2 = 0
      let arrayEducativo1 = []
      let arrayEducativo2 = []
      let arrayEducativoSurplus = []
      let dataeducativo = []

      let dataactualidad = []
      let dataTalento = []
      let dataCorporativo = []
      let dataLeyesDecreto = []
      let dataMarketplace = []
      let dataNovedad = []
      let dataBeneficio = []
      let dataCampanas = []

      let countarrayOther1 = 0
      let countarrayOther2 = 0
      let arrayOther1 = []
      let arrayOther2 = []
      let arrayOtherSurplus = []
      let arrayOther = []

      orderSessionYouCantMissData.map(items => {
        if (items.tipoBite === 'producto') {
          dataProduct.push(items)
        }
        if (items.tipoBite === 'educativo') {
          dataeducativo.push(items)
        }
        if (items.tipoBite === 'actualidad') {
          dataactualidad.push(items)
        }
        if (items.tipoBite === 'Talento') {
          dataTalento.push(items)
        }
        if (items.tipoBite === 'CorporativoYAccionistas') {
          dataCorporativo.push(items)
        }
        if (items.tipoBite === 'LeyesYDecretos') {
          dataLeyesDecreto.push(items)
        }
        if (items.tipoBite === 'marketplace') {
          dataMarketplace.push(items)
        }
        if (items.tipoBite === 'novedad') {
          dataNovedad.push(items)
        }
        if (items.tipoBite === 'beneficio') {
          dataBeneficio.push(items)
        }
        if (items.tipoBite === 'campañas') {
          dataCampanas.push(items)
        }
        return null
      })

      dataProduct.map(product => {
        if (countProduct1 <= setnumProduct) {
          arrayProduct1.push(product)
          countProduct1 += 1
        } else if (countProduct2 <= setnumProduct2) {
          arrayProduct2.push(product)
          countProduct2 += 1
        } else {
          arrayProductSurplus.push(product)
        }
        return null
      })

      dataeducativo.map(educativo => {
        if (countEducativo1 <= setnumEducativo) {
          arrayEducativo1.push(educativo)
          countEducativo1 += 1
        } else if (countEducativo2 <= setnumEducativo2) {
          arrayEducativo2.push(educativo)
          countEducativo2 += 1
        } else {
          arrayEducativoSurplus.push(educativo)
        }
        return null
      })

      arrayOther = dataactualidad
        .concat(dataTalento)
        .concat(arrayProductSurplus)
        .concat(arrayEducativoSurplus)
        .concat(dataLeyesDecreto)
        .concat(dataCorporativo)
        .concat(dataMarketplace)
        .concat(dataNovedad)
        .concat(dataBeneficio)
        .concat(dataCampanas)

      arrayOther.sort(function(a, b) {
        return new Date(b.updatedAt) - new Date(a.updatedAt)
      })

      arrayOther.map(other => {
        if (countarrayOther1 <= setnumother1) {
          arrayOther1.push(other)
          countarrayOther1 += 1
        } else if (countarrayOther2 <= setnumother2) {
          arrayOther2.push(other)
          countarrayOther2 += 1
        } else {
          arrayOtherSurplus.push(other)
        }
        return null
      })

      let datafinal = []

      datafinal = arrayProduct1.concat(
        arrayEducativo1,
        arrayProduct2,
        arrayEducativo2,
        arrayOther1,
        arrayOther2
      )

      datafinal.sort(function(a, b) {
        return new Date(b.updatedAt) - new Date(a.updatedAt)
      })

      datafinal = datafinal.concat(arrayOtherSurplus)

      eliminarDataNull(datafinal)
    }
  }

  const eliminarDataNull = dataEliminarDataNull => {
    if (dataEliminarDataNull.length > 0) {
      setarrayResult(dataEliminarDataNull)
    }
  }

  useEffect(() => {
    getDataUserRedux()
  }, [filterData])

  return (
    <div className="container-SessionYouCantMiss">
      <div className="content">
        <ContainerTitleStyled className="NoTePuedesPerderContainer">
          <TitleSesion
            isDark={validateCurrentLine(line)}
            className={
              validateCurrentLine(line)
                ? 'NoTePuedesPerder-dark'
                : 'NoTePuedesPerder'
            }
            title={title ? title : 'Lo que no te puedes perder'}
            size={
              scaleText(accessibility.fontSize, SCALE_SIZE_30PX, 1).fontSize
            }
            padding={
              accessibility.fontSize > 2 || accessibility.lineSize > 6
                ? '0px 12px 0px 0px'
                : null
            }
            lineHeight={scaleLine(accessibility.lineSize)}
            addPadding={
              accessibility.fontSize > 2 || accessibility.lineSize > 4
            }
            whiteSpace={true}
          />
        </ContainerTitleStyled>
      </div>
      <div className="d-flex flex-column" style={{ width: '100%' }}>
        {stateFinal.length > 0 ? (
          <div>
            <YoucantmissComponent
              line={line}
              accessibility={accessibility}
              getF={getF}
              id="contendio-relevante"
              data={stateFinal}
              userData={userData}
              numBite={num1}
              index={indexBitestate}
              type={type}
            />
          </div>
        ) : null}
        {arrayResultSecond.length > 0 ? (
          <div
            className="d-flex flex-column"
            style={{
              marginTop: accessibility.lineSize > 8 ? 48 : 28,
              width: '100%'
            }}
          >
            <YoucantmissComponent
              line={line}
              getF={getF}
              accessibility={accessibility}
              id="contendio-complementario"
              data={arrayResultSecond}
              userData={userData}
              numBite={num1}
              index={indexBitestateSecond}
              type={type}
              isStepCard2TourGuideActive={isStepCard2TourGuideActive}
            />
          </div>
        ) : null}
      </div>
      {useCurrentWidth() > 1024 ? (
        <Anchor
          id="container-SessionYouCantMiss-btn-show-more"
          className={
            `noneTextDecoration btn-ver-mas ${
              line ? getClassGTMSeeMoreContentHOME(line?.category) : ''
            }` + (isStepShowTourGuideActive ? ' background-btn-tour-guide' : '')
          }
          href={
            getCurrentHost() +
            `/${getIdDiv(
              line?.type === 1 ? 'personas' : 'empresas'
            )}/${getIdDiv(line?.category)}/`
          }
        >
          <Button
            style={{ width: 192 }}
            classGtm={line ? getClassGTMSeeMoreContentHOME(line.category) : ''}
            dataTut="reactour__show"
            title={'Ver más contenidos'}
            className={validateCurrentLine(line) ? 'primary-dark' : 'primary'}
          />
        </Anchor>
      ) : null}
    </div>
  )
}

SessionYouCantMiss = connect()(SessionYouCantMiss)

const SessionYouCantMissComponent = ({
  data,
  getF,
  title,
  userData,
  indexDBUser,
  indexArrays,
  dataBeneficio,
  dataNovedad,
  dataFeatured,
  type,
  line,
  isStepCard2TourGuideActive,
  isStepShowTourGuideActive,
  accessibility
}) => {
  return (
    <div>
      <SessionYouCantMiss
        getF={getF}
        title={title}
        data={data}
        userData={userData}
        indexDBUser={indexDBUser}
        indexArrays={indexArrays}
        dataBeneficio={dataBeneficio}
        dataNovedad={dataNovedad}
        dataFeatured={dataFeatured}
        type={type}
        line={line}
        accessibility={accessibility}
        isStepCard2TourGuideActive={isStepCard2TourGuideActive}
        isStepShowTourGuideActive={isStepShowTourGuideActive}
      />
    </div>
  )
}

export default SessionYouCantMissComponent
