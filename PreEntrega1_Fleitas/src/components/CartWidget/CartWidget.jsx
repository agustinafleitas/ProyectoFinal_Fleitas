import Cart from './assets/cart3.svg'
import './CartWidget.css'

const CartWidget = ({ CartCount }) => {
    return (
        <div>
            <button className="cart-button">
                <img src={Cart} id='cart' alt="Carrito" />
                Carrito <br />
                <span className="cart-count">{CartCount}</span>
            </button>
        </div>
    );
}


export default CartWidget