import React from 'react'

export const Image = ({ node }) => {
  const size = node.data.target.fields?.file['en-US'].details.image

  return (
    <img
      className="container-parrafo__imagen"
      id={`img-fluid-parrafo-${
        node.data.target.fields ? node.data.target.fields.title['en-US'] : ''
      }`}
      src={node.data.target.fields?.file['en-US'].url}
      alt={node.data.target.fields?.title['en-US']}
      width="100%"
      height="100%"
      style={{
        maxWidth: size?.width,
        maxHeight: size?.height
      }}
    />
  )
}
