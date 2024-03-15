import PropTypes from 'prop-types'
import React from 'react'
import { scaleText, SCALE_SIZE_15PX } from '../../../utils/scaleText'
import ItemAcordion from './../../atoms/item-acordion/item-acordion'
import './menu-meal-suboptions.scss'

const MenuMealSuboptions = ({
  idContainer,
  dataMenuSuboptions = [],
  accessibility = {},
  line,
  indexActiveMenu,
  indexActiveSuboption,
  onClickMenu,
  onClickSuboption
}) => {
  return (
    <div id={idContainer} className="container-meal-suboptions">
      <div className="menu-meal-suboptions">
        {dataMenuSuboptions.map(menu => {
          return menu.option.map(option => {
            return option.map(contentOption => {
              return (
                <ItemAcordion
                  accessibility={accessibility}
                  title={contentOption?.heading?.content?.[0]?.value ?? ''}
                  line={line}
                  idItem={contentOption?.index}
                  active={indexActiveMenu}
                  idIndex="menu-heading"
                  classTitle="option"
                  click={() => {
                    onClickMenu(contentOption?.index)
                  }}
                  showArrows={menu.subOptions.some(
                    suboption => suboption.length > 0
                  )}
                  showIconsMinusAndPlus={false}
                  fontSizeTitle={
                    scaleText(
                      accessibility?.fontSize ?? 16,
                      SCALE_SIZE_15PX,
                      1.5
                    ).fontSize
                  }
                >
                  {menu.subOptions.map(subOption => {
                    return subOption.map(contentSuboption => {
                      return (
                        <div
                          className={`${
                            contentOption?.index === indexActiveMenu &&
                            indexActiveSuboption === contentSuboption?.index
                              ? 'item-acordion-container-suboption item-acordion-container-suboption--active'
                              : 'item-acordion-container-suboption'
                          }`}
                        >
                          <button
                            onClick={() => {
                              onClickSuboption(contentSuboption?.index)
                            }}
                            className={`${
                              contentOption?.index === indexActiveMenu &&
                              indexActiveSuboption === contentSuboption?.index
                                ? 'item-acordion-suboption item-acordion-suboption--active'
                                : 'item-acordion-suboption'
                            }`}
                            style={{
                              fontSize: scaleText(
                                accessibility.fontSize,
                                SCALE_SIZE_15PX,
                                1.5
                              ).fontSize
                            }}
                          >
                            {contentSuboption?.heading?.content?.[0]?.value ??
                              ''}
                          </button>
                          <div className="item-acordion-suboption-separator" />
                        </div>
                      )
                    })
                  })}
                </ItemAcordion>
              )
            })
          })
        })}
      </div>
    </div>
  )
}

MenuMealSuboptions.propTypes = {
  idContainer: PropTypes.string.isRequired,
  dataMenuSuboptions: PropTypes.array,
  accessibility: PropTypes.object,
  line: PropTypes.string,
  indexActiveMenu: PropTypes.number,
  indexActiveSuboption: PropTypes.number,
  onClickMenu: PropTypes.func,
  onClickSuboption: PropTypes.func
}

export default MenuMealSuboptions
