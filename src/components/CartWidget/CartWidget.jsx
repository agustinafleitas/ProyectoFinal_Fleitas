import { useCart } from '../../hooks/useCart';
import Cart from './assets/cart3.svg'
import './CartWidget.css'
import { Link } from 'react-router-dom';

const CartWidget = ({ CartCount }) => {
    const {totalQuantity} = useCart()
    return (
        <Link to="/cart">
            <button className="cart-button btn btn-dark">
                <img src={Cart} id='cart' alt="Carrito" />
                Carrito <br />
                {totalQuantity > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalQuantity}
                    </span>
                )}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CartCount}</span>
            </button>
        </Link>
    );
}

export default CartWidget