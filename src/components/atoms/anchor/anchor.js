import React from 'react'

const Anchor = ({ href, children, ...props }) => {
  const getRelativePathFromUrl = () => {
    return href
  }

  const newUrl = href ? getRelativePathFromUrl() : '#'

  return (
    <a href={newUrl} {...props}>
      {children}
    </a>
  )
}

export default Anchor
