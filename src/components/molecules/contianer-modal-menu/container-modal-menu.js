import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './container-modal-menu.scss'
import { ReactComponent as IconMenu } from '../../../assets/images/icons/chevron-right.svg'
import { getCurrentHost } from '../../../utils/redirectUtil'
import { getIdDiv } from '../../../utils/redirect-bread-crumb'
import Anchor from '../../atoms/anchor/anchor'

const ContainerModalMenu = props => {
  const [optionActive, setoptionActive] = useState(null)
  const [optionDataActive, setoptionDataActive] = useState(null)
  const [optionActiveTwo, setoptionActiveTwo] = useState(null)
  const [optionDataActiveTwo, setoptionDataActiveTwo] = useState(null)
  const [optionActiveThree, setoptionActiveThree] = useState(null)

  return (
    <div
      className="container-content-modal-menu"
      id="container-content-modal-menu"
    >
      <div
        className="container-content-modal-menu-list"
        id="container-content-modal-menu-list"
      >
        <ul
          className={props.blackTheme ? 'menu inversiones-dark' : 'menu'}
          id="menu-container-modal"
        >
          {props.items.map((item, index) => {
            if (item.suboptions.length > 0) {
              return (
                <li
                  className={`container-content-modal-menu-list-sub-option gtmMenuLink`}
                  id="container-content-modal-menu-list-sub-option"
                >
                  <Anchor
                    href="#"
                    onMouseOver={() => {
                      setoptionActive(index)
                      setoptionDataActive(item.suboptions)
                    }}
                    onClick={() => {
                      setoptionActive(index)
                      setoptionDataActive(item.suboptions)
                    }}
                    onKeyDown={event => {
                      if (event.keyCode === 13) {
                        const element = document.getElementById(
                          'container-accessibility-menu-option-action'
                        )
                        if (element) {
                          element.focus()
                        }
                      }
                    }}
                    className={optionActive === index ? 'active' : ''}
                  >
                    <span>{item.description}</span>
                    <IconMenu className="manu-icon" />
                  </Anchor>
                </li>
              )
            } else {
              return (
                <li
                  className={`container-content-modal-menu-list-sub-option gtmMenuLink`}
                  id="container-content-modal-menu-list-sub-option"
                >
                  <Anchor
                    href={
                      item.url.includes('https:')
                        ? item.url
                        : `${getCurrentHost()}${getIdDiv(item.url)}`
                    }
                    target={item.url.includes('https:') ? '_blank' : '_self'}
                    onClick={() => {
                      setoptionActive(index)
                      setoptionDataActive(item.suboptions)
                    }}
                    onMouseOver={() => {
                      setoptionActive(index)
                      setoptionDataActive(item.suboptions)
                    }}
                    className={optionActive === index ? 'active' : ''}
                  >
                    {item.description}
                  </Anchor>
                </li>
              )
            }
          })}
        </ul>
        {optionDataActive && optionDataActive.length > 0 ? (
          <ul
            className={
              props.blackTheme ? 'submenu inversiones-dark' : 'submenu'
            }
            id="menu-container-modal"
          >
            {optionDataActive.map((i, ind) => {
              if (i.suboptions.length > 0) {
                return (
                  <li
                    className={`container-content-modal-menu-list-sub-option gtmMenuLink`}
                    id="container-content-modal-menu-list-sub-option"
                  >
                    <Anchor
                      href={
                        i.url.includes('https:')
                          ? i.url
                          : `${getCurrentHost()}${getIdDiv(i.url)}`
                      }
                      target={i.url.includes('https:') ? '_blank' : '_self'}
                      onMouseOver={() => {
                        setoptionActiveTwo(ind)
                        setoptionDataActiveTwo(i.suboptions)
                      }}
                      onClick={() => {
                        setoptionDataActiveTwo(i.suboptions)
                        setoptionActiveTwo(ind)
                      }}
                      className={
                        optionActiveTwo === ind
                          ? 'submenu-item active'
                          : 'submenu-item'
                      }
                    >
                      {i.description}
                      <IconMenu className="manu-icon" />
                    </Anchor>
                  </li>
                )
              } else {
                return (
                  <li
                    className={`container-content-modal-menu-list-sub-option gtmMenuLink`}
                    id="container-content-modal-menu-list-sub-option"
                  >
                    <Anchor
                      href={
                        i.url.includes('https:')
                          ? i.url
                          : `${getCurrentHost()}${getIdDiv(i.url)}`
                      }
                      target={i.url.includes('https:') ? '_blank' : '_self'}
                      onMouseOver={() => {
                        setoptionDataActiveTwo(i.suboptions)
                        setoptionActiveThree(ind)
                      }}
                      onClick={event => {
                        setoptionDataActiveTwo(i.suboptions)
                        setoptionActiveThree(ind)
                        props.onToggleModalSalesforce(event, i.id)
                      }}
                      className={optionActiveThree === ind ? 'active' : ''}
                    >
                      {i.description}
                    </Anchor>
                  </li>
                )
              }
            })}
          </ul>
        ) : null}
        {optionDataActiveTwo && optionDataActiveTwo.length > 0 ? (
          <ul
            className={
              props.blackTheme ? 'submenu inversiones-dark' : 'submenu'
            }
            id="menu-container-modal"
          >
            {optionDataActiveTwo.map((x, inde) => {
              return (
                <li
                  className={`container-content-modal-menu-list-sub-option gtmMenuLink`}
                  id="container-content-modal-menu-list-sub-option"
                >
                  <Anchor
                    href={
                      x.url.includes('https:')
                        ? x.url
                        : `${getCurrentHost()}${getIdDiv(x.url)}`
                    }
                    target={x.url.includes('https:') ? '_blank' : '_self'}
                    onMouseOver={() => {
                      setoptionActiveTwo(inde)
                    }}
                    onClick={() => {
                      setoptionActiveTwo(inde)
                    }}
                    className={optionActiveTwo === inde ? 'active' : ''}
                  >
                    {x.description}
                  </Anchor>
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

ContainerModalMenu.defaultProps = {
  width: 'auto',
  height: 'auto'
}

ContainerModalMenu.propTypes = {
  tittle: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired
}

export default ContainerModalMenu
