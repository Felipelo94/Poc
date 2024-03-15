import React from 'react'
import TitleSection from '../../atoms/title-sesion/title-sesion'
import PropTypes from 'prop-types'
import './more-content.scss'

export default function MoreContent(props) {
  function renderRelationatedContent(index, child) {
    return (
      <div key={index} className="relationated-content__item">
        {child}
      </div>
    )
  }

  function renderChildren() {
    return props.children.map((value, index) => {
      return renderRelationatedContent(index, value)
    })
  }

  function renderChild() {
    return renderRelationatedContent(0, props.children)
  }

  return (
    <div className="more-content">
      <div className="more-content__title">
        <TitleSection
          isDark={true}
          className="default-title"
          title={props.title}
          tamaño="30px"
        />
      </div>
      {props.children && props.children.length > 0 && (
        <div className="relationated-content">{renderChildren()}</div>
      )}
      {props.children && props.children.length === undefined && (
        <div className="relationated-content">{renderChild()}</div>
      )}
    </div>
  )
}

MoreContent.defaultProps = {
  title: `Más contenidos`,
  options: [],
  children: [],
  subtitle: `Filtra los contenidos según tu interés:`
}

MoreContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
}
