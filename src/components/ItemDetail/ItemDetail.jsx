import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState } from "react";
import { useCart } from "../../hooks/useCart";

export const ItemDetail = ({name, img, category, description, stock, price, id}) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [objectAdded, SetObjectAdded] = useState(null)
  const {addItem, IsInCart} = useCart()

  const handleOnAdd = (quantity) => {
    if (category === "ropa" || category === "collares") {
      if (!selectedSize) {
        alert ("Por favor, seleccione una talla");
        return;
      }
    }
    const ObjectToAdd = {
      id, 
      name, 
      price, 
      stock, 
      quantity,
      size: selectedSize,
      img
    }

    console.log(ObjectToAdd)
    console.log ('se ha agregado', quantity)
    SetObjectAdded(objectAdded)
    handleAdd (quantity)
  }

  const handleAdd = (count) => {
    const productObj = {
      id, 
      name, 
      price, 
      quantity: count,
      size: selectedSize,
      img
    }
    addItem(productObj)

  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  {/*Función para obtener la descripción de la talla seleccionada*/}
  const getSizeDescription = (size) => {
    switch (size) {
      case "S":
        return "pequeño";
      case "M":
        return "mediano";
      case "L":
        return "grande";
      case "XL":
        return "extra grande";
      default:
        return "";
    }
  };
  
  return (
    <article className="item-detail">
      <div className="item-detail-img">
        <img src={img} alt={name} className="img-fluid rounded" />
      </div>
      <div className="item-detail-info">
        <h1 className="lead"><strong>{name}</strong></h1>
        <p className="category lead">Categoria: {category}</p>
        <h3 className="price lead"> <strong>UYU {price}</strong></h3>
        <p  className="description lead">{description}</p>
        <hr />
        
        {/*Agergar botones de "talla" unicamente a los elementos con categoria ropa y collar*/}
        {(category === "ropa" || category === "collares") && (
          <div className="sizes">
            <div className="size-header">
              <h6 className="lead"><strong>Selecciona una talla:</strong></h6>
              {selectedSize && (
                <p className="selected-size">{getSizeDescription(selectedSize)}</p>
              )}
            </div>
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
          {IsInCart(id) ? (
            <footer>
              <Link className="FinalizePurchase" to="/cart">Finalizar compra</Link>
            </footer>
          ) : (
            <>
              <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
            </>
          )}
          
        </div>
      </div>
    </article>
  )
}
