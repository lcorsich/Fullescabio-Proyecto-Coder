import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom"; //retoma con una funcion, todos los parametos de una url con las asig


const ItemDetailContainer = () => {
    const [product, setProduct] = useState() // guardamos en un estado la 
 
    const { productId } = useParams()

  useEffect(() => {
    getProductsById(productId).then(response => {
      setProduct(response)
      })
    }, [productId])

  return (
    <>
    <h1>Detalle del Producto</h1>
      <ItemDetail {...product}/>
    </>
  )
}

export default ItemDetailContainer;
