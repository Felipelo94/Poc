import React from 'react'
import RichText from '../../../utils/rich-text/rich-text'
import './portfolio-card.scss'

const PortfolioCard = ({ linkOfInterestFields, linkOfInterestClass }) => {
  return (
    <a
      className={`portfolio-card ${linkOfInterestClass}`}
      href={linkOfInterestFields.LinkCallToAction?.['en-US']}
    >
      {linkOfInterestFields.destacado?.['en-US'] && (
        <label className={`portfolio-card__label`}>
          {linkOfInterestFields.destacado?.['en-US']}
        </label>
      )}
      <img
        className={`portfolio-card__image ${linkOfInterestClass}`}
        src={linkOfInterestFields.imagen?.['en-US'].fields.file['en-US'].url}
        alt={
          linkOfInterestFields.imagen?.['en-US'].fields.file['en-US']
            .description
        }
      />
      <section className={`portfolio-card__information ${linkOfInterestClass}`}>
        <h3 className={`portfolio-card__title ${linkOfInterestClass}`}>
          {linkOfInterestFields.titulo?.['en-US']}
        </h3>
        <div className={`portfolio-card__description ${linkOfInterestClass}`}>
          <RichText
            text={linkOfInterestFields.descripcion?.['en-US']}
            lineHeight="19px"
            fontSize="13px"
          />
        </div>
        <button className={`portfolio-card__button ${linkOfInterestClass}`}>
          {linkOfInterestFields.TextoCallToAction?.['en-US']}
        </button>
      </section>
    </a>
  )
}

export default PortfolioCard
