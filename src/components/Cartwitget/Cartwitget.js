import './Cartwitget.css'
import { useContext } from 'react';
import CartContext from '../../context/cartContex';


const CartWitget = () => {
  const { getCartQuantity } = useContext(CartContext)

  const totalCantidades = getCartQuantity()

  return (
    <div className='cartWidget'>
      <img src="/images/cart.png" width='40px' alt="cart-witget"/>
      {totalCantidades}
    </div>
  );
};

export default CartWitget;
