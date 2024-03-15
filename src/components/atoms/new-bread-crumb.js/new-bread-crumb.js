import React from 'react'
import { camelize } from '../../../utils/general-utils'
import { ReactComponent as HomeIcon } from '../../../assets/images/home-icon.svg'
import { ReactComponent as SeparatorIcon } from '../../../assets/images/icono-bread-crumb.svg'
import Anchor from '../anchor/anchor'
import './new-bread-crumb.scss'

const NewBreadCrumb = props => {
  const blockClass = 'new-bread-crumb'

  return (
    <nav className={`${blockClass} ${blockClass}--desktop`}>
      <ol className={`${blockClass}__list`}>
        <li className={`${blockClass}__home-icon`}>
          <HomeIcon />
        </li>
        <li className={`${blockClass}__home-link`}>
          <Anchor
            className={`${blockClass}__active-link`}
            href={props.typeUser === 1 ? `${props.prefix}personas` : `${props.prefix}empresas`}
            target="_self"
            tabIndex="0"
          >
            Inicio
          </Anchor>
          <SeparatorIcon className={`${blockClass}__separator`} />
        </li>
        {props.breadCrumbElements.map((element, index) => {
          return (
            <li className={`${blockClass}__element`}>
              {element.url ? (
                <Anchor
                  className={`${blockClass}__active-link`}
                  href={element.url}
                >
                  {camelize(element.word)}
                </Anchor>
              ) : (
                <span className={`${blockClass}__text`}>
                  {camelize(element.word)}
                </span>
              )}
              {props.breadCrumbElements.length - 1 !== index ? (
                <SeparatorIcon className={`${blockClass}__separator`} />
              ) : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default NewBreadCrumb
