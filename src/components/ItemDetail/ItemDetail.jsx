import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState } from "react";

export const ItemDetail = ({name, img, category, description, stock, price}) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  
  return (
    <article className="item-detail">
      <div className="item-detail-img">
        <img src={img} alt={name} className="img-fluid rounded" />
      </div>
      <div className="item-detail-info">
        <h1 className="lead"><strong>{name}</strong></h1>
        <h3 className="price lead"> <strong>UYU {price}</strong></h3>
        <p className="category" hidden>Category: {category}</p>
        <p  className="description lead">{description}</p>
        <hr />
        
        {/*Agergar botones de "talla" unicamente a los elementos con categoria ropa*/}
        {category === "ropa" && (
          <div className="sizes">
            <h6 className="lead"><strong>Selecciona una talla:</strong></h6>
            <div className="size-buttons">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`size-button ${selectedSize === size ? "selected" : ""}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <p className="stock lead">Stock disponible: <strong>{stock}</strong></p>
        <div className="cart-container">
          <ItemCount stock={stock} />
          <button className="CartSend">Agregar al carrito</button>
        </div>
      </div>
    </article>
  )
}
