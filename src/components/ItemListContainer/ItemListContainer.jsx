import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { DataBase } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./ItemListContainer.css"

const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([]);
    const [carga, setCarga] = useState(true);
    const { id } = useParams ();

    useEffect(()=>{
        setCarga(true);
        const collectionRef = id
        ? query(collection(DataBase, "products"), where("category", "==", id))
        : collection(DataBase, "products")

        getDocs(collectionRef)
        .then((querySnapshot)=>{
            console.log("querySnapshot:", querySnapshot);
            const products = querySnapshot.docs.map((doc)=>{
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
            console.log("Products fetched from Firebase:", products);
        })
        .catch(error => {
            console.log("Error fetching products:", error);
        })
        .finally(() => {
            setCarga(false);
        });
    }, [id]);

    if (carga) {
        return (
            <div className="loading-container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border custom-spinner">

                </div>
            <h3 className="loadingText mt-3">Cargando...</h3>
            </div>
        );
    }

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