import React from 'react'

function Wrapper({ children }) {
  return (
    <div style = {{backgroundColor: 'pink', width: '400px', margin: '5px auto'}}>
      {children}
    </div>
  )
}

export default Wrapper
