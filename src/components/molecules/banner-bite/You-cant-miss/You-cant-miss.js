import React from 'react'
import { connect } from 'react-redux'
import { Breakpoint } from 'react-socks'
import './You-cant-miss.scss'
import Desktop from './You-cant-miss-desktop/You-cant-miss-desktop'
import Mobile from './You-cant-miss-mobile/You-cant-miss-mobile'

export let Youcantmiss = ({
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
  return (
    <div
      className="d-flex flex-column container-you-cant-miss-item"
      style={{ width: '100%' }}
    >
      <Breakpoint
        customQuery="(max-width: 1024px)"
        className="container-you-cant-miss-res"
      >
        <Mobile
          accessibility={accessibility}
          styleSliderCard={styleSliderCard}
          isStepCard2TourGuideActive={isStepCard2TourGuideActive}
          line={line}
          idCarrusel={id}
          data={data}
          numBite={numBite}
          index={index}
          type={type}
          actionGA={actionGA}
        />
      </Breakpoint>
      <Breakpoint
        customQuery="(min-width: 1025px)"
        className="container-you-cant-miss-normal"
      >
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
        />
      </Breakpoint>
    </div>
  )
}

Youcantmiss = connect()(Youcantmiss)
const YoucantmissComponent = ({
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
  return (
    <div
      className="d-flex flex-column container-you-cant-miss-com"
      style={{ width: '100%' }}
    >
      {accessibility.lineSize > 6 || accessibility.fontSize > 2 ? (
        <>
          <br />
          <br />
        </>
      ) : null}
      <Youcantmiss
        data={data}
        numBite={numBite}
        index={index}
        id={id}
        type={type}
        line={line}
        isStepCard2TourGuideActive={isStepCard2TourGuideActive}
        styleSliderCard={styleSliderCard}
        accessibility={accessibility}
        viewTarjet={viewTarjet}
        actionGA={actionGA}
      />
    </div>
  )
}

export default YoucantmissComponent
