import React from 'react'

const BackgroundImage = ({ src, opacity }) => (
  <img
    src={src}
    css={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      opacity: opacity
    }} />
)

export default BackgroundImage