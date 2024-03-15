import React from 'react'

export const Bold = ({ text }) => {
  return (
    <b
      className="container-parrafo__bold"
      id={`container-parrafo-bold-${text}`}
    >
      {text}
    </b>
  )
}
