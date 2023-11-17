import React from 'react';
import Item from './Item';

const EmptyCartMessage = () => (
  <div className="bg-pinkdefault border rounded border-pinkdefault border-opacity-20 bg-opacity-10 text-center p-4">
    <p className="text-blackdefault text-lg mb-2">
      Your cart is empty. <br></br> Maybe you forgot 
      <a href="/shop" className="text-reddefault font-bold hover:underline ml-1 transition duration-300">this</a> ?
    </p>
  </div>
);

const ItemList = ({ cartItems, setCartItems, updateCartItem }) => {
  const removeItem = (itemNameToRemove) => {
    const updatedCartItems = cartItems.filter((item) => item.itemName !== itemNameToRemove);
    setCartItems(updatedCartItems);
  };

  return (
    <div className='mt-8'>
      {cartItems.length === 0 ? (
        <EmptyCartMessage />
      ) : (
        cartItems.map((item) => (
          <Item
            key={item.itemName}
            {...item}
            removeItem={removeItem}
            updateCartItem={updateCartItem}
          />
        ))
      )}
    </div>
  );
};

export default ItemList;


