import './App.css';
import { useState } from 'react';
import Top from './Components/Top';
import Mid from './Components/Mid';
import Mid3 from './Components/Mid3';
import Bot from './Components/Bot';
import item1 from './Components/Assets/item1.png';
import item2 from './Components/Assets/item2.png';
import App2 from './App2';

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

  const [pageNum, setPageNum] = useState(1);

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

  const updatePageNum = (newPageNum) => {
    setPageNum(newPageNum);
  };

  return pageNum === 1 ? (
    <div className="flex justify-center flex-col mx-16 my-20">
      <Top pageTitle="My items" pageName="Checkout" updatePageNum={updatePageNum}/>
      <Mid cartItems={cartItems} setCartItems={setCartItems} removeAllItems={removeAllItems} updateCartItem={updateCartItem} />
      <Bot cartItems={cartItems} pageNum={pageNum} updatePageNum={updatePageNum}/>
    </div>
  ) : pageNum === 2 ? (  
    <div>
      <App2 pageNum={pageNum} updatePageNum={updatePageNum} />
    </div>    
  ) : pageNum === 3 ? (
    <div className='items-center flex justify-center flex-col my-20'>
      <Top pageTitle="Shipping Method" pageName="Shipping" updatePageNum={updatePageNum}/>
      <Mid3 />
      <Bot cartItems={cartItems} pageNum={pageNum} updatePageNum={updatePageNum}/>
    </div>
  ) : (
    null
  )
}

export default App;
