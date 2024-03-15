import React from 'react'
import './marketplace-scheduling.scss'
import { getSizeScreen } from '@utils/handleResize'

const MarketplaceScheduling = props => {
  const { salesforceImage, salesforceImageDescription } = props

  return (
    <div className="marketplace-scheduling">
      <div className="marketplace-scheduling__salesforce">
        <iframe
          src={`${process.env.PROSPECTS_UTM_URL}Marketplace`}
          width={getSizeScreen() <= 1024 ? '100%' : '670px'}
          height={getSizeScreen() <= 624 ? '1080px' : '695px'}
        />
      </div>
      <div className="marketplace-scheduling__salesforce-image">
        <figure>
          <img src={salesforceImage} alt={salesforceImageDescription} />
        </figure>
      </div>
    </div>
  )
}

export default MarketplaceScheduling
