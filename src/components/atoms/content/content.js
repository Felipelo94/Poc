import React from 'react'
import './content.scss'
import PropTypes from 'prop-types'

export default function Content(props) {
  return (
    <div>
      <div
        id="StreetCard_title"
        className={
          props.type
            ? `StreetCard_title_validation ${props.classGtm}`
            : `StreetCard_title ${props.classGtm}`
        }
      >
        <span id="StreetCard_title_validation" className={props.classGtm}>
          {props.validation === 'StreetCard'
            ? props.title.length > 12
              ? props.title.replace(
                  props.title,
                  props.title.substring(0, 12).concat('...')
                )
              : props.title
            : props.title && props.title.length > 45
            ? props.title.replace(
                props.title,
                props.title.substring(0, 45).concat('...')
              )
            : props.title}
        </span>
      </div>
      <div
        className={'StreetCard_content_conatiner ' + props.classGtm}
        id="StreetCard_content_conatiner"
      >
        <div
          className={'StreetCard_content' + props.classGtm}
          id="StreetCard_content"
        >
          {props.content !== null ? (
            <span id="StreetCard_content-text" className={props.classGtm}>
              {props.validation === 'StreetCard'
                ? props.content.length > 80
                  ? props.content.replace(
                      props.content,
                      props.content.substring(0, 80).concat('...')
                    )
                  : props.content
                : props.content.length > 90
                ? props.content.replace(
                    props.content,
                    props.content.substring(0, 90).concat('...')
                  )
                : props.content}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  )
}

Content.defaultProps = {
  content: ''
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
}
