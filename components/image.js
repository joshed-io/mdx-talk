import React from 'react'

const Image = ({ src, css }) => (
  <img
    src={src}
    css={{
      ...{
        width: '100%'
      }, ...css
    }} />
)

export default Image