import { useCart } from "../../hooks/useCart"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"


export const Cart = () => {
    const { cart, GetTotal, totalQuantity } = useCart()
    const total = GetTotal()

    if (totalQuantity === 0) {
        return <h1>Aun no tienes productos en el carrito</h1>
    }
    return (
        <div>
            {cart.map((item) =>(
                <CartItem key={item.id} {...item}/>
            ))}
            <h3>Total: $ {total}</h3>
            <div>
                <button>Limpiar carrito</button>
            </div>
            <div>
                <Link to="/Checkout">Checkout</Link>
            </div>
        </div>
    )
}

export default Cart
