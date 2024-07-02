import Cart from './assets/cart3.svg'
import './CartWidget.css'

const CartWidget = ({ CartCount }) => {
    return (
        <div>
            <button className="cart-button btn btn-dark">
                <img src={Cart} id='cart' alt="Carrito" />
                Carrito <br />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CartCount}</span>
            </button>
        </div>
    );
}

export default CartWidget