import React from 'react';
import NextPageButton from './BotComp/NextPageButton';

const Bot = ( { cartItems }) => {
  
  return (
    <div className='mt-10 bg-red-100'>
      <NextPageButton cartItems={cartItems} />
    </div>
  );
}

export default Bot;

