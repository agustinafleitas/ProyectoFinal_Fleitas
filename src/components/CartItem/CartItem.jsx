
const CartItem = ({ name, quantity, price }) => {
    return (
        <article>
            <header>
                <h3>{name}</h3>
            </header>
            <section>
                <p>Cantidad: {quantity}</p>
                <p>Precio por unidad: $ {price}</p>
            </section>
        </article>
    )
}

export default CartItem