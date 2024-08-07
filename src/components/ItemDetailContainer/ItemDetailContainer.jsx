import { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import { useParams, useNavigate } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { DataBase } from '../../services/firebase'

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState (null);
  const [carga, setCarga] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=> {
    setCarga(true);
    setError(null);
    getDoc(doc(DataBase, "products", id))
    .then((querySnapshot)=>{
      if (querySnapshot.exists()) {
      const product = {id: querySnapshot.id, ...querySnapshot.data()}
      setProduct(product)
  } else {
    setError("Lo sentimos, el producto no se encuentra");
  }
})
    .catch((err) => {
      console.error(err);
      setError("Hubo un error al obtener el producto.");
    })
    .finally(()=> setCarga(false));
  }, [id])

  if (carga) {
    return <div className="loading-container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
              <div className="spinner-border custom-spinner"></div>
              <h3 className="loadingText mt-3">Cargando...</h3>
            </div>
  }

  return (
    <div className="item-detail-container">
      {error ? (
        <div className="error-message">
          <h2>{error}</h2>
          <button onClick={() => navigate('/')} className="btn-return">Volver al catálogo</button>
        </div>
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  )
}
