import Cart from './assets/cart3.svg'
import './CartWidget.css'
import { Link } from 'react-router-dom';

const CartWidget = ({ CartCount }) => {
    return (
        <Link to="/cart">
            <button className="cart-button btn btn-dark">
                <img src={Cart} id='cart' alt="Carrito" />
                Carrito <br />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CartCount}</span>
            </button>
        </Link>
    );
}

export default CartWidget