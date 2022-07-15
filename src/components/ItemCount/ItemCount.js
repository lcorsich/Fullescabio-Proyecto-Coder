import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="Counter">
      <div className="btnCount">
        <button className="btn" onClick={decrement}>
          -
        </button>
        <h4 className="numQuantity">{quantity}</h4>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button className="btnAddCart" onClick={() => onAdd(quantity)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
