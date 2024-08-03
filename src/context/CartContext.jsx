import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    console.log (cart)

    const IsInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    const addItem = (ProductToAdd) =>{
        if(!IsInCart (ProductToAdd.id)) {
            setCart( prev => [...prev, ProductToAdd])
        } else {
            console.error('El producto ya está en el carrito')
        }
    }

     {/*Video 1 hora con 18-20 minutos*/}
        

    const object = {cart, IsInCart, addItem}
    return (
        <CartContext.Provider value={object}>
            {children}
        </CartContext.Provider>
    )
}