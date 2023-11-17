import React, { useState } from 'react';

const Item = ({ itemName, itemPic, stock, itemColor, defaultItemPrice, removeItem, updateCartItem }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [totalItemPrice, setTotalItemPrice] = useState(defaultItemPrice);

  const decrement = () => {
    if (itemQuantity > 1) {
      setItemQuantity((prevQuantity) => prevQuantity - 1);
      setTotalItemPrice((prevTotal) => prevTotal - defaultItemPrice);

      updateCartItem({
        itemName,
        itemQuantity: itemQuantity - 1,
        totalItemPrice: totalItemPrice - defaultItemPrice,
      });
    }
  };

  const increment = () => {
    setItemQuantity((prevQuantity) => prevQuantity + 1);
    setTotalItemPrice((prevTotal) => prevTotal + defaultItemPrice);

    updateCartItem({
      itemName,
      itemQuantity: itemQuantity + 1,
      totalItemPrice: totalItemPrice + defaultItemPrice,
    });
  };

  const handleRemoveItem = () => {
    removeItem(itemName);
  };

  console.log(itemColor)

  return (
    <div className='mb-6 flex justify-between'>
      <img className='w-33 h-100 rounded-lg' src={itemPic} alt={itemName} />
      <div className='flex flex-col justify-between ml-4 my-1 w-full'>
        <div>
          <div className='flex items-center justify-between'>
            <h1 className='text-blackdefault font-bold text-xs'>{itemName}</h1>
            <div className='border-b border-blackdefault w-2 flex hover:opacity-50 justify-center' >
              <button className='h-3' onClick={handleRemoveItem}>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3' height="12" viewBox="0 -960 960 960" width="12"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
              </button>
            </div>
          </div>
          <div className='text-2xs flex flex-col items-start'>
            <div className='flex items-center'>
              <div className={`mr-1 rounded-full h-2 w-2 bg-${itemColor}`}></div>color
            </div>
            <div>{stock}</div>
            <div>
              <input
                className='h-2 w-2 mr-1 accent-blackdefault'
                type='checkbox'
                name='gift'
                value='gift'
              />
              It's a gift
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex text-3xs'>
            <button onClick={decrement} className={itemQuantity === 1 ? 'text-graydefault' : ''}>-</button>
            <div className='px-1'>{itemQuantity}</div>
            <button onClick={increment}>+</button>
          </div>
          <div className='text-2xs'>{totalItemPrice.toFixed(2)}€</div>
        </div>
      </div>
    </div>
  );
};

export default Item
