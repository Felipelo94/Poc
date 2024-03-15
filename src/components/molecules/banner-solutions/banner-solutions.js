import React, { useEffect, useState } from 'react'
import './banner-solutions.scss'
import useCurrentWidth from '../../../hooks/useCurrentWidth/useCurrentWidth'

const BannerSolutions = props => {
  const { id, title, description, imageUrl, mobileImageUrl } = props

  const [bannerImageSource, setBannerImageSource] = useState('')
  const screenWidth = useCurrentWidth()
  const investmentModifier =
    id === '6dfZBVzT68ZZPMcbVuBTTy' ? 'banner__title--investment' : ''

  useEffect(() => {
    setBannerImageSource(screenWidth >= 801 ? imageUrl : mobileImageUrl)
  }, [screenWidth, props])

  return (
    <section className="banner">
      <img className="banner__image" src={bannerImageSource} alt="Alt" />
      <h1 className={`banner__title ${investmentModifier}`}>{title}</h1>
      <p className="banner__description">{description}</p>
    </section>
  )
}

export default BannerSolutions
