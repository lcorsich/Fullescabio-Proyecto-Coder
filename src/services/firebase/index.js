// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore , getDoc, getDocs, collection, where, query, doc, addDoc, writeBatch, documentId} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain:  process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_essagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


////////////////////
const ColectionOrders = "orders";
const coleccionProductos = "productos";

const refColeccionOrdenes = collection(db, ColectionOrders);
const refColeccionProductos = collection(db, coleccionProductos);

export const guardarOrden = (orden) => {
  return añadirObjetoAFirestore(refColeccionOrdenes, orden);
};

export const guardarProducto = (producto) => {
  return añadirObjetoAFirestore(refColeccionProductos, producto);
};

const añadirObjetoAFirestore = (refCollection, objeto) => {
  return addDoc(refCollection, objeto);
};

export const getProductosCatalogo = (ids) => {
  return getDocumentosByID(ids, refColeccionProductos);
};

const getDocumentosByID = (ids, refColeccion) => {
  return getDocs(query(refColeccion, where(documentId(), "in", ids)));
};

export const confirmarOrden = (productosOrden) => {
  const batch = writeBatch(db);

  for (let prod of productosOrden) {
    batch.update(prod.referencia, { stock: prod.nuevoStock });
  }
  batch.commit();
};

const getProductosFormateados = (productosFirebase) => {
  const productosFormateados = productosFirebase.docs.map((prod) => {
    return { id: prod.id, ...prod.data() };
  });
  return productosFormateados;
};

export const getProductos = () => {
  return getDocs(refColeccionProductos).then((response) => {
    return getProductosFormateados(response);
  });
};

export const getProductosPorCategoria = (categoria) => {
  return getDocs(
    query(refColeccionProductos, where("categoria", "==", categoria))
  )
    .then((response) => {
      const prods = getProductosFormateados(response);
      return prods;
    })
    .catch((error) => {
      console.log("el error es en el getDocs por categoria es: " + error);
    });
};

export const getProductoPorId = (idProducto) => {
  return getDoc(doc(db, coleccionProductos, idProducto))
    .then((response) => {
      return { id: response.id, ...response.data() };
    })
    .catch((error) => {
      console.log("el articulo no existe: " + error);
    });
};
