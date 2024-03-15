import React from 'react'
import './item-video.scss'

export default function ItemVideo({ video, isSelected, line }) {
  return (
    <div
      className={`container-item-video${isSelected ? '-selected' : ''}`}
      id="container-item-video"
    >
      <img
        id="container-item-video-img"
        className="container-item-video-img"
        src={video ? video.img.default.url : null}
      />
      <div className="container-item-video-text">
        <div
          style={
            isSelected
              ? { color: line === 'Inversión' ? '#292730' : '#0033A0' }
              : null
          }
          className={`container-item-video-text-title${
            isSelected ? '-selected' : ''
          }`}
        >
          {video ? video.title : ''}
        </div>
        <div className="container-item-video-text-label">Protección</div>
      </div>
    </div>
  )
}
