import React from 'react'

const Hr = ( { color }) => {
  
  return (
    <div>
      <hr className={`border border-${color} border-1 w-20`}></hr>
    </div>
  )
}

export default Hr
