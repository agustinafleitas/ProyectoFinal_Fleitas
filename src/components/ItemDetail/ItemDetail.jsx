import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

export const ItemDetail = ({name, img, category, description, stock, price}) => {
  return (
    <article className="itemDetail">
        <h1>{name}</h1>
        <img src={img} style={{width:300}}/>
        <p>Category: {category}</p>
        <p>{description}</p>
        <p>{stock}</p>
        <h3>{price}</h3>
        <ItemCount stock={stock}/>
    </article>
  )
}
