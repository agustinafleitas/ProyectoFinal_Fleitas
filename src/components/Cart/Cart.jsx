import { useCart } from "../../hooks/useCart"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"


export const Cart = () => {
    const { cart, GetTotal, totalQuantity, ClearCart } = useCart()
    const total = GetTotal()

    if (totalQuantity === 0) {
        return <div>
                <h1>Aun no tienes productos en el carrito</h1>
                <Link to='/' className="Option">Ve a nuestro catalogo de productos para comenzar a agregar productos en tu carrito</Link>
            </div>
        
    }
    return (
        <div>
            {cart.map((item) =>(
                <CartItem key={item.id} {...item}/>
            ))}
            <h3>Total: $ {total}</h3>
            <div>
                <button onClick={ClearCart} className="btnClear">Limpiar carrito</button>
            </div>
            <div>
                <Link to="/Checkout" className="btnCheckout">Checkout</Link>
            </div>
        </div>
    )
}

export default Cart
