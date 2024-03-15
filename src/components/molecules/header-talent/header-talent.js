import React from 'react'
import { useCurrentWidth } from 'react-socks'
import {
  scaleLine,
  scaleText,
  SCALE_SIZE_15PX,
  SCALE_SIZE_34PX
} from '../../../utils/scaleText'
import CallToAction from '../call-to-action/call-to-action'
import './header-talent.scss'

const HeaderTalent = ({
  title,
  subtitle,
  image,
  accessibility,
  callToActionSuperior,
  pageContext,
  type
}) => {
  const width = useCurrentWidth()
  return (
    <div className="header-talent-component" id="header-talent-component">
      <div
        className="header-talent-component-header"
        id="header-talent-component-header"
      >
        <div
          style={{
            fontSize: accessibility
              ? scaleText(accessibility.fontSize, SCALE_SIZE_34PX, 1.5).fontSize
              : 30
          }}
          className="header-talent-component-header-title"
          id="header-talent-component-header-title"
        >
          <span>{title}</span>
        </div>
        <div
          style={{
            lineHeight: accessibility
              ? scaleLine(accessibility.lineSize)
              : null,
            fontSize: accessibility
              ? scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1.5).fontSize
              : 30
          }}
          className="header-talent-component-header-descripcion"
          id="header-talent-component-header-descripcion"
        >
          <span>{subtitle}</span>
        </div>
        <CallToAction
          accessibility={accessibility}
          descripcion={''}
          titulo={callToActionSuperior ? callToActionSuperior.texto : null}
          link={callToActionSuperior ? callToActionSuperior.url : null}
          line={pageContext.line}
          lineGtm={pageContext.lineGtm}
          type={type}
          titleContent={title}
          callToActionSuperior={true}
        />
      </div>

      <div
        style={
          width < 1025 ? { display: 'flex', justifyContent: 'center' } : {}
        }
      >
        <img
          title={image ? image.title : null}
          src={
            image
              ? image.fluid
                ? image.fluid?.src ?? ''
                : image?.file?.url ?? ''
              : ''
          }
          alt={image ? image.description : null}
          style={width < 1025 ? { width: '350px', height: '350px' } : {}}
        />
      </div>
    </div>
  )
}

export default HeaderTalent
