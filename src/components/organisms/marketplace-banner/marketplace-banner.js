import React from 'react'
import Anchor from '../../atoms/anchor/anchor'
import styled from 'styled-components'
import './marketplace-banner.scss'

const MarketplaceBanner = props => {
  const {
    title,
    hasTitle,
    backgroundImage,
    mobileBackgroundImage,
    description,
    callToActionText,
    callToActionLink,
    idPrefix
  } = props

  const MarketplaceBanner = styled.div`
    background-image: url(${backgroundImage});

    @media (max-width: 426px) {
      background-image: url(${mobileBackgroundImage});
    }
  `

  return (
    <MarketplaceBanner className="marketplace-banner">
      {hasTitle && <h1 className="marketplace-banner__title">{title}</h1>}
      <p
        className="marketplace-banner__description"
        id={`${idPrefix}-marketplace-banner-description`}
      >
        {description}
      </p>
      {callToActionText && (
        <Anchor
          className="marketplace-banner__button"
          id={`${idPrefix}-marketplace-banner-cta`}
          href={callToActionLink}
        >
          {callToActionText}
        </Anchor>
      )}
    </MarketplaceBanner>
  )
}

export default MarketplaceBanner
