import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContex";
import { Link } from "react-router-dom";

const ItemDetail = ({
  id,
  name,
  img,
  category,
  description2,
  price,
  stock,
}) => {
  const [quantityAddCart, setQuantityAddCart] = useState(0);
  const { addItem } = useContext(CartContext);

  const agregarCarro = (quantity) => {
    console.log(`se agregaron ${quantity} ${name}`);
    addItem({ id, name, price, quantity });
    setQuantityAddCart(quantity);
  };

  return (
    <>
      <div className="container">
        <div className="ConteinerItem">
          <div className="imgcontainer">
            <img className="imgBx" src={img} alt="" />
          </div>
          <section>
            <div className="details">
              <div className="content">
                <div className="content_h">
                  <h2>{name}</h2>
                  <div className="content_p">
                    <p> Categoria : {category}</p>
                    <p> Descripción : {description2}</p>
                    <p className="formPrice"> {price}$ </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ItemCount">
              {quantityAddCart === 0 ? (
                <ItemCount stock={stock} onAdd={agregarCarro} />
              ) : (
                <Link to="/cart" className="btn_terminar_compra">
                  Terminar Compra
                </Link>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
