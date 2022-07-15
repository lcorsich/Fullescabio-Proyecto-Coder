import { useContext } from "react";
import cartContex from "../../context/cartContex";
import "./CartItem.css";
const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem } = useContext(cartContex);

  const Remove = (id) => {
    removeItem(id);
  };

  return (
    <article>
      <header>
        <h3>{name}</h3>
      </header>
      <section>
        <h5>Cantidad: {quantity}</h5>
        <p>Precio: ${price}</p>
      </section>
      <footer>
        <p>Subtotal: ${price * quantity}</p>
        <button className="btnRemoveItem" onClick={() => Remove(id)}>X</button>
      </footer>
    </article>
  );
};

export default CartItem;
