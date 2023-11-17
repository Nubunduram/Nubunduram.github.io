import React, { useEffect, useState } from 'react';

const SubTotal = ({ cartItems }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculatedTotalQuantity = cartItems.reduce((total, item) => total + item.itemQuantity, 0);
    setTotalQuantity(calculatedTotalQuantity);

    const calculatedTotalPrice = cartItems.reduce((total, item) => total + item.totalItemPrice, 0);
    setTotalPrice(calculatedTotalPrice);

  }, [cartItems]);

  return (
    <div className='flex flex-col items-start text-blackdefault font-normal text-xs'>
      <div>
        Subtotal ({totalQuantity} articles)
      </div>
      <div>
        {totalPrice.toFixed(2)}€
      </div>
    </div>
  );
};

export default SubTotal;
