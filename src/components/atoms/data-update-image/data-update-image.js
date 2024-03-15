import React, { useState, useEffect } from 'react'
import { getFormImage } from '../../../services/service-image-form/getImageForm'
import './data-update-image.scss'

const DataUpdateImage = props => {
  const { isPageForCompanies = false } = props

  const [imageInformation, setImageInformation] = useState(null)

  useEffect(() => {
    getFormImage(isPageForCompanies).then(res =>
      setImageInformation({
        url: res.fields.file.url,
        description: res.fields.description
      })
    )
  }, [])

  return (
    <figure className="update-data-image">
      <img
        className="update-data-image__image"
        src={imageInformation?.url}
        alt={imageInformation?.description}
      />
    </figure>
  )
}

export default DataUpdateImage
