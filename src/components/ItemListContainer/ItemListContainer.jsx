import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { DataBase } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams ();

    useEffect(()=>{
        setLoading(true);
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
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return (
            <h3>Cargando...</h3>
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