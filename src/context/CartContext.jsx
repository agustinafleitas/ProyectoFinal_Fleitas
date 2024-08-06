import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    console.log (cart)

    const IsInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const addItem = (ProductToAdd) =>{
        if(!IsInCart (ProductToAdd.id)) {
            setCart((prev) => [...prev, ProductToAdd])
        } else {
            console.error('El producto ya está en el carrito')
        }
    } 

    const removeItem = (id) => {
        const cartUdapted = cart.filter((prod) => prod.id !== id)
        setCart(cartUdapted);
    }

    const ClearCart = () => {
        setCart([]);
    }
    
    const GetTotalQuantity = () => {
        let accu = 0;
        cart.forEach ((prod) => {
            accu += prod.quantity
        })
        return accu;
    }

    const GetTotal = () => {
        let accu = 0
        cart.forEach((item) => {
            accu += item.quantity * item.price
        })
        return accu
    }

    const totalQuantity = GetTotalQuantity();

    const value = { 
        cart, 
        IsInCart, 
        addItem, 
        totalQuantity, 
        GetTotal,
        removeItem,
        ClearCart 
    };

    return (
        <CartContext.Provider value={ value }>
            {children}
        </CartContext.Provider>
    )
}