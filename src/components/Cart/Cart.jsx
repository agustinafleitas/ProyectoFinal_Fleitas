import { useCart } from "../../hooks/useCart"


export const Cart = () => {
    const { cart, GetTotal, totalQuantity } = useCart()
    cons total = GetTotal()

    if (totalQuantity === 0) {
        return <h1>Aun no tienes productos en el carrito</h1>
    }
    return (
        <div>Cart</div>
    )
}

export default Cart
