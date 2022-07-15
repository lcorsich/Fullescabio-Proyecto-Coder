import "./CartConteiner.css";
import { useContext } from "react";
import CartContext from "../../context/cartContex";
import CartList from "../CartList/CartList";
import { Link } from "react-router-dom";

const CartConteiner = () => {
  const { cart, totalQuantity, getTotal, clearCart } = useContext(CartContext);

  const total = getTotal();

  if (totalQuantity === 0) {
    return <h1>No hay Productos</h1>;
  }

  return (
    <div className="conteinerList">
      <div className="datoItem">
        <h1 className="titleProductAdd">Productos Agregados</h1>
        <div className="cartListConteiner">
          <CartList products={cart} />
        </div>
        <h3 className="totalCart">Total: ${total}</h3>
        <div className="btnsCart">
          <Link to="/checkout" className="btnOrderCart">
            Generar orden
          </Link>
          <br></br>
          <button className="btnCleanCart" onClick={clearCart}>
            Limpiar Carro
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartConteiner;
