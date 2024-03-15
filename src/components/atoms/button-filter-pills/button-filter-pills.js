import React from 'react'
import { ReactComponent as Chevron } from '../../../assets/images/chevron-right-blue.svg'
import './button-filter-pills.scss'
import Anchor from '../anchor/anchor'
import { SCALE_SIZE_16PX, scaleLine, scaleText } from '../../../utils/scaleText'

export default function ButtonFilterPills({ title, link, accessibility }) {
  return (
    <Anchor href={link} className={'noneTextDecoration'} tabIndex="0">
      <div
        className={`low-relevance-filter-all`}
        id="low-relevance-filter-reset"
        style={{
          fontSize: scaleText(accessibility && accessibility.fontSize, SCALE_SIZE_16PX, 1.5)
            .fontSize,
          lineHeight: scaleLine(accessibility && accessibility.lineSize)
        }}
      >
        <span>{title}</span>
        <Chevron />
      </div>
    </Anchor>
  )
}
