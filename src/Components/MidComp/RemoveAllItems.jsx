import React from 'react';

const RemoveAllItems = ({ removeAllItems }) => {
  const handleRemoveAll = () => {
    removeAllItems();
  };

  return (
    <div className='mb-7 flex justify-end'>
    <button className="text-2xs font-medium underline text-graydefault" onClick={handleRemoveAll}>
      Remove All
    </button>
    </div>
  );
};

export default RemoveAllItems;

