import './App.css';
import { useState } from 'react';
import Top from './Components/Top';
import Mid from './Components/Mid';
import Bot from './Components/Bot';
import item1 from './Components/Assets/item1.png';
import item2 from './Components/Assets/item2.png';

function App() {

  const [cartItems, setCartItems] = useState([
    {
      itemName: 'Dior Addict Lip Glow',
      itemPic: item1,
      stock: 'on stock',
      itemColor: 'pinkdefault',
      defaultItemPrice: 42.00,
      itemQuantity: 1,
      totalItemPrice: 42.00,
    },
    {
      itemName: 'Red Dior',
      itemPic: item2,
      stock: 'on stock',
      itemColor: 'reddefault',
      defaultItemPrice: 54.00,
      itemQuantity: 1,
      totalItemPrice: 54.00,
    }
  ]);

  const updateCartItem = (updatedItem) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.itemName === updatedItem.itemName ? { ...item, ...updatedItem } : item
      )
    );
  };

  const removeAllItems = () => {
    setCartItems([]);
  };

  return (
    <div className="App flex justify-center flex-col mx-16 my-20">
      <Top />
      <Mid cartItems={cartItems} setCartItems={setCartItems} removeAllItems={removeAllItems} updateCartItem={updateCartItem} />
      <Bot cartItems={cartItems} />
    </div>
  );
}

export default App;
