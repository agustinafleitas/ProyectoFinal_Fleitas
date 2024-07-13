import { useEffect, useState } from "react";
import { getProductById, getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts().then((res)=>{
            setProducts(res)
        })
        .catch((err)=> console.log(err))
    }, [])

    return (
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <h2 className="display-4 text-info text-center border border-info p-3 rounded">{greetings}</h2>
                </div>
                <ItemList products={products}/>
            </div>
        </div>
        </>
    );
};

export default ItemListContainer;