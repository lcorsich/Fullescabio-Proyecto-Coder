
import CartItem from "../CartItem/CartItem"

const CartList = ({ products }) => {
    
    return (
        <div>
            { products.map(prod => <CartItem key={prod.id} {...prod}/>) }
        </div>
    )
}

export default CartList


