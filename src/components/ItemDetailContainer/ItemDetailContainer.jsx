import { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { DataBase } from '../../services/firebase'

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState (null);
  const [carga, setCarga] = useState(true);
  const { id } = useParams();

  useEffect(()=> {
    setCarga(true);
    getDoc(doc(DataBase, "products", id))
    .then((querySnapshot)=>{
      const product = {id: querySnapshot.id, ...querySnapshot.data()}
      setProduct(product)
    })
    .catch((err)=> console.log(err))
    .finally(()=> setCarga(false));
  }, [id])

  if (carga) {
    return <div className="loading-container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
              <div className="spinner-border custom-spinner">

              </div>
            <h3 className="loadingText mt-3">Cargando...</h3>
            </div>
  }
  return (
    <div>
      {product ? <ItemDetail {...product}/> : <p>Producto no encontrado.</p>} 
    </div>
  )
}
