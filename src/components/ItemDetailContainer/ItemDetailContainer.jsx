import { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { DataBase } from '../../services/firebase'

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState (null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(()=> {
    setLoading(true);
    getDoc(doc(DataBase, "products", id))
    .then((querySnapshot)=>{
      const product = {id: querySnapshot.id, ...querySnapshot.data()}
      setProduct(product)
    })
    .catch((err)=> console.log(err))
    .finally(()=> setLoading(false));
  }, [id])

  if (loading) {
    return <h3>Cargando productos, por favor espere...</h3>
  }
  return (
    <div>
      {product ? <ItemDetail {...product}/> : <p>Producto no encontrado.</p>} 
    </div>
  )
}
