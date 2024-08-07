import { createContext, useState } from "react";
import { DataBase } from "../services/firebase";
import { getDoc, doc } from "firebase/firestore";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const IsInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    //Obtener los productos en Firebase. Esto para verificar que hay stock de un producto, en el caso de no haber, se mostrará un mensaje de error y no se podrá agregar al carrito
    const addItem = async (ProductToAdd) =>{
        try {
            const productRef = doc(DataBase, "products", ProductToAdd.id);
            const productDoc = await getDoc(productRef);

            if (productDoc.exists()) {
                const dataDoc = productDoc.data();
                const StockDataBase = dataDoc.stock;

                if(StockDataBase >= ProductToAdd.quantity) {
                    const productWithDate = {
                        ...ProductToAdd,
                        dateAdded: new Date().toLocaleDateString(),
                    };

                    if (!IsInCart(ProductToAdd.id)) {
                        setCart((prev) => [...prev, productWithDate]);
                    } else {
                        console.error('El producto ya está en el carrito');
                    }
                } else {
                    setErrorMessage('No hay suficiente stock para agregar el producto al carrito.');
                    setTimeout(() => setErrorMessage(""), 3000); 
                } 
            } else {
                console.error("El producto no existe")
            }
        } catch (error) {
            console.error('Error al agregar el producto al carrito', error);
        }
    };

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
        ClearCart,
        errorMessage
    };

    return (
        <CartContext.Provider value={ value }>
            {children}
            {errorMessage && (
                <div>{errorMessage}</div>
            )}
        </CartContext.Provider>
    )
}