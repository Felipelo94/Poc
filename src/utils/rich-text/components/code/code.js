import React from 'react'

export const Code = ({ text }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: text
      }}
    />
  )
}
