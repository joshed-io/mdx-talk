// example Layout.js
import React from 'react'

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'tomato',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url('https://res.cloudinary.com/dzello/image/upload/q_auto,c_scale,w_1400/v1553105971/developermode/vincentiu-solomon-4602-unsplash')`
    }}>
    {children}
  </div>
)