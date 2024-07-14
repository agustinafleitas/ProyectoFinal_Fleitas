import { Link } from "react-router-dom"
import "./Item.css"


export const Item = ({ id, name, img, category, price }) => {
  return (
    <article className="Item">
        <h1>{name}</h1>
        <img src={img} style={{width:100}} alt={name}/>
        <p>Category: {category}</p>
        <h3>{price}</h3>
        <Link to={`/detail/${id}`}>Ver Detalles</Link>
        <hr />
    </article>
  )
}
