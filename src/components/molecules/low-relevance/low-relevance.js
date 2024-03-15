import React from 'react'
import { Breakpoint } from 'react-socks'
import './low-relevance.scss'
import Desktop from './low-relevance-desktop/low-relevance-desktop'
import Mobile from './low-relevance-mobile/low-relevance-mobile'

export let LowRelevance = ({
  data,
  numBite,
  index,
  id,
  type,
  line,
  isStepCard2TourGuideActive,
  styleSliderCard,
  accessibility,
  viewTarjet,
  actionGA
}) => {
  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

  return (
    <div className="d-flex flex-column" style={{ width: '100%' }}>
      <Breakpoint customQuery="(max-width: 992px)">
        <Mobile
          accessibility={accessibility}
          styleSliderCard={styleSliderCard}
          isStepCard2TourGuideActive={isStepCard2TourGuideActive}
          idCarrusel={id}
          data={data}
          numBite={numBite}
          index={index}
          type={type}
          actionGA={actionGA}
          prefix={prefix}
        />
      </Breakpoint>
      <Breakpoint customQuery="(min-width: 993px)">
        <Desktop
          idCarrusel={id}
          data={data}
          numBite={numBite}
          index={index}
          type={type}
          line={line}
          styleSliderCard={styleSliderCard}
          accessibility={accessibility}
          isStepCard2TourGuideActive={isStepCard2TourGuideActive}
          viewTarjet={viewTarjet}
          actionGA={actionGA}
          prefix={prefix}
        />
      </Breakpoint>
    </div>
  )
}
