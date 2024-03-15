import React from 'react'
import { SCALE_SIZE_15PX, scaleLine, scaleText } from '../../../scaleText'

export const Paragraph = ({
  node,
  children,
  accessibilityInfo,
  fontSizeGlobal,
  lineHeightGlobal
}) => (
  <p
    style={{
      fontSize: accessibilityInfo
        ? scaleText(accessibilityInfo.fontSize, SCALE_SIZE_15PX, 1.5).fontSize
        : fontSizeGlobal,
      lineHeight: accessibilityInfo
        ? scaleLine(accessibilityInfo.lineSize)
        : lineHeightGlobal
    }}
    id="container-parrafo-content"
    className={
      node.content[0].marks[0]?.type === 'code' &&
      (node.content[0].value.includes('button') ||
        node.content[0].value.includes('container-parrafo--tsh'))
        ? 'container-parrafo--button'
        : 'container-parrafo__content'
    }
  >
    {children}
  </p>
)
