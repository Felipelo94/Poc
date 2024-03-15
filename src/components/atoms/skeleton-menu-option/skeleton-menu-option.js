import React from 'react'
import ContentLoader from 'react-content-loader'

export const DEFAULT_OPTIONS_SIZE = [0, 1, 2, 3, 4]

const SkeletonMenuOption = () => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        height: '120px',
        width: '80px'
      }}
    >
      <ContentLoader>
        <rect x="6" y="45" rx="0" ry="0" width="84" height="44" />
        <circle cx="49" cy="107" r="12" />
        <rect x="18" y="9" rx="0" ry="0" width="60" height="31" />
      </ContentLoader>
    </div>
  )
}

export default SkeletonMenuOption
