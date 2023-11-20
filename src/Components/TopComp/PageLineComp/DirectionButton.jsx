import React from 'react';

const DirectionButton = ( { color, pageNumber, updatePageNum } ) => {
  const handleClick = () => {
    updatePageNum(pageNumber);
  };
  return (
    <div>
      <button
        onClick={handleClick} 
        className={`bg-${color} rounded-full h-3 w-3 flex items-center justify-center`}>
      </button>
    </div>
  )
}

export default DirectionButton
