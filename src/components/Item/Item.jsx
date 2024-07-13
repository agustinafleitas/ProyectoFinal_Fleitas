import { Link } from "react-router-dom"


export const Item = ({id, name, img, category, price}) => {
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} style={{width:100}}/>
        <p>{category}</p>
        <h3>{price}</h3>
        <Link to={`/detail/${id}`}>Ver Detalles</Link>
        <hr />
    </article>
  )
}
