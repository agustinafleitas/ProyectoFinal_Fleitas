import { useCart } from "../../hooks/useCart"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import "./Cart.css"


export const Cart = () => {
    const { cart, GetTotal, totalQuantity, ClearCart, removeItem } = useCart()
    const total = GetTotal()

    if (totalQuantity === 0) {
        return <div className="empty-cart-container">
                <h1>Aun no tienes productos en el carrito</h1>
                <Link to='/' className="Option">Explora nuestro catálogo</Link>
            </div>
        
    }
    return (
        <div className="CartContainer">
            <h2 className="text-center display-3 font-weight-bold text-light bg-info py-3 px-4 rounded shadow-inner">Tu carrito</h2>
            {cart.map((item) =>(
                <div key={item.id} className="cart-item">
                    <CartItem key={item.id} {...item} onRemove={removeItem}/>
                    <p className="item-date">Fecha de compra: {item.dateAdded}</p>
                </div>
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
