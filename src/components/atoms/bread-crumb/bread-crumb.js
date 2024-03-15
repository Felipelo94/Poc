import React, { useEffect, useState } from 'react'
import { camelize } from '../../../utils/general-utils'
import { redirectBreadCrumb } from '../../../utils/redirect-bread-crumb'
import { ReactComponent as HomeIcon } from '../../../assets/images/home-icon.svg'
import { ReactComponent as SeparatorIcon } from '../../../assets/images/icono-bread-crumb.svg'
import Anchor from '../anchor/anchor'
import useCurrentWidth from '../../../hooks/useCurrentWidth/useCurrentWidth'
import './bread-crumb.scss'

const BreadCrumb = props => {
  const { location, defaultTypeUser = '', defaultCategoryUser = '' } = props

  const blockClass = 'bread-crumb'

  const isDesktop = useCurrentWidth() > 1024
  const [showFullBreadCumb, setShowFullBreadCrumb] = useState(isDesktop)

  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : `/${process.env.PATH_PREFIX}/`

  const pathElements = location?.pathname
    ?.toLowerCase()
    .split('/')
    .filter(element => element !== '')

  const breadCrumbElements = redirectBreadCrumb(
    pathElements,
    defaultTypeUser,
    defaultCategoryUser
  )
  const lastBreadCrumbElement = breadCrumbElements?.pop()

  useEffect(() => setShowFullBreadCrumb(isDesktop), [isDesktop])

  return (
    <nav className={`${blockClass} ${blockClass}--desktop`}>
      <ol className={`${blockClass}__list`}>
        <li className={`${blockClass}__home-icon`}>
          <HomeIcon />
        </li>
        <li className={`${blockClass}__home-link`}>
          <Anchor className={`${blockClass}__active-link`} href={prefix}>
            Inicio
          </Anchor>
          <SeparatorIcon className={`${blockClass}__separator`} />
        </li>
        {showFullBreadCumb ? (
          breadCrumbElements.map(element => {
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
                <SeparatorIcon className={`${blockClass}__separator`} />
              </li>
            )
          })
        ) : (
          <li className={`${blockClass}__button-container`}>
            <button
              className={`${blockClass}__button`}
              onClick={() => setShowFullBreadCrumb(true)}
            >
              •••
            </button>
          </li>
        )}
        <li className={`${blockClass}__last`}>
          <span className={`${blockClass}__text`}>
            {camelize(lastBreadCrumbElement?.word)}
          </span>
        </li>
      </ol>
    </nav>
  )
}

export default BreadCrumb
