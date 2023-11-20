import React from 'react'

const NextPageButton = ( { pageNum, cartItems, updatePageNum }) => {

  const handleClick = () => {
    updatePageNum((prevPageNum) => (prevPageNum % 3) + 1);
  };

  return (
    <div className='flex justify-center'>
    {pageNum === 1 && cartItems.length !== 0 ? (
    <button
    onClick={handleClick}
    className='mt-10 w-75 h-10 bg-blackdefault rounded text-white text-base font-normal'>
      Continue to Payment
    </button>
    ) : pageNum === 2 ? (
      <button
      onClick={handleClick}
      className='mt-10 w-75 h-10 bg-blackdefault rounded text-white text-base font-normal'>
      Continue to Shipping
      </button>
    ) : pageNum === 3 ? (
      <button
      onClick={handleClick}
      className='mt-10 w-75 h-10 bg-blackdefault rounded text-white text-base font-normal'>
      Complete my order
      </button>
    ) : (
      null
    )
    }
    </div>
  )
}

export default NextPageButton
