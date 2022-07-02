import "./ItemListContainer.css";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import { useState, useEffect } from "react";
import Itemlist from "../ItemList/Itemlist";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams} from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../services/firebase";


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]); // Inicia el estado vacio
  const [cargando, setLoading] = useState(true) // inicia estado en True
  // console.log(products)
  
  const { categoryId } = useParams()

  useEffect(() => { // se almacena en memoria - Se ejecuta luego del render 
    setLoading(true)
    
    const collectionRef = categoryId ? (
      query(collection(db,'products'), where ('category', '==', categoryId))
        ) : (collection(db, 'products') )
    
    getDocs(collectionRef).then(response => {
      const productsFirebase = response.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
    setProducts(productsFirebase)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

   }, [categoryId]) // si hay un cambio de categoryId, se ejecuta de nuevo
 
  // console.log(products) // 
 
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
