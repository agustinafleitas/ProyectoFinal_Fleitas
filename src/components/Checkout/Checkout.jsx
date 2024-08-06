import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { DataBase } from "../../services/firebase";
import "./Checkout.css"

function Checkout() {
    const [carga, setCarga] = useState(false);
    const [ orderCreated, setOrderCreated] = useState (false);
    const [orderFailed, setOrderFailed] = useState (false);
    const [FormData, SetFormData] = useState({
        name: "",
        lastname:"",
        email:"",
        phone:"",
    })

    const { cart, totalQuantity, GetTotal } = useCart()
    const total = GetTotal()

    const handleInputChange = (event) => {
        SetFormData({
            ...FormData, [event.target.name]: event.target.value
        });
    };

    const createOrder = async (event) => {
        event.preventDefault();
        setCarga(true);
        setOrderCreated(false);
        setOrderFailed(false);

        try {
            const objOrder = {
                buyer: {
                    name: FormData.name,
                    lastname: FormData.lastname,
                    email: FormData.email,
                    phone: FormData.phone,
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date ()
            };

            const idCart = cart.map((item)=> item.id)
            
            const productsRef = collection(DataBase, "products")
            
            const productsFirestore = await getDocs(
                query(productsRef, where(documentId(), "in", idCart)));
            const { docs } = productsFirestore;
            const OutOfStock = []
            const batch = writeBatch(DataBase)

            docs.forEach((doc)=>{
                const dataDoc = doc.data()
                const StockDataBase = dataDoc.stock;
                const ProductInCart = cart.find((prod) => prod.id === doc.id)
                const ProductQuantity = ProductInCart?.quantity;

                    if (StockDataBase >= ProductQuantity){
                        batch.update(doc.ref, {stock: StockDataBase - ProductQuantity})
                    } else {
                        OutOfStock.push({id: doc.id, ...dataDoc})
                    }
                });

                if (OutOfStock.length === 0) {
                    await batch.commit()
                    const OrderRefe = collection(DataBase, "orders");
                    const OrderAdded = await addDoc(OrderRefe, objOrder);
                    console.log (`El ID de su orden es ${OrderAdded.id}`);
                    setOrderCreated(true)
                } else { 
                    setOrderFailed(true); 
                }

        } catch (error) {
            console.log("Error al crear la orden")
            setOrderFailed(true);
        } finally {
            setCarga(false)
        }
    };

    return (
        <>
        {carga && (
            <div className="loading-container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border custom-spinner"></div>
                <h3 className="loadingText mt-3">Cargando...</h3>
            </div>
        )}

        {orderCreated && !carga && <h1>La orden fue creada correctamente</h1>}

        {orderFailed && !carga && (
            <div className="alert alert-warning" role="alert">
                No quedan stock de algunos productos, por favor, vuelve a revisar el stock disponible
            </div>
        )}

        {!carga && !orderCreated && !orderFailed && (

        <div>
            <div>
                <h1>Checkout</h1>
                <p>Completa los siguientes campos para procesar tu compra</p>
            </div>
            <form onSubmit={createOrder}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleInputChange} required/>
                <input type="text" name="lastname" placeholder="Apellido" onChange={handleInputChange} required/>
                <input type="text" name="email" placeholder="Correo electrónico" onChange={handleInputChange} required/>
                <input type="number" name="phone" placeholder="Teléfono" onChange={handleInputChange} required/>

                <button className="btnSendInfo" type="submit">Envíar datos</button>
            </form>
        </div>
        )}
        </>
    );
}

export default Checkout