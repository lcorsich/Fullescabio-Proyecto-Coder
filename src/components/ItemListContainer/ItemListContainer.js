import "./ItemListContainer.css";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import { useState, useEffect } from "react";
import Itemlist from "../ItemList/Itemlist";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams} from 'react-router-dom'

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [cargando, setLoading] = useState(true)
  // console.log(products)
  
  const { categoryId } = useParams()

  useEffect(() => {

    if(!categoryId){
    getProducts().then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        setLoading(false)
      })
    }else{
      getProductsByCategory(categoryId).then((response) => {
        setProducts(response); 
        })
          .catch((error) => {
          console.log(error);
        })
          .finally(() => {
          setLoading(false)
        })
      }
      }, [categoryId]);
 
  console.log(products) // 
 
  if(cargando){
      return <h1>Cargando...</h1>
  }
  
  return (
    <div>
      <h1 className="titleList">{props.greeting}</h1>
      {products.length > 0 
      ? <Itemlist products={products}/> 
      : <h1>No hay productos</h1>}
    </div>
    
  );
};

export default ItemListContainer;
