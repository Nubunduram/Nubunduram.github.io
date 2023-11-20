import React from 'react';
import NextPageButton from './BotComp/NextPageButton';

const Bot = ( { cartItems, pageNum, updatePageNum }) => {
  
  return (
    <div className=''>
      <NextPageButton cartItems={cartItems} pageNum={pageNum} updatePageNum={updatePageNum}/>
    </div>
  );
}

export default Bot;

