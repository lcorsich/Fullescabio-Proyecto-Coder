import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContex";
import { Link } from "react-router-dom";

const ItemDetail = ({  id, name, img, category, description2, price, stock,}) => {
  const [quantityAddCart, setQuantityAddCart] = useState(0)
  const { addItem } = useContext(CartContext)

  const agregarCarro = (quantity) => {
    console.log(`se agregaron ${quantity} ${name}`)
    addItem({id, name, price, quantity})
    setQuantityAddCart(quantity)
    }



  // resibe por props el id y el nombre del producto
  return (
    <>
      <div className="cardItem">
        <header>
          <h2>{name}</h2>
        </header>
        <div className="ConteinerItem">
          <picture>
          <img className="datoImg" src={img} alt='' />
          </picture>
          <section>
            <div className="datoItem">
              <p> Categoria : {category}</p>
              <p> Descripción : {description2}</p>
              <p> Precio : {price}</p>
            </div>
            <div className="ItemCount">
              {quantityAddCart === 0 
              ? <ItemCount stock={stock} onAdd={agregarCarro}/>
              : <Link to='/cart'>Terminar Compra</Link>
              }
              </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
