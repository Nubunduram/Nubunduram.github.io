import React from 'react'

const NextPageButton = ( { cartItems }) => {
  
  const pageName = "payment";

  return (
    <div>
    {cartItems.length !== 0 ? (
    <button className='w-full h-10 bg-blackdefault rounded h-8 text-white text-base font-normal'>
      Continue to {pageName}
    </button>
    ) : <div></div>
    }
    </div>
  )
}

export default NextPageButton
