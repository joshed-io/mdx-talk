import React from 'react'

const Header = ({ children }) => (
  <h3
    css={{
      margin: '25px auto',
      borderTop: '1px solid #ccc',
      borderBottom: '1px solid #ccc',
      padding: '10px 30px'
    }}>
    {children}
  </h3>
)

export default Header