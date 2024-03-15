import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonBite = () => {
  return (
    <div
      style={{
        height: 250,
        background: '#FFFFFF',
        borderRadius: '4px 4px 24px 4px'
      }}
    >
      <div
        style={{
          width: 420,
          height: 250,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ContentLoader>
          <rect x="0" y="30" rx="5" ry="5" width="100" height="100" />
          <rect x="120" y="10" rx="4" ry="4" width="300" height="18" />
          <rect x="120" y="40" rx="3" ry="3" width="250" height="10" />
          <rect x="120" y="60" rx="2" ry="2" width="250" height="10" />
          <rect x="120" y="80" rx="2" ry="2" width="250" height="10" />
          <rect x="120" y="100" rx="2" ry="2" width="250" height="10" />
          <rect x="120" y="120" rx="4" ry="4" width="250" height="30" />
        </ContentLoader>
      </div>
    </div>
  )
}

export default SkeletonBite
