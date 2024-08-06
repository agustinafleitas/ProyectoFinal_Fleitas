import { useCart } from "../../hooks/useCart"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import "./Cart.css"


export const Cart = () => {
    const { cart, GetTotal, totalQuantity, ClearCart, removeItem } = useCart()
    const total = GetTotal()

    if (totalQuantity === 0) {
        return <div>
                <h1>Aun no tienes productos en el carrito</h1>
                <Link to='/' className="Option">Ve a nuestro catalogo de productos para comenzar a agregar productos en tu carrito</Link>
            </div>
        
    }
    return (
        <div className="CartContainer">
            <h2 className="text-center display-3 font-weight-bold text-light bg-info py-3 px-4 rounded shadow-inner">Tu carrito</h2>
            {cart.map((item) =>(
                <CartItem key={item.id} {...item} onRemove={removeItem}/>
            ))}
            <h3 className="PriceTotal">Total: $ {total}</h3>
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
