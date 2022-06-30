import { useContext } from "react";
import cartContex from "../../context/cartContex";

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem } = useContext(cartContex);

console.log(name)

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
        <button onClick={() => Remove(id)}>X</button>
      </footer>
    </article>
  );
};

export default CartItem;
