import React from 'react'
import ContentLoader from 'react-content-loader'

export const DEFAULT_OPTIONS_SIZE_MOBILE = [0, 1, 2, 3]

const SkeletonMenuOptionMobile = () => {
  return (
    <ContentLoader height="67px" width="100%" viewBox="0 0 1024 60">
      <rect x="0" y="0" rx="5" ry="5" width="100%" height="60" />
    </ContentLoader>
  )
}

export default SkeletonMenuOptionMobile
