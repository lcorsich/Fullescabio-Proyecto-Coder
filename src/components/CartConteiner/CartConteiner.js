import { useContext } from "react";
import CartContext from "../../context/cartContex";
import CartList from "../CartList/CartList"


const CartConteiner = () => {
  const { cart, totalQuantity } = useContext(CartContext)
  
  if(totalQuantity === 0){
    return <h1>No hay Productos</h1>
  }
  
  return (
    <div className="CartContainer">
      <div className="datoItem">
        <h1>CART LIST</h1>
        <CartList  products={cart}/>
        {/* <h3>Total: ${total}</h3> */}
      </div>
    </div>
  );
};

export default CartConteiner;
