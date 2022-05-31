import "./ItemListContainer.css";
import { getProducts } from '../../asyncmock'
import { useState, useEffect } from "react";
import Itemlist from "../ItemList/Itemlist";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);
  // console.log(products)
  return (
    <div>
      <h1 class="titleList">{props.greeting}</h1>
      <Itemlist products={products}/>
    </div>
  );
};
export default ItemListContainer;
