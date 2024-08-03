import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ initial = 1, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount((prev) => prev + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount ((prev) => prev - 1);
        }
    };

    const handleAdd = () => {
        onAdd(count)
    };

    return (
        <div className="item-count">
            <button className="countDecrement-button" onClick={decrement}>-</button>
            <h5 className="count-display">{count}</h5>
            <button className="countIncrement-button" onClick={increment}>+</button>
            <button className="CartSend" onClick={handleAdd}>Agregar al carrito</button>
        </div>
    )
    
};

export default ItemCount