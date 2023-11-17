import PromoCode from './MidComp/PromoCode';
import RemoveAllItems from './MidComp/RemoveAllItems';
import SubTotal from './MidComp/SubTotal';
import ItemList from './MidComp/ItemList';

const Mid = ({setCartItems, removeAllItems, cartItems, updateCartItem}) => {

  return (
    <div>
      <div>
        <ItemList cartItems={cartItems} setCartItems={setCartItems} updateCartItem={updateCartItem} />
      </div>
      {cartItems.length > 0 && (
        <div>
          <RemoveAllItems removeAllItems={removeAllItems} />
          <div className='flex justify-between'>
            <SubTotal cartItems={cartItems} />
            <PromoCode />
          </div>
        </div>
      )}
    </div>
  );
};

export default Mid;
