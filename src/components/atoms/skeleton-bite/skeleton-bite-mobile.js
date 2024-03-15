import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonBiteMobile = () => {
  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '4px 4px 24px 4px',
        height: 250
      }}
    >
      <div
        style={{
          height: 250,
          width: 300,
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ContentLoader>
          <rect x="160" y="10" rx="5" ry="5" width="100" height="100" />
          <rect x="120" y="120" rx="3" ry="3" width="250" height="10" />
          <rect x="120" y="120" rx="2" ry="2" width="250" height="10" />
          <rect x="120" y="140" rx="4" ry="4" width="250" height="30" />
        </ContentLoader>
      </div>
    </div>
  )
}

export default SkeletonBiteMobile
