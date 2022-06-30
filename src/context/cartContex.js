import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, getCartQuantity] = useState(0);

  // Total Cantidades
  // se usa el useEffect por que no se puede usar dentro del estado de cart, ya que no renderiza hasta terminar el cambio de estado
  useEffect(() => {
    // logica que extrae el total de las cantidades / para usar en cart
    let totalQuantity = 0;

    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });

    getCartQuantity(totalQuantity);
  }, [cart]); // indica que si cart tiene un cambio de estado, se ejecuta

  // Cart
  // logica en context que sirve para tomar productos que no tengan el mismo ID
  const addItem = (productToAdd) => {
    if (!inCart(productToAdd.id)) {
      // si no esta el carrito tal producto con tal ID...
      setCart([...cart, productToAdd]); // setea el estado
    }
  };
  console.log(cart)

  // Funcion para que sea mas legible la lógica de la funcion addItem
  const inCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  // Logica para filtrar un array de productos , sin tocar el array original
  const removeItem = (id) => {
    const cartoutItem = cart.filter((prod) => prod.id !== id);
    setCart(cartoutItem);
  };

  // retorna funciones para consumirlas en la app / concepto de context
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
