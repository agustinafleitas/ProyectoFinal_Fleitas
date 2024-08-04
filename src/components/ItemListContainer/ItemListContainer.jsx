import { useEffect, useState } from "react";
import {getProductsByCategory } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const { id } = useParams ();

    useEffect(()=>{
        if(id) {
            getProductsByCategory(id)
            .then((res)=>{
                setProducts(res)
            })
            .catch((err)=> console.log(err))
        } else {
            getProductsByCategory(id)
            .then((res)=>{
                setProducts(res)
            })
            .catch ((err)=>console.log(err))
        }
    }, [id]);

    return (
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    {greetings && (
                    <h2 className="display-4 text-info text-center border border-info p-3 rounded">
                        {greetings}
                        </h2>
                    )}
                </div>
                <ItemList products={products}/>
            </div>
        </div>
        </>
    );
};

export default ItemListContainer;