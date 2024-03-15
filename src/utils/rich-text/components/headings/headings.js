import React from 'react'
import {
  SCALE_SIZE_26PX,
  SCALE_SIZE_30PX,
  scaleLine,
  scaleText
} from '@utils/scaleText'

export const Heading1 = ({ text, lineUser, accessibilityInfo }) => (
  <h1
    style={{
      color: lineUser === 'Inversión' ? '#292730' : '#0033a0',
      lineHeight: accessibilityInfo
        ? scaleLine(accessibilityInfo.lineSize + 5)
        : null,
      fontSize: accessibilityInfo
        ? scaleText(accessibilityInfo.fontSize, SCALE_SIZE_30PX, 1.5).fontSize
        : 30
    }}
    className="container-parrafo__title"
    id="container-parrafo-title"
  >
    {text}
  </h1>
)

export const Heading2 = ({ text, lineUser, accessibilityInfo, node }) => {
  return (
    <h2
      style={{
        color: lineUser === 'Inversión' ? '#292730' : '#0033a0',
        lineHeight: accessibilityInfo
          ? scaleLine(accessibilityInfo.lineSize + 9)
          : null,
        fontSize: accessibilityInfo
          ? scaleText(accessibilityInfo.fontSize, SCALE_SIZE_30PX, 1.5).fontSize
          : 30
      }}
      className="container-parrafo__title"
      id={`container-parrafo-title-${node.content[0].value}`}
    >
      {text}
    </h2>
  )
}

export const Heading3 = ({ text, lineUser, accessibilityInfo }) => (
  <h3
    style={{
      color: lineUser === 'Inversión' ? '#292730' : '#0033a0',
      lineHeight: accessibilityInfo
        ? scaleLine(accessibilityInfo.lineSize + 5)
        : null,
      fontSize: accessibilityInfo
        ? scaleText(accessibilityInfo.fontSize, SCALE_SIZE_26PX, 1.5).fontSize
        : 26
    }}
    className="container-parrafo__title"
    id="container-parrafo-title"
  >
    {text}
  </h3>
)

export const Heading4 = ({ text, lineUser, accessibilityInfo }) => (
  <h4
    style={{
      color: lineUser === 'Inversión' ? '#292730' : '#0033a0',
      lineHeight: accessibilityInfo
        ? scaleLine(accessibilityInfo.lineSize + 5)
        : null,
      fontSize: accessibilityInfo
        ? scaleText(accessibilityInfo.fontSize, SCALE_SIZE_26PX, 1.5).fontSize
        : 26
    }}
    className="container-parrafo__title"
    id="container-parrafo-title"
  >
    {text}
  </h4>
)

export const Heading5 = ({ text, lineUser, accessibilityInfo }) => (
  <h5
    style={{
      color: lineUser === 'Inversión' ? '#292730' : '#0033a0',
      lineHeight: accessibilityInfo
        ? scaleLine(accessibilityInfo.lineSize + 5)
        : null,
      fontSize: accessibilityInfo
        ? scaleText(accessibilityInfo.fontSize, SCALE_SIZE_26PX, 1.5).fontSize
        : 26
    }}
    className="container-parrafo__title"
    id="container-parrafo-title"
  >
    {text}
  </h5>
)

export const Heading6 = ({ text, lineUser, accessibilityInfo }) => (
  <h6
    style={{
      color: lineUser === 'Inversión' ? '#292730' : '#0033a0',
      lineHeight: accessibilityInfo
        ? scaleLine(accessibilityInfo.lineSize + 5)
        : null,
      fontSize: accessibilityInfo
        ? scaleText(accessibilityInfo.fontSize, SCALE_SIZE_30PX, 1.5).fontSize
        : 30
    }}
    className="container-parrafo__title"
    id="container-parrafo-title"
  >
    {text}
  </h6>
)
