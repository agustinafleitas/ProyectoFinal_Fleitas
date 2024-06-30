import Cart from './assets/cart3.svg'
import './CartWidget.css'

const CartWidget = ()=> {
    return(
        <div>
            <button className="cart-button">
                <img src={Cart} id='cart'/>
                Carrito
            </button>
        </div>
    )
}

export default CartWidget