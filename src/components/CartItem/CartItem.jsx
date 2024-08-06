import { useCart } from "../../hooks/useCart"
import "./CartItem.css"

const CartItem = ({ id, name, quantity, price, size, img }) => {
    const { removeItem } = useCart();
    return (
        <article className="ItemCart">
            <img src={img} alt={name} />
            <div className="ItemDetails">
                <div className="ItemInfo">
                    <h3>{name}</h3>
                    <p> {size ? `Tamaño: ${size}`: ""}</p>
                </div>
                <div className="ItemInfo">
                    <p>Cantidad: {quantity}</p>
                </div>
                <div className="ItemInfo">
                    <p>Precio por unidad: $ {price}</p>
                </div>
            </div>
            <button onClick={() => removeItem(id)} className="btnRemoveItem">Eliminar</button>
        </article>
    )
}

export default CartItem