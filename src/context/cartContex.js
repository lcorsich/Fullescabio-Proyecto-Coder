import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([])
    console.log(cart)
    
    // const addItem = (productsToAdd) => {
    //     if(!cart.some(prod => prod.id === productsToAdd.id)) 
    //       setCart([...cart, productsToAdd])
    //     }                  Se separa la logica para poder entender mejor 


    // logica en context que sirve para tomar productos que no tengan el mismo ID
    const addItem = (productToAdd) => {
        if(!inCart(productToAdd.id)){ // si no esta el carrito tal producto con tal ID...
            setCart([...cart, productToAdd]) // setea el estado
        }
    }

    const inCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }
    
    //

    // Logica para filtrar un array de productos , sin tocar el array original
    const removeItem = (id) => {
        const cartoutItem = cart.filter( prod => prod.id !== id) 
        setCart(cartoutItem)
    }

    // logica que extrae el total de las cantidades / para usar en cart
    const getCartQuantity = () => { 
        let totalCantidades = 0

        cart.forEach(prod => {
            totalCantidades += prod.quantity
        })
        return totalCantidades
    }

    // retorna funciones para consumirlas en la app / concepto de context
    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, getCartQuantity}}> 
            { children }
        </ CartContext.Provider>
        )
}

export default CartContext