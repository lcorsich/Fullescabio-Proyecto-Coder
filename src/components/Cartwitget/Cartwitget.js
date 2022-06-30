import './Cartwitget.css'
import { useContext } from 'react';
import CartContext from '../../context/cartContex';
import { Link } from 'react-router-dom';



const CartWitget = () => {
  const { totalQuantity } = useContext(CartContext)  // comparte el estado directamente
 
 
  return (
    <Link to='/cart' className='cartWidget'>
      <img src="/images/cart.png" width='40px' alt="cart-witget"/>
      {totalQuantity  }
    </Link>
  );
};

export default CartWitget;
