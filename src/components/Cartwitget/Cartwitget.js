import "./Cartwitget.css";
import { useContext } from "react";
import CartContext from "../../context/cartContex";
import { Link } from "react-router-dom";

const CartWitget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cartWidget">
      <img src="/images/cart.png" className="cartIcon" alt="cart-witget" />
      <p className="cartQuantity">{totalQuantity}</p>
    </Link>
  );
};

export default CartWitget;
