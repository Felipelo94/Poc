import React from 'react'
import PropTypes from 'prop-types'
import Titlesesion from '../../atoms/title-sesion/title-sesion'
import SubTitleSesion from '../../atoms/sub-title-sesion/sub-title-sesion'
import './header-session.scss'

export default function HeaderSession(props) {
  return (
    <div className="container-header-sesion" id="container-header-sesion">
      <div id="container-header-sesion-title">
        <Titlesesion
          className={props.className}
          title={props.title}
          size={props.tamaño}
          isDark={props.isDark}
        />
      </div>
      <div id="container-header-sesion-subtitle">
        <SubTitleSesion subtitle={props.subtitle} />
      </div>
    </div>
  )
}

HeaderSession.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
