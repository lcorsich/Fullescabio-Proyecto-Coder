import './Cartwitget.css'
import { useContext } from 'react';
import CartContext from '../../context/cartContex';


const CartWitget = () => {
  const { totalQuantity } = useContext(CartContext)  // comparte el estado directamente
 
 
  return (
    <div className='cartWidget'>
      <img src="/images/cart.png" width='40px' alt="cart-witget"/>
      {totalQuantity  }
    </div>
  );
};

export default CartWitget;
