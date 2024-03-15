import React, { useEffect, useState } from 'react'
import { sendGaPush } from '../../../utils/classGtmUtil'
import useCurrentWidth from '../../../hooks/useCurrentWidth/useCurrentWidth'
import { ReactComponent as LeftArrowIcon } from '../../../assets/images/chevron-left-dark.svg'
import { ReactComponent as RightArrowIcon } from '../../../assets/images/chevron-right.svg'
import './navigation-bar.scss'

const NavigationBar = props => {
  const {
    options,
    setItemActive,
    indexActive,
    setIndexActive,
    dataBites,
    categoryGtm,
    actionGtm,
    setProductActive,
    onClick,
    investment
  } = props

  const [isLeftArrowActive, setIsLeftArrowActive] = useState(false)
  const [isRightArrowActive, setIsRightArrowActive] = useState(false)
  const currentWidth = useCurrentWidth()
  const isBrowser = typeof window !== 'undefined'
  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'
  const blockClass = 'navigation-bar'
  const investmentStyle = investment
    ? `${blockClass}__button--active-investment`
    : ''
  const leftArrowModifier = isLeftArrowActive
    ? ` ${blockClass}__left`
    : `--inactive`
  const rightArrowModifier = isRightArrowActive
    ? ` ${blockClass}__right`
    : `--inactive`

  const changeUrlParamsWhenActiveOptionChanges = option => {
    if (window.location.pathname !== prefix + `${option.UrlseoContenido}/`) {
      const nextTitle = option.nombre
      const nextState = { additionalInformation: 'Updated URL by navbar' }
      window.history.replaceState(
        nextState,
        nextTitle,
        prefix + `${option.UrlseoContenido}/`
      )
    }
  }

  const checkArrowElementsVisibility = () => {
    setIsRightArrowActive(false)
    setIsLeftArrowActive(false)
    const containerElement = document.getElementById(
      `${blockClass}__button-container`
    )
    const navBarElement = document.getElementById(blockClass)
    if (currentWidth > 1023) {
      if (containerElement.clientWidth >= currentWidth - 20) {
        setIsRightArrowActive(true)
        navBarElement.style.alignItems = 'flex-start'
      } else {
        setIsRightArrowActive(false)
        navBarElement.style.alignItems = 'center'
      }
    } else {
      setIsRightArrowActive(false)
      setIsLeftArrowActive(false)
    }
  }

  const changeActiveOption = (option, index) => {
    if (indexActive !== index) {
      setItemActive(option)
      setIndexActive(index)
      sendGaPush(categoryGtm, actionGtm, option.nombre)
      if (setProductActive) {
        setProductActive(option)
      }
      if (onClick && isBrowser) {
        onClick(dataBites[index], index)
        changeUrlParamsWhenActiveOptionChanges(option)
      }
      changeUrlParamsWhenActiveOptionChanges(option)
    }
  }

  const handleClickLeftArrow = () => {
    const navBarElement = document.getElementById(blockClass)
    setIsLeftArrowActive(false)
    setIsRightArrowActive(true)
    navBarElement.style.alignItems = 'flex-start'
    navBarElement.style.transition = 'align-items 5s'
  }

  const handleClickRightArrow = () => {
    const navBarElement = document.getElementById(blockClass)
    setIsLeftArrowActive(true)
    setIsRightArrowActive(false)
    navBarElement.style.alignItems = 'flex-end'
    navBarElement.style.transition = 'align-items 5s'
  }

  useEffect(() => {
    checkArrowElementsVisibility()
  }, [currentWidth])

  return (
    <>
      <div className={blockClass} id={blockClass}>
        <button
          className={`${blockClass}__arrows${leftArrowModifier}`}
          type="button"
          onClick={handleClickLeftArrow}
        >
          <LeftArrowIcon />
        </button>
        <div
          className={`${blockClass}__button-container`}
          id={`${blockClass}__button-container`}
        >
          {options &&
            options.map((option, index) => {
              const buttonModifier = indexActive === index ? '--active' : ''
              return (
                <button
                  className={`${blockClass}__button${buttonModifier} ${investmentStyle}`}
                  type="button"
                  key={index}
                  onClick={() => {
                    changeActiveOption(option, index)
                  }}
                >
                  <span className={`${blockClass}__text${buttonModifier}`}>
                    {option.nombre}
                  </span>
                </button>
              )
            })}
        </div>
        <button
          className={`${blockClass}__arrows${rightArrowModifier}`}
          type="button"
          onClick={handleClickRightArrow}
        >
          <RightArrowIcon />
        </button>
      </div>
    </>
  )
}

export default NavigationBar
