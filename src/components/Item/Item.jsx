import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, name, img, category, price }) => {
  return (
    <article className="item">
      <div className="item-image-container">
        <img src={img} alt={name} className="item-image" />
      </div>
      <div className="item-info">
        <h3>{name}</h3>
        <p hidden>{category}</p>
        <p className="item-price">${price}</p>
        <Link to={`/detail/${id}`} className="btn btn-dark">
          Ver Detalles
        </Link>
      </div>
    </article>
  );
};
