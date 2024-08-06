
const CartItem = ({ name, quantity, price, size, img }) => {
    return (
        <article>
            <img src={img} alt={name} />
            <div>
                <h3>{name} - Talla: {size ? `Tamaño ${size}` : "No especificado"}</h3>
                <p>Cantidad: {quantity}</p>
                <p>Precio por unidad: $ {price}</p>
            </div>
        </article>
    )
}

export default CartItem