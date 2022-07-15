import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import Itemlist from "../ItemList/Itemlist";

import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [cargando, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsFirebase = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(productsFirebase);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (cargando) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      <h1 className="titleList">{props.greeting}</h1>
      {products.length > 0 ? (
        <Itemlist products={products} />
      ) : (
        <h1>No hay productos</h1>
      )}
    </div>
  );
};

export default ItemListContainer;
