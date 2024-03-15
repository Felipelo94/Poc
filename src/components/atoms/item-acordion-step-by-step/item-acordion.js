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
  accessibility = {},
  title,
  idItem,
  showIconsMinusAndPlus = false,
  active,
  showArrows = true,
  icon,
  children,
  line,
  titleH2,
  click,
  clickOnItem,
  THS
}) {
  const itemAccordionClasses = `item-acordion-container ${
    line === 'Inversión' ? 'item-acordion-container--inversion' : ''
  }`

  const width = useCurrentWidth()

  return (
    <div
      itemScope
      itemprop="mainEntity"
      className={itemAccordionClasses}
      itemtype="https://schema.org/Question"
    >
      <button
        onClick={() => {
          click()
          if (clickOnItem) {
            clickOnItem()
          }
        }}
        tabIndex="0"
        id={`item-acordion-container-title-${idItem}`}
        className={`item-acordion-container-title ${
          active === idItem
            ? 'item-acordion-container-title-active-icon'
            : 'item-acordion-container-title-inactive-icon'
        }`}
      >
        <div
          onClick={() => {
            click()
          }}
          className="item-acordion-container-title-width"
        >
          {icon ? (
            <div>
              {icon ? (
                THS ? (
                  <ReactSVG
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
                    className={`container-step-by-step-tags-title-value-container-imagen ${
                      THS && active === idItem ? 'item-conteful-active' : null
                    }`}
                    title={`Ícono de ${title}`}
                    alt={icon.menuTags[idItem]?.alt}
                    src={
                      icon
                        ? icon.menuTags[idItem] && active === idItem
                          ? icon.menuTags[idItem].imagenActiva
                          : icon.menuTags[idItem]?.imagenInactive
                        : null
                    }
                  />
                ) : (
                  <img
                    className={`container-a-by-step-tags-title-value-container-imagen ${
                      THS && active === idItem ? 'item-conteful-active' : null
                    }`}
                    alt="Ícono de una pieza de rompecabezas, al darle clic despliega información sobre el tema consultado"
                    title={'Ícono paso ' + idItem}
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
                    src={
                      icon
                        ? icon.menuTags[idItem] && active === idItem
                          ? icon.menuTags[idItem].imagenActiva
                          : icon.menuTags[idItem]?.imagenInactive
                        : null
                    }
                  />
                )
              ) : null}
              {icon && active === idItem ? (
                <img
                  alt="background"
                  src={backgroud}
                  style={{ width: '80px', height: '64px' }}
                />
              ) : null}
            </div>
          ) : null}

          {titleH2 ? (
            <h2
              itemprop="name"
              className={`item-acordion-title item-acordion-title`}
              onClick={() => {
                click()
              }}
              style={{
                fontSize:
                  width > 1024
                    ? scaleText(
                        accessibility?.fontSize ?? 18,
                        SCALE_SIZE_22PX,
                        1
                      ).fontSize
                    : 18
              }}
            >
              {title}
            </h2>
          ) : (
            <h3
              onClick={() => {
                click()
              }}
              style={{
                fontSize:
                  width > 1024
                    ? scaleText(
                        accessibility?.fontSize ?? 16,
                        SCALE_SIZE_19PX,
                        1
                      ).fontSize
                    : 16
              }}
              className="item-acordion-title"
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
          itemtype="https://schema.org/Answer"
          itemScope
          itemprop="acceptedAnswer"
        >
          <AnimatePresence>
            <motion.div
              transition={{ duration: 0.3 }}
              animate={{ opacity: 1, scaleY: 1, translateY: 0 }}
              initial={{ opacity: 0, scaleY: 0.75, translateY: -60 }}
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
  clickOnItem: PropTypes.func
}
