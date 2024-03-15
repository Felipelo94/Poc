import React from 'react'
import './step-tour-guide.scss'
import { ReactComponent as StepIcon } from '../../../assets/images/icon-step.svg'
import { ReactComponent as CloseModalIcon } from '../../../assets/images/close-x.svg'
import ContainerSlider from '../../atoms/container-slider/container-slider'
import Button from '../../atoms/button/button'
import arrow from '../../../assets/images/arrow-next.svg'
import arrowPrev from '../../../assets/images/arrow-prev.svg'
import { getSizeScreen } from '../../../utils/handleResize'
import { sendGaPush } from '../../../utils/classGtmUtil'

export default function StepTourGuide({
  title,
  current,
  description,
  closeEvent,
  goTo,
  alt,
  titleImage
}) {
  return (
    <div id="container-step-tour-guide" className="container-step-tour-guide">
      <div
        id="container-step-tour-guide-header"
        className="container-step-tour-guide-header"
      >
        <StepIcon alt={alt} title={titleImage} />
        <span className="container-step-tour-guide-header-title">{title}</span>
        <CloseModalIcon
          id="container-step-tour-guide-header-close"
          onClick={() => {
            closeEvent()
            sendGaPush('Home', 'ClicSuperior', 'CerrarTutorial')
          }}
          className="container-step-tour-guide-header-close gtmHomeSupTutCerrar"
          alt="icon-close-step-tour-header"
        />
      </div>

      <ContainerSlider
        showProgress={true}
        value={current}
        valuefinal={5}
        idContainer="container-step-tour-guide-body"
        className="container-step-tour-guide-body"
      >
        <p className="container-step-tour-guide-body-description">
          {description}
        </p>
        <div
          id="container-step-tour-guide-body-btns"
          className="container-step-tour-guide-body-btns"
        >
          {current > 1 ? (
            <Button
              id="-tg-prev"
              onClick={() => {
                goTo(current - 1 - 1)
              }}
              iconReverse={arrowPrev}
              style={{
                maxWidth: 92,
                padding: getSizeScreen() > 1024 ? '10px 8px' : '2px 4px',
                margin: '0px 12px 0px 0px',
                maxHeight: getSizeScreen() > 1024 ? null : 29,
                lineHeight: getSizeScreen() > 1024 ? null : '24px'
              }}
              classGtm={'gtmHomeSupTutAnt'}
              title={'Anterior'}
              className={`secondary`}
            />
          ) : null}

          {current >= 1 ? (
            <Button
              icon={arrow}
              id="-tg-next"
              onClick={() => {
                if (current === 5) {
                  closeEvent()
                } else {
                  goTo(current - 1 + 1)
                }
              }}
              style={{
                maxWidth: 100,
                padding: getSizeScreen() > 1024 ? '10px 8px' : '2px 8px',
                maxHeight: getSizeScreen() > 1024 ? null : 28,
                margin: getSizeScreen() > 1024 ? '8px 0px' : null
              }}
              classGtm={current === 5 ? 'gtmHomeSupTutFin' : 'gtmHomeSupTutSig'}
              title={current === 5 ? 'Finalizar' : 'Siguiente'}
              className={`primary`}
            />
          ) : null}
        </div>
      </ContainerSlider>
    </div>
  )
}
