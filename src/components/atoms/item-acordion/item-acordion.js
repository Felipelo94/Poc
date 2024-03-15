import React from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'
import './item-acordion.scss'
import { ReactComponent as PlusMenuIcon } from '../../../assets/images/plusplus-menu-blanco.svg'
import { ReactComponent as MinusMenuIcon } from '../../../assets/images/minusminus-menu-azul.svg'
import { ReactComponent as DownArrow } from '../../../assets/images/meal-section-down-arrow.svg'
import { ReactComponent as UpArrow } from '../../../assets/images/meal-section-up-arrow.svg'
import backgroud from '../../../assets/images/hover-icons.png'
import { ReactSVG } from 'react-svg'
import {
  scaleText,
  SCALE_SIZE_19PX,
  SCALE_SIZE_22PX
} from '../../../utils/scaleText'
import { useCurrentWidth } from 'react-socks'

export default function ItemAcordion({
  children,
  title,
  active,
  idItem,
  icon,
  line,
  titleH2,
  click,
  THS,
  classTitle = '',
  accessibility = {},
  fontSizeTitle = '',
  idIndex,
  widthTitle,
  showIconsMinusAndPlus = false,
  showArrows = true,
  clickOnItem,
  isNotMargin
}) {
  const width = useCurrentWidth()

  const itemAccordionClasses = `item-acordion-container ${
    isNotMargin ? 'isnotMargin' : ''
  } ${line === 'Inversión' ? 'item-acordion-container--inversion' : ''}`

  return (
    <div
      itemprop="mainEntity"
      itemScope
      itemtype="https://schema.org/Question"
      className={itemAccordionClasses}
      id={'item-acordion-container' + (idIndex ? '-' + idIndex : '')}
    >
      <button
        onClick={() => {
          click()
          if (clickOnItem) {
            clickOnItem()
          }
        }}
        className={`item-acordion-container-title ${
          active === idItem
            ? !icon
              ? 'item-acordion-container-title-active'
              : 'item-acordion-container-title-active-icon'
            : !icon
            ? 'item-acordion-container-title-inactive'
            : 'item-acordion-container-title-inactive-icon'
        }`}
        id={`item-acordion-container-title-${idItem}`}
        tabIndex="0"
      >
        <div
          onClick={() => {
            click()
          }}
          style={{ width: widthTitle }}
          className="item-acordion-container-title-width"
        >
          {icon ? (
            <div>
              {icon ? (
                THS ? (
                  <ReactSVG
                    className={`container-step-by-step-tags-title-value-container-imagen ${
                      THS
                        ? active === idItem
                          ? 'item-conteful-active'
                          : null
                        : null
                    }`}
                    style={
                      active === idItem
                        ? line === 'Inversión'
                          ? {
                              filter:
                                'invert(12%) sepia(7%) saturate(1467%) hue-rotate(213deg) brightness(0) contrast(100%)',
                              position: 'absolute',
                              left: 6
                            }
                          : { position: 'absolute' }
                        : null
                    }
                    src={
                      icon
                        ? icon.menuTags[idItem]
                          ? active === idItem
                            ? icon.menuTags[idItem].imagenActiva
                            : icon.menuTags[idItem].imagenInactive
                          : null
                        : null
                    }
                    title={`Ícono de ${title}`}
                    alt={icon.menuTags[idItem]?.alt}
                  />
                ) : (
                  <img
                    style={
                      active === idItem
                        ? line === 'Inversión'
                          ? {
                              filter:
                                'invert(12%) sepia(7%) saturate(1467%) hue-rotate(213deg) brightness(0) contrast(100%)',
                              position: 'absolute'
                            }
                          : { position: 'absolute' }
                        : null
                    }
                    className={`container-a-by-step-tags-title-value-container-imagen ${
                      THS
                        ? active === idItem
                          ? 'item-conteful-active'
                          : null
                        : null
                    }`}
                    alt="Ícono de una pieza de rompecabezas, al darle clic despliega información sobre el tema consultado"
                    title={'Ícono paso ' + idItem}
                    src={
                      icon
                        ? icon.menuTags[idItem]
                          ? active === idItem
                            ? icon.menuTags[idItem].imagenActiva
                            : icon.menuTags[idItem].imagenInactive
                          : null
                        : null
                    }
                    loading="lazy"
                  />
                )
              ) : null}
              {icon ? (
                active === idItem ? (
                  <img
                    alt="background"
                    src={backgroud}
                    className="background-img"
                  />
                ) : null
              ) : null}
            </div>
          ) : null}

          {titleH2 ? (
            <h2
              onClick={() => {
                click()
              }}
              className={`item-acordion-title item-acordion-title-${classTitle}`}
              itemprop="name"
              style={{
                fontSize:
                  fontSizeTitle ||
                  (width > 1024
                    ? scaleText(
                        accessibility?.fontSize ?? 18,
                        SCALE_SIZE_22PX,
                        1
                      ).fontSize
                    : 18)
              }}
            >
              {title}
            </h2>
          ) : (
            <h3
              onClick={() => {
                click()
              }}
              className="item-acordion-title"
              style={{
                fontSize:
                  fontSizeTitle ||
                  (width > 1024
                    ? scaleText(
                        accessibility?.fontSize ?? 16,
                        SCALE_SIZE_19PX,
                        1
                      ).fontSize
                    : 16)
              }}
              itemprop="name"
            >
              {title}
            </h3>
          )}
        </div>
        {showArrows && (active === idItem ? <UpArrow /> : <DownArrow />)}

        {showIconsMinusAndPlus &&
          (active === idItem ? <MinusMenuIcon /> : <PlusMenuIcon />)}
      </button>
      {active === idItem ? (
        <div
          itemprop="acceptedAnswer"
          itemScope
          itemtype="https://schema.org/Answer"
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scaleY: 0.75, translateY: -60 }}
              animate={{ opacity: 1, scaleY: 1, translateY: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      ) : null}
    </div>
  )
}

ItemAcordion.defaultProps = {
  clickOnItem: undefined
}

ItemAcordion.propTypes = {
  clickOnItem: PropTypes.func,
  fontSizeTitle: PropTypes.string
}
