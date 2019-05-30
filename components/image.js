import React from 'react'

const Image = ({ src, css }) => (
  <img
    src={src}
    css={{
      ...{
        // position: 'absolute',
      }, ...css
    }} />
)

export default Image