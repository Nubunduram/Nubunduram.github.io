import React from 'react';

const DirectionButton = ( {color} ) => {

  return (
    <div>
      <button className={`bg-${color} rounded-full h-3 w-3 flex items-center justify-center`}></button>
    </div>
  )
}

export default DirectionButton
