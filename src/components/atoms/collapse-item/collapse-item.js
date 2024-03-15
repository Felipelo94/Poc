import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { ReactComponent as DownChevron } from '../../../assets/images/chevron-down.svg'
import { ReactComponent as UpChevronWhite } from '../../../assets/images/chevron-up-white.svg'
import { clickWithScrollCenter } from '../../../utils/commons-event-content'
import Collapse from './../collapse/collapse'
import './collapse-item.scss'

const CollapseItem = ({
  id = 0,
  title,
  isOpenItem,
  children,
  setIsOpenItem,
  icon
}) => {
  useEffect(() => {
    if (isOpenItem && icon) {
      clickWithScrollCenter(document.getElementById(`collapse-item-${id}`))
    }
  }, [isOpenItem])

  return (
    <>
      <button
        id={`collapse-item-${id}`}
        className={`collapse-item ${isOpenItem ? 'collapse-item--active' : ''}`}
        onClick={setIsOpenItem}
      >
        <p id={`collapse-item-title-${id}`} className="collapse-item__title">
          {icon ? icon : null}
          {title}
        </p>
        {isOpenItem ? (
          <UpChevronWhite
            className="collapse-item__toggle-icon"
            id="collapse-item__toggle-icon"
            alt="Icono expandir footer"
            title="Icono expandir footer"
          />
        ) : (
          <DownChevron
            className="collapse-item__toggle-icon"
            id="collapse-item__toggle-icon"
            alt="Icono guardar footer"
            title="Icono guardar footer"
          />
        )}
      </button>
      <Collapse isOpen={isOpenItem} className="collapse-item__content">
        {children}
      </Collapse>
    </>
  )
}

CollapseItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  title: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default CollapseItem
