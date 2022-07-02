import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom"; //retoma con una funcion, todos los parametos de una url con las asig

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(); // guardamos en un estado la
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", productId);

    getDoc(docRef)
      .then((doc) => {
        const productsFirebase = { id: doc.id, ...doc.data() };
        setProduct(productsFirebase);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    // getProductsById(productId).then(response => {
    //   setProduct(response)
    //   })
  }, [productId]);
  
  
  if (loading) {
    return <h1>Cargando...</h1>;
  }
  
  return (
    <>
      <h1>Detalle del Producto</h1>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailContainer;
