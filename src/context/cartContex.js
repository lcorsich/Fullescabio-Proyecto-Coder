import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, getCartQuantity] = useState(0);

  useEffect(() => {
    let totalQuantity = 0;

    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });
    getCartQuantity(totalQuantity);
  }, [cart]);

  // Cart
  const addItem = (productToAdd) => {
    if (!inCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    }
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((prod) => (total += prod.quantity * prod.price));
    return total;
  };

  const clearCart = () => {
    setCart([]);
  };

  const inCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItem = (id) => {
    const cartoutItem = cart.filter((prod) => prod.id !== id);
    setCart(cartoutItem);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, totalQuantity, getTotal, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
