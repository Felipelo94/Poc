import React from 'react'
import './loader-icon.scss'

const LoaderIcon = ({ isDark }) => (
  <article className={'loader-spiner' + (isDark ? '-dark' : '')} />
)

export default LoaderIcon
