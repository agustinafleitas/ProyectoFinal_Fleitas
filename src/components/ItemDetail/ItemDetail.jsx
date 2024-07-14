import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

export const ItemDetail = ({name, img, category, description, stock, price}) => {
  return (
    <article className="item-detail">
      <div className="item-detail-img">
        <img src={img} alt={name} className="img-fluid rounded" />
      </div>
      <div className="item-detail-info">
        <h1>{name}</h1>
        <h3 className="price">Precio: UYU {price}</h3>
        <p className="category" hidden>Category: {category}</p>
        <p  className="description">{description}</p>
        <p className="stock">Stock disponible: <strong>{stock}</strong></p>
        
        <ItemCount stock={stock} />
        <button className="CartSend">Agregar al carrito</button>
      </div>
    </article>
  )
}
